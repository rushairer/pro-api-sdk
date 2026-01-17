# 扣子AI插件架构文档

## 架构概览

本插件采用**前后端分离架构**,通过消息总线实现通信:

- **后端 (src/index.ts + services/)**: 业务逻辑层,负责所有EDA API调用、扣子AI交互、数据存储
- **前端 (iframe/app.js)**: UI展示层,仅负责界面渲染和用户交互
- **通信 (消息总线)**: 使用 `eda.sys_MessageBus` 实现双向通信

```
┌─────────────────────────────────────────────────────────────┐
│                      嘉立创EDA环境                            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌───────────────────┐         ┌───────────────────┐        │
│  │  前端 (IFrame)     │         │  后端 (Plugin)     │        │
│  │  iframe/app.js    │◄───────►│  src/index.ts     │        │
│  │                   │  消息总线 │                   │        │
│  │  - UI渲染         │         │  - 业务逻辑        │        │
│  │  - 用户交互       │         │  - EDA API调用     │        │
│  │  - 消息发送/接收   │         │  - AI API调用      │        │
│  └───────────────────┘         │  - 数据存储        │        │
│                                 └───────┬───────────┘        │
│                                         │                    │
│                                 ┌───────┴───────────┐        │
│                                 │  业务服务层        │        │
│                                 │  src/services/    │        │
│                                 │                   │        │
│                                 │  - CozeApiService │        │
│                                 │  - ContextService │        │
│                                 │  - CommandExecutor│        │
│                                 │  - StorageService │        │
│                                 └───────────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## 目录结构

```
/workspace/
├── src/                          # 后端业务层
│   ├── index.ts                  # 插件入口,消息路由
│   ├── services/                 # 业务服务
│   │   ├── cozeApiService.ts     # 扣子AI API调用
│   │   ├── contextService.ts     # EDA上下文管理
│   │   ├── commandExecutor.ts    # 命令执行
│   │   └── storageService.ts     # 数据存储
│   └── types/                    # 类型定义
│       ├── command.ts            # 命令类型
│       ├── context.ts            # 上下文类型
│       ├── conversation.ts       # 对话类型
│       └── message.ts            # 消息协议类型 (新增)
├── iframe/                       # 前端UI层
│   ├── app.js                    # UI逻辑
│   ├── index.html                # 页面结构
│   └── styles.css                # 样式
└── extension.json                # 插件配置
```

## 消息协议

### 协议定义

所有消息遵循统一格式:

- **前端→后端**: `PluginRequest { type: string, data?: any }`
- **后端→前端**: `IFrameResponse { type: string, data: any }`

详见 `src/types/message.ts`

### 消息类型

#### 前端→后端请求

| 类型            | data参数          | 说明         |
| --------------- | ----------------- | ------------ |
| `get_config`    | -                 | 获取配置     |
| `save_config`   | `SaveConfigData`  | 保存配置     |
| `get_history`   | -                 | 获取历史记录 |
| `clear_history` | -                 | 清空历史记录 |
| `send_message`  | `SendMessageData` | 发送用户消息 |

#### 后端→前端响应

| 类型                | data参数               | 说明         |
| ------------------- | ---------------------- | ------------ |
| `config_loaded`     | `ConfigData`           | 配置已加载   |
| `history_loaded`    | `HistoryData`          | 历史已加载   |
| `ai_response`       | `AIResponseData`       | AI响应       |
| `command_executing` | `CommandExecutingData` | 命令执行中   |
| `command_result`    | `CommandResultData`    | 命令执行结果 |
| `connection_status` | `ConnectionStatusData` | 连接状态     |
| `error`             | `ErrorData`            | 错误         |

## 职责划分

### 后端职责 (src/index.ts)

✅ **应该做的事情:**

- 插件生命周期管理 (activate, deactivate)
- 菜单命令注册 (openCozePanel, about)
- 消息总线监听和消息分发
- 调用业务服务处理请求
- 通过消息总线推送响应到前端
- 所有EDA API调用
- 所有网络请求(扣子AI API)
- 数据持久化(Storage)

❌ **不应该做的事情:**

- UI渲染
- DOM操作
- 用户交互处理

### 前端职责 (iframe/app.js)

✅ **应该做的事情:**

- DOM元素管理和渲染
- 用户输入处理
- 界面交互和动画
- 通过消息总线发送请求
- 接收后端响应并更新UI
- 本地UI状态管理(仅UI相关状态,如isProcessing)

❌ **不应该做的事情:**

- 直接调用EDA API
- 直接调用扣子AI API
- 业务逻辑处理
- 数据持久化
- 维护业务数据状态(如conversation, config)

### 业务服务层 (src/services/)

#### CozeApiService

- 封装扣子AI HTTP API调用
- 请求体构建和响应解析
- 会话管理(conversationId)
- 连接测试

#### ContextService

- EDA上下文数据收集
- 项目、文档、器件信息获取
- 上下文格式化
- 上下文缓存(5秒)

#### CommandExecutor

- 命令解析和验证
- EDA API调用(创建项目、搜索器件、添加器件等)
- 执行结果追踪
- 错误处理和重试

#### StorageService

- 配置数据读写 (eda.sys_Storage)
- 对话历史管理
- 会话ID持久化
- 历史消息限制(maxHistorySize)

## 数据流

### 发送消息流程

```
1. 用户输入 → 前端handleSend()
2. 前端addMessageToUI() → 乐观更新UI
3. 前端sendMessageToPlugin({type: 'send_message', data: {message}})
4. 后端setupMessageListener() → 接收消息
5. 后端handleSendMessage() → 调用业务服务
   a. ContextService.buildFullContext() → 获取EDA上下文
   b. StorageService.getHistory() → 获取历史
   c. CozeApiService.sendMessage() → 调用AI API
   d. StorageService.addMessage() → 保存消息
6. 后端sendToIFrame({type: 'ai_response', data}) → 推送响应
7. 前端handleAIResponse() → 更新UI
8. 如果有命令,后端executeCommand()
   a. CommandExecutor.execute() → 执行命令
   b. 推送command_executing和command_result
9. 前端显示命令执行结果
```

### 配置保存流程

```
1. 用户填写配置 → 前端saveSettings()
2. 前端sendMessageToPlugin({type: 'save_config', data: config})
3. 后端handleSaveConfig() →
   a. StorageService.saveConfig() → 保存到Storage
   b. CozeApiService.updateConfig() → 更新服务配置
   c. CozeApiService.testConnection() → 测试连接
4. 后端sendToIFrame({type: 'connection_status'}) → 推送状态
5. 前端updateStatus() → 更新状态指示器
```

## 关键设计决策

### 1. 为什么选择前后端分离?

- ✅ **职责清晰**: 前端专注UI,后端专注业务
- ✅ **类型安全**: 后端使用TypeScript,前端使用纯JS
- ✅ **易于维护**: 代码组织清晰,便于理解和修改
- ✅ **符合最佳实践**: 遵循MVC/MVVM模式

### 2. 为什么IFrame不直接调用EDA API?

虽然IFrame可以访问 `window.eda`,但我们选择通过消息总线中转,原因:

- ✅ **统一管理**: 所有业务逻辑集中在后端,便于跟踪和调试
- ✅ **错误处理**: 后端有统一的错误处理机制
- ✅ **状态管理**: 业务状态(如服务实例)由后端维护
- ✅ **日志记录**: 后端有完整的日志记录
- ✅ **扩展性**: 后端可以添加缓存、重试等增强功能

### 3. 为什么使用消息总线而不是直接函数调用?

- ✅ **解耦**: 前后端完全解耦,互不依赖
- ✅ **标准化**: 使用EDA平台提供的标准通信机制
- ✅ **可靠性**: 消息总线提供消息队列和错误处理
- ✅ **可扩展**: 未来可以添加更多消息类型

## 错误处理

### 后端错误处理

所有消息处理器都有统一的try-catch:

```typescript
try {
	// 业务逻辑
} catch (error) {
	console.error('[CozeAI] Error:', error);
	sendErrorToIFrame({
		type: 'error',
		data: { message: error.message },
	});
}
```

### 前端错误处理

接收错误并显示友好提示:

```javascript
function handleError(error) {
	// 显示错误通知
	// 3秒后自动消失
}
```

## 日志规范

- 后端: `console.log('[CozeAI] ...')`, `console.error('[CozeAI] ...')`
- 前端: `console.log('[IFrame] ...')`, `console.error('[IFrame] ...')`
- 服务类: `console.log('[ServiceName] ...')`

## 性能优化

- **上下文缓存**: ContextService实现5秒缓存,避免频繁API调用
- **历史限制**: 默认最多50条历史记录
- **异步处理**: 所有操作使用async/await,避免阻塞
- **乐观更新**: 前端立即显示用户消息,提升响应速度

## 安全考虑

- **输入验证**: 后端验证所有请求参数
- **错误信息**: 不暴露敏感的内部错误信息
- **权限控制**: 使用extension.json声明必要权限
- **数据存储**: 使用EDA官方Storage API,数据加密存储

## 测试建议

### 单元测试

- 测试各业务服务类的独立功能
- 测试消息协议的序列化/反序列化
- 测试错误处理逻辑

### 集成测试

- 测试完整的消息流程(发送→处理→响应)
- 测试命令执行流程
- 测试数据持久化

### UI测试

- 测试用户交互流程
- 测试界面响应速度
- 测试错误提示显示

## 未来扩展

### 可能的改进方向

1. **消息队列**: 实现消息队列,支持批量处理
2. **离线模式**: 支持离线缓存和同步
3. **多语言**: 使用eda.sys_I18n实现国际化
4. **主题切换**: 支持亮色/暗色主题
5. **快捷键**: 使用eda.sys_ShortcutKey注册快捷键
6. **右键菜单**: 在编辑器中添加右键菜单

## 参考资源

- [嘉立创EDA插件开发文档](https://prodocs.lceda.cn/cn/api/)
- [SYS_MessageBus API](../pro-api-types/SYS-系统/SYS_MessageBus.md)
- [SYS_IFrame API](../pro-api-types/SYS-系统/SYS_IFrame.md)
- [SYS_Storage API](../pro-api-types/SYS-系统/SYS_Storage.md)
