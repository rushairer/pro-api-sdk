# PCB_PrimitiveDimension

## 概述

PCB & 封装 / 尺寸标注图元类

## 方法列表

| 方法名                                       | 说明                      |
| -------------------------------------------- | ------------------------- |
| [`create`](#create)                          | 创建尺寸标注              |
| [`delete`](#delete) ⚠️                       | 删除尺寸标注              |
| [`modify`](#modify) ⚠️                       | 修改尺寸标注              |
| [`get`](#get) ⚠️                             | 获取尺寸标注              |
| [`get`](#get) ⚠️                             | 获取尺寸标注              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有尺寸标注的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有尺寸标注          |

---

## 方法详情

### create

创建尺寸标注

**方法签名:**

```typescript
create(dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer?: TPCB_LayersOfDimension, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, lineWidth?: number, precision?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveDimension | undefined>
```

**参数:**

| 参数名        | 类型                                   | 描述                   |
| ------------- | -------------------------------------- | ---------------------- | -------------- | -------------- | ---- |
| dimensionType | `EPCB_PrimitiveDimensionType`          | 尺寸标注类型           |
| coordinateSet | `TPCB_PrimitiveDimensionCoordinateSet` | 尺寸标注坐标集         |
| layer         | `TPCB_LayersOfDimension`               | 层                     |
| unit          | `ESYS_Unit.MILLIMETER                  | ESYS_Unit.CENTIMETER   | ESYS_Unit.INCH | ESYS_Unit.MIL` | 单位 |
| lineWidth     | `number`                               | 线宽                   |
| precision     | `number`                               | 精度，取值范围 `0`-`4` |
| primitiveLock | `boolean`                              | 是否锁定               |

**返回值:**

尺寸标注图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除尺寸标注

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                    |
| ------------ | ------- | ----------------------- | ------------- | ------------------------------- | ------------------------------------ |
| primitiveIds | `string | IPCB_PrimitiveDimension | Array<string> | Array<IPCB_PrimitiveDimension>` | 尺寸标注的图元 ID 或尺寸标注图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改尺寸标注

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveDimension, property: { dimensionType?: EPCB_PrimitiveDimensionType
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

尺寸标注图元对象

---

### get

> ⚠️ **Beta 阶段**

获取尺寸标注

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveDimension | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                      |
| ------------ | -------- | ------------------------------------------------------------------------- |
| primitiveIds | `string` | 尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

尺寸标注图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取尺寸标注

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveDimension>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                      |
| ------------ | --------------- | ------------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 尺寸标注的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

尺寸标注图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有尺寸标注的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                     | 描述     |
| ------------- | ------------------------ | -------- |
| layer         | `TPCB_LayersOfDimension` | 层       |
| primitiveLock | `boolean`                | 是否锁定 |

**返回值:**

尺寸标注的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有尺寸标注

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfDimension, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveDimension>>
```

**参数:**

| 参数名        | 类型                     | 描述     |
| ------------- | ------------------------ | -------- |
| layer         | `TPCB_LayersOfDimension` | 层       |
| primitiveLock | `boolean`                | 是否锁定 |

**返回值:**

尺寸标注图元对象数组
