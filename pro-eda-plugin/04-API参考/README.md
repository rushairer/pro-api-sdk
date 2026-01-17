# API 参考

> 完整的嘉立创EDA插件API文档索引

本章节提供所有 API 的快速索引和常用 API 速查表。详细的 API 文档请查看 [完整API类型文档](../../pro-api-types/)。

---

## 📊 API 总览

| 模块              | 类数量 | 主要功能                 | 文档链接                 |
| ----------------- | ------ | ------------------------ | ------------------------ |
| **SYS** - 系统    | 25     | UI交互、文件、通信、工具 | [查看详情](#sys-系统)    |
| **DMT** - 文档树  | 10     | 工程、文档管理           | [查看详情](#dmt-文档树)  |
| **PCB** - PCB编辑 | 24     | PCB文档、图元操作        | [查看详情](#pcb-pcb编辑) |
| **SCH** - 原理图  | 17     | 原理图文档、图元操作     | [查看详情](#sch-原理图)  |
| **LIB** - 综合库  | 8      | 器件、符号、封装管理     | [查看详情](#lib-综合库)  |
| **PNL** - 面板    | 1      | 面板文档操作             | [查看详情](#pnl-面板)    |

**总计**: 85 个核心 API 类

---

## 🔍 常用 API 速查

详见：[常用API速查表](./常用API速查.md)

### 最常用 TOP 10

| API                 | 功能       | 使用场景           |
| ------------------- | ---------- | ------------------ |
| `SYS_Dialog`        | 对话框     | 用户交互、信息提示 |
| `SYS_Message`       | 消息通知   | 操作反馈、状态提示 |
| `SYS_FileSystem`    | 文件系统   | 文件读写、选择     |
| `DMT_Project`       | 工程管理   | 获取工程信息       |
| `DMT_EditorControl` | 编辑器控制 | 文档切换、激活     |
| `PCB_Document`      | PCB文档    | PCB操作、保存      |
| `SCH_Document`      | 原理图文档 | 原理图操作、保存   |
| `LIB_Device`        | 器件管理   | 器件搜索、查询     |
| `PCB_PrimitiveLine` | PCB直线    | 绘制PCB线条        |
| `SYS_Storage`       | 本地存储   | 数据持久化         |

---

## 📚 模块详细说明

---

## SYS-系统

**核心功能**: UI交互、文件管理、通信、工具类

### UI 交互类 (8个)

| API类                                                                    | 功能描述 | 常用方法                                                        |
| ------------------------------------------------------------------------ | -------- | --------------------------------------------------------------- |
| [SYS_Dialog](../../pro-api-types/SYS-系统/SYS_Dialog.md)                 | 对话框   | `showInfoMessage`, `showConfirmationMessage`, `showInputDialog` |
| [SYS_Message](../../pro-api-types/SYS-系统/SYS_Message.md)               | 消息通知 | `info`, `warning`, `error`, `success`                           |
| [SYS_MessageBox](../../pro-api-types/SYS-系统/SYS_MessageBox.md)         | 消息框   | `show`, `close`                                                 |
| [SYS_ToastMessage](../../pro-api-types/SYS-系统/SYS_ToastMessage.md)     | 吐司消息 | `show`                                                          |
| [SYS_HeaderMenu](../../pro-api-types/SYS-系统/SYS_HeaderMenu.md)         | 顶部菜单 | `addMenu`, `removeMenu`                                         |
| [SYS_RightClickMenu](../../pro-api-types/SYS-系统/SYS_RightClickMenu.md) | 右键菜单 | `addMenu`                                                       |
| [SYS_PanelControl](../../pro-api-types/SYS-系统/SYS_PanelControl.md)     | 面板控制 | `openPanel`, `closePanel`                                       |
| [SYS_Window](../../pro-api-types/SYS-系统/SYS_Window.md)                 | 窗口管理 | `open`, `close`                                                 |

### 文件与系统类 (6个)

| API类                                                              | 功能描述 | 常用方法                                      |
| ------------------------------------------------------------------ | -------- | --------------------------------------------- |
| [SYS_FileSystem](../../pro-api-types/SYS-系统/SYS_FileSystem.md)   | 文件系统 | `openReadFileDialog`, `readFile`, `writeFile` |
| [SYS_FileManager](../../pro-api-types/SYS-系统/SYS_FileManager.md) | 文件管理 | `getFiles`, `deleteFile`                      |
| [SYS_Storage](../../pro-api-types/SYS-系统/SYS_Storage.md)         | 本地存储 | `set`, `get`, `remove`                        |
| [SYS_Environment](../../pro-api-types/SYS-系统/SYS_Environment.md) | 运行环境 | `getInfo`, `getPlatform`                      |
| [SYS_Setting](../../pro-api-types/SYS-系统/SYS_Setting.md)         | 设置管理 | `get`, `set`                                  |
| [SYS_Tool](../../pro-api-types/SYS-系统/SYS_Tool.md)               | 工具类   | 各种工具方法                                  |

### 通信类 (3个)

| API类                                                            | 功能描述  | 常用方法               |
| ---------------------------------------------------------------- | --------- | ---------------------- |
| [SYS_MessageBus](../../pro-api-types/SYS-系统/SYS_MessageBus.md) | 消息总线  | `publish`, `subscribe` |
| [SYS_WebSocket](../../pro-api-types/SYS-系统/SYS_WebSocket.md)   | WebSocket | `connect`, `send`      |
| [SYS_ClientUrl](../../pro-api-types/SYS-系统/SYS_ClientUrl.md)   | 外部请求  | `request`              |

### 多媒体与工具类 (8个)

| API类                                                                                  | 功能描述 | 常用方法                    |
| -------------------------------------------------------------------------------------- | -------- | --------------------------- |
| [SYS_IFrame](../../pro-api-types/SYS-系统/SYS_IFrame.md)                               | 内联框架 | `create`, `postMessage`     |
| [SYS_I18n](../../pro-api-types/SYS-系统/SYS_I18n.md)                                   | 多语言   | `t`, `setLanguage`          |
| [SYS_FontManager](../../pro-api-types/SYS-系统/SYS_FontManager.md)                     | 字体管理 | `getFonts`                  |
| [SYS_Unit](../../pro-api-types/SYS-系统/SYS_Unit.md)                                   | 单位转换 | `convert`                   |
| [SYS_Timer](../../pro-api-types/SYS-系统/SYS_Timer.md)                                 | 定时器   | `setTimeout`, `setInterval` |
| [SYS_Log](../../pro-api-types/SYS-系统/SYS_Log.md)                                     | 日志     | `info`, `error`, `warn`     |
| [SYS_LoadingAndProgressBar](../../pro-api-types/SYS-系统/SYS_LoadingAndProgressBar.md) | 加载进度 | `show`, `updateProgress`    |
| [SYS_ShortcutKey](../../pro-api-types/SYS-系统/SYS_ShortcutKey.md)                     | 快捷键   | `register`                  |

📖 [查看 SYS 模块完整文档](../../pro-api-types/SYS-系统/README.md)

---

## DMT-文档树

**核心功能**: 工程管理、文档切换、文件夹操作

| API类                                                                    | 功能描述   | 常用方法                               |
| ------------------------------------------------------------------------ | ---------- | -------------------------------------- |
| [DMT_Project](../../pro-api-types/DMT-文档树/DMT_Project.md)             | 工程管理   | `getCurrentProjectInfo`, `openProject` |
| [DMT_EditorControl](../../pro-api-types/DMT-文档树/DMT_EditorControl.md) | 编辑器控制 | `activateDocument`, `closeDocument`    |
| [DMT_Schematic](../../pro-api-types/DMT-文档树/DMT_Schematic.md)         | 原理图管理 | `create`, `get`                        |
| [DMT_Pcb](../../pro-api-types/DMT-文档树/DMT_Pcb.md)                     | PCB管理    | `create`, `get`                        |
| [DMT_Board](../../pro-api-types/DMT-文档树/DMT_Board.md)                 | 板子管理   | `get`                                  |
| [DMT_Panel](../../pro-api-types/DMT-文档树/DMT_Panel.md)                 | 面板管理   | `get`                                  |
| [DMT_Folder](../../pro-api-types/DMT-文档树/DMT_Folder.md)               | 文件夹管理 | `create`, `move`                       |
| [DMT_SelectControl](../../pro-api-types/DMT-文档树/DMT_SelectControl.md) | 选择控制   | `select`                               |
| [DMT_Team](../../pro-api-types/DMT-文档树/DMT_Team.md)                   | 团队管理   | `get`                                  |
| [DMT_Workspace](../../pro-api-types/DMT-文档树/DMT_Workspace.md)         | 工作区管理 | `get`                                  |

📖 [查看 DMT 模块完整文档](../../pro-api-types/DMT-文档树/README.md)

---

## PCB-PCB编辑

**核心功能**: PCB文档操作、图元绘制、DRC检查、Gerber导出

### 核心控制类 (7个)

| API类                                                                         | 功能描述                    |
| ----------------------------------------------------------------------------- | --------------------------- |
| [PCB_Document](../../pro-api-types/PCB-PCB编辑/PCB_Document.md)               | PCB文档操作、保存、坐标转换 |
| [PCB_Drc](../../pro-api-types/PCB-PCB编辑/PCB_Drc.md)                         | 设计规则检查、DRC配置       |
| [PCB_Layer](../../pro-api-types/PCB-PCB编辑/PCB_Layer.md)                     | 图层管理、图层配置          |
| [PCB_ManufactureData](../../pro-api-types/PCB-PCB编辑/PCB_ManufactureData.md) | Gerber、BOM等生产文件导出   |
| [PCB_Net](../../pro-api-types/PCB-PCB编辑/PCB_Net.md)                         | 网络管理                    |
| [PCB_Event](../../pro-api-types/PCB-PCB编辑/PCB_Event.md)                     | 事件监听                    |
| [PCB_SelectControl](../../pro-api-types/PCB-PCB编辑/PCB_SelectControl.md)     | 选择控制                    |

### 图元类 (16个)

| API类                                                                               | 功能描述    |
| ----------------------------------------------------------------------------------- | ----------- |
| [PCB_Primitive](../../pro-api-types/PCB-PCB编辑/PCB_Primitive.md)                   | 图元基类    |
| [PCB_PrimitiveLine](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveLine.md)           | 直线        |
| [PCB_PrimitiveArc](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveArc.md)             | 圆弧        |
| [PCB_PrimitivePolyline](../../pro-api-types/PCB-PCB编辑/PCB_PrimitivePolyline.md)   | 折线        |
| [PCB_PrimitiveComponent](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveComponent.md) | 器件        |
| [PCB_PrimitivePad](../../pro-api-types/PCB-PCB编辑/PCB_PrimitivePad.md)             | 焊盘        |
| [PCB_PrimitiveVia](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveVia.md)             | 过孔        |
| [PCB_PrimitivePour](../../pro-api-types/PCB-PCB编辑/PCB_PrimitivePour.md)           | 覆铜边框    |
| [PCB_PrimitivePoured](../../pro-api-types/PCB-PCB编辑/PCB_PrimitivePoured.md)       | 覆铜填充    |
| [PCB_PrimitiveRegion](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveRegion.md)       | 禁止/约束区 |
| [PCB_PrimitiveFill](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveFill.md)           | 填充        |
| [PCB_PrimitiveImage](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveImage.md)         | 图像        |
| [PCB_PrimitiveString](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveString.md)       | 文本        |
| [PCB_PrimitiveDimension](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveDimension.md) | 尺寸标注    |
| [PCB_PrimitiveAttribute](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveAttribute.md) | 属性        |
| [PCB_PrimitiveObject](../../pro-api-types/PCB-PCB编辑/PCB_PrimitiveObject.md)       | 二进制对象  |

📖 [查看 PCB 模块完整文档](../../pro-api-types/PCB-PCB编辑/README.md)

---

## SCH-原理图

**核心功能**: 原理图文档操作、器件放置、导线连接、网表生成

### 核心控制类 (7个)

| API类                                                                        | 功能描述       |
| ---------------------------------------------------------------------------- | -------------- |
| [SCH_Document](../../pro-api-types/SCH-原理图/SCH_Document.md)               | 原理图文档操作 |
| [SCH_Drc](../../pro-api-types/SCH-原理图/SCH_Drc.md)                         | 设计规则检查   |
| [SCH_Event](../../pro-api-types/SCH-原理图/SCH_Event.md)                     | 事件监听       |
| [SCH_Netlist](../../pro-api-types/SCH-原理图/SCH_Netlist.md)                 | 网表管理       |
| [SCH_ManufactureData](../../pro-api-types/SCH-原理图/SCH_ManufactureData.md) | 生产资料导出   |
| [SCH_SelectControl](../../pro-api-types/SCH-原理图/SCH_SelectControl.md)     | 选择控制       |
| [SCH_Utils](../../pro-api-types/SCH-原理图/SCH_Utils.md)                     | 工具类         |

### 图元类 (10个)

| API类                                                                              | 功能描述 |
| ---------------------------------------------------------------------------------- | -------- |
| [SCH_Primitive](../../pro-api-types/SCH-原理图/SCH_Primitive.md)                   | 图元基类 |
| [SCH_PrimitiveComponent](../../pro-api-types/SCH-原理图/SCH_PrimitiveComponent.md) | 器件     |
| [SCH_PrimitivePin](../../pro-api-types/SCH-原理图/SCH_PrimitivePin.md)             | 引脚     |
| [SCH_PrimitiveWire](../../pro-api-types/SCH-原理图/SCH_PrimitiveWire.md)           | 导线     |
| [SCH_PrimitiveBus](../../pro-api-types/SCH-原理图/SCH_PrimitiveBus.md)             | 总线     |
| [SCH_PrimitiveArc](../../pro-api-types/SCH-原理图/SCH_PrimitiveArc.md)             | 圆弧     |
| [SCH_PrimitiveCircle](../../pro-api-types/SCH-原理图/SCH_PrimitiveCircle.md)       | 圆       |
| [SCH_PrimitiveRectangle](../../pro-api-types/SCH-原理图/SCH_PrimitiveRectangle.md) | 矩形     |
| [SCH_PrimitivePolygon](../../pro-api-types/SCH-原理图/SCH_PrimitivePolygon.md)     | 多边形   |
| [SCH_PrimitiveText](../../pro-api-types/SCH-原理图/SCH_PrimitiveText.md)           | 文本     |

📖 [查看 SCH 模块完整文档](../../pro-api-types/SCH-原理图/README.md)

---

## LIB-综合库

**核心功能**: 器件搜索、符号封装管理、立创C编号查询

| API类                                                                      | 功能描述     | 常用方法                           |
| -------------------------------------------------------------------------- | ------------ | ---------------------------------- |
| [LIB_Device](../../pro-api-types/LIB-综合库/LIB_Device.md)                 | 器件管理     | `search`, `getByLcscIds`, `create` |
| [LIB_Symbol](../../pro-api-types/LIB-综合库/LIB_Symbol.md)                 | 符号管理     | `get`, `create`                    |
| [LIB_Footprint](../../pro-api-types/LIB-综合库/LIB_Footprint.md)           | 封装管理     | `get`, `create`                    |
| [LIB_3DModel](../../pro-api-types/LIB-综合库/LIB_3DModel.md)               | 3D模型管理   | `get`                              |
| [LIB_Cbb](../../pro-api-types/LIB-综合库/LIB_Cbb.md)                       | 复用模块管理 | `get`, `create`                    |
| [LIB_Classification](../../pro-api-types/LIB-综合库/LIB_Classification.md) | 库分类索引   | `get`                              |
| [LIB_LibrariesList](../../pro-api-types/LIB-综合库/LIB_LibrariesList.md)   | 库列表管理   | `get`                              |
| [LIB_PanelLibrary](../../pro-api-types/LIB-综合库/LIB_PanelLibrary.md)     | 面板库管理   | `get`                              |

⚠️ **注意**: LIB 模块大部分 API 处于 Beta 阶段

📖 [查看 LIB 模块完整文档](../../pro-api-types/LIB-综合库/README.md)

---

## PNL-面板

**核心功能**: 面板文档操作

| API类                                                        | 功能描述     |
| ------------------------------------------------------------ | ------------ |
| [PNL_Document](../../pro-api-types/PNL-面板/PNL_Document.md) | 面板文档操作 |

📖 [查看 PNL 模块完整文档](../../pro-api-types/PNL-面板/README.md)

---

## 🔗 相关资源

- 📖 [完整API类型文档](../../pro-api-types/README.md) - 所有API的详细文档
- 📘 [API使用指南](../../pro-api-types/使用指南.md) - 包含10+个代码示例
- 💡 [实战案例](../05-实战案例/README.md) - 真实场景的完整案例
- 🌐 [官方在线文档](https://prodocs.lceda.cn/cn/api/)

---

## ⚠️ 重要提示

### Beta API

部分API标记为 ⚠️ **Beta 阶段**，表示：

- API可能在未来版本中变更
- 使用时需要谨慎
- 建议做好兼容性处理

### 单位系统

- **原理图**: 使用 `0.01 inch` 为单位
- **PCB**: 使用 `mil` 为单位
- 使用 `SYS_Unit` 进行单位转换

### 异步操作

大部分 API 返回 `Promise`，需要使用 `async/await`:

```typescript
async function example() {
	const project = await api.dmt.DMT_Project.getCurrentProjectInfo();
	console.log(project);
}
```

---

<p align="center">
  <a href="../README.md">🏠 返回首页</a> • 
  <a href="./常用API速查.md">常用API速查 →</a>
</p>
