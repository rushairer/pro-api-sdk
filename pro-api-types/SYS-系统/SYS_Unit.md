# SYS_Unit

## 概述

系统 / 单位类

## 备注

> 控制系统数据单位与单位转换基础函数，当前系统数据单位跨度等效为 `mil`

## 方法列表

| 方法名                                    | 说明                      |
| ----------------------------------------- | ------------------------- |
| [`getSystemDataUnit`](#getsystemdataunit) | 获取 API 系统数据单位跨度 |
| [`milToMm`](#miltomm)                     | 单位转换：密尔到毫米      |
| [`milToInch`](#miltoinch)                 | 单位转换：密尔到英寸      |
| [`mmToMil`](#mmtomil)                     | 单位转换：毫米到密尔      |
| [`mmToInch`](#mmtoinch)                   | 单位转换：毫米到英寸      |
| [`inchToMil`](#inchtomil)                 | 单位转换：英寸到密尔      |
| [`inchToMm`](#inchtomm)                   | 单位转换：英寸到毫米      |

---

## 方法详情

### getSystemDataUnit

获取 API 系统数据单位跨度

**备注:**

> 当前 API 系统数据单位跨度等效为 `mil`，不会发生改变

**方法签名:**

```typescript
getSystemDataUnit(): ESYS_Unit.MIL
```

**返回值:**

单位

---

### milToMm

单位转换：密尔到毫米

**方法签名:**

```typescript
milToMm(mil: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| mil              | `number` | 输入密尔数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出毫米数

---

### milToInch

单位转换：密尔到英寸

**方法签名:**

```typescript
milToInch(mil: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| mil              | `number` | 输入密尔数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出英寸数

---

### mmToMil

单位转换：毫米到密尔

**方法签名:**

```typescript
mmToMil(mm: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| mm               | `number` | 输入毫米数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出密尔数

---

### mmToInch

单位转换：毫米到英寸

**方法签名:**

```typescript
mmToInch(mm: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| mm               | `number` | 输入毫米数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出英寸数

---

### inchToMil

单位转换：英寸到密尔

**方法签名:**

```typescript
inchToMil(inch: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| inch             | `number` | 输入英寸数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出密尔数

---

### inchToMm

单位转换：英寸到毫米

**方法签名:**

```typescript
inchToMm(inch: number, numberOfDecimals?: number): number
```

**参数:**

| 参数名           | 类型     | 描述                     |
| ---------------- | -------- | ------------------------ |
| inch             | `number` | 输入英寸数               |
| numberOfDecimals | `number` | 保留小数位数，默认为 `4` |

**返回值:**

输出毫米数
