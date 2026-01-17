# PCB_MathPolygon

## 概述

PCB & 封装 / 多边形数学类

## 方法列表

| 方法名                                                             | 说明                       |
| ------------------------------------------------------------------ | -------------------------- |
| [`createPolygon`](#createpolygon)                                  | 创建单多边形               |
| [`createComplexPolygon`](#createcomplexpolygon)                    | 创建复杂多边形             |
| [`splitPolygon`](#splitpolygon)                                    | 拆分单多边形               |
| [`convertImageToComplexPolygon`](#convertimagetocomplexpolygon) ⚠️ | 将图像转换为复杂多边形对象 |

---

## 方法详情

### createPolygon

创建单多边形

**方法签名:**

```typescript
createPolygon(polygon: TPCB_PolygonSourceArray): IPCB_Polygon | undefined
```

**参数:**

| 参数名  | 类型                      | 描述         |
| ------- | ------------------------- | ------------ |
| polygon | `TPCB_PolygonSourceArray` | 单多边形数据 |

**返回值:**

单多边形对象，`undefined` 表示数据不合法

---

### createComplexPolygon

创建复杂多边形

**方法签名:**

```typescript
createComplexPolygon(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon | undefined
```

**参数:**

| 参数名         | 类型                     | 描述                           |
| -------------- | ------------------------ | ------------------------------ | ------------ | -------------------- | -------------- |
| complexPolygon | `TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>` | 复杂多边形数据 |

**返回值:**

复杂多边形对象，`undefined` 表示数据不合法

---

### splitPolygon

拆分单多边形

**方法签名:**

```typescript
splitPolygon(...complexPolygons: Array<IPCB_ComplexPolygon>): Array<IPCB_Polygon>
```

**参数:**

| 参数名          | 类型                         | 描述       |
| --------------- | ---------------------------- | ---------- |
| complexPolygons | `Array<IPCB_ComplexPolygon>` | 复杂多边形 |

**返回值:**

单多边形数组

---

### convertImageToComplexPolygon

> ⚠️ **Beta 阶段**

将图像转换为复杂多边形对象

**方法签名:**

```typescript
convertImageToComplexPolygon(imageBlob: Blob, imageWidth: number, imageHeight: number, tolerance?: number, simplification?: number, smoothing?: number, despeckling?: number, whiteAsBackgroundColor?: boolean, inversion?: boolean): Promise<IPCB_ComplexPolygon | undefined>
```

**参数:**

| 参数名                 | 类型      | 描述                                                                                      |
| ---------------------- | --------- | ----------------------------------------------------------------------------------------- |
| imageBlob              | `Blob`    | 图像 Blob 文件，可以使用 {@link SYS_FileSystem.openReadFileDialog} 方法从文件系统读取文件 |
| imageWidth             | `number`  | 图像宽度                                                                                  |
| imageHeight            | `number`  | 图像高度                                                                                  |
| tolerance              | `number`  | 容差，取值范围 `0`-`1`                                                                    |
| simplification         | `number`  | 简化，取值范围 `0`-`1`                                                                    |
| smoothing              | `number`  | 平滑，取值范围 `0`-`1.33`                                                                 |
| despeckling            | `number`  | 去斑，取值范围 `0`-`5`                                                                    |
| whiteAsBackgroundColor | `boolean` | 是否白色作为背景色                                                                        |
| inversion              | `boolean` | 是否反相                                                                                  |

**返回值:**

复杂多边形对象
