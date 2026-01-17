# DMT_Pcb

## 概述

文档树 / PCB 管理类

## 备注

> 在当前打开的工程内进行 PCB 管理的相关操作

## 方法列表

| 方法名                                    | 说明                          |
| ----------------------------------------- | ----------------------------- |
| [`createPcb`](#createpcb)                 | 创建 PCB                      |
| [`modifyPcbName`](#modifypcbname)         | 修改 PCB 名称                 |
| [`copyPcb`](#copypcb)                     | 复制 PCB                      |
| [`getPcbInfo`](#getpcbinfo)               | 获取 PCB 的详细属性           |
| [`getAllPcbsInfo`](#getallpcbsinfo)       | 获取工程内所有 PCB 的详细属性 |
| [`getCurrentPcbInfo`](#getcurrentpcbinfo) | 获取当前 PCB 的详细属性       |
| [`deletePcb`](#deletepcb)                 | 删除 PCB                      |

---

## 方法详情

### createPcb

创建 PCB

**方法签名:**

```typescript
createPcb(boardName?: string): Promise<string | undefined>
```

**参数:**

| 参数名    | 类型     | 描述                                 |
| --------- | -------- | ------------------------------------ |
| boardName | `string` | 所属板子名称，如若不指定则为游离 PCB |

**返回值:**

PCB UUID，如若为 `undefined` 则创建失败

---

### modifyPcbName

修改 PCB 名称

**备注:**

> 如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联原理图名称

**方法签名:**

```typescript
modifyPcbName(pcbUuid: string, pcbName: string): Promise<boolean>
```

**参数:**

| 参数名  | 类型     | 描述     |
| ------- | -------- | -------- |
| pcbUuid | `string` | PCB UUID |
| pcbName | `string` | PCB 名称 |

**返回值:**

是否修改成功

---

### copyPcb

复制 PCB

**备注:**

> 即使此处 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），也不新建复用模块符号，此操作逻辑与当前编辑器前端保持一致

**方法签名:**

```typescript
copyPcb(pcbUuid: string, boardName?: string): Promise<string | undefined>
```

**参数:**

| 参数名    | 类型     | 描述                                        |
| --------- | -------- | ------------------------------------------- |
| pcbUuid   | `string` | 源 PCB UUID                                 |
| boardName | `string` | 新 PCB 所属板子名称，如若不指定则为游离 PCB |

**返回值:**

新 PCB UUID，如若为 `undefined` 则复制失败

---

### getPcbInfo

获取 PCB 的详细属性

**方法签名:**

```typescript
getPcbInfo(pcbUuid: string): Promise<IDMT_PcbItem | undefined>
```

**参数:**

| 参数名  | 类型     | 描述     |
| ------- | -------- | -------- |
| pcbUuid | `string` | PCB UUID |

**返回值:**

PCB 的详细属性，如若为 `undefined` 则获取失败

---

### getAllPcbsInfo

获取工程内所有 PCB 的详细属性

**方法签名:**

```typescript
getAllPcbsInfo(): Promise<Array<IDMT_PcbItem>>
```

**返回值:**

所有 PCB 的详细属性的数组

---

### getCurrentPcbInfo

获取当前 PCB 的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的 PCB 的详细属性

**方法签名:**

```typescript
getCurrentPcbInfo(): Promise<IDMT_PcbItem | undefined>
```

**返回值:**

PCB 的详细属性，如若为 `undefined` 则获取失败

---

### deletePcb

删除 PCB

**备注:**

> 如若 PCB 已关联复用模块（在工程库内存在同名的复用模块符号），则删除 PCB 时将同步删除关联的原理图和复用模块符号，复用模块符号不可删除则跳过

**方法签名:**

```typescript
deletePcb(pcbUuid: string): Promise<boolean>
```

**参数:**

| 参数名  | 类型     | 描述     |
| ------- | -------- | -------- |
| pcbUuid | `string` | PCB UUID |

**返回值:**

操作是否成功
