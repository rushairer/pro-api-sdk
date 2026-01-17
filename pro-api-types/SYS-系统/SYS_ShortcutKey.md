# SYS_ShortcutKey

## 概述

系统 / 快捷键类

## 备注

> 注册与管理系统快捷键

## 方法列表

| 方法名                                               | 说明           |
| ---------------------------------------------------- | -------------- |
| [`registerShortcutKey`](#registershortcutkey) ⚠️     | 注册快捷键     |
| [`unregisterShortcutKey`](#unregistershortcutkey) ⚠️ | 反注册快捷键   |
| [`getShortcutKeys`](#getshortcutkeys) ⚠️             | 查询快捷键列表 |

---

## 方法详情

### registerShortcutKey

> ⚠️ **Beta 阶段**

注册快捷键

**方法签名:**

```typescript
registerShortcutKey(shortcutKey: TSYS_ShortcutKeys, title: string, callbackFn: (shortcutKey: TSYS_ShortcutKeys) => void | Promise<void>, documentType?: Array<ESYS_ShortcutKeyEffectiveEditorDocumentType>, scene?: Array<ESYS_ShortcutKeyEffectiveEditorScene>): Promise<boolean>
```

**参数:**

| 参数名      | 类型                              | 描述                                                                 |
| ----------- | --------------------------------- | -------------------------------------------------------------------- |
| shortcutKey | `TSYS_ShortcutKeys`               | 快捷键，数组中包含多个元素则解析为组合快捷键，将按规则排序后存入缓存 |
| title       | `string`                          | 快捷键标题，快捷键的友好名称                                         |
| callbackFn  | `(shortcutKey: TSYS_ShortcutKeys` | 回调函数                                                             |

**返回值:**

注册操作是否成功

---

### unregisterShortcutKey

> ⚠️ **Beta 阶段**

反注册快捷键

**方法签名:**

```typescript
unregisterShortcutKey(shortcutKey: TSYS_ShortcutKeys): Promise<boolean>
```

**参数:**

| 参数名      | 类型                | 描述                                                       |
| ----------- | ------------------- | ---------------------------------------------------------- |
| shortcutKey | `TSYS_ShortcutKeys` | 快捷键，不区分传入的排列顺序，将自动排序并查询匹配的快捷键 |

**返回值:**

反注册操作是否成功

---

### getShortcutKeys

> ⚠️ **Beta 阶段**

查询快捷键列表

**方法签名:**

```typescript
getShortcutKeys(includeSystem?: boolean): Promise<Array<{ shortcutKey: TSYS_ShortcutKeys
```

**参数:**

| 参数名        | 类型      | 描述               |
| ------------- | --------- | ------------------ |
| includeSystem | `boolean` | 是否包含系统快捷键 |

**返回值:**

快捷键列表
