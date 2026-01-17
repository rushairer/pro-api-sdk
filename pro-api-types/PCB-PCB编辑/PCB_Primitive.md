# PCB_Primitive

## 概述

PCB & 封装 / 图元类

## 备注

> 图元的统一操作

## 方法列表

| 方法名                                       | 说明            |
| -------------------------------------------- | --------------- |
| [`getPrimitivesBBox`](#getprimitivesbbox) ⚠️ | 获取图元的 BBox |

---

## 方法详情

### getPrimitivesBBox

> ⚠️ **Beta 阶段**

获取图元的 BBox

**方法签名:**

```typescript
getPrimitivesBBox(primitiveIds: Array<string | IPCB_Primitive>): Promise<{ minX: number
```

**参数:**

| 参数名       | 类型          | 描述             |
| ------------ | ------------- | ---------------- | -------------------------- |
| primitiveIds | `Array<string | IPCB_Primitive>` | 图元 ID 数组或图元对象数组 |

**返回值:**

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果
