# SYS_FileManager

## 概述

系统 / 文件管理类

## 方法列表

| 方法名                                                                               | 说明                               |
| ------------------------------------------------------------------------------------ | ---------------------------------- |
| [`getProjectFile`](#getprojectfile)                                                  | 获取工程文件                       |
| [`getDocumentFile`](#getdocumentfile)                                                | 获取文档文件                       |
| [`getDocumentSource`](#getdocumentsource) ⚠️                                         | 获取文档源码                       |
| [`getDocumentFootprintSources`](#getdocumentfootprintsources) ⚠️                     | 获取文档封装源码                   |
| [`setDocumentSource`](#setdocumentsource) ⚠️                                         | 修改文档源码                       |
| [`getProjectFileByProjectUuid`](#getprojectfilebyprojectuuid) ⚠️                     | 使用工程 UUID 获取工程文件         |
| [`getDeviceFileByDeviceUuid`](#getdevicefilebydeviceuuid)                            | 使用器件 UUID 获取器件文件         |
| [`getFootprintFileByFootprintUuid`](#getfootprintfilebyfootprintuuid) ⚠️             | 使用封装 UUID 获取封装文件         |
| [`getCbbFileByCbbUuid`](#getcbbfilebycbbuuid) ⚠️                                     | 使用复用模块 UUID 获取复用模块文件 |
| [`getPanelLibraryFileByPanelLibraryUuid`](#getpanellibraryfilebypanellibraryuuid) ⚠️ | 使用面板库 UUID 获取面板库文件     |
| [`importProjectByProjectFile`](#importprojectbyprojectfile) ⚠️                       | 使用工程文件导入工程               |
| [`importProjectByProjectFile`](#importprojectbyprojectfile) ⚠️                       | 使用工程文件导入工程               |

---

## 方法详情

### getProjectFile

获取工程文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **工程管理 \> 下载工程** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getProjectFile(fileName?: string, password?: string, fileType?: '.epro' | '.epro2'): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述      |
| -------- | -------- | --------- | -------- |
| fileName | `string` | 文件名    |
| password | `string` | 加密密码  |
| fileType | `'.epro' | '.epro2'` | 文件格式 |

**返回值:**

工程文件数据，`undefined` 表示当前未打开工程或数据获取失败

---

### getDocumentFile

获取文档文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **工程设计图 \> 文件导出** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getDocumentFile(fileName?: string, password?: string, fileType?: '.epro' | '.epro2'): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述      |
| -------- | -------- | --------- | -------- |
| fileName | `string` | 文件名    |
| password | `string` | 加密密码  |
| fileType | `'.epro' | '.epro2'` | 文件格式 |

**返回值:**

文档文件数据，`undefined` 表示当前未打开文档或数据获取失败

---

### getDocumentSource

> ⚠️ **Beta 阶段**

获取文档源码

**方法签名:**

```typescript
getDocumentSource(): Promise<string | undefined>
```

**返回值:**

文档源码数据，`undefined` 表示当前未打开文档或数据获取失败

---

### getDocumentFootprintSources

> ⚠️ **Beta 阶段**

获取文档封装源码

**方法签名:**

```typescript
getDocumentFootprintSources(): Promise<Array<{ footprintUuid: string
```

**返回值:**

文档封装源码数据，数据获取失败将返回空数组

---

### setDocumentSource

> ⚠️ **Beta 阶段**

修改文档源码

**方法签名:**

```typescript
setDocumentSource(source: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| source | `string` | 文档源码 |

**返回值:**

是否修改成功，如果输入的文档源码格式错误，将返回 `false` 的结果

---

### getProjectFileByProjectUuid

> ⚠️ **Beta 阶段**

使用工程 UUID 获取工程文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **工程管理 \> 下载工程** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getProjectFileByProjectUuid(projectUuid: string, fileName?: string, password?: string, fileType?: '.epro' | '.epro2'): Promise<File | undefined>
```

**参数:**

| 参数名      | 类型     | 描述      |
| ----------- | -------- | --------- | -------- |
| projectUuid | `string` | 工程 UUID |
| fileName    | `string` | 文件名    |
| password    | `string` | 加密密码  |
| fileType    | `'.epro' | '.epro2'` | 文件格式 |

**返回值:**

工程文件数据，`undefined` 表示当前未打开工程或数据获取失败

---

### getDeviceFileByDeviceUuid

使用器件 UUID 获取器件文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **团队库 \> 下载库** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getDeviceFileByDeviceUuid(deviceUuid: string | Array<string>, libraryUuid?: string): Promise<File | undefined>
```

**参数:**

| 参数名      | 类型     | 描述                                                                             |
| ----------- | -------- | -------------------------------------------------------------------------------- | -------------------------- |
| deviceUuid  | `string  | Array<string>`                                                                   | 器件 UUID 或器件 UUID 列表 |
| libraryUuid | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取，如若不传入，则为系统库 |

**返回值:**

器件文件数据，`undefined` 表示数据获取失败

---

### getFootprintFileByFootprintUuid

> ⚠️ **Beta 阶段**

使用封装 UUID 获取封装文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **团队库 \> 下载库** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getFootprintFileByFootprintUuid(footprintUuid: string | Array<string>, libraryUuid?: string): Promise<File | undefined>
```

**参数:**

| 参数名        | 类型     | 描述                                                     |
| ------------- | -------- | -------------------------------------------------------- | -------------------------- |
| footprintUuid | `string  | Array<string>`                                           | 封装 UUID 或封装 UUID 列表 |
| libraryUuid   | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

封装文件数据，`undefined` 表示数据获取失败

---

### getCbbFileByCbbUuid

> ⚠️ **Beta 阶段**

使用复用模块 UUID 获取复用模块文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **团队模块 \> 下载模块** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getCbbFileByCbbUuid(cbbUuid: string, libraryUuid?: string, props?: { fileName?: string
```

**参数:**

| 参数名      | 类型 | 描述                                                     |
| ----------- | ---- | -------------------------------------------------------- |
| cbbUuid     |      | 复用模块 UUID                                            |
| libraryUuid |      | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |
| fileName    |      | 复用模块名                                               |
| password    |      | 加密密码                                                 |

**返回值:**

复用模块文件数据，`undefined` 表示数据获取失败

---

### getPanelLibraryFileByPanelLibraryUuid

> ⚠️ **Beta 阶段**

使用面板库 UUID 获取面板库文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
注意：本接口需要启用 **团队库 \> 下载库** 权限，没有权限调用将始终 `throw Error`

**方法签名:**

```typescript
getPanelLibraryFileByPanelLibraryUuid(panelLibraryUuid: string | Array<string>, libraryUuid?: string): Promise<File | undefined>
```

**参数:**

| 参数名           | 类型     | 描述                                                     |
| ---------------- | -------- | -------------------------------------------------------- | ------------------------------ |
| panelLibraryUuid | `string  | Array<string>`                                           | 面板库 UUID 或面板库 UUID 列表 |
| libraryUuid      | `string` | 库 UUID，可以使用 {@link LIB_LibrariesList} 内的接口获取 |

**返回值:**

面板库文件数据，`undefined` 表示数据获取失败

---

### importProjectByProjectFile

> ⚠️ **Beta 阶段**

使用工程文件导入工程

**备注:**

> 暂不支持提取库的相关配置，如果需求提取库，将会按照默认配置提取

**方法签名:**

```typescript
importProjectByProjectFile(projectFile: File, fileType?: 'JLCEDA' | 'JLCEDA Pro' | 'EasyEDA' | 'EasyEDA Pro' | 'Allegro' | 'OrCAD' | 'EAGLE' | 'KiCad' | 'PADS' | 'LTspice', props?: { importOption?: ESYS_ImportProjectImportOption
```

**参数:**

| 参数名      | 类型 | 描述                                            |
| ----------- | ---- | ----------------------------------------------- |
| projectFile |      | 工程文件                                        |
| fileType    |      | 文件类型                                        |
| props       |      | 导入参数，参考 EDA 前端 **导入** 窗口内的配置项 |
| saveTo      |      | 保存到工程参数                                  |

**返回值:**

导入的工程的简略工程属性

---

### importProjectByProjectFile

> ⚠️ **Beta 阶段**

使用工程文件导入工程

**备注:**

> 暂不支持提取库的相关配置，如果需求提取库，将会按照默认配置提取

**方法签名:**

```typescript
importProjectByProjectFile(projectFile: File, fileType?: 'Altium Designer' | 'Protel', props?: { importOption?: ESYS_ImportProjectImportOption
```

**参数:**

| 参数名      | 类型 | 描述                                            |
| ----------- | ---- | ----------------------------------------------- |
| projectFile |      | 工程文件                                        |
| fileType    |      | 文件类型                                        |
| props       |      | 导入参数，参考 EDA 前端 **导入** 窗口内的配置项 |
| saveTo      |      | 保存到工程参数                                  |

**返回值:**

导入的工程的简略工程属性
