# LIB_Cbb

## 概述

综合库 / 复用模块类

## 方法列表

| 方法名                                           | 说明                     |
| ------------------------------------------------ | ------------------------ |
| [`create`](#create) ⚠️                           | 创建复用模块             |
| [`delete`](#delete) ⚠️                           | 删除复用模块             |
| [`modify`](#modify) ⚠️                           | 修改复用模块             |
| [`get`](#get) ⚠️                                 | 获取复用模块的所有属性   |
| [`copy`](#copy) ⚠️                               | 复制复用模块             |
| [`search`](#search) ⚠️                           | 搜索复用模块             |
| [`openProjectInEditor`](#openprojectineditor) ⚠️ | 在编辑器打开复用模块工程 |
| [`openSymbolInEditor`](#opensymbolineditor) ⚠️   | 在编辑器打开复用模块符号 |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建复用模块

**方法签名:**

```typescript
create(libraryUuid: string, cbbName: string, classification?: ILIB_ClassificationIndex, description?: string): Promise<string | undefined>
```

**参数:**

| 参数名         | 类型                       | 描述                                                     |
| -------------- | -------------------------- | -------------------------------------------------------- |
| libraryUuid    | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| cbbName        | `string`                   | 复用模块名称                                             |
| classification | `ILIB_ClassificationIndex` | 分类                                                     |
| description    | `string`                   | 描述                                                     |

**返回值:**

复用模块 UUID

---

### delete

> ⚠️ **Beta 阶段**

删除复用模块

**方法签名:**

```typescript
delete(cbbUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| cbbUuid     | `string` | 复用模块 UUID                                            |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改复用模块

**备注:**

> 如希望清除某些属性，则将其的值设置为 `null`

**方法签名:**

```typescript
modify(cbbUuid: string, libraryUuid: string, cbbName?: string, classification?: ILIB_ClassificationIndex | null, description?: string | null): Promise<boolean>
```

**参数:**

| 参数名         | 类型                      | 描述                                                     |
| -------------- | ------------------------- | -------------------------------------------------------- | ---- |
| cbbUuid        | `string`                  | 复用模块 UUID                                            |
| libraryUuid    | `string`                  | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| cbbName        | `string`                  | 复用模块名称                                             |
| classification | `ILIB_ClassificationIndex | null`                                                    | 分类 |
| description    | `string                   | null`                                                    | 描述 |

**返回值:**

操作是否成功

---

### get

> ⚠️ **Beta 阶段**

获取复用模块的所有属性

**方法签名:**

```typescript
get(cbbUuid: string, libraryUuid?: string): Promise<ILIB_CbbItem | undefined>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| cbbUuid     | `string` | 复用模块 UUID                                            |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

复用模块属性

---

### copy

> ⚠️ **Beta 阶段**

复制复用模块

**方法签名:**

```typescript
copy(cbbUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex, newCbbName?: string): Promise<string | undefined>
```

**参数:**

| 参数名               | 类型                       | 描述                                                       |
| -------------------- | -------------------------- | ---------------------------------------------------------- |
| cbbUuid              | `string`                   | 复用模块 UUID                                              |
| libraryUuid          | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取   |
| targetLibraryUuid    | `string`                   | 目标库 UUID                                                |
| targetClassification | `ILIB_ClassificationIndex` | 目标库内的分类                                             |
| newCbbName           | `string`                   | 新复用模块名称，如若目标库内存在重名复用模块将导致复制失败 |

**返回值:**

目标库内新复用模块的 UUID

---

### search

> ⚠️ **Beta 阶段**

搜索复用模块

**方法签名:**

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex, itemsOfPage?: number, page?: number): Promise<Array<ILIB_CbbSearchItem>>
```

**参数:**

| 参数名         | 类型                       | 描述                                                                   |
| -------------- | -------------------------- | ---------------------------------------------------------------------- |
| key            | `string`                   | 搜索关键字                                                             |
| libraryUuid    | `string`                   | 库 UUID，默认为系统库，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| classification | `ILIB_ClassificationIndex` | 分类，默认为全部                                                       |
| itemsOfPage    | `number`                   | 一页搜索结果的数量                                                     |
| page           | `number`                   | 页数                                                                   |

**返回值:**

搜索到的复用模块属性列表

---

### openProjectInEditor

> ⚠️ **Beta 阶段**

在编辑器打开复用模块工程

**备注:**

> 本操作将会在 EDA 前端打开模块工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据

**方法签名:**

```typescript
openProjectInEditor(cbbUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| cbbUuid     | `string` | 复用模块 UUID                                            |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

---

### openSymbolInEditor

> ⚠️ **Beta 阶段**

在编辑器打开复用模块符号

**方法签名:**

```typescript
openSymbolInEditor(cbbUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------ |
| cbbUuid       | `string` | 复用模块 UUID                                                                                    |
| libraryUuid   | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取                                         |
| splitScreenId | `string` | 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 {@link DMT_EditorControl} 内的接口获取 |

**返回值:**

标签页 ID，对应 {@link IDMT_EditorTabItem.tabId}，可使用 {@link DMT_EditorControl.getSplitScreenIdByTabId} 获取到分屏 ID
