# SCH_Drc

## 概述

原理图 & 符号 / 设计规则检查（DRC）类

## 备注

> 检查、设定 DRC 规则

## 方法列表

| 方法名            | 说明     |
| ----------------- | -------- |
| [`check`](#check) | 检查 DRC |

---

## 方法详情

### check

检查 DRC

**备注:**

> 如若检查结果存在 **错误** 或以上级别，将会始终呼出底部 DRC 窗口，无视 `userInterface` 参数

**方法签名:**

```typescript
check(strict?: boolean, userInterface?: boolean): Promise<boolean>
```

**参数:**

| 参数名        | 类型      | 描述                                                                 |
| ------------- | --------- | -------------------------------------------------------------------- |
| strict        | `boolean` | 是否严格检查，严格检查时存在 Warning 将返回 `false`，否则返回 `true` |
| userInterface | `boolean` | 是否显示 UI（呼出底部 DRC 窗口）                                     |

**返回值:**

DRC 检查是否无错误
