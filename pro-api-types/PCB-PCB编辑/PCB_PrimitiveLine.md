# PCB_PrimitiveLine

## 概述

PCB & 封装 / 直线图元类

## 备注

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create)                          | 创建直线              |
| [`delete`](#delete) ⚠️                       | 删除直线              |
| [`modify`](#modify) ⚠️                       | 修改直线              |
| [`get`](#get) ⚠️                             | 获取直线              |
| [`get`](#get) ⚠️                             | 获取直线              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有直线的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有直线          |

---

## 方法详情

### create

创建直线

**方法签名:**

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveLine | undefined>
```

**参数:**

| 参数名        | 类型                | 描述       |
| ------------- | ------------------- | ---------- |
| net           | `string`            | 网络名称   |
| layer         | `TPCB_LayersOfLine` | 层         |
| startX        | `number`            | 起始位置 X |
| startY        | `number`            | 起始位置 Y |
| endX          | `number`            | 终止位置 X |
| endY          | `number`            | 终止位置 Y |
| lineWidth     | `number`            | 线宽       |
| primitiveLock | `boolean`           | 是否锁定   |

**返回值:**

直线图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除直线

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述               |
| ------------ | ------- | ------------------ | ------------- | -------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveLine | Array<string> | Array<IPCB_PrimitiveLine>` | 直线的图元 ID 或直线图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改直线

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveLine, property: { net?: string
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

直线图元对象

---

### get

> ⚠️ **Beta 阶段**

获取直线

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveLine | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

直线图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取直线

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveLine>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 直线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

直线图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有直线的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| net           | `string`            | 网络名称 |
| layer         | `TPCB_LayersOfLine` | 层       |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

折线的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有直线

**方法签名:**

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveLine>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| net           | `string`            | 网络名称 |
| layer         | `TPCB_LayersOfLine` | 层       |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

直线图元对象数组
