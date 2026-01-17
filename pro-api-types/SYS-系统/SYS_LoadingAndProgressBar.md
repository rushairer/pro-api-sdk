# SYS_LoadingAndProgressBar

## 概述

系统 / 加载与进���条类

## 方法列表

| 方法名                                      | 说明                       |
| ------------------------------------------- | -------------------------- |
| [`showProgressBar`](#showprogressbar)       | 显示进度条或设置进度条进度 |
| [`destroyProgressBar`](#destroyprogressbar) | 销毁进度条                 |
| [`showLoading`](#showloading)               | 显示无进度加载覆盖         |
| [`destroyLoading`](#destroyloading)         | 销毁无进度加载覆盖         |

---

## 方法详情

### showProgressBar

显示进度条或设置进度条进度

**备注:**

> 当进度达到 `100` 时，进度条将自动销毁

**方法签名:**

```typescript
showProgressBar(progress?: number, title?: string): void
```

**参数:**

| 参数名   | 类型     | 描述                     |
| -------- | -------- | ------------------------ |
| progress | `number` | 进度值，取值范围 `0-100` |
| title    | `string` | 进度条标题               |

---

### destroyProgressBar

销毁进度条

**方法签名:**

```typescript
destroyProgressBar(): void
```

---

### showLoading

显示无进度加载覆盖

**备注:**

> 没有进度指示，但会存在与进度条一致的灰色覆盖，阻止用户进一步操作

**方法签名:**

```typescript
showLoading(): void
```

---

### destroyLoading

销毁无进度加载覆盖

**方法签名:**

```typescript
destroyLoading(): void
```
