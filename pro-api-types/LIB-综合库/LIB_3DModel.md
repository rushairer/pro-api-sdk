# LIB_3DModel

## 概述

综合库 / 3D 模型类

## 方法列表

| 方法名                 | 说明                   |
| ---------------------- | ---------------------- |
| [`create`](#create) ⚠️ | 创建 3D 模型           |
| [`delete`](#delete) ⚠️ | 删除 3D 模型           |
| [`modify`](#modify) ⚠️ | 修改 3D 模型           |
| [`get`](#get) ⚠️       | 获取 3D 模型的所有属性 |
| [`copy`](#copy) ⚠️     | 复制 3D 模型           |
| [`search`](#search) ⚠️ | 搜索 3D 模型           |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建 3D 模型

**方法签名:**

```typescript
create(libraryUuid: string, modelFile: Blob, classification?: ILIB_ClassificationIndex, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.METER | ESYS_Unit.MIL | ESYS_Unit.INCH): Promise<string[] | undefined>
```

**参数:**

| 参数名         | 类型                       | 描述                                                     |
| -------------- | -------------------------- | -------------------------------------------------------- |
| libraryUuid    | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| modelName      |                            | 3D 模型名称                                              |
| modelFile      | `Blob`                     | 3D 模型文件数据                                          |
| classification | `ILIB_ClassificationIndex` | 分类                                                     |
| description    |                            | 描述                                                     |

**返回值:**

3D 模型 UUID

---

### delete

> ⚠️ **Beta 阶段**

删除 3D 模型

**方法签名:**

```typescript
delete(modelUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| modelUuid   | `string` | 3D 模型 UUID                                             |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改 3D 模型

**备注:**

> 如希望清除某些属性，则将其的值设置为 `null`

**方法签名:**

```typescript
modify(modelUuid: string, libraryUuid: string, modelName?: string, classification?: ILIB_ClassificationIndex | null, description?: string | null): Promise<boolean>
```

**参数:**

| 参数名         | 类型                      | 描述                                                     |
| -------------- | ------------------------- | -------------------------------------------------------- | ---- |
| modelUuid      | `string`                  | 3D 模型 UUID                                             |
| libraryUuid    | `string`                  | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| modelName      | `string`                  | 3D 模型名称                                              |
| classification | `ILIB_ClassificationIndex | null`                                                    | 分类 |
| description    | `string                   | null`                                                    | 描述 |

**返回值:**

操作是否成功

---

### get

> ⚠️ **Beta 阶段**

获取 3D 模型的所有属性

**方法签名:**

```typescript
get(modelUuid: string, libraryUuid?: string): Promise<ILIB_3DModelItem | undefined>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| modelUuid   | `string` | 3D 模型 UUID                                             |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

3D 模型属性

---

### copy

> ⚠️ **Beta 阶段**

复制 3D 模型

**方法签名:**

```typescript
copy(modelUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex, newModelName?: string): Promise<string | undefined>
```

**参数:**

| 参数名               | 类型                       | 描述                                                       |
| -------------------- | -------------------------- | ---------------------------------------------------------- |
| modelUuid            | `string`                   | 3D 模型 UUID                                               |
| libraryUuid          | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取   |
| targetLibraryUuid    | `string`                   | 目标库 UUID                                                |
| targetClassification | `ILIB_ClassificationIndex` | 目标库内的分类                                             |
| newModelName         | `string`                   | 新 3D 模型名称，如若目标库内存在重名 3D 模型将导致复制失败 |

**返回值:**

目标库内新 3D 模型的 UUID

---

### search

> ⚠️ **Beta 阶段**

搜索 3D 模型

**方法签名:**

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex, itemsOfPage?: number, page?: number): Promise<Array<ILIB_3DModelSearchItem>>
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

搜索到的 3D 模型属性列表
