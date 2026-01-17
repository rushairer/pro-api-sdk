# SYS_Dialog

## 概述

系统 / 对话框类

## 备注

> 生成对话框窗口

## 方法列表

| 方法名                                                | 说明         |
| ----------------------------------------------------- | ------------ |
| [`showInformationMessage`](#showinformationmessage)   | 弹出消息窗口 |
| [`showConfirmationMessage`](#showconfirmationmessage) | 弹出确认窗口 |
| [`showInputDialog`](#showinputdialog) ⚠️              | 弹出输入窗口 |
| [`showSelectDialog`](#showselectdialog) ⚠️            | 弹出选择窗口 |
| [`showSelectDialog`](#showselectdialog) ⚠️            | 弹出多选窗口 |

---

## 方法详情

### showInformationMessage

弹出消息窗口

**备注:**

> 显示一个文字消息窗口

**方法签名:**

```typescript
showInformationMessage(content: string, title?: string, buttonTitle?: string): void
```

**参数:**

| 参数名      | 类型     | 描述                         |
| ----------- | -------- | ---------------------------- |
| content     | `string` | 消息文本，支持使用 `\n` 换行 |
| title       | `string` | 弹出窗口标题                 |
| buttonTitle | `string` | 按钮标题，为空则不显示按钮   |

---

### showConfirmationMessage

弹出确认窗口

**备注:**

> 显示一个拥有确认和取消按钮的窗口

**方法签名:**

```typescript
showConfirmationMessage(content: string, title?: string, mainButtonTitle?: string, buttonTitle?: string, callbackFn?: (mainButtonClicked: boolean) => void): void
```

**参数:**

| 参数名          | 类型                          | 描述                         |
| --------------- | ----------------------------- | ---------------------------- |
| content         | `string`                      | 消息文本，支持使用 `\n` 换行 |
| title           | `string`                      | 弹出窗口标题                 |
| mainButtonTitle | `string`                      | 主要按钮标题                 |
| buttonTitle     | `string`                      | 主要按钮标题                 |
| callbackFn      | `(mainButtonClicked: boolean` | 回调函数                     |

---

### showInputDialog

> ⚠️ **Beta 阶段**

弹出输入窗口

**方法签名:**

```typescript
showInputDialog(beforeContent?: string, afterContent?: string, title?: string, type?: 'color' | 'date' | 'datetime-local' | 'email' | 'mouth' | 'number' | 'password' | 'tel' | 'text' | 'time' | 'url' | 'week', value?: string | number, otherProperty?: { max?: number
```

**参数:**

| 参数名        | 类型 | 描述                                                                                         |
| ------------- | ---- | -------------------------------------------------------------------------------------------- | ----------------------- |
| beforeContent |      | 输入框上方文字                                                                               |
| afterContent  |      | 输入框下方文字                                                                               |
| title         |      | 弹出窗口标题                                                                                 |
| type          |      | 输入框类型                                                                                   |
| value         |      | 输入框默认值                                                                                 |
| otherProperty |      | 其它参数，可参考 {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#attributes | The HTML Input element} |
| callbackFn    |      | 回调函数                                                                                     |

**返回值:**

用户输入的值，始终为 `string` 类型，除非用户点击了 **取消** 按钮

---

### showSelectDialog

> ⚠️ **Beta 阶段**

弹出选择窗口
选项列表，可以为字符串数组或对象数组，在未指定 `defaultOption` 时，默认值为列表的第一项；
如若为字符串数组，则选项的值和选项的展示内容将保持一致；
如若为对象数组，则 `value` 表示选项的值，`displayContent` 表示选项的展示内容

**方法签名:**

```typescript
showSelectDialog(options: Array<string> | Array<{ value: string
```

**参数:**

| 参数名        | 类型 | 描述                                                                                      |
| ------------- | ---- | ----------------------------------------------------------------------------------------- |
| beforeContent |      | 选择框上方文字                                                                            |
| afterContent  |      | 选择框下方文字                                                                            |
| title         |      | 选择框标题                                                                                |
| defaultOption |      | 默认选项，以选项的值作为匹配参数，如若 `multiple` 参数为 `true`，则此处需要传入字符串数组 |
| multiple      |      | 是否支持多选，默认为单选框                                                                |
| callbackFn    |      | 回调函数                                                                                  |

**返回值:**

用户选择的值，对应传入的 `options` 中的 `value` 字段

---

### showSelectDialog

> ⚠️ **Beta 阶段**

弹出多选窗口
选项列表，可以为字符串数组或对象数组，在未指定 `defaultOption` 时，默认值为列表的第一项；
如若为字符串数组，则选项的值和选项的展示内容将保持一致；
如若为对象数组，则 `value` 表示选项的值，`displayContent` 表示选项的展示内容

**方法签名:**

```typescript
showSelectDialog(options: Array<string> | Array<{ value: string
```

**参数:**

| 参数名        | 类型 | 描述                                 |
| ------------- | ---- | ------------------------------------ |
| beforeContent |      | 多选框上方文字                       |
| afterContent  |      | 多选框下方文字                       |
| title         |      | 多选框标题                           |
| defaultOption |      | 默认选项数组，以选项的值作为匹配参数 |
| multiple      |      | 是否支持多选                         |
| callbackFn    |      | 回调函数                             |

**返回值:**

用户选择的值的集合数组，对应传入的 `options` 中的 `value` 字段
