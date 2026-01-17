# SCH_SelectControl

## 概述

原理图 & 符号 / 选择控制类

## 备注

> 获取或操作选择的元素

## 方法列表

| 方法名                                                                             | 说明                         |
| ---------------------------------------------------------------------------------- | ---------------------------- |
| [`getAllSelectedPrimitives_PrimitiveId`](#getallselectedprimitives_primitiveid) ⚠️ | 查询所有已选中图元的图元 ID  |
| [`getAllSelectedPrimitives`](#getallselectedprimitives) ⚠️                         | 查询所有已选中图元的图元对象 |
| [`getSelectedPrimitives_PrimitiveId`](#getselectedprimitives_primitiveid)          | 查询选中图元的图元 ID        |
| [`getSelectedPrimitives`](#getselectedprimitives) ⚠️                               | 查询选中图元的所有参数       |
| [`doSelectPrimitives`](#doselectprimitives)                                        | 使用图元 ID 选中图元         |
| [`doCrossProbeSelect`](#docrossprobeselect)                                        | 进行交叉选择                 |
| [`clearSelected`](#clearselected)                                                  | 清除选中                     |
| [`getCurrentMousePosition`](#getcurrentmouseposition) ⚠️                           | 获取当前鼠标在画布上的位置   |

---

## 方法详情

### getAllSelectedPrimitives_PrimitiveId

> ⚠️ **Beta 阶段**

查询所有已选中图元的图元 ID

**方法签名:**

```typescript
getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>
```

**返回值:**

所有已选中图元的图元 ID

---

### getAllSelectedPrimitives

> ⚠️ **Beta 阶段**

查询所有已选中图元的图元对象

**方法签名:**

```typescript
getAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>
```

**返回值:**

所有已选中图元的图元对象

---

### getSelectedPrimitives_PrimitiveId

查询选中图元的图元 ID
@deprecated 请使用 {@link SCH_SelectControl.getAllSelectedPrimitives_PrimitiveId | getAllSelectedPrimitives_PrimitiveId} 替代

**方法签名:**

```typescript
getSelectedPrimitives_PrimitiveId(): Promise<Array<string>>
```

**返回值:**

选中图元的图元 ID

---

### getSelectedPrimitives

> ⚠️ **Beta 阶段**

查询选中图元的所有参数
@deprecated 请使用 {@link SCH_SelectControl.getAllSelectedPrimitives | getAllSelectedPrimitives} 替代

**方法签名:**

```typescript
getSelectedPrimitives(): Promise<Array<Object>>
```

**返回值:**

选中图元的所有参数

---

### doSelectPrimitives

使用图元 ID 选中图元

**方法签名:**

```typescript
doSelectPrimitives(primitiveIds: string | Array<string>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述           |
| ------------ | ------- | -------------- | ------- |
| primitiveIds | `string | Array<string>` | 图元 ID |

**返回值:**

操作是否成功

---

### doCrossProbeSelect

进行交叉选择

**方法签名:**

```typescript
doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean
```

**参数:**

| 参数名     | 类型            | 描述                                        |
| ---------- | --------------- | ------------------------------------------- |
| components | `Array<string>` | 器件位号                                    |
| pins       | `Array<string>` | 器件位号\_引脚编号，格式为 ['U1_1', 'U1_2'] |
| nets       | `Array<string>` | 网络名称                                    |
| highlight  | `boolean`       | 是否高亮                                    |
| select     | `boolean`       | 是否选中                                    |

**返回值:**

操作是否成功

---

### clearSelected

清除选中

**方法签名:**

```typescript
clearSelected(): boolean
```

**返回值:**

操作是否成功

---

### getCurrentMousePosition

> ⚠️ **Beta 阶段**

获取当前鼠标在画布上的位置

**方法签名:**

```typescript
getCurrentMousePosition(): Promise<{ x: number
```

**返回值:**

鼠标在画布上的位置，`undefined` 代表当前鼠标不在画布上
