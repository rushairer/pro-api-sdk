# IPCB_PrimitiveArc

## 概述

圆弧线图元

## 备注

> 直线和圆弧线均为导线，对应画布的线条走线和圆弧走线

## 方法

### getState_PrimitiveType

获取属性状态：图元类型

**方法签名:**

```typescript
getState_PrimitiveType(): EPCB_PrimitiveType
```

**返回值:**

图元类型

---

### getState_PrimitiveId

获取属性状态：图元 ID

**方法签名:**

```typescript
getState_PrimitiveId(): string
```

**返回值:**

图元 ID

---

### getState_Net

获取属性状态：网络名称

**方法签名:**

```typescript
getState_Net(): string
```

**返回值:**

网络名称

---

### getState_Layer

获取属性状态：层

**方法签名:**

```typescript
getState_Layer(): TPCB_LayersOfLine
```

**返回值:**

层

---

### getState_StartX

获取属性状态：起始位置 X

**方法签名:**

```typescript
getState_StartX(): number
```

**返回值:**

起始位置 X

---

### getState_StartY

获取属性状态：起始位置 Y

**方法签名:**

```typescript
getState_StartY(): number
```

**返回值:**

起始位置 Y

---

### getState_EndX

获取属性状态：终止位置 X

**方法签名:**

```typescript
getState_EndX(): number
```

**返回值:**

终止位置 X

---

### getState_EndY

获取属性状态：终止位置 Y

**方法签名:**

```typescript
getState_EndY(): number
```

**返回值:**

终止位置 Y

---

### getState_ArcAngle

获取属性状态：圆弧角度

**方法签名:**

```typescript
getState_ArcAngle(): number
```

**返回值:**

圆弧角度

---

### getState_LineWidth

获取属性状态：线宽

**方法签名:**

```typescript
getState_LineWidth(): number
```

**返回值:**

线宽

---

### getState_InteractiveMode

获取属性状态：交互模式

**方法签名:**

```typescript
getState_InteractiveMode(): EPCB_PrimitiveArcInteractiveMode
```

**返回值:**

交互模式

---

### getState_PrimitiveLock

获取属性状态：是否锁定

**方法签名:**

```typescript
getState_PrimitiveLock(): boolean
```

**返回值:**

是否锁定

---

### setState_Net ⚠️

设置属性状态：网络名称

**方法签名:**

```typescript
setState_Net(net: string): IPCB_PrimitiveArc
```

**参数:**

| 参数名 | 描述     |
| ------ | -------- |
| `net`  | 网络名称 |

**返回值:**

圆弧线图元对象

---

### setState_Layer ⚠️

设置属性状态：层

**方法签名:**

```typescript
setState_Layer(layer: TPCB_LayersOfLine): IPCB_PrimitiveArc
```

**参数:**

| 参数名  | 描述 |
| ------- | ---- |
| `layer` | 层   |

**返回值:**

圆弧线图元对象

---

### setState_StartX ⚠️

设置属性状态：起始位置 X

**方法签名:**

```typescript
setState_StartX(startX: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名   | 描述       |
| -------- | ---------- |
| `startX` | 起始位置 X |

**返回值:**

圆弧线图元对象

---

### setState_StartY ⚠️

设置属性状态：起始位置 Y

**方法签名:**

```typescript
setState_StartY(startY: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名   | 描述       |
| -------- | ---------- |
| `startY` | 起始位置 Y |

**返回值:**

圆弧线图元对象

---

### setState_EndX ⚠️

设置属性状态：终止位置 X

**方法签名:**

```typescript
setState_EndX(endX: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名 | 描述       |
| ------ | ---------- |
| `endX` | 终止位置 X |

**返回值:**

圆弧线图元对象

---

### setState_EndY ⚠️

设置属性状态：终止位置 Y

**方法签名:**

```typescript
setState_EndY(endY: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名 | 描述       |
| ------ | ---------- |
| `endY` | 终止位置 Y |

**返回值:**

圆弧线图元对象

---

### setState_ArcAngle ⚠️

设置属性状态：圆弧角度

**方法签名:**

```typescript
setState_ArcAngle(arcAngle: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名     | 描述     |
| ---------- | -------- |
| `arcAngle` | 圆弧角度 |

**返回值:**

圆弧线图元对象

---

### setState_LineWidth ⚠️

设置属性状态：线宽

**方法签名:**

```typescript
setState_LineWidth(lineWidth: number): IPCB_PrimitiveArc
```

**参数:**

| 参数名      | 描述 |
| ----------- | ---- |
| `lineWidth` | 线宽 |

**返回值:**

圆弧线图元对象

---

### setState_InteractiveMode ⚠️

设置属性状态：交互模式

**方法签名:**

```typescript
setState_InteractiveMode(interactiveMode: EPCB_PrimitiveArcInteractiveMode): IPCB_PrimitiveArc
```

**参数:**

| 参数名            | 描述     |
| ----------------- | -------- |
| `interactiveMode` | 交互模式 |

**返回值:**

圆弧线图元对象

---

### setState_PrimitiveLock ⚠️

设置属性状态：是否锁定

**方法签名:**

```typescript
setState_PrimitiveLock(primitiveLock: boolean): IPCB_PrimitiveArc
```

**参数:**

| 参数名          | 描述     |
| --------------- | -------- |
| `primitiveLock` | 是否锁定 |

**返回值:**

圆弧线图元对象

---

### toAsync

将图元转换为异步图元

**方法签名:**

```typescript
toAsync(): IPCB_PrimitiveArc
```

**返回值:**

圆弧线图元对象

---

### toSync

将图元转换为同步图元

**方法签名:**

```typescript
toSync(): IPCB_PrimitiveArc
```

**返回值:**

圆弧线图元对象

---

### isAsync

查询图元是否为异步图元

**方法签名:**

```typescript
isAsync(): boolean
```

**返回值:**

是否为异步图元

---

### reset ⚠️

将异步图元重置为当前画布状态

**方法签名:**

```typescript
reset(): Promise<IPCB_PrimitiveArc>
```

**返回值:**

圆弧线图元对象

---

### done ⚠️

将对图元的更改应用到画布

**方法签名:**

```typescript
done(): Promise<IPCB_PrimitiveArc>
```

**返回值:**

圆弧线图元对象

---

### getAdjacentPrimitives ⚠️

获取相邻的图元对象
@remarks 将会获取与圆弧线直接相连的直线、过孔、圆弧线图元对象

**方法签名:**

```typescript
getAdjacentPrimitives(): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveVia | IPCB_PrimitiveArc>>
```

**返回值:**

相邻的直线、过孔、圆弧线图元对象

---

### getEntireTrack ⚠️

获取整段导线

**方法签名:**

```typescript
getEntireTrack(includeVias: false): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc>>
```

**参数:**

| 参数名        | 描述                   |
| ------------- | ---------------------- |
| `includeVias` | 是否包含导线两端的过孔 |

**返回值:**

整段导线内的所有直线和圆弧线

---

### getEntireTrack ⚠️

获取整段导线

**方法签名:**

```typescript
getEntireTrack(includeVias: true): Promise<Array<IPCB_PrimitiveLine | IPCB_PrimitiveArc | IPCB_PrimitiveVia>>
```

**参数:**

| 参数名        | 描述                   |
| ------------- | ---------------------- |
| `includeVias` | 是否包含导线两端的过孔 |

**返回值:**

整段导线内的所有直线、圆弧线，以及两端连接的过孔（如果有）

---
