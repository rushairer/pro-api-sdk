# SCH_PrimitiveBus

## 概述

原理图 & 符号 / 总线图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建总线              |
| [`delete`](#delete) ⚠️                       | 删除总线              |
| [`modify`](#modify) ⚠️                       | 修改总线              |
| [`get`](#get) ⚠️                             | 获取总线              |
| [`get`](#get) ⚠️                             | 获取总线              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有总线的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有总线          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建总线

**方法签名:**

```typescript
create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>
```

**参数:**

| 参数名    | 类型                    | 描述                  |
| --------- | ----------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------- |
| busName   | `string`                | 总线名称              |
| line      | `Array<number>          | Array<Array<number>>` | 多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败 |
| color     | `string                 | null`                 | 总线颜色，`null` 表示默认                                                                                      |
| lineWidth | `number                 | null`                 | 线宽，范围 `1-10`，`null` 表示默认                                                                             |
| lineType  | `ESCH_PrimitiveLineType | null`                 | 线型，`null` 表示默认                                                                                          |

**返回值:**

总线图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除总线

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveBus | Array<string> | Array<ISCH_PrimitiveBus>` | 总线的图元 ID 或总线图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改总线

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveBus, property: { busName?: string
```

**参数:**

| 参数名      | 类型 | 描述                         |
| ----------- | ---- | ---------------------------- |
| primitiveId |      | 总线的图元 ID 或总线图元对象 |
| property    |      | 修改参数                     |

**返回值:**

总线图元对象

---

### get

> ⚠️ **Beta 阶段**

获取总线

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveBus | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

总线图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取总线

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveBus>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 总线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

总线图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有总线的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

总线的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有总线

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitiveBus>>
```

**返回值:**

总线图元对象数组
