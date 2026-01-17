# SYS_ToastMessage

## 概述

系统 / 吐司消息类
@deprecated 即将移除吐司消息类，合并入 {@link SYS_Message | 消息通知类}

## 备注

> 在屏幕的边缘弹出简短的消息提醒，会在一定时间后自动消除

## 方法列表

| 方法名                        | 说明         |
| ----------------------------- | ------------ |
| [`showMessage`](#showmessage) | 显示吐司消息 |

---

## 方法详情

### showMessage

显示吐司消息
@deprecated 请使用 {@link SYS_Message.showToastMessage} 方法替代

**方法签名:**

```typescript
showMessage(message: string, messageType?: ESYS_ToastMessageType, timer?: number, bottomPanel?: ESYS_BottomPanelTab, buttonTitle?: string, buttonCallbackFn?: string): void
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
