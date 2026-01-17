# SYS_Storage

## 概述

系统 / 存储类

## 备注

> 可以进行扩展的用户配置存储、浏览器本地存储的操作接口

## 方法列表

| 方法名                                                          | 说明                 |
| --------------------------------------------------------------- | -------------------- |
| [`getExtensionAllUserConfigs`](#getextensionalluserconfigs)     | 获取扩展所有用户配置 |
| [`setExtensionAllUserConfigs`](#setextensionalluserconfigs)     | 设置扩展所有用户配置 |
| [`clearExtensionAllUserConfigs`](#clearextensionalluserconfigs) | 清除扩展所有用户配置 |
| [`getExtensionUserConfig`](#getextensionuserconfig)             | 获取扩展用户配置     |
| [`setExtensionUserConfig`](#setextensionuserconfig)             | 设置扩展用户配置     |
| [`deleteExtensionUserConfig`](#deleteextensionuserconfig)       | 删除扩展用户配置     |

---

## 方法详情

### getExtensionAllUserConfigs

获取扩展所有用户配置

**备注:**

> 注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
getExtensionAllUserConfigs(): { [key: string]: any
```

**返回值:**

扩展所有用户配置信息

---

### setExtensionAllUserConfigs

设置扩展所有用户配置
此举会覆盖当前扩展的所有用户配置信息，请谨慎操作
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
setExtensionAllUserConfigs(configs: { [key: string]: any
```

**参数:**

| 参数名  | 类型 | 描述             |
| ------- | ---- | ---------------- |
| configs |      | 扩展所有用户配置 |

**返回值:**

操作是否成功

---

### clearExtensionAllUserConfigs

清除扩展所有用户配置
此举会删除当前扩展的所有用户配置信息，请��慎操作
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
clearExtensionAllUserConfigs(): Promise<boolean>
```

**返回值:**

操作是否成功

---

### getExtensionUserConfig

获取扩展用户配置

**备注:**

> 注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
getExtensionUserConfig(key: string): any | undefined
```

**参数:**

| 参数名 | 类型     | 描述   |
| ------ | -------- | ------ |
| key    | `string` | 配置项 |

**返回值:**

配置项对应的值，不存在将返回 `undefined`

---

### setExtensionUserConfig

设置扩展用户配置
新建扩展用户配置也使用本接口，在设置时如果不存在将会自动新建
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
setExtensionUserConfig(key: string, value: any): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述   |
| ------ | -------- | ------ |
| key    | `string` | 配置项 |
| value  | `any`    | 值     |

**返回值:**

操作是否成功

---

### deleteExtensionUserConfig

删除扩展用户配置

**备注:**

> 注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
deleteExtensionUserConfig(key: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述   |
| ------ | -------- | ------ |
| key    | `string` | 配置项 |

**返回值:**

操作是否成功
