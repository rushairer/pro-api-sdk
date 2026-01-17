# SCH_PrimitivePin

## 概述

原理图 & 符号 / 引脚图元类

## 备注

> 引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 {@link ISCH_PrimitiveComponentPin | 器件引脚图元}

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建引脚              |
| [`delete`](#delete) ⚠️                       | 删除引脚              |
| [`modify`](#modify) ⚠️                       | 修改引脚              |
| [`get`](#get) ⚠️                             | 获取引脚              |
| [`get`](#get) ⚠️                             | 获取引脚              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有引脚的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有引脚          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建引脚

**方法签名:**

```typescript
create(x: number, y: number, pinNumber: string, pinName?: string, rotation?: number, pinLength?: number, pinColor?: string | null, pinShape?: ESCH_PrimitivePinShape, pinType?: ESCH_PrimitivePinType): Promise<ISCH_PrimitivePin | undefined>
```

**参数:**

| 参数名    | 类型                     | 描述                                |
| --------- | ------------------------ | ----------------------------------- | ------------------------- |
| x         | `number`                 | 坐标 X                              |
| y         | `number`                 | 坐标 Y                              |
| pinNumber | `string`                 | 引脚编号                            |
| pinName   | `string`                 | 引脚名称                            |
| rotation  | `number`                 | 旋转角度，可选 `0` `90` `180` `270` |
| pinLength | `number`                 | 引脚长度                            |
| pinColor  | `string                  | null`                               | 引脚颜色，`null` 表示默认 |
| pinShape  | `ESCH_PrimitivePinShape` | 引脚形状                            |
| pinType   | `ESCH_PrimitivePinType`  | 引脚类型                            |

**返回值:**

引脚图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除引脚

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitivePin | Array<string> | Array<ISCH_PrimitivePin>` | 引脚的图元 ID 或引脚图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改引脚

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitivePin, property: { x?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

引脚图元对象

---

### get

> ⚠️ **Beta 阶段**

获取引脚

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitivePin | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

引脚图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取引脚

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitivePin>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 引脚的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

引脚图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有引脚的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

引脚的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有引脚

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitivePin>>
```

**返回值:**

引脚图元对象数组
