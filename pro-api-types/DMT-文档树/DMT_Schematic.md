# DMT_Schematic

## 概述

文档树 / 原理图管理类

## 备注

> 在当前打开的工程内进行原理图管理的相关操作

## 方法列表

| 方法名                                                                                     | 说明                                     |
| ------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [`createSchematic`](#createschematic) ⚠️                                                   | 创建原理图                               |
| [`createSchematicPage`](#createschematicpage) ⚠️                                           | 创建原理图图页                           |
| [`modifySchematicName`](#modifyschematicname) ⚠️                                           | 修改原理图名称                           |
| [`modifySchematicPageName`](#modifyschematicpagename) ⚠️                                   | 修改原理图图页名称                       |
| [`modifySchematicPageTitleBlock`](#modifyschematicpagetitleblock) ⚠️                       | 修改原理图图页明细表                     |
| [`copySchematic`](#copyschematic) ⚠️                                                       | 复制原理图                               |
| [`copySchematicPage`](#copyschematicpage) ⚠️                                               | 复制原理图图页                           |
| [`getSchematicInfo`](#getschematicinfo) ⚠️                                                 | 获取原理图的详细属性                     |
| [`getSchematicPageInfo`](#getschematicpageinfo) ⚠️                                         | 获取原理图图页的详细属性                 |
| [`getAllSchematicsInfo`](#getallschematicsinfo) ⚠️                                         | 获取工程内所有原理图的详细属性           |
| [`getAllSchematicPagesInfo`](#getallschematicpagesinfo) ⚠️                                 | 获取工程内所有原理图图页的详细属性       |
| [`getCurrentSchematicAllSchematicPagesInfo`](#getcurrentschematicallschematicpagesinfo) ⚠️ | 获取当前原理图内所有原理图图页的详细属性 |
| [`getCurrentSchematicInfo`](#getcurrentschematicinfo) ⚠️                                   | 获取当前原理图的详细属性                 |
| [`getCurrentSchematicPageInfo`](#getcurrentschematicpageinfo) ⚠️                           | 获取当前原理图图页的详细属性             |
| [`reorderSchematicPages`](#reorderschematicpages) ⚠️                                       | 重新排序原理图图页                       |
| [`deleteSchematic`](#deleteschematic) ⚠️                                                   | 删除原理图                               |
| [`deleteSchematicPage`](#deleteschematicpage) ⚠️                                           | 删除原理图图页                           |

---

## 方法详情

### createSchematic

> ⚠️ **Beta 阶段**

创建原理图

**方法签名:**

```typescript
createSchematic(boardName?: string): Promise<string | undefined>
```

**参数:**

| 参数名    | 类型     | 描述                                   |
| --------- | -------- | -------------------------------------- |
| boardName | `string` | 所属板子名称，如若不指定则为游离原理图 |

**返回值:**

原理图 UUID，如若为 `undefined` 则创建失败

---

### createSchematicPage

> ⚠️ **Beta 阶段**

创建原理图图页

**方法签名:**

```typescript
createSchematicPage(schematicUuid: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述            |
| ------------- | -------- | --------------- |
| schematicUuid | `string` | 所属原理图 UUID |

**返回值:**

原理图图页 UUID，如若为 `undefined` 则创建失败

---

### modifySchematicName

> ⚠️ **Beta 阶段**

修改原理图名称

**备注:**

> 如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则修改名称时将同步修改复用模块符号名称与关联 PCB 名称

**方法签名:**

```typescript
modifySchematicName(schematicUuid: string, schematicName: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述        |
| ------------- | -------- | ----------- |
| schematicUuid | `string` | 原理图 UUID |
| schematicName | `string` | 原理图名称  |

**返回值:**

是否修改成功

---

### modifySchematicPageName

> ⚠️ **Beta 阶段**

修改原理图图页名称

**方法签名:**

```typescript
modifySchematicPageName(schematicPageUuid: string, schematicPageName: string): Promise<boolean>
```

**参数:**

| 参数名            | 类型     | 描述            |
| ----------------- | -------- | --------------- |
| schematicPageUuid | `string` | 原理图图页 UUID |
| schematicPageName | `string` | 原理图图页名称  |

**返回值:**

是否修改成功

---

### modifySchematicPageTitleBlock

> ⚠️ **Beta 阶段**

修改原理图图页明细表

**备注:**

> `titleBlockData` 仅需要传入任何需要修改的明细项作为 `key`，并传入其需要修改的值，任何无法识别的明细项将被忽略，任何未传入的项和值将保持默认状态

**方法签名:**

```typescript
modifySchematicPageTitleBlock(showTitleBlock?: boolean, titleBlockData?: { [key: string]: { showTitle?: boolean
```

**参数:**

| 参数名         | 类型 | 描述                                 |
| -------------- | ---- | ------------------------------------ |
| showTitleBlock |      | 是否显示明细表，不定义将保持当前状态 |
| titleBlockData |      | 需要修改的明细项及其修改的值         |

**返回值:**

修改操作是否成功，如若未传入 `showTitleBlock` 和 `titleBlockData` 将返回 `false`；请注意，如若存在无法识别的明细项但程序并未出错，将返回 `true` 的结果，因为无法识别的明细项被忽略

---

### copySchematic

> ⚠️ **Beta 阶段**

复制原理图

**备注:**

> 如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则复制原理图时将同步新建复用模块符号

**方法签名:**

```typescript
copySchematic(schematicUuid: string, boardName?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                           |
| ------------- | -------- | ---------------------------------------------- |
| schematicUuid | `string` | 源原理图 UUID                                  |
| boardName     | `string` | 新原理图所属板子名称，如若不指定则为游离原理图 |

**返回值:**

新原理图 UUID，如若为 `undefined` 则复制失败

---

### copySchematicPage

> ⚠️ **Beta 阶段**

复制原理图图页

**方法签名:**

```typescript
copySchematicPage(schematicPageUuid: string, schematicUuid?: string): Promise<string | undefined>
```

**参数:**

| 参数名            | 类型     | 描述                                      |
| ----------------- | -------- | ----------------------------------------- |
| schematicPageUuid | `string` | 源原理图图页 UUID                         |
| schematicUuid     | `string` | 目标原理图 UUID，如若不指定则为当前原理图 |

**返回值:**

新原理图图页 UUID，如若为 `undefined` 则复制失败

---

### getSchematicInfo

> ⚠️ **Beta 阶段**

获取原理图的详细属性

**方法签名:**

```typescript
getSchematicInfo(schematicUuid: string): Promise<IDMT_SchematicItem | undefined>
```

**参数:**

| 参数名        | 类型     | 描述        |
| ------------- | -------- | ----------- |
| schematicUuid | `string` | 原理图 UUID |

**返回值:**

原理图的详细属性，如若为 `undefined` 则获取失败

---

### getSchematicPageInfo

> ⚠️ **Beta 阶段**

获取原理图图页的详细属性

**方法签名:**

```typescript
getSchematicPageInfo(schematicPageUuid: string): Promise<IDMT_SchematicPageItem | undefined>
```

**参数:**

| 参数名            | 类型     | 描述            |
| ----------------- | -------- | --------------- |
| schematicPageUuid | `string` | 原理图图页 UUID |

**返回值:**

原理图图页的详细属性，如若为 `undefined` 则获取失败

---

### getAllSchematicsInfo

> ⚠️ **Beta 阶段**

获取工程内所有原理图的详细属性

**方法签名:**

```typescript
getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>
```

**返回值:**

所有原理图的详细属性的数组

---

### getAllSchematicPagesInfo

> ⚠️ **Beta 阶段**

获取工程内所有原理图图页的详细属性

**方法签名:**

```typescript
getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>
```

**返回值:**

所有原理图图页的详细属性的数组

---

### getCurrentSchematicAllSchematicPagesInfo

> ⚠️ **Beta 阶段**

获取当前原理图内所有原理图图页的详细属性

**方法签名:**

```typescript
getCurrentSchematicAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>
```

**返回值:**

所有原理图图页的详细属性的数组

---

### getCurrentSchematicInfo

> ⚠️ **Beta 阶段**

获取当前原理图的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的原理图图页所关联的原理图的详细属性

**方法签名:**

```typescript
getCurrentSchematicInfo(): Promise<IDMT_SchematicItem | undefined>
```

**返回值:**

原理图的详细属性，如若为 `undefined` 则获取失败

---

### getCurrentSchematicPageInfo

> ⚠️ **Beta 阶段**

获取当前原理图图页的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的原理图图页的详细属性

**方法签名:**

```typescript
getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>
```

**返回值:**

原理图图页的详细属性，如若为 `undefined` 则获取失败

---

### reorderSchematicPages

> ⚠️ **Beta 阶段**

重新排序原理图图页

**备注:**

> 此处源原理图图页属性的数组需要通过 {@link DMT_Schematic.getAllSchematicPagesInfo} 或其它上游方法取得，完成数组排序后传入

**方法签名:**

```typescript
reorderSchematicPages(schematicUuid: string, schematicPageItemsArray: Array<IDMT_SchematicPageItem>): Promise<boolean>
```

**参数:**

| 参数名                  | 类型                            | 描述                              |
| ----------------------- | ------------------------------- | --------------------------------- |
| schematicUuid           | `string`                        | 执行排序的图页所关联的原理图 UUID |
| schematicPageItemsArray | `Array<IDMT_SchematicPageItem>` | 所有原理图图页属性的数组          |

**返回值:**

排序操作是否成功

---

### deleteSchematic

> ⚠️ **Beta 阶段**

删除原理图

**备注:**

> 如若原理图已关联复用模块（在工程库内存在同名的复用模块符号），则删除原理图时将同步删除关联的 PCB 和复用模块符号，复用模块符号不可删除则跳过

**方法签名:**

```typescript
deleteSchematic(schematicUuid: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述        |
| ------------- | -------- | ----------- |
| schematicUuid | `string` | 原理图 UUID |

**返回值:**

操作是否成功

---

### deleteSchematicPage

> ⚠️ **Beta 阶段**

删除原理图图页

**方法签名:**

```typescript
deleteSchematicPage(schematicPageUuid: string): Promise<boolean>
```

**参数:**

| 参数名            | 类型     | 描述            |
| ----------------- | -------- | --------------- |
| schematicPageUuid | `string` | 原理图图页 UUID |

**返回值:**

操作是否成功
