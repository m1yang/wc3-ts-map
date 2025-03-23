/** @noSelfInFile **/



/**
 * 获取鼠标在游戏内的坐标X  
 * 获取鼠标在游戏内的坐标X
 *
 * @BZ_HW
 */
declare function DzGetMouseTerrainX(): number;

/**
 * 获取鼠标在游戏内的坐标Y  
 * 获取鼠标在游戏内的坐标Y
 *
 * @BZ_HW
 */
declare function DzGetMouseTerrainY(): number;

/**
 * 获取鼠标在游戏内的坐标Z  
 * 获取鼠标在游戏内的坐标Z
 *
 * @BZ_HW
 */
declare function DzGetMouseTerrainZ(): number;

/**
 * 鼠标是否在游戏内  
 * 鼠标是否在游戏内
 *
 * @BZ_HW
 */
declare function DzIsMouseOverUI(): boolean;

/**
 * 获取鼠标在屏幕的坐标X  
 * 获取鼠标在屏幕的坐标X
 *
 * @BZ_HW
 */
declare function DzGetMouseX(): number;

/**
 * 获取鼠标在屏幕的坐标Y  
 * 获取鼠标在屏幕的坐标Y
 *
 * @BZ_HW
 */
declare function DzGetMouseY(): number;

/**
 * 获取鼠标游戏窗口坐标X  
 * 获取鼠标游戏窗口坐标X
 *
 * @BZ_HW
 */
declare function DzGetMouseXRelative(): number;

/**
 * 获取鼠标游戏窗口坐标Y  
 * 获取鼠标游戏窗口坐标Y
 *
 * @BZ_HW
 */
declare function DzGetMouseYRelative(): number;

/**
 * 设置鼠标的坐标  
 * 设置鼠标的坐标为 (${x}, ${y})
 *
 * @BZ_HW
 */
declare function DzSetMousePos(x: number, y: number): void;
declare function DzTriggerRegisterMouseEvent(trig: trigger, btn: number, status: number, sync: boolean, func: string): void;
declare function DzTriggerRegisterMouseEventByCode(trig: trigger, btn: number, status: number, sync: boolean, funcHandle: () => void): void;
declare function DzTriggerRegisterKeyEvent(trig: trigger, key: number, status: number, sync: boolean, func: string): void;
declare function DzTriggerRegisterKeyEventByCode(trig: trigger, key: number, status: number, sync: boolean, funcHandle: () => void): void;
declare function DzTriggerRegisterMouseWheelEvent(trig: trigger, sync: boolean, func: string): void;
declare function DzTriggerRegisterMouseWheelEventByCode(trig: trigger, sync: boolean, funcHandle: () => void): void;
declare function DzTriggerRegisterMouseMoveEvent(trig: trigger, sync: boolean, func: string): void;
declare function DzTriggerRegisterMouseMoveEventByCode(trig: trigger, sync: boolean, funcHandle: () => void): void;

/**
 * 事件响应 - 获取触发的按键  
 * 获取触发的按键
 *
 * @remark
 * 响应 [硬件] - 按键事件
 *
 * @BZ_HW
 */
declare function DzGetTriggerKey(): number;

/**
 * 事件响应 - 获取滚轮变化值  
 * 获取滚轮变化值
 *
 * @remark
 * 响应 [硬件] - 鼠标滚轮事件，正负区分上下
 *
 * @BZ_HW
 */
declare function DzGetWheelDelta(): number;

/**
 * 判断按键是否按下  
 * 判断 ${按键} 是否按下
 *
 * @BZ_GUI
 */
declare function DzIsKeyDown(iKey: number): boolean;

/**
 * 事件响应 - 获取触发硬件事件的玩家  
 * 获取触发硬件事件的玩家
 *
 * @remark
 * 响应 [硬件] - 按键事件 滚轮事件 窗口大小变化事件
 *
 * @BZ_HW
 */
declare function DzGetTriggerKeyPlayer(): player;

/**
 * 获取war3窗口宽度  
 * 获取魔兽窗口宽度
 *
 * @BZ_HW
 */
declare function DzGetWindowWidth(): number;

/**
 * 获取魔兽窗口高度  
 * 获取魔兽窗口高度
 *
 * @BZ_HW
 */
declare function DzGetWindowHeight(): number;

/**
 * 获取魔兽窗口X坐标  
 * 获取魔兽窗口X坐标
 *
 * @BZ_HW
 */
declare function DzGetWindowX(): number;

/**
 * 获取魔兽窗口Y坐标  
 * 获取魔兽窗口Y坐标
 *
 * @BZ_HW
 */
declare function DzGetWindowY(): number;
declare function DzTriggerRegisterWindowResizeEvent(trig: trigger, sync: boolean, func: string): void;
declare function DzTriggerRegisterWindowResizeEventByCode(trig: trigger, sync: boolean, funcHandle: () => void): void;

/**
 * 判断游戏窗口是否处于活动状态[NEW]  
 * 判断窗口是否处于活动状态
 *
 * @BZ_HW
 */
declare function DzIsWindowActive(): boolean;

/**
 * 设置可破坏物位置 [BZAPI]  
 * 设置 ${可破坏物} 的坐标为 (${x}, ${y})
 *
 * @TC_DESTRUCT
 */
declare function DzDestructablePosition(d: destructable, x: number, y: number): void;

/**
 * 设置单位位置 - 本地调用 [BZAPI]  
 * 设置 ${单位} 的坐标为 (${x}, ${y})
 *
 * @TC_UNIT
 */
declare function DzSetUnitPosition(whichUnit: unit, x: number, y: number): void;

/**
 * 异步执行函数  
 * 异步执行函数 ${funcName}
 *
 * @BZ_SYNC
 */
declare function DzExecuteFunc(funcName: string): void;

/**
 * 获取鼠标指向的单位(异步)  
 * 鼠标指向的单位
 *
 * @BZ_HW
 */
declare function DzGetUnitUnderMouse(): unit;

/**
 * 替换单位贴图 [BZAPI]  
 * 替换 ${单位} 的 贴图:${path} TexId:${texId})
 *
 * @remark
 * 只能替换模型中有Replaceable ID x 贴图的模型，ID为索引。不会替换大头像中的模型
 *
 * @TC_UNIT
 */
declare function DzSetUnitTexture(whichUnit: unit, path: string, texId: number): void;

/**
 * 设置内存数值  
 * 设置内存数据 ${地址}
 *
 * @BZ_HW
 */
declare function DzSetMemory(address: number, value: number): void;

/**
 * 替换单位类型 [BZAPI]  
 * 替换 ${单位} 的 单位类型为:${type}
 *
 * @remark
 * 会替换大头像中的模型
 *
 * @TC_UNIT
 */
declare function DzSetUnitID(whichUnit: unit, id: number): void;

/**
 * 替换单位模型 [BZAPI]  
 * 替换 ${单位} 的 模型:${path}
 *
 * @remark
 * 不会替换大头像中的模型
 *
 * @TC_UNIT
 */
declare function DzSetUnitModel(whichUnit: unit, path: string): void;

/**
 * 原生 - 设置小地图背景贴图  
 * 修改小地图背景贴图为 ${bottomHeight}
 *
 * @BZ_GUI
 */
declare function DzSetWar3MapMap(map: string): void;

/**
 * 获取客户端语言  
 * 获取客户端语言
 *
 * @remark
 * 对不同语言客户端返回不同
 *
 * @BZ_HW
 */
declare function DzGetLocale(): string;

/**
 * 获取升级所需经验 [NEW]  
 * 获取单位 ${unit} 的 ${level}级 升级所需经验
 *
 * @TC_UNIT
 */
declare function DzGetUnitNeededXP(whichUnit: unit, level: number): number;

/**
 * 数据同步  
 * 标签为 ${prefix} 的数据被同步 | 来自平台:${server}
 *
 * @remark
 * 来自平台的参数填false
 *
 * @BZ_SYNC
 */
declare function DzTriggerRegisterSyncData(trig: trigger, prefix: string, server: boolean): void;

/**
 * 同步游戏数据  
 * 同步 标签：${prefix}  发送数据：${data}
 *
 * @BZ_SYNC
 */
declare function DzSyncData(prefix: string, data: string): void;

/**
 * 事件响应 - 获取同步的数据前缀 [NEW]  
 * 获取同步的数据前缀
 *
 * @remark
 * 响应 [同步] - 同步消息事件
 *
 * @BZ_SYNC
 */
declare function DzGetTriggerSyncPrefix(): string;

/**
 * 事件响应 - 获取同步的数据  
 * 获取同步的数据
 *
 * @remark
 * 响应 [同步] - 同步消息事件
 *
 * @BZ_SYNC
 */
declare function DzGetTriggerSyncData(): string;

/**
 * 事件响应 - 获取同步数据的玩家  
 * 获取同步数据的玩家
 *
 * @remark
 * 响应 [同步] - 同步消息事件
 *
 * @BZ_SYNC
 */
declare function DzGetTriggerSyncPlayer(): player;

/**
 * 同步游戏数据（指定长度）[NEW]  
 * 同步 标签：${prefix}  发送数据：${data} 数据长度：${dataLen}
 *
 * @remark
 * 可以按长度同步数据
 *
 * @BZ_SYNC
 */
declare function DzSyncBuffer(prefix: string, data: string, dataLen: number): void;

/**
 * 同步游戏数据（立即）[NEW]  
 * 立即同步 标签：${prefix}  发送数据：${data}
 *
 * @BZ_SYNC
 */
declare function DzSyncDataImmediately(prefix: string, data: string): void;

/**
 * 原生 - 隐藏界面元素  
 * 隐藏所有界面UI
 *
 * @remark
 * 不再在地图初始化时调用则会残留小地图和时钟模型
 *
 * @BZ_GUI
 */
declare function DzFrameHideInterface(): void;

/**
 * 原生 - 修改游戏渲染黑边范围  
 * 修改游戏渲染黑边: 上方高度:${upperHeight} 下方高度:${bottomHeight}
 *
 * @BZ_GUI
 */
declare function DzFrameEditBlackBorders(upperHeight: number, bottomHeight: number): void;

/**
 * 原生 - 单位大头像  
 * 单位大头像
 *
 * @remark
 * 小地图右侧的大头像
 *
 * @BZ_GUI
 */
declare function DzFrameGetPortrait(): number;

/**
 * 原生 - 小地图  
 * 小地图
 *
 * @BZ_GUI
 */
declare function DzFrameGetMinimap(): number;

/**
 * 原生 - 技能按钮  
 * 技能按钮:(${row}, ${calumn})
 *
 * @remark
 * 参考物编中的技能按钮(x,y)坐标
 *
 * @BZ_GUI
 */
declare function DzFrameGetCommandBarButton(row: number, column: number): number;

/**
 * 原生 - 英雄按钮  
 * 英雄按钮:${buttnoid}
 *
 * @remark
 * 左侧的英雄头像，参数表示第N+1个英雄，索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetHeroBarButton(buttonId: number): number;

/**
 * 原生 - 英雄血条  
 * 英雄血条:${buttnoid}
 *
 * @remark
 * 左侧的英雄头像下的血条，参数表示第N+1个英雄，索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetHeroHPBar(buttonId: number): number;

/**
 * 原生 - 英雄蓝条  
 * 英雄蓝条:${buttnoid}
 *
 * @remark
 * 左侧的英雄头像下的蓝条，参数表示第N+1个英雄，索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetHeroManaBar(buttonId: number): number;

/**
 * 原生 - 物品栏按钮  
 * 物品栏按钮:${buttnoid}
 *
 * @remark
 * 索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetItemBarButton(buttonId: number): number;

/**
 * 原生 - 小地图按钮  
 * 小地图按钮:${buttnoid}
 *
 * @remark
 * 小地图右侧竖排按钮，索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetMinimapButton(buttonId: number): number;

/**
 * 原生 - 界面按钮  
 * 界面按钮:${buttnoid}
 *
 * @remark
 * 左上的菜单等按钮，索引从0开始
 *
 * @BZ_GUI
 */
declare function DzFrameGetUpperButtonBarButton(buttonId: number): number;

/**
 * 原生 - 鼠标提示  
 * 鼠标提示
 *
 * @remark
 * 鼠标移动到物品或技能按钮上显示的提示窗，初始位于技能栏上方
 *
 * @BZ_GUI
 */
declare function DzFrameGetTooltip(): number;

/**
 * 原生 - 玩家聊天信息框  
 * 玩家聊天信息框
 *
 * @BZ_GUI
 */
declare function DzFrameGetChatMessage(): number;

/**
 * 原生 - 系统消息框  
 * 系统消息框
 *
 * @remark
 * 包含显示消息给玩家 及 显示Debug消息 等，
 *
 * @BZ_GUI
 */
declare function DzFrameGetUnitMessage(): number;

/**
 * 原生 - 上方消息框  
 * 上方消息框
 *
 * @remark
 * 高维修费用 等消息
 *
 * @BZ_GUI
 */
declare function DzFrameGetTopMessage(): number;

/**
 * 取 RGBA 色值  
 * 将RGB(Alph:${Alpha}，R:${Red} G:${Green} B:${Blue} 转换为色值
 *
 * @remark
 * 返回一个整数，用于设置Frame颜色
 *
 * @BZ_GUI
 */
declare function DzGetColor(r: number, g: number, b: number, a: number): number;
declare function DzFrameSetUpdateCallback(func: string): void;
declare function DzFrameSetUpdateCallbackByCode(funcHandle: () => void): void;

/**
 * 显示/隐藏  
 * 设置 ${frame} 显示:${bottomHeight}
 *
 * @BZ_GUI
 */
declare function DzFrameShow(frame: number, enable: boolean): void;

/**
 * 新建Frame  
 * 新建Frame 名字:${frame} 父节点:${parent} ID:${Id}
 *
 * @remark
 * 名字为fdf文件中的名字，ID默认填0。重复创建同名Frame会导致游戏退出时显示崩溃消息，如需避免可以使用Tag创建
 *
 * @BZ_GUI
 */
declare function DzCreateFrame(frame: string, parent: number, id: number): number;
declare function DzCreateSimpleFrame(frame: string, parent: number, id: number): number;

/**
 * 销毁  
 * 销毁 ${frame}
 *
 * @remark
 * 销毁一个被重复创建过的Frame会导致游戏崩溃，重复创建同名Frame请使用Tag创建
 *
 * @BZ_GUI
 */
declare function DzDestroyFrame(frame: number): void;

/**
 * 加载Toc文件列表  
 * 加载--> ${fileName.toc}
 *
 * @remark
 * 载入自己的fdf列表文件
 *
 * @BZ_GUI
 */
declare function DzLoadToc(fileName: string): void;

/**
 * 设置相对位置  
 * 设置 ${frame} 的 ${Point} 锚点 (跟随Frame-->${relativeFrame} 的 ${relativePoint} 锚点) 偏移(${x}, ${y})
 *
 * @BZ_GUI
 */
declare function DzFrameSetPoint(frame: number, point: number, relativeFrame: number, relativePoint: number, x: number, y: number): void;

/**
 * 设置绝对位置  
 * 设置 ${frame} 的 ${Point} 锚点 在 (${x}, ${y})
 *
 * @BZ_GUI
 */
declare function DzFrameSetAbsolutePoint(frame: number, point: number, x: number, y: number): void;

/**
 * 清空所有锚点  
 * 清空 ${frame} 的 全部锚点
 *
 * @BZ_GUI
 */
declare function DzFrameClearAllPoints(frame: number): void;

/**
 * 启用/禁用  
 * 设置 ${frame} 启用:${bottomHeight}
 *
 * @BZ_GUI
 */
declare function DzFrameSetEnable(name: number, enable: boolean): void;

/**
 * 注册UI事件回调(func name)  
 * 注册 ${frame} 的 ${事件类型} 事件 运行:${func name} 是否同步:${sync}
 *
 * @BZ_GUI
 */
declare function DzFrameSetScript(frame: number, eventId: number, func: string, sync: boolean): void;

/**
 * 注册UI事件回调(func handle)  
 * 注册 ${frame} 的 ${事件类型} 事件 运行:${code handle} 是否同步:${sync}
 *
 * @remark
 * 运行触发器时需要打开同步
 *
 * @BZ_GUI
 */
declare function DzFrameSetScriptByCode(frame: number, eventId: number, funcHandle: () => void, sync: boolean): void;

/**
 * 事件响应 - 获取触发ui的玩家  
 * 获取触发ui的玩家
 *
 * @BZ_GUI
 */
declare function DzGetTriggerUIEventPlayer(): player;

/**
 * 事件响应 - 触发的Frame  
 * 触发的Frame
 *
 * @BZ_GUI
 */
declare function DzGetTriggerUIEventFrame(): number;

/**
 * 获取子Frame  
 * 获取名字为 ${name} 的子Frame  ID:${Id}
 *
 * @remark
 * ID默认填0，同名时优先获取最后被创建的。非Simple类的Frame类型都用此函数来获取子Frame。
 *
 * @BZ_GUI
 */
declare function DzFrameFindByName(name: string, id: number): number;

/**
 * 获取子SimpleFrame  
 * 获取名字为 ${name} 的子SimpleFrame  ID:${Id}
 *
 * @remark
 * ID默认填0，同名时优先获取最后被创建的。SimpleFrame为fdf中的Frame类型。
 *
 * @BZ_GUI
 */
declare function DzSimpleFrameFindByName(name: string, id: number): number;

/**
 * 获取子SimpleFontString  
 * 获取名字为 ${name} 的子SimpleFontString  ID:${Id}
 *
 * @remark
 * ID默认填0，同名时优先获取最后被创建的。SimpleFontString为fdf中的Frame类型。
 *
 * @BZ_GUI
 */
declare function DzSimpleFontStringFindByName(name: string, id: number): number;

/**
 * 获取子SimpleTexture  
 * 获取名字为 ${name} 的子SimpleTexture  ID:${Id}
 *
 * @remark
 * ID默认填0，同名时优先获取最后被创建的。SimpleTexture为fdf中的Frame类型。
 *
 * @BZ_GUI
 */
declare function DzSimpleTextureFindByName(name: string, id: number): number;

/**
 * 原生 - 游戏UI  
 * 游戏UI
 *
 * @remark
 * 一般用作创建自定义UI的父节点
 *
 * @BZ_GUI
 */
declare function DzGetGameUI(): number;

/**
 * 点击  
 * 点击 ${frame}
 *
 * @BZ_GUI
 */
declare function DzClickFrame(frame: number): void;

/**
 * 原生 - 修改屏幕比例(FOV)  
 * 修改屏幕比例(FOV):${val}
 *
 * @BZ_GUI
 */
declare function DzSetCustomFovFix(value: number): void;

/**
 * 开启/关闭宽屏模式  
 * ${enable} 宽屏模式
 *
 * @BZ_GUI
 */
declare function DzEnableWideScreen(enable: boolean): void;

/**
 * 设置文本  
 * 设置 ${frame} 的文本为 ${string}
 *
 * @remark
 * (支持EditBox, TextFrame, TextArea, SimpleFontString、GlueEditBoxWar3、SlashChatBox、TimerTextFrame、TextButtonFrame、GlueTextButton)
 *
 * @BZ_GUI
 */
declare function DzFrameSetText(frame: number, text: string): void;

/**
 * 获取 Frame 内的文字  
 * 获取 ${buttnoid} 的文字
 *
 * @remark
 * （支持EditBox, TextFrame, TextArea, SimpleFontString）
 *
 * @BZ_GUI
 */
declare function DzFrameGetText(frame: number): string;

/**
 * 设置字数限制  
 * 设置 ${frame} 的字数限制为 ${size}
 *
 * @BZ_GUI
 */
declare function DzFrameSetTextSizeLimit(frame: number, size: number): void;

/**
 * 获取 Frame 的 字数限制  
 * 获取 ${frame} 的字数限制
 *
 * @remark
 * （支持EditBox）
 *
 * @BZ_GUI
 */
declare function DzFrameGetTextSizeLimit(frame: number): number;
declare function DzFrameSetTextColor(frame: number, color: number): void;

/**
 * 鼠标所在的Frame控件指针  
 * 鼠标所在的Frame控件指针
 *
 * @remark
 * 不是所有类型的Frame都能响应鼠标，能响应的有BUTTON，TEXT等
 *
 * @BZ_GUI
 */
declare function DzGetMouseFocus(): number;

/**
 * 移动所有锚点到Frame  
 * 移动 ${frame} 的 所有锚点 到 ${frame} 上
 *
 * @BZ_GUI
 */
declare function DzFrameSetAllPoints(frame: number, relativeFrame: number): boolean;

/**
 * 设置焦点  
 * 设置 ${frame} 获取焦点 ${enable}
 *
 * @BZ_GUI
 */
declare function DzFrameSetFocus(frame: number, enable: boolean): boolean;

/**
 * 设置模型  
 * 设置 ${frame} 的模型文件为 ${modelFile} ModelType:${modelType} Flag:${flag}
 *
 * @BZ_GUI
 */
declare function DzFrameSetModel(frame: number, modelFile: string, modelType: number, flag: number): void;

/**
 * 控件是否启用  
 * ${frame} 是否启用
 *
 * @BZ_GUI
 */
declare function DzFrameGetEnable(frame: number): boolean;

/**
 * 设置透明度(0-255)  
 * 设置 ${frame} 的透明度为 ${alpha}
 *
 * @BZ_GUI
 */
declare function DzFrameSetAlpha(frame: number, alpha: number): void;

/**
 * 获取 Frame 的 透明度(0-255)  
 * 获取 ${Frame} 的透明度
 *
 * @BZ_GUI
 */
declare function DzFrameGetAlpha(frame: number): number;

/**
 * 设置动画  
 * 设置 ${frame} 播放序号 ${alpha} 的动画  自动播放:${autocast}
 *
 * @BZ_GUI
 */
declare function DzFrameSetAnimate(frame: number, animId: number, autocast: boolean): void;

/**
 * 设置动画进度  
 * 设置 ${frame} 的动画进度为:${offset}
 *
 * @remark
 * 自动播放为false是可用
 *
 * @BZ_GUI
 */
declare function DzFrameSetAnimateOffset(frame: number, offset: number): void;

/**
 * 设置贴图  
 * 设置 ${frame} 的贴图为:${texture} 是否平铺 ${flag}
 *
 * @remark
 * （支持Backdrop、SimpleStatusBar）
 *
 * @BZ_GUI
 */
declare function DzFrameSetTexture(frame: number, texture: string, flag: number): void;

/**
 * 设置缩放  
 * 设置 ${frame} 的缩放 ${scale}
 *
 * @BZ_GUI
 */
declare function DzFrameSetScale(frame: number, scale: number): void;

/**
 * 设置提示  
 * 设置 ${frame} 的提示Frame为 ${tooltip} 
 *
 * @remark
 * 设置tooltip
 *
 * @BZ_GUI
 */
declare function DzFrameSetTooltip(frame: number, tooltip: number): void;

/**
 * 限制鼠标移动  
 * 限制鼠标在 ${frame} 内: ${enable} 
 *
 * @BZ_GUI
 */
declare function DzFrameCageMouse(frame: number, enable: boolean): void;

/**
 * 获取当前值  
 * 获取 ${frame} 当前值
 *
 * @remark
 * （支持Slider、SimpleStatusBar、StatusBar）
 *
 * @BZ_GUI
 */
declare function DzFrameGetValue(frame: number): number;

/**
 * 设置最大/最小值  
 * 设置 ${frame} 的 最小值为 ${Min} 最大值为 ${Max}
 *
 * @remark
 * （支持Slider、SimpleStatusBar、StatusBar）
 *
 * @BZ_GUI
 */
declare function DzFrameSetMinMaxValue(frame: number, minValue: number, maxValue: number): void;

/**
 * 设置步进值  
 * 设置 ${frame} 的 步进值 为 ${step}
 *
 * @remark
 * （支持Slider）
 *
 * @BZ_GUI
 */
declare function DzFrameSetStepValue(frame: number, step: number): void;

/**
 * 设置当前值  
 * 设置 ${frame} 的 当前值 为 ${value}
 *
 * @remark
 * （支持Slider、SimpleStatusBar、StatusBar）
 *
 * @BZ_GUI
 */
declare function DzFrameSetValue(frame: number, value: number): void;

/**
 * 设置大小  
 * 设置 ${frame} （宽 ${w} 高 ${h}）
 *
 * @BZ_GUI
 */
declare function DzFrameSetSize(frame: number, w: number, h: number): void;

/**
 * 新建Frame [Tag]  
 * 创建 类型:${type} 名字:${frame} 父节点:${parent} 模版:${template} ID:${Id}
 *
 * @remark
 * 此处名字可以自定义，类型和模版填写fdf文件中的内容。通过此函数创建的Frame无法获取到子Frame。
 *
 * @BZ_GUI
 */
declare function DzCreateFrameByTagName(frameType: string, name: string, parent: number, template: string, id: number): number;

/**
 * 设置颜色  
 * 设置 ${frame} 颜色 ${color}
 *
 * @BZ_GUI
 */
declare function DzFrameSetVertexColor(frame: number, color: number): void;
declare function DzOriginalUIAutoResetPoint(enable: boolean): void;

/**
 * 设置优先级  
 * 设置 ${frame} 优先级:${int}
 *
 * @BZ_GUI
 */
declare function DzFrameSetPriority(frame: number, priority: number): void;

/**
 * 设置父窗口   
 * 设置 ${frame} 的父窗口为 ${frame2}
 *
 * @BZ_GUI
 */
declare function DzFrameSetParent(frame: number, parent: number): void;

/**
 * 获取 Frame 的 高度  
 * 获取 ${frame} 的高度
 *
 * @BZ_GUI
 */
declare function DzFrameGetHeight(frame: number): number;

/**
 * 设置字体   
 * 设置 ${frame} 的字体为 ${font}, 大小 ${height}, flag ${flag}
 *
 * @remark
 * 支持EditBox、SimpleFontString、SimpleMessageFrame以及非SimpleFrame类型的例如TEXT，flag作用未知
 *
 * @BZ_GUI
 */
declare function DzFrameSetFont(frame: number, fileName: string, height: number, flag: number): void;

/**
 * 获取 Frame 的 Parent  
 * 获取 ${frame} 的 Parent
 *
 * @BZ_GUI
 */
declare function DzFrameGetParent(frame: number): number;

/**
 * 设置对齐方式  
 * 设置 ${frame} 的对齐方式为 ${align}
 *
 * @remark
 * 支持TextFrame、SimpleFontString、SimpleMessageFrame
 *
 * @BZ_GUI
 */
declare function DzFrameSetTextAlignment(frame: number, align: number): void;

/**
 * 获取 Frame 的 名称  
 * 获取 ${frame} 的 名称
 *
 * @BZ_GUI
 */
declare function DzFrameGetName(frame: number): string;

/**
 * 获取魔兽窗口宽度[NEW]  
 * 获取魔兽窗口宽度
 *
 * @remark
 * 不包括魔兽窗口边框
 *
 * @BZ_HW
 */
declare function DzGetClientWidth(): number;

/**
 * 获取魔兽窗口高度[NEW]  
 * 获取魔兽窗口高度
 *
 * @remark
 * 不包括魔兽窗口边框
 *
 * @BZ_HW
 */
declare function DzGetClientHeight(): number;

/**
 * 控件是否显示[NEW]  
 * ${frame} 是否显示
 *
 * @BZ_GUI
 */
declare function DzFrameIsVisible(frame: number): boolean;

/**
 * 追加文本  
 * 追加 ${frame} 的文本 ${string}
 *
 * @remark
 * 支持TextArea
 *
 * @BZ_GUI
 */
declare function DzFrameAddText(frame: number, text: string): void;

/**
 * 沉默单位[NEW]  
 * 设置单位 ${单位} 的沉默状态为 ${true}
 *
 * @TC_KKAPI
 */
declare function DzUnitSilence(whichUnit: unit, disable: boolean): void;

/**
 * 禁用攻击[NEW]  
 * 设置单位 ${单位}  ${true} 物理攻击
 *
 * @TC_KKAPI
 */
declare function DzUnitDisableAttack(whichUnit: unit, disable: boolean): void;

/**
 * 禁用道具[NEW]  
 * 设置单位 ${单位}  ${true} 物品栏
 *
 * @TC_KKAPI
 */
declare function DzUnitDisableInventory(whichUnit: unit, disable: boolean): void;

/**
 * 刷新小地图[NEW]  
 * 刷新小地图
 *
 * @BZ_GUI
 */
declare function DzUpdateMinimap(): void;

/**
 * 修改单位透明度[NEW]  
 * 设置单位 ${单位} 的透明度为${透明度}  ${true} 强制更新
 *
 * @TC_KKAPI
 */
declare function DzUnitChangeAlpha(whichUnit: unit, alpha: number, forceUpdate: boolean): void;

/**
 * 修改单位选中状态[NEW]  
 * 设置单位 ${单位}  ${state} 被选中
 *
 * @TC_KKAPI
 */
declare function DzUnitSetCanSelect(whichUnit: unit, state: boolean): void;

/**
 * 修改单位是否可以被设置为目标[NEW]  
 * 设置单位 ${单位}  ${state} 设置为目标
 *
 * @TC_KKAPI
 */
declare function DzUnitSetTargetable(whichUnit: unit, state: boolean): void;

/**
 * 保存内存数据[NEW]  
 * 保存内存数据： ${state} 
 *
 * @TC_KKAPI
 */
declare function DzSaveMemoryCache(cache: string): void;

/**
 * 读取内存数据[NEW]  
 * 读取内存数据
 *
 * @TC_KKAPI
 */
declare function DzGetMemoryCache(): string;

/**
 * 设置加速倍率[NEW]  
 * 设置加速倍率： ${ratio} 
 *
 * @TC_KKAPI
 */
declare function DzSetSpeed(ratio: number): void;

/**
 * 转换地图坐标为屏幕坐标-异步[NEW]  
 * 转换地图坐标（ ${x}，${Y}，${z}）为屏幕坐标执行动作
 *
 * @remark
 * 动作里用“转换后的屏幕X坐标”和“转换后的屏幕Y坐标”去读取
 *
 * @BZ_GUI
 */
declare function DzConvertWorldPosition(x: number, y: number, z: number, callback: () => void): boolean;

/**
 * 获取转换后的屏幕 X 坐标[NEW]  
 * 获取转换后的屏幕 X 坐标
 *
 * @remark
 * 用于转换世界坐标为屏幕坐标动作后面
 *
 * @BZ_GUI
 */
declare function DzGetConvertWorldPositionX(): number;

/**
 * 获取转换后的屏幕 Y 坐标[NEW]  
 * 获取转换后的屏幕 Y 坐标
 *
 * @remark
 * 用于转换世界坐标为屏幕坐标动作后面
 *
 * @BZ_GUI
 */
declare function DzGetConvertWorldPositionY(): number;

/**
 * 创建技能按钮 [NEW]  
 * 在 ${界面} 的创建技能按钮：贴图:${path} 名称:${name} 描述：${desc})
 *
 * @BZ_GUI
 */
declare function DzCreateCommandButton(parent: number, icon: string, name: string, desc: string): number;



/**
 * 注册鼠标事件  
 * 任意玩家 ${key} ${actionkey} 时
 *
 * @remark
 * 请使用“获取触发硬件事件的玩家”来获取触发玩家
 *
 * @BZ_HW
 */
declare function DzTriggerRegisterMouseEventTrg(trg: trigger, status: number, btn: number): void;

/**
 * 键盘事件  
 * 任意玩家 ${keyaction} ${key} 时
 *
 * @remark
 * 请使用“获取触发硬件事件的玩家”来获取触发玩家
 *
 * @BZ_HW
 */
declare function DzTriggerRegisterKeyEventTrg(trg: trigger, status: number, btn: number): void;

/**
 * 鼠标移动事件  
 * 任意玩家移动鼠标
 *
 * @remark
 * 请使用“获取触发硬件事件的玩家”来获取触发玩家
 *
 * @BZ_HW
 */
declare function DzTriggerRegisterMouseMoveEventTrg(trg: trigger): void;

/**
 * 鼠标滚轮事件  
 * 任意玩家滑动鼠标滚轮
 *
 * @remark
 * 请使用“获取触发硬件事件的玩家”来获取触发玩家，滚轮的方向由“获取滚轮变化值”的正负来判断
 *
 * @BZ_HW
 */
declare function DzTriggerRegisterMouseWheelEventTrg(trg: trigger): void;

/**
 * 窗口大小变化事件  
 * 任意玩家改变窗口大小
 *
 * @remark
 * 请使用“获取触发硬件事件的玩家”来获取触发玩家。这个事件会在玩家拖动窗口大小时频繁触发
 *
 * @BZ_HW
 */
declare function DzTriggerRegisterWindowResizeEventTrg(trg: trigger): void;

/**
 * 转换 Frame 为 整数  
 * 转换 ${Frame} 为 整数
 *
 * @BZ_GUI
 */
declare function DzF2I(i: number): number;

/**
 * 转换 整数 为 Frame  
 * 转换 ${Integer} 为 Frame
 *
 * @BZ_GUI
 */
declare function DzI2F(i: number): number;

/**
 * 转换 按键 为 整数  
 * 转换 ${Key} 为 整数
 *
 * @BZ_HW
 */
declare function DzK2I(i: number): number;

/**
 * 转换 整数 为 按键  
 * 转换 ${Integer} 为 按键
 *
 * @BZ_HW
 */
declare function DzI2K(i: number): number;

/**
 * 玩家获得地图商城道具事件（实时）  
 * 注册玩家获得地图商城道具事件（实时）
 *
 * @remark
 * 玩家背包中新获得了当前地图商城道具的回调事件，用于地图实现玩家在游戏内商城购买成功后在游戏内立即生效。[触发的商城道具事件的玩家]、[触发的商城道具]和[商城道具最后变动的数量]使用。
 */
declare function DzTriggerRegisterMallItemSyncData(trig: trigger): void;

/**
 * 玩家消耗地图商城道具事件（实时）  
 * 注册玩家消耗地图商城道具事件（实时）
 *
 * @remark
 * 玩家背包中消耗或使用商城道具的回调事件。可在事件内配合[触发的商城道具事件的玩家]、[触发的商城道具]和[商城道具最后变动的数量]使用。
 */
declare function DzTriggerRegisterMallItemConsumeEvent(trig: trigger): void;

/**
 * 玩家删除地图商城道具事件（实时）  
 * 注册玩家删除地图商城道具事件（实时）
 *
 * @remark
 * 玩家背包中删除地图商城道具的回调事件。可在事件内配合[触发的商城道具事件的玩家]和[商城道具最后变动的数量]使用。（该事件一般不太可能用到，一般为商城商品被删除才会触发）
 */
declare function DzTriggerRegisterMallItemRemoveEvent(trig: trigger): void;

/**
 * 事件响应 - 触发的商城道具事件的玩家  
 * 触发的商城道具事件的玩家
 *
 * @remark
 * 可以用于【玩家获取商城道具事件】、【玩家消耗使用商城道具事件】和【玩家删除商城道具事件】后。
 */
declare function DzGetTriggerMallItemPlayer(): player;

/**
 * 事件响应 - 触发的商城道具（实时）  
 * 触发的商城道具
 *
 * @remark
 * 可以用于【玩家获取商城道具事件】、【玩家消耗使用商城道具事件】和【玩家删除商城道具事件】后。
 */
declare function DzGetTriggerMallItem(): string;