# JLCEDA Pro API 类型文档

> 嘉立创 EDA 专业版扩展开发 API 类型定义文档库

本文档库将嘉立创 EDA Professional API 按功能模块进行分类整理，便于开发者快速查阅和学习。

## 🚀 快速导航

- **[使用指南](./使用指南.md)** - 快速开始、常用示例、最佳实践
- **模块文档** - 查看下方各模块的详细 API 文档

## 📚 模块导航

### [DMT - 文档树](./DMT-文档树/README.md)

工程、板子、原理图、PCB、面板等文档管理

**包含 10 个类**

<details>
<summary>展开查看所有类</summary>

- [DMT_Board](./DMT-文档树/DMT_Board.md)
- [DMT_EditorControl](./DMT-文档树/DMT_EditorControl.md)
- [DMT_Folder](./DMT-文档树/DMT_Folder.md)
- [DMT_Panel](./DMT-文档树/DMT_Panel.md)
- [DMT_Pcb](./DMT-文档树/DMT_Pcb.md)
- [DMT_Project](./DMT-文档树/DMT_Project.md)
- [DMT_Schematic](./DMT-文档树/DMT_Schematic.md)
- [DMT_SelectControl](./DMT-文档树/DMT_SelectControl.md)
- [DMT_Team](./DMT-文档树/DMT_Team.md)
- [DMT_Workspace](./DMT-文档树/DMT_Workspace.md)

</details>

### [LIB - 综合库](./LIB-综合库/README.md)

器件、符号、封装、3D模型等库管理

**包含 8 个类**

<details>
<summary>展开查看所有类</summary>

- [LIB_3DModel](./LIB-综合库/LIB_3DModel.md)
- [LIB_Cbb](./LIB-综合库/LIB_Cbb.md)
- [LIB_Classification](./LIB-综合库/LIB_Classification.md)
- [LIB_Device](./LIB-综合库/LIB_Device.md)
- [LIB_Footprint](./LIB-综合库/LIB_Footprint.md)
- [LIB_LibrariesList](./LIB-综合库/LIB_LibrariesList.md)
- [LIB_PanelLibrary](./LIB-综合库/LIB_PanelLibrary.md)
- [LIB_Symbol](./LIB-综合库/LIB_Symbol.md)

</details>

### [PCB - PCB编辑](./PCB-PCB编辑/README.md)

PCB文档操作和图元管理

**包含 24 个类**

<details>
<summary>展开查看所有类</summary>

- [PCB_Document](./PCB-PCB编辑/PCB_Document.md)
- [PCB_Drc](./PCB-PCB编辑/PCB_Drc.md)
- [PCB_Event](./PCB-PCB编辑/PCB_Event.md)
- [PCB_Layer](./PCB-PCB编辑/PCB_Layer.md)
- [PCB_ManufactureData](./PCB-PCB编辑/PCB_ManufactureData.md)
- [PCB_MathPolygon](./PCB-PCB编辑/PCB_MathPolygon.md)
- [PCB_Net](./PCB-PCB编辑/PCB_Net.md)
- [PCB_Primitive](./PCB-PCB编辑/PCB_Primitive.md)
- [PCB_PrimitiveArc](./PCB-PCB编辑/PCB_PrimitiveArc.md)
- [PCB_PrimitiveAttribute](./PCB-PCB编辑/PCB_PrimitiveAttribute.md)
- [PCB_PrimitiveComponent](./PCB-PCB编辑/PCB_PrimitiveComponent.md)
- [PCB_PrimitiveDimension](./PCB-PCB编辑/PCB_PrimitiveDimension.md)
- [PCB_PrimitiveFill](./PCB-PCB编辑/PCB_PrimitiveFill.md)
- [PCB_PrimitiveImage](./PCB-PCB编辑/PCB_PrimitiveImage.md)
- [PCB_PrimitiveLine](./PCB-PCB编辑/PCB_PrimitiveLine.md)
- [PCB_PrimitiveObject](./PCB-PCB编辑/PCB_PrimitiveObject.md)
- [PCB_PrimitivePad](./PCB-PCB编辑/PCB_PrimitivePad.md)
- [PCB_PrimitivePolyline](./PCB-PCB编辑/PCB_PrimitivePolyline.md)
- [PCB_PrimitivePour](./PCB-PCB编辑/PCB_PrimitivePour.md)
- [PCB_PrimitivePoured](./PCB-PCB编辑/PCB_PrimitivePoured.md)
- [PCB_PrimitiveRegion](./PCB-PCB编辑/PCB_PrimitiveRegion.md)
- [PCB_PrimitiveString](./PCB-PCB编辑/PCB_PrimitiveString.md)
- [PCB_PrimitiveVia](./PCB-PCB编辑/PCB_PrimitiveVia.md)
- [PCB_SelectControl](./PCB-PCB编辑/PCB_SelectControl.md)

</details>

### [SCH - 原理图](./SCH-原理图/README.md)

原理图文档操作和图元管理

**包含 17 个类**

<details>
<summary>展开查看所有类</summary>

- [SCH_Document](./SCH-原理图/SCH_Document.md)
- [SCH_Drc](./SCH-原理图/SCH_Drc.md)
- [SCH_Event](./SCH-原理图/SCH_Event.md)
- [SCH_Netlist](./SCH-原理图/SCH_Netlist.md)
- [SCH_ManufactureData](./SCH-原理图/SCH_ManufactureData.md)
- [SCH_Primitive](./SCH-原理图/SCH_Primitive.md)
- [SCH_PrimitiveArc](./SCH-原理图/SCH_PrimitiveArc.md)
- [SCH_PrimitiveBus](./SCH-原理图/SCH_PrimitiveBus.md)
- [SCH_PrimitiveCircle](./SCH-原理图/SCH_PrimitiveCircle.md)
- [SCH_PrimitiveComponent](./SCH-原理图/SCH_PrimitiveComponent.md)
- [SCH_PrimitivePin](./SCH-原理图/SCH_PrimitivePin.md)
- [SCH_PrimitivePolygon](./SCH-原理图/SCH_PrimitivePolygon.md)
- [SCH_PrimitiveRectangle](./SCH-原理图/SCH_PrimitiveRectangle.md)
- [SCH_PrimitiveText](./SCH-原理图/SCH_PrimitiveText.md)
- [SCH_PrimitiveWire](./SCH-原理图/SCH_PrimitiveWire.md)
- [SCH_SelectControl](./SCH-原理图/SCH_SelectControl.md)
- [SCH_Utils](./SCH-原理图/SCH_Utils.md)

</details>

### [PNL - 面板](./PNL-面板/README.md)

面板文档操作

**包含 1 个类**

<details>
<summary>展开查看所有类</summary>

- [PNL_Document](./PNL-面板/PNL_Document.md)

</details>

### [SYS - 系统](./SYS-系统/README.md)

UI交互、文件管理、网络通信等系统功能

**包含 25 个类**

<details>
<summary>展开查看所有类</summary>

- [SYS_ClientUrl](./SYS-系统/SYS_ClientUrl.md)
- [SYS_Dialog](./SYS-系统/SYS_Dialog.md)
- [SYS_Environment](./SYS-系统/SYS_Environment.md)
- [SYS_FileManager](./SYS-系统/SYS_FileManager.md)
- [SYS_FileSystem](./SYS-系统/SYS_FileSystem.md)
- [SYS_FontManager](./SYS-系统/SYS_FontManager.md)
- [SYS_HeaderMenu](./SYS-系统/SYS_HeaderMenu.md)
- [SYS_I18n](./SYS-系统/SYS_I18n.md)
- [SYS_IFrame](./SYS-系统/SYS_IFrame.md)
- [SYS_LoadingAndProgressBar](./SYS-系统/SYS_LoadingAndProgressBar.md)
- [SYS_Log](./SYS-系统/SYS_Log.md)
- [SYS_Message](./SYS-系统/SYS_Message.md)
- [SYS_MessageBox](./SYS-系统/SYS_MessageBox.md)
- [SYS_MessageBus](./SYS-系统/SYS_MessageBus.md)
- [SYS_PanelControl](./SYS-系统/SYS_PanelControl.md)
- [SYS_RightClickMenu](./SYS-系统/SYS_RightClickMenu.md)
- [SYS_Setting](./SYS-系统/SYS_Setting.md)
- [SYS_ShortcutKey](./SYS-系统/SYS_ShortcutKey.md)
- [SYS_Storage](./SYS-系统/SYS_Storage.md)
- [SYS_Timer](./SYS-系统/SYS_Timer.md)
- [SYS_ToastMessage](./SYS-系统/SYS_ToastMessage.md)
- [SYS_Tool](./SYS-系统/SYS_Tool.md)
- [SYS_Unit](./SYS-系统/SYS_Unit.md)
- [SYS_WebSocket](./SYS-系统/SYS_WebSocket.md)
- [SYS_Window](./SYS-系统/SYS_Window.md)

</details>

---

## 📖 使用说明

1. **新手入门**: 先阅读[使用指南](./使用指南.md)，了解基本用法和常见示例
2. **查找 API**: 根据功能需求选择对应的模块
3. **查看详情**: 在模块中查找所需的类，查看方法和参数说明
4. **开始开发**: 参考方法签名进行扩展开发

## ⚠️ 标记说明

- ⚠️ **Beta** - 该 API 处于测试阶段，可能会有变更

## 📝 文档信息

- **生成时间**: 2026/1/17 10:58:50
- **类总数**: 85
- **模块数**: 6
