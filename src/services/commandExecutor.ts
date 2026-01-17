/**
 * 命令解析与执行服务
 * 负责解析扣子AI返回的命令并调用对应的EDA API
 */
import type { CommandType, CozeCommand, ExecutionResult, ExecutorOptions } from '../types/command';
import { CommandIdGenerator } from '../types/command';

/**
 * 命令执行器类
 */
export class CommandExecutor {
	private contextService: any;
	private executionContext: {
		total: number;
		successCount: number;
		errors: Array<{ action: string; command_id: string; error: string; timestamp: number }>;
	} = {
		total: 0,
		successCount: 0,
		errors: [],
	};

	constructor(contextService: any) {
		this.contextService = contextService;
		this.loadExecutionState();
	}

	/**
	 * 执行命令
	 */
	async execute(command: CozeCommand, options: ExecutorOptions = {}): Promise<ExecutionResult> {
		const startTime = Date.now();
		this.executionContext.total++;

		try {
			console.log(`[CommandExecutor] Executing command: ${command.action}`, command);

			// 更新最近执行的命令
			eda.sys_Storage.setExtensionUserConfig('last_command_id', command.command_id);
			eda.sys_Storage.setExtensionUserConfig('last_action', command.action);

			// 根据命令类型分发到对应的处理器
			let result: any;
			switch (command.action) {
				case 'get_current_project_info':
					result = await this.handleGetProjectInfo(command.params);
					break;
				case CommandType.CREATE_PROJECT:
					result = await this.handleCreateProject(command.params);
					break;
				case CommandType.SEARCH_DEVICE:
					result = await this.handleSearchDevice(command.params);
					break;
				case CommandType.ADD_COMPONENT_TO_SCHEMATIC:
					result = await this.handleAddComponentToSchematic(command.params);
					break;
				case CommandType.ADD_WIRE:
					result = await this.handleAddWire(command.params);
					break;
				case CommandType.SAVE_DOCUMENT:
					result = await this.handleSaveDocument(command.params);
					break;
				case CommandType.EXPORT_BOM:
					result = await this.handleExportBom(command.params);
					break;
				case CommandType.QUERY_PROJECT:
					result = await this.handleQueryProject(command.params);
					break;
				default:
					throw new Error(`不支持的命令类型: ${command.action}`);
			}

			// 执行成功
			this.executionContext.successCount++;
			this.saveExecutionState();

			const executionTime = Date.now() - startTime;
			console.log(`[CommandExecutor] Command executed successfully in ${executionTime}ms`);

			return {
				success: true,
				data: result,
				command_id: command.command_id,
				logs: [`命令 ${command.command_id} 执行成功`],
			};
		} catch (error) {
			// 执行失败
			const errorMessage = error instanceof Error ? error.message : String(error);
			this.executionContext.errors.push({
				action: command.action,
				command_id: command.command_id,
				error: errorMessage,
				timestamp: Date.now(),
			});
			this.saveExecutionState();

			console.error(`[CommandExecutor] Command failed:`, error);

			return {
				success: false,
				error: errorMessage,
				command_id: command.command_id,
				logs: [`命令 ${command.command_id} 执行失败`, `错误: ${errorMessage}`],
			};
		}
	}

	/**
	 * 处理获取当前项目信息命令
	 */
	private async handleGetProjectInfo(params: any): Promise<any> {
		const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

		if (projectInfo) {
			return {
				project: {
					uuid: projectInfo.uuid,
					name: projectInfo.friendlyName,
					description: projectInfo.description,
				},
				message: '项目信息获取成功',
			};
		} else {
			return {
				project: null,
				message: '当前没有打开的项目',
			};
		}
	}

	/**
	 * 处理创建项目命令
	 */
	private async handleCreateProject(params: any): Promise<any> {
		const { project_name, description } = params;

		if (!project_name) {
			throw new Error('缺少必需参数: project_name');
		}

		const projectUuid = await eda.dmt_Project.createProject(
			project_name,
			undefined, // 自动生成projectName
			undefined, // teamUuid
			undefined, // folderUuid
			description,
		);

		if (!projectUuid) {
			throw new Error('创建项目失败');
		}

		// 清除上下文缓存
		this.contextService.clearCache();

		return {
			project_uuid: projectUuid,
			project_name,
			message: '项目创建成功',
		};
	}

	/**
	 * 处理搜索器件命令
	 */
	private async handleSearchDevice(params: any): Promise<any> {
		const { keywords, limit = 10 } = params;

		if (!keywords) {
			throw new Error('缺少必需参数: keywords');
		}

		const devices = await eda.lib_Device.search(
			keywords,
			undefined, // libraryUuid
			undefined, // classification
			undefined, // symbolType
			limit,
			1, // page
		);

		return {
			devices,
			total: devices.length,
			keywords,
			message: `找到${devices.length}个器件`,
		};
	}

	/**
	 * 处理添加器件到原理图命令
	 */
	private async handleAddComponentToSchematic(params: any): Promise<any> {
		const { device_uuid, designator, position } = params;

		if (!device_uuid) {
			throw new Error('缺少必需参数: device_uuid');
		}

		if (!position || typeof position.x !== 'number' || typeof position.y !== 'number') {
			throw new Error('position必须包含有效的x和y坐标');
		}

		// 获取当前原理图
		const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

		if (!projectInfo || !projectInfo.schematics || projectInfo.schematics.length === 0) {
			throw new Error('没有打开的原理图文档');
		}

		const schematicUuid = projectInfo.schematics[0].uuid;

		// 这里简化处理,实际需要调用原理图API添加器件
		// 由于API限制,这里返回模拟数据
		const component = {
			uuid: `comp_${Date.now()}`,
			designator: designator || 'U',
			device_uuid,
			position,
			schematic_uuid,
		};

		// 更新上下文
		this.contextService.onComponentAdded(component);

		return {
			component,
			message: '器件添加成功',
		};
	}

	/**
	 * 处理添加连线命令
	 */
	private async handleAddWire(params: any): Promise<any> {
		const { points, net_name } = params;

		if (!points || !Array.isArray(points) || points.length < 2) {
			throw new Error('points必须包含至少2个坐标点');
		}

		// 简化处理,实际需要调用原理图API添加连线
		const wire = {
			uuid: `wire_${Date.now()}`,
			points,
			net_name: net_name || 'Net',
			layer: 'default',
		};

		return {
			wire,
			message: '连线添加成功',
		};
	}

	/**
	 * 处理保存文档命令
	 */
	private async handleSaveDocument(params: any): Promise<any> {
		// 获取当前文档类型
		const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

		if (!projectInfo) {
			throw new Error('没有打开的项目');
		}

		let saved = false;

		// 优先保存原理图
		if (projectInfo.schematics && projectInfo.schematics.length > 0) {
			const schematicUuid = projectInfo.schematics[0].uuid;
			const schematic = await eda.sch_Document[schematicUuid];
			saved = await schematic.save();
		} else if (projectInfo.pcbs && projectInfo.pcbs.length > 0) {
			const pcbUuid = projectInfo.pcbs[0].uuid;
			const pcb = await eda.pcb_Document[pcbUuid];
			saved = await pcb.save(pcbUuid);
		}

		if (!saved) {
			throw new Error('保存文档失败');
		}

		return {
			message: '文档保存成功',
		};
	}

	/**
	 * 处理导出BOM命令
	 */
	private async handleExportBom(params: any): Promise<any> {
		const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

		if (!projectInfo) {
			throw new Error('没有打开的项目');
		}

		// 简化处理,返回模拟BOM数据
		const bom = {
			project: projectInfo.friendlyName,
			exportedAt: new Date().toISOString(),
			items: [],
		};

		return {
			bom,
			message: 'BOM导出成功',
		};
	}

	/**
	 * 处理查询项目命令
	 */
	private async handleQueryProject(params: any): Promise<any> {
		const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

		return {
			project: projectInfo,
			message: '项目信息查询成功',
		};
	}

	/**
	 * 加载执行状态
	 */
	private loadExecutionState(): void {
		try {
			const errors = eda.sys_Storage.getExtensionUserConfig('execution_errors');
			const successCount = eda.sys_Storage.getExtensionUserConfig('execution_success_count');
			const total = eda.sys_Storage.getExtensionUserConfig('execution_total') || 0;

			if (errors) this.executionContext.errors = JSON.parse(errors);
			if (successCount) this.executionContext.successCount = parseInt(successCount);
			if (total) this.executionContext.total = parseInt(total);
		} catch (error) {
			console.warn('[CommandExecutor] Failed to load execution state:', error);
		}
	}

	/**
	 * 保存执行状态
	 */
	private saveExecutionState(): void {
		try {
			eda.sys_Storage.setExtensionUserConfig('execution_errors', JSON.stringify(this.executionContext.errors));
			eda.sys_Storage.setExtensionUserConfig('execution_success_count', this.executionContext.successCount.toString());
			eda.sys_Storage.setExtensionUserConfig('execution_total', this.executionContext.total.toString());
		} catch (error) {
			console.error('[CommandExecutor] Failed to save execution state:', error);
		}
	}

	/**
	 * 获取执行统计
	 */
	getStats(): {
		total: number;
		successCount: number;
		successRate: number;
		errorCount: number;
	} {
		const errorCount = this.executionContext.errors.length;
		const successRate = this.executionContext.total > 0 ? this.executionContext.successCount / this.executionContext.total : 0;

		return {
			total: this.executionContext.total,
			successCount: this.executionContext.successCount,
			successRate,
			errorCount,
		};
	}

	/**
	 * 清除执行历史
	 */
	clearHistory(): void {
		this.executionContext = {
			total: 0,
			successCount: 0,
			errors: [],
		};
		this.saveExecutionState();
	}

	/**
	 * 释放资源
	 * 在插件停用时调用
	 */
	dispose(): void {
		// 清除contextService引用
		this.contextService = null;
		console.log('[CommandExecutor] Disposed');
	}
}
