/** @noSelfInFile **/



/**
 * 当前选择的单位(异步)  
 * 获取主控单位
 *
 * @remark
 * 获取的单位是异步的，请谨慎操作
 *
 * @TC_KKAPI
 */
declare function DzGetSelectedLeaderUnit(): unit;

/**
 * 聊天框是否打开  
 * 获取聊天框是否打开
 *
 * @TC_KKAPI
 */
declare function DzIsChatBoxOpen(): boolean;

/**
 * 设置单位的鼠标指向UI和血条显示/隐藏  
 * 设置 ${单位} 的鼠标指向UI和血条 ${显示}
 *
 * @TC_KKAPI
 */
declare function DzSetUnitPreselectUIVisible(whichUnit: unit, visible: boolean): void;

/**
 * 设置特效播放动画  
 * 设置 ${特效} 播放第 ${编号} 号动画，播放方式${方式} 
 *
 * @TC_KKAPI
 */
declare function DzSetEffectAnimation(whichEffect: effect, index: number, flag: number): void;

/**
 * 设置特效坐标  
 * 设置 ${特效} 的坐标（ ${x},${y},${z}）
 *
 * @TC_KKAPI
 */
declare function DzSetEffectPos(whichEffect: effect, x: number, y: number, z: number): void;

/**
 * 设置特效颜色  
 * 设置 ${特效} 的颜色：${color} 
 *
 * @TC_KKAPI
 */
declare function DzSetEffectVertexColor(whichEffect: effect, color: number): void;

/**
 * 设置特效透明度  
 * 设置 ${特效} 的透明度：${alpha} 
 *
 * @TC_KKAPI
 */
declare function DzSetEffectVertexAlpha(whichEffect: effect, alpha: number): void;

/**
 * 设置特效模型  
 * 设置 ${特效} 的模型： ${modelFile}
 *
 * @TC_KKAPI
 */
declare function DzSetEffectModel(whichEffect: effect, model: string): void;

/**
 * 设置特效队伍颜色  
 * 设置 ${特效} 的队伍颜色： ${Color}
 *
 * @TC_KKAPI
 */
declare function DzSetEffectTeamColor(whichHandle: effect, playerId: number): void;

/**
 * 设置控件视口  
 * 设置 ${frame} 的视口为 ${状态}
 *
 * @remark
 * 设置控件视口后，他的子控件在边缘超出部分不会显示
 *
 * @TC_KKAPI
 */
declare function DzFrameSetClip(whichframe: number, enable: boolean): void;

/**
 * 设置魔兽窗口大小  
 * 设置魔兽窗口大小：${宽}/${高}
 *
 * @remark
 * 如修改窗口模式下的窗口大小为 1920/1080
 *
 * @TC_KKAPI
 */
declare function DzChangeWindowSize(width: number, height: number): boolean;

/**
 * 设置特效播放动画  
 * 设置 ${特效} 播放 ${death} 动画，附加动画链接名 ${alternate}
 *
 * @remark
 * 变身动画才需要附加链接名 一般情况填 “” 空字符串就行
 *
 * @TC_KKAPI
 */
declare function DzPlayEffectAnimation(whichEffect: effect, anim: string, link: string): void;

/**
 * 绑定特效  
 * 在 ${单位} 附着点 ${origin} 绑定特效 ${特效}
 *
 * @TC_KKAPI
 */
declare function DzBindEffect(parent: widget, attachPoint: string, whichEffect: effect): void;

/**
 * 解除绑定特效  
 * 解除绑定的特效 ${特效}
 *
 * @remark
 * 可以让绑定在单位身上的特效分离出来，被分离的特效能设置坐标、缩放
 *
 * @TC_KKAPI
 */
declare function DzUnbindEffect(whichEffect: effect): void;

/**
 * 单位缩放  
 * 设置 ${单位} 的缩放为 ${scale} 
 *
 * @remark
 * 可以用来缩放单位
 *
 * @TC_KKAPI
 */
declare function DzSetWidgetSpriteScale(whichUnit: widget, scale: number): void;

/**
 * 特效缩放  
 * 设置 ${特效} 的缩放为 ${scale} 
 *
 * @remark
 * 可以用来缩放特效
 *
 * @TC_KKAPI
 */
declare function DzSetEffectScale(whichHandle: effect, scale: number): void;

/**
 * 获取特效颜色  
 * 获取 ${特效} 的颜色
 *
 * @TC_KKAPI
 */
declare function DzGetEffectVertexColor(whichEffect: effect): number;

/**
 * 获取特效透明度  
 * 获取 ${特效} 的透明度
 *
 * @TC_KKAPI
 */
declare function DzGetEffectVertexAlpha(whichEffect: effect): number;

/**
 * 获取物品技能  
 * 获取 ${物品} 的第 ${编号} 个技能
 *
 * @TC_KKAPI
 */
declare function DzGetItemAbility(whichEffect: item, index: number): ability;

/**
 * 获取子控件数量  
 * 获取 ${界面} 的子控件数量
 *
 * @TC_KKAPI
 */
declare function DzFrameGetChildrenCount(whichframe: number): number;

/**
 * 获取子控件  
 * 获取 ${界面} 的第 ${编号} 个子控件
 *
 * @TC_KKAPI
 */
declare function DzFrameGetChild(whichframe: number, index: number): number;

/**
 * 解锁BLP像素限制  
 * 解锁BLP像素限制：${true}
 *
 * @remark
 * 填true会解除原本魔兽高清图片的512像素限制
 *
 * @TC_KKAPI
 */
declare function DzUnlockBlpSizeLimit(enable: boolean): void;

/**
 * 获取商店目标  
 * 获取 ${商店} 选中的 ${玩家} 单位
 *
 * @TC_KKAPI
 */
declare function DzGetActivePatron(store: unit, p: player): unit;

/**
 * 获取玩家选中的单位数量  
 * 获取玩家选中的单位数量
 *
 * @remark
 * 返回值是异步的，谨慎使用
 *
 * @TC_KKAPI
 */
declare function DzGetLocalSelectUnitCount(): number;

/**
 * 获取玩家选中的单位  
 * 获取玩家选中的第 ${编号} 个单位
 *
 * @remark
 * 返回值是异步的，谨慎使用
 *
 * @TC_KKAPI
 */
declare function DzGetLocalSelectUnit(index: number): unit;

/**
 * 获取字符串数量  
 * 获取字符串数量
 *
 * @TC_KKAPI
 */
declare function DzGetJassStringTableCount(): number;

/**
 * 清除模型内存缓存  
 * 清除模型 ${模型} 内存缓存
 *
 * @TC_KKAPI
 */
declare function DzModelRemoveFromCache(path: string): void;

/**
 * 清除所有模型内存缓存  
 * 清除所有模型内存缓存
 *
 * @TC_KKAPI
 */
declare function DzModelRemoveAllFromCache(): void;

/**
 * 获取框选控件  
 * 获取第 ${编号} 个框选控件
 *
 * @remark
 * 鼠标框选单位后，控制面板的队列单位头像控件
 *
 * @TC_KKAPI
 */
declare function DzFrameGetInfoPanelSelectButton(index: number): number;

/**
 * 获取BUFF控件  
 * 获取第 ${编号} 个BUFF控件
 *
 * @remark
 * 控制面板的单位属性下面的魔法效果buff控件
 *
 * @TC_KKAPI
 */
declare function DzFrameGetInfoPanelBuffButton(index: number): number;

/**
 * 获取农民控件  
 * 获取农民控件
 *
 * @TC_KKAPI
 */
declare function DzFrameGetPeonBar(): number;

/**
 * 获取技能右下角数字文本控件  
 * 获取 ${技能控件} 右下角数字文本控件
 *
 * @TC_KKAPI
 */
declare function DzFrameGetCommandBarButtonNumberText(whichframe: number): number;

/**
 * 获取技能右下角数字文本框体  
 * 获取 ${技能控件} 右下角数字文本框体
 *
 * @TC_KKAPI
 */
declare function DzFrameGetCommandBarButtonNumberOverlay(whichframe: number): number;

/**
 * 获取技能冷却指示器  
 * 获取 ${技能控件} 冷却指示器
 *
 * @remark
 * 控件类型为sprite frame
 *
 * @TC_KKAPI
 */
declare function DzFrameGetCommandBarButtonCooldownIndicator(whichframe: number): number;

/**
 * 获取技能自动施法指示器  
 * 获取 ${技能控件} 自动施法指示器
 *
 * @remark
 * 控件类型为sprite frame
 *
 * @TC_KKAPI
 */
declare function DzFrameGetCommandBarButtonAutoCastIndicator(whichframe: number): number;

/**
 * 设置FPS显示/隐藏  
 * 设置 FPS ${显示/隐藏}
 *
 * @TC_KKAPI
 */
declare function DzToggleFPS(show: boolean): void;

/**
 * 获取 FPS 帧数  
 * 获取 FPS 帧数
 *
 * @TC_KKAPI
 */
declare function DzGetFPS(): number;

/**
 * 转换地图坐标为小地图x坐标  
 * 转换地图坐标(${x},${y})为小地图x坐标
 *
 * @remark
 * 小地图左下角为（0,0）
 *
 * @TC_KKAPI
 */
declare function DzFrameWorldToMinimapPosX(x: number, y: number): number;

/**
 * 转换地图坐标为小地图y坐标  
 * 转换地图坐标(${x},${y})为小地图y坐标
 *
 * @remark
 * 小地图左下角为（0,0）
 *
 * @TC_KKAPI
 */
declare function DzFrameWorldToMinimapPosY(x: number, y: number): number;

/**
 * 自定义指定单位的小地图图标  
 * 设置指定 ${单位} 的小地图图标：${imagefile}
 *
 * @remark
 * 图标大小只支持16×16，设置图标之前需要开启：中立建筑 - 小地图特殊标志
 *
 * @TC_KKAPI
 */
declare function DzWidgetSetMinimapIcon(whichunit: unit, path: string): void;

/**
 * 开启/关闭自定义指定单位的小地图图标  
 * 设置 ${单位} ${On/Off} 自定义小地图图标
 *
 * @TC_KKAPI
 */
declare function DzWidgetSetMinimapIconEnable(whichunit: unit, enable: boolean): void;

/**
 * 游戏提示信息界面  
 * 游戏提示信息界面
 *
 * @remark
 * 如建筑升级完成提示
 *
 * @TC_KKAPI
 */
declare function DzFrameGetWorldFrameMessage(): number;

/**
 * 显示游戏提示信息  
 * 设置 ${消息界面} 显示 ${消息} 颜色：${颜色}，持续 ${时间} 秒，${是/否}永久显示
 *
 * @TC_KKAPI
 */
declare function DzSimpleMessageFrameAddMessage(whichframe: number, text: string, color: number, duration: number, permanent: boolean): void;

/**
 * 清理游戏提示信息  
 * 清理 ${消息界面} 的游戏提示信息
 *
 * @TC_KKAPI
 */
declare function DzSimpleMessageFrameClear(whichframe: number): void;

/**
 * 转换屏幕坐标到世界x坐标  
 * 转换屏幕坐标（ ${x}，${Y}）为世界x坐标
 *
 * @TC_KKAPI
 */
declare function DzConvertScreenPositionX(x: number, y: number): number;

/**
 * 转换屏幕坐标到世界y坐标  
 * 转换屏幕坐标（ ${x}，${Y}）为世界y坐标
 *
 * @TC_KKAPI
 */
declare function DzConvertScreenPositionY(x: number, y: number): number;

/**
 * 监听建筑选位置  
 * 监听建筑选位置
 *
 * @TC_KKAPI
 */
declare function DzRegisterOnBuildLocal(func: () => void): void;

/**
 * 获取建造的命令id  
 * 获取建造的命令id
 *
 * @remark
 * 用于监听建筑选位置后
 *
 * @TC_KKAPI
 */
declare function DzGetOnBuildOrderId(): number;

/**
 * 获取建造的命令类型  
 * 获取建造的命令类型
 *
 * @remark
 * 用于监听建筑选位置后
 *
 * @TC_KKAPI
 */
declare function DzGetOnBuildOrderType(): number;

/**
 * 获取预建造对象  
 * 获取预建造对象
 *
 * @remark
 * 用于监听建筑选位置后
 *
 * @TC_KKAPI
 */
declare function DzGetOnBuildAgent(): widget;

/**
 * 监听技能预选目标  
 * 监听技能预选目标
 *
 * @TC_KKAPI
 */
declare function DzRegisterOnTargetLocal(func: () => void): void;

/**
 * 获取监听到的技能  
 * 获取监听到的技能
 *
 * @remark
 * 用于监听技能预选后
 *
 * @TC_KKAPI
 */
declare function DzGetOnTargetAbilId(): number;

/**
 * 获取监听到技能预选命令  
 * 获取监听到技能预选命令
 *
 * @remark
 * 用于监听技能预选后
 *
 * @TC_KKAPI
 */
declare function DzGetOnTargetOrderId(): number;

/**
 * 获取监听到技能预选命令类型  
 * 获取监听到技能预选命令类型
 *
 * @remark
 * 用于监听技能预选后
 *
 * @TC_KKAPI
 */
declare function DzGetOnTargetOrderType(): number;

/**
 * 获取监听到技能预选目标  
 * 获取监听到技能预选目标
 *
 * @remark
 * 用于监听技能预选后
 *
 * @TC_KKAPI
 */
declare function DzGetOnTargetAgent(): widget;

/**
 * 获取监听到技能预选目标  
 * 获取监听到技能预选目标
 *
 * @remark
 * 用于监听技能预选后
 *
 * @TC_KKAPI
 */
declare function DzGetOnTargetInstantTarget(): widget;

/**
 * 打开QQ群链接  
 * 打开QQ群链接：${地址}
 *
 * @remark
 * 必须包括http://qm.qq.com开头的QQ群链接，调用后触发玩家加群，注意每分钟只能触发一次。
 *
 * @TC_KKAPI
 */
declare function DzOpenQQGroupUrl(url: string): boolean;

/**
 * 游戏界面限制设置  
 * 界面 ${是/否} 限制在游戏窗口内
 *
 * @remark
 * 当为 ‘否’ 时游戏里的界面可以拖到游戏外面 
 *
 * @TC_KKAPI
 */
declare function DzFrameEnableClipRect(enable: boolean): void;

/**
 * 设置单位名字  
 * 设置 ${单位} 名字：${name} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitName(whichUnit: unit, name: string): void;

/**
 * 设置单位头像模型  
 * 设置 ${单位} 头像模型：${modelFile} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitPortrait(whichUnit: unit, modelFile: string): void;

/**
 * 设置单位描述  
 * 设置 ${单位} 的描述： ${value} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitDescription(whichUnit: unit, value: string): void;

/**
 * 设置单位普攻弹道弧度  
 * 设置 ${单位} 普攻弹道弧度：${arc} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitMissileArc(whichUnit: unit, arc: number): void;

/**
 * 设置单位普攻弹道模型  
 * 设置 ${单位} 普攻弹道模型：${modelFile} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitMissileModel(whichUnit: unit, modelFile: string): void;

/**
 * 设置英雄称谓  
 * 设置 ${英雄} 称谓：${name} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitProperName(whichUnit: unit, name: string): void;

/**
 * 设置单位普攻弹道自导允许  
 * 设置 ${单位} 普攻弹道自导：${enable} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitMissileHoming(whichUnit: unit, enable: boolean): void;

/**
 * 设置单位普攻弹道速度  
 * 设置 ${单位} 普攻弹道速度：${seed} 
 *
 * @TC_KKAPI
 */
declare function DzSetUnitMissileSpeed(whichUnit: unit, speed: number): void;

/**
 * 特效显示/隐藏  
 * 设置 ${whichEffect}  ${Show/Hide}
 *
 * @TC_KKAPI
 */
declare function DzSetEffectVisible(whichHandle: effect, enable: boolean): void;

/**
 * 复活单位  
 * 设置 ${whichUnit} 复活为 ${whichPlayer} 的单位，生命值：${hp}，魔法值：${mp}，坐标(${x},${y})
 *
 * @TC_KKAPI
 */
declare function DzReviveUnit(whichUnit: unit, whichPlayer: player, hp: number, mp: number, x: number, y: number): void;

/**
 * 获取普攻技能  
 * ${whichUnit} 普攻技能
 *
 * @TC_KKAPI
 */
declare function DzGetAttackAbility(whichUnit: unit): ability;

/**
 * 结束普攻技能CD  
 * 结束普攻 ${whichAbility} 的技能CD
 *
 * @TC_KKAPI
 */
declare function DzAttackAbilityEndCooldown(whichHandle: ability): void;
declare function EXSetUnitArrayString(uid: number, id: number, n: number, name: string): boolean;
declare function EXSetUnitInteger(uid: number, id: number, n: number): boolean;

/**
 * 新建地形装饰物  
 * 创建 ${doodadid} 样式：${var} 坐标：(${x}，${Y}，${z}) 角度：${rotate} 缩放：${scale}
 *
 * @TC_KKAPI
 */

/**
 * 新建地形装饰物  
 * 创建 ${doodadid} 版本：${var} 坐标：(${x}，${Y}，${z}) 角度：${rotate} 缩放：${scale}
 *
 * @TC_KKAPI
 */
declare function DzDoodadCreate(id: number, val: number, x: number, y: number, z: number, rotate: number, scale: number): number;

/**
 * 装饰物的类型ID  
 * 获取 ${doodadid} 的类型ID
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetTypeId(doodad: number): number;

/**
 * 设置装饰物模型  
 * 设置 ${doodad} 的模型：${modelFile} 
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetModel(doodad: number, modelFile: string): void;

/**
 * 改变装饰物队伍颜色  
 * 改变 ${doodad} 的队伍颜色：${Color}
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetTeamColor(doodad: number, color: number): void;

/**
 * 设置装饰物颜色  
 * 设置 ${doodad} 的颜色：${color} 
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetColor(doodad: number, color: number): void;

/**
 * 装饰物的X坐标  
 * 获取 ${doodad} 的X坐标
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetX(doodad: number): number;

/**
 * 装饰物的Y坐标  
 * 获取 ${doodad} 的Y坐标
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetY(doodad: number): number;

/**
 * 装饰物的Z坐标  
 * 获取 ${doodad} 的Z坐标
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetZ(doodad: number): number;

/**
 * 设置装饰物位置  
 * 设置 ${doodad} 的坐标：(${x}，${Y}，${z})
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetPosition(doodad: number, x: number, y: number, z: number): void;

/**
 * 设置装饰物旋转  
 * 设置 ${doodad} 旋转，角度：${rotate} 方向：(${axisX}，${axisY}，${axisZ})
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetOrientMatrixRotate(doodad: number, angle: number, axisX: number, axisY: number, axisZ: number): void;

/**
 * 修改装饰物尺寸  
 * 设置 ${doodad} 缩放：(${x}，${y}，${z})
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetOrientMatrixScale(doodad: number, x: number, y: number, z: number): void;

/**
 * 装饰物重置大小  
 * 设置 ${doodad} 重置大小
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetOrientMatrixResize(doodad: number): void;

/**
 * 装饰物显示/隐藏  
 * 设置 ${doodad} ${Show/Hide}
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetVisible(doodad: number, enable: boolean): void;

/**
 * 装饰物播放动画  
 * 设置 ${doodad} 播放${Animation Name}  随机播放${inNoAnim}
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetAnimation(doodad: number, animName: string, animRandom: boolean): void;

/**
 * 设置装饰物动画播放速度  
 * 设置 ${doodad} 的动画播放速度为正常速度的 ${Percent} 倍
 *
 * @TC_KKAPI
 */
declare function DzDoodadSetTimeScale(doodad: number, scale: number): void;

/**
 * 装饰物动画播放速度  
 *  ${doodad} 的动画播放速度
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetTimeScale(doodad: number): number;

/**
 * 装饰物当前动画编号  
 *  ${doodad} 的当前动画编号
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetCurrentAnimationIndex(doodad: number): number;

/**
 * 装饰物动画数量  
 *  ${doodad} 的动画数量
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetAnimationCount(doodad: number): number;

/**
 * 装饰物动画名  
 *  ${doodad} 第 ${index} 个动画的动画名
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetAnimationName(doodad: number, index: number): string;

/**
 * 装饰物动画时间  
 *  ${doodad} 第 ${index} 个动画的时间
 *
 * @TC_KKAPI
 */
declare function DzDoodadGetAnimationTime(doodad: number, index: number): number;

/**
 * 解锁JASS字节码限制 [NEW]  
 *  ${是/否} 解锁JASS字节码限制
 *
 * @TC_KKAPI
 */
declare function DzUnlockOpCodeLimit(enable: boolean): void;

/**
 * 设置剪切板 [NEW]  
 * 设置剪切板 ${内容}
 *
 * @TC_KKAPI
 */
declare function DzSetClipboard(content: string): boolean;

/**
 * 删除装饰物  [NEW]  
 * 删除 ${doodad} 
 *
 * @TC_KKAPI
 */
declare function DzDoodadRemove(doodad: number): void;

/**
 * 降低玩家科技等级 [NEW]  
 *  降低${玩家} 的 ${科技} ${等级} 个等级
 *
 * @TC_KKAPI
 */
declare function DzRemovePlayerTechResearched(whichPlayer: player, techid: number, removelevels: number): void;

/**
 * 获取单位的指定技能  
 * 查找 ${单位} 的指定技能 ${技能}
 *
 * @TC_KKAPI
 */
declare function DzUnitFindAbility(whichUnit: unit, abilcode: number): ability;

/**
 * 设置技能数据-字符串  
 * 设置 ${技能} 的字符串 ${名字} 数据为 ${内容}
 *
 * @TC_KKAPI
 */
declare function DzAbilitySetStringData(whichAbility: ability, key: string, value: string): void;

/**
 * 设置技能启用/禁用  
 * 设置 ${技能} 的启用状态为 ${启用} ，隐藏UI为 ${隐藏}
 *
 * @TC_KKAPI
 */
declare function DzAbilitySetEnable(whichAbility: ability, enable: boolean, hideUI: boolean): void;

/**
 * 设置单位实例的移动类型  
 * 设置 ${单位} 实例的移动类型为 ${Value}
 *
 * @TC_KKAPI
 */
declare function DzUnitSetMoveType(whichUnit: unit, moveType: string): void;

/**
 * 获取 Frame 的 宽度  
 * 获取 ${frame} 的宽度
 *
 * @TC_KKAPI
 */
declare function DzFrameGetWidth(frame: number): number;

/**
 * 设置模型界面播放动画（编号）  
 * 设置 ${模型界面} 播放第 ${index}）个动画，播放方式${flag}
 *
 * @TC_KKAPI
 */
declare function DzFrameSetAnimateByIndex(frame: number, index: number, flag: number): void;
declare function DzSetUnitDataCacheInteger(uid: number, id: number, index: number, v: number): void;
declare function DzUnitUIAddLevelArrayInteger(uid: number, id: number, lv: number, v: number): void;

/**
 * 设置物品模型 [NEW]  
 * 设置 ${whichItem} 的模型：${modelFile} 
 *
 * @TC_KKAPI
 */
declare function DzItemSetModel(whichItem: item, file: string): void;

/**
 * 设置物品颜色 [NEW]  
 * 设置 ${whichItem} 的颜色：${color} 
 *
 * @TC_KKAPI
 */
declare function DzItemSetVertexColor(whichItem: item, color: number): void;

/**
 * 设置物品透明度(0-255) [NEW]  
 * 设置 ${whichItem} 的透明度为 ${alpha}
 *
 * @TC_KKAPI
 */
declare function DzItemSetAlpha(whichItem: item, color: number): void;

/**
 * 设置物品头像 [NEW]  
 * 设置 ${whichItem} 的头像：${modelFile} 
 *
 * @TC_KKAPI
 */
declare function DzItemSetPortrait(whichItem: item, modelPath: string): void;

declare var MOVE_TYPE_NONE: string;
declare var MOVE_TYPE_FOOT: string;
declare var MOVE_TYPE_HORSE: string;
declare var MOVE_TYPE_FLY: string;
declare var MOVE_TYPE_HOVER: string;
declare var MOVE_TYPE_FLOAT: string;
declare var MOVE_TYPE_AMPH: string;
declare var MOVE_TYPE_UNBUILD: string;
declare const DEFENSE_TYPE_LIGHT: number;
declare const DEFENSE_TYPE_MEDIUM: number;
declare const DEFENSE_TYPE_LARGE: number;
declare const DEFENSE_TYPE_FORT: number;
declare const DEFENSE_TYPE_NORMAL: number;
declare const DEFENSE_TYPE_HERO: number;
declare const DEFENSE_TYPE_DIVINE: number;
declare const DEFENSE_TYPE_NONE: number;


/**
 * 设置英雄类型称谓名[API][new]  
 * 设置 ${英雄} 类型的称谓名： ${name} 
 *
 * @TC_HERO
 */
declare function DzSetHeroTypeProperName(uid: number, name: string): void;

/**
 * 设置单位类型名[API][new]  
 * 设置 ${单位} 类型名字： ${name} 
 *
 * @TC_UNIT
 */
declare function DzSetUnitTypeName(uid: number, name: string): void;

/**
 * 攻击类型[JAPI]  
 * [${whichUnit}] ${index} 的攻击类型为 ${attackType}
 *
 * @TC_UNIT
 */
declare function DzIsUnitAttackType(whichUnit: unit, index: number, attackType: attacktype): boolean;

/**
 * 设置攻击类型[API]  
 * 设置 ${单位} ${~index} 的攻击类型为 ${attackType} 
 *
 * @TC_UNIT
 */
declare function DzSetUnitAttackType(whichUnit: unit, index: number, attackType: attacktype): void;

/**
 * 护甲类型[JAPI]  
 * [${whichUnit}] 的护甲类型为 ${defenseType}
 *
 * @TC_UNIT
 */
declare function DzIsUnitDefenseType(whichUnit: unit, defenseType: number): boolean;

/**
 * 设置护甲类型[API]  
 * 设置 ${单位} 的护甲类型为 ${defenseType} 
 *
 * @TC_UNIT
 */
declare function DzSetUnitDefenseType(whichUnit: unit, defenseType: number): void;

/**
 * 设置单位整数物编数据  
 * 设置 ${单位} 的 ${id} 数值为 ${data}
 *
 * @TC_KKAPI
 */
declare function KKWESetUnitDataCacheInteger(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(建筑升级)  
 * 设置 ${单位} 的第 ${id} 个建筑升级 ${单位类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddUpgradesIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(农民可建造建筑)  
 * 设置 ${单位} 的第 ${id} 个可建造建筑 ${单位类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddBuildsIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(可研究的科技)  
 * 设置 ${单位} 的第 ${id} 个可研究的科技 ${科技类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddResearchesIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(可训练的单位)  
 * 设置 ${单位} 的第 ${id} 个可训练的单位 ${单位类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddTrainsIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(出售的单位)  
 * 设置 ${单位} 的第 ${id} 个可出售的单位 ${单位类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddSellsUnitIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(出售的物品)  
 * 设置 ${单位} 的第 ${id} 个可出售的物品 ${物品类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddSellsItemIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(制造的物品)  
 * 设置 ${单位} 的第 ${id} 个可制造的物品 ${物品类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddMakesItemIds(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(科技需求)[单位]  
 * 设置 ${单位} 的第 ${id} 个科技需求 ${单位类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddRequiresUnitCode(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(科技需求)[科技]  
 * 设置 ${单位} 的第 ${id} 个科技需求 ${科技类型}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddRequiresTechcode(uid: number, id: number, v: number): void;

/**
 * 设置单位物编数据(科技需求值)  
 * 设置 ${单位} 的第 ${id} 个科技需求值 ${数量}
 *
 * @TC_KKAPI
 */
declare function KKWEUnitUIAddRequiresAmounts(uid: number, id: number, v: number): void;