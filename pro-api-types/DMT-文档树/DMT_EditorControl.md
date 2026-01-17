# DMT_EditorControl

## 概述

文档树 / 编辑器控制类

## 备注

> 此处编辑器控制基于当前已打开的工程设计下的图页，其它任何 `documentUuid` 都将被认为是不存在的文档页

## 方法列表

| 方法名                                                                | 说明                           |
| --------------------------------------------------------------------- | ------------------------------ |
| [`openDocument`](#opendocument)                                       | 打开文档                       |
| [`openLibraryDocument`](#openlibrarydocument) ⚠️                      | 打开库符号、封装文档           |
| [`closeDocument`](#closedocument)                                     | 关闭文档                       |
| [`getSplitScreenTree`](#getsplitscreentree)                           | 获取编辑器分屏属性树           |
| [`getSplitScreenIdByTabId`](#getsplitscreenidbytabid)                 | 使用标签页 ID 获取分屏 ID      |
| [`getTabsBySplitScreenId`](#gettabsbysplitscreenid)                   | 获取指定分屏 ID 下的所有标签页 |
| [`createSplitScreen`](#createsplitscreen)                             | 创建分屏                       |
| [`moveDocumentToSplitScreen`](#movedocumenttosplitscreen)             | 将文档移动到指定分屏           |
| [`activateDocument`](#activatedocument)                               | 激活文档                       |
| [`activateSplitScreen`](#activatesplitscreen)                         | 激活分屏                       |
| [`tileAllDocumentToSplitScreen`](#tilealldocumenttosplitscreen)       | 平铺所有文档                   |
| [`mergeAllDocumentFromSplitScreen`](#mergealldocumentfromsplitscreen) | 合并所有分屏                   |
| [`getCurrentRenderedAreaImage`](#getcurrentrenderedareaimage) ⚠️      | 获取画布渲染区域图像           |
| [`zoomToRegion`](#zoomtoregion) ⚠️                                    | 缩放到区域                     |
| [`zoomTo`](#zoomto) ⚠️                                                | 缩放到坐标                     |
| [`zoomToAllPrimitives`](#zoomtoallprimitives) ⚠️                      | 缩放到所有图元（适应全部）     |
| [`zoomToSelectedPrimitives`](#zoomtoselectedprimitives) ⚠️            | 缩放到已选中图元（适应选中）   |
| [`generateIndicatorMarkers`](#generateindicatormarkers) ⚠️            | 生成指示标记                   |
| [`removeIndicatorMarkers`](#removeindicatormarkers) ⚠️                | 移除指示标记                   |

---

## 方法详情

### openDocument

打开文档

**方法签名:**

```typescript
openDocument(documentUuid: string, splitScreenId?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                                                                                                                                      |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| documentUuid  | `string` | 文档 UUID，此处支持 {@link IDMT_SchematicItem.uuid}、{@link IDMT_SchematicPageItem.uuid}、{@link IDMT_PcbItem.uuid}、{@link IDMT_PanelItem.uuid} 作为输入 |
| splitScreenId | `string` | 分屏 ID，即 {@link DMT_EditorControl.getSplitScreenTree} 方法获取到的 {@link IDMT_EditorSplitScreenItem.id}                                               |

**返回值:**

标签页 ID，如若为 `undefined`，则打开文档失败

---

### openLibraryDocument

> ⚠️ **Beta 阶段**

打开库符号、封装文档

**方法签名:**

```typescript
openLibraryDocument(libraryUuid: string, libraryType: ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT, uuid: string, splitScreenId?: string): Promise<string | undefined>
```

**参数:**

| 参数名        | 类型                     | 描述                                                                                                        |
| ------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | ---------------------- |
| libraryUuid   | `string`                 | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取                                                    |
| libraryType   | `ELIB_LibraryType.SYMBOL | ELIB_LibraryType.FOOTPRINT`                                                                                 | 库类型，支持符号和封装 |
| uuid          | `string`                 | 符号、封装 UUID                                                                                             |
| splitScreenId | `string`                 | 分屏 ID，即 {@link DMT_EditorControl.getSplitScreenTree} 方法获取到的 {@link IDMT_EditorSplitScreenItem.id} |

**返回值:**

标签页 ID，如若为 `undefined`，则打开文档失败

---

### closeDocument

关闭文档

**备注:**

> 如若文档尚未保存，执行此操作将会直接丢失所有未保存的数据，请在修改操作完成后首先执行 {@link SCH_Document.save}、{@link PCB_Document.save}、{@link PNL_Document.save} 保存数据

**方法签名:**

```typescript
closeDocument(tabId: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述                                                                                                                     |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------ |
| tabId  | `string` | 标签页 ID，此处支持 {@link IDMT_SchematicPageItem.uuid}、{@link IDMT_PcbItem.uuid}、{@link IDMT_PanelItem.uuid} 作为输入 |

**返回值:**

操作是否成功

---

### getSplitScreenTree

获取编辑器分屏属性树

**方法签名:**

```typescript
getSplitScreenTree(): Promise<IDMT_EditorSplitScreenItem | undefined>
```

**返回值:**

编辑器分屏属性树，如若为 `undefined`，则数据获取失败

---

### getSplitScreenIdByTabId

使用标签页 ID 获取分屏 ID

**方法签名:**

```typescript
getSplitScreenIdByTabId(tabId: string): Promise<string | undefined>
```

**参数:**

| 参数名 | 类型     | 描述      |
| ------ | -------- | --------- |
| tabId  | `string` | 标签页 ID |

**返回值:**

分屏 ID

---

### getTabsBySplitScreenId

获取指定分屏 ID 下的所有标签页

**备注:**

> 如果指定分屏下不存在直接标签页（即它属下还存在 {@link IDMT_EditorSplitScreenItem.children | children}），则返回空数组

**方法签名:**

```typescript
getTabsBySplitScreenId(splitScreenId: string): Promise<Array<IDMT_EditorTabItem>>
```

**参数:**

| 参数名        | 类型     | 描述    |
| ------------- | -------- | ------- |
| splitScreenId | `string` | 分屏 ID |

**返回值:**

标签页列表

---

### createSplitScreen

创建分屏

**备注:**

> 请确认 {@link DMT_EditorControl.createSplitScreen | tabId} 对应的分屏存在两个以上的标签页，否则分屏将不会执行，并返回 `undefined`

**方法签名:**

```typescript
createSplitScreen(splitScreenType: EDMT_EditorSplitScreenDirection, tabId: string): Promise<{ sourceSplitScreenId: string
```

**参数:**

| 参数名          | 类型                              | 描述                                         |
| --------------- | --------------------------------- | -------------------------------------------- |
| splitScreenType | `EDMT_EditorSplitScreenDirection` | 分屏类型，`horizontal` 水平、`vertical` 垂直 |
| tabId           | `string`                          | 标签页 ID，该标签页将会被移入新的分屏中      |

**返回值:**

分屏 ID，`sourceSplitScreenId` 代表源分屏，`newSplitScreenId` 代表新分屏

---

### moveDocumentToSplitScreen

将文档移动到指定分屏

**备注:**

> 移动文档后，编辑器分屏属性树可能会出现变化

**方法签名:**

```typescript
moveDocumentToSplitScreen(tabId: string, splitScreenId: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述                                 |
| ------------- | -------- | ------------------------------------ | -------- |
| tabId         | `string` | 标签页 ID                            |
| splitScreenId | `string` | {@link IDMT_EditorSplitScreenItem.id | 分屏 ID} |

**返回值:**

操作是否成功

---

### activateDocument

激活文档

**备注:**

> 切换到指定文档的标签页，并将输入焦点置于其中

**方法签名:**

```typescript
activateDocument(tabId: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述      |
| ------ | -------- | --------- |
| tabId  | `string` | 标签页 ID |

**返回值:**

操作是否成功

---

### activateSplitScreen

激活分屏

**备注:**

> 使输入焦点

**方法签名:**

```typescript
activateSplitScreen(splitScreenId: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述    |
| ------------- | -------- | ------- |
| splitScreenId | `string` | 分屏 ID |

**返回值:**

操作是否成功

---

### tileAllDocumentToSplitScreen

平铺所有文档

**备注:**

> 仅当不存在子分屏时可用，将会自动为所有已打开的文档标签页创建分屏

**方法签名:**

```typescript
tileAllDocumentToSplitScreen(): Promise<boolean>
```

**返回值:**

操作是否成功

---

### mergeAllDocumentFromSplitScreen

合并所有分屏

**备注:**

> 仅当存在子分屏时可用，将会取消所有子分屏，并将所有文档标签页合并到初始分屏内

**方法签名:**

```typescript
mergeAllDocumentFromSplitScreen(): Promise<boolean>
```

**返回值:**

操作是否成功

---

### getCurrentRenderedAreaImage

> ⚠️ **Beta 阶段**

获取画布渲染区域图像

**方法签名:**

```typescript
getCurrentRenderedAreaImage(tabId?: string): Promise<Blob | undefined>
```

**参数:**

| 参数名 | 类型     | 描述                                            |
| ------ | -------- | ----------------------------------------------- |
| tabId  | `string` | 标签页 ID，如若未传入，则获取最后输入焦点的画布 |

**返回值:**

- 画布渲染区域的 Blob 格式图像数据

---

### zoomToRegion

> ⚠️ **Beta 阶段**

缩放到区域

**备注:**

> 在原理图、符号画布坐标单位跨度为 0.01inch，在 PCB、封装画布坐标单位跨度为 mil

**方法签名:**

```typescript
zoomToRegion(left: number, right: number, top: number, bottom: number, tabId?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述                                          |
| ------ | -------- | --------------------------------------------- |
| left   | `number` | 矩形框第一 X 坐标                             |
| right  | `number` | 矩形框第二 X 坐标                             |
| top    | `number` | 矩形框第一 Y 坐标                             |
| bottom | `number` | 矩形框第二 Y 坐标                             |
| tabId  | `string` | 标签页 ID，如若未传入，则为最后输入焦点的画布 |

**返回值:**

操作是否成功

---

### zoomTo

> ⚠️ **Beta 阶段**

缩放到坐标

**备注:**

> 在原理图、符号画布坐标单位跨度为 0.01inch，在 PCB、封装画布坐标单位跨度为 mil

**方法签名:**

```typescript
zoomTo(x?: number, y?: number, scaleRatio?: number, tabId?: string): Promise<{ left: number
```

**参数:**

| 参数名     | 类型     | 描述                                                                                            |
| ---------- | -------- | ----------------------------------------------------------------------------------------------- |
| x          | `number` | 中心坐标 X，如若不传入则不改变当前 X 坐标                                                       |
| y          | `number` | 中心坐标 Y，如若不传入则不改变当前 Y 坐标                                                       |
| scaleRatio | `number` | 缩放比，如若不传入则不改变当前缩放比，单位跨度为 `1/100`，如若传入 `200`，则表示缩放比为 `200%` |
| tabId      | `string` | 标签页 ID，如若未传入，则为最后输入焦点的画布                                                   |

**返回值:**

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

---

### zoomToAllPrimitives

> ⚠️ **Beta 阶段**

缩放到所有图元（适应全部）

**备注:**

> 在返回数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil

**方法签名:**

```typescript
zoomToAllPrimitives(tabId?: string): Promise<{ left: number
```

**参数:**

| 参数名 | 类型     | 描述                                          |
| ------ | -------- | --------------------------------------------- |
| tabId  | `string` | 标签页 ID，如若未传入，则为最后输入焦点的画布 |

**返回值:**

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

---

### zoomToSelectedPrimitives

> ⚠️ **Beta 阶段**

缩放到已选中图元（适应选中）

**备注:**

> 在返回数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil

**方法签名:**

```typescript
zoomToSelectedPrimitives(tabId?: string): Promise<{ left: number
```

**参数:**

| 参数名 | 类型     | 描述                                          |
| ------ | -------- | --------------------------------------------- |
| tabId  | `string` | 标签页 ID，如若未传入，则为最后输入焦点的画布 |

**返回值:**

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

---

### generateIndicatorMarkers

> ⚠️ **Beta 阶段**

生成指示标记

**备注:**

> 指示标记外形数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil

**方法签名:**

```typescript
generateIndicatorMarkers(markers: Array<IDMT_IndicatorMarkerShape>, color?: { r: number
```

**参数:**

| 参数名    | 类型 | 描述                                          |
| --------- | ---- | --------------------------------------------- |
| markers   |      | 指示标记外形对象数组                          |
| color     |      | 指示标记颜色                                  |
| lineWidth |      | 线宽                                          |
| zoom      |      | 是否定位并缩放                                |
| tabId     |      | 标签页 ID，如若未传入，则为最后输入焦点的画布 |

**返回值:**

指示标记生成是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在

---

### removeIndicatorMarkers

> ⚠️ **Beta 阶段**

移除指示标记

**备注:**

> 本接口会移除所有已生成的指示标记

**方法签名:**

```typescript
removeIndicatorMarkers(tabId?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述                                          |
| ------ | -------- | --------------------------------------------- |
| tabId  | `string` | 标签页 ID，如若未传入，则为最后输入焦点的画布 |

**返回值:**

指示标记移除是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在
