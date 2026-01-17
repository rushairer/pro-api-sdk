# PCB_PrimitiveObject

## 概述

PCB & 封装 / 二进制内嵌对象图元类

## 备注

> 彩色丝印图像属于二进制内嵌对象，需要使用二进制内嵌对象的方法创建和修改

## 方法列表

| 方法名                                       | 说明                            |
| -------------------------------------------- | ------------------------------- |
| [`create`](#create) ⚠️                       | 创建二进制内嵌对象              |
| [`delete`](#delete) ⚠️                       | 删除二进制内嵌对象              |
| [`modify`](#modify) ⚠️                       | 修改二进制内嵌对象              |
| [`get`](#get) ⚠️                             | 获取二进制内嵌对象              |
| [`get`](#get) ⚠️                             | 获取二进制内嵌对象              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有二进制内嵌对象的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有二进制内嵌对象          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建二进制内嵌对象

**方法签名:**

```typescript
create(layer: TPCB_LayersOfObject, topLeftX: number, topLeftY: number, binaryData: string, width: number, height: number, rotation?: number, mirror?: boolean, fileName?: string, primitiveLock?: boolean): Promise<IPCB_PrimitiveObject | undefined>
```

**参数:**

| 参数名        | 类型                  | 描述         |
| ------------- | --------------------- | ------------ |
| layer         | `TPCB_LayersOfObject` | 层           |
| topLeftX      | `number`              | 左上点 X     |
| topLeftY      | `number`              | 左上点 Y     |
| binaryData    | `string`              | 二进制数据   |
| width         | `number`              | 宽           |
| height        | `number`              | 高           |
| rotation      | `number`              | 旋转角度     |
| mirror        | `boolean`             | 是否水平镜像 |
| fileName      | `string`              | 文件名       |
| primitiveLock | `boolean`             | 是否锁定     |

**返回值:**

- 二进制内嵌对象图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除二进制内嵌对象

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                 |
| ------------ | ------- | -------------------- | ------------- | ---------------------------- | ------------------------------------------------ |
| primitiveIds | `string | IPCB_PrimitiveObject | Array<string> | Array<IPCB_PrimitiveObject>` | 二进制内嵌对象的图元 ID 或二进制内嵌对象图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改二进制内嵌对象

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveObject, property: { layer?: TPCB_LayersOfObject
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

二进制内嵌对象图元对象，`undefined` 表示修改失败

---

### get

> ⚠️ **Beta 阶段**

获取二进制内嵌对象

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveObject | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                            |
| ------------ | -------- | ------------------------------------------------------------------------------- |
| primitiveIds | `string` | 二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

二进制内嵌对象图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取二进制内嵌对象

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveObject>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                            |
| ------------ | --------------- | ------------------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 二进制内嵌对象的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

二进制内嵌对象图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有二进制内嵌对象的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                  | 描述     |
| ------------- | --------------------- | -------- |
| layer         | `TPCB_LayersOfObject` | 层       |
| primitiveLock | `boolean`             | 是否锁定 |

**返回值:**

二进制内嵌对象的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有二进制内嵌对象

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfObject, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveObject>>
```

**参数:**

| 参数名        | 类型                  | 描述     |
| ------------- | --------------------- | -------- |
| layer         | `TPCB_LayersOfObject` | 层       |
| primitiveLock | `boolean`             | 是否锁定 |

**返回值:**

二进制内嵌对象图元对象数组
