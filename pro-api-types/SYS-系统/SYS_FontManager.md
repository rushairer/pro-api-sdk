# SYS_FontManager

## 概述

系统 / 字体管理类

## 备注

> 配置嘉立创 EDA 专业版允许调用的系统字体列表

## 方法列表

| 方法名                          | 说明                       |
| ------------------------------- | -------------------------- |
| [`getFontsList`](#getfontslist) | 获取当前已经配置的字体列表 |
| [`addFont`](#addfont)           | 添加字体到字体列表         |
| [`deleteFont`](#deletefont)     | 删除字体列表内的指定字体   |

---

## 方法详情

### getFontsList

获取当前已经配置的字体列表

**方法签名:**

```typescript
getFontsList(): Promise<Array<string>>
```

**返回值:**

字体列表

---

### addFont

添加字体到字体列表

**方法签名:**

```typescript
addFont(fontName: string): Promise<boolean>
```

**参数:**

| 参数名   | 类型     | 描述     |
| -------- | -------- | -------- |
| fontName | `string` | 字体名称 |

**返回值:**

添加操作是否成功

---

### deleteFont

删除字体列表内的指定字体

**方法签名:**

```typescript
deleteFont(fontName: string): Promise<boolean>
```

**参数:**

| 参数名   | 类型     | 描述     |
| -------- | -------- | -------- |
| fontName | `string` | 字体名称 |

**返回值:**

删除操作是否成功
