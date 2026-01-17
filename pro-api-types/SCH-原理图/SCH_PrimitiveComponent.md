# SCH_PrimitiveComponent

## 概述

原理图 & 符号 / 器件图元类

## 方法列表

| 方法名                                                                               | 说明                                                    |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| [`setNetFlagComponentUuid_Power`](#setnetflagcomponentuuid_power) ⚠️                 | 设置在扩展 API 中 Power 网络标识关联的器件 UUID         |
| [`setNetFlagComponentUuid_Ground`](#setnetflagcomponentuuid_ground) ⚠️               | 设置在扩展 API 中 Ground 网络标识关联的器件 UUID        |
| [`setNetFlagComponentUuid_AnalogGround`](#setnetflagcomponentuuid_analogground) ⚠️   | 设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID  |
| [`setNetFlagComponentUuid_ProtectGround`](#setnetflagcomponentuuid_protectground) ⚠️ | 设置在扩展 API 中 ProtectGround 网络标识关联的器件 UUID |
| [`setNetPortComponentUuid_IN`](#setnetportcomponentuuid_in) ⚠️                       | 设置在扩展 API 中 IN 网络端口关联的器件 UUID            |
| [`setNetPortComponentUuid_OUT`](#setnetportcomponentuuid_out) ⚠️                     | 设置在扩展 API 中 OUT 网络端口关联的器件 UUID           |
| [`setNetPortComponentUuid_BI`](#setnetportcomponentuuid_bi) ⚠️                       | 设置在扩展 API 中 BI 网络端口关联的器件 UUID            |
| [`create`](#create) ⚠️                                                               | 创建器件                                                |
| [`createNetFlag`](#createnetflag) ⚠️                                                 | 创建网络标识                                            |
| [`createNetPort`](#createnetport) ⚠️                                                 | 创建网络端口                                            |
| [`createShortCircuitFlag`](#createshortcircuitflag) ⚠️                               | 创建短接标识                                            |
| [`delete`](#delete) ⚠️                                                               | 删除器件                                                |
| [`modify`](#modify) ⚠️                                                               | 修改器件                                                |
| [`get`](#get) ⚠️                                                                     | 获取器件                                                |
| [`get`](#get) ⚠️                                                                     | 获取器件                                                |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️                                         | 获取所有器件的图元 ID                                   |
| [`getAll`](#getall) ⚠️                                                               | 获取所有器件                                            |
| [`getAllPinsByPrimitiveId`](#getallpinsbyprimitiveid) ⚠️                             | 获取器件关联的所有引脚                                  |
| [`placeComponentWithMouse`](#placecomponentwithmouse) ⚠️                             | 使用鼠标放置器件                                        |
| [`getAllPropertyNames`](#getallpropertynames) ⚠️                                     | 获取所有器件的所有属性名称集合                          |

---

## 方法详情

### setNetFlagComponentUuid_Power

> ⚠️ **Beta 阶段**

设置在扩展 API 中 Power 网络标识关联的器件 UUID

**方法签名:**

```typescript
setNetFlagComponentUuid_Power(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetFlagComponentUuid_Ground

> ⚠️ **Beta 阶段**

设置在扩展 API 中 Ground 网络标识关联的器件 UUID

**方法签名:**

```typescript
setNetFlagComponentUuid_Ground(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetFlagComponentUuid_AnalogGround

> ⚠️ **Beta 阶段**

设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID

**方法签名:**

```typescript
setNetFlagComponentUuid_AnalogGround(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetFlagComponentUuid_ProtectGround

> ⚠️ **Beta 阶段**

设置在扩展 API 中 ProtectGround 网络标识关联的器件 UUID

**方法签名:**

```typescript
setNetFlagComponentUuid_ProtectGround(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetPortComponentUuid_IN

> ⚠️ **Beta 阶段**

设置在扩展 API 中 IN 网络端口关联的器件 UUID

**方法签名:**

```typescript
setNetPortComponentUuid_IN(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetPortComponentUuid_OUT

> ⚠️ **Beta 阶段**

设置在扩展 API 中 OUT 网络端口关联的器件 UUID

**方法签名:**

```typescript
setNetPortComponentUuid_OUT(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### setNetPortComponentUuid_BI

> ⚠️ **Beta 阶段**

设置在扩展 API 中 BI 网络端口关联的器件 UUID

**方法签名:**

```typescript
setNetPortComponentUuid_BI(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

操作是否成功

---

### create

> ⚠️ **Beta 阶段**

创建器件

**方法签名:**

```typescript
create(component: { libraryUuid: string
```

**参数:**

| 参数名      | 类型 | 描述         |
| ----------- | ---- | ------------ |
| component   |      | 关联库器件   |
| subPartName |      | 子图块名称   |
| x           |      | 坐标 X       |
| y           |      | 坐标 Y       |
| rotation    |      | 旋转角度     |
| mirror      |      | 是否镜像     |
| addIntoBom  |      | 是否加入 BOM |
| addIntoPcb  |      | 是否转到 PCB |

**返回值:**

器件图元对象

---

### createNetFlag

> ⚠️ **Beta 阶段**

创建网络标识

**方法签名:**

```typescript
createNetFlag(identification: 'Power' | 'Ground' | 'AnalogGround' | 'ProtectGround', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>
```

**参数:**

| 参数名         | 类型      | 描述     |
| -------------- | --------- | -------- | -------------- | ---------------- | -------- |
| identification | `'Power'  | 'Ground' | 'AnalogGround' | 'ProtectGround'` | 标识类型 |
| net            | `string`  | 网络名称 |
| x              | `number`  | 坐标 X   |
| y              | `number`  | 坐标 Y   |
| rotation       | `number`  | 旋转角度 |
| mirror         | `boolean` | 是否镜像 |

**返回值:**

器件图元对象

---

### createNetPort

> ⚠️ **Beta 阶段**

创建网络端口

**方法签名:**

```typescript
createNetPort(direction: 'IN' | 'OUT' | 'BI', net: string, x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>
```

**参数:**

| 参数名    | 类型      | 描述     |
| --------- | --------- | -------- | ----- | -------- |
| direction | `'IN'     | 'OUT'    | 'BI'` | 端口方向 |
| net       | `string`  | 网络名称 |
| x         | `number`  | 坐标 X   |
| y         | `number`  | 坐标 Y   |
| rotation  | `number`  | 旋转角度 |
| mirror    | `boolean` | 是否镜像 |

**返回值:**

器件图元对象

---

### createShortCircuitFlag

> ⚠️ **Beta 阶段**

创建短接标识

**方法签名:**

```typescript
createShortCircuitFlag(x: number, y: number, rotation?: number, mirror?: boolean): Promise<ISCH_PrimitiveComponent | undefined>
```

**参数:**

| 参数名   | 类型      | 描述     |
| -------- | --------- | -------- |
| x        | `number`  | 坐标 X   |
| y        | `number`  | 坐标 Y   |
| rotation | `number`  | 旋转角度 |
| mirror   | `boolean` | 是否镜像 |

**返回值:**

器件图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除器件

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述                    |
| ------------ | ------- | ----------------------- | ------------- | ------------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveComponent | Array<string> | Array<ISCH_PrimitiveComponent>` | 器件的图元 ID 或器件图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改器件

**备注:**

> 仅当器件类型为 {@link ESCH_PrimitiveComponentType.COMPONENT | COMPONENT} 时允许使用该方法进行修改

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveComponent, property: { x?: number
```

**参数:**

| 参数名         | 类型 | 描述                        |
| -------------- | ---- | --------------------------- |
| primitiveId    |      | 图元 ID                     |
| x              |      | 坐标 X                      |
| y              |      | 坐标 Y                      |
| rotation       |      | 旋转角度                    |
| mirror         |      | 是否镜像                    |
| libraryPath    |      | 库路径，默认为系统库        |
| addIntoBom     |      | 是否加入 BOM                |
| addIntoPcb     |      | 是否转到 PCB                |
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
get(primitiveIds: string): Promise<ISCH_PrimitiveComponent | undefined>
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
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveComponent>>
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
getAllPrimitiveId(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<string>>
```

**参数:**

| 参数名            | 类型                          | 描述                         |
| ----------------- | ----------------------------- | ---------------------------- |
| componentType     | `ESCH_PrimitiveComponentType` | 器件类型                     |
| allSchematicPages | `boolean`                     | 是否获取所有原理图图页的器件 |

**返回值:**

器件的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有器件

**方法签名:**

```typescript
getAll(componentType?: ESCH_PrimitiveComponentType, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent>>
```

**参数:**

| 参数名            | 类型                          | 描述                         |
| ----------------- | ----------------------------- | ---------------------------- |
| componentType     | `ESCH_PrimitiveComponentType` | 器件类型                     |
| allSchematicPages | `boolean`                     | 是否获取所有原理图图页的器件 |

**返回值:**

器件图元对象数组

---

### getAllPinsByPrimitiveId

> ⚠️ **Beta 阶段**

获取器件关联的所有引脚

**方法签名:**

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>
```

**参数:**

| 参数名      | 类型     | 描述        |
| ----------- | -------- | ----------- |
| primitiveId | `string` | 器件图元 ID |

**返回值:**

器件引脚图元数组

---

### placeComponentWithMouse

> ⚠️ **Beta 阶段**

使用鼠标放置器件
本接口模拟前端点击放置按钮，指定的器件将绑定到当前鼠标，并在用户后续点击时放置于画布
本接口的返回时机并不会等待用户的放置操作，一旦器件被绑定到鼠标，本接口将立即返回 `true` 的结果

**方法签名:**

```typescript
placeComponentWithMouse(component: { libraryUuid: string
```

**参数:**

| 参数名    | 类型 | 描述       |
| --------- | ---- | ---------- |
| component |      | 关联库器件 |

**返回值:**

是否找到器件

---

### getAllPropertyNames

> ⚠️ **Beta 阶段**

获取所有器件的所有属性名称集合

**方法签名:**

```typescript
getAllPropertyNames(): Promise<string[]>
```

**返回值:**

所有器件的所有属性名称集合
