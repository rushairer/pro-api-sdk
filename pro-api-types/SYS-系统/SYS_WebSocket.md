# SYS_WebSocket

## 概述

系统 / WebSocket 类

## 备注

> 与 WebSocket 服务器交互

## 方法列表

| 方法名                  | 说明                        |
| ----------------------- | --------------------------- |
| [`register`](#register) | 注册 WebSocket 连接         |
| [`send`](#send)         | 向 WebSocket 服务器发送数据 |
| [`close`](#close)       | 关闭 WebSocket 连接         |

---

## 方法详情

### register

注册 WebSocket 连接
可以用来执行前检测 WebSocket 连接是否正常，但需要注意 **不要尝试相同 ID 不同参数的连接**，这会造成混乱：
如果存在指定 ID 且处于活跃状态中的 WebSocket 连接，那么其余参数的变更将不会被应用
注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
register(id: string, serviceUri: string, receiveMessageCallFn?: (event: MessageEvent<any>) => void | Promise<void>, connectedCallFn?: () => void | Promise<void>, protocols?: string | Array<string>): void
```

**参数:**

| 参数名               | 类型                        | 描述                   |
| -------------------- | --------------------------- | ---------------------- |
| id                   | `string`                    | 自定义 WebSocket ID    |
| serviceUri           | `string`                    | WebSocket 服务地址     |
| receiveMessageCallFn | `(event: MessageEvent<any>` | 接收到消息时的回调函数 |
| connectedCallFn      |                             | 连接建立时的回调函数   |
| protocols            |                             | 子协议                 |

---

### send

向 WebSocket 服务器发送数据

**备注:**

> 注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
send(id: string, data: string | ArrayBuffer | Blob | ArrayBufferView, extensionUuid?: string): void
```

**参数:**

| 参数名        | 类型     | 描述                                                                                              |
| ------------- | -------- | ------------------------------------------------------------------------------------------------- | ---- | ---------------- | ---------- |
| id            | `string` | 自定义的 WebSocket ID                                                                             |
| data          | `string  | ArrayBuffer                                                                                       | Blob | ArrayBufferView` | 发送的数据 |
| extensionUuid | `string` | 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID |

---

### close

关闭 WebSocket 连接

**备注:**

> 注意：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
close(id: string, code?: number, reason?: string, extensionUuid?: string): void
```

**参数:**

| 参数名        | 类型     | 描述                                                                                              |
| ------------- | -------- | ------------------------------------------------------------------------------------------------- | ------------------------------------ |
| id            | `string` | 自定义的 WebSocket ID                                                                             |
| code          | `number` | 数字状态码，对应 {@link https://developer.mozilla.org/docs/Web/API/CloseEvent/code                | WebSocket.CloseEvent} 内允许的状态码 |
| reason        | `string` | 一个人类可读的字符串，解释连接关闭的原因                                                          |
| extensionUuid | `string` | 扩展 UUID，一般不需要指定，仅当需要操作其它扩展建立的 WebSocket 连接时才需要指定为其它扩展的 UUID |
