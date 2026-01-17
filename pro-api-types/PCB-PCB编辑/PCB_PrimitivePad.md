# PCB_PrimitivePad

## 概述

PCB & 封装 / 焊盘图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create)                          | 创建焊盘              |
| [`delete`](#delete) ⚠️                       | 删除焊盘              |
| [`modify`](#modify) ⚠️                       | 修改焊盘              |
| [`get`](#get) ⚠️                             | 获取焊盘              |
| [`get`](#get) ⚠️                             | 获取焊盘              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有焊盘的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有焊盘          |

---

## 方法详情

### create

创建焊盘

**方法签名:**

```typescript
create(layer: TPCB_LayersOfPad, padNumber: string, x: number, y: number, rotation?: number, pad?: TPCB_PrimitivePadShape, net?: string, hole?: TPCB_PrimitivePadHole | null, holeOffsetX?: number, holeOffsetY?: number, holeRotation?: number, metallization?: boolean, padType?: EPCB_PrimitivePadType, specialPad?: TPCB_PrimitiveSpecialPadShape, solderMaskAndPasteMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, heatWelding?: IPCB_PrimitivePadHeatWelding | null, primitiveLock?: boolean): Promise<IPCB_PrimitivePad | undefined>
```

**参数:**

| 参数名                          | 类型                                           | 描述                   |
| ------------------------------- | ---------------------------------------------- | ---------------------- | ---------------------------------- |
| layer                           | `TPCB_LayersOfPad`                             | 层                     |
| padNumber                       | `string`                                       | 焊盘编号               |
| x                               | `number`                                       | 位置 X                 |
| y                               | `number`                                       | 位置 Y                 |
| rotation                        | `number`                                       | 旋转角度               |
| pad                             | `TPCB_PrimitivePadShape`                       | 焊盘外形               |
| net                             | `string`                                       | 网络名称               |
| hole                            | `TPCB_PrimitivePadHole                         | null`                  | 孔，`null` 标识无孔                |
| holeOffsetX                     | `number`                                       | 孔偏移 X               |
| holeOffsetY                     | `number`                                       | 孔偏移 Y               |
| holeRotation                    | `number`                                       | 孔相对于焊盘的旋转角度 |
| metallization                   | `boolean`                                      | 是否金属化孔壁         |
| padType                         | `EPCB_PrimitivePadType`                        | 焊盘类型               |
| specialPad                      | `TPCB_PrimitiveSpecialPadShape`                | 特殊焊盘外形           |
| solderMaskAndPasteMaskExpansion | `IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null`                  | 阻焊/助焊扩展，`null` 表示遵循规则 |
| heatWelding                     | `IPCB_PrimitivePadHeatWelding                  | null`                  | 热焊优化参数                       |
| primitiveLock                   | `boolean`                                      | 是否锁定               |

**返回值:**

焊盘图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除焊盘

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitivePad | Array<string> | Array<IPCB_PrimitivePad>` | 焊盘的图元 ID 或焊盘图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改焊盘

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitivePad, property: { layer?: TPCB_LayersOfPad
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

焊盘图元对象

---

### get

> ⚠️ **Beta 阶段**

获取焊盘

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePad | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 焊盘的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

焊盘图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取焊盘

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePad>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 焊盘的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

焊盘图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有焊盘的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型               | 描述     |
| ------------- | ------------------ | -------- |
| layer         | `TPCB_LayersOfPad` | 层       |
| net           | `string`           | 网络名称 |
| primitiveLock | `boolean`          | 是否锁定 |

**返回值:**

焊盘的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有焊盘

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfPad, net?: string, primitiveLock?: boolean, padType?: EPCB_PrimitivePadType): Promise<Array<IPCB_PrimitivePad>>
```

**参数:**

| 参数名        | 类型               | 描述     |
| ------------- | ------------------ | -------- |
| layer         | `TPCB_LayersOfPad` | 层       |
| net           | `string`           | 网络名称 |
| primitiveLock | `boolean`          | 是否锁定 |

**返回值:**

焊盘图元对象数组
