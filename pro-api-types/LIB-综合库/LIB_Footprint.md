# LIB_Footprint

## 概述

综合库 / 封装类

## 方法列表

| 方法名                                             | 说明               |
| -------------------------------------------------- | ------------------ |
| [`create`](#create) ⚠️                             | 创建封装           |
| [`delete`](#delete) ⚠️                             | 删除封装           |
| [`modify`](#modify) ⚠️                             | 修改封装           |
| [`updateDocumentSource`](#updatedocumentsource) ⚠️ | 更新封装的文档源码 |
| [`get`](#get) ⚠️                                   | 获取封装的所有属性 |
| [`copy`](#copy) ⚠️                                 | 复制封装           |
| [`search`](#search) ⚠️                             | 搜索封装           |
| [`openInEditor`](#openineditor) ⚠️                 | 在编辑器打开文档   |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建封装

**方法签名:**

```typescript
create(libraryUuid: string, footprintName: string, classification?: ILIB_ClassificationIndex, description?: string): Promise<string | undefined>
```

**参数:**

| 参数名         | 类型                       | 描述                                                     |
| -------------- | -------------------------- | -------------------------------------------------------- |
| libraryUuid    | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| footprintName  | `string`                   | 封装名称                                                 |
| classification | `ILIB_ClassificationIndex` | 分类                                                     |
| description    | `string`                   | 描述                                                     |

**返回值:**

封装 UUID

---

### delete

> ⚠️ **Beta 阶段**

删除封装

**方法签名:**

```typescript
delete(footprintUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述                                                     |
| ------------- | -------- | -------------------------------------------------------- |
| footprintUuid | `string` | 封装 UUID                                                |
| libraryUuid   | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改封装

**备注:**

> 如希望清除某些属性，则将其的值设置为 `null`

**方法签名:**

```typescript
modify(footprintUuid: string, libraryUuid: string, footprintName?: string, classification?: ILIB_ClassificationIndex | null, description?: string | null): Promise<boolean>
```

**参数:**

| 参数名         | 类型                      | 描述                                                     |
| -------------- | ------------------------- | -------------------------------------------------------- | ---- |
| footprintUuid  | `string`                  | 封装 UUID                                                |
| libraryUuid    | `string`                  | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| footprintName  | `string`                  | 封装名称                                                 |
| classification | `ILIB_ClassificationIndex | null`                                                    | 分类 |
| description    | `string                   | null`                                                    | 描述 |

**返回值:**

操作是否成功

---

### updateDocumentSource

> ⚠️ **Beta 阶段**

更新封装的文档源码

**方法签名:**

```typescript
updateDocumentSource(footprintUuid: string, libraryUuid: string, documentSource: string): Promise<boolean | undefined>
```

**参数:**

| 参数名         | 类型     | 描述                                                     |
| -------------- | -------- | -------------------------------------------------------- |
| footprintUuid  | `string` | 封装 UUID                                                |
| libraryUuid    | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| documentSource | `string` | 文档源码                                                 |

**返回值:**

是否更新成功

---

### get

> ⚠️ **Beta 阶段**

获取封装的所有属性

**方法签名:**

```typescript
get(footprintUuid: string, libraryUuid?: string): Promise<ILIB_FootprintItem | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                                     |
| ------------- | -------- | -------------------------------------------------------- |
| footprintUuid | `string` | 封装 UUID                                                |
| libraryUuid   | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

封装属性

---

### copy

> ⚠️ **Beta 阶段**

复制封装

**方法签名:**

```typescript
copy(footprintUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex, newFootprintName?: string): Promise<string | undefined>
```

**参数:**

| 参数名               | 类型                       | 描述                                                     |
| -------------------- | -------------------------- | -------------------------------------------------------- |
| footprintUuid        | `string`                   | 封装 UUID                                                |
| libraryUuid          | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| targetLibraryUuid    | `string`                   | 目标库 UUID                                              |
| targetClassification | `ILIB_ClassificationIndex` | 目标库内的分类                                           |
| newFootprintName     | `string`                   | 新封装名称，如若目标库内存在重名封装将导致复制失败       |

**返回值:**

目标库内新封装的 UUID

---

### search

> ⚠️ **Beta 阶段**

搜索封装

**方法签名:**

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex, itemsOfPage?: number, page?: number): Promise<Array<ILIB_FootprintSearchItem>>
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

搜索到的封装属性列表

---

### openInEditor

> ⚠️ **Beta 阶段**

在编辑器打开文档

**方法签名:**

```typescript
openInEditor(footprintUuid: string, libraryUuid: string, splitScreenId?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------ |
| footprintUuid | `string` | 封装 UUID                                                                                        |
| libraryUuid   | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取                                         |
| splitScreenId | `string` | 分屏 ID，不填写则默认在最后输入焦点的分屏内打开，可以使用 {@link DMT_EditorControl} 内的接口获取 |

**返回值:**

标签页 ID，对应 {@link IDMT_EditorTabItem.tabId}，可使用 {@link DMT_EditorControl.getSplitScreenIdByTabId} 获取到分屏 ID
