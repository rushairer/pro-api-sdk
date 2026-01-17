/**
 * 入口文件
 *
 * 扣子AI电路设计助手 - 嘉立创EDA专业版插件
 * 实现与扣子AI平台的交互式对话,支持自然语言驱动的电路设计
 *
 * 如需了解更多开发细节,请阅读:
 * https://prodocs.lceda.cn/cn/api/guide/
 */
import * as extensionConfig from '../extension.json';
import { CommandExecutor } from './services/commandExecutor';
import { ContextService } from './services/contextService';
import { CozeApiService } from './services/cozeApiService';
import { StorageService } from './services/storageService';
import { MessageRole, MessageType } from './types/conversation';
import type { IFrameResponse, PluginRequest, SaveConfigData, SendMessageData } from './types/message';

// 全局服务实例
let contextService: ContextService | null = null;
let cozeApiService: CozeApiService | null = null;
let commandExecutor: CommandExecutor | null = null;
let currentIframeId: string | null = null;
let messageSubscription: any = null; // MessageBus订阅任务

/**
 * 插件激活函数
 * 当插件加载时由嘉立创EDA系统调用
 */
export function activate(): void {
	console.log('[CozeAI] Activating plugin...');

	// 初始化服务
	contextService = new ContextService();

	// 加载配置
	const config = StorageService.getConfig();
	cozeApiService = new CozeApiService({
		apiEndpoint: config.apiEndpoint,
		apiToken: config.apiToken,
		botId: config.botId,
	});

	commandExecutor = new CommandExecutor(contextService);

	// 恢复会话ID
	const savedConversationId = StorageService.getConversationId();
	if (savedConversationId) {
		cozeApiService.setConversationId(savedConversationId);
	}

	console.log('[CozeAI] Plugin activated successfully');
}

/**
 * 打开扣子AI对话面板
 */
export async function openCozePanel(): Promise<void> {
	try {
		activate();

		console.log('[CozeAI] Opening panel...');

		// 检查是否已有打开的面板
		if (currentIframeId) {
			// 关闭现有面板
			await eda.sys_IFrame.closeIFrame(currentIframeId);
		}

		// 打开新面板
		let success = await eda.sys_IFrame.openIFrame(
			'/iframe/index.html',
			400, // width
			700, // height
			'coze-panel', // id
			{
				maximizeButton: false,
			},
		);

		// 目前 eda.sys_IFrame.openIFrame 返回有问题
		success = true;
		if (success) {
			currentIframeId = 'coze-panel';
			console.log('[CozeAI] Panel opened successfully');
			// 初始化消息监听器
			setupMessageListener();
		} else {
			console.error('[CozeAI] Failed to open panel');
			eda.sys_Dialog.showInformationMessage('无法打开扣子AI面板，请重试', '错误');
		}
	} catch (error) {
		console.error('[CozeAI] Error opening panel:', error);
		eda.sys_Dialog.showInformationMessage(`打开面板失败: ${error instanceof Error ? error.message : String(error)}`, '错误');
	}
}

/**
 * 设置插件消息监听器
 * 使用嘉立创EDA消息总线监听来自IFrame的消息
 *
 * 消息协议:
 * - 接收格式: PluginRequest \{ type: string, data?: any \}
 * - 响应格式: IFrameResponse \{ type: string, data: any \}
 */
function setupMessageListener(): void {
	// 使用消息总线订阅插件内部消息,保存订阅引用以便后续取消
	messageSubscription = eda.sys_MessageBus.subscribePublic('coze_ai_plugin_message', async (message: PluginRequest) => {
		if (!message || !message.type) {
			console.warn('[CozeAI] Received invalid message:', message);
			return;
		}

		const { type, data } = message;
		console.log('[CozeAI] Received message:', type, data ? `with data` : '');

		try {
			switch (type) {
				case 'get_config':
					await handleGetConfig();
					break;

				case 'save_config':
					await handleSaveConfig(data as SaveConfigData);
					break;

				case 'get_history':
					await handleGetHistory();
					break;

				case 'clear_history':
					await handleClearHistory();
					break;

				case 'send_message':
					await handleSendMessage(data as SendMessageData);
					break;

				default:
					console.warn('[CozeAI] Unknown message type:', type);
					sendErrorToIFrame({
						type: 'error',
						data: { message: `Unknown message type: ${type}` },
					});
			}
		} catch (error) {
			console.error('[CozeAI] Error handling message:', error);
			sendErrorToIFrame({
				type: 'error',
				data: { message: error instanceof Error ? error.message : String(error) },
			});
		}
	});

	console.log('[CozeAI] Message listener setup completed');
}

/**
 * 处理获取配置请求
 * 从StorageService读取配置并发送到IFrame
 */
async function handleGetConfig(): Promise<void> {
	console.log('[CozeAI] Handling get_config request');

	const config = StorageService.getConfig();

	// 发送配置数据到前端
	sendToIFrame({
		type: 'config_loaded',
		data: config,
	});

	// 检查连接状态并通知前端
	const isConnected = config.apiToken && config.botId;
	sendToIFrame({
		type: 'connection_status',
		data: { status: isConnected ? 'online' : 'offline' },
	});

	console.log('[CozeAI] Config sent to IFrame, status:', isConnected ? 'online' : 'offline');
}

/**
 * 处理保存配置请求
 * 保存配置到StorageService,更新CozeApiService,测试连接
 * @param config - 配置对象 SaveConfigData
 */
async function handleSaveConfig(config: SaveConfigData): Promise<void> {
	console.log('[CozeAI] Handling save_config request');

	if (!config) {
		console.error('[CozeAI] No config data provided');
		sendErrorToIFrame({
			type: 'error',
			data: { message: '配置数据为空' },
		});
		return;
	}

	const success = await StorageService.saveConfig(config);

	if (success) {
		console.log('[CozeAI] Config saved successfully');

		// 更新API服务配置
		cozeApiService.updateConfig({
			apiEndpoint: config.apiEndpoint,
			apiToken: config.apiToken,
			botId: config.botId,
		});

		// 测试连接
		const testResult = await cozeApiService.testConnection();
		console.log('[CozeAI] Connection test result:', testResult);

		sendToIFrame({
			type: 'connection_status',
			data: { status: testResult ? 'online' : 'error' },
		});

		eda.sys_Dialog.showInformationMessage('配置已保存', '扣子AI插件配置已更新');
	} else {
		console.error('[CozeAI] Failed to save config');
		eda.sys_Dialog.showInformationMessage('无法保存配置,请重试', '保存失败');
		sendErrorToIFrame({
			type: 'error',
			data: { message: '保存配置失败' },
		});
	}
}

/**
 * 处理获取历史记录请求
 * 从StorageService读取历史记录并发送到IFrame
 */
async function handleGetHistory(): Promise<void> {
	console.log('[CozeAI] Handling get_history request');

	const history = StorageService.getHistory();

	sendToIFrame({
		type: 'history_loaded',
		data: history,
	});

	console.log('[CozeAI] History sent to IFrame, message count:', history.messages?.length || 0);
}

/**
 * 处理清空历史记录请求
 * 清空StorageService中的历史记录和会话ID
 */
async function handleClearHistory(): Promise<void> {
	console.log('[CozeAI] Handling clear_history request');

	const success = await StorageService.clearHistory();

	if (success) {
		// 清除会话ID
		await StorageService.clearConversationId();
		cozeApiService.clearConversationId();

		console.log('[CozeAI] History cleared successfully');
		eda.sys_Dialog.showInformationMessage('历史已清空', '对话历史已清除');
	} else {
		console.error('[CozeAI] Failed to clear history');
		eda.sys_Dialog.showInformationMessage('无法清空历史记录', '清除失败');
		sendErrorToIFrame({
			type: 'error',
			data: { message: '清空历史失败' },
		});
	}
}

/**
 * 处理发送消息请求
 * 这是核心业务逻辑:
 * 1. 获取EDA上下文
 * 2. 调用扣子AI API
 * 3. 保存消息和会话
 * 4. 如果有命令则执行
 *
 * @param data - SendMessageData { message: string }
 */
async function handleSendMessage(data: SendMessageData): Promise<void> {
	if (!data || !data.message) {
		console.error('[CozeAI] No message provided in send_message request');
		sendErrorToIFrame({
			type: 'error',
			data: { message: '消息内容为空' },
		});
		return;
	}

	const { message } = data;
	console.log('[CozeAI] Handling send_message request:', message.substring(0, 50) + '...');

	try {
		// 1. 获取EDA上下文
		console.log('[CozeAI] Building EDA context...');
		const context = await contextService.buildFullContext();
		console.log('[CozeAI] EDA Context ready');

		// 2. 获取对话历史
		const history = StorageService.getHistory();
		console.log('[CozeAI] History loaded, message count:', history.messages?.length || 0);

		// 3. 发送消息到扣子AI
		console.log('[CozeAI] Calling Coze AI API...');
		const response = await cozeApiService.sendMessage(message, context, history.messages);
		console.log('[CozeAI] AI response received');

		// 4. 保存会话ID
		if (response.chatId) {
			await StorageService.saveConversationId(response.chatId);
			console.log('[CozeAI] Conversation ID saved:', response.chatId);
		}

		// 5. 将AI响应添加到历史
		await StorageService.addMessage({
			id: `msg_${Date.now()}`,
			role: MessageRole.ASSISTANT,
			content_type: MessageType.TEXT,
			content: response.message,
			timestamp: Date.now(),
			command: response.command,
			command_id: response.command?.command_id,
		});

		// 6. 发送AI响应到IFrame
		sendToIFrame({
			type: 'ai_response',
			data: response,
		});
		console.log('[CozeAI] AI response sent to IFrame');

		// 7. 如果有命令,执行命令
		if (response.command) {
			console.log('[CozeAI] Command detected, executing:', response.command.command_id);
			await executeCommand(response.command);
		}
	} catch (error) {
		console.error('[CozeAI] Error in handleSendMessage:', error);
		sendErrorToIFrame({
			type: 'error',
			data: { message: error instanceof Error ? error.message : String(error) },
		});
	}
}

/**
 * 执行命令
 * 通过CommandExecutor执行EDA操作命令
 * @param command - 命令对象
 */
async function executeCommand(command: any): Promise<void> {
	console.log('[CozeAI] Executing command:', command.command_id);

	try {
		// 通知IFrame命令正在执行
		sendToIFrame({
			type: 'command_executing',
			data: { command_id: command.command_id },
		});

		// 执行命令
		const result = await commandExecutor.execute(command);
		console.log('[CozeAI] Command execution result:', result.success ? 'success' : 'failed');

		// 将结果添加到历史
		await StorageService.addMessage({
			id: `msg_${Date.now()}`,
			role: MessageRole.USER, // 结果作为用户消息发送,让AI知道执行结果
			content_type: result.success ? MessageType.RESULT : MessageType.ERROR,
			content: result.success
				? `[命令 ${command.command_id} 执行成功]\n数据: ${JSON.stringify(result.data, null, 2)}`
				: `[命令 ${command.command_id} 执行失败]\n错误: ${result.error}`,
			timestamp: Date.now(),
			command_id: command.command_id,
			result: result.data,
			error: result.error,
		});

		// 发送执行结果到IFrame
		sendToIFrame({
			type: 'command_result',
			data: {
				success: result.success,
				command_id: command.command_id,
				data: result.data,
				error: result.error,
			},
		});

		console.log('[CozeAI] Command result sent to IFrame');
	} catch (error) {
		console.error('[CozeAI] Error executing command:', error);
		sendErrorToIFrame({
			type: 'error',
			data: { message: error instanceof Error ? error.message : String(error) },
		});
	}
}

/**
 * 发送消息到IFrame
 * 使用消息总线发布消息给iframe
 * @param message - IFrameResponse { type: string, data: any }
 */
function sendToIFrame(message: IFrameResponse): void {
	// 使用消息总线发布消息
	eda.sys_MessageBus.publishPublic('coze_ai_iframe_message', message);
	console.log('[CozeAI] Message sent to IFrame:', message.type);
}

/**
 * 发送错误消息到IFrame
 * @param error - 错误响应 { type: 'error', data: { message: string } }
 */
function sendErrorToIFrame(error: IFrameResponse): void {
	console.error('[CozeAI] Sending error to IFrame:', (error.data as any).message);
	sendToIFrame(error);
}

/**
 * 插件停用函数
 * 当插件被禁用、卸载或程序退出时调用
 * 负责清理所有资源，防止内存泄漏
 */
export function deactivate(): void {
	console.log('[CozeAI] Deactivating plugin...');

	try {
		// 1. 关闭IFrame面板
		if (currentIframeId) {
			try {
				eda.sys_IFrame.closeIFrame(currentIframeId);
				console.log('[CozeAI] IFrame closed');
			} catch (error) {
				console.error('[CozeAI] Failed to close IFrame:', error);
			}
			currentIframeId = null;
		}

		// 2. 取消消息总线订阅
		if (messageSubscription) {
			try {
				// MessageBusTask可能有cancel或类似方法,这里使用常见模式
				if (typeof messageSubscription.cancel === 'function') {
					messageSubscription.cancel();
				} else if (typeof messageSubscription.unsubscribe === 'function') {
					messageSubscription.unsubscribe();
				}
				console.log('[CozeAI] MessageBus unsubscribed');
			} catch (error) {
				console.error('[CozeAI] Failed to unsubscribe MessageBus:', error);
			}
			messageSubscription = null;
		}

		// 3. 清理服务实例（按依赖倒序）
		if (commandExecutor) {
			try {
				commandExecutor.dispose();
			} catch (error) {
				console.error('[CozeAI] Failed to dispose CommandExecutor:', error);
			}
		}
		commandExecutor = null;

		if (cozeApiService) {
			try {
				cozeApiService.dispose();
			} catch (error) {
				console.error('[CozeAI] Failed to dispose CozeApiService:', error);
			}
		}
		cozeApiService = null;

		if (contextService) {
			try {
				contextService.dispose();
			} catch (error) {
				console.error('[CozeAI] Failed to dispose ContextService:', error);
			}
		}
		contextService = null;

		console.log('[CozeAI] Plugin deactivated successfully');
	} catch (error) {
		console.error('[CozeAI] Error during deactivation:', error);
	}
}

// 保留原有的about函数
export function about(): void {
	eda.sys_Dialog.showInformationMessage(
		eda.sys_I18n.text('EasyEDA extension SDK v', undefined, undefined, extensionConfig.version),
		eda.sys_I18n.text('About'),
	);
}
