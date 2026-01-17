# SYS_Message

## 概述

系统 / 消息通知类

## 备注

> 生成各种对用户的非侵入式提醒

## 方法列表

| 方法名                                             | 说明               |
| -------------------------------------------------- | ------------------ |
| [`showToastMessage`](#showtoastmessage)            | 显示吐司消息       |
| [`showFollowMouseTip`](#showfollowmousetip) ⚠️     | 展示跟随鼠标的提示 |
| [`removeFollowMouseTip`](#removefollowmousetip) ⚠️ | 移除跟随鼠标的提示 |

---

## 方法详情

### showToastMessage

显示吐司消息

**方法签名:**

```typescript
showToastMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void
```

**参数:**

| 参数名           | 类型                    | 描述                                         |
| ---------------- | ----------------------- | -------------------------------------------- |
| message          | `string`                | 消息内容                                     |
| messageType      | `ESYS_ToastMessageType` | 消息类型                                     |
| timer            | `number`                | 自动关闭倒计时秒数，`0` 为不自动关闭         |
| bottomPanel      | `ESYS_BottomPanelTab`   | 展开底部信息面板                             |
| buttonTitle      | `string`                | 回调按钮标题                                 |
| buttonCallbackFn | `string`                | 回调函数内容，字符串形式，会被自动解析并执行 |

---

### showFollowMouseTip

> ⚠️ **Beta 阶段**

展示跟随鼠标的提示

**备注:**

> 同一时间只能展示一条提示，如果展示新的提示，则之前的提示将被自动移除

**方法签名:**

```typescript
showFollowMouseTip(tip: string, msTimeout?: number): Promise<void>
```

**参数:**

| 参数名    | 类型     | 描述                                                                                                 |
| --------- | -------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------- |
| tip       | `string` | 提示内容                                                                                             |
| msTimeout | `number` | 展示时间，以毫秒（ms）为单位，如若不传入则持续展示，直到调用 {@link SYS_Message.removeFollowMouseTip | removeFollowMouseTip} 或被其它提示覆盖 |

---

### removeFollowMouseTip

> ⚠️ **Beta 阶段**

移除跟随鼠标的提示

**备注:**

> 移除当前或指定的跟随鼠标的提示

**方法签名:**

```typescript
removeFollowMouseTip(tip?: string): Promise<void>
```

**参数:**

| 参数名 | 类型     | 描述                                                 |
| ------ | -------- | ---------------------------------------------------- |
| tip    | `string` | 提示内容，如若传入，则仅当当前提示为指定内容时才移除 |
