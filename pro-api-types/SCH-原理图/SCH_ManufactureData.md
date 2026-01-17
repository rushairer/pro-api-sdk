# SCH_ManufactureData

## 概述

原理图 & 符号 / 生产资料类

## 备注

> 获取当前原理图图页的生产资料文件及快捷下单

## 方法列表

| 方法名                                                   | 说明                    |
| -------------------------------------------------------- | ----------------------- |
| [`getBomFile`](#getbomfile) ⚠️                           | 获取 BOM 文件           |
| [`getNetlistFile`](#getnetlistfile) ⚠️                   | 获取网表文件（Netlist） |
| [`placeComponentsOrder`](#placecomponentsorder) ⚠️       | 元件下单                |
| [`placeSmtComponentsOrder`](#placesmtcomponentsorder) ⚠️ | SMT 元件下单            |

---

## 方法详情

### getBomFile

> ⚠️ **Beta 阶段**

获取 BOM 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{ property: string
```

**参数:**

| 参数名                 | 类型 | 描述                                                                                                   |
| ---------------------- | ---- | ------------------------------------------------------------------------------------------------------ |
| fileName               |      | 文件名                                                                                                 |
| fileType               |      | 文件类型                                                                                               |
| template               |      | 模板名称                                                                                               |
| filterOptions          |      | 过滤规则，仅应包含需要启用的规则，`property` 为规则名称，`includeValue` 为匹配的值                     |
| statistics             |      | 统计，包含所有需要启用的统计项的名称                                                                   |
| property               |      | 属性，包含所有需要启用的属性的名称                                                                     |
| columns                |      | 列的属性及排序，`title`、`sort`、`group`、`orderWeight` 不传入则取默认值，`null` 代表 **无** 或 **空** |
| assemblyVariantsConfig |      | 装配体变量配置                                                                                         |

**返回值:**

BOM 文件数据

---

### getNetlistFile

> ⚠️ **Beta 阶段**

获取网表文件（Netlist）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>
```

**参数:**

| 参数名      | 类型               | 描述     |
| ----------- | ------------------ | -------- |
| fileName    | `string`           | 文件名   |
| netlistType | `ESYS_NetlistType` | 网表类型 |

**返回值:**

网表文件数据

---

### placeComponentsOrder

> ⚠️ **Beta 阶段**

元件下单
如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告，
即 `ignoreWarning` 参数将被忽略；
如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查，
如若达成下单条件，将返回 `true` 并在新标签页打开下单页面
如果设置为 `true`，将会忽略所有检查警告项并尽可能生成下单资料；
如果设置为 `false`，存在任意警告将中断执行并返回 `false` 的结果

**方法签名:**

```typescript
placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>
```

**参数:**

| 参数名        | 类型      | 描述                     |
| ------------- | --------- | ------------------------ |
| interactive   | `boolean` | 是否启用交互式检查       |
| ignoreWarning | `boolean` | 在非交互式检查时忽略警告 |

**返回值:**

是否通过下单检查

---

### placeSmtComponentsOrder

> ⚠️ **Beta 阶段**

SMT 元件下单
如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告，
即 `ignoreWarning` 参数将被忽略；
如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查，
如若达成下单条件，将返回 `true` 并在新标签页打开下单页面
如果设置为 `true`，将会忽略所有检查警告项并尽可能生成下单资料；
如果设置为 `false`，存在任意警告将中断执行并返回 `false` 的结果

**方法签名:**

```typescript
placeSmtComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>
```

**参数:**

| 参数名        | 类型      | 描述                     |
| ------------- | --------- | ------------------------ |
| interactive   | `boolean` | 是否启用交互式检查       |
| ignoreWarning | `boolean` | 在非交互式检查时忽略警告 |

**返回值:**

是否通过下单检查
