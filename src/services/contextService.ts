/**
 * EDA上下文收集服务
 * 负责从EDA系统获取项目、文档、器件等上下文信息
 */
import type { ComponentsContext, DocumentContext, EDAContext, ExecutionContext, ProjectContext } from '../types/context';

/**
 * 上下文收集服务类
 */
export class ContextService {
	private projectContextCache: ProjectContext | null = null;
	private documentContextCache: DocumentContext | null = null;
	private lastCacheTime = 0;
	private cacheTimeout = 5000; // 5秒缓存

	/**
	 * 获取当前项目信息
	 */
	async getProjectContext(): Promise<ProjectContext> {
		try {
			const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

			if (projectInfo) {
				this.projectContextCache = {
					uuid: projectInfo.uuid,
					name: projectInfo.friendlyName,
					description: projectInfo.description,
					isDirty: false,
					type: projectInfo.pcbs && projectInfo.pcbs.length > 0 ? 'pcb' : 'schematic',
				};
			} else {
				this.projectContextCache = null;
			}

			return this.projectContextCache;
		} catch (error) {
			console.error('[ContextService] Failed to get project context:', error);
			return null;
		}
	}

	/**
	 * 获取当前文档信息
	 */
	async getCurrentDocument(): Promise<DocumentContext | null> {
		try {
			const projectInfo = await eda.dmt_Project.getCurrentProjectInfo();

			if (!projectInfo) {
				this.documentContextCache = null;
				return null;
			}

			// 优先返回原理图信息
			if (projectInfo.schematics && projectInfo.schematics.length > 0) {
				this.documentContextCache = {
					type: 'sch',
					uuid: projectInfo.schematics[0].uuid,
					name: projectInfo.schematics[0].friendlyName,
					isDirty: false,
				};
			} else if (projectInfo.pcbs && projectInfo.pcbs.length > 0) {
				this.documentContextCache = {
					type: 'pcb',
					uuid: projectInfo.pcbs[0].uuid,
					name: projectInfo.pcbs[0].friendlyName,
					isDirty: false,
				};
			} else {
				this.documentContextCache = null;
			}

			return this.documentContextCache;
		} catch (error) {
			console.error('[ContextService] Failed to get current document:', error);
			return null;
		}
	}

	/**
	 * 获取器件上下文信息
	 * 注意: EDA API可能不提供器件总数,这里返回模拟数据
	 */
	async getComponentsContext(): Promise<ComponentsContext> {
		// EDA API可能不直接提供器件总数
		// 这里返回一个基本结构,实际数据可以从文档中获取
		return {
			total: 0,
			lastAdded: undefined,
			recent: [],
		};
	}

	/**
	 * 构建完整的EDA上下文
	 */
	async buildFullContext(): Promise<EDAContext> {
		const now = Date.now();

		// 检查缓存是否有效
		if (now - this.lastCacheTime < this.cacheTimeout && this.projectContextCache && this.documentContextCache) {
			return {
				project: this.projectContextCache,
				currentDocument: this.documentContextCache,
				components: await this.getComponentsContext(),
				execution: this.buildExecutionContext(),
			};
		}

		// 重新获取上下文
		const project = await this.getProjectContext();
		const document = await this.getCurrentDocument();
		const components = await this.getComponentsContext();

		this.lastCacheTime = now;

		return {
			project,
			currentDocument: document,
			components,
			execution: this.buildExecutionContext(),
		};
	}

	/**
	 * 构建执行状态上下文
	 * 从本地存储中读取执行历史
	 */
	private buildExecutionContext(): ExecutionContext {
		try {
			const errors = eda.sys_Storage.getExtensionUserConfig('execution_errors');
			const successCount = eda.sys_Storage.getExtensionUserConfig('execution_success_count');
			const totalExecutions = eda.sys_Storage.getExtensionUserConfig('execution_total') || 0;

			const parsedErrors = errors ? JSON.parse(errors) : [];
			const successRate = totalExecutions > 0 ? (parseInt(successCount) || 0) / totalExecutions : 0;

			return {
				lastAction: eda.sys_Storage.getExtensionUserConfig('last_action'),
				lastCommandId: eda.sys_Storage.getExtensionUserConfig('last_command_id'),
				successRate,
				totalExecutions,
				successCount: parseInt(successCount) || 0,
				errors: parsedErrors,
			};
		} catch (error) {
			console.error('[ContextService] Failed to build execution context:', error);
			return {
				totalExecutions: 0,
				successCount: 0,
				errors: [],
			};
		}
	}

	/**
	 * 更新器件信息
	 * 当添加器件后调用
	 */
	onComponentAdded(component: any): void {
		this.lastCacheTime = 0; // 清除缓存,强制下次重新获取
	}

	/**
	 * 格式化上下文为可读字符串
	 * 用于发送给扣子AI
	 */
	formatContextForAI(context: EDAContext): string {
		const parts: string[] = [];

		if (context.project) {
			parts.push(`项目: ${context.project.name || '无打开的项目'}`);
			if (context.project.description) {
				parts.push(`  描述: ${context.project.description}`);
			}
			if (context.project.isDirty) {
				parts.push(`  ⚠️ 有未保存的更改`);
			}
		} else {
			parts.push('项目: 无打开的项目');
		}

		if (context.currentDocument) {
			const docType = context.currentDocument.type === 'sch' ? '原理图' : 'PCB';
			parts.push(`${docType}: ${context.currentDocument.name || '未命名'}`);
			if (context.currentDocument.isDirty) {
				parts.push(`  ⚠️ 有未保存的更改`);
			}
		} else {
			parts.push('文档: 无打开的文档');
		}

		if (context.components) {
			parts.push(`器件总数: ${context.components.total}`);
			if (context.components.lastAdded) {
				parts.push(`最近添加: ${context.components.lastAdded.designator} - ${context.components.lastAdded.device_name}`);
			}
		}

		if (context.execution) {
			const successRate = Math.round((context.execution.successRate || 0) * 100);
			parts.push(`最近操作: ${context.execution.lastAction || '无'}`);
			parts.push(`执行成功率: ${successRate}%`);

			if (context.execution.errors.length > 0) {
				const lastError = context.execution.errors[context.execution.errors.length - 1];
				parts.push(`最近错误: ${lastError.error}`);
			}
		}

		return parts.join('\n');
	}

	/**
	 * 清除缓存
	 */
	clearCache(): void {
		this.projectContextCache = null;
		this.documentContextCache = null;
		this.lastCacheTime = 0;
	}

	/**
	 * 释放资源
	 * 在插件停用时调用
	 */
	dispose(): void {
		this.clearCache();
		console.log('[ContextService] Disposed');
	}
}
