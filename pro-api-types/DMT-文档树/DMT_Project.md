# DMT_Project

## 概述

文档树 / 工程管理类

## 方法列表

| 方法名                                            | 说明                   |
| ------------------------------------------------- | ---------------------- |
| [`openProject`](#openproject)                     | 打开工程               |
| [`createProject`](#createproject) ⚠️              | 创建工程               |
| [`moveProjectToFolder`](#moveprojecttofolder)     | 移动工程到文件夹       |
| [`getAllProjectsUuid`](#getallprojectsuuid)       | 获取所有工程的 UUID    |
| [`getProjectInfo`](#getprojectinfo)               | 获取工程属性           |
| [`getCurrentProjectInfo`](#getcurrentprojectinfo) | 获取当前工程的详细属性 |

---

## 方法详情

### openProject

打开工程

**备注:**

> 本操作将会在 EDA 前端打开指定工程，如若原先已打开其它工程且有未保存的变更，执行本操作将直接丢失所有未保存的数据

**方法签名:**

```typescript
openProject(projectUuid: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述      |
| ----------- | -------- | --------- |
| projectUuid | `string` | 工程 UUID |

**返回值:**

是否成功打开工程

---

### createProject

> ⚠️ **Beta 阶段**

创建工程

**方法签名:**

```typescript
createProject(projectFriendlyName: string, projectName?: string, teamUuid?: string, folderUuid?: string, description?: string, collaborationMode?: EDMT_ProjectCollaborationMode): Promise<string | undefined>
```

**参数:**

| 参数名              | 类型                            | 描述                                                                                                    |
| ------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| projectFriendlyName | `string`                        | 工程友好名称                                                                                            |
| projectName         | `string`                        | 工程名称，不可重复，仅支持字母 `a-zA-Z`、数字 `0-9`、中划线 `-`，如若不指定，则根据工程友好名称自动生成 |
| teamUuid            | `string`                        | 团队 UUID，如若不指定，则默认为个人；在不存在个人工程的环境下必须指定团队 UUID                          |
| folderUuid          | `string`                        | 文件夹 UUID，如若不指定，则为根文件夹                                                                   |
| description         | `string`                        | 工程描述                                                                                                |
| collaborationMode   | `EDMT_ProjectCollaborationMode` | 工程协作模式，如若团队权限无需工程设置协作模式，则该参数将被忽略                                        |

**返回值:**

工程 UUID，如若为 `undefined` 则创建失败

---

### moveProjectToFolder

移动工程到文件夹

**方法签名:**

```typescript
moveProjectToFolder(projectUuid: string, folderUuid?: string): Promise<boolean>
```

**参数:**

| 参数名      | 类型     | 描述                                                                                               |
| ----------- | -------- | -------------------------------------------------------------------------------------------------- |
| projectUuid | `string` | 工程 UUID                                                                                          |
| folderUuid  | `string` | 文件夹 UUID，只能为当前工程所在团队或个人下的文件夹，如若为 `undefined` 则移动到当前团队的根文件夹 |

**返回值:**

是否移动成功

---

### getAllProjectsUuid

获取所有工程的 UUID
如若指定 `teamUuid`，则获取指定团队下的所有工程；
如若指定 `folderUuid`，则获取指定文件夹下的所有工程；
`teamUuid`、`folderUuid` 需要且仅允许指定其一，如若都指定则只取 `folderUuid`；
如若指定 `workspaceUuid`，则在指定 Workspace 下获取指定团队/文件夹下的所有工程

**方法签名:**

```typescript
getAllProjectsUuid(teamUuid?: string, folderUuid?: string, workspaceUuid?: string): Promise<Array<string>>
```

**参数:**

| 参数名        | 类型     | 描述                                            |
| ------------- | -------- | ----------------------------------------------- |
| teamUuid      | `string` | 团队 UUID                                       |
| folderUuid    | `string` | 文件夹 UUID，如若不指定，则默认为团队的根文件夹 |
| workspaceUuid | `string` | 工作区 UUID                                     |

**返回值:**

工程 UUID 数组

---

### getProjectInfo

获取工程属性

**备注:**

> 本接口只能读取简略的工程属性，如需详细的工程树，请使用 {@link DMT_Project.getCurrentProjectInfo | getCurrentProjectInfo} 接口

**方法签名:**

```typescript
getProjectInfo(projectUuid: string): Promise<IDMT_BriefProjectItem | undefined>
```

**参数:**

| 参数名      | 类型     | 描述      |
| ----------- | -------- | --------- |
| projectUuid | `string` | 工程 UUID |

**返回值:**

简略的工程属性，如若为 `undefined` 则获取失败

---

### getCurrentProjectInfo

获取当前工程的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的详细属性

**方法签名:**

```typescript
getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>
```

**返回值:**

工程属性，如若为 `undefined` 则获取失败
