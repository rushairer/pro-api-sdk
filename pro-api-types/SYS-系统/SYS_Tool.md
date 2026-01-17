# SYS_Tool

## 概述

系统 / 工具类

## 方法列表

| 方法名                                       | 说明     |
| -------------------------------------------- | -------- |
| [`netlistComparison`](#netlistcomparison) ⚠️ | 网表对比 |

---

## 方法详情

### netlistComparison

> ⚠️ **Beta 阶段**

网表对比

**方法签名:**

```typescript
netlistComparison(netlist1: string | File, netlist2: string | File): Promise<Array<{ type: 'Net' | 'Component'
```

**参数:**

| 参数名   | 类型    | 描述  |
| -------- | ------- | ----- | -------------------------------------------------------------- |
| netlist1 | `string | File` | 网表 1，可以为当前工程内的 PCB 和原理图的 UUID、网表的文件数据 |
| netlist2 | `string | File` | 网表 2，可以为当前工程内的 PCB 和原理图的 UUID、网表的文件数据 |

**返回值:**

网表对比结果
