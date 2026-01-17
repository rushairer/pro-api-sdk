# PCB_PrimitivePolyline

## 概述

PCB & 封装 / 折线图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create)                          | 创建折线              |
| [`delete`](#delete) ⚠️                       | 删除折线              |
| [`modify`](#modify) ⚠️                       | 修改折线              |
| [`get`](#get) ⚠️                             | 获取折线              |
| [`get`](#get) ⚠️                             | 获取折线              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有折线的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有折线          |

---

## 方法详情

### create

创建折线

**方法签名:**

```typescript
create(net: string, layer: TPCB_LayersOfLine, polygon: IPCB_Polygon, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePolyline | undefined>
```

**参数:**

| 参数名        | 类型                | 描述         |
| ------------- | ------------------- | ------------ |
| net           | `string`            | 网络名称     |
| layer         | `TPCB_LayersOfLine` | 层           |
| polygon       | `IPCB_Polygon`      | 单多边形对象 |
| lineWidth     | `number`            | 线宽         |
| primitiveLock | `boolean`           | 是否锁定     |

**返回值:**

折线图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除折线

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                   |
| ------------ | ------- | ---------------------- | ------------- | ------------------------------ | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitivePolyline | Array<string> | Array<IPCB_PrimitivePolyline>` | 折线的图元 ID 或折线图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改折线

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitivePolyline, property: { net?: string
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

折线图元对象

---

### get

> ⚠️ **Beta 阶段**

获取折线

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePolyline | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

折线图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取折线

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePolyline>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 折线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

折线图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有折线的图元 ID

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

获取所有折线

**方法签名:**

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePolyline>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| net           | `string`            | 网络名称 |
| layer         | `TPCB_LayersOfLine` | 层       |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

折线图元对象数组
