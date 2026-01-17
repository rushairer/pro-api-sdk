# SCH_Primitive

## 概述

原理图 & 符号 / 图元类

## 备注

> 图元的统一操作

## 方法列表

| 方法名                                                               | 说明                         |
| -------------------------------------------------------------------- | ---------------------------- |
| [`getPrimitiveTypeByPrimitiveId`](#getprimitivetypebyprimitiveid) ⚠️ | 获取指定 ID 的图元的图元类型 |
| [`getPrimitiveByPrimitiveId`](#getprimitivebyprimitiveid)            | 获取指定 ID 的图元的所有属性 |
| [`getPrimitivesBBox`](#getprimitivesbbox) ⚠️                         | 获取图元的 BBox              |

---

## 方法详情

### getPrimitiveTypeByPrimitiveId

> ⚠️ **Beta 阶段**

获取指定 ID 的图元的图元类型

**方法签名:**

```typescript
getPrimitiveTypeByPrimitiveId(id: string): Promise<ESCH_PrimitiveType | undefined>
```

**参数:**

| 参数名 | 类型     | 描述    |
| ------ | -------- | ------- |
| id     | `string` | 图元 ID |

**返回值:**

图元类型

---

### getPrimitiveByPrimitiveId

获取指定 ID 的图元的所有属性

**方法签名:**

```typescript
getPrimitiveByPrimitiveId(id: string): Promise<ISCH_Primitive | undefined>
```

**参数:**

| 参数名 | 类型     | 描述    |
| ------ | -------- | ------- |
| id     | `string` | 图元 ID |

**返回值:**

图元的所有属性

---

### getPrimitivesBBox

> ⚠️ **Beta 阶段**

获取图元的 BBox

**方法签名:**

```typescript
getPrimitivesBBox(primitiveIds: Array<string | ISCH_Primitive>): Promise<{ minX: number
```

**参数:**

| 参数名       | 类型          | 描述             |
| ------------ | ------------- | ---------------- | -------------------------- |
| primitiveIds | `Array<string | ISCH_Primitive>` | 图元 ID 数组或图元对象数组 |

**返回值:**

图元的 BBox，如若图元不存在或没有 BBox，将会返回 `undefined` 的结果
