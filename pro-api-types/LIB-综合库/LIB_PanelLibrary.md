# LIB_PanelLibrary

## 概述

综合库 / 面板库类

## 方法列表

| 方法名                             | 说明                 |
| ---------------------------------- | -------------------- |
| [`create`](#create) ⚠️             | 创建面板库           |
| [`delete`](#delete) ⚠️             | 删除面板库           |
| [`modify`](#modify) ⚠️             | 修改面板库           |
| [`get`](#get) ⚠️                   | 获取面板库的所有属性 |
| [`copy`](#copy) ⚠️                 | 复制面板库           |
| [`search`](#search) ⚠️             | 搜索面板库           |
| [`openInEditor`](#openineditor) ⚠️ | 在编辑器打开文档     |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建面板库

**方法签名:**

```typescript
create(libraryUuid: string, panelLibraryName: string, classification?: ILIB_ClassificationIndex, description?: string): Promise<string | undefined>
```

**参数:**

| 参数名           | 类型                       | 描述                                                     |
| ---------------- | -------------------------- | -------------------------------------------------------- |
| libraryUuid      | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| panelLibraryName | `string`                   | 面板库名称                                               |
| classification   | `ILIB_ClassificationIndex` | 分类                                                     |
| description      | `string`                   | 描述                                                     |

**返回值:**

面板库 UUID

---

### delete

> ⚠️ **Beta 阶段**

删除面板库

**方法签名:**

```typescript
delete(panelLibraryUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名           | 类型     | 描述                                                     |
| ---------------- | -------- | -------------------------------------------------------- |
| panelLibraryUuid | `string` | 面板库 UUID                                              |
| libraryUuid      | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改面板库

**备注:**

> 如希望清除某些属性，则将其的值设置为 `null`

**方法签名:**

```typescript
modify(panelLibraryUuid: string, libraryUuid: string, panelLibraryName?: string, classification?: ILIB_ClassificationIndex | null, description?: string | null): Promise<boolean>
```

**参数:**

| 参数名           | 类型                      | 描述                                                     |
| ---------------- | ------------------------- | -------------------------------------------------------- | ---- |
| panelLibraryUuid | `string`                  | 面板库 UUID                                              |
| libraryUuid      | `string`                  | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| panelLibraryName | `string`                  | 面板库名称                                               |
| classification   | `ILIB_ClassificationIndex | null`                                                    | 分类 |
| description      | `string                   | null`                                                    | 描述 |

**返回值:**

操作是否成功

---

### get

> ⚠️ **Beta 阶段**

获取面板库的所有属性

**方法签名:**

```typescript
get(panelLibraryUuid: string, libraryUuid?: string): Promise<ILIB_PanelLibraryItem | undefined>
```

**参数:**

| 参数名           | 类型     | 描述                                                     |
| ---------------- | -------- | -------------------------------------------------------- |
| panelLibraryUuid | `string` | 面板库 UUID                                              |
| libraryUuid      | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

面板库属性

---

### copy

> ⚠️ **Beta 阶段**

复制面板库

**方法签名:**

```typescript
copy(panelLibraryUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex, newPanelLibraryName?: string): Promise<string | undefined>
```

**参数:**

| 参数名               | 类型                       | 描述                                                     |
| -------------------- | -------------------------- | -------------------------------------------------------- |
| panelLibraryUuid     | `string`                   | 面板库 UUID                                              |
| libraryUuid          | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| targetLibraryUuid    | `string`                   | 目标库 UUID                                              |
| targetClassification | `ILIB_ClassificationIndex` | 目标库内的分类                                           |
| newPanelLibraryName  | `string`                   | 新面板库名称，如若目标库内存在重名面板库将导致复制失败   |

**返回值:**

目标库内新面板库的 UUID

---

### search

> ⚠️ **Beta 阶段**

搜索面板库

**方法签名:**

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex, itemsOfPage?: number, page?: number): Promise<Array<ILIB_PanelLibrarySearchItem>>
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

搜索到的面板库属性列表

---

### openInEditor

> ⚠️ **Beta 阶段**

在编辑器打开文档

**方法签名:**

```typescript
openInEditor(panelLibraryUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>
```

**参数:**

| 参数名           | 类型     | 描述                                                                                             |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------ |
| panelLibraryUuid | `string` | 面板库 UUID                                                                                      |
| libraryUuid      | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取                                         |
| splitScreenId    | `string` | 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 {@link DMT_EditorControl} 内的接口获取 |

**返回值:**

标签页 ID，对应 {@link IDMT_EditorTabItem.tabId}，可使用 {@link DMT_EditorControl.getSplitScreenIdByTabId} 获取到分屏 ID
