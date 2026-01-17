# SYS_PanelControl

## 概述

系统 / 面板控制类

## 方法列表

| 方法名                                                      | 说明                   |
| ----------------------------------------------------------- | ---------------------- |
| [`openLeftPanel`](#openleftpanel)                           | 打开左侧面板           |
| [`closeLeftPanel`](#closeleftpanel)                         | 关闭左侧面板           |
| [`toggleLeftPanelLockState`](#toggleleftpanellockstate)     | 切换左侧面板锁定状态   |
| [`isLeftPanelLocked`](#isleftpanellocked)                   | 查询左侧面板是否已锁定 |
| [`openRightPanel`](#openrightpanel)                         | 打开右侧面板           |
| [`closeRightPanel`](#closerightpanel)                       | 关闭右侧面板           |
| [`toggleRightPanelLockState`](#togglerightpanellockstate)   | 切换右侧面板锁定状态   |
| [`isRightPanelLocked`](#isrightpanellocked)                 | 查询右侧面板是否已锁定 |
| [`openBottomPanel`](#openbottompanel)                       | 打开底部面板           |
| [`closeBottomPanel`](#closebottompanel)                     | 关闭底部面板           |
| [`toggleBottomPanelLockState`](#togglebottompanellockstate) | 切换底部面板锁定状态   |
| [`isBottomPanelLocked`](#isbottompanellocked)               | 查询底部面板是否已锁定 |

---

## 方法详情

### openLeftPanel

打开左侧面板

**方法签名:**

```typescript
openLeftPanel(tab?: ESYS_LeftPanelTab): void
```

**参数:**

| 参数名 | 类型                | 描述                             |
| ------ | ------------------- | -------------------------------- |
| tab    | `ESYS_LeftPanelTab` | 标签页，如若不指定则不切换标签页 |

---

### closeLeftPanel

关闭左侧面板

**方法签名:**

```typescript
closeLeftPanel(): void
```

---

### toggleLeftPanelLockState

切换左侧面板锁定状态

**方法签名:**

```typescript
toggleLeftPanelLockState(state?: boolean): void
```

**参数:**

| 参数名 | 类型      | 描述                               |
| ------ | --------- | ---------------------------------- |
| state  | `boolean` | 是否锁定，如若不指定则反置当前状态 |

---

### isLeftPanelLocked

查询左侧面板是否已锁定

**方法签名:**

```typescript
isLeftPanelLocked(): Promise<boolean>
```

**返回值:**

是否已锁定

---

### openRightPanel

打开右侧面板

**方法签名:**

```typescript
openRightPanel(tab?: ESYS_RightPanelTab): void
```

**参数:**

| 参数名 | 类型                 | 描述                             |
| ------ | -------------------- | -------------------------------- |
| tab    | `ESYS_RightPanelTab` | 标签页，如若不指定则不切换标签页 |

---

### closeRightPanel

关闭右侧面板

**方法签名:**

```typescript
closeRightPanel(): void
```

---

### toggleRightPanelLockState

切换右侧面板锁定状态

**方法签名:**

```typescript
toggleRightPanelLockState(state?: boolean): void
```

**参数:**

| 参数名 | 类型      | 描述                               |
| ------ | --------- | ---------------------------------- |
| state  | `boolean` | 是否锁定，如若不指定则反置当前状态 |

---

### isRightPanelLocked

查询右侧面板是否已锁定

**方法签名:**

```typescript
isRightPanelLocked(): Promise<boolean>
```

**返回值:**

是否已锁定

---

### openBottomPanel

打开底部面板

**方法签名:**

```typescript
openBottomPanel(tab?: ESYS_BottomPanelTab): void
```

**参数:**

| 参数名 | 类型                  | 描述                             |
| ------ | --------------------- | -------------------------------- |
| tab    | `ESYS_BottomPanelTab` | 标签页，如若不指定则不切换标签页 |

---

### closeBottomPanel

关闭底部面板

**方法签名:**

```typescript
closeBottomPanel(): void
```

---

### toggleBottomPanelLockState

切换底部面板锁定状态

**方法签名:**

```typescript
toggleBottomPanelLockState(state?: boolean): void
```

**参数:**

| 参数名 | 类型      | 描述                               |
| ------ | --------- | ---------------------------------- |
| state  | `boolean` | 是否锁定，如若不指定则反置当前状态 |

---

### isBottomPanelLocked

查询底部面板是否已锁定

**方法签名:**

```typescript
isBottomPanelLocked(): Promise<boolean>
```

**返回值:**

是否已锁定
