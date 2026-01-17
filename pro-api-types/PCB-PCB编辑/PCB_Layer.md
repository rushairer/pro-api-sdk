# PCB_Layer

## 概述

PCB & 封装 / 图层操作类

## 方法列表

| 方法名                                                             | 说明                   |
| ------------------------------------------------------------------ | ---------------------- |
| [`selectLayer`](#selectlayer)                                      | 选中图层               |
| [`setLayerVisible`](#setlayervisible) ⚠️                           | 将层设置为可见         |
| [`setLayerInvisible`](#setlayerinvisible) ⚠️                       | 将层设置为不可见       |
| [`lockLayer`](#locklayer) ⚠️                                       | 锁定层                 |
| [`unlockLayer`](#unlocklayer) ⚠️                                   | 取消锁定层             |
| [`setTheNumberOfCopperLayers`](#setthenumberofcopperlayers) ⚠️     | 设置铜箔层数           |
| [`setLayerColorConfiguration`](#setlayercolorconfiguration) ⚠️     | 设置层颜色配置         |
| [`setInactiveLayerTransparency`](#setinactivelayertransparency) ⚠️ | 设置非激活层透明度     |
| [`setPcbType`](#setpcbtype) ⚠️                                     | 设置 PCB 类型          |
| [`addCustomLayer`](#addcustomlayer) ⚠️                             | 新增自定义层           |
| [`removeLayer`](#removelayer) ⚠️                                   | 移除层                 |
| [`modifyLayer`](#modifylayer) ⚠️                                   | 修改图层属性           |
| [`getAllLayers`](#getalllayers) ⚠️                                 | 获取所有图层的详细属性 |
| [`setInactiveLayerDisplayMode`](#setinactivelayerdisplaymode) ⚠️   | 设置非激活层展示模式   |

---

## 方法详情

### selectLayer

选中图层

**方法签名:**

```typescript
selectLayer(layer: TPCB_LayersInTheSelectable): Promise<boolean>
```

**参数:**

| 参数名 | 类型                         | 描述 |
| ------ | ---------------------------- | ---- |
| layer  | `TPCB_LayersInTheSelectable` | 层   |

**返回值:**

操作是否成功，不存在指定层将返回 `false`

---

### setLayerVisible

> ⚠️ **Beta 阶段**

将层设置为可见

**方法签名:**

```typescript
setLayerVisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerInvisible?: boolean): Promise<boolean>
```

**参数:**

| 参数名                 | 类型                        | 描述                               |
| ---------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| layer                  | `TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>` | 层，如若不指定任何层则默认为所有层 |
| setOtherLayerInvisible | `boolean`                   | 是否将其它层设置为不可见           |

**返回值:**

操作是否成功

---

### setLayerInvisible

> ⚠️ **Beta 阶段**

将层设置为不可见

**方法签名:**

```typescript
setLayerInvisible(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>, setOtherLayerVisible?: boolean): Promise<boolean>
```

**参数:**

| 参数名               | 类型                        | 描述                               |
| -------------------- | --------------------------- | ---------------------------------- | ---------------------------------- |
| layer                | `TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>` | 层，如若不指定任何层则默认为所有层 |
| setOtherLayerVisible | `boolean`                   | 是否将其它层设置为可见             |

**返回值:**

操作是否成功

---

### lockLayer

> ⚠️ **Beta 阶段**

锁定层

**方法签名:**

```typescript
lockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>
```

**参数:**

| 参数名 | 类型                        | 描述                               |
| ------ | --------------------------- | ---------------------------------- | ---------------------------------- |
| layer  | `TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>` | 层，如若不指定任何层则默认为所有层 |

**返回值:**

操作是否成功

---

### unlockLayer

> ⚠️ **Beta 阶段**

取消锁定层

**方法签名:**

```typescript
unlockLayer(layer?: TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>): Promise<boolean>
```

**参数:**

| 参数名 | 类型                        | 描述                               |
| ------ | --------------------------- | ---------------------------------- | ---------------------------------- |
| layer  | `TPCB_LayersInTheSelectable | Array<TPCB_LayersInTheSelectable>` | 层，如若不指定任何层则默认为所有层 |

**返回值:**

操作是否成功

---

### setTheNumberOfCopperLayers

> ⚠️ **Beta 阶段**

设置铜箔层数

**备注:**

> 新建的 PCB 文档默认拥有两层铜箔层

**方法签名:**

```typescript
setTheNumberOfCopperLayers(numberOfLayers: 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32): Promise<boolean>
```

**参数:**

| 参数名         | 类型 | 描述 |
| -------------- | ---- | ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ---- |
| numberOfLayers | `2   | 4    | 6   | 8   | 10  | 12  | 14  | 16  | 18  | 20  | 22  | 24  | 26  | 28  | 30  | 32` | 层数 |

**返回值:**

操作是否成功

---

### setLayerColorConfiguration

> ⚠️ **Beta 阶段**

设置层颜色配置

**方法签名:**

```typescript
setLayerColorConfiguration(colorConfiguration: EPCB_LayerColorConfiguration): Promise<boolean>
```

**参数:**

| 参数名             | 类型                           | 描述     |
| ------------------ | ------------------------------ | -------- |
| colorConfiguration | `EPCB_LayerColorConfiguration` | 颜色配置 |

**返回值:**

操作是否成功

---

### setInactiveLayerTransparency

> ⚠️ **Beta 阶段**

设置非激活层透明度

**方法签名:**

```typescript
setInactiveLayerTransparency(transparency: number): Promise<boolean>
```

**参数:**

| 参数名       | 类型     | 描述                 |
| ------------ | -------- | -------------------- |
| transparency | `number` | 透明度，范围 `0-100` |

**返回值:**

操作是否成功

---

### setPcbType

> ⚠️ **Beta 阶段**

设置 PCB 类型
此处主要是为了适配 FPC 软板的设计，如若将 PCB 类型设置为 FPC 软板，将会新增 FPC 补强层图层。
请注意：

1. 嘉立创暂不支持超过 2 层铜箔层的 FPC 软板生产；
2. 将 PCB 类型从 FPC 软板切换为普通板材时需要预先删除 FPC 补强层上的任何图元，否则将无法切换并返回 `false` 的结果。

**方法签名:**

```typescript
setPcbType(pcbType: EPCB_PcbPlateType): Promise<boolean>
```

**参数:**

| 参数名  | 类型                | 描述     |
| ------- | ------------------- | -------- |
| pcbType | `EPCB_PcbPlateType` | PCB 类型 |

**返回值:**

操作是否成功

---

### addCustomLayer

> ⚠️ **Beta 阶段**

新增自定义层

**方法签名:**

```typescript
addCustomLayer(): Promise<TPCB_LayersOfCustom | undefined>
```

**返回值:**

新增的自定义层的图层 ID，如若为 `undefined` 则为新增失败，可能是自定义层数量已达到上限

---

### removeLayer

> ⚠️ **Beta 阶段**

移除层

**备注:**

> 当前仅支持移除自定义层

**方法签名:**

```typescript
removeLayer(layer: TPCB_LayersOfCustom): Promise<boolean>
```

**参数:**

| 参数名 | 类型                  | 描述 |
| ------ | --------------------- | ---- |
| layer  | `TPCB_LayersOfCustom` | 层   |

**返回值:**

操作是否成功

---

### modifyLayer

> ⚠️ **Beta 阶段**

修改图层属性

**备注:**

> 仅内层和自定义层允许修改名称；仅内层允许修改类型, 透明度仅支持0-100之间的数

**方法签名:**

```typescript
modifyLayer(layer: TPCB_LayersInTheSelectable, property: { name?: string
```

**参数:**

| 参数名   | 类型 | 描述 |
| -------- | ---- | ---- |
| layer    |      | 层   |
| property |      | 属性 |

**返回值:**

修改后的图层属性，如若为 `undefined` 则代表修改失败或图层不存在

---

### getAllLayers

> ⚠️ **Beta 阶段**

获取所有图层的详细属性

**方法签名:**

```typescript
getAllLayers(): Promise<Array<IPCB_LayerItem>>
```

**返回值:**

所有图层的详细属性

---

### setInactiveLayerDisplayMode

> ⚠️ **Beta 阶段**

设置非激活层展示模式

**方法签名:**

```typescript
setInactiveLayerDisplayMode(displayMode?: EPCB_InactiveLayerDisplayMode): Promise<boolean>
```

**参数:**

| 参数名      | 类型                            | 描述     |
| ----------- | ------------------------------- | -------- |
| displayMode | `EPCB_InactiveLayerDisplayMode` | 展示模式 |

**返回值:**

是否设置成功
