# LIB_LibrariesList

## 概述

综合库 / 库列表类

## 备注

> 此处所有接口都基于编辑器当前工作区环境，如需切换到其他工作区，请使用 {@link DMT_Workspace.toggleToWorkspace} 接口切换工作区

## 方法列表

| 方法名                                              | 说明              |
| --------------------------------------------------- | ----------------- |
| [`getSystemLibraryUuid`](#getsystemlibraryuuid)     | 获取系统库的 UUID |
| [`getPersonalLibraryUuid`](#getpersonallibraryuuid) | 获取个人库的 UUID |
| [`getProjectLibraryUuid`](#getprojectlibraryuuid)   | 获取工程库的 UUID |
| [`getFavoriteLibraryUuid`](#getfavoritelibraryuuid) | 获取收藏库的 UUID |
| [`getAllLibrariesList`](#getalllibrarieslist)       | 获取所有库的列表  |

---

## 方法详情

### getSystemLibraryUuid

获取系统库的 UUID

**方法签名:**

```typescript
getSystemLibraryUuid(): Promise<string | undefined>
```

**返回值:**

系统库的 UUID

---

### getPersonalLibraryUuid

获取个人库的 UUID

**备注:**

> 将会获取当前编辑器工作区下的个人库的 UUID，在私有部署环境下不存在个人库，此接口将永远返回 `undefined`

**方法签名:**

```typescript
getPersonalLibraryUuid(): Promise<string | undefined>
```

**返回值:**

个人库的 UUID

---

### getProjectLibraryUuid

获取工程库的 UUID

**备注:**

> 在未打开工程的情况下调用将返回 `undefined`

**方法签名:**

```typescript
getProjectLibraryUuid(): Promise<string | undefined>
```

**返回值:**

工程库的 UUID

---

### getFavoriteLibraryUuid

获取收藏库的 UUID

**备注:**

> 将会获取当前编辑器工作区下的收藏库的 UUID

**方法签名:**

```typescript
getFavoriteLibraryUuid(): Promise<string | undefined>
```

**返回值:**

收藏库的 UUID

---

### getAllLibrariesList

获取所有库的列表

**备注:**

> 此处不会获取到系统库、个人库、工程库、收藏库的信息，如需获取它们的信息，请使用 {@link LIB_LibrariesList.getSystemLibraryUuid | getSystemLibraryUuid}、{@link LIB_LibrariesList.getPersonalLibraryUuid | getPersonalLibraryUuid}、{@link LIB_LibrariesList.getProjectLibraryUuid | getProjectLibraryUuid}、{@link LIB_LibrariesList.getFavoriteLibraryUuid | getFavoriteLibraryUuid} 接口

**方法签名:**

```typescript
getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>
```

**返回值:**

库信息列表
