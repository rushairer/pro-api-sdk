# PCB_Net

## 概述

PCB & 封装 / 网络类

## 方法列表

| 方法名                                               | 说明                       |
| ---------------------------------------------------- | -------------------------- |
| [`getAllNetsName`](#getallnetsname)                  | 获取所有网络的网络名称     |
| [`getAllNetName`](#getallnetname)                    | 获取所有网络的网络名称     |
| [`getNetLength`](#getnetlength)                      | 获取指定网络的长度         |
| [`getAllPrimitivesByNet`](#getallprimitivesbynet) ⚠️ | 获取关联指定网络的所有图元 |
| [`selectNet`](#selectnet) ⚠️                         | 选中网络                   |
| [`highlightNet`](#highlightnet) ⚠️                   | 高亮网络                   |
| [`unhighlightNet`](#unhighlightnet) ⚠️               | 取消高亮网络               |
| [`getNetlist`](#getnetlist)                          | 获取网表                   |
| [`setNetlist`](#setnetlist)                          | 更新网表                   |

---

## 方法详情

### getAllNetsName

获取所有网络的网络名称

**方法签名:**

```typescript
getAllNetsName(): Promise<Array<string>>
```

**返回值:**

网络名称数组

---

### getAllNetName

获取所有网络的网络名称
@deprecated 请使用 {@link PCB_Net.getAllNetsName | getAllNetsName} 替代

**方法签名:**

```typescript
getAllNetName(): Promise<Array<string>>
```

**返回值:**

网络名称数组

---

### getNetLength

获取指定网络的长度

**方法签名:**

```typescript
getNetLength(net: string): Promise<number | undefined>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| net    | `string` | 网络名称 |

**返回值:**

网络长度，`undefined` 为不存在该网络，`0` 为网络无长度

---

### getAllPrimitivesByNet

> ⚠️ **Beta 阶段**

获取关联指定网络的所有图元

**方法签名:**

```typescript
getAllPrimitivesByNet(net: string, primitiveTypes?: Array<EPCB_PrimitiveType>): Promise<Array<IPCB_Primitive>>
```

**参数:**

| 参数名         | 类型                        | 描述                                                             |
| -------------- | --------------------------- | ---------------------------------------------------------------- |
| net            | `string`                    | 网络名称                                                         |
| primitiveTypes | `Array<EPCB_PrimitiveType>` | 图元类型数组，如若指定图元类型不存在网络属性，返回的数据将恒为空 |

**返回值:**

图元对象数组

---

### selectNet

> ⚠️ **Beta 阶段**

选中网络

**方法签名:**

```typescript
selectNet(net: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| net    | `string` | 网络名称 |

**返回值:**

操作是否成功

---

### highlightNet

> ⚠️ **Beta 阶段**

高亮网络

**备注:**

> 本接口的返回值为结果导向，如果该网络原先已高亮，也将返回 `true`

**方法签名:**

```typescript
highlightNet(net: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| net    | `string` | 网络名称 |

**返回值:**

操作是否成功

---

### unhighlightNet

> ⚠️ **Beta 阶段**

取消高亮网络

**备注:**

> 本接口的返回值为结果导向，��果该网络原先未高亮，也将返回 `true`

**方法签名:**

```typescript
unhighlightNet(net: string): Promise<boolean>
```

**参数:**

| 参数名 | 类型     | 描述     |
| ------ | -------- | -------- |
| net    | `string` | 网络名称 |

**返回值:**

操作是否成功

---

### getNetlist

获取网表

**方法签名:**

```typescript
getNetlist(type?: ESYS_NetlistType): Promise<string>
```

**参数:**

| 参数名 | 类型               | 描述     |
| ------ | ------------------ | -------- |
| type   | `ESYS_NetlistType` | 网表格式 |

**返回值:**

网表数据

---

### setNetlist

更新网表

**方法签名:**

```typescript
setNetlist(type: ESYS_NetlistType | undefined, netlist: string): Promise<boolean>
```

**参数:**

| 参数名  | 类型              | 描述       |
| ------- | ----------------- | ---------- | -------- |
| type    | `ESYS_NetlistType | undefined` | 网表格式 |
| netlist | `string`          | 网表数据   |
