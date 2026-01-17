# SYS_Timer

## 概述

系统 / 定时器类

## 备注

> 设置定时器

## 方法列表

| 方法名                                      | 说明               |
| ------------------------------------------- | ------------------ |
| [`setIntervalTimer`](#setintervaltimer)     | 设置循环定时器     |
| [`clearIntervalTimer`](#clearintervaltimer) | 清除指定循环定时器 |
| [`setTimeoutTimer`](#settimeouttimer)       | 设置单次定时器     |
| [`clearTimeoutTimer`](#cleartimeouttimer)   | 清除指定单次定时器 |

---

## 方法详情

### setIntervalTimer

设置循环定时器

**备注:**

> 如果遇到 ID 重复的定时器，则之前设置的定时器将被清除

**方法签名:**

```typescript
setIntervalTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean
```

**参数:**

| 参数名  | 类型            | 描述                           |
| ------- | --------------- | ------------------------------ |
| id      | `string`        | 定时器 ID，用于定位&删除定时器 |
| timeout | `number`        | 定时时间，单位 ms              |
| callFn  | `(...args: any` | 定时调用函数                   |
| args    |                 | 传给定时调用函数的参数         |

**返回值:**

定时器是否设置成功

---

### clearIntervalTimer

清除指定循环定时器

**方法签名:**

```typescript
clearIntervalTimer(id: string): boolean
```

**参数:**

| 参数名 | 类型     | 描述      |
| ------ | -------- | --------- |
| id     | `string` | 定时器 ID |

**返回值:**

定时器是否清除成功

---

### setTimeoutTimer

设置单次定时器

**备注:**

> 如果遇到 ID 重复的定时器，则之前设置的定时器将被清除

**方法签名:**

```typescript
setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean
```

**参数:**

| 参数名  | 类型            | 描述                   |
| ------- | --------------- | ---------------------- |
| id      | `string`        | 定时器 ID              |
| timeout | `number`        | 定时时间，单位 ms      |
| callFn  | `(...args: any` | 定时调用函数           |
| args    |                 | 传给定时调用函数的参数 |

**返回值:**

定时器是否设置成功

---

### clearTimeoutTimer

清除指定单次定时器

**方法签名:**

```typescript
clearTimeoutTimer(id: string): boolean
```

**参数:**

| 参数名 | 类型     | 描述      |
| ------ | -------- | --------- |
| id     | `string` | 定时器 ID |

**返回值:**

定时器是否清除成功
