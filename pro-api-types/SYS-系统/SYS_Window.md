# SYS_Window

## 概述

系统 / 窗口类

## 备注

> 为了保证安全性，仅提供有限的窗口跳转与监听支持，更多操作请使用内联框架窗口 {@link SYS_IFrame}

## 方法列表

| 方法名                                        | 说明          |
| --------------------------------------------- | ------------- |
| [`open`](#open)                               | 打开资源窗口  |
| [`addEventListener`](#addeventlistener)       | 新增事件监听  |
| [`removeEventListener`](#removeeventlistener) | 移除事件监听  |
| [`openUI`](#openui)                           | 打开 UI 窗口  |
| [`getCurrentTheme`](#getcurrenttheme)         | 获取当前主题  |
| [`getUrlParam`](#geturlparam)                 | 获取 URL 参数 |
| [`getUrlAnchor`](#geturlanchor)               | 获取 URL 锚点 |

---

## 方法详情

### open

打开资源窗口

**方法签名:**

```typescript
open(url: string, target?: ESYS_WindowOpenTarget): void
```

**参数:**

| 参数名 | 类型                    | 描述                    |
| ------ | ----------------------- | ----------------------- |
| url    | `string`                | 欲加载资源的 URL 或路径 |
| target | `ESYS_WindowOpenTarget` | 上下文目标              |

---

### addEventListener

新增事件监听

**方法签名:**

```typescript
addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: { capture?: boolean
```

**参数:**

| 参数名   | 类型                   | 描述                              |
| -------- | ---------------------- | --------------------------------- |
| type     | `ESYS_WindowEventType` | 事件类型，当前支持 `blur` `focus` |
| listener | `(ev: any`             | 事件监听回调                      |
| options  |                        | 可选参数                          |

**返回值:**

事件监听方法，用于移除事件监听，如若为 `undefined` 则表示创建事件监听失败

---

### removeEventListener

移除事件监听

**方法签名:**

```typescript
removeEventListener(removableObject: ISYS_WindowEventListenerRemovableObject): void
```

**参数:**

| 参数名          | 类型                                      | 描述                   |
| --------------- | ----------------------------------------- | ---------------------- |
| removableObject | `ISYS_WindowEventListenerRemovableObject` | 窗口事件监听可移除对象 |

---

### openUI

打开 UI 窗口

**备注:**

> 非公开接口使用提醒：本接口按原样提供，不提供参数的额外文档，参数可能在任何版本出现破坏性更改并不另行通知

**方法签名:**

```typescript
openUI(uiName: string, args?: { [key: string]: any
```

**参数:**

| 参数名 | 类型 | 描述         |
| ------ | ---- | ------------ |
| uiName |      | UI 名称      |
| args   |      | 可选参数对象 |

---

### getCurrentTheme

获取当前主题

**备注:**

> 获取当前 EDA 主题，**浅色** 或 **深色**

**方法签名:**

```typescript
getCurrentTheme(): Promise<ESYS_Theme>
```

**返回值:**

当前主题

---

### getUrlParam

获取 URL 参数

**方法签名:**

```typescript
getUrlParam(key: string): string | null
```

**参数:**

| 参数名 | 类型     | 描述   |
| ------ | -------- | ------ |
| key    | `string` | 参数名 |

**返回值:**

参数值

---

### getUrlAnchor

获取 URL 锚点

**方法签名:**

```typescript
getUrlAnchor(): string
```

**返回值:**

URL 锚点值
