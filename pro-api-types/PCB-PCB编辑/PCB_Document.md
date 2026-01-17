# PCB_Document

## 概述

PCB & 封装 / 文档操作类

## 备注

> 对设计文档总体进行的操作

## 方法列表

| 方法名                                                                | 说明                                 |
| --------------------------------------------------------------------- | ------------------------------------ |
| [`importChanges`](#importchanges)                                     | 从原理图导入变更                     |
| [`importAutoRouteJsonFile`](#importautoroutejsonfile) ⚠️              | 导入自动布线文件（JSON）             |
| [`importAutoLayoutJsonFile`](#importautolayoutjsonfile) ⚠️            | 导入自动布局文件（JSON）             |
| [`save`](#save)                                                       | 保存文档                             |
| [`getCalculatingRatlineStatus`](#getcalculatingratlinestatus)         | 获取当前飞线计算功能状态             |
| [`startCalculatingRatline`](#startcalculatingratline)                 | 启动飞线计算功能                     |
| [`stopCalculatingRatline`](#stopcalculatingratline)                   | 停止飞线计算功能                     |
| [`convertCanvasOriginToDataOrigin`](#convertcanvasorigintodataorigin) | 输入画布坐标返回该坐标对应的数据坐标 |
| [`convertDataOriginToCanvasOrigin`](#convertdataorigintocanvasorigin) | 输入数据坐标返回该坐标对应的画布坐标 |
| [`getCanvasOrigin`](#getcanvasorigin)                                 | 获取画布原点相对于数据原点的偏移坐标 |
| [`setCanvasOrigin`](#setcanvasorigin)                                 | 设置画布原点相对于数据原点的偏移坐标 |
| [`navigateToCoordinates`](#navigatetocoordinates)                     | 定位到画布坐标                       |
| [`navigateToRegion`](#navigatetoregion) ⚠️                            | 定位到画布区域                       |
| [`getPrimitiveAtPoint`](#getprimitiveatpoint) ⚠️                      | 获取坐标点的图元                     |
| [`getPrimitivesInRegion`](#getprimitivesinregion) ⚠️                  | 获取区域内所有图元                   |
| [`zoomToBoardOutline`](#zoomtoboardoutline) ⚠️                        | 缩放到板框（适应板框）               |

---

## 方法详情

### importChanges

从原理图导入变更

**方法签名:**

```typescript
importChanges(uuid?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述                                             |
| ------ | -------- | ------------------------------------------------ |
| uuid   | `string` | 原理图 UUID，默认为关联在同一个 Board 下的原理图 |

**返回值:**

导入操作是否成功，导入失败或未传入原理图 UUID 的游离 PCB 将返回 `false`

---

### importAutoRouteJsonFile

> ⚠️ **Beta 阶段**

导入自动布线文件（JSON）

**备注:**

> 可以使用 {@link SYS_FileSystem.openReadFileDialog} 读入文件

**方法签名:**

```typescript
importAutoRouteJsonFile(autoRouteFile: File): Promise<boolean>
```

**参数:**

| 参数名        | 类型   | 描述               |
| ------------- | ------ | ------------------ |
| autoRouteFile | `File` | 欲导入的 JSON 文件 |

**返回值:**

导入操作是否成功

---

### importAutoLayoutJsonFile

> ⚠️ **Beta 阶段**

导入自动布局文件（JSON）

**备注:**

> 可以使用 {@link SYS_FileSystem.openReadFileDialog} 读入文件

**方法签名:**

```typescript
importAutoLayoutJsonFile(autoLayoutFile: File): Promise<boolean>
```

**参数:**

| 参数名         | 类型   | 描述               |
| -------------- | ------ | ------------------ |
| autoLayoutFile | `File` | 欲导入的 JSON 文件 |

**返回值:**

导入操作是否成功

---

### save

保存文档

**方法签名:**

```typescript
save(uuid: string): Promise<boolean>
```

**返回值:**

保存操作是否成功，保存失败、上传失败等错误均返回 `false`

---

### getCalculatingRatlineStatus

获取当前飞线计算功能状态

**方法签名:**

```typescript
getCalculatingRatlineStatus(): Promise<EPCB_DocumentRatlineCalculatingActiveStatus>
```

**返回值:**

功能状态

---

### startCalculatingRatline

启动飞线计算功能

**备注:**

> 在启动时将会触发一次飞线计算

**方法签名:**

```typescript
startCalculatingRatline(): Promise<boolean>
```

**返回值:**

操作是否成功

---

### stopCalculatingRatline

停止飞线计算功能

**方法签名:**

```typescript
stopCalculatingRatline(): Promise<boolean>
```

**返回值:**

操作是否成功

---

### convertCanvasOriginToDataOrigin

输入画布坐标返回该坐标对应的数据坐标

**备注:**

> 嘉立创 EDA 前端显示的坐标均为画布原点；嘉立创 EDA API 使用的均为数据原点；在创建 PCB 时，默认画布原点等于数据原点

**方法签名:**

```typescript
convertCanvasOriginToDataOrigin(x: number, y: number): Promise<{ x: number
```

**参数:**

| 参数名        | 类型 | 描述       |
| ------------- | ---- | ---------- |
| canvasOriginX |      | 画布原点 X |
| canvasOriginY |      | 画布原点 Y |

**返回值:**

数据原点坐标

---

### convertDataOriginToCanvasOrigin

输入数据坐标返回该坐标对应的画布坐标

**备注:**

> 嘉立创 EDA 前端显示的坐标均为画布原点；嘉立创 EDA API 使用的均为数据原点；在创建 PCB 时，默认画布原点等于数据原点

**方法签名:**

```typescript
convertDataOriginToCanvasOrigin(x: number, y: number): Promise<{ x: number
```

**参数:**

| 参数名 | 类型     | 描述       |
| ------ | -------- | ---------- |
| x      | `number` | 数据原点 X |
| y      | `number` | 数据原点 Y |

**返回值:**

画布原点坐标

---

### getCanvasOrigin

获取画布原点相对于数据原点的偏移坐标
嘉立创 EDA 专业版前端显示的��标均为画布原点；
嘉立创 EDA 专业版 API 使用的均为数据原点；
如果返回的数据为 `{ canvasOriginOffsetX: 100, canvasOriginOffsetY: 200 }`，
则代表画布原点在数据原点的向右 100 单位且向上 200 单位的位置；
此处的单位为数据层面单位，在跨度上等同于画布层面的 mil

**方法签名:**

```typescript
getCanvasOrigin(): Promise<{ offsetX: number
```

**返回值:**

画布原点相对于数据原点的偏移坐标

---

### setCanvasOrigin

设置画布原点相对于数据原点的偏移坐标
嘉立创 EDA 专业版前端显示的坐标均为画布原点；
嘉立创 EDA 专业版 API 使用的均为数据原点；
如果希望在 API 操作时前端画布坐标能与数据一致，
建议调用本方法并设置偏移量为零，
即 `setCanvasOrigin(0, 0)`；
此处的单位为数据层面单位，在跨度上等同于画布层面的 mil

**方法签名:**

```typescript
setCanvasOrigin(offsetX: number, offsetY: number): Promise<boolean>
```

**参数:**

| 参数名  | 类型     | 描述                                |
| ------- | -------- | ----------------------------------- |
| offsetX | `number` | 画布原点相对于数据原点的 X 坐标偏移 |
| offsetY | `number` | 画布原点相对于数据原点的 Y 坐标偏移 |

**返回值:**

操作是否成功

---

### navigateToCoordinates

定位到画布坐标
本接口在前端画布上定位到指定的数据层面坐标；
如果希望在进行本操作时前端画布坐标能与传入数据一致，
建议调用 {@link PCB_Document.setCanvasOrigin} 方法并设置偏移量为零；
此处的单位为数据层面单位，在跨度上等同于画布层面的 mil

**方法签名:**

```typescript
navigateToCoordinates(x: number, y: number): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述   |
| ------ | -------- | ------ |
| x      | `number` | 坐标 X |
| y      | `number` | 坐标 Y |

**返回值:**

操作是否成功

---

### navigateToRegion

> ⚠️ **Beta 阶段**

定位到画布区域
本接口在前端画布上定位到指定的区域，区域数据为相对于数据原点的偏移；
例如：传入数据为 `{left: 0, right: 60, top: 100, bottom: -20}` =\> `navigateToRegion(0, 60, 100, -20)`，
则画布将会定位到以 `[30, 40]` 为中心的，`x` 轴方向长度为 `60`，`y` 轴方向长度为 `120` 的矩形范围；
本接口不进行缩放操作，但会生成指示定位中心及表示区域范围的矩形框；
此处的单位为数据层面单位，在跨度上等同于画布层面的 mil

**方法签名:**

```typescript
navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述              |
| ------ | -------- | ----------------- |
| left   | `number` | 矩形框第一 X 坐标 |
| right  | `number` | 矩形框第二 X 坐标 |
| top    | `number` | 矩形框第一 Y 坐标 |
| bottom | `number` | 矩形框第二 Y 坐标 |

**返回值:**

操作是否成功

---

### getPrimitiveAtPoint

> ⚠️ **Beta 阶段**

获取坐标点的图元

**备注:**

> 本操作和前端鼠标点击操作类似，将会获取指定坐标点上的图元

**方法签名:**

```typescript
getPrimitiveAtPoint(x: number, y: number): Promise<IPCB_Primitive | undefined>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| x      | `number` | 坐标点 X |
| y      | `number` | 坐标点 Y |

**返回值:**

坐标点的图元，如若坐标点无法找到图元，将返回 `undefined`

---

### getPrimitivesInRegion

> ⚠️ **Beta 阶段**

获取区域内所有图元

**方法签名:**

```typescript
getPrimitivesInRegion(left: number, right: number, top: number, bottom: number, leftToRight?: boolean): Promise<Array<IPCB_Primitive>>
```

**参数:**

| 参数名      | 类型      | 描述                                           |
| ----------- | --------- | ---------------------------------------------- |
| left        | `number`  | 矩形框第一 X 坐标                              |
| right       | `number`  | 矩形框第二 X 坐标                              |
| top         | `number`  | 矩形框第一 Y 坐标                              |
| bottom      | `number`  | 矩形框第二 Y 坐标                              |
| leftToRight | `boolean` | 是否仅获取完全框选的图元，`false` 则触碰即获取 |

**返回值:**

区域内所有图元

---

### zoomToBoardOutline

> ⚠️ **Beta 阶段**

缩放到板框（适应板框）

**方法签名:**

```typescript
zoomToBoardOutline(): Promise<boolean>
```

**返回值:**

操作是否成功
