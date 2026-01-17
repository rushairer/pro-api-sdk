# SCH_Document

## 概述

原理图 & 符号 / 文档操作类

## 备注

> 对设计文档总体进行的操作

## 方法列表

| 方法名                            | 说明            |
| --------------------------------- | --------------- |
| [`importChanges`](#importchanges) | 从 PCB 导入变更 |
| [`save`](#save)                   | 保存文档        |

---

## 方法详情

### importChanges

从 PCB 导入变更

**方法签名:**

```typescript
importChanges(): Promise<boolean>
```

**返回值:**

导入操作是否成功，导入失败或游离原理图返回 `false`

---

### save

保存文档

**方法签名:**

```typescript
save(): Promise<boolean>
```

**返回值:**

保存操作是否成功，保存失败、上传失败等错误均返回 `false`
