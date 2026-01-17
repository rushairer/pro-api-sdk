/**
 * 命令类型定义
 * 定义扣子AI返回的命令格式
 */

/**
 * 命令ID生成器
 */
export class CommandIdGenerator {
	private counter = 0;
	private sessionPrefix: string;

	constructor() {
		this.sessionPrefix = `cmd_${Date.now()}`;
	}

	generate(): string {
		return `${this.sessionPrefix}_${++this.counter}`;
	}

	reset(): void {
		this.counter = 0;
		this.sessionPrefix = `cmd_${Date.now()}`;
	}
}

/**
 * 支持的命令类型枚举
 */
export enum CommandType {
	GET_CURRENT_PROJECT_INFO = 'get_current_project_info',
	CREATE_PROJECT = 'create_project',
	SEARCH_DEVICE = 'search_device',
	ADD_COMPONENT_TO_SCHEMATIC = 'add_component_to_schematic',
	ADD_WIRE = 'add_wire',
	SAVE_DOCUMENT = 'save_document',
	EXPORT_BOM = 'export_bom',
	QUERY_PROJECT = 'query_project',
}

/**
 * 扣子AI返回的命令接口
 */
export interface CozeCommand {
	command_id: string;
	action: CommandType;
	params: Record<string, any>;
	description?: string;
}

/**
 * 命令执行结果接口
 */
export interface ExecutionResult {
	success: boolean;
	data?: any;
	error?: string;
	warnings?: string[];
	logs: string[];
	command_id: string;
}

/**
 * 执行器选项
 */
export interface ExecutorOptions {
	continueOnError?: boolean;
	autoRollback?: boolean;
	timeout?: number;
}
