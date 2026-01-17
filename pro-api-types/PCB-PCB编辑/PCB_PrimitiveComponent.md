# PCB_PrimitiveComponent

## 概述

PCB & 封装 / 器件图元类

## 方法列表

| 方法名                                                   | 说明                   |
| -------------------------------------------------------- | ---------------------- |
| [`create`](#create) ⚠️                                   | 创建器件               |
| [`delete`](#delete) ⚠️                                   | 删除器件               |
| [`modify`](#modify) ⚠️                                   | 修改器件               |
| [`get`](#get) ⚠️                                         | 获取器件               |
| [`get`](#get) ⚠️                                         | 获取器件               |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️             | 获取所有器件的图元 ID  |
| [`getAll`](#getall) ⚠️                                   | 获取所有器件           |
| [`getAllPinsByPrimitiveId`](#getallpinsbyprimitiveid) ⚠️ | 获取器件关联的所有焊盘 |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建器件

**方法签名:**

```typescript
create(component: { libraryUuid: string
```

**参数:**

| 参数名        | 类型 | 描述       |
| ------------- | ---- | ---------- |
| component     |      | 关联库器件 |
| layer         |      | 层         |
| x             |      | 坐标 X     |
| y             |      | 坐标 Y     |
| rotation      |      | 旋转角度   |
| primitiveLock |      | 是否锁定   |

**返回值:**

器件图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除器件

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                    |
| ------------ | ------- | ----------------------- | ------------- | ------------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveComponent | Array<string> | Array<IPCB_PrimitiveComponent>` | 器件的图元 ID 或器件图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改器件

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveComponent, property: { layer?: TPCB_LayersOfComponent
```

**参数:**

| 参数名         | 类型 | 描述                        |
| -------------- | ---- | --------------------------- |
| primitiveId    |      | 图元 ID                     |
| layer          |      | 层                          |
| x              |      | 坐标 X                      |
| y              |      | 坐标 Y                      |
| rotation       |      | 旋转角度                    |
| primitiveLock  |      | 是否锁定                    |
| addIntoBom     |      | 是否加入 BOM                |
| designator     |      | 位号                        |
| name           |      | 名称，`null` 表示留空       |
| uniqueId       |      | 唯一 ID，`null` 表示留空    |
| manufacturer   |      | 制造商，`null` 表示留空     |
| manufacturerId |      | 制造商编号，`null` 表示留空 |
| supplier       |      | 供应商，`null` 表示留空     |
| supplierId     |      | 供应商编号，`null` 表示留空 |

**返回值:**

器件图元对象

---

### get

> ⚠️ **Beta 阶段**

获取器件

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveComponent | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

器件图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取器件

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveComponent>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 器件的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

器件图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有器件的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                     | 描述     |
| ------------- | ------------------------ | -------- |
| layer         | `TPCB_LayersOfComponent` | 层       |
| primitiveLock | `boolean`                | 是否锁定 |

**返回值:**

器件的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有器件

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfComponent, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveComponent>>
```

**参数:**

| 参数名        | 类型                     | 描述     |
| ------------- | ------------------------ | -------- |
| layer         | `TPCB_LayersOfComponent` | 层       |
| primitiveLock | `boolean`                | 是否锁定 |

**返回值:**

器件图元对象数组

---

### getAllPinsByPrimitiveId

> ⚠️ **Beta 阶段**

获取器件关联的所有焊盘

**方法签名:**

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<IPCB_PrimitiveComponentPad> | undefined>
```

**参数:**

| 参数名      | 类型     | 描述        |
| ----------- | -------- | ----------- |
| primitiveId | `string` | 器件图元 ID |

**返回值:**

器件焊盘图元数组
