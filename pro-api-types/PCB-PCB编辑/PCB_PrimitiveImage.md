# PCB_PrimitiveImage

## 概述

PCB & 封装 / 图像图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create)                          | 创建图像              |
| [`delete`](#delete) ⚠️                       | 删除图像              |
| [`modify`](#modify) ⚠️                       | 修改图像              |
| [`get`](#get) ⚠️                             | 获取图像              |
| [`get`](#get) ⚠️                             | 获取图像              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有图像的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有图像          |

---

## 方法详情

### create

创建图像

**备注:**

> 如需创建彩色丝印图像，请使用 {@link PCB_PrimitiveObject | 二进制内嵌对象图元类}

**方法签名:**

```typescript
create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>
```

**参数:**

| 参数名         | 类型                     | 描述                           |
| -------------- | ------------------------ | ------------------------------ | ------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| x              | `number`                 | BBox 左上点坐标 X              |
| y              | `number`                 | BBox 左上点坐标 Y              |
| complexPolygon | `TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon` | 图像源数据（复杂多边形），可以使用 {@link PCB_MathPolygon.convertImageToComplexPolygon} 方法将图像文件转换为复杂多边形数据 |
| layer          | `TPCB_LayersOfImage`     | 层                             |
| width          | `number`                 | 宽                             |
| height         | `number`                 | 高                             |
| rotation       | `number`                 | 旋转角度                       |
| horizonMirror  | `boolean`                | 是否水平镜像                   |
| primitiveLock  | `boolean`                | 是否锁定                       |

**返回值:**

图像图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除图像

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                |
| ------------ | ------- | ------------------- | ------------- | --------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveImage | Array<string> | Array<IPCB_PrimitiveImage>` | 图像的图元 ID 或图像图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改图像

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveImage, property: { x?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

图像图元对象

---

### get

> ⚠️ **Beta 阶段**

获取图像

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveImage | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

图像图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取图像

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveImage>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 图像的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

图像图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有图像的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                 | 描述     |
| ------------- | -------------------- | -------- |
| layer         | `TPCB_LayersOfImage` | 层       |
| primitiveLock | `boolean`            | 是否锁定 |

**返回值:**

图像的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有图像

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfImage, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveImage>>
```

**参数:**

| 参数名        | 类型                 | 描述     |
| ------------- | -------------------- | -------- |
| layer         | `TPCB_LayersOfImage` | 层       |
| primitiveLock | `boolean`            | 是否锁定 |

**返回值:**

图像图元对象数组
