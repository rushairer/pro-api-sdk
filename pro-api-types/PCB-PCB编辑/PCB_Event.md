# PCB_Event

## 概述

PCB & 封装 / 事件类

## 备注

> 注册事件回调

## 方法列表

| 方法名                                                        | 说明                 |
| ------------------------------------------------------------- | -------------------- |
| [`addMouseEventListener`](#addmouseeventlistener)             | 新增鼠标事件监听     |
| [`removeEventListener`](#removeeventlistener)                 | 移除事件监听         |
| [`isEventListenerAlreadyExist`](#iseventlisteneralreadyexist) | 查询事件监听是否存在 |

---

## 方法详情

### addMouseEventListener

新增鼠标事件监听

**方法签名:**

```typescript
addMouseEventListener(id: string, eventType: 'all' | EPCB_MouseEventType, callFn: (eventType: EPCB_MouseEventType) => void | Promise<void>, onlyOnce?: boolean): void
```

**参数:**

| 参数名    | 类型                              | 描述                          |
| --------- | --------------------------------- | ----------------------------- | -------- |
| id        | `string`                          | 事件 ID，用以防止重复注册事件 |
| eventType | `'all'                            | EPCB_MouseEventType`          | 事件类型 |
| callFn    | `(eventType: EPCB_MouseEventType` | 事件触发时的回调函数          |
| onlyOnce  |                                   | 是否仅监听一次                |

---

### removeEventListener

移除事件监听

**方法签名:**

```typescript
removeEventListener(id: string): boolean
```

**参数:**

| 参数名 | 类型     | 描述    |
| ------ | -------- | ------- |
| id     | `string` | 事件 ID |

**返回值:**

是否移除指定事件监听

---

### isEventListenerAlreadyExist

查询事件监听是否存在

**方法签名:**

```typescript
isEventListenerAlreadyExist(id: string): boolean
```

**参数:**

| 参数名 | 类型     | 描述    |
| ------ | -------- | ------- |
| id     | `string` | 事件 ID |

**返回值:**

事件监听是否存在
