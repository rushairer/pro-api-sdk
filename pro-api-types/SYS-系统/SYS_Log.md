# SYS_Log

## 概述

系统 / 日志类

## 方法列表

| 方法名              | 说明               |
| ------------------- | ------------------ |
| [`add`](#add)       | 添加日志条目       |
| [`clear`](#clear)   | 清空日志           |
| [`export`](#export) | 导出日志           |
| [`sort`](#sort)     | 筛选并获取日志条目 |
| [`find`](#find)     | 查找条目           |

---

## 方法详情

### add

添加日志条目

**方法签名:**

```typescript
add(message: string, type?: ESYS_LogType): void
```

**参数:**

| 参数名  | 类型           | 描述     |
| ------- | -------------- | -------- |
| message | `string`       | 日志内容 |
| type    | `ESYS_LogType` | 日志类型 |

---

### clear

清空日志

**方法签名:**

```typescript
clear(): void
```

---

### export

导出日志

**方法签名:**

```typescript
export(types?: ESYS_LogType | Array<ESYS_LogType>): void
```

**参数:**

| 参数名 | 类型          | 描述                 |
| ------ | ------------- | -------------------- | -------- |
| types  | `ESYS_LogType | Array<ESYS_LogType>` | 日志类型 |

---

### sort

筛选并获取日志条目

**备注:**

> 如果日志面板处于打开状态，筛选操作会同时在前端展现

**方法签名:**

```typescript
sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>
```

**参数:**

| 参数名 | 类型          | 描述                 |
| ------ | ------------- | -------------------- | -------------------------------------------------------------- |
| types  | `ESYS_LogType | Array<ESYS_LogType>` | 日志类型数组，可以同时指定多种日志类型，如若不指定则为全部类型 |

**返回值:**

符合筛选条件的日志条目数组

---

### find

查找条目

**备注:**

> 如果日志面板处于打开状态，查找操作会同时在前端展现

**方法签名:**

```typescript
find(message: string | Array<string | { text: string
```

**参数:**

| 参数名  | 类型 | 描述                                     |
| ------- | ---- | ---------------------------------------- |
| message |      | 查找内容                                 |
| types   |      | 日志类型数组，可以在指定的日志类型内查找 |

**返回值:**

符合查找条件的日志条目数组
