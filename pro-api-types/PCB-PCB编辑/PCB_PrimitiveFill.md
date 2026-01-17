# PCB_PrimitiveFill

## 概述

PCB & 封装 / 填充图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建填充              |
| [`delete`](#delete) ⚠️                       | 删除填充              |
| [`modify`](#modify) ⚠️                       | 修改填充              |
| [`get`](#get) ⚠️                             | 获取填充              |
| [`get`](#get) ⚠️                             | 获取填充              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有填充的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有填充          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建填充

**方法签名:**

```typescript
create(layer: TPCB_LayersOfFill, complexPolygon: IPCB_Polygon, net?: string, fillMode?: EPCB_PrimitiveFillMode, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveFill | undefined>
```

**参数:**

| 参数名         | 类型                     | 描述           |
| -------------- | ------------------------ | -------------- |
| layer          | `TPCB_LayersOfFill`      | 层             |
| complexPolygon | `IPCB_Polygon`           | 复杂多边形对象 |
| net            | `string`                 | 网络名称       |
| fillMode       | `EPCB_PrimitiveFillMode` | 填充模式       |
| lineWidth      | `number`                 | 线宽           |
| primitiveLock  | `boolean`                | 是否锁定       |

**返回值:**

填充图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除填充

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述               |
| ------------ | ------- | ------------------ | ------------- | -------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveFill | Array<string> | Array<IPCB_PrimitiveFill>` | 填充的图元 ID 或填充图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改填充

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveFill, property: { layer?: TPCB_LayersOfFill
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

填充图元对象，`undefined` 表示修改失败

---

### get

> ⚠️ **Beta 阶段**

获取填充

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveFill | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 填充的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

填充图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取填充

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveFill>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 填充的图元 ID，可��为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

填充图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有填充的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| layer         | `TPCB_LayersOfFill` | 层       |
| net           | `string`            | 网络名称 |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

填充的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有填充

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfFill, net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveFill>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| layer         | `TPCB_LayersOfFill` | 层       |
| net           | `string`            | 网络名称 |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

填充图元对象数组
