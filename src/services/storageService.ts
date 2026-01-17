/**
 * 本地配置和对话历史存储服务
 * 负责使用eda.sys_Storage API存储和读取配置数据
 */
import type { UserConfigContext } from '../types/context';
import type { ConversationHistory, ConversationMessage } from '../types/conversation';

/**
 * 插件配置接口
 */
export interface PluginConfig {
	apiEndpoint: string;
	apiToken: string;
	botId: string;
	maxHistorySize: number;
}

/**
 * 存储服务类
 */
export class StorageService {
	private static readonly DEFAULT_CONFIG: PluginConfig = {
		apiEndpoint: 'https://api.coze.cn',
		apiToken: 'pat_p7S4IhRA2aAeibBRuoUjITDuu1NokQrNqKnqLcYpZjjKYgucwasw89y5Vu8djmyw',
		botId: '7596297169787846666',
		maxHistorySize: 50,
	};

	private static readonly CONFIG_KEY = 'coze_plugin_config';
	private static readonly HISTORY_KEY = 'coze_conversation_history';
	private static readonly CONVERSATION_ID_KEY = 'coze_conversation_id';

	/**
	 * 获取插件配置
	 */
	static getConfig(): PluginConfig {
		try {
			const config = eda.sys_Storage.getExtensionUserConfig(this.CONFIG_KEY);

			if (config) {
				const parsed = JSON.parse(config);
				return { ...this.DEFAULT_CONFIG, ...parsed };
			}

			return { ...this.DEFAULT_CONFIG };
		} catch (error) {
			console.error('[StorageService] Failed to load config:', error);
			return { ...this.DEFAULT_CONFIG };
		}
	}

	/**
	 * 保存插件配置
	 */
	static async saveConfig(config: Partial<PluginConfig>): Promise<boolean> {
		try {
			const currentConfig = this.getConfig();
			const newConfig = { ...currentConfig, ...config };

			return await eda.sys_Storage.setExtensionUserConfig(this.CONFIG_KEY, JSON.stringify(newConfig));
		} catch (error) {
			console.error('[StorageService] Failed to save config:', error);
			return false;
		}
	}

	/**
	 * 重置配置为默认值
	 */
	static async resetConfig(): Promise<boolean> {
		return await this.saveConfig(this.DEFAULT_CONFIG);
	}

	/**
	 * 获取用户配置上下文(用于发送给扣子AI)
	 */
	static getUserConfigContext(): UserConfigContext {
		const config = this.getConfig();

		return {
			apiEndpoint: config.apiEndpoint,
			apiToken: config.apiToken ? '***已配置***' : undefined,
			botId: config.botId,
		};
	}

	/**
	 * 获取对话历史
	 */
	static getHistory(): ConversationHistory {
		try {
			const history = eda.sys_Storage.getExtensionUserConfig(this.HISTORY_KEY);

			if (history) {
				const parsed = JSON.parse(history);
				return {
					messages: parsed.messages || [],
					conversationId: parsed.conversationId,
					createdAt: parsed.createdAt || Date.now(),
					lastUpdatedAt: parsed.lastUpdatedAt || Date.now(),
				};
			}

			return {
				messages: [],
				conversationId: null,
				createdAt: Date.now(),
				lastUpdatedAt: Date.now(),
			};
		} catch (error) {
			console.error('[StorageService] Failed to load history:', error);
			return {
				messages: [],
				conversationId: null,
				createdAt: Date.now(),
				lastUpdatedAt: Date.now(),
			};
		}
	}

	/**
	 * 添加对话消息
	 */
	static async addMessage(message: ConversationMessage): Promise<boolean> {
		try {
			const history = this.getHistory();

			// 添加新消息
			history.messages.push(message);

			// 限制历史大小
			const maxSize = this.getConfig().maxHistorySize;
			if (history.messages.length > maxSize) {
				history.messages = history.messages.slice(-maxSize);
			}

			// 更新时间戳
			history.lastUpdatedAt = Date.now();

			// 保存
			const historyJson = JSON.stringify(history);
			return await eda.sys_Storage.setExtensionUserConfig(this.HISTORY_KEY, historyJson);
		} catch (error) {
			console.error('[StorageService] Failed to add message:', error);
			return false;
		}
	}

	/**
	 * 批量添加消息
	 */
	static async addMessages(messages: ConversationMessage[]): Promise<boolean> {
		try {
			const history = this.getHistory();

			// 批量添加
			history.messages.push(...messages);

			// 限制历史大小
			const maxSize = this.getConfig().maxHistorySize;
			if (history.messages.length > maxSize) {
				history.messages = history.messages.slice(-maxSize);
			}

			// 更新时间戳
			history.lastUpdatedAt = Date.now();

			return await eda.sys_Storage.setExtensionUserConfig(this.HISTORY_KEY, JSON.stringify(history));
		} catch (error) {
			console.error('[StorageService] Failed to add messages:', error);
			return false;
		}
	}

	/**
	 * 清空对话历史
	 */
	static async clearHistory(): Promise<boolean> {
		try {
			// 保留会话ID,只清空消息
			const history = this.getHistory();
			const clearedHistory: ConversationHistory = {
				messages: [],
				conversationId: history.conversationId,
				createdAt: history.createdAt,
				lastUpdatedAt: Date.now(),
			};

			return await eda.sys_Storage.setExtensionUserConfig(this.HISTORY_KEY, JSON.stringify(clearedHistory));
		} catch (error) {
			console.error('[StorageService] Failed to clear history:', error);
			return false;
		}
	}

	/**
	 * 获取会话ID
	 */
	static getConversationId(): string | null {
		try {
			const history = this.getHistory();
			return history.conversationId;
		} catch (error) {
			return null;
		}
	}

	/**
	 * 设置会话ID
	 */
	static async setConversationId(conversationId: string): Promise<boolean> {
		try {
			const history = this.getHistory();
			history.conversationId = conversationId;

			return await eda.sys_Storage.setExtensionUserConfig(this.HISTORY_KEY, JSON.stringify(history));
		} catch (error) {
			console.error('[StorageService] Failed to set conversation ID:', error);
			return false;
		}
	}

	/**
	 * 保存会话ID (别名方法,用于兼容)
	 */
	static async saveConversationId(conversationId: string): Promise<boolean> {
		return await this.setConversationId(conversationId);
	}

	/**
	 * 清除会话ID(开始新会话)
	 */
	static async clearConversationId(): Promise<boolean> {
		try {
			const history = this.getHistory();
			history.conversationId = null;
			history.createdAt = Date.now();

			return await eda.sys_Storage.setExtensionUserConfig(this.HISTORY_KEY, JSON.stringify(history));
		} catch (error) {
			console.error('[StorageService] Failed to clear conversation ID:', error);
			return false;
		}
	}

	/**
	 * 导出对话历史为JSON
	 */
	static exportHistory(): string {
		const history = this.getHistory();
		return JSON.stringify(history, null, 2);
	}

	/**
	 * 获取存储使用情况
	 */
	static getStorageInfo(): {
		configSize: number;
		historySize: number;
		totalSize: number;
	} {
		try {
			const config = eda.sys_Storage.getExtensionUserConfig(this.CONFIG_KEY);
			const history = eda.sys_Storage.getExtensionUserConfig(this.HISTORY_KEY);

			const configSize = config ? config.length : 0;
			const historySize = history ? history.length : 0;

			return {
				configSize,
				historySize,
				totalSize: configSize + historySize,
			};
		} catch (error) {
			console.error('[StorageService] Failed to get storage info:', error);
			return { configSize: 0, historySize: 0, totalSize: 0 };
		}
	}
}
