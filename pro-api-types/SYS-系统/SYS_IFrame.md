# SYS_IFrame

## 概述

系统 / 内联框架窗口类

## 方法列表

| 方法名                           | 说明             |
| -------------------------------- | ---------------- |
| [`openIFrame`](#openiframe) ⚠️   | 打开内联框架窗口 |
| [`closeIFrame`](#closeiframe) ⚠️ | 关闭内联框架窗口 |
| [`hideIFrame`](#hideiframe) ⚠️   | 隐藏内联框架窗口 |
| [`showIFrame`](#showiframe) ⚠️   | 显示内联框架窗口 |

---

## 方法详情

### openIFrame

> ⚠️ **Beta 阶段**

打开内联框架窗口
本接口仅扩展包允许调用，用户需要在扩展包内包含用于内联的 HTML 文件；
本接口调用后将会打开一个 Dialog 窗口，该 Dialog 窗口的标题为 HTML 文件的 `<title>`，标题栏有关闭按钮；
正文部分为内联框架，`width` 和 `height` 均为正文部分内联框架的宽高；
内联框架需要展示 `htmlFileName` 的内容，该 HTML 从扩展包内获取，并已在安装时被存储至 IndexedDB 中
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
openIFrame(htmlFileName: string, width?: number, height?: number, id?: string, props?: { /** 是否显示最大化按钮 */ maximizeButton?: boolean
```

**参数:**

| 参数名       | 类型 | 描述                                                                              |
| ------------ | ---- | --------------------------------------------------------------------------------- |
| htmlFileName |      | 需要加载的 HTML 文件在扩展包内的路径，从扩展根目录起始，例如 `/iframe/index.html` |
| width        |      | 内联框架窗口的宽度                                                                |
| height       |      | 内联框架窗口的高度                                                                |
| id           |      | 内联框架窗口 ID，用于关闭内联框架窗口                                             |
| props        |      | 其它参数                                                                          |

**返回值:**

操作是否成功

---

### closeIFrame

> ⚠️ **Beta 阶段**

关闭内联框架窗口
关闭指定 ID 的内联框架窗口
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**方法签名:**

```typescript
closeIFrame(id?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述                                                                        |
| ------ | -------- | --------------------------------------------------------------------------- |
| id     | `string` | 内联框架窗口 ID，如若传入 `undefined`，将关闭由本扩展打开的所有内联框架窗口 |

**返回值:**

操作是否成功

---

### hideIFrame

> ⚠️ **Beta 阶段**

隐藏内联框架窗口
如若未找到指定内联框架窗口，接口将会返回 `false`；
如若在执行操作前该内联框架窗口已处于隐藏状态，接口将会返回 `true`
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**备注:**

> 本接口为结果导向的：

**方法签名:**

```typescript
hideIFrame(id?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述            |
| ------ | -------- | --------------- |
| id     | `string` | 内联框架窗口 ID |

**返回值:**

操作是否成功

---

### showIFrame

> ⚠️ **Beta 阶段**

显示内联框架窗口
如若未找到指定内联框架窗口，接口将会返回 `false`；
如若在执行操作前该内联框架窗口已处于显示状态，接口将会返回 `true`
注意：本接口仅扩展有效，在独立脚本环境内调用将始终 `throw Error`

**备注:**

> 本接口为结果导向的：

**方法签名:**

```typescript
showIFrame(id?: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述            |
| ------ | -------- | --------------- |
| id     | `string` | 内联框架窗口 ID |

**返回值:**

操作是否成功
