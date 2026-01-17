# SYS_Environment

## 概述

系统 / 运行环境类

## 备注

> 获取嘉立创 EDA 专业版运行环境参数

## 方法列表

| 方法名                                                            | 说明                             |
| ----------------------------------------------------------------- | -------------------------------- |
| [`isWeb`](#isweb)                                                 | 是否处于浏览器环境               |
| [`isClient`](#isclient)                                           | 是否处于客户端环境               |
| [`isEasyEDAProEdition`](#iseasyedaproedition)                     | 是否为 EasyEDA Pro 版本          |
| [`isJLCEDAProEdition`](#isjlcedaproedition)                       | 是否为 嘉立创EDA 专业版本        |
| [`isProPrivateEdition`](#isproprivateedition)                     | 是否为私有化部署版本             |
| [`isOnlineMode`](#isonlinemode)                                   | 是否为在线模式                   |
| [`isHalfOfflineMode`](#ishalfofflinemode)                         | 是否为半离线模式                 |
| [`isOfflineMode`](#isofflinemode)                                 | 是否为全离线模式                 |
| [`getEditorCurrentVersion`](#geteditorcurrentversion)             | 获取编辑器当前版本               |
| [`getEditorCompliedDate`](#geteditorcomplieddate)                 | 获取编辑器编译日期               |
| [`getUserInfo`](#getuserinfo)                                     | 获取用户信息                     |
| [`setKeepProjectHasOnlyOneBoard`](#setkeepprojecthasonlyoneboard) | 设置环境：保持工程仅拥有一个板子 |

---

## 方法详情

### isWeb

是否处于浏览器环境

**方法签名:**

```typescript
isWeb(): boolean
```

**返回值:**

是否处于浏览器环境

---

### isClient

是否处于客户端环境

**方法签名:**

```typescript
isClient(): boolean
```

**返回值:**

是否处于客户端环境

---

### isEasyEDAProEdition

是否为 EasyEDA Pro 版本

**方法签名:**

```typescript
isEasyEDAProEdition(): boolean
```

**返回值:**

是否为 EasyEDA Pro 版本

---

### isJLCEDAProEdition

是否为 嘉立创EDA 专业版本

**方法签名:**

```typescript
isJLCEDAProEdition(): boolean
```

**返回值:**

是否为嘉立创EDA 专业版本

---

### isProPrivateEdition

是否为私有化部署版本

**方法签名:**

```typescript
isProPrivateEdition(): boolean
```

**返回值:**

是否为私有化部署版本

---

### isOnlineMode

是否为在线模式

**方法签名:**

```typescript
isOnlineMode(): boolean
```

**返回值:**

是否为在线模式

---

### isHalfOfflineMode

是否为半离线模式

**方法签名:**

```typescript
isHalfOfflineMode(): boolean
```

**返回值:**

是否为半离线模式

---

### isOfflineMode

是否为全离线模式

**方法签名:**

```typescript
isOfflineMode(): boolean
```

**返回值:**

是否为全离线模式

---

### getEditorCurrentVersion

获取编辑器当前版本

**方法签名:**

```typescript
getEditorCurrentVersion(): string
```

**返回值:**

编辑器当前版本

---

### getEditorCompliedDate

获取编辑器编译日期

**方法签名:**

```typescript
getEditorCompliedDate(): string
```

**返回值:**

编辑器编译日期

---

### getUserInfo

获取用户信息

**方法签名:**

```typescript
getUserInfo(): { username?: string
```

**返回值:**

用户信息

---

### setKeepProjectHasOnlyOneBoard

设置环境：保持工程仅拥有一个板子

**备注:**

> Board、Schematic、PCB 均保持唯一

**方法签名:**

```typescript
setKeepProjectHasOnlyOneBoard(status?: boolean): Promise<void>
```

**参数:**

| 参数名 | 类型      | 描述         |
| ------ | --------- | ------------ |
| status | `boolean` | 环境变量状态 |
