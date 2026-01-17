# PCB_PrimitiveVia

## 概述

PCB & 封装 / 过孔图元类

## 方法列表

| 方法名                                       | 说明                |
| -------------------------------------------- | ------------------- |
| [`create`](#create)                          | 创建过孔            |
| [`delete`](#delete) ⚠️                       | 删除过孔            |
| [`modify`](#modify) ⚠️                       | 修改过孔            |
| [`get`](#get) ⚠️                             | 获取过孔            |
| [`get`](#get) ⚠️                             | 获取过孔            |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有过孔图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有过孔        |

---

## 方法详情

### create

创建过孔

**方法签名:**

```typescript
create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>
```

**参数:**

| 参数名                 | 类型                                           | 描述     |
| ---------------------- | ---------------------------------------------- | -------- | ------------------------------------------------------------------- |
| net                    | `string`                                       | 网络名称 |
| x                      | `number`                                       | 坐标 X   |
| y                      | `number`                                       | 坐标 Y   |
| holeDiameter           | `number`                                       | 孔径     |
| diameter               | `number`                                       | 外径     |
| viaType                | `EPCB_PrimitiveViaType`                        | 过孔类型 |
| designRuleBlindViaName | `string                                        | null`    | 盲埋孔设计规则项名称，定义过孔的开始层与结束层，`null` 表示非盲埋孔 |
| solderMaskExpansion    | `IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null`    | 阻焊/助焊扩展，`null` 表示跟随规则                                  |
| primitiveLock          | `boolean`                                      | 是否锁定 |

**返回值:**

过孔图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除过孔

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述              |
| ------------ | ------- | ----------------- | ------------- | ------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveVia | Array<string> | Array<IPCB_PrimitiveVia>` | 过孔的图元 ID 或过孔图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改过孔

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveVia, property: { net?: string
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

过孔图元对象

---

### get

> ⚠️ **Beta 阶段**

获取过孔

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveVia | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

过孔图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取过孔

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveVia>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 过孔的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

过孔图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有过孔图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(net?: string, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型      | 描述     |
| ------------- | --------- | -------- |
| net           | `string`  | 网络名称 |
| primitiveLock | `boolean` | 是否锁定 |

**返回值:**

过孔的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有过孔

**方法签名:**

```typescript
getAll(net?: string, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveVia>>
```

**参数:**

| 参数名        | 类型      | 描述     |
| ------------- | --------- | -------- |
| net           | `string`  | 网络名称 |
| primitiveLock | `boolean` | 是否锁定 |

**返回值:**

过孔图元对象数组
