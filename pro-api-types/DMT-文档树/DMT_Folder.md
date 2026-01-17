# DMT_Folder

## 概述

文档树 / 文件夹类

## 方法列表

| 方法名                                                   | 说明                  |
| -------------------------------------------------------- | --------------------- |
| [`createFolder`](#createfolder) ⚠️                       | 创建文件夹            |
| [`modifyFolderName`](#modifyfoldername)                  | 修改文件夹名称        |
| [`modifyFolderDescription`](#modifyfolderdescription) ⚠️ | 修改文件夹描述        |
| [`moveFolderToFolder`](#movefoldertofolder)              | 移动文件夹            |
| [`getAllFoldersUuid`](#getallfoldersuuid)                | 获取所有文件夹的 UUID |
| [`getFolderInfo`](#getfolderinfo)                        | 获取文件夹详细属性    |
| [`deleteFolder`](#deletefolder)                          | 删除文件夹            |

---

## 方法详情

### createFolder

> ⚠️ **Beta 阶段**

创建文件夹

**方法签名:**

```typescript
createFolder(folderName: string, teamUuid: string, parentFolderUuid?: string, description?: string): Promise<string | undefined>
```

**参数:**

| 参数名           | 类型     | 描述                                    |
| ---------------- | -------- | --------------------------------------- |
| folderName       | `string` | 文件夹名称                              |
| teamUuid         | `string` | 团队 UUID                               |
| parentFolderUuid | `string` | 父文件夹 UUID，如若不指定，则为根文件夹 |
| description      | `string` | 文件夹描述                              |

**返回值:**

文件夹 UUID，如若为 `undefined` 则创建失败

---

### modifyFolderName

修改文件夹名称

**方法签名:**

```typescript
modifyFolderName(teamUuid: string, folderUuid: string, folderName: string): Promise<boolean>
```

**参数:**

| 参数名     | 类型     | 描述        |
| ---------- | -------- | ----------- |
| teamUuid   | `string` | 团队 UUID   |
| folderUuid | `string` | 文件夹 UUID |
| folderName | `string` | 文件夹名称  |

**返回值:**

是否修改成功

---

### modifyFolderDescription

> ⚠️ **Beta 阶段**

修改文件夹描述

**备注:**

> 修改文件夹描述需要与工作区系统进行交互，修改操作存在延迟，需要短暂等待后才会呈现效果

**方法签名:**

```typescript
modifyFolderDescription(teamUuid: string, folderUuid: string, description?: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                              |
| ----------- | -------- | ------------------------------------------------- |
| teamUuid    | `string` | 团队 UUID                                         |
| folderUuid  | `string` | 文件夹 UUID                                       |
| description | `string` | 文件夹描述，如若为 `undefined` 则清空工程现有描述 |

**返回值:**

是否修改成功

---

### moveFolderToFolder

移动文件夹

**方法签名:**

```typescript
moveFolderToFolder(teamUuid: string, folderUuid: string, parentFolderUuid?: string): Promise<boolean>
```

**参数:**

| 参数名           | 类型     | 描述                                        |
| ---------------- | -------- | ------------------------------------------- |
| teamUuid         | `string` | 团队 UUID                                   |
| folderUuid       | `string` | 文件夹 UUID                                 |
| parentFolderUuid | `string` | 父文件夹 UUID，如若不指定，则默认为根文件夹 |

**返回值:**

是否移动成功

---

### getAllFoldersUuid

获取所有文件夹的 UUID

**备注:**

> 本接口忽略层级信息，将会返回所有层级的文件夹的 UUID 并放置于一维数组中

**方法签名:**

```typescript
getAllFoldersUuid(teamUuid: string): Promise<Array<string>>
```

**参数:**

| 参数名   | 类型     | 描述      |
| -------- | -------- | --------- |
| teamUuid | `string` | 团队 UUID |

**返回值:**

文件夹 UUID 数组

---

### getFolderInfo

获取文件夹详细属性

**备注:**

> 当 {@link IDMT_FolderItem.parentFolderUuid | parentFolderUuid} 等于 {@link IDMT_FolderItem.teamUuid | teamUuid} 时，代表当前文件夹为指定团队下的一级文件夹

**方法签名:**

```typescript
getFolderInfo(teamUuid: string, folderUuid: string): Promise<IDMT_FolderItem | undefined>
```

**参数:**

| 参数名     | 类型     | 描述        |
| ---------- | -------- | ----------- |
| teamUuid   | `string` | 团队 UUID   |
| folderUuid | `string` | 文件夹 UUID |

**返回值:**

文件夹属性，如若为 `undefined` 则获取失败

---

### deleteFolder

删除文件夹

**方法签名:**

```typescript
deleteFolder(teamUuid: string, folderUuid: string): Promise<boolean>
```

**参数:**

| 参数名     | 类型     | 描述        |
| ---------- | -------- | ----------- |
| teamUuid   | `string` | 团队 UUID   |
| folderUuid | `string` | 文件夹 UUID |

**返回值:**

操作是否成功
