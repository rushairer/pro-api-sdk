# SCH_Netlist

## 概述

原理图 & 符号 / 网表类

## 备注

> 获取、更新网表

## 方法列表

| 方法名                         | 说明     |
| ------------------------------ | -------- |
| [`getNetlist`](#getnetlist)    | 获取网表 |
| [`setNetlist`](#setnetlist) ⚠️ | 更新网表 |

---

## 方法详情

### getNetlist

获取网表

**方法签名:**

```typescript
getNetlist(type?: ESYS_NetlistType): Promise<string>
```

**参数:**

| 参数名 | 类型               | 描述     |
| ------ | ------------------ | -------- |
| type   | `ESYS_NetlistType` | 网表格式 |

**返回值:**

网表数据

---

### setNetlist

> ⚠️ **Beta 阶段**

更新网表

**方法签名:**

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<void>
```

**参数:**

| 参数名  | 类型              | 描述       |
| ------- | ----------------- | ---------- | -------- |
| type    | `ESYS_NetlistType | undefined` | 网表格式 |
| netlist | `string`          | 网表数据   |
