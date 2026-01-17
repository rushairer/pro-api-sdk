# SYS_MessageBus

## 概述

系统 / 消息总线类

## 方法列表

| 方法名                                                | 说明                              |
| ----------------------------------------------------- | --------------------------------- |
| [`createPrivateMessageBus`](#createprivatemessagebus) | 创建私有消息总线                  |
| [`removePrivateMessageBus`](#removeprivatemessagebus) | 移除私有消息总线                  |
| [`push`](#push)                                       | 私有消息总线：推消息              |
| [`pushPublic`](#pushpublic)                           | 公共消息总线：推消息              |
| [`pull`](#pull)                                       | 私有消息总线：拉消息              |
| [`pullPublic`](#pullpublic)                           | 公共消息总线：拉消息              |
| [`pullAsync`](#pullasync)                             | 私有消息总线：拉消息 Promise 版本 |
| [`pullAsyncPublic`](#pullasyncpublic)                 | 公共消息总线：拉消息 Promise 版本 |
| [`publish`](#publish)                                 | 私有消息总线：发布消息            |
| [`publishPublic`](#publishpublic)                     | 公共消息总线：发布消息            |
| [`subscribe`](#subscribe)                             | 私有消息总线：订阅消息            |
| [`subscribePublic`](#subscribepublic)                 | 公共消息总线：订阅消息            |
| [`subscribeOnce`](#subscribeonce)                     | 私有消息总线：订阅单次消息        |
| [`subscribeOncePublic`](#subscribeoncepublic)         | 公共消息总线：订阅单次消息        |
| [`rpcCall`](#rpccall)                                 | 私有消息总线：调用 RPC 服务       |
| [`rpcCallPublic`](#rpccallpublic)                     | 公共消息总线：调用 RPC 服务       |
| [`rpcService`](#rpcservice)                           | 私有消息总线：注册 RPC 服务       |
| [`rpcServicePublic`](#rpcservicepublic)               | 公共消息总线：注册 RPC 服务       |

---

## 方法详情

### createPrivateMessageBus

创建私有消息总线

**备注:**

> 一般无需调用该方法，在进行监听或发送消息时会自动创建私有消息总线

**方法签名:**

```typescript
createPrivateMessageBus(): void
```

---

### removePrivateMessageBus

移除私有消息总线

**备注:**

> 一般无需调用该方法，除非你知道自己在做什么

**方法签名:**

```typescript
removePrivateMessageBus(): void
```

---

### push

私有消息总线：推消息

**备注:**

> 每个消息只有一个 Puller 可以收到

**方法签名:**

```typescript
push(topic: string, message: any): void
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |

---

### pushPublic

公共消息总线：推消息

**备注:**

> 每个消息只有一个 Puller 可以收到

**方法签名:**

```typescript
pushPublic(topic: string, message: any): void
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |

---

### pull

私有消息总线：拉消息

**备注:**

> 每次只能拉一个消息

**方法签名:**

```typescript
pull(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述             |
| ---------- | --------------- | ---------------- |
| topic      | `string`        | 主题             |
| callbackFn | `(message: any` | 拉到消息后的回调 |

**返回值:**

消息总线任务

---

### pullPublic

公共消息总线：拉消息

**备注:**

> 每次只能拉一个消息

**方法签名:**

```typescript
pullPublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述             |
| ---------- | --------------- | ---------------- |
| topic      | `string`        | 主题             |
| callbackFn | `(message: any` | 拉到消息后的回调 |

**返回值:**

消息总线任务

---

### pullAsync

私有消息总线：拉消息 Promise 版本

**备注:**

> 每次只能拉一个消息，可以使用 `await` 等待消息拉取

**方法签名:**

```typescript
pullAsync(topic: string): Promise<any>
```

**参数:**

| 参数名 | 类型     | 描述 |
| ------ | -------- | ---- |
| topic  | `string` | 主题 |

**返回值:**

拉取到的消息

---

### pullAsyncPublic

公共消息总线：拉消息 Promise 版本

**备注:**

> 每次只能拉一个消息，可以使用 `await` 等待消息拉取

**方法签名:**

```typescript
pullAsyncPublic(topic: string): Promise<any>
```

**参数:**

| 参数名 | 类型     | 描述 |
| ------ | -------- | ---- |
| topic  | `string` | 主题 |

**返回值:**

拉取到的消息

---

### publish

私有消息总线：发布消息

**备注:**

> 将消息广播给每一个 Subscriber

**方法签名:**

```typescript
publish(topic: string, message: any): void
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |

---

### publishPublic

公共消息总线：发布消息

**备注:**

> 将消息广播给每一个 Subscriber

**方法签名:**

```typescript
publishPublic(topic: string, message: any): void
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |

---

### subscribe

私有消息总线：订阅消息

**备注:**

> 持久性订阅消息

**方法签名:**

```typescript
subscribe(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述               |
| ---------- | --------------- | ------------------ |
| topic      | `string`        | 主题               |
| callbackFn | `(message: any` | 接收到消息后的回调 |

**返回值:**

消息总线任务

---

### subscribePublic

公共消息总线：订阅消息

**备注:**

> 持久性订阅消息

**方法签名:**

```typescript
subscribePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述               |
| ---------- | --------------- | ------------------ |
| topic      | `string`        | 主题               |
| callbackFn | `(message: any` | 接收到消息后的回调 |

**返回值:**

消息总线任务

---

### subscribeOnce

私有消息总线：订阅单次消息

**方法签名:**

```typescript
subscribeOnce(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述               |
| ---------- | --------------- | ------------------ |
| topic      | `string`        | 主题               |
| callbackFn | `(message: any` | 接收到消息后的回调 |

**返回值:**

消息总线任务

---

### subscribeOncePublic

公共消息总线：订阅单次消息

**方法签名:**

```typescript
subscribeOncePublic(topic: string, callbackFn: (message: any) => void): ISYS_MessageBusTask
```

**参数:**

| 参数名     | 类型            | 描述               |
| ---------- | --------------- | ------------------ |
| topic      | `string`        | 主题               |
| callbackFn | `(message: any` | 接收到消息后的回调 |

**返回值:**

消息总线任务

---

### rpcCall

私有消息总线：调用 RPC 服务

**方法签名:**

```typescript
rpcCall(topic: string, message?: any, timeout?: number): Promise<any>
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |
| timeout | `number` | 超时 |

**返回值:**

RPC 服务返回

---

### rpcCallPublic

公共消息总线：调用 RPC 服务

**方法签名:**

```typescript
rpcCallPublic(topic: string, message?: any, timeout?: number): Promise<any>
```

**参数:**

| 参数名  | 类型     | 描述 |
| ------- | -------- | ---- |
| topic   | `string` | 主题 |
| message | `any`    | 消息 |
| timeout | `number` | 超时 |

**返回值:**

RPC 服务返回

---

### rpcService

私有消息总线：注册 RPC 服务

**方法签名:**

```typescript
rpcService(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void
```

**参数:**

| 参数名     | 类型                   | 描述               |
| ---------- | ---------------------- | ------------------ |
| topic      | `string`               | 主题               |
| callbackFn | `(...args: Array<any>` | 接收到消息后的回调 |

---

### rpcServicePublic

公共消息总线：注册 RPC 服务

**方法签名:**

```typescript
rpcServicePublic(topic: string, callbackFn: (...args: Array<any>) => any | Promise<any>): void
```

**参数:**

| 参数名     | 类型                   | 描述               |
| ---------- | ---------------------- | ------------------ |
| topic      | `string`               | 主题               |
| callbackFn | `(...args: Array<any>` | 接收到消息后的回调 |
