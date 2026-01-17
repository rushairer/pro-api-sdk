# SYS_HeaderMenu

## 概述

系统 / 顶部菜单类

## 方法列表

| 方法名                                      | 说明             |
| ------------------------------------------- | ---------------- |
| [`insertHeaderMenus`](#insertheadermenus)   | 导入顶部菜单数据 |
| [`removeHeaderMenus`](#removeheadermenus)   | 移除顶部菜单数据 |
| [`replaceHeaderMenus`](#replaceheadermenus) | 替换顶部菜单数据 |

---

## 方法详情

### insertHeaderMenus

导入顶部菜单数据

**方法签名:**

```typescript
insertHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>
```

**参数:**

| 参数名      | 类型               | 描述         |
| ----------- | ------------------ | ------------ |
| headerMenus | `ISYS_HeaderMenus` | 顶部菜单数据 |

---

### removeHeaderMenus

移除顶部菜单数据

**方法签名:**

```typescript
removeHeaderMenus(): void
```

---

### replaceHeaderMenus

替换顶部菜单数据

**备注:**

> 本接口相当于同时执行了 {@link SYS_HeaderMenu.removeHeaderMenus | 移除} 和 {@link SYS_HeaderMenu.insertHeaderMenus | 导入} 操作

**方法签名:**

```typescript
replaceHeaderMenus(headerMenus: ISYS_HeaderMenus): Promise<void>
```

**参数:**

| 参数名      | 类型               | 描述         |
| ----------- | ------------------ | ------------ |
| headerMenus | `ISYS_HeaderMenus` | 顶部菜单数据 |
