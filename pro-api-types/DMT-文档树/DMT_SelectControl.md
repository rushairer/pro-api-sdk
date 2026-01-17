# DMT_SelectControl

## 概述

文档树 / 选择控制类

## 备注

> 在文档树内进行选择焦点的查询、控制

## 方法列表

| 方法名                                                 | 说明               |
| ------------------------------------------------------ | ------------------ |
| [`getCurrentDocumentInfo`](#getcurrentdocumentinfo) ⚠️ | 获取当前文档的属性 |

---

## 方法详情

### getCurrentDocumentInfo

> ⚠️ **Beta 阶段**

获取当前文档的属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的文档的文档类型、UUID、所属工程的 UUID 或所属库的 UUID

**方法签名:**

```typescript
getCurrentDocumentInfo(): Promise<IDMT_EditorDocumentItem | undefined>
```

**返回值:**

文档类型、UUID、所属工程的 UUID、所属库的 UUID 组成的对象，如若为 `undefined` 则获取失败
