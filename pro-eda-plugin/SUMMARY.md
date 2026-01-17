# 嘉立创EDA插件开发知识库 - 完整目录

## 📖 基础部分

### [首页](README.md)

---

## 1️⃣ 入门指南

- [入门指南概览](01-入门指南/README.md)
- [环境搭建](01-入门指南/环境搭建.md)
    - Node.js 安装
    - TypeScript 环境配置
    - 开发工具推荐
    - 项目初始化
- [创建第一个插件](01-入门指南/创建第一个插件.md)
    - Hello World 插件
    - 项目结构解析
    - 配置文件编写
    - 插件调试运行
    - 打包和安装
- [核心概念](01-入门指南/核心概念.md)
    - 扩展系统架构
    - 沙箱环境
    - 全局对象 (api)
    - 生命周期
    - 权限系统

---

## 2️⃣ 用户指南

- [用户指南概览](02-用户指南/README.md)
- [获取扩展](02-用户指南/获取扩展.md)
    - 扩展广场
    - 在线下载
    - 本地导入
- [安装扩展](02-用户指南/安装扩展.md)
    - 打开扩展管理器
    - 导入 .eext 文件
    - 安装验证
    - 卸载扩展
- [扩展设置](02-用户指南/扩展设置.md)
    - 启用/禁用扩展
    - 外部交互权限
    - 菜单显示配置
    - 快捷键设置

---

## 3️⃣ 开发指南

- [开发指南概览](03-开发指南/README.md)
- [扩展API介绍](03-开发指南/扩展API介绍.md)
    - 什么是扩展API
    - 能力边界
    - API模块分类
    - 版本兼容性
- [快速开始](03-开发指南/快速开始.md)
    - 项目模板
    - 目录结构
    - 编写入口文件
    - 注册菜单命令
    - 调试插件
- [配置文件详解](03-开发指南/配置文件详解.md)
    - eext.json 结构
    - 必填字段说明
    - menus 菜单配置
    - permissions 权限声明
    - 多扩展打包
    - 依赖管理
- [多语言支持](03-开发指南/多语言支持.md)
    - 多语言资源文件
    - 目录结构约定
    - SYS_I18n API 使用
    - 语言切换
    - 最佳实践
- [内联框架](03-开发指南/内联框架.md)
    - 什么是内联框架
    - SYS_IFrame API
    - 创建内嵌页面
    - 消息通信
    - React/Vue 集成
    - 完整示例
- [错误处理](03-开发指南/错误处理.md)
    - Try/Catch 使用
    - Promise 错误处理
    - 全局异常监听
    - SYS_Log 日志记录
    - 错误上报
    - 用户友好提示

---

## 4️⃣ API参考

- [API参考概览](04-API参考/README.md)
- [常用API速查表](04-API参考/常用API速查.md)

### 4.1 SYS - 系统模块 (25类)

**UI交互**

- [SYS_Dialog - 对话框](../pro-api-types/SYS-系统/SYS_Dialog.md)
- [SYS_Message - 消息通知](../pro-api-types/SYS-系统/SYS_Message.md)
- [SYS_MessageBox - 消息框](../pro-api-types/SYS-系统/SYS_MessageBox.md)
- [SYS_ToastMessage - 吐司消息](../pro-api-types/SYS-系统/SYS_ToastMessage.md)
- [SYS_HeaderMenu - 顶部菜单](../pro-api-types/SYS-系统/SYS_HeaderMenu.md)
- [SYS_RightClickMenu - 右键菜单](../pro-api-types/SYS-系统/SYS_RightClickMenu.md)
- [SYS_PanelControl - 面板控制](../pro-api-types/SYS-系统/SYS_PanelControl.md)
- [SYS_Window - 窗口管理](../pro-api-types/SYS-系统/SYS_Window.md)

**文件与系统**

- [SYS_FileSystem - 文件系统](../pro-api-types/SYS-系统/SYS_FileSystem.md)
- [SYS_FileManager - 文件管理](../pro-api-types/SYS-系统/SYS_FileManager.md)
- [SYS_Storage - 本地存储](../pro-api-types/SYS-系统/SYS_Storage.md)
- [SYS_Environment - 运行环境](../pro-api-types/SYS-系统/SYS_Environment.md)
- [SYS_Setting - 设置管理](../pro-api-types/SYS-系统/SYS_Setting.md)
- [SYS_Tool - 工具类](../pro-api-types/SYS-系统/SYS_Tool.md)

**通信与消息**

- [SYS_MessageBus - 消息总线](../pro-api-types/SYS-系统/SYS_MessageBus.md)
- [SYS_WebSocket - WebSocket](../pro-api-types/SYS-系统/SYS_WebSocket.md)
- [SYS_ClientUrl - 外部请求](../pro-api-types/SYS-系统/SYS_ClientUrl.md)

**多媒体与工具**

- [SYS_IFrame - 内联框架](../pro-api-types/SYS-系统/SYS_IFrame.md)
- [SYS_I18n - 多语言](../pro-api-types/SYS-系统/SYS_I18n.md)
- [SYS_FontManager - 字体管理](../pro-api-types/SYS-系统/SYS_FontManager.md)
- [SYS_Unit - 单位转换](../pro-api-types/SYS-系统/SYS_Unit.md)
- [SYS_Timer - 定时器](../pro-api-types/SYS-系统/SYS_Timer.md)
- [SYS_Log - 日志](../pro-api-types/SYS-系统/SYS_Log.md)
- [SYS_LoadingAndProgressBar - 加载进度](../pro-api-types/SYS-系统/SYS_LoadingAndProgressBar.md)
- [SYS_ShortcutKey - 快捷键](../pro-api-types/SYS-系统/SYS_ShortcutKey.md)

### 4.2 DMT - 文档树模块 (10类)

- [DMT_Project - 工程管理](../pro-api-types/DMT-文档树/DMT_Project.md)
- [DMT_EditorControl - 编辑器控制](../pro-api-types/DMT-文档树/DMT_EditorControl.md)
- [DMT_Schematic - 原理图管理](../pro-api-types/DMT-文档树/DMT_Schematic.md)
- [DMT_Pcb - PCB管理](../pro-api-types/DMT-文档树/DMT_Pcb.md)
- [DMT_Board - 板子管理](../pro-api-types/DMT-文档树/DMT_Board.md)
- [DMT_Panel - 面板管理](../pro-api-types/DMT-文档树/DMT_Panel.md)
- [DMT_Folder - 文件夹管理](../pro-api-types/DMT-文档树/DMT_Folder.md)
- [DMT_SelectControl - 选择控制](../pro-api-types/DMT-文档树/DMT_SelectControl.md)
- [DMT_Team - 团队管理](../pro-api-types/DMT-文档树/DMT_Team.md)
- [DMT_Workspace - 工作区管理](../pro-api-types/DMT-文档树/DMT_Workspace.md)

### 4.3 PCB - PCB编辑模块 (24类)

**核心控制**

- [PCB_Document - 文档操作](../pro-api-types/PCB-PCB编辑/PCB_Document.md)
- [PCB_Drc - 设计规则检查](../pro-api-types/PCB-PCB编辑/PCB_Drc.md)
- [PCB_Layer - 图层管理](../pro-api-types/PCB-PCB编辑/PCB_Layer.md)
- [PCB_ManufactureData - 生产资料](../pro-api-types/PCB-PCB编辑/PCB_ManufactureData.md)
- [PCB_Net - 网络管理](../pro-api-types/PCB-PCB编辑/PCB_Net.md)
- [PCB_Event - 事件监听](../pro-api-types/PCB-PCB编辑/PCB_Event.md)
- [PCB_SelectControl - 选择控制](../pro-api-types/PCB-PCB编辑/PCB_SelectControl.md)

**数学与工具**

- [PCB_MathPolygon - 多边形运算](../pro-api-types/PCB-PCB编辑/PCB_MathPolygon.md)

**图元类**

- [PCB_Primitive - 图元基类](../pro-api-types/PCB-PCB编辑/PCB_Primitive.md)
- [PCB_PrimitiveLine - 直线](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveLine.md)
- [PCB_PrimitiveArc - 圆弧](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveArc.md)
- [PCB_PrimitivePolyline - 折线](../pro-api-types/PCB-PCB编辑/PCB_PrimitivePolyline.md)
- [PCB_PrimitiveComponent - 器件](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveComponent.md)
- [PCB_PrimitivePad - 焊盘](../pro-api-types/PCB-PCB编辑/PCB_PrimitivePad.md)
- [PCB_PrimitiveVia - 过孔](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveVia.md)
- [PCB_PrimitivePour - 覆铜边框](../pro-api-types/PCB-PCB编辑/PCB_PrimitivePour.md)
- [PCB_PrimitivePoured - 覆铜填充](../pro-api-types/PCB-PCB编辑/PCB_PrimitivePoured.md)
- [PCB_PrimitiveRegion - 禁止/约束区](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveRegion.md)
- [PCB_PrimitiveFill - 填充](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveFill.md)
- [PCB_PrimitiveImage - 图像](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveImage.md)
- [PCB_PrimitiveString - 文本](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveString.md)
- [PCB_PrimitiveDimension - 尺寸标注](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveDimension.md)
- [PCB_PrimitiveAttribute - 属性](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveAttribute.md)
- [PCB_PrimitiveObject - 二进制对象](../pro-api-types/PCB-PCB编辑/PCB_PrimitiveObject.md)

### 4.4 SCH - 原理图模块 (17类)

**核心控制**

- [SCH_Document - 文档操作](../pro-api-types/SCH-原理图/SCH_Document.md)
- [SCH_Drc - 设计规则检查](../pro-api-types/SCH-原理图/SCH_Drc.md)
- [SCH_Event - 事件监听](../pro-api-types/SCH-原理图/SCH_Event.md)
- [SCH_Netlist - 网表管理](../pro-api-types/SCH-原理图/SCH_Netlist.md)
- [SCH_ManufactureData - 生产资料](../pro-api-types/SCH-原理图/SCH_ManufactureData.md)
- [SCH_SelectControl - 选择控制](../pro-api-types/SCH-原理图/SCH_SelectControl.md)
- [SCH_Utils - 工具类](../pro-api-types/SCH-原理图/SCH_Utils.md)

**图元类**

- [SCH_Primitive - 图元基类](../pro-api-types/SCH-原理图/SCH_Primitive.md)
- [SCH_PrimitiveComponent - 器件](../pro-api-types/SCH-原理图/SCH_PrimitiveComponent.md)
- [SCH_PrimitivePin - 引脚](../pro-api-types/SCH-原理图/SCH_PrimitivePin.md)
- [SCH_PrimitiveWire - 导线](../pro-api-types/SCH-原理图/SCH_PrimitiveWire.md)
- [SCH_PrimitiveBus - 总线](../pro-api-types/SCH-原理图/SCH_PrimitiveBus.md)
- [SCH_PrimitiveArc - 圆弧](../pro-api-types/SCH-原理图/SCH_PrimitiveArc.md)
- [SCH_PrimitiveCircle - 圆](../pro-api-types/SCH-原理图/SCH_PrimitiveCircle.md)
- [SCH_PrimitiveRectangle - 矩形](../pro-api-types/SCH-原理图/SCH_PrimitiveRectangle.md)
- [SCH_PrimitivePolygon - 多边形](../pro-api-types/SCH-原理图/SCH_PrimitivePolygon.md)
- [SCH_PrimitiveText - 文本](../pro-api-types/SCH-原理图/SCH_PrimitiveText.md)

### 4.5 LIB - 综合库模块 (8类)

- [LIB_Device - 器件管理](../pro-api-types/LIB-综合库/LIB_Device.md)
- [LIB_Symbol - 符号管理](../pro-api-types/LIB-综合库/LIB_Symbol.md)
- [LIB_Footprint - 封装管理](../pro-api-types/LIB-综合库/LIB_Footprint.md)
- [LIB_3DModel - 3D模型](../pro-api-types/LIB-综合库/LIB_3DModel.md)
- [LIB_Cbb - 复用模块](../pro-api-types/LIB-综合库/LIB_Cbb.md)
- [LIB_Classification - 库分类](../pro-api-types/LIB-综合库/LIB_Classification.md)
- [LIB_LibrariesList - 库列表](../pro-api-types/LIB-综合库/LIB_LibrariesList.md)
- [LIB_PanelLibrary - 面板库](../pro-api-types/LIB-综合库/LIB_PanelLibrary.md)

### 4.6 PNL - 面板模块 (1类)

- [PNL_Document - 面板文档](../pro-api-types/PNL-面板/PNL_Document.md)

---

## 5️⃣ 实战案例

- [实战案例概览](05-实战案例/README.md)
- [UI交互案例](05-实战案例/UI交互案例.md)
    - 显示信息对话框
    - 确认对话框
    - 输入对话框
    - 选择对话框
    - 消息通知
    - 自定义面板
    - 右键菜单
- [图元操作案例](05-实战案例/图元操作案例.md)
    - PCB绘制直线
    - PCB绘制圆弧
    - 创建器件
    - 修改图元属性
    - 删除图元
    - 监听图元变化
    - 批量操作图元
- [文件处理案例](05-实战案例/文件处理案例.md)
    - 读取文件
    - 写入文件
    - 文件选择对话框
    - 目录选择对话框
    - 文件夹遍历
    - 本地存储
- [数据处理案例](05-实战案例/数据处理案例.md)
    - 导出Gerber
    - 导出BOM
    - 导出坐标文件
    - DRC检查
    - 网表分析
    - 器件搜索
    - 批量处理

---

## 6️⃣ 发布流程

- [发布流程概览](06-发布流程/README.md)
- [打包配置](06-发布流程/打包配置.md)
    - 打包前检查
    - package.json 配置
    - eext.json 完善
    - 资源文件整理
    - 打包命令
    - 测试 .eext 文件
- [测试清单](06-发布流程/测试清单.md)
    - 功能测试
    - 兼容性测试
    - 性能测试
    - 安全测试
    - 用户体验测试
- [发布到商店](06-发布流程/发布到商店.md)
    - 注册开发者账号
    - 提交扩展
    - 审核要求
    - 版本更新
    - 发布后维护

---

## 7️⃣ 最佳实践

- [最佳实践概览](07-最佳实践/README.md)
- [代码组织](07-最佳实践/代码组织.md)
    - 项目结构设计
    - 模块化开发
    - TypeScript 最佳实践
    - 命名规范
    - 注释规范
- [性能优化](07-最佳实践/性能优化.md)
    - 减少API调用
    - 异步操作优化
    - 内存管理
    - 事件监听优化
    - 图元批量操作
    - 缓存策略
- [安全建议](07-最佳实践/安全建议.md)
    - 权限最小化原则
    - 输入验证
    - 文件操作安全
    - 网络请求安全
    - 用户数据保护
- [常见问题FAQ](07-最佳实践/常见问题.md)
    - 安装和配置问题
    - API调用问题
    - 调试问题
    - 打包和发布问题
    - 性能问题

---

## 📚 附录

- [完整API文档](../pro-api-types/README.md)
- [API使用指南](../pro-api-types/使用指南.md)
- [官方文档](https://prodocs.lceda.cn/cn/api/)
- [扩展广场](https://pro.lceda.cn/extension)

---

<p align="center">
  <em>最后更新: 2026年1月</em>
</p>
