/**
 * 对话历史类型定义
 * 定义对话消息的格式和历史管理
 */

/**
 * 消息角色枚举
 */
export enum MessageRole {
	USER = 'user',
	ASSISTANT = 'assistant',
	SYSTEM = 'system',
}

/**
 * 消息类型枚举
 */
export enum MessageType {
	TEXT = 'text',
	COMMAND = 'command',
	RESULT = 'result',
	ERROR = 'error',
}

/**
 * 对话历史消息接口
 */
export interface ConversationMessage {
	id: string;
	role: MessageRole;
	content_type: MessageType;
	content: string;
	timestamp: number;

	// 命令相关字段
	command?: any;
	command_id?: string;

	// 结果相关字段
	result?: any;
	error?: string;
}

/**
 * 对话历史管理器接口
 */
export interface ConversationHistory {
	messages: ConversationMessage[];
	conversationId: string;
	createdAt: number;
	lastUpdatedAt: number;
}

/**
 * 扣子API请求消息格式
 */
export interface CozeApiMessage {
	role: 'user' | 'assistant';
	content: string;
	content_type?: 'text' | 'command' | 'result';
}

/**
 * 扣子API响应格式
 */
export interface CozeApiResponse {
	code: number;
	message: string;
	data?: {
		messages: Array<{
			type: 'answer';
			content: string;
		}>;
		command?: any;
	};
}
