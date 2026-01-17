# PCB_PrimitiveRegion

## 概述

PCB & 封装 / 禁止区域和约束区域图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建区域              |
| [`delete`](#delete) ⚠️                       | 删除区域              |
| [`modify`](#modify) ⚠️                       | 修改区域              |
| [`get`](#get) ⚠️                             | 获取区域              |
| [`get`](#get) ⚠️                             | 获取区域              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有区域的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有区域          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建区域

**方法签名:**

```typescript
create(layer: TPCB_LayersOfRegion, complexPolygon: IPCB_Polygon, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, regionName?: string, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveRegion | undefined>
```

**参数:**

| 参数名         | 类型                                  | 描述           |
| -------------- | ------------------------------------- | -------------- |
| layer          | `TPCB_LayersOfRegion`                 | 层             |
| complexPolygon | `IPCB_Polygon`                        | 复杂多边形对象 |
| ruleType       | `Array<EPCB_PrimitiveRegionRuleType>` | 区域规则类型   |
| regionName     | `string`                              | 区域名称       |
| lineWidth      | `number`                              | 线宽           |
| primitiveLock  | `boolean`                             | 是否锁定       |

**返回值:**

区域图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除区域

**方法签名:**

```typescript
delete(primitiveIds: string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                 |
| ------------ | ------- | -------------------- | ------------- | ---------------------------- | ---------------------------- |
| primitiveIds | `string | IPCB_PrimitiveRegion | Array<string> | Array<IPCB_PrimitiveRegion>` | 区域的图元 ID 或区域图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改区域

**方法签名:**

```typescript
modify(primitiveId: string | IPCB_PrimitiveRegion, property: { layer?: TPCB_LayersOfRegion
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

区域图元对象，`undefined` 表示修改失败

---

### get

> ⚠️ **Beta 阶段**

获取区域

**方法签名:**

```typescript
get(primitiveIds: string): Promise<IPCB_PrimitiveRegion | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

区域图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取区域

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<IPCB_PrimitiveRegion>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 区域的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

区域图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有区域的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型                                  | 描述                                           |
| ------------- | ------------------------------------- | ---------------------------------------------- |
| layer         | `TPCB_LayersOfRegion`                 | 层                                             |
| ruleType      | `Array<EPCB_PrimitiveRegionRuleType>` | 区域规则类型，只会匹配所有规则类型均一致的图元 |
| primitiveLock | `boolean`                             | 是否锁定                                       |

**返回值:**

区域的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有区域

**方法签名:**

```typescript
getAll(layer?: TPCB_LayersOfRegion, ruleType?: Array<EPCB_PrimitiveRegionRuleType>, primitiveLock?: boolean): Promise<Array<IPCB_PrimitiveRegion>>
```

**参数:**

| 参数名        | 类型                                  | 描述                                           |
| ------------- | ------------------------------------- | ---------------------------------------------- |
| layer         | `TPCB_LayersOfRegion`                 | 层                                             |
| ruleType      | `Array<EPCB_PrimitiveRegionRuleType>` | 区域规则类型，只会匹配所有规则类型均一致的图元 |
| primitiveLock | `boolean`                             | 是否锁定                                       |

**返回值:**

区域图元对象数组
