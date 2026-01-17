# DMT_Board

## 概述

文档树 / 板子管理类

## 备注

> 在当前打开的工程内进行板子管理的相关操作

## 方法列表

| 方法名                                        | 说明                         |
| --------------------------------------------- | ---------------------------- |
| [`createBoard`](#createboard) ⚠️              | 创建板子                     |
| [`modifyBoardName`](#modifyboardname)         | 修改板子名称                 |
| [`copyBoard`](#copyboard)                     | 复制板子                     |
| [`getBoardInfo`](#getboardinfo)               | 获取板子的详细属性           |
| [`getAllBoardsInfo`](#getallboardsinfo)       | 获取工程内所有板子的详细属性 |
| [`getCurrentBoardInfo`](#getcurrentboardinfo) | 获取当前板子的详细属性       |
| [`deleteBoard`](#deleteboard)                 | 删除板子                     |

---

## 方法详情

### createBoard

> ⚠️ **Beta 阶段**

创建板子

**方法签名:**

```typescript
createBoard(schematicUuid?: string, pcbUuid?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述            |
| ------------- | -------- | --------------- |
| schematicUuid | `string` | 关联原理图 UUID |
| pcbUuid       | `string` | 关联 PCB UUID   |

**返回值:**

板子名称，如若为 `undefined` 则创建失败

---

### modifyBoardName

修改板子名称

**方法签名:**

```typescript
modifyBoardName(originalBoardName: string, boardName: string): Promise<boolean>
```

**参数:**

| 参数名            | 类型     | 描述       |
| ----------------- | -------- | ---------- |
| originalBoardName | `string` | 原板子名称 |
| boardName         | `string` | 新板子名称 |

**返回值:**

是否修改成功

---

### copyBoard

复制板子

**方法签名:**

```typescript
copyBoard(sourceBoardName: string): Promise<string | undefined>
```

**参数:**

| 参数名          | 类型     | 描述       |
| --------------- | -------- | ---------- |
| sourceBoardName | `string` | 源板子名称 |

**返回值:**

新板子名称，如若为 `undefined` 则复制失败

---

### getBoardInfo

获取板子的详细属性

**方法签名:**

```typescript
getBoardInfo(boardName: string): Promise<IDMT_BoardItem | undefined>
```

**参数:**

| 参数名    | 类型     | 描述     |
| --------- | -------- | -------- |
| boardName | `string` | 板子名称 |

**返回值:**

板子的详细属性，如若为 `undefined` 则获取失败

---

### getAllBoardsInfo

获取工程内所有板子的详细属性

**方法签名:**

```typescript
getAllBoardsInfo(): Promise<Array<IDMT_BoardItem>>
```

**返回值:**

所有板子的详细属性的数组

---

### getCurrentBoardInfo

获取当前板子的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的原理图、PCB 所关联的板子的详细属性

**方法签名:**

```typescript
getCurrentBoardInfo(): Promise<IDMT_BoardItem | undefined>
```

**返回值:**

板子的详细属性，如若为 `undefined` 则获取失败

---

### deleteBoard

删除板子

**备注:**

> 如若指定板子不存在，接口将返回 `false` 的结果，表示操作失败

**方法签名:**

```typescript
deleteBoard(boardName: string): Promise<boolean>
```

**参数:**

| 参数名    | 类型     | 描述     |
| --------- | -------- | -------- |
| boardName | `string` | 板子名称 |

**返回值:**

操作是否成功
