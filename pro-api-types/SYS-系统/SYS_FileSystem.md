# SYS_FileSystem

## 概述

系统 / 文件系统交互类

## 方法列表

| 方法名                                                 | 说明                         |
| ------------------------------------------------------ | ---------------------------- |
| [`getExtensionFile`](#getextensionfile)                | 获取扩展内的文件             |
| [`openReadFileDialog`](#openreadfiledialog) ⚠️         | 打开读入文件窗口             |
| [`openReadFileDialog`](#openreadfiledialog) ⚠️         | 打开读入文件窗口             |
| [`saveFile`](#savefile)                                | 保存文件                     |
| [`readFileFromFileSystem`](#readfilefromfilesystem) ⚠️ | 从文件系统读取文件           |
| [`saveFileToFileSystem`](#savefiletofilesystem) ⚠️     | 向文件系统写入文件           |
| [`listFilesOfFileSystem`](#listfilesoffilesystem) ⚠️   | 查看文件系统路径下的文件列表 |
| [`deleteFileInFileSystem`](#deletefileinfilesystem) ⚠️ | 删除文件系统内的文件         |
| [`getEdaPath`](#getedapath) ⚠️                         | 获取 EDA 文档目录路径        |
| [`getDocumentsPath`](#getdocumentspath) ⚠️             | 获取文档目录路径             |
| [`getLibrariesPaths`](#getlibrariespaths) ⚠️           | 获取库目录路径               |
| [`getProjectsPaths`](#getprojectspaths) ⚠️             | 获取工程目录路径             |

---

## 方法详情

### getExtensionFile

获取扩展内的文件

**方法签名:**

```typescript
getExtensionFile(uri: string): Promise<File | undefined>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| uri    | `string` | 文件路径 |

**返回值:**

File 格式文件

---

### openReadFileDialog

> ⚠️ **Beta 阶段**

打开读入文件窗口

**方法签名:**

```typescript
openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: true): Promise<Array<File> | undefined>
```

**参数:**

| 参数名             | 类型    | 描述               |
| ------------------ | ------- | ------------------ | ---------- |
| filenameExtensions | `string | Array<string>`     | 文件扩展名 |
| multiFiles         | `true`  | 是否允许读取多文件 |

**返回值:**

File 格式文件数组

---

### openReadFileDialog

> ⚠️ **Beta 阶段**

打开读入文件窗口

**方法签名:**

```typescript
openReadFileDialog(filenameExtensions?: string | Array<string>, multiFiles?: false): Promise<File | undefined>
```

**参数:**

| 参数名             | 类型    | 描述               |
| ------------------ | ------- | ------------------ | ---------- |
| filenameExtensions | `string | Array<string>`     | 文件扩展名 |
| multiFiles         | `false` | 是否允许读取多文件 |

**返回值:**

File 格式文件

---

### saveFile

保存文件

**备注:**

> 调用浏览器下载接口或 Electron 保存文件接口，将传入的文件流保存到本地

**方法签名:**

```typescript
saveFile(fileData: File | Blob, fileName?: string): Promise<void>
```

**参数:**

| 参数名   | 类型     | 描述     |
| -------- | -------- | -------- | -------- |
| fileData | `File    | Blob`    | 文件数据 |
| fileName | `string` | 文件名称 |

---

### readFileFromFileSystem

> ⚠️ **Beta 阶段**

从文件系统读取文件
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
readFileFromFileSystem(uri: string): Promise<File | undefined>
```

**参数:**

| 参数名 | 类型     | 描述                                             |
| ------ | -------- | ------------------------------------------------ |
| uri    | `string` | 文件资源定位符，需要包含完整的文件名称的绝对路径 |

**返回值:**

File 格式文件

---

### saveFileToFileSystem

> ⚠️ **Beta 阶段**

向文件系统写入文件
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
如若结尾为斜杠 `/`（Windows 为反斜杠 `\`），则识别为文件夹；
如若结尾非斜杠，则识别为完整文件名，此时 `fileName` 参数将被忽略

**方法签名:**

```typescript
saveFileToFileSystem(uri: string, fileData: File | Blob, fileName?: string, force?: boolean): Promise<boolean>
```

**参数:**

| 参数名   | 类型      | 描述                           |
| -------- | --------- | ------------------------------ | -------- |
| uri      | `string`  | 文件资源定位符                 |
| fileData | `File     | Blob`                          | 文件数据 |
| fileName | `string`  | 文件名称                       |
| force    | `boolean` | 强制写入（文件存在则覆盖文件） |

**返回值:**

写入操作是否成功，如若不允许覆盖但文件已存在将返回 `false` 的结果

---

### listFilesOfFileSystem

> ⚠️ **Beta 阶段**

查看文件系统路径下的文件列表
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
listFilesOfFileSystem(folderPath: string, recursive?: boolean): Promise<Array<ISYS_FileSystemFileList>>
```

**参数:**

| 参数名     | 类型      | 描述                   |
| ---------- | --------- | ---------------------- |
| folderPath | `string`  | 目录路径               |
| recursive  | `boolean` | 是否递归获取所有子文件 |

**返回值:**

当前目录下的文件列表

---

### deleteFileInFileSystem

> ⚠️ **Beta 阶段**

删除文件系统内的文件
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`
如若结尾为斜杠 `/`（Windows 为反斜杠 `\`），则识别为文件夹；
如若结尾非斜杠，则识别为完整文件名，此时 `fileName` 参数将被忽略

**方法签名:**

```typescript
deleteFileInFileSystem(uri: string, force?: boolean): Promise<boolean>
```

**参数:**

| 参数名 | 类型      | 描述                                                                         |
| ------ | --------- | ---------------------------------------------------------------------------- |
| uri    | `string`  | 文件资源定位符                                                               |
| force  | `boolean` | 强制删除文件夹（当欲删除的是文件夹且文件夹内有文件时，是否强制删除该文件夹） |

**返回值:**

删除操作是否成功

---

### getEdaPath

> ⚠️ **Beta 阶段**

获取 EDA 文档目录路径
返回的路径中，结尾不包含斜杠 `/`（或反斜杠 `\`）
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
getEdaPath(): Promise<string>
```

**返回值:**

EDA 文档目录路径

---

### getDocumentsPath

> ⚠️ **Beta 阶段**

获取文档目录路径
返回的路径中，结尾不包含斜杠 `/`（或反斜杠 `\`）
注意 1：本接口仅客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
getDocumentsPath(): Promise<string>
```

**返回值:**

文档目录路径

---

### getLibrariesPaths

> ⚠️ **Beta 阶段**

获取库目录路径
注意 1：本接口仅全离线客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
getLibrariesPaths(): Promise<Array<string>>
```

**返回值:**

库目录路径数组

---

### getProjectsPaths

> ⚠️ **Beta 阶段**

获取工程目录路径
注意 1：本接口仅离线客户端有效，在浏览器环境内调用将始终 `throw Error`
注意 2：本接口需要使用者启用扩展的外部交互权限，如若未启用将始终 `throw Error`

**方法签名:**

```typescript
getProjectsPaths(): Promise<Array<string>>
```

**返回值:**

工程目录路径数组
