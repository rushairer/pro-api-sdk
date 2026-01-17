# 最佳实践

> 插件开发的经验总结和优化建议

本章节汇总了插件开发中的最佳实践，帮助您开发出高质量、高性能、易维护的插件。

---

## 📚 章节导航

### [1. 代码组织](./代码组织.md)

⏱️ 30 分钟

学习如何组织您的代码：

- 📁 项目结构设计
- 🧩 模块化开发
- 📝 TypeScript 最佳实践
- 🏷️ 命名规范
- 💬 注释规范

**适合**: 所有开发者

---

### [2. 性能优化](./性能优化.md)

⏱️ 45 分钟

提升插件性能：

- ⚡ 减少API调用
- 🔄 异步操作优化
- 💾 内存管理
- 👂 事件监听优化
- 📊 图元批量操作
- 🗃️ 缓存策略

**适合**: 追求高性能的开发者

---

### [3. 安全建议](./安全建议.md)

⏱️ 30 分钟

确保插件安全：

- 🔒 权限最小化原则
- ✅ 输入验证
- 📁 文件操作安全
- 🌐 网络请求安全
- 🛡️ 用户数据保护

**适合**: 所有开发者

---

### [4. 常见问题FAQ](./常见问题.md)

⏱️ 参考手册

快速解决常见问题：

- 🔧 安装和配置问题
- 🐛 API调用问题
- 🔍 调试问题
- 📦 打包和发布问题
- ⚡ 性能问题

**适合**: 遇到问题时查阅

---

## 🎯 核心原则

### 1. 用户体验第一

```typescript
// ❌ 不好：操作没有反馈
async function doSomething() {
  await longOperation();
}

// ✅ 好：提供加载提示和结果反馈
async function doSomething() {
  api.sys.SYS_LoadingAndProgressBar.show('处理中...');
  try {
    await longOperation();
    api.sys.SYS_Message.success('操作成功！');
  } catch (error) {
    api.sys.SYS_Message.error('操作失败：' + error.message);
  } finally {
    api.sys.SYS_LoadingAndProgressBar.close();
  }
}
```

---

### 2. 错误处理完善

```typescript
// ❌ 不好：没有错误处理
async function getData() {
  const result = await api.dmt.DMT_Project.getCurrentProjectInfo();
  return result;
}

// ✅ 好：完善的错误处理
async function getData() {
  try {
    const result = await api.dmt.DMT_Project.getCurrentProjectInfo();
    if (!result) {
      throw new Error('未获取到工程信息');
    }
    return result;
  } catch (error) {
    api.sys.SYS_Log.error('获取工程信息失败', error);
    api.sys.SYS_Message.error('获取工程信息失败，请重试');
    throw error;
  }
}
```

---

### 3. 性能优先

```typescript
// ❌ 不好：多次调用API
for (const item of items) {
	await processItem(item); // 串行处理，慢
}

// ✅ 好：批量处理
await Promise.all(items.map((item) => processItem(item))); // 并行处理，快
```

---

### 4. 代码可维护

```typescript
// ❌ 不好：魔法数字和硬编码
function drawLine() {
  const line = api.pcb.PCB_PrimitiveLine.create(0, 0, 100, 100, 10, 1);
}

// ✅ 好：使用常量和配置
const CONFIG = {
  LINE_WIDTH: 10,
  TOP_LAYER: 1
};

function drawLine(startX: number, startY: number, endX: number, endY: number) {
  const line = api.pcb.PCB_PrimitiveLine.create(
    startX, startY, endX, endY,
    CONFIG.LINE_WIDTH,
    CONFIG.TOP_LAYER
  );
  return line;
}
```

---

## 📋 快速检查清单

### 代码质量

- [ ] 代码结构清晰，模块化
- [ ] 变量和函数命名有意义
- [ ] 添加了必要的注释
- [ ] 使用 TypeScript 类型检查
- [ ] 遵循代码规范（ESLint）

### 性能

- [ ] 避免不必要的API调用
- [ ] 使用异步操作
- [ ] 批量处理图元
- [ ] 及时清理事件监听
- [ ] 使用缓存策略

### 安全

- [ ] 最小化权限申请
- [ ] 验证用户输入
- [ ] 安全处理文件路径
- [ ] HTTPS网络请求
- [ ] 不泄露敏感信息

### 用户体验

- [ ] 操作有加载提示
- [ ] 错误提示友好
- [ ] 支持撤销操作
- [ ] 响应快速（< 2秒）
- [ ] 界面简洁美观

---

## 💡 开发技巧

### 1. 使用TypeScript

TypeScript 提供类型检查，减少运行时错误：

```typescript
import type { IDMT_ProjectInfo } from '@jlceda/pro-api-types';

async function getProjectName(): Promise<string> {
	const project: IDMT_ProjectInfo = await api.dmt.DMT_Project.getCurrentProjectInfo();
	return project.name;
}
```

---

### 2. 合理使用日志

```typescript
// 开发环境：详细日志
if (process.env.NODE_ENV === 'development') {
	api.sys.SYS_Log.info('调试信息', data);
}

// 生产环境：只记录错误
api.sys.SYS_Log.error('操作失败', error);
```

---

### 3. 配置化开发

将配置与代码分离：

```typescript
// config.ts
export const CONFIG = {
  DEFAULT_LINE_WIDTH: 10,
  DEFAULT_LAYER: 1,
  MAX_RETRY_TIMES: 3,
  TIMEOUT: 5000
};

// index.ts
import { CONFIG } from './config';
```

---

### 4. 单元测试

为核心逻辑编写测试：

```typescript
import { describe, expect, it } from 'vitest';

describe('坐标转换', () => {
	it('应该正确转换坐标', () => {
		const result = convertCoordinate(100, 100);
		expect(result).toEqual({ x: 100, y: 100 });
	});
});
```

---

## 📊 性能指标

### 目标性能

| 指标        | 目标值    |
| ----------- | --------- |
| 启动时间    | < 1秒     |
| 命令响应    | < 2秒     |
| UI渲染      | < 100ms   |
| 内存占用    | < 100MB   |
| API调用频率 | < 10次/秒 |

---

## 🔗 相关资源

- 📚 [API参考文档](../04-API参考/README.md)
- 💡 [实战案例](../05-实战案例/README.md)
- 💻 [开发指南](../03-开发指南/README.md)
- 🌐 [官方文档](https://prodocs.lceda.cn/cn/api/)

---

## 📖 推荐阅读顺序

1. **必读** - [代码组织](./代码组织.md)
2. **必读** - [性能优化](./性能优化.md)
3. **必读** - [安全建议](./安全建议.md)
4. **参考** - [常见问题FAQ](./常见问题.md)

---

## 🆘 遇到问题？

查看 [常见问题FAQ](./常见问题.md) 或访问 [官方论坛](https://club.szlcsc.com/)

---

<p align="center">
  <a href="../README.md">🏠 返回首页</a> • 
  <a href="./代码组织.md">开始学习 →</a>
</p>
