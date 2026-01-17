# PCB_PrimitiveArc

## 概述

PCB & 封装 / 圆弧线图元类

## 备注

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## 方法列表

| 方法名                                       | 说明                    |
| -------------------------------------------- | ----------------------- |
| [`create`](#create) ⚠️                       | 创建圆弧线              |
| [`delete`](#delete) ⚠️                       | 删除圆弧线              |
| [`modify`](#modify) ⚠️                       | 修改圆弧线              |
| [`get`](#get) ⚠️                             | 获取圆弧线              |
| [`get`](#get) ⚠️                             | 获取圆弧线              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有圆弧线的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有圆弧线          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建圆弧线

**方法签名:**

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, arcAngle: number, lineWidth?: number, interactiveMode?: EPCB_PrimitiveArcInteractiveMode, primitiveLock?: boolean): Promise<IPCB_PrimitiveArc | undefined>
```

**参数:**

| 参数名          | 类型                               | 描述       |
| --------------- | ---------------------------------- | ---------- |
| net             | `string`                           | 网络名称   |
| layer           | `TPCB_LayersOfLine`                | 层         |
| startX          | `number`                           | 起始位置 X |
| startY          | `number`                           | 起始位置 Y |
| endX            | `number`                           | 终止位置 X |
| endY            | `number`                           | 终止位置 Y |
| arcAngle        | `number`                           | 圆弧角度   |
| lineWidth       | `number`                           | 线宽       |
| interactiveMode | `EPCB_PrimitiveArcInteractiveMode` | 交互模式   |
| primitiveLock   | `boolean`                          | 是否锁定   |

**返回值:**

圆弧线图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除圆弧线

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | -------------------------------- |
| primitiveIds | `string | IPCB_PrimitiveArc | Array<string> | Array<IPCB_PrimitiveArc>` | 圆弧线的图元 ID 或圆弧线图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改圆弧线

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveArc, property: { net?: string
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

圆弧线图元对象

---

### get

> ⚠️ **Beta 阶段**

获取圆弧线

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveArc | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                    |
| ------------ | -------- | ----------------------------------------------------------------------- |
| primitiveIds | `string` | 圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆弧线图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取圆弧线

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveArc>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                    |
| ------------ | --------------- | ----------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 圆弧线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

圆弧线图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有圆弧线的图元 ID

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

圆弧线的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有圆弧线

**方法签名:**

```typescript
getAll(net?: string, layer?: TPCB_LayersOfLine, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveArc>>
```

**参数:**

| 参数名        | 类型                | 描述     |
| ------------- | ------------------- | -------- |
| net           | `string`            | 网络名称 |
| layer         | `TPCB_LayersOfLine` | 层       |
| primitiveLock | `boolean`           | 是否锁定 |

**返回值:**

圆弧线图元对象数组
