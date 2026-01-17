---
name: 修复扣子AI插件
overview: 修复插件窗口无法打开、更新扣子API到v3版本、添加Token验证，确保插件可以正常工作
todos:
    - id: fix-message-listener
      content: 修复index.ts消息监听器的条件判断问题
      status: completed
    - id: upgrade-api-v3
      content: 升级cozeApiService.ts到API v3版本,修改端点和请求格式
      status: completed
    - id: add-token-validation
      content: 在cozeApiService.ts中添加Token和BotID验证
      status: completed
      dependencies:
          - upgrade-api-v3
    - id: update-response-parser
      content: 更新响应解析逻辑以处理v3 API的chat_id
      status: completed
      dependencies:
          - upgrade-api-v3
    - id: test-panel-opening
      content: 测试插件窗口能否正常打开
      status: completed
      dependencies:
          - fix-message-listener
    - id: test-api-connection
      content: 测试Token验证和API v3连接
      status: completed
      dependencies:
          - add-token-validation
          - update-response-parser
---

## 产品概述

修复扣子AI插件的关键问题,包括插件窗口无法打开、API版本不匹配、缺少Token验证等核心缺陷,确保插件能够正常工作并与扣子AI平台v3 API正确对接。

## 核心功能

- 修复插件窗口无法打开的问题
- 将扣子API从v2升级到v3版本
- 添加Token验证功能,确保用户配置API Token后才能使用
- 修复消息监听器问题,确保iframe与插件主进程正常通信

## 技术栈

- TypeScript: 原有项目使用
- 嘉立创EDA专业版插件API: eda.sys_IFrame, eda.sys_ClientUrl, eda.sys_Storage等
- HTML/CSS/JavaScript: iframe前端

## 技术架构

### 系统架构

插件采用分层架构,分为:

- **表现层**: iframe前端界面(HTML/CSS/JS)
- **业务逻辑层**: index.ts插件入口,处理消息通信和业务逻辑
- **服务层**: cozeApiService.ts、storageService.ts等服务类
- **数据层**: 使用eda.sys_Storage进行本地存储

### 模块划分

- **通信模块**: index.ts中的消息监听器和openCozePanel函数
- **API服务模块**: cozeApiService.ts - 负责与扣子API通信
- **存储模块**: storageService.ts - 负责配置和历史记录存储
- **前端交互模块**: iframe/app.js - 处理用户交互和UI更新

### 数据流

```
用户点击菜单 → openCozePanel() → eda.sys_IFrame.openIFrame() → iframe加载
用户输入 → iframe/app.js → postMessage → index.ts消息监听
→ handleSendMessage() → cozeApiService.sendMessage() → 扣子API v3
→ parseResponse() → postMessage → iframe → 显示结果
```

## 实现细节

### 核心目录结构

```
project-root/
├── src/
│   ├── index.ts              # 修改: 修复消息监听器问题
│   ├── services/
│   │   ├── cozeApiService.ts # 修改: 升级到API v3,添加Token验证
│   │   └── storageService.ts # 无需修改
│   └── types/
│       ├── conversation.ts   # 无需修改
│       ├── context.ts        # 无需修改
│       └── command.ts       # 无需修改
└── iframe/
    ├── index.html            # 无需修改
    ├── app.js                # 无需修改
    └── styles.css            # 无需修改
```

### 关键代码结构

**1. 消息监听器修复**
问题: index.ts第93行的消息监听器条件判断`event.source !== window`会导致无法处理iframe消息
修复方案: 将条件改为`event.source === window.parent`或直接移除该判断,因为iframe的postMessage来自window.parent

**2. API v3升级**
当前API端点: `${apiEndpoint}/open_api/v2/chat`
新API端点: `${apiEndpoint}/v3/chat`

请求体变更:

```typescript
// v2格式 (旧)
{
  bot_id: string,
  user: string,
  query: string,
  conversation_id: string,
  stream: false,
  additional_messages: CozeApiMessage[]
}

// v3格式 (新)
{
  bot_id: string,
  user_id: string,  // user改为user_id
  additional_messages: CozeApiMessage[],  // 用户输入也放入additional_messages
  auto_save_history: true,  // 可选
  stream: false
}
```

响应处理变更:

```typescript
// v3响应包含chat_id,需要保存到storage
interface CozeV3Response {
	code: number;
	message?: string;
	data: {
		chat_id: string;
		status: string;
		messages: {
			role: string;
			content: string;
			content_type: string;
		}[];
	};
}
```

**3. Token验证**
在sendMessage和testConnection方法中添加Token验证:

```typescript
if (!this.config.apiToken || !this.config.apiToken.trim()) {
	throw new Error('API Token未配置,请在设置中填写Token');
}
if (!this.config.botId || !this.config.botId.trim()) {
	throw new Error('Bot ID未配置,请在设置中填写Bot ID');
}
```

### 技术实现计划

#### 问题1: 修复消息监听器

1. 修改index.ts第94行的条件判断
2. 测试iframe与插件主进程的消息通信

#### 问题2: 升级到API v3

1. 修改cozeApiService.ts中的API端点
2. 更新请求体构建逻辑,移除query参数,使用user_id
3. 添加auto_save_history参数
4. 更新响应解析逻辑,处理chat_id

#### 问题3: 添加Token验证

1. 在sendMessage和testConnection方法开头添加Token和BotId验证
2. 在cozeApiService.ts构造函数中添加参数验证

### 集成点

- **iframe通信**: 使用window.parent.postMessage进行跨窗口通信
- **API通信**: 使用eda.sys_ClientUrl.request发送HTTP请求
- **本地存储**: 使用eda.sys_Storage存储配置和历史记录
- **UI交互**: 使用eda.sys_Dialog显示消息提示

### 技术注意事项

- API v3使用`user_id`替代`user`参数
- 所有消息通过`additional_messages`传递,不再使用`query`参数
- 响应中的`chat_id`需要保存以维持会话连续性
- Token验证必须在发送API请求前进行,避免无效请求

## Agent Extensions

### SubAgent

- **code-explorer**
- Purpose: 探索项目结构,查找相关文件和代码模式
- Expected outcome: 确认所有相关文件的修改点和依赖关系
