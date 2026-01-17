# PCB_Drc

## 概述

PCB & 封装 / 设计规则检查（DRC）类

## 备注

> 检查、设定 DRC 规则

## 方法列表

| 方法名                                                                       | 说明                                |
| ---------------------------------------------------------------------------- | ----------------------------------- |
| [`check`](#check) ⚠️                                                         | 检查 DRC                            |
| [`check`](#check) ⚠️                                                         | 检查 DRC                            |
| [`getCurrentRuleConfigurationName`](#getcurrentruleconfigurationname)        | 获取当前设计规则配置名称            |
| [`getCurrentRuleConfiguration`](#getcurrentruleconfiguration) ⚠️             | 获取当前设计规则配置                |
| [`getRuleConfiguration`](#getruleconfiguration)                              | 获取指定设计规则配置                |
| [`getAllRuleConfigurations`](#getallruleconfigurations) ⚠️                   | 获取所有设计规则配置                |
| [`saveRuleConfiguration`](#saveruleconfiguration) ⚠️                         | 保存设计规则配置                    |
| [`renameRuleConfiguration`](#renameruleconfiguration) ⚠️                     | 重命名设计规则配置                  |
| [`deleteRuleConfiguration`](#deleteruleconfiguration) ⚠️                     | 删除设计规则配置                    |
| [`getDefaultRuleConfigurationName`](#getdefaultruleconfigurationname) ⚠️     | 获取新建 PCB 默认设计规则配置的名称 |
| [`setAsDefaultRuleConfiguration`](#setasdefaultruleconfiguration) ⚠️         | 设置为新建 PCB 默认设计规则配置     |
| [`getNetRules`](#getnetrules) ⚠️                                             | 获取网络规则                        |
| [`overwriteNetRules`](#overwritenetrules) ⚠️                                 | 覆写网络规则                        |
| [`getNetByNetRules`](#getnetbynetrules) ⚠️                                   | 获取网络-网络规则                   |
| [`overwriteNetByNetRules`](#overwritenetbynetrules) ⚠️                       | 覆写网络-网络规则                   |
| [`getRegionRules`](#getregionrules) ⚠️                                       | 获取区域规则                        |
| [`overwriteRegionRules`](#overwriteregionrules) ⚠️                           | 覆写区域规则                        |
| [`createNetClass`](#createnetclass) ⚠️                                       | 创建网络类                          |
| [`deleteNetClass`](#deletenetclass) ⚠️                                       | 删除网络类                          |
| [`modifyNetClassName`](#modifynetclassname) ⚠️                               | 修改网络类的名称                    |
| [`addNetToNetClass`](#addnettonetclass) ⚠️                                   | 将网络添加到网络类                  |
| [`removeNetFromNetClass`](#removenetfromnetclass) ⚠️                         | 从网络类中移除网络                  |
| [`getAllNetClasses`](#getallnetclasses) ⚠️                                   | 获取所有网络类的详细属性            |
| [`createDifferentialPair`](#createdifferentialpair) ⚠️                       | 创建差分对                          |
| [`deleteDifferentialPair`](#deletedifferentialpair) ⚠️                       | 删除差分对                          |
| [`modifyDifferentialPairName`](#modifydifferentialpairname) ⚠️               | 修改差分对的名称                    |
| [`modifyDifferentialPairPositiveNet`](#modifydifferentialpairpositivenet) ⚠️ | 修改差分对正网络                    |
| [`modifyDifferentialPairNegativeNet`](#modifydifferentialpairnegativenet) ⚠️ | 修改差分对负网络                    |
| [`getAllDifferentialPairs`](#getalldifferentialpairs) ⚠️                     | 获取所有差分对的详细属性            |
| [`createEqualLengthNetGroup`](#createequallengthnetgroup) ⚠️                 | 创建等长网络组                      |
| [`deleteEqualLengthNetGroup`](#deleteequallengthnetgroup) ⚠️                 | 删除等长网络组                      |
| [`modifyEqualLengthNetGroupName`](#modifyequallengthnetgroupname) ⚠️         | 修改等长网络组的名称                |
| [`addNetToEqualLengthNetGroup`](#addnettoequallengthnetgroup) ⚠️             | 将网络添加到等长网络组              |
| [`removeNetFromEqualLengthNetGroup`](#removenetfromequallengthnetgroup) ⚠️   | 从等长网络组中移除网络              |
| [`getAllEqualLengthNetGroups`](#getallequallengthnetgroups) ⚠️               | 获取所有等长网络组的详细属性        |
| [`createPadPairGroup`](#createpadpairgroup) ⚠️                               | 创建焊盘对组                        |
| [`deletePadPairGroup`](#deletepadpairgroup) ⚠️                               | 删除焊盘对组                        |
| [`modifyPadPairGroupName`](#modifypadpairgroupname) ⚠️                       | 修改焊盘对组的名称                  |
| [`addPadPairToPadPairGroup`](#addpadpairtopadpairgroup) ⚠️                   | 将焊盘对添加到焊盘对组              |
| [`removePadPairFromPadPairGroup`](#removepadpairfrompadpairgroup) ⚠️         | 从焊盘对组中移除焊盘对              |
| [`getAllPadPairGroups`](#getallpadpairgroups) ⚠️                             | 获取所有焊盘对组的详细属性          |
| [`getPadPairGroupMinWireLength`](#getpadpairgroupminwirelength) ⚠️           | 获取焊盘对组最短导线长度            |

---

## 方法详情

### check

> ⚠️ **Beta 阶段**

检查 DRC

**方法签名:**

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: false): Promise<boolean>
```

**参数:**

| 参数名              | 类型      | 描述                                                                |
| ------------------- | --------- | ------------------------------------------------------------------- |
| strict              | `boolean` | 是否严格检查，当前 PCB 统一为严格检查模式                           |
| userInterface       | `boolean` | 是否显示 UI（呼出底部 DRC 窗口）                                    |
| includeVerboseError | `false`   | 是否在返回值中包含详细错误信息，如若为 `true`，则返回值将始终为数组 |

**返回值:**

DRC 检查是否通过

---

### check

> ⚠️ **Beta 阶段**

检查 DRC

**方法签名:**

```typescript
check(strict: boolean, userInterface: boolean, includeVerboseError: true): Promise<Array<any>>
```

**参数:**

| 参数名              | 类型      | 描述                                                                |
| ------------------- | --------- | ------------------------------------------------------------------- |
| strict              | `boolean` | 是否严格检查，当前 PCB 统一为严格检查模式                           |
| userInterface       | `boolean` | 是否显示 UI（呼出底部 DRC 窗口）                                    |
| includeVerboseError | `true`    | 是否在返回值中包含详细错误信息，如若为 `true`，则返回值将始终为数组 |

**返回值:**

DRC 检查的详细结果

---

### getCurrentRuleConfigurationName

获取当前设计规则配置名称

**方法签名:**

```typescript
getCurrentRuleConfigurationName(): Promise<string | undefined>
```

**返回值:**

当前设计规则配置名称，`undefined` 为获取失败

---

### getCurrentRuleConfiguration

> ⚠️ **Beta 阶段**

获取当前设计规则配置

**方法签名:**

```typescript
getCurrentRuleConfiguration(): Promise<{ [key: string]: any
```

**返回值:**

当前设计规则配置，`undefined` 为获取失败

---

### getRuleConfiguration

获取指定设计规则配置

**方法签名:**

```typescript
getRuleConfiguration(configurationName: string): Promise<{ [key: string]: any
```

**参数:**

| 参数名            | 类型     | 描述     |
| ----------------- | -------- | -------- |
| configurationName | `string` | 配置名称 |

**返回值:**

设计规则配置，`undefined` 为不存在该设计规则

---

### getAllRuleConfigurations

> ⚠️ **Beta 阶段**

获取所有设计规则配置

**方法签名:**

```typescript
getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<{ [key: string]: any
```

**参数:**

| 参数名        | 类型      | 描述                     |
| ------------- | --------- | ------------------------ |
| includeSystem | `boolean` | 是否获取系统设计规则配置 |

**返回值:**

所有设计规则配置

---

### saveRuleConfiguration

> ⚠️ **Beta 阶段**

保存设计规则配置

**备注:**

> 只有自定义配置可以覆盖保存，系统配置不允许修改和覆盖

**方法签名:**

```typescript
saveRuleConfiguration(ruleConfiguration: { [key: string]: any
```

**参数:**

| 参数名            | 类型 | 描述                                                                                                     |
| ----------------- | ---- | -------------------------------------------------------------------------------------------------------- |
| ruleConfiguration |      | 设计规则配置                                                                                             |
| configurationName |      | 配置名称                                                                                                 |
| allowOverwrite    |      | 是否允许覆写同名设计规则配置，`false` 则将在遇到同名设计规则配置时返回 `false`，请注意可能的数据丢失风险 |

**返回值:**

保存是否成功

---

### renameRuleConfiguration

> ⚠️ **Beta 阶段**

重命名设计规则配置

**备注:**

> 只有自定义配置可以重命名，系统配置不允许重命名

**方法签名:**

```typescript
renameRuleConfiguration(originalConfigurationName: string, configurationName: string): Promise<boolean>
```

**参数:**

| 参数名                    | 类型     | 描述               |
| ------------------------- | -------- | ------------------ |
| originalConfigurationName | `string` | 原设计规则配置名称 |
| configurationName         | `string` | 新设计规则配置名称 |

**返回值:**

重命名是否成功

---

### deleteRuleConfiguration

> ⚠️ **Beta 阶段**

删除设计规则配置

**备注:**

> 系统配置不允许删除

**方法签名:**

```typescript
deleteRuleConfiguration(configurationName: string): Promise<boolean>
```

**参数:**

| 参数名            | 类型     | 描述     |
| ----------------- | -------- | -------- |
| configurationName | `string` | 配置名称 |

**返回值:**

删除是否成功

---

### getDefaultRuleConfigurationName

> ⚠️ **Beta 阶段**

获取新建 PCB 默认设计规则配置的名称

**方法签名:**

```typescript
getDefaultRuleConfigurationName(): Promise<string | undefined>
```

**返回值:**

默认设计规则配置的名称，`undefined` 为获取失败

---

### setAsDefaultRuleConfiguration

> ⚠️ **Beta 阶段**

设置为新建 PCB 默认设计规则配置

**备注:**

> 返回值为结果导向，重复设置相同的设计规则为默认设计规则也将返回 `true`

**方法签名:**

```typescript
setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>
```

**参数:**

| 参数名            | 类型     | 描述     |
| ----------------- | -------- | -------- |
| configurationName | `string` | 配置名称 |

**返回值:**

设置是否成功

---

### getNetRules

> ⚠️ **Beta 阶段**

获取网络规则

**方法签名:**

```typescript
getNetRules(): Promise<Array<{ [key: string]: any
```

**返回值:**

当前 PCB 的所有网络规则

---

### overwriteNetRules

> ⚠️ **Beta 阶段**

覆写网络规则

**备注:**

> 将会覆写当前 PCB 的所有网络规则，请注意数据丢失风险

**方法签名:**

```typescript
overwriteNetRules(netRules: Array<{ [key: string]: any
```

**参数:**

| 参数名   | 类型 | 描述     |
| -------- | ---- | -------- |
| netRules |      | 网络规则 |

**返回值:**

覆写是否成功

---

### getNetByNetRules

> ⚠️ **Beta 阶段**

获取网络-网络规则

**方法签名:**

```typescript
getNetByNetRules(): Promise<{ [key: string]: any
```

**返回值:**

当前 PCB 的所有网络-网络规则

---

### overwriteNetByNetRules

> ⚠️ **Beta 阶段**

覆写网络-网络规则

**备注:**

> 将会覆写当前 PCB 的所有网络-网络规则，请注意数据丢失风险

**方法签名:**

```typescript
overwriteNetByNetRules(netByNetRules: { [key: string]: any
```

**参数:**

| 参数名        | 类型 | 描述          |
| ------------- | ---- | ------------- |
| netByNetRules |      | 网络-网络规则 |

**返回值:**

覆写是否成功

---

### getRegionRules

> ⚠️ **Beta 阶段**

获取区域规则

**方法签名:**

```typescript
getRegionRules(): Promise<Array<{ [key: string]: any
```

**返回值:**

- 当前 PCB 的所有区域规则

---

### overwriteRegionRules

> ⚠️ **Beta 阶段**

覆写区域规则

**备注:**

> 将会覆写当前 PCB 的所有区域规则，请注意数据丢失风险

**方法签名:**

```typescript
overwriteRegionRules(regionRules: Array<{ [key: string]: any
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| regionRules |      | 区域规则 |

**返回值:**

覆写是否成功

---

### createNetClass

> ⚠️ **Beta 阶段**

创建网络类

**方法签名:**

```typescript
createNetClass(netClassName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>
```

**参数:**

| 参数名       | 类型                                    | 描述         |
| ------------ | --------------------------------------- | ------------ |
| netClassName | `string`                                | 网络类名称   |
| nets         | `Array<string>`                         | 网络名称数组 |
| color        | `IPCB_EqualLengthNetGroupItem['color']` | 网络类颜色   |

**返回值:**

操作是否成功

---

### deleteNetClass

> ⚠️ **Beta 阶段**

删除网络类

**方法签名:**

```typescript
deleteNetClass(netClassName: string): Promise<boolean>
```

**参数:**

| 参数名       | 类型     | 描述       |
| ------------ | -------- | ---------- |
| netClassName | `string` | 网络类名称 |

**返回值:**

操作是否成功

---

### modifyNetClassName

> ⚠️ **Beta 阶段**

修改网络类的名称

**方法签名:**

```typescript
modifyNetClassName(originalNetClassName: string, netClassName: string): Promise<boolean>
```

**参数:**

| 参数名               | 类型     | 描述         |
| -------------------- | -------- | ------------ |
| originalNetClassName | `string` | 原网络类名称 |
| netClassName         | `string` | 新网络类名称 |

**返回值:**

操作是否成功

---

### addNetToNetClass

> ⚠️ **Beta 阶段**

将网络添加到网络类

**方法签名:**

```typescript
addNetToNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>
```

**参数:**

| 参数名       | 类型     | 描述           |
| ------------ | -------- | -------------- | -------- |
| netClassName | `string` | 网络类名称     |
| net          | `string  | Array<string>` | 网络名称 |

**返回值:**

操作是否成功

---

### removeNetFromNetClass

> ⚠️ **Beta 阶段**

从网络类中移除网络

**方法签名:**

```typescript
removeNetFromNetClass(netClassName: string, net: string | Array<string>): Promise<boolean>
```

**参数:**

| 参数名       | 类型     | 描述           |
| ------------ | -------- | -------------- | -------- |
| netClassName | `string` | 网络类名称     |
| net          | `string  | Array<string>` | 网络名称 |

**返回值:**

操作是否成功

---

### getAllNetClasses

> ⚠️ **Beta 阶段**

获取所有网络类的详细属性

**方法签名:**

```typescript
getAllNetClasses(): Promise<Array<IPCB_NetClassItem>>
```

**返回值:**

所有网络类的详细属性

---

### createDifferentialPair

> ⚠️ **Beta 阶段**

创建差分对

**方法签名:**

```typescript
createDifferentialPair(differentialPairName: string, positiveNet: string, negativeNet: string): Promise<boolean>
```

**参数:**

| 参数名               | 类型     | 描述       |
| -------------------- | -------- | ---------- |
| differentialPairName | `string` | 差分对名称 |
| positiveNet          | `string` | 正网络名称 |
| negativeNet          | `string` | 负网络名称 |

**返回值:**

操作是否成功

---

### deleteDifferentialPair

> ⚠️ **Beta 阶段**

删除差分对

**方法签名:**

```typescript
deleteDifferentialPair(differentialPairName: string): Promise<boolean>
```

**参数:**

| 参数名               | 类型     | 描述       |
| -------------------- | -------- | ---------- |
| differentialPairName | `string` | 差分对名称 |

**返回值:**

操作是否成功

---

### modifyDifferentialPairName

> ⚠️ **Beta 阶段**

修改差分对的名称

**方法签名:**

```typescript
modifyDifferentialPairName(originalDifferentialPairName: string, differentialPairName: string): Promise<boolean>
```

**参数:**

| 参数名                       | 类型     | 描述         |
| ---------------------------- | -------- | ------------ |
| originalDifferentialPairName | `string` | 原差分对名称 |
| differentialPairName         | `string` | 新差分对名称 |

**返回值:**

操作是否成功

---

### modifyDifferentialPairPositiveNet

> ⚠️ **Beta 阶段**

修改差分对正网络

**方法签名:**

```typescript
modifyDifferentialPairPositiveNet(differentialPairName: string, positiveNet: string): Promise<boolean>
```

**参数:**

| 参数名               | 类型     | 描述       |
| -------------------- | -------- | ---------- |
| differentialPairName | `string` | 差分对名称 |
| positiveNet          | `string` | 正网络名称 |

**返回值:**

操作是否成功

---

### modifyDifferentialPairNegativeNet

> ⚠️ **Beta 阶段**

修改差分对负网络

**方法签名:**

```typescript
modifyDifferentialPairNegativeNet(differentialPairName: string, negativeNet: string): Promise<boolean>
```

**参数:**

| 参数名               | 类型     | 描述       |
| -------------------- | -------- | ---------- |
| differentialPairName | `string` | 差分对名称 |
| negativeNet          | `string` | 负网络名称 |

**返回值:**

操作是否成功

---

### getAllDifferentialPairs

> ⚠️ **Beta 阶段**

获取所有差分对的详细属性

**方法签名:**

```typescript
getAllDifferentialPairs(): Promise<Array<IPCB_DifferentialPairItem>>
```

**返回值:**

所有差分对的详细属性

---

### createEqualLengthNetGroup

> ⚠️ **Beta 阶段**

创建等长网络组

**方法签名:**

```typescript
createEqualLengthNetGroup(equalLengthNetGroupName: string, nets: Array<string>, color: IPCB_EqualLengthNetGroupItem['color']): Promise<boolean>
```

**参数:**

| 参数名                  | 类型                                    | 描述           |
| ----------------------- | --------------------------------------- | -------------- |
| equalLengthNetGroupName | `string`                                | 等长网络组名称 |
| nets                    | `Array<string>`                         | 网络名称数组   |
| color                   | `IPCB_EqualLengthNetGroupItem['color']` | 等长网络组颜色 |

**返回值:**

操作是否成功

---

### deleteEqualLengthNetGroup

> ⚠️ **Beta 阶段**

删除等长网络组

**方法签名:**

```typescript
deleteEqualLengthNetGroup(equalLengthNetGroupName: string): Promise<boolean>
```

**参数:**

| 参数名                  | 类型     | 描述           |
| ----------------------- | -------- | -------------- |
| equalLengthNetGroupName | `string` | 等长网络组名称 |

**返回值:**

操作是否成功

---

### modifyEqualLengthNetGroupName

> ⚠️ **Beta 阶段**

修改等长网络组的名称

**方法签名:**

```typescript
modifyEqualLengthNetGroupName(originalEqualLengthNetGroupName: string, equalLengthNetGroupName: string): Promise<boolean>
```

**参数:**

| 参数名                          | 类型     | 描述             |
| ------------------------------- | -------- | ---------------- |
| originalEqualLengthNetGroupName | `string` | 原等长网络组名称 |
| equalLengthNetGroupName         | `string` | 新等长网络组名称 |

**返回值:**

操作是否成功

---

### addNetToEqualLengthNetGroup

> ⚠️ **Beta 阶段**

将网络添加到等长网络组

**方法签名:**

```typescript
addNetToEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>
```

**参数:**

| 参数名                  | 类型     | 描述           |
| ----------------------- | -------- | -------------- | -------- |
| equalLengthNetGroupName | `string` | 等长网络组名称 |
| net                     | `string  | Array<string>` | 网络名称 |

**返回值:**

操作是否成功

---

### removeNetFromEqualLengthNetGroup

> ⚠️ **Beta 阶段**

从等长网络组中移除网络

**方法签名:**

```typescript
removeNetFromEqualLengthNetGroup(equalLengthNetGroupName: string, net: string | Array<string>): Promise<boolean>
```

**参数:**

| 参数名                  | 类型     | 描述           |
| ----------------------- | -------- | -------------- | -------- |
| equalLengthNetGroupName | `string` | 等长网络组名称 |
| net                     | `string  | Array<string>` | 网络名称 |

**返回值:**

操作是否成功

---

### getAllEqualLengthNetGroups

> ⚠️ **Beta 阶段**

获取所有等长网络组的详细属性

**方法签名:**

```typescript
getAllEqualLengthNetGroups(): Promise<Array<IPCB_EqualLengthNetGroupItem>>
```

**返回值:**

所有等长网络组的详细属性

---

### createPadPairGroup

> ⚠️ **Beta 阶段**

创建焊盘对组
@example 有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘
await eda.pcb_Drc.createPadPairGroup('test',[['e0','e1']]) // 游离焊盘-游离焊盘
await eda.pcb_Drc.createPadPairGroup('test',[['R1:1','R1:2'],['R2:1','R2:2']]) // 器件焊盘 - 器件焊盘
await eda.pcb_Drc.createPadPairGroup('test',[['R1:1','e0'],['R1:2','e1']]) // 器件焊盘 - 游离焊盘

**方法签名:**

```typescript
createPadPairGroup(padPairGroupName: string, padPairs: Array<[string, string]>): Promise<boolean>
```

**参数:**

| 参数名           | 类型            | 描述         |
| ---------------- | --------------- | ------------ |
| padPairGroupName | `string`        | 焊盘对组名称 |
| padPairs         | `Array<[string` | 焊盘对数组   |

**返回值:**

操作是否成功

---

### deletePadPairGroup

> ⚠️ **Beta 阶段**

删除焊盘对组

**方法签名:**

```typescript
deletePadPairGroup(padPairGroupName: string): Promise<boolean>
```

**参数:**

| 参数名           | 类型     | 描述         |
| ---------------- | -------- | ------------ |
| padPairGroupName | `string` | 焊盘对组名称 |

**返回值:**

操作是否成功

---

### modifyPadPairGroupName

> ⚠️ **Beta 阶段**

修改焊盘对组的名称

**方法签名:**

```typescript
modifyPadPairGroupName(originalPadPairGroupName: string, padPairGroupName: string): Promise<boolean>
```

**参数:**

| 参数名                   | 类型     | 描述           |
| ------------------------ | -------- | -------------- |
| originalPadPairGroupName | `string` | 原焊盘对组名称 |
| padPairGroupName         | `string` | 新焊盘对组名称 |

**返回值:**

操作是否成功

---

### addPadPairToPadPairGroup

> ⚠️ **Beta 阶段**

将焊盘对添加到焊盘对组
@example 有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘
await eda.pcb_Drc.addPadPairToPadPairGroup('test',['e0','e1']) // 游离焊盘-游离焊盘
await eda.pcb_Drc.addPadPairToPadPairGroup('test',['R1:1','R1:2']) // 器件焊盘 - 器件焊盘
await eda.pcb_Drc.addPadPairToPadPairGroup('test',['R1:1','e1']) // 器件焊盘 - 游离焊盘

**方法签名:**

```typescript
addPadPairToPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>
```

**参数:**

| 参数名           | 类型      | 描述         |
| ---------------- | --------- | ------------ |
| padPairGroupName | `string`  | 焊盘对组名称 |
| padPair          | `[string` | 焊盘对       |

**返回值:**

操作是否成功

---

### removePadPairFromPadPairGroup

> ⚠️ **Beta 阶段**

从焊盘对组中移除焊盘对
@example 有三种不同的用法，确保画布上已有对应的焊盘。 分别是 一，游离焊盘-游离焊盘；二，器件焊盘 - 器件焊盘；三，器件焊盘 - 游离焊盘
await eda.pcb_Drc.removePadPairFromPadPairGroup('test',['e0','e1']) // 游离焊盘-游离焊盘
await eda.pcb_Drc.removePadPairFromPadPairGroup('test',['R1:1','R1:2']) // 器件焊盘 - 器件焊盘
await eda.pcb_Drc.removePadPairFromPadPairGroup('test',['R1:2','e1']) // 器件焊盘 - 游离焊盘

**方法签名:**

```typescript
removePadPairFromPadPairGroup(padPairGroupName: string, padPair: [string, string] | Array<[string, string]>): Promise<boolean>
```

**参数:**

| 参数名           | 类型      | 描述         |
| ---------------- | --------- | ------------ |
| padPairGroupName | `string`  | 焊盘对组名称 |
| padPair          | `[string` | 焊盘对       |

**返回值:**

操作是否成功

---

### getAllPadPairGroups

> ⚠️ **Beta 阶段**

获取所有焊盘对组的详细属性

**方法签名:**

```typescript
getAllPadPairGroups(): Promise<Array<IPCB_PadPairGroupItem>>
```

**返回值:**

所有焊盘对组的详细属性

---

### getPadPairGroupMinWireLength

> ⚠️ **Beta 阶段**

获取焊盘对组最短导线长度

**方法签名:**

```typescript
getPadPairGroupMinWireLength(padPairGroupName: string): Promise<Array<IPCB_PadPairMinWireLengthItem>>
```

**参数:**

| 参数名           | 类型     | 描述         |
| ---------------- | -------- | ------------ |
| padPairGroupName | `string` | 焊盘对组名称 |

**返回值:**

所有焊盘对的最短导线长度
