# LIB_Device

## 概述

综合库 / 器件类

## 方法列表

| 方法名                             | 说明                        |
| ---------------------------------- | --------------------------- |
| [`create`](#create) ⚠️             | 创建器件                    |
| [`delete`](#delete) ⚠️             | 删除器件                    |
| [`modify`](#modify) ⚠️             | 修改器件                    |
| [`get`](#get) ⚠️                   | 获取器件的所有属性          |
| [`copy`](#copy) ⚠️                 | 复制器件                    |
| [`search`](#search) ⚠️             | 搜索器件                    |
| [`getByLcscIds`](#getbylcscids) ⚠️ | 使用立创 C 编号批量获取器件 |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建器件

**方法签名:**

```typescript
create(libraryUuid: string, deviceName: string, classification?: ILIB_ClassificationIndex, association?: { symbolType?: ELIB_SymbolType
```

**参数:**

| 参数名         | 类型 | 描述                                                                                                                                                    |
| -------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| libraryUuid    |      | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取                                                                                                |
| deviceName     |      | 器件名称                                                                                                                                                |
| classification |      | 分类                                                                                                                                                    |
| association    |      | 关联符号、封装、图像，指定 `symbolType` 则创建新符号，无需新建符号则无需指定 `symbolType`，但请注意，如若不新建符号也不指定符号的关联信息将无法创建器件 |
| description    |      | 描述                                                                                                                                                    |
| property       |      | 其它参数，仅 `designator`、`addIntoBom`、`addIntoPcb` 存在默认值                                                                                        |

**返回值:**

器件 UUID

---

### delete

> ⚠️ **Beta 阶段**

删除器件

**方法签名:**

```typescript
delete(deviceUuid: string, libraryUuid: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                                     |
| ----------- | -------- | -------------------------------------------------------- |
| deviceUuid  | `string` | 器件 UUID                                                |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改器件

**备注:**

> 如希望清除某些属性，则将其的值设置为 `null`

**方法签名:**

```typescript
modify(deviceUuid: string, libraryUuid: string, deviceName?: string, classification?: ILIB_ClassificationIndex | null, association?: { symbolUuid?: string
```

**参数:**

| 参数名         | 类型 | 描述                                                     |
| -------------- | ---- | -------------------------------------------------------- |
| deviceUuid     |      | 器件 UUID                                                |
| libraryUuid    |      | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| deviceName     |      | 器件名称                                                 |
| classification |      | 分类                                                     |
| association    |      | 关联符号、封装、图像                                     |
| description    |      | 描述                                                     |
| property       |      | 其它参数                                                 |

**返回值:**

操作是否成功

---

### get

> ⚠️ **Beta 阶段**

获取器件的所有属性

**方法签名:**

```typescript
get(deviceUuid: string, libraryUuid?: string): Promise<ILIB_DeviceItem | undefined>
```

**参数:**

| 参数名      | 类型     | 描述                                                                   |
| ----------- | -------- | ---------------------------------------------------------------------- |
| deviceUuid  | `string` | 器件 UUID                                                              |
| libraryUuid | `string` | 库 UUID，默认为系统库，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

器件属性

---

### copy

> ⚠️ **Beta 阶段**

复制器件

**方法签名:**

```typescript
copy(deviceUuid: string, libraryUuid: string, targetLibraryUuid: string, targetClassification?: ILIB_ClassificationIndex, newDeviceName?: string): Promise<string | undefined>
```

**参数:**

| 参数名               | 类型                       | 描述                                                     |
| -------------------- | -------------------------- | -------------------------------------------------------- |
| deviceUuid           | `string`                   | 器件 UUID                                                |
| libraryUuid          | `string`                   | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| targetLibraryUuid    | `string`                   | 目标库 UUID                                              |
| targetClassification | `ILIB_ClassificationIndex` | 目标库内的分类                                           |
| newDeviceName        | `string`                   | 新器件名称，如若目标库内存在重名器件将导致复制失败       |

**返回值:**

目标库内新器件的 UUID

---

### search

> ⚠️ **Beta 阶段**

搜索器件

**方法签名:**

```typescript
search(key: string, libraryUuid?: string, classification?: ILIB_ClassificationIndex, symbolType?: ELIB_SymbolType, itemsOfPage?: number, page?: number): Promise<Array<ILIB_DeviceSearchItem>>
```

**参数:**

| 参数名         | 类型                       | 描述                                                                   |
| -------------- | -------------------------- | ---------------------------------------------------------------------- |
| key            | `string`                   | 搜索关键字                                                             |
| libraryUuid    | `string`                   | 库 UUID，默认为系统库，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| classification | `ILIB_ClassificationIndex` | 分类，默认为全部                                                       |
| symbolType     | `ELIB_SymbolType`          | 符号类型，默认为全部                                                   |
| itemsOfPage    | `number`                   | 一页搜索结果的数量                                                     |
| page           | `number`                   | 页数                                                                   |

**返回值:**

搜索到的器件属性的列表

---

### getByLcscIds

> ⚠️ **Beta 阶段**

使用立创 C 编号批量获取器件
默认情况下，如果在同一个库内匹配到多个相同 C 编号的器件，将只会返回第一个结果；
如果希望返回多个结果，请将 `allowMultiMatch` 置为 `true`；
私有化部署环境暂无法使用本接口

**方法签名:**

```typescript
getByLcscIds(lcscIds: Array<string>, libraryUuid?: string, allowMultiMatch?: boolean): Promise<Array<ILIB_DeviceSearchItem>>
```

**参数:**

| 参数名          | 类型            | 描述                                                                   |
| --------------- | --------------- | ---------------------------------------------------------------------- |
| lcscIds         | `Array<string>` | 立创 C 编号数组                                                        |
| libraryUuid     | `string`        | 库 UUID，默认为系统库，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| allowMultiMatch | `boolean`       | 是否允许单个立创 C 编号匹配多个结果                                    |

**返回值:**

搜索到的器件属性的列表
