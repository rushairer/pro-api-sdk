# SYS_MessageBox

## 概述

系统 / 消息框类
@deprecated 已更名为 {@link SYS_Dialog}

## 备注

> 生成消息提示框

## 方法列表

| 方法名                                                | 说明       |
| ----------------------------------------------------- | ---------- |
| [`showInformationMessage`](#showinformationmessage)   | 显示消息框 |
| [`showConfirmationMessage`](#showconfirmationmessage) | 显示确认框 |

---

## 方法详情

### showInformationMessage

显示消息框
@deprecated 请使用 {@link SYS_Dialog.showInformationMessage} 替代

**备注:**

> 显示一个文字消息提示框

**方法签名:**

```typescript
showInformationMessage(content: string, title?: string, buttonTitle?: string): void
```

**参数:**

| 参数名      | 类型     | 描述                         |
| ----------- | -------- | ---------------------------- |
| content     | `string` | 消息文本，支持使用 `\n` 换行 |
| title       | `string` | 消息框标题                   |
| buttonTitle | `string` | 按钮标题，为空则不显示按钮   |

---

### showConfirmationMessage

显示确认框
@deprecated 请使用 {@link SYS_Dialog.showConfirmationMessage} 替代

**备注:**

> 显示一个拥有确认和取消按钮的确认框

**方法签名:**

```typescript
showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void
```

**参数:**

| 参数名          | 类型                          | 描述                                                                               |
| --------------- | ----------------------------- | ---------------------------------------------------------------------------------- |
| content         | `string`                      | 消息文本，支持使用 `\n` 换行                                                       |
| title           | `string`                      | 确认框标题                                                                         |
| mainButtonTitle | `string`                      | 主要按钮标题                                                                       |
| buttonTitle     | `string`                      | 主要按钮标题                                                                       |
| callbackFn      | `(mainButtonClicked: boolean` | 回调函数，如需调用扩展内的函数，请在函数名前加上扩展的唯一 ID，以西文句号 `.` 分隔 |
