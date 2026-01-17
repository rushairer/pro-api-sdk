# PCB_PrimitivePour

## 概述

PCB & 封装 / 覆铜边框图元类

## 方法列表

| 方法名                                       | 说明                      |
| -------------------------------------------- | ------------------------- |
| [`create`](#create) ⚠️                       | 创建覆铜边框              |
| [`delete`](#delete) ⚠️                       | 删除覆铜边框              |
| [`modify`](#modify) ⚠️                       | 修改覆铜边框              |
| [`get`](#get) ⚠️                             | 获取覆铜边框              |
| [`get`](#get) ⚠️                             | 获取覆铜边框              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有覆铜边框的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有覆铜边框图元      |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建覆铜边框

**方法签名:**

```typescript
create(net: string, layer: TPCB_LayersOfCopper, complexPolygon: IPCB_Polygon, pourFillMethod?: EPCB_PrimitivePourFillMethod, preserveSilos?: boolean, pourName?: string, pourPriority?: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitivePour | undefined>
```

**参数:**

| 参数名         | 类型                           | 描述           |
| -------------- | ------------------------------ | -------------- |
| net            | `string`                       | 网络名称       |
| layer          | `TPCB_LayersOfCopper`          | 层             |
| complexPolygon | `IPCB_Polygon`                 | 复杂多边形对象 |
| pourFillMethod | `EPCB_PrimitivePourFillMethod` | 覆铜填充方法   |
| preserveSilos  | `boolean`                      | 是否保留孤岛   |
| pourName       | `string`                       | 覆铜名称       |
| pourPriority   | `number`                       | 覆铜优先级     |
| lineWidth      | `number`                       | 线宽           |
| primitiveLock  | `boolean`                      | 是否锁定       |

**返回值:**

覆铜边框图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除覆铜边框

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述               |
| ------------ | ------- | ------------------ | ------------- | -------------------------- | ------------------------------------ |
| primitiveIds | `string | IPCB_PrimitivePour | Array<string> | Array<IPCB_PrimitivePour>` | 覆铜边框的图元 ID 或覆铜边框图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改覆铜边框

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitivePour, property: { net?: string
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

覆铜边框图元对象，`undefined` 表示修改失败

---

### get

> ⚠️ **Beta 阶段**

获取覆铜边框

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitivePour | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                      |
| ------------ | -------- | ------------------------------------------------------------------------- |
| primitiveIds | `string` | 覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

覆铜边框图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取覆铜边框

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitivePour>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                      |
| ------------ | --------------- | ------------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 覆铜边框的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

覆铜边框图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有覆铜边框的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                  | 描述     |
| ------------- | --------------------- | -------- |
| net           | `string`              | 网络名称 |
| layer         | `TPCB_LayersOfCopper` | 层       |
| primitiveLock | `boolean`             | 是否锁定 |

**返回值:**

覆铜边框的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有覆铜边框图元

**方法签名:**

```typescript
getAll(net?: string, layer?: TPCB_LayersOfCopper, primitiveLock?: boolean): Promise<Array<IPCB_PrimitivePour>>
```

**参数:**

| 参数名        | 类型                  | 描述     |
| ------------- | --------------------- | -------- |
| net           | `string`              | 网络名称 |
| layer         | `TPCB_LayersOfCopper` | 层       |
| primitiveLock | `boolean`             | 是否锁定 |

**返回值:**

覆铜边框图元对象数组
