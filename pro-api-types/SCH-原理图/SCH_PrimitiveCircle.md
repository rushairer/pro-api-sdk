# SCH_PrimitiveCircle

## 概述

原理图 & 符号 / 圆图元类

## 方法列表

| 方法名                                       | 说明                |
| -------------------------------------------- | ------------------- |
| [`create`](#create) ⚠️                       | 创建圆              |
| [`delete`](#delete) ⚠️                       | 删除圆              |
| [`modify`](#modify) ⚠️                       | 修改圆              |
| [`get`](#get) ⚠️                             | 获取圆              |
| [`get`](#get) ⚠️                             | 获取圆              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有圆的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有圆          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建圆

**方法签名:**

```typescript
create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle>
```

**参数:**

| 参数名    | 类型                     | 描述   |
| --------- | ------------------------ | ------ | -------------------------------------------- |
| centerX   | `number`                 | 圆心 X |
| centerY   | `number`                 | 圆心 Y |
| radius    | `number`                 | 半径   |
| color     | `string                  | null`  | 颜色，`null` 表示默认                        |
| fillColor | `string                  | null`  | 填充颜色，`none` 表示无填充，`null` 表示默认 |
| lineWidth | `number                  | null`  | 线宽，范围 `1-10`，`null` 表示默认           |
| lineType  | `ESCH_PrimitiveLineType  | null`  | 线型，`null` 表示默认                        |
| fillStyle | `ESCH_PrimitiveFillStyle | null`  | 填充样式，`null` 表示默认                    |

**返回值:**

圆图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除圆

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                 |
| ------------ | ------- | -------------------- | ------------- | ---------------------------- | ------------------------ |
| primitiveIds | `string | ISCH_PrimitiveCircle | Array<string> | Array<ISCH_PrimitiveCircle>` | 圆的图元 ID 或圆图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改圆

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveCircle, property: { centerX?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

圆图元对象

---

### get

> ⚠️ **Beta 阶段**

获取圆

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveCircle | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                |
| ------------ | -------- | ------------------------------------------------------------------- |
| primitiveIds | `string` | 圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取圆

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveCircle>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                |
| ------------ | --------------- | ------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 圆的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有圆的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

圆的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有圆

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitiveCircle>>
```

**返回值:**

圆图元对象数组
