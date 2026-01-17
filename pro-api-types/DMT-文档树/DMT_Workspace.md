# DMT_Workspace

## 概述

文档树 / 工作区类

## 方法列表

| 方法名                                                | 说明                     |
| ----------------------------------------------------- | ------------------------ |
| [`getAllWorkspacesInfo`](#getallworkspacesinfo)       | 获取所有工作区的详细属性 |
| [`toggleToWorkspace`](#toggletoworkspace)             | 切换到工作区             |
| [`getCurrentWorkspaceInfo`](#getcurrentworkspaceinfo) | 获取当前工作区的详细属性 |

---

## 方法详情

### getAllWorkspacesInfo

获取所有工作区的详细属性

**方法签名:**

```typescript
getAllWorkspacesInfo(): Promise<Array<IDMT_WorkspaceItem>>
```

**返回值:**

所有工作区的详细属性

---

### toggleToWorkspace

切换到工作区

**方法签名:**

```typescript
toggleToWorkspace(workspaceUuid?: string): Promise<boolean>
```

**参数:**

| 参数名        | 类型     | 描述                                          |
| ------------- | -------- | --------------------------------------------- |
| workspaceUuid | `string` | 工作区 UUID，如若不指定，则将切换到个人工作区 |

**返回值:**

切换操作是否成功

---

### getCurrentWorkspaceInfo

获取当前工作区的详细属性

**备注:**

> 将会获取当前工作区的详细属性

**方法签名:**

```typescript
getCurrentWorkspaceInfo(): Promise<IDMT_WorkspaceItem | undefined>
```

**返回值:**

工作区的详细属性，如若为 `undefined` 则获取失败
