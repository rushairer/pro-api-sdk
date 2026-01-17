# SCH_PrimitiveText

## 概述

原理图 & 符号 / 文本图元类

## 方法列表

| 方法名                                       | 说明                  |
| -------------------------------------------- | --------------------- |
| [`create`](#create) ⚠️                       | 创建文本              |
| [`delete`](#delete) ⚠️                       | 删除文本              |
| [`modify`](#modify) ⚠️                       | 修改文本              |
| [`get`](#get) ⚠️                             | 获取文本              |
| [`get`](#get) ⚠️                             | 获取文本              |
| [`getAllPrimitiveId`](#getallprimitiveid) ⚠️ | 获取所有文本的图元 ID |
| [`getAll`](#getall) ⚠️                       | 获取所有文本          |

---

## 方法详情

### create

> ⚠️ **Beta 阶段**

创建文本

**方法签名:**

```typescript
create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: number): Promise<ISCH_PrimitiveText | undefined>
```

**参数:**

| 参数名    | 类型      | 描述                                                                                               |
| --------- | --------- | -------------------------------------------------------------------------------------------------- | ------------------------- |
| x         | `number`  | 坐标 X                                                                                             |
| y         | `number`  | 坐标 Y                                                                                             |
| content   | `string`  | 文本内容                                                                                           |
| rotation  | `number`  | 旋转角度，可选 `0` `90` `180` `270`                                                                |
| textColor | `string   | null`                                                                                              | 文本颜色，`null` 表示默认 |
| fontName  | `string   | null`                                                                                              | 字体名称，`null` 表示默认 |
| fontSize  | `number   | null`                                                                                              | 字体大小，`null` 表示默认 |
| bold      | `boolean` | 是否加粗                                                                                           |
| italic    | `boolean` | 是否斜体                                                                                           |
| underLine | `boolean` | 是否加下划线                                                                                       |
| alignMode | `number`  | 对齐模式，`0` 左顶，`1` 中顶，`2` 右顶，`3` 左中，`4` 中中，`5` 右中，`6` 左底，`7` 中底，`8` 右底 |

**返回值:**

文本图元对象

---

### delete

> ⚠️ **Beta 阶段**

删除文本

**方法签名:**

```typescript
delete(primitiveIds: string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>): Promise<boolean>
```

**参数:**

| 参数名       | 类型    | 描述               |
| ------------ | ------- | ------------------ | ------------- | -------------------------- | ---------------------------- |
| primitiveIds | `string | ISCH_PrimitiveText | Array<string> | Array<ISCH_PrimitiveText>` | 文本的图元 ID 或文本图元对象 |

**返回值:**

删除操作是否成功

---

### modify

> ⚠️ **Beta 阶段**

修改文本

**方法签名:**

```typescript
modify(primitiveId: string | ISCH_PrimitiveText, property: { x?: number
```

**参数:**

| 参数名      | 类型 | 描述     |
| ----------- | ---- | -------- |
| primitiveId |      | 图元 ID  |
| property    |      | 修改参数 |

**返回值:**

文本图元对象

---

### get

> ⚠️ **Beta 阶段**

获取文本

**方法签名:**

```typescript
get(primitiveIds: string): Promise<ISCH_PrimitiveText | undefined>
```

**参数:**

| 参数名       | 类型     | 描述                                                                  |
| ------------ | -------- | --------------------------------------------------------------------- |
| primitiveIds | `string` | 文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

文本图元对象，`undefined` 表示获取失败

---

### get

> ⚠️ **Beta 阶段**

获取文本

**备注:**

> 如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象

**方法签名:**

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveText>>
```

**参数:**

| 参数名       | 类型            | 描述                                                                  |
| ------------ | --------------- | --------------------------------------------------------------------- |
| primitiveIds | `Array<string>` | 文本的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组 |

**返回值:**

文本图元对象，空数组表示获取失败

---

### getAllPrimitiveId

> ⚠️ **Beta 阶段**

获取所有文本的图元 ID

**方法签名:**

```typescript
getAllPrimitiveId(): Promise<Array<string>>
```

**返回值:**

文本的图元 ID 数组

---

### getAll

> ⚠️ **Beta 阶段**

获取所有文本

**方法签名:**

```typescript
getAll(): Promise<Array<ISCH_PrimitiveText>>
```

**返回值:**

文本图元对象数组
