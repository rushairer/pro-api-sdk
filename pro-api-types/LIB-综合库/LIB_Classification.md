# LIB_Classification

## 概述

综合库 / 库分类索引类

## 方法列表

| 方法名                                                     | 说明                         |
| ---------------------------------------------------------- | ---------------------------- |
| [`createPrimary`](#createprimary) ⚠️                       | 创建一级分类                 |
| [`createSecondary`](#createsecondary) ⚠️                   | 创建二级分类                 |
| [`getIndexByName`](#getindexbyname) ⚠️                     | 获取指定名称的分类的分类索引 |
| [`getNameByUuid`](#getnamebyuuid) ⚠️                       | 获取指定 UUID 的分类的名称   |
| [`getNameByIndex`](#getnamebyindex) ⚠️                     | 获取指定索引的分类的名称     |
| [`getAllClassificationTree`](#getallclassificationtree) ⚠️ | 获取所有分类信息组成的树     |
| [`deleteByUuid`](#deletebyuuid) ⚠️                         | 删除指定 UUID 的分类         |
| [`deleteByIndex`](#deletebyindex) ⚠️                       | 删除指定索引的分类           |

---

## 方法详情

### createPrimary

> ⚠️ **Beta 阶段**

创建一级分类

**方法签名:**

```typescript
createPrimary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>
```

**参数:**

| 参数名                    | 类型               | 描述         |
| ------------------------- | ------------------ | ------------ |
| libraryUuid               | `string`           | 库 UUID      |
| libraryType               | `ELIB_LibraryType` | 库类型       |
| primaryClassificationName | `string`           | 一级分类名称 |

**返回值:**

分类索引

---

### createSecondary

> ⚠️ **Beta 阶段**

创建二级分类

**方法签名:**

```typescript
createSecondary(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationName: string): Promise<ILIB_ClassificationIndex | undefined>
```

**参数:**

| 参数名                      | 类型               | 描述          |
| --------------------------- | ------------------ | ------------- |
| libraryUuid                 | `string`           | 库 UUID       |
| libraryType                 | `ELIB_LibraryType` | 库类型        |
| primaryClassificationUuid   | `string`           | 一级分类 UUID |
| secondaryClassificationName | `string`           | 二级分类名称  |

**返回值:**

分类索引

---

### getIndexByName

> ⚠️ **Beta 阶段**

获取指定名称的分类的分类索引

**备注:**

> 分类索引内包含分类的 UUID，具体可查阅 {@link ILIB_ClassificationIndex}

**方法签名:**

```typescript
getIndexByName(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationName: string, secondaryClassificationName?: string): Promise<ILIB_ClassificationIndex | undefined>
```

**参数:**

| 参数名                      | 类型               | 描述         |
| --------------------------- | ------------------ | ------------ |
| libraryUuid                 | `string`           | 库 UUID      |
| libraryType                 | `ELIB_LibraryType` | 库类型       |
| primaryClassificationName   | `string`           | 一级分类名称 |
| secondaryClassificationName | `string`           | 二级分类名称 |

**返回值:**

分类索引

---

### getNameByUuid

> ⚠️ **Beta 阶段**

获取指定 UUID 的分类的名称

**方法签名:**

```typescript
getNameByUuid(libraryUuid: string, libraryType: ELIB_LibraryType, primaryClassificationUuid: string, secondaryClassificationUuid?: string): Promise<{ primaryClassificationName: string
```

**参数:**

| 参数名                      | 类型               | 描述                                              |
| --------------------------- | ------------------ | ------------------------------------------------- |
| libraryUuid                 | `string`           | 库 UUID                                           |
| libraryType                 | `ELIB_LibraryType` | 库类型                                            |
| primaryClassificationUuid   | `string`           | 一级分类 UUID                                     |
| secondaryClassificationUuid | `string`           | 二级分类 UUID，如若不指定，则只获取一级分类的信息 |

**返回值:**

两级分类的名称

---

### getNameByIndex

> ⚠️ **Beta 阶段**

获取指定索引的分类的名称

**方法签名:**

```typescript
getNameByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<{ primaryClassificationName: string
```

**参数:**

| 参数名              | 类型                       | 描述     |
| ------------------- | -------------------------- | -------- |
| classificationIndex | `ILIB_ClassificationIndex` | 分类索引 |

**返回值:**

两级分类的名称

---

### getAllClassificationTree

> ⚠️ **Beta 阶段**

获取所有分类信息组成的树

**方法签名:**

```typescript
getAllClassificationTree(libraryUuid: string, libraryType: ELIB_LibraryType): Promise<Array<{ name: string
```

**参数:**

| 参数名      | 类型               | 描述    |
| ----------- | ------------------ | ------- |
| libraryUuid | `string`           | 库 UUID |
| libraryType | `ELIB_LibraryType` | 库类型  |

**返回值:**

分类信息组成的树结构数据

---

### deleteByUuid

> ⚠️ **Beta 阶段**

删除指定 UUID 的分类

**方法签名:**

```typescript
deleteByUuid(libraryUuid: string, classificationUuid: string): Promise<boolean>
```

**参数:**

| 参数名                      | 类型     | 描述          |
| --------------------------- | -------- | ------------- |
| libraryUuid                 | `string` | 库 UUID       |
| libraryType                 |          | 库类型        |
| primaryClassificationUuid   |          | 一级分类 UUID |
| secondaryClassificationUuid |          | 二级分类 UUID |

**返回值:**

操作是否成功

---

### deleteByIndex

> ⚠️ **Beta 阶段**

删除指定索引的分类

**方法签名:**

```typescript
deleteByIndex(classificationIndex: ILIB_ClassificationIndex): Promise<boolean>
```

**参数:**

| 参数名              | 类型                       | 描述     |
| ------------------- | -------------------------- | -------- |
| classificationIndex | `ILIB_ClassificationIndex` | 分类索引 |

**返回值:**

操作是否成功
