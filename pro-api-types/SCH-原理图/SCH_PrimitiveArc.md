# SCH_PrimitiveArc

## 概述

原理图 & 符号 / 圆弧图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建圆弧              |
| [`delete`](#delete) ⚠️                       | 删除圆弧              |
| [`modify`](#modify) ⚠️                       | 修改圆弧              |
| [`get`](#get) ⚠️                             | 获取圆弧              |
| [`get`](#get) ⚠️                             | 获取圆弧              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有圆弧的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有圆弧          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建圆弧

**方法签名:**

```typescript
create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>
```

**参数:**

| 参数名     | 类型                    | 描述     |
| ---------- | ----------------------- | -------- | -------------------------------------------- |
| startX     | `number`                | 起始点 X |
| startY     | `number`                | 起始点 Y |
| referenceX | `number`                | 参考点 X |
| referenceY | `number`                | 参考点 Y |
| endX       | `number`                | 终止点 X |
| endY       | `number`                | 终止点 Y |
| color      | `string                 | null`    | 颜色，`null` 表示默认                        |
| fillColor  | `string                 | null`    | 填充颜色，`none` 表示无填充，`null` 表示默认 |
| lineWidth  | `number                 | null`    | 线宽，范围 `1-10`，`null` 表示默认           |
| lineType   | `ESCH_PrimitiveLineType | null`    | 线型，`null` 表示默认                        |

**返回值:**

圆弧图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除圆弧

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveArc | Array<string> | Array<ISCH_PrimitiveArc>` | 圆弧的图元 ID 或圆弧图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改圆弧

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveArc, property: { startX?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

圆弧图元对象

---

### get

> ⚠️ **Beta 阶段**

获取圆弧

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveArc | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 圆弧的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆弧图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取圆弧

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveArc>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 圆弧的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆弧图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有圆弧的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

圆弧的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有圆弧

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitiveArc>>
```

**返回值:**

圆弧图元对象数组
