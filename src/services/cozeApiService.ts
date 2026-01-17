/**
 * 扣子AI通信服务
 * 负责与扣子AI平台进行HTTP通信
 */
import type { CozeCommand } from '../types/command';
import type { EDAContext } from '../types/context';
import type { ConversationMessage, CozeApiMessage } from '../types/conversation';

/**
 * 扣子API服务配置
 */
interface CozeConfig {
	apiEndpoint: string;
	apiToken: string;
	botId: string;
}

/**
 * 扣子API服务类
 */
export class CozeApiService {
	private config: CozeConfig;
	private conversationId: string | null = null;

	constructor(config: CozeConfig) {
		this.config = config;
	}

	/**
	 * 更新配置
	 */
	updateConfig(config: Partial<CozeConfig>): void {
		if (config.apiEndpoint) this.config.apiEndpoint = config.apiEndpoint;
		if (config.apiToken) this.config.apiToken = config.apiToken;
		if (config.botId) this.config.botId = config.botId;
	}

	/**
	 * 发送消息到扣子AI
	 * @param userInput 用户输入的自然语言
	 * @param context EDA上下文信息
	 * @param history 对话历史
	 */
	async sendMessage(
		userInput: string,
		context: EDAContext,
		history: ConversationMessage[],
	): Promise<{ message: string; command?: CozeCommand; chatId?: string }> {
		try {
			// 验证配置
			if (!this.config.apiToken || !this.config.apiToken.trim()) {
				throw new Error('API Token未配置，请在设置中填写Token');
			}
			if (!this.config.botId || !this.config.botId.trim()) {
				throw new Error('Bot ID未配置，请在设置中填写Bot ID');
			}

			// 构建请求体
			const requestBody = this.buildRequestBody(userInput, context, history);

			// 发送HTTP请求 (使用v3 API)
			const response = await eda.sys_ClientUrl.request(`${this.config.apiEndpoint}/v3/chat`, 'POST', JSON.stringify(requestBody), {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${this.config.apiToken}`,
				},
			});

			// 解析响应
			const jsonResponse = JSON.parse(response);
			return this.parseResponse(jsonResponse);
		} catch (error) {
			console.error('[CozeApiService] Failed to send message:', error);
			throw new Error(`发送消息到扣子AI失败: ${error}`);
		}
	}

	/**
	 * 构建扣子API请求体
	 */
	private buildRequestBody(userInput: string, context: EDAContext, history: ConversationMessage[]): any {
		// 格式化上下文为系统消息
		const contextMessage = this.formatContextMessage(context);

		// 转换历史消息为扣子API格式
		const historyMessages = history
			.slice(-20) // 只保留最近20条
			.filter((msg) => msg.role !== 'system') // 过滤system消息
			.map((msg) => this.convertMessageToCozeFormat(msg));

		// 构建消息列表：上下文 + 历史消息 + 用户当前输入
		const messages = [
			// 添加上下文信息作为第一条消息
			{
				role: 'user',
				content: contextMessage,
				content_type: 'text',
			},
			...historyMessages,
			// 用户当前输入
			{
				role: 'user',
				content: userInput,
				content_type: 'text',
			},
		];

		return {
			bot_id: this.config.botId,
			user_id: 'eda_plugin_user', // v3 API使用user_id而非user
			stream: false,
			auto_save_history: true, // v3 API可选参数
			additional_messages: messages,
		};
	}

	/**
	 * 格式化上下文为可读字符串
	 */
	private formatContextMessage(context: EDAContext): string {
		const parts: string[] = [];

		parts.push('当前EDA上下文:');

		if (context.project) {
			parts.push(`- 项目: ${context.project.name || '无打开的项目'}`);
			if (context.project.description) {
				parts.push(`  描述: ${context.project.description}`);
			}
			if (context.project.isDirty) {
				parts.push(`  ⚠️ 有未保存的更改`);
			}
		}

		if (context.currentDocument) {
			const docType = context.currentDocument.type === 'sch' ? '原理图' : 'PCB';
			parts.push(`- 文档: ${docType} - ${context.currentDocument.name || '未命名'}`);
			if (context.currentDocument.isDirty) {
				parts.push(`  ⚠️ 有未保存的更改`);
			}
		}

		if (context.components) {
			parts.push(`- 器件总数: ${context.components.total}`);
			if (context.components.lastAdded) {
				parts.push(`- 最近添加: ${context.components.lastAdded.designator} - ${context.components.lastAdded.device_name}`);
			}
		}

		if (context.execution) {
			const successRate = Math.round((context.execution.successRate || 0) * 100);
			parts.push(`- 最近操作: ${context.execution.lastAction || '无'}`);
			parts.push(`- 执行成功率: ${successRate}%`);

			if (context.execution.errors.length > 0) {
				parts.push(`- 最近错误: ${context.execution.errors[context.execution.errors.length - 1].error}`);
			}
		}

		return parts.join('\n');
	}

	/**
	 * 转换对话消息为扣子API格式
	 */
	private convertMessageToCozeFormat(message: ConversationMessage): CozeApiMessage {
		let content = message.content;
		let contentType: 'text' | 'command' | 'result' = 'text';

		if (message.content_type === 'command' && message.command) {
			contentType = 'command';
			content = JSON.stringify(message.command);
		} else if (message.content_type === 'result') {
			contentType = 'result';
			content = message.content;
		}

		return {
			role: message.role === 'user' ? 'user' : 'assistant',
			content,
			content_type: contentType,
		};
	}

	/**
	 * 解析扣子API响应
	 */
	private parseResponse(response: any): { message: string; command?: CozeCommand; chatId?: string } {
		if (response.code !== 0) {
			throw new Error(`扣子API返回错误: ${response.message}`);
		}

		if (!response.data || !response.data.messages || response.data.messages.length === 0) {
			return { message: '扣子AI没有返回消息' };
		}

		// v3 API返回chat_id，用于标识会话
		const chatId = response.data.chat_id;
		if (chatId) {
			// 保存chat_id以维持会话连续性
			this.setConversationId(chatId);
		}

		// 获取assistant的回复消息
		const assistantMessages = response.data.messages.filter((msg: any) => msg.role === 'assistant');
		if (assistantMessages.length === 0) {
			return { message: '扣子AI没有返回消息', chatId };
		}

		const assistantMessage = assistantMessages[0];
		const message = assistantMessage.content;

		// 尝试从消息中提取JSON命令
		let command: CozeCommand | undefined;
		const commandMatch = message.match(/```json\n([\s\S]*?)\n```/s);

		if (commandMatch && commandMatch[1]) {
			try {
				command = JSON.parse(commandMatch[1]);

				// 移除消息中的JSON代码块,只保留纯文本
				const cleanMessage = message.replace(/```json\n[\s\S]*?\n```/g, '').trim();
				return { message: cleanMessage, command, chatId };
			} catch (error) {
				console.warn('[CozeApiService] Failed to parse command JSON:', error);
			}
		}

		return { message, command, chatId };
	}

	/**
	 * 保存会话ID
	 */
	setConversationId(conversationId: string): void {
		this.conversationId = conversationId;
	}

	/**
	 * 清除会话ID(开始新会话)
	 */
	clearConversationId(): void {
		this.conversationId = null;
	}

	/**
	 * 测试API连接
	 */
	async testConnection(): Promise<boolean> {
		try {
			// 验证配置
			if (!this.config.apiToken || !this.config.apiToken.trim()) {
				console.warn('[CozeApiService] API Token未配置');
				return false;
			}
			if (!this.config.botId || !this.config.botId.trim()) {
				console.warn('[CozeApiService] Bot ID未配置');
				return false;
			}

			const response = await eda.sys_ClientUrl.request(
				`${this.config.apiEndpoint}/v3/chat`,
				'POST',
				JSON.stringify({
					bot_id: this.config.botId,
					user_id: 'eda_plugin_test',
					stream: true,
					auto_save_history: false,
					additional_messages: [
						{
							role: 'user',
							content: '测试连接',
							content_type: 'text',
						},
					],
				}),
				{
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${this.config.apiToken}`,
					},
				},
			);

			const jsonResponse = JSON.parse(response);
			return jsonResponse.code === 0;
		} catch (error) {
			console.error('[CozeApiService] Connection test failed:', error);
			return false;
		}
	}

	/**
	 * 释放资源
	 * 在插件停用时调用
	 */
	dispose(): void {
		this.clearConversationId();
		console.log('[CozeApiService] Disposed');
	}
}
