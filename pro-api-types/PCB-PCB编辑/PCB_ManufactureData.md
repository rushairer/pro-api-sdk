# PCB_ManufactureData

## 概述

PCB & 封装 / 生产资料类

## 备注

> 获取当前 PCB 的生产资料文件及快捷下单

## 方法列表

| 方法名                                                               | 说明                         |
| -------------------------------------------------------------------- | ---------------------------- |
| [`getGerberFile`](#getgerberfile) ⚠️                                 | 获取 PCB 制版文件（Gerber）  |
| [`get3DFile`](#get3dfile) ⚠️                                         | 获取 3D 模型文件             |
| [`get3DShellFile`](#get3dshellfile) ⚠️                               | 获取 3D 外壳文件             |
| [`getPickAndPlaceFile`](#getpickandplacefile) ⚠️                     | 获取坐标文件（PickAndPlace） |
| [`getFlyingProbeTestFile`](#getflyingprobetestfile) ⚠️               | 获取飞针测试文件             |
| [`getBomTemplates`](#getbomtemplates) ⚠️                             | 获取 BOM 模板列表            |
| [`uploadBomTemplateFile`](#uploadbomtemplatefile) ⚠️                 | 上传 BOM 模板文件            |
| [`getBomTemplateFile`](#getbomtemplatefile) ⚠️                       | 获取 BOM 模板文件            |
| [`deleteBomTemplate`](#deletebomtemplate) ⚠️                         | 删除 BOM 模板                |
| [`getBomFile`](#getbomfile) ⚠️                                       | 获取 BOM 文件                |
| [`getTestPointFile`](#gettestpointfile) ⚠️                           | 获取测试点报告文件           |
| [`getNetlistFile`](#getnetlistfile) ⚠️                               | 获取网表文件（Netlist）      |
| [`getDxfFile`](#getdxffile) ⚠️                                       | 获取 DXF 文件                |
| [`getPdfFile`](#getpdffile) ⚠️                                       | 获取 PDF 文件                |
| [`getIpcD356AFile`](#getipcd356afile) ⚠️                             | 获取 IPC-D-356A 文件         |
| [`getOpenDatabaseDoublePlusFile`](#getopendatabasedoubleplusfile) ⚠️ | 获取 ODB++ 文件              |
| [`getDsnFile`](#getdsnfile) ⚠️                                       | 获取自动布线文件（DSN）      |
| [`getAutoRouteJsonFile`](#getautoroutejsonfile) ⚠️                   | 获取自动布线文件（JSON）     |
| [`getAutoLayoutJsonFile`](#getautolayoutjsonfile) ⚠️                 | 获取自动布局文件（JSON）     |
| [`getAltiumDesignerFile`](#getaltiumdesignerfile) ⚠️                 | 获取 Altium Designer 文件    |
| [`getPadsFile`](#getpadsfile) ⚠️                                     | 获取 PADS 文件               |
| [`getPcbInfoFile`](#getpcbinfofile) ⚠️                               | 获取 PCB 信息文件            |
| [`placeComponentsOrder`](#placecomponentsorder) ⚠️                   | 元件下单                     |
| [`placeSmtComponentsOrder`](#placesmtcomponentsorder) ⚠️             | SMT 元件下单                 |
| [`placePcbOrder`](#placepcborder) ⚠️                                 | PCB 下单                     |
| [`place3DShellOrder`](#place3dshellorder) ⚠️                         | 3D 外壳下单                  |

---

## 方法详情

### getGerberFile

> ⚠️ **Beta 阶段**

获取 PCB 制版文件（Gerber）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getGerberFile(fileName?: string, colorSilkscreen?: boolean, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH, digitalFormat?: { integerNumber: number
```

**参数:**

| 参数名          | 类型 | 描述                                       |
| --------------- | ---- | ------------------------------------------ |
| fileName        |      | 文件名                                     |
| colorSilkscreen |      | 是否生成彩色丝印制造文件（嘉立创专用文件） |
| unit            |      | 单位                                       |
| digitalFormat   |      | 数字格式                                   |
| other           |      | 其它                                       |
| layers          |      | 导出层，默认则按照嘉立创生产需求导出       |
| objects         |      | 导出对象，默认则按照嘉立创生产需求导出     |

**返回值:**

PCB 制版文件数据

---

### get3DFile

> ⚠️ **Beta 阶段**

获取 3D 模型文件
请注意：只有以 STEP 格式导入的元件模型，才能在导出的 STEP 文件中体现
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>
```

**参数:**

| 参数名             | 类型                     | 描述                                                               |
| ------------------ | ------------------------ | ------------------------------------------------------------------ | ------------------------------------------- | ------------------------ | -------- |
| fileName           | `string`                 | 文件名                                                             |
| fileType           | `'step'                  | 'obj'`                                                             | 文件类型                                    |
| element            | `Array<'Component Model' | 'Via'                                                              | 'Silkscreen'                                | 'Wire In Signal Layer'>` | 导出对象 |
| modelMode          | `'Outfit'                | 'Parts'`                                                           | 导出模式，`Outfit` = 装配体，`Parts` = 零件 |
| autoGenerateModels | `boolean`                | 是否为未绑定 3D 模型的元件自动生成 3D 模型（根据元件的“高度”属性） |

**返回值:**

3D 模型文件数据

---

### get3DShellFile

> ⚠️ **Beta 阶段**

获取 3D 外壳文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ | ------ | -------- |
| fileName | `string` | 文件名 |
| fileType | `'stl'   | 'step' | 'obj'` | 文件类型 |

**返回值:**

3D 外壳文件数据

---

### getPickAndPlaceFile

> ⚠️ **Beta 阶段**

获取坐标文件（PickAndPlace）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型                  | 描述           |
| -------- | --------------------- | -------------- | -------- |
| fileName | `string`              | 文件名         |
| fileType | `'xlsx'               | 'csv'`         | 文件类型 |
| unit     | `ESYS_Unit.MILLIMETER | ESYS_Unit.MIL` | 单位     |

**返回值:**

坐标文件数据

---

### getFlyingProbeTestFile

> ⚠️ **Beta 阶段**

获取飞针测试文件

**方法签名:**

```typescript
getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

飞针测试文件数据

---

### getBomTemplates

> ⚠️ **Beta 阶段**

获取 BOM 模板列表

**方法签名:**

```typescript
getBomTemplates(): Promise<Array<string>>
```

**返回值:**

BOM 模板列表

---

### uploadBomTemplateFile

> ⚠️ **Beta 阶段**

上传 BOM 模板文件

**方法签名:**

```typescript
uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                            |
| ------------ | -------- | --------------------------------------------------------------- |
| templateFile | `File`   | BOM 模板文件                                                    |
| template     | `string` | BOM 模板名称，如若为 `undefined` 则自动从 `templateFile` 中取值 |

**返回值:**

BOM 模板名称

---

### getBomTemplateFile

> ⚠️ **Beta 阶段**

获取 BOM 模板文件

**方法签名:**

```typescript
getBomTemplateFile(template: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述         |
| -------- | -------- | ------------ |
| template | `string` | BOM 模板名称 |

**返回值:**

BOM 模板文件

---

### deleteBomTemplate

> ⚠️ **Beta 阶段**

删除 BOM 模板

**方法签名:**

```typescript
deleteBomTemplate(template: string): Promise<boolean>
```

**参数:**

| 参数名   | 类型     | 描述         |
| -------- | -------- | ------------ |
| template | `string` | BOM 模板名称 |

**返回值:**

操作是否成功

---

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

| 参数名        | 类型 | 描述                                                                                                   |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------ |
| fileName      |      | 文件名                                                                                                 |
| fileType      |      | 文件类型                                                                                               |
| template      |      | 模板名称                                                                                               |
| filterOptions |      | 过滤规则，仅应包含需要启用的规则，`property` 为规则名称，`includeValue` 为匹配的值                     |
| statistics    |      | 统计，包含所有需要启用的统计项的名称                                                                   |
| property      |      | 属性，包含所有需要启用的属性的名称                                                                     |
| columns       |      | 列的属性及排序，`title`、`sort`、`group`、`orderWeight` 不传入则取默认值，`null` 代表 **无** 或 **空** |

**返回值:**

BOM 文件数据

---

### getTestPointFile

> ⚠️ **Beta 阶段**

获取测试点报告文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getTestPointFile(fileName?: string, fileType?: 'xlsx' | 'csv'): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ | -------- |
| fileName | `string` | 文件名 |
| fileType | `'xlsx'  | 'csv'` | 文件类型 |

**返回值:**

测试点报告文件数据

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

### getDxfFile

> ⚠️ **Beta 阶段**

获取 DXF 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getDxfFile(fileName?: string, layers?: Array<{ layerId: number
```

**参数:**

| 参数名   | 类型 | 描述     |
| -------- | ---- | -------- |
| fileName |      | 文件名   |
| layers   |      | 导出层   |
| objects  |      | 导出对象 |

**返回值:**

DXF 文件数据

---

### getPdfFile

> ⚠️ **Beta 阶段**

获取 PDF 文件
可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统
`outputMethod`、`contentConfig`、`watermark` 参数暂不可用，等待后期规划

**方法签名:**

```typescript
getPdfFile(fileName?: string, outputMethod?: EPCB_PdfOutputMethod, contentConfig?: { displayAttributesAsMenu: boolean
```

**参数:**

| 参数名        | 类型 | 描述     |
| ------------- | ---- | -------- |
| fileName      |      | 文件名   |
| outputMethod  |      | 输出方式 |
| contentConfig |      | 内容配置 |
| watermark     |      | 水印     |

**返回值:**

PDF 文件数据（或压缩包）

---

### getIpcD356AFile

> ⚠️ **Beta 阶段**

获取 IPC-D-356A 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getIpcD356AFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

IPC-D-356A 文件数据

---

### getOpenDatabaseDoublePlusFile

> ⚠️ **Beta 阶段**

获取 ODB++ 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH, otherData?: { metallizedDrilledHoles?: boolean
```

**参数:**

| 参数名    | 类型 | 描述                                   |
| --------- | ---- | -------------------------------------- |
| fileName  |      | 文件名                                 |
| unit      |      | 单位                                   |
| otherData |      | 其它                                   |
| layers    |      | 导出层，默认则按照嘉立创生产需求导出   |
| objects   |      | 导出对象，默认则按照嘉立创生产需求导出 |

**返回值:**

ODB++ 文件数据

---

### getDsnFile

> ⚠️ **Beta 阶段**

获取自动布线文件（DSN）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getDsnFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

自动布线 DSN 文件数据

---

### getAutoRouteJsonFile

> ⚠️ **Beta 阶段**

获取自动布线文件（JSON）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getAutoRouteJsonFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

自动布线 JSON 文件数据

---

### getAutoLayoutJsonFile

> ⚠️ **Beta 阶段**

获取自动布局文件（JSON）

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getAutoLayoutJsonFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

自动布局 JSON 文件数据

---

### getAltiumDesignerFile

> ⚠️ **Beta 阶段**

获取 Altium Designer 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getAltiumDesignerFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

Altium Designer 文件数据

---

### getPadsFile

> ⚠️ **Beta 阶段**

获取 PADS 文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getPadsFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

PADS 文件数据

---

### getPcbInfoFile

> ⚠️ **Beta 阶段**

获取 PCB 信息文件

**备注:**

> 可以使用 {@link SYS_FileSystem.saveFile} 接口将文件导出到本地文件系统

**方法签名:**

```typescript
getPcbInfoFile(fileName?: string): Promise<File | undefined>
```

**参数:**

| 参数名   | 类型     | 描述   |
| -------- | -------- | ------ |
| fileName | `string` | 文件名 |

**返回值:**

PCB 信息文件

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

---

### placePcbOrder

> ⚠️ **Beta 阶段**

PCB 下单
如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告，
即 `ignoreWarning` 参数将被忽略；
如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查，
如若达成下单条件，将返回 `true` 并在新标签页打开下单页面
如果设置为 `true`，将会忽略所有检查警告项并尽可能生成下单资料；
如果设置为 `false`，存在任意警告将中断执行并返回 `false` 的结果

**方法签名:**

```typescript
placePcbOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>
```

**参数:**

| 参数名        | 类型      | 描述                     |
| ------------- | --------- | ------------------------ |
| interactive   | `boolean` | 是否启用交互式检查       |
| ignoreWarning | `boolean` | 在非交互式检查时忽略警告 |

**返回值:**

是否通过下单检查

---

### place3DShellOrder

> ⚠️ **Beta 阶段**

3D 外壳下单
如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告，
即 `ignoreWarning` 参数将被忽略；
如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查，
如若达成下单条件，将返回 `true` 并在新标签页打开下单页面
如果设置为 `true`，将会忽略所有检查警告项并尽可能生成下单资料；
如果设置为 `false`，存在任意警告将中断执行并返回 `false` 的结果

**方法签名:**

```typescript
place3DShellOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>
```

**参数:**

| 参数名        | 类型      | 描述                     |
| ------------- | --------- | ------------------------ |
| interactive   | `boolean` | 是否启用交互式检查       |
| ignoreWarning | `boolean` | 在非交互式检查时忽略警告 |

**返回值:**

是否通过下单检查
