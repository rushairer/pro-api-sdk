# SYS_I18n

## 概述

系统 / 多语言类

## 备注

> 使用多语言系统展示多语言文本

## 方法列表

| 方法名                                                        | 说明                           |
| ------------------------------------------------------------- | ------------------------------ |
| [`text`](#text)                                               | 输出语言文本                   |
| [`getCurrentLanguage`](#getcurrentlanguage)                   | 获取当前语言环境               |
| [`getAllSupportedLanguages`](#getallsupportedlanguages)       | 查询所有支持的语言             |
| [`isLanguageSupported`](#islanguagesupported)                 | 检查语言是否受支持             |
| [`importMultilingual`](#importmultilingual)                   | 导入多语言                     |
| [`importMultilingualLanguage`](#importmultilinguallanguage)   | 导入多语言：指定命名空间和语言 |
| [`importMultilingualNamespace`](#importmultilingualnamespace) | 导入多语言：指定命名空间       |

---

## 方法详情

### text

输出语言文本
可以使用 `${1}` 格式的占位符表示参数；
语言优先级：当前显示语言 \> 系统默认语言 \> 数据集中第一个搜索到的包含该文本标签的语言 \> 文本标签(tag)

**方法签名:**

```typescript
text(tag: string, namespace?: string, language?: string, ...args: Array<any>): string
```

**参数:**

| 参数名    | 类型         | 描述                                                                    |
| --------- | ------------ | ----------------------------------------------------------------------- |
| tag       | `string`     | 文本标签，对应多语言文件键值对中的键                                    |
| namespace | `string`     | 文本命名空间，在扩展运行环境内默认为扩展的 UUID，否则为系统默认命名空间 |
| language  | `string`     | 语言，`undefined` 为 EDA 当前的显示语言                                 |
| args      | `Array<any>` | 语言文本中替换占位符的参数                                              |

**返回值:**

语言文本

---

### getCurrentLanguage

获取当前语言环境

**备注:**

> 能够获取到的语言受 EDA 当前支持语言限制，其它 API 支持的语言需要显式指定 `language` 参数才能使用

**方法签名:**

```typescript
getCurrentLanguage(): Promise<string>
```

**返回值:**

语言

---

### getAllSupportedLanguages

查询所有支持的语言

**方法签名:**

```typescript
getAllSupportedLanguages(): Array<string>
```

**返回值:**

所有支持的语言列表

---

### isLanguageSupported

检查语言是否受支持

**方法签名:**

```typescript
isLanguageSupported(language: string): boolean
```

**参数:**

| 参数名   | 类型     | 描述 |
| -------- | -------- | ---- |
| language | `string` | 语言 |

**返回值:**

是否受支持

---

### importMultilingual

导入多语言

**备注:**

> 注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
importMultilingual(language: string, source: ISYS_LanguageKeyValuePairs): boolean
```

**参数:**

| 参数名   | 类型                         | 描述                   |
| -------- | ---------------------------- | ---------------------- |
| language | `string`                     | 语言                   |
| source   | `ISYS_LanguageKeyValuePairs` | 欲导入的多语言数据对象 |

**返回值:**

导入是否成功

---

### importMultilingualLanguage

导入多语言：指定命名空间和语言

**方法签名:**

```typescript
importMultilingualLanguage(namespace: string, language: string, source: ISYS_LanguageKeyValuePairs): boolean
```

**参数:**

| 参数名    | 类型                         | 描述                   |
| --------- | ---------------------------- | ---------------------- |
| namespace | `string`                     | 命名空间               |
| language  | `string`                     | 语言                   |
| source    | `ISYS_LanguageKeyValuePairs` | 欲导入的多语言数据对象 |

**返回值:**

导入是否成功

---

### importMultilingualNamespace

导入多语言：指定命名空间

**方法签名:**

```typescript
importMultilingualNamespace(namespace: string, source: ISYS_MultilingualLanguagesData): boolean
```

**参数:**

| 参数名    | 类型                             | 描述                   |
| --------- | -------------------------------- | ---------------------- |
| namespace | `string`                         | 命名空间               |
| source    | `ISYS_MultilingualLanguagesData` | 欲导入的多语言数据对象 |

**返回值:**

导入是否成功
