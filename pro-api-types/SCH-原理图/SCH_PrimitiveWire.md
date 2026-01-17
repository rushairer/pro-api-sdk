# SCH_PrimitiveWire

## 概述

原理图 & 符号 / 导线图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建导线              |
| [`delete`](#delete) ⚠️                       | 删除导线              |
| [`modify`](#modify) ⚠️                       | 修改导线              |
| [`get`](#get) ⚠️                             | 获取导线              |
| [`get`](#get) ⚠️                             | 获取导线              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有导线的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有导线          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建导线

1. 没有坐标落在任何图元上，则默认为空网络；
2. 有一个坐标点在某个网络的图元上，则跟随该图元的网络；
3. 有多个坐标点在多个不同网络的图元上，则创建失败
   如若已指定，则遵循：
4. 有一个或多个坐标点在其他网络的图元上，且其他图元并未显式（通常指的是包含网络标签或网络端口）指定网络，则其他图元跟随指定的网络；
5. 如若其他图元指定了网络，则创建失败

**方法签名:**

```typescript
create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>
```

**参数:**

| 参数名    | 类型                    | 描述                           |
| --------- | ----------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| line      | `Array<number>          | Array<Array<number>>`          | 多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败 |
| net       | `string`                | 网络名称，如若未指定，则遵循： |
| color     | `string                 | null`                          | 导线颜色，`null` 表示默认                                                                                      |
| lineWidth | `number                 | null`                          | 线宽，范围 `1-10`，`null` 表示默认                                                                             |
| lineType  | `ESCH_PrimitiveLineType | null`                          | 线型，`null` 表示默认                                                                                          |

**返回值:**

导线图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除导线

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述               |
| ------------ | ------- | ------------------ | ------------- | -------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveWire | Array<string> | Array<ISCH_PrimitiveWire>` | 导线的图元 ID 或导线图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改导线

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveWire, property: { line?: Array<number> | Array<Array<number>>
```

**参数:**

| 参数名      | 类型 | 描述                         |
| ----------- | ---- | ---------------------------- |
| primitiveId |      | 导线的图元 ID 或导线图元对象 |
| property    |      | 修改参数                     |

**返回值:**

导线图元对象

---

### get

> ⚠️ **Beta 阶段**

获取导线

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveWire | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

导线图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取导线

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

导线图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有导线的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(net?: string | Array<string>): Promise<Array<string>>
```

**参数:**

| 参数名 | 类型    | 描述           |
| ------ | ------- | -------------- | -------- |
| net    | `string | Array<string>` | 网络名称 |

**返回值:**

导线的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有导线

**方法签名:**

```typescript
getAll(net?: string | Array<string>): Promise<Array<ISCH_PrimitiveWire>>
```

**参数:**

| 参数名 | 类型    | 描述           |
| ------ | ------- | -------------- | -------- |
| net    | `string | Array<string>` | 网络名称 |

**返回值:**

导线图元对象数组
