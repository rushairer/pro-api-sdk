/**
 * 上下文数据类型定义
 * 定义发送给扣子AI的上下文数据格式
 */

/**
 * EDA上下文接口
 * 包含当前项目、文档、器件等信息
 */
export interface EDAContext {
	project?: ProjectContext;
	currentDocument?: DocumentContext;
	components?: ComponentsContext;
	execution?: ExecutionContext;
	userConfig?: UserConfigContext;
}

/**
 * 项目上下文
 */
export interface ProjectContext {
	uuid?: string;
	name?: string;
	description?: string;
	isDirty?: boolean;
	type?: 'schematic' | 'pcb' | 'panel';
}

/**
 * 文档上下文
 */
export interface DocumentContext {
	type: 'sch' | 'pcb' | 'panel';
	uuid?: string;
	name?: string;
	isDirty?: boolean;
}

/**
 * 器件上下文
 */
export interface ComponentsContext {
	total: number;
	lastAdded?: {
		designator: string;
		device_name: string;
		position: { x: number; y: number };
		timestamp: number;
	};
	recent?: Array<{
		designator: string;
		device_name: string;
	}>;
}

/**
 * 执行状态上下文
 */
export interface ExecutionContext {
	lastAction?: string;
	lastCommandId?: string;
	successRate?: number;
	totalExecutions: number;
	successCount: number;
	errors: Array<{
		action: string;
		command_id: string;
		error: string;
		timestamp: number;
	}>;
}

/**
 * 用户配置上下文
 */
export interface UserConfigContext {
	apiEndpoint?: string;
	apiToken?: string;
	botId?: string;
	pollingEnabled?: boolean;
}
