# DMT_Panel

## 概述

文档树 / 面板管理类

## 备注

> 在当前打开的工程内进行面板管理的相关操作

## 方法列表

| 方法名                                        | 说明                         |
| --------------------------------------------- | ---------------------------- |
| [`createPanel`](#createpanel) ⚠️              | 创建面板                     |
| [`modifyPanelName`](#modifypanelname)         | 修改面板名称                 |
| [`copyPanel`](#copypanel)                     | 复制面板                     |
| [`getPanelInfo`](#getpanelinfo)               | 获取面板的详细属性           |
| [`getAllPanelsInfo`](#getallpanelsinfo)       | 获取工程内所有面板的详细属性 |
| [`getCurrentPanelInfo`](#getcurrentpanelinfo) | 获取当前面板的详细属性       |
| [`deletePanel`](#deletepanel)                 | 删除面板                     |

---

## 方法详情

### createPanel

> ⚠️ **Beta 阶段**

创建面板

**方法签名:**

```typescript
createPanel(): Promise<string | undefined>
```

**返回值:**

面板 UUID，如若为 `undefined` 则创建失败

---

### modifyPanelName

修改面板名称

**方法签名:**

```typescript
modifyPanelName(panelUuid: string, panelName: string): Promise<boolean>
```

**参数:**

| 参数名    | 类型     | 描述      |
| --------- | -------- | --------- |
| panelUuid | `string` | 面板 UUID |
| panelName | `string` | 面板名称  |

**返回值:**

是否修改成功

---

### copyPanel

复制面板

**方法签名:**

```typescript
copyPanel(panelUuid: string): Promise<string | undefined>
```

**参数:**

| 参数名    | 类型     | 描述        |
| --------- | -------- | ----------- |
| panelUuid | `string` | 源面板 UUID |

**返回值:**

新面板 UUID，如若为 `undefined` 则复制失败

---

### getPanelInfo

获取面板的详细属性

**方法签名:**

```typescript
getPanelInfo(panelUuid: string): Promise<IDMT_PanelItem | undefined>
```

**参数:**

| 参数名    | 类型     | 描述      |
| --------- | -------- | --------- |
| panelUuid | `string` | 面板 UUID |

**返回值:**

面板的详细属性，如若为 `undefined` 则获取失败

---

### getAllPanelsInfo

获取工程内所有面板的详细属性

**方法签名:**

```typescript
getAllPanelsInfo(): Promise<Array<IDMT_PanelItem>>
```

**返回值:**

所有面板的详细属性的数组

---

### getCurrentPanelInfo

获取当前面板的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的面板的详细属性

**方法签名:**

```typescript
getCurrentPanelInfo(): Promise<IDMT_PanelItem | undefined>
```

**返回值:**

面板的详细属性，如若为 `undefined` 则获取失败

---

### deletePanel

删除面板

**方法签名:**

```typescript
deletePanel(panelUuid: string): Promise<boolean>
```

**参数:**

| 参数名    | 类型     | 描述      |
| --------- | -------- | --------- |
| panelUuid | `string` | 面板 UUID |

**返回值:**

操作是否成功
