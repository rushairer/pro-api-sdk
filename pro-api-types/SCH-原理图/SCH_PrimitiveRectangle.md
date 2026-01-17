# SCH_PrimitiveRectangle

## 概述

原理图 & 符号 / 矩形图元类

## 方法列表

| 方法名                                    | 说明                  |
| ----------------------------------------- | --------------------- |
| [`create`](#create)                       | 创建矩形              |
| [`delete`](#delete)                       | 删除矩形              |
| [`modify`](#modify) ⚠️                    | 修改矩形              |
| [`get`](#get) ⚠️                          | 获取矩形              |
| [`get`](#get) ⚠️                          | 获取矩形              |
| [`getAllPrimitiveId`](#getallprimitiveid) | 获取所有矩形的图元 ID |
| [`getAll`](#getall)                       | 获取所有矩形          |

---

## 方法详情

### create

创建矩形

**方法签名:**

```typescript
create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>
```

**参数:**

| 参数名       | 类型                     | 描述                                              |
| ------------ | ------------------------ | ------------------------------------------------- | -------------------------------------------- |
| topLeftX     | `number`                 | 左上点 X                                          |
| topLeftY     | `number`                 | 左上点 Y                                          |
| width        | `number`                 | 宽                                                |
| height       | `number`                 | 高                                                |
| cornerRadius | `number`                 | 圆角半径                                          |
| rotation     | `number`                 | 旋转角度，绕左上点旋转，可选 `0` `90` `180` `270` |
| color        | `string                  | null`                                             | 颜色，`null` 表示默认                        |
| fillColor    | `string                  | null`                                             | 填充颜色，`none` 表示无填充，`null` 表示默认 |
| lineWidth    | `number                  | null`                                             | 线宽，范围 `1-10`，`null` 表示默认           |
| lineType     | `ESCH_PrimitiveLineType  | null`                                             | 线型，`null` 表示默认                        |
| fillStyle    | `ESCH_PrimitiveFillStyle | null`                                             | 填充样式，`null` 表示默认                    |

**返回值:**

矩形图元对象

---

### delete

删除矩形

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                    |
| ------------ | ------- | ----------------------- | ------------- | ------------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveRectangle | Array<string> | Array<ISCH_PrimitiveRectangle>` | 矩形的图元 ID 或矩形图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改矩形

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveRectangle, property: { topLeftX?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

矩形图元对象

---

### get

> ⚠️ **Beta 阶段**

获取矩形

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveRectangle | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

矩形图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取矩形

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveRectangle>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 矩形的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

矩形图元对象，空数组表示获取失败

---

### getAllPrimitiveId

获取所有矩形的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

矩形的图元 ID 数组

---

### getAll

获取所有矩形

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitiveRectangle>>
```

**返回值:**

矩形图元对象数组
