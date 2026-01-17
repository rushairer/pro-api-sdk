# DMT_Team

## 概述

文档树 / 团队类

## 方法列表

| 方法名                                              | 说明                         |
| --------------------------------------------------- | ---------------------------- |
| [`getAllTeamsInfo`](#getallteamsinfo)               | 获取所有直接团队的详细属性   |
| [`getAllInvolvedTeamInfo`](#getallinvolvedteaminfo) | 获取所有参与的团队的详细属性 |
| [`getCurrentTeamInfo`](#getcurrentteaminfo)         | 获取当前团队的详细属性       |

---

## 方法详情

### getAllTeamsInfo

获取所有直接团队的详细属性

**备注:**

> 个人本质上也是一个名为 **个人** 的团队

**方法签名:**

```typescript
getAllTeamsInfo(): Promise<Array<IDMT_TeamItem>>
```

**返回值:**

所有团队的详细属性

---

### getAllInvolvedTeamInfo

获取所有参与的团队的详细属性

**方法签名:**

```typescript
getAllInvolvedTeamInfo(): Promise<Array<IDMT_TeamItem>>
```

**返回值:**

所有参与的团队的详细属性

---

### getCurrentTeamInfo

获取当前团队的详细属性

**备注:**

> 将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的所属团队的详细属性

**方法签名:**

```typescript
getCurrentTeamInfo(): Promise<IDMT_TeamItem | undefined>
```

**返回值:**

团队的详细属性，如若为 `undefined` 则获取失败
