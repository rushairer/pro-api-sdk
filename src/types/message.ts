/**
 * 消息协议类型定义
 * 定义前端(IFrame)和后端(Plugin)之间的通信协议
 */

/**
 * 前端→后端的请求消息类型
 */
export type PluginRequestType =
	| 'get_config' // 获取配置
	| 'save_config' // 保存配置
	| 'get_history' // 获取历史记录
	| 'clear_history' // 清空历史记录
	| 'send_message'; // 发送用户消息

/**
 * 后端→前端的响应消息类型
 */
export type IFrameResponseType =
	| 'config_loaded' // 配置已加载
	| 'history_loaded' // 历史已加载
	| 'ai_response' // AI响应
	| 'command_executing' // 命令执行中
	| 'command_result' // 命令执行结果
	| 'connection_status' // 连接状态
	| 'error'; // 错误

/**
 * 前端→后端的请求消息
 */
export interface PluginRequest {
	type: PluginRequestType;
	data?: any;
}

/**
 * 后端→前端的响应消息
 */
export interface IFrameResponse {
	type: IFrameResponseType;
	data: any;
}

/**
 * 具体请求数据类型
 */

// 保存配置请求数据
export interface SaveConfigData {
	apiEndpoint: string;
	apiToken: string;
	botId: string;
	maxHistorySize: number;
}

// 发送消息请求数据
export interface SendMessageData {
	message: string;
}

/**
 * 具体响应数据类型
 */

// 配置数据
export interface ConfigData {
	apiEndpoint: string;
	apiToken: string;
	botId: string;
	maxHistorySize: number;
}

// 历史数据
export interface HistoryData {
	messages: any[];
}

// AI响应数据
export interface AIResponseData {
	message: string;
	chatId?: string;
	command?: any;
}

// 命令执行中数据
export interface CommandExecutingData {
	command_id: string;
}

// 命令执行结果数据
export interface CommandResultData {
	success: boolean;
	command_id: string;
	data?: any;
	error?: string;
}

// 连接状态数据
export interface ConnectionStatusData {
	status: 'online' | 'offline' | 'error';
}

// 错误数据
export interface ErrorData {
	message: string;
}
