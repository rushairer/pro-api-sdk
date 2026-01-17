# SYS_Setting

## 概述

系统 / 设置类

## 方法列表

| 方法名                                 | 说明             |
| -------------------------------------- | ---------------- |
| [`restoreDefault`](#restoredefault) ⚠️ | 全局恢复默认设置 |

---

## 方法详情

### restoreDefault

> ⚠️ **Beta 阶段**

全局恢复默认设置

**备注:**

> 将所有 EDA 设置恢复到默认状态，本操作将会丢失所有设置项，在调用时请特别注意

**方法签名:**

```typescript
restoreDefault(): Promise<boolean>
```

**返回值:**

操作是否成功
