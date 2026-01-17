# IPCB_ComplexPolygon

## 概述

复杂多边形
复杂多边形可以包含多个单多边形，通过 {@link https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule | fill-rule} 将其组合，以实现多边形的布尔运算。
目前嘉立创 EDA 专业版固定使用 {@link https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero | nonzero} 这个 fill-rule。

## 方法

### addSource

添加多边形数据

**方法签名:**

```typescript
addSource(complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | Array<IPCB_Polygon>): IPCB_ComplexPolygon
```

**参数:**

| 参数名           | 描述           |
| ---------------- | -------------- |
| `complexPolygon` | 复杂多边形数据 |

**返回值:**

复杂多边形对象

---

### getSource

获取多边形数据
@remarks 如遇仅包含单一的单多边形，将会化简最外层的数组

**方法签名:**

```typescript
getSource(): TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray>
```

**返回值:**

单多边形或复杂多边形数据

---

### getSourceStrictComplex

获取复杂多边形数据
@remarks 强制返回复杂多边形格式数据，即使它仅包含单一的单多边形

**方法签名:**

```typescript
getSourceStrictComplex(): Array<TPCB_PolygonSourceArray>
```

**返回值:**

复杂多边形数据

---
