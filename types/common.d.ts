/** @noSelfInFile **/

declare interface agent extends handle { __agent: never; }
declare interface event extends agent { __event: never; }
declare interface player extends agent { __player: never; }
declare interface widget extends agent { __widget: never; }
declare interface unit extends widget { __unit: never; }
declare interface destructable extends widget { __destructable: never; }
declare interface item extends widget { __item: never; }
declare interface ability extends agent { __ability: never; }
declare interface buff extends ability { __buff: never; }
declare interface force extends agent { __force: never; }
declare interface group extends agent { __group: never; }
declare interface trigger extends agent { __trigger: never; }
declare interface triggercondition extends agent { __triggercondition: never; }
declare interface triggeraction extends handle { __triggeraction: never; }
declare interface timer extends agent { __timer: never; }
declare interface location extends agent { __location: never; }
declare interface region extends agent { __region: never; }
declare interface rect extends agent { __rect: never; }
declare interface boolexpr extends agent { __boolexpr: never; }
declare interface sound extends agent { __sound: never; }
declare interface conditionfunc extends boolexpr { __conditionfunc: never; }
declare interface filterfunc extends boolexpr { __filterfunc: never; }
declare interface unitpool extends handle { __unitpool: never; }
declare interface itempool extends handle { __itempool: never; }
declare interface race extends handle { __race: never; }
declare interface alliancetype extends handle { __alliancetype: never; }
declare interface racepreference extends handle { __racepreference: never; }
declare interface gamestate extends handle { __gamestate: never; }
declare interface igamestate extends gamestate { __igamestate: never; }
declare interface fgamestate extends gamestate { __fgamestate: never; }
declare interface playerstate extends handle { __playerstate: never; }
declare interface playerscore extends handle { __playerscore: never; }
declare interface playergameresult extends handle { __playergameresult: never; }
declare interface unitstate extends handle { __unitstate: never; }
declare interface aidifficulty extends handle { __aidifficulty: never; }
declare interface eventid extends handle { __eventid: never; }
declare interface gameevent extends eventid { __gameevent: never; }
declare interface playerevent extends eventid { __playerevent: never; }
declare interface playerunitevent extends eventid { __playerunitevent: never; }
declare interface unitevent extends eventid { __unitevent: never; }
declare interface limitop extends eventid { __limitop: never; }
declare interface widgetevent extends eventid { __widgetevent: never; }
declare interface dialogevent extends eventid { __dialogevent: never; }
declare interface unittype extends handle { __unittype: never; }
declare interface gamespeed extends handle { __gamespeed: never; }
declare interface gamedifficulty extends handle { __gamedifficulty: never; }
declare interface gametype extends handle { __gametype: never; }
declare interface mapflag extends handle { __mapflag: never; }
declare interface mapvisibility extends handle { __mapvisibility: never; }
declare interface mapsetting extends handle { __mapsetting: never; }
declare interface mapdensity extends handle { __mapdensity: never; }
declare interface mapcontrol extends handle { __mapcontrol: never; }
declare interface playerslotstate extends handle { __playerslotstate: never; }
declare interface volumegroup extends handle { __volumegroup: never; }
declare interface camerafield extends handle { __camerafield: never; }
declare interface camerasetup extends handle { __camerasetup: never; }
declare interface playercolor extends handle { __playercolor: never; }
declare interface placement extends handle { __placement: never; }
declare interface startlocprio extends handle { __startlocprio: never; }
declare interface raritycontrol extends handle { __raritycontrol: never; }
declare interface blendmode extends handle { __blendmode: never; }
declare interface texmapflags extends handle { __texmapflags: never; }
declare interface effect extends agent { __effect: never; }
declare interface effecttype extends handle { __effecttype: never; }
declare interface weathereffect extends handle { __weathereffect: never; }
declare interface terraindeformation extends handle { __terraindeformation: never; }
declare interface fogstate extends handle { __fogstate: never; }
declare interface fogmodifier extends agent { __fogmodifier: never; }
declare interface dialog extends agent { __dialog: never; }
declare interface button extends agent { __button: never; }
declare interface quest extends agent { __quest: never; }
declare interface questitem extends agent { __questitem: never; }
declare interface defeatcondition extends agent { __defeatcondition: never; }
declare interface timerdialog extends agent { __timerdialog: never; }
declare interface leaderboard extends agent { __leaderboard: never; }
declare interface multiboard extends agent { __multiboard: never; }
declare interface multiboarditem extends agent { __multiboarditem: never; }
declare interface trackable extends agent { __trackable: never; }
declare interface gamecache extends agent { __gamecache: never; }
declare interface version extends handle { __version: never; }
declare interface itemtype extends handle { __itemtype: never; }
declare interface texttag extends handle { __texttag: never; }
declare interface attacktype extends handle { __attacktype: never; }
declare interface damagetype extends handle { __damagetype: never; }
declare interface weapontype extends handle { __weapontype: never; }
declare interface soundtype extends handle { __soundtype: never; }
declare interface lightning extends handle { __lightning: never; }
declare interface pathingtype extends handle { __pathingtype: never; }
declare interface image extends handle { __image: never; }
declare interface ubersplat extends handle { __ubersplat: never; }
declare interface hashtable extends agent { __hashtable: never; }

declare function ConvertRace(i: number): race;
declare function ConvertAllianceType(i: number): alliancetype;
declare function ConvertRacePref(i: number): racepreference;
declare function ConvertIGameState(i: number): igamestate;
declare function ConvertFGameState(i: number): fgamestate;
declare function ConvertPlayerState(i: number): playerstate;
declare function ConvertPlayerScore(i: number): playerscore;
declare function ConvertPlayerGameResult(i: number): playergameresult;
declare function ConvertUnitState(i: number): unitstate;
declare function ConvertAIDifficulty(i: number): aidifficulty;
declare function ConvertGameEvent(i: number): gameevent;
declare function ConvertPlayerEvent(i: number): playerevent;
declare function ConvertPlayerUnitEvent(i: number): playerunitevent;
declare function ConvertWidgetEvent(i: number): widgetevent;
declare function ConvertDialogEvent(i: number): dialogevent;
declare function ConvertUnitEvent(i: number): unitevent;
declare function ConvertLimitOp(i: number): limitop;
declare function ConvertUnitType(i: number): unittype;
declare function ConvertGameSpeed(i: number): gamespeed;
declare function ConvertPlacement(i: number): placement;
declare function ConvertStartLocPrio(i: number): startlocprio;
declare function ConvertGameDifficulty(i: number): gamedifficulty;
declare function ConvertGameType(i: number): gametype;
declare function ConvertMapFlag(i: number): mapflag;
declare function ConvertMapVisibility(i: number): mapvisibility;
declare function ConvertMapSetting(i: number): mapsetting;
declare function ConvertMapDensity(i: number): mapdensity;
declare function ConvertMapControl(i: number): mapcontrol;
declare function ConvertPlayerColor(i: number): playercolor;
declare function ConvertPlayerSlotState(i: number): playerslotstate;
declare function ConvertVolumeGroup(i: number): volumegroup;
declare function ConvertCameraField(i: number): camerafield;
declare function ConvertBlendMode(i: number): blendmode;
declare function ConvertRarityControl(i: number): raritycontrol;
declare function ConvertTexMapFlags(i: number): texmapflags;
declare function ConvertFogState(i: number): fogstate;
declare function ConvertEffectType(i: number): effecttype;
declare function ConvertVersion(i: number): version;
declare function ConvertItemType(i: number): itemtype;
declare function ConvertAttackType(i: number): attacktype;
declare function ConvertDamageType(i: number): damagetype;
declare function ConvertWeaponType(i: number): weapontype;
declare function ConvertSoundType(i: number): soundtype;
declare function ConvertPathingType(i: number): pathingtype;
declare function OrderId(orderIdString: string): number;
declare function OrderId2String(orderId: number): string;
declare function UnitId(unitIdString: string): number;
declare function UnitId2String(unitId: number): string;
declare function AbilityId(abilityIdString: string): number;
declare function AbilityId2String(abilityId: number): string;

/**
 * 物体名称 [C]  
 * ${物体ID} 的名称
 *
 * @remark
 * 如'A01Z',物体编辑器中物体的名字
 *
 * @TC_NOTHING
 */
declare function GetObjectName(objectId: number): string;

/**
 * 转换角度为弧度  
 * 转换角度 ${Degrees} 为弧度
 *
 * @TC_CONV
 */
declare function Deg2Rad(degrees: number): number;

/**
 * 转换弧度为角度  
 * 转换弧度 ${Radians} 为角度
 *
 * @TC_CONV
 */
declare function Rad2Deg(radians: number): number;

/**
 * 正弦(弧度) [R]  
 * @Sin(${Angle})
 *
 * @remark
 * 采用弧度制计算. 
 *
 * @TC_MATH
 */
declare function Sin(radians: number): number;

/**
 * 余弦(弧度) [R]  
 * @Cos(${Angle})
 *
 * @remark
 * 采用弧度制计算. 
 *
 * @TC_MATH
 */
declare function Cos(radians: number): number;

/**
 * 正切(弧度) [R]  
 * @Tan(${Angle})
 *
 * @remark
 * 采用弧度制计算. 
 *
 * @TC_MATH
 */
declare function Tan(radians: number): number;

/**
 * 反正弦(弧度) [R]  
 * @Asin(${数值})
 *
 * @remark
 * 采用弧度制计算. 返回弧度取值-π/2 — π/2. 
 *
 * @TC_MATH
 */
declare function Asin(y: number): number;

/**
 * 反余弦(弧度) [R]  
 * @Acos(${数值})
 *
 * @remark
 * 采用弧度制计算. 返回弧度取值0 — π. 
 *
 * @TC_MATH
 */
declare function Acos(x: number): number;

/**
 * 反正切(弧度) [R]  
 * @Atan(${数值})
 *
 * @remark
 * 采用弧度制计算. 返回弧度取值-π/2 — π/2. 
 *
 * @TC_MATH
 */
declare function Atan(x: number): number;

/**
 * 反正切(Y:X)(弧度) [R]  
 * @Atan(${Y} : ${X})
 *
 * @remark
 * 采用弧度制计算. 返回弧度取值-π/2 — π/2. 
 *
 * @TC_MATH
 */
declare function Atan2(y: number, x: number): number;

/**
 * 平方根  
 * ${实数} 的平方根
 *
 * @TC_MATH
 */
declare function SquareRoot(x: number): number;

/**
 * 幂运算  
 * ${实数} 的 ${实数} 次幂
 *
 * @TC_MATH
 */
declare function Pow(x: number, power: number): number;

/**
 * 转换整数为实数  
 * 转换 ${Integer} 为实数
 *
 * @TC_CONV
 */
declare function I2R(i: number): number;

/**
 * 转换实数为整数  
 * 转换 ${Real} 为整数
 *
 * @remark
 * 舍弃小数部分.
 *
 * @TC_CONV
 */
declare function R2I(r: number): number;

/**
 * 转换整数为字符串  
 * 转换 ${Integer} 为字符串
 *
 * @TC_CONV
 */
declare function I2S(i: number): string;

/**
 * 转换实数为字符串  
 * 转换 ${Real} 为字符串
 *
 * @TC_CONV
 */
declare function R2S(r: number): string;

/**
 * 格式转换实数为字符串  
 * 转换 ${Real} 为字符串,最小宽度: ${Width} ,小数位数: ${Precision}
 *
 * @remark
 * 如: 转换(1.234, 7, 2)后为''   1.23''. 转换(1.234, 2, 5)后为''1.23400''.
 *
 * @TC_CONV
 */
declare function R2SW(r: number, width: number, precision: number): string;

/**
 * 转换字符串为整数  
 * 转换 ${String} 为整数
 *
 * @TC_CONV
 */
declare function S2I(s: string): number;

/**
 * 转换字符串为实数  
 * 转换 ${String} 为实数
 *
 * @TC_CONV
 */
declare function S2R(s: string): number;

/**
 * <1.24> 获取对象的h2i值 [C]  
 * 转换 ${Handle} 为整数
 *
 * @remark
 * 创建一个对应该handle的临时密钥,可以在哈希表中作为索引号使用.当该handle被彻底销毁时,密钥会被回收.
 *
 * @TC_HASHTABLE
 */
declare function GetHandleId(h: handle): number;

/**
 * 截取字符串 [R]  
 * 截取 ${字符串} 的 ${Start} - ${End} 字节部分(不包括首字节)
 *
 * @remark
 * 例: 截取''Grunts stink''的2 - 4字节部分
 *
 * @TC_NOTHING
 */
declare function SubString(source: string, start: number, end: number): string;

/**
 * 字符串长度  
 * ${String}的长度
 *
 * @TC_NOTHING
 */
declare function StringLength(s: string): number;

/**
 * 大小写转换  
 * 转换 ${字符串} 为 ${Lower/Upper Case} 形式
 *
 * @TC_CONVERSION
 */
declare function StringCase(source: string, upper: boolean): string;

/**
 * 获取字符串的哈希值  
 * (${String})的哈希值
 *
 * @remark
 * 获取一个对应该字符串的密钥，不同的字符串的密钥基本不可能相同，也很难找到两个不同的字符串他们有着相同的密钥。可以用于制作密码等功能。
 *
 * @TC_MATH
 */
declare function StringHash(s: string): number;

/**
 * 本地字符串 [R]  
 * 本地字符串: ${文字}
 *
 * @remark
 * 获取ui\\framedef\\globalstrings.fdf中定义的字符串.
 *
 * @TC_CONVERSION
 */
declare function GetLocalizedString(source: string): string;

/**
 * 本地热键   
 * 本地热键: ${文字}
 *
 * @remark
 * 获取ui\\miscui.txt中定义的热键.
 *
 * @TC_CONVERSION
 */
declare function GetLocalizedHotkey(source: string): number;
declare function SetMapName(name: string): void;
declare function SetMapDescription(description: string): void;
declare function SetTeams(teamcount: number): void;
declare function SetPlayers(playercount: number): void;
declare function DefineStartLocation(whichStartLoc: number, x: number, y: number): void;
declare function DefineStartLocationLoc(whichStartLoc: number, whichLocation: location): void;
declare function SetStartLocPrioCount(whichStartLoc: number, prioSlotCount: number): void;
declare function SetStartLocPrio(whichStartLoc: number, prioSlotIndex: number, otherStartLocIndex: number, priority: startlocprio): void;
declare function GetStartLocPrioSlot(whichStartLoc: number, prioSlotIndex: number): number;
declare function GetStartLocPrio(whichStartLoc: number, prioSlotIndex: number): startlocprio;
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): void;

/**
 * 设置地图参数  
 * 设置 ${Map Flag} 为 ${On/Off}
 *
 * @TC_GAME
 */
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): void;
declare function SetGamePlacement(whichPlacementType: placement): void;

/**
 * 设定游戏速度  
 * 设定游戏速度为 ${Speed}
 *
 * @remark
 * 你可以通过'游戏 - 锁定游戏速度'动作来锁定游戏速度.
 *
 * @TC_GAME
 */
declare function SetGameSpeed(whichspeed: gamespeed): void;

/**
 * 设置游戏难度 [R]  
 * 设置当前游戏难度为 ${GameDifficulty}
 *
 * @remark
 * 游戏难度只是作为运行AI的一个参考值,没有AI的地图该功能无用.
 *
 * @TC_GAME
 */
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): void;
declare function SetResourceDensity(whichdensity: mapdensity): void;
declare function SetCreatureDensity(whichdensity: mapdensity): void;

/**
 * 队伍数量  
 * 队伍数量
 *
 * @TC_GAME
 */
declare function GetTeams(): number;

/**
 * 玩家数量  
 * 玩家数量
 *
 * @remark
 * 地图编辑器中开启的玩家数量(1-12).
 *
 * @TC_GAME
 */
declare function GetPlayers(): number;
declare function IsGameTypeSupported(whichGameType: gametype): boolean;
declare function GetGameTypeSelected(): gametype;

/**
 * 地图参数设置  
 * ${Map Flag} 已设置
 *
 * @TC_GAME
 */
declare function IsMapFlagSet(whichMapFlag: mapflag): boolean;
declare function GetGamePlacement(): placement;

/**
 * 当前游戏速度  
 * 当前游戏速度
 *
 * @TC_NOTHING
 */
declare function GetGameSpeed(): gamespeed;

/**
 * 当前游戏难度  
 * 当前游戏难度
 *
 * @TC_NOTHING
 */
declare function GetGameDifficulty(): gamedifficulty;
declare function GetResourceDensity(): mapdensity;
declare function GetCreatureDensity(): mapdensity;
declare function GetStartLocationX(whichStartLocation: number): number;
declare function GetStartLocationY(whichStartLocation: number): number;
declare function GetStartLocationLoc(whichStartLocation: number): location;

/**
 * 设置玩家队伍  
 * 设置 ${Player} 的队伍为 ${队伍ID}
 *
 * @TC_PLAYER
 */
declare function SetPlayerTeam(whichPlayer: player, whichTeam: number): void;
declare function SetPlayerStartLocation(whichPlayer: player, startLocIndex: number): void;
declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: number): void;

/**
 * 改变玩家颜色 [R]  
 * 将 ${Player} 的玩家颜色改为 ${Color}
 *
 * @remark
 * 不改变现有单位的颜色.
 *
 * @TC_PLAYER
 */
declare function SetPlayerColor(whichPlayer: player, color: playercolor): void;

/**
 * 设置联盟状态(指定项目) [R]  
 * 命令 ${Player} 对 ${Player} 设置 ${Alliance Type} ${On/Off}
 *
 * @remark
 * 注意:可以对玩家自己设置联盟状态. 可用来实现一些特殊效果.
 *
 * @TC_PLAYER
 */
declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): void;

/**
 * 设置税率 [R]  
 * 设置 ${Player} 交纳给 ${Player} 的 ${Resource} 所得税为 ${Rate} %
 *
 * @remark
 * 缴纳所得税所损失的资源可以通过'玩家得分'的'税务损失的黄金/木材'来获取. 所得税最高为100%. 且玩家1对玩家2和玩家3都交纳80%所得税.则玩家1采集黄金时将给玩家2 8黄金,玩家3 2黄金.
 *
 * @TC_PLAYER
 */
declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: number): void;
declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): void;
declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): void;
declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): void;

/**
 * 更改名字  
 * 更改 ${Player} 的名字为 ${文字}
 *
 * @TC_PLAYER
 */
declare function SetPlayerName(whichPlayer: player, name: string): void;

/**
 * 显示/隐藏计分屏显示 [R]  
 * 设置 ${Player} ${Show/Hide} 在计分屏的显示.
 *
 * @TC_PLAYER
 */
declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): void;

/**
 * 玩家队伍  
 * ${Player} 所属队伍编号
 *
 * @TC_PLAYER
 */
declare function GetPlayerTeam(whichPlayer: player): number;
declare function GetPlayerStartLocation(whichPlayer: player): number;

/**
 * 玩家颜色  
 * ${Player} 的颜色
 *
 * @TC_NOTHING
 */
declare function GetPlayerColor(whichPlayer: player): playercolor;
declare function GetPlayerSelectable(whichPlayer: player): boolean;

/**
 * 玩家控制者  
 * ${Player} 的控制者
 *
 * @TC_NOTHING
 */
declare function GetPlayerController(whichPlayer: player): mapcontrol;

/**
 * 玩家游戏状态  
 * ${Player} 的游戏状态
 *
 * @TC_NOTHING
 */
declare function GetPlayerSlotState(whichPlayer: player): playerslotstate;

/**
 * 玩家税率 [R]  
 * ${Player} 需要交纳给 ${Player} 的 ${Resource} 所得税
 *
 * @remark
 * 所得税取值范围0-100.
 *
 * @TC_PLAYER
 */
declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): number;

/**
 * 玩家的种族选择  
 * ${Player} 选择了 ${RacePreference}
 *
 * @TC_PLAYER
 */
declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean;

/**
 * 玩家名字  
 * ${Player} 的名字
 *
 * @TC_PLAYER
 */
declare function GetPlayerName(whichPlayer: player): string;

/**
 * 新建计时器 [R]  
 * 新建的计时器
 *
 * @remark
 * 会创建计时器.
 *
 * @TC_NOTHING
 */
declare function CreateTimer(): timer;

/**
 * 删除计时器 [R]  
 * 删除 ${计时器}
 *
 * @remark
 * 一般来说,计时器并不需要删除.只为某些有特别需求的用户提供.
 *
 * @TC_TIMER
 */
declare function DestroyTimer(whichTimer: timer): void;

/**
 * 运行计时器 [C]  
 * 运行 ${计时器}，周期: ${时间} 秒，模式: ${模式}，运行函数: ${函数}
 *
 * @remark
 * 等同于TimerStart
 *
 * @TC_TIMER
 */
declare function TimerStart(whichTimer: timer, timeout: number, periodic: boolean, handlerFunc: () => void): void;

/**
 * 逝去时间  
 * ${计时器} 的逝去时间
 *
 * @TC_TIMER
 */
declare function TimerGetElapsed(whichTimer: timer): number;

/**
 * 剩余时间  
 * ${计时器} 的剩余时间
 *
 * @TC_TIMER
 */
declare function TimerGetRemaining(whichTimer: timer): number;

/**
 * 设置时间  
 * ${计时器} 设置的时间
 *
 * @TC_TIMER
 */
declare function TimerGetTimeout(whichTimer: timer): number;

/**
 * 暂停计时器 [R]  
 * 暂停 ${计时器}
 *
 * @TC_TIMER
 */
declare function PauseTimer(whichTimer: timer): void;

/**
 * 恢复计时器 [R]  
 * 恢复 ${计时器}
 *
 * @TC_TIMER
 */
declare function ResumeTimer(whichTimer: timer): void;

/**
 * 到期的计时器  
 * 到期的计时器
 *
 * @remark
 * 响应'时间 - 计时器到期'事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetExpiredTimer(): timer;

/**
 * 新建的单位组 [R]  
 * 新建的空单位组
 *
 * @remark
 * 会创建单位组.
 *
 * @TC_NOTHING
 */
declare function CreateGroup(): group;

/**
 * 删除单位组 [R]  
 * 删除 ${单位组}
 *
 * @TC_UNITGROUP
 */
declare function DestroyGroup(whichGroup: group): void;

/**
 * 添加单位 [R]  
 * 为 ${单位组} 添加 ${单位}
 *
 * @remark
 * 并不影响单位本身.
 *
 * @TC_UNITGROUP
 */
declare function GroupAddUnit(whichGroup: group, whichUnit: unit): void;

/**
 * 移除单位 [R]  
 * 为 ${单位组} 删除 ${单位}
 *
 * @remark
 * 并不影响单位本身.
 *
 * @TC_UNITGROUP
 */
declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): void;

/**
 * 清空单位组  
 * 清空 ${单位组} 内所有单位
 *
 * @remark
 * 并不影响单位本身.
 *
 * @TC_UNITGROUP
 */
declare function GroupClear(whichGroup: group): void;
declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter: boolexpr | (() => boolean) | null): void;
declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter: boolexpr | (() => boolean) | null): void;
declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr | (() => boolean) | null, countLimit: number): void;
declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter: boolexpr | (() => boolean) | null): void;
declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr | (() => boolean) | null, countLimit: number): void;

/**
 * 选取单位添加到单位组(坐标)  
 * 为 ${单位组} 添加以( ${坐标X} , ${坐标Y} )为圆心，${半径} 为半径的圆范围内，满足 ${条件} 的单位
 *
 * @TC_UNITGROUP
 */
declare function GroupEnumUnitsInRange(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr | (() => boolean) | null): void;

/**
 * 选取单位添加到单位组(点)  
 * 为 ${单位组} 添加以 ${点} 为圆心，${半径} 为半径的圆范围内，满足 ${条件} 的单位
 *
 * @TC_UNITGROUP
 */
declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr | (() => boolean) | null): void;

/**
 * 选取单位添加到单位组(坐标)(不建议使用)  
 * 为 ${单位组} 添加以( ${坐标X} , ${坐标Y} )为圆心，${半径} 为半径的圆范围内，满足 ${条件} 的单位。无效项( ${N} )
 *
 * @remark
 * 最后一项是无效项，建议用上一个UI
 *
 * @TC_UNITGROUP
 */
declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: number, y: number, radius: number, filter: boolexpr | (() => boolean) | null, countLimit: number): void;

/**
 * 选取单位添加到单位组(点)(不建议使用)  
 * 为 ${单位组} 添加以 ${点} 为圆心，${半径} 为半径的圆范围内，满足 ${条件} 的单位。无效项( ${N} )
 *
 * @remark
 * 最后一项是无效项，建议用上一个UI
 *
 * @TC_UNITGROUP
 */
declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: number, filter: boolexpr | (() => boolean) | null, countLimit: number): void;
declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter: boolexpr | (() => boolean) | null): void;

/**
 * 发布命令(无目标)  
 * 对 ${单位组}发布 ${Order}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupImmediateOrder(whichGroup: group, order: string): boolean;

/**
 * 发布命令(无目标)(ID)  
 * 对 ${单位组}发布 ${Order}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupImmediateOrderById(whichGroup: group, order: number): boolean;

/**
 * 发布命令(指定坐标) [R]  
 * 对 ${单位组}发布 ${Order} 命令,目标点:(${X},${Y})
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupPointOrder(whichGroup: group, order: string, x: number, y: number): boolean;

/**
 * 发布命令(指定点)  
 * 对 ${单位组}发布 ${Order} 命令,目标: ${指定点}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean;

/**
 * 发布命令(指定坐标)(ID)  
 * 对 ${单位组}发布 ${Order} 命令,目标点:(${X},${Y})
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupPointOrderById(whichGroup: group, order: number, x: number, y: number): boolean;

/**
 * 发布命令(指定点)(ID)  
 * 对 ${单位组}发布 ${Order} 命令,目标: ${指定点}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupPointOrderByIdLoc(whichGroup: group, order: number, whichLocation: location): boolean;

/**
 * 发布命令(指定单位)  
 * 对 ${单位组} 发布 ${Order} 命令,目标: ${单位}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean;

/**
 * 发布命令(指定单位)(ID)  
 * 对 ${单位组} 发布 ${Order} 命令,目标: ${单位}
 *
 * @remark
 * 最多只能对单位组中12个单位发布命令.
 *
 * @TC_UNITGROUP
 */
declare function GroupTargetOrderById(whichGroup: group, order: number, targetWidget: widget): boolean;

/**
 * 选取单位组内单位做动作  
 * 选取 ${单位组} 内所有单位 ${做动作}
 *
 * @remark
 * 使用'选取单位'来取代相应的单位. 对于单位组内每个单位都会运行一次动作(包括死亡的,不包括隐藏的). 等待不能在组动作中运行.
 *
 * @TC_UNITGROUP
 */
declare function ForGroup(whichGroup: group, callback: () => void): void;

/**
 * 单位组中第一个单位  
 * ${单位组} 中第一个单位
 *
 * @TC_NOTHING
 */
declare function FirstOfGroup(whichGroup: group): unit;

/**
 * 新建玩家组 [R]  
 * 新建空玩家组
 *
 * @remark
 * 会创建玩家组.
 *
 * @TC_NOTHING
 */
declare function CreateForce(): force;

/**
 * 删除玩家组 [R]  
 * 删除 ${玩家组}
 *
 * @remark
 * 注意: 不要删除系统预置的玩家组.
 *
 * @TC_PLAYERGROUP
 */
declare function DestroyForce(whichForce: force): void;

/**
 * 添加玩家 [R]  
 *  ${玩家组} 添加 ${玩家}
 *
 * @remark
 * 并不影响玩家本身.
 *
 * @TC_PLAYERGROUP
 */
declare function ForceAddPlayer(whichForce: force, whichPlayer: player): void;

/**
 * 移除玩家 [R]  
 * 从 ${玩家组} 中移除 ${玩家}
 *
 * @remark
 * 并不影响玩家本身.
 *
 * @TC_PLAYERGROUP
 */
declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): void;

/**
 * 清空玩家组  
 * 清空 ${玩家组} 内所有玩家
 *
 * @remark
 * 并不影响玩家本身.
 *
 * @TC_PLAYERGROUP
 */
declare function ForceClear(whichForce: force): void;
declare function ForceEnumPlayers(whichForce: force, filter: boolexpr | (() => boolean) | null): void;
declare function ForceEnumPlayersCounted(whichForce: force, filter: boolexpr | (() => boolean) | null, countLimit: number): void;
declare function ForceEnumAllies(whichForce: force, whichPlayer: player, filter: boolexpr | (() => boolean) | null): void;
declare function ForceEnumEnemies(whichForce: force, whichPlayer: player, filter: boolexpr | (() => boolean) | null): void;

/**
 * 选取玩家组内玩家做动作  
 * 选取 ${玩家组} 内所有玩家 ${做动作}
 *
 * @remark
 * 玩家组动作中可使用'选取玩家'来获取对应的玩家. 等待不能在组动作中运行.
 *
 * @TC_PLAYERGROUP
 */
declare function ForForce(whichForce: force, callback: () => void): void;

/**
 * 新建矩形区域(指定边角坐标)  
 * 左下角为(${X1}, ${Y1}),右上角为(${X2}, ${Y2})的矩形区域
 *
 * @remark
 * 会创建矩形区域.
 *
 * @TC_NOTHING
 */
declare function Rect(minx: number, miny: number, maxx: number, maxy: number): rect;

/**
 * 新建矩形区域(指定边角点)  
 * 左下角为 ${点1} ,右上角为 ${点2} 的矩形区域
 *
 * @remark
 * 会创建矩形区域.
 *
 * @TC_NOTHING
 */
declare function RectFromLoc(min: location, max: location): rect;

/**
 * 删除矩形区域 [R]  
 * 删除 ${矩形区域}
 *
 * @TC_RECT
 */
declare function RemoveRect(whichRect: rect): void;

/**
 * 设置矩形区域(指定坐标) [R]  
 * 重新设置 ${矩形区域} ,左下角坐标为(${X},${Y}), 右上角坐标为(${X},${Y})
 *
 * @remark
 * 该区域必须是一个变量. 重新设置矩形区域的大小和位置.
 *
 * @TC_RECT
 */
declare function SetRect(whichRect: rect, minx: number, miny: number, maxx: number, maxy: number): void;

/**
 * 设置矩形区域(指定点) [R]  
 * 重新设置 ${矩形区域} ,左下角点为 ${点} 右上角点为 ${点}
 *
 * @remark
 * 该区域必须是一个变量. 重新设置矩形区域的大小和位置.
 *
 * @TC_RECT
 */
declare function SetRectFromLoc(whichRect: rect, min: location, max: location): void;

/**
 * 移动矩形区域(指定坐标) [R]  
 * 移动 ${矩形区域} 到(${X},${Y})
 *
 * @remark
 * 该区域必须是一个变量. 目标点将作为该区域的新中心点.
 *
 * @TC_RECT
 */
declare function MoveRectTo(whichRect: rect, newCenterX: number, newCenterY: number): void;

/**
 * 移动矩形区域(指定点)  
 * 移动 ${矩形区域} 到 ${目标点}
 *
 * @remark
 * 该区域必须是一个变量. 目标点将作为该区域的新中心点.
 *
 * @TC_RECT
 */
declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): void;

/**
 * 中心X坐标  
 * ${矩形区域} 的中心X坐标
 *
 * @TC_RECT
 */
declare function GetRectCenterX(whichRect: rect): number;

/**
 * 中心Y坐标  
 * ${矩形区域} 的中心Y坐标
 *
 * @TC_RECT
 */
declare function GetRectCenterY(whichRect: rect): number;

/**
 * 左下角X坐标  
 * ${矩形区域} 的左下角X坐标
 *
 * @TC_RECT
 */
declare function GetRectMinX(whichRect: rect): number;

/**
 * 左下角Y坐标  
 * ${矩形区域} 的左下角Y坐标
 *
 * @TC_RECT
 */
declare function GetRectMinY(whichRect: rect): number;

/**
 * 右上角X坐标  
 * ${矩形区域} 的右上角X坐标
 *
 * @TC_RECT
 */
declare function GetRectMaxX(whichRect: rect): number;

/**
 * 右上角Y坐标  
 * ${矩形区域} 的右上角Y坐标
 *
 * @TC_RECT
 */
declare function GetRectMaxY(whichRect: rect): number;

/**
 * 新建区域 [R]  
 * 新建区域
 *
 * @remark
 * 会创建一个新的不规则区域,如果不往该区域添加点或地区,则该区域无效果.
 *
 * @TC_REGION
 */
declare function CreateRegion(): region;

/**
 * 删除不规则区域 [R]  
 * 删除 ${不规则区域}
 *
 * @TC_REGION
 */
declare function RemoveRegion(whichRegion: region): void;

/**
 * 添加区域 [R]  
 * 对 ${不规则区域} 添加 ${矩形区域}
 *
 * @remark
 * 区域是游戏中一个游戏地区的集合体,可以包含地区和点.
 *
 * @TC_REGION
 */
declare function RegionAddRect(whichRegion: region, r: rect): void;

/**
 * 移除区域 [R]  
 * 在 ${不规则区域} 中移除 ${矩形区域}
 *
 * @TC_REGION
 */
declare function RegionClearRect(whichRegion: region, r: rect): void;

/**
 * 添加单元点(指定坐标) [R]  
 * 对 ${不规则区域} 添加单元点: (${X},${Y})
 *
 * @remark
 * 单元点大小为32x32.
 *
 * @TC_REGION
 */
declare function RegionAddCell(whichRegion: region, x: number, y: number): void;

/**
 * 添加单元点(指定点) [R]  
 * 对 ${不规则区域} 添加单元点: ${点}
 *
 * @remark
 * 单元点大小为32x32.
 *
 * @TC_REGION
 */
declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): void;

/**
 * 移除单元点(指定坐标) [R]  
 * 在 ${不规则区域} 中移除单元点: (${X},${Y})
 *
 * @remark
 * 单元点大小为32x32.
 *
 * @TC_REGION
 */
declare function RegionClearCell(whichRegion: region, x: number, y: number): void;

/**
 * 移除单元点(指定点) [R]  
 * 在 ${不规则区域} 中移除单元点: ${点}
 *
 * @remark
 * 单元点大小为32x32.
 *
 * @TC_REGION
 */
declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): void;

/**
 * 坐标点  
 * 坐标(${X}, ${Y})
 *
 * @remark
 * 会创建点.
 *
 * @TC_CONVERSION
 */
declare function Location(x: number, y: number): location;

/**
 * 清除点 [R]  
 * 清除 ${点}
 *
 * @remark
 * 点是堆积最多的垃圾资源,不需要再使用的点都要记得清除掉.
 *
 * @TC_LOCATION
 */
declare function RemoveLocation(whichLocation: location): void;

/**
 * 移动点 [R]  
 * 移动 ${点} 到(${X},${Y})
 *
 * @remark
 * 该点必须是一个变量. 因为移动一个不可重用的点是无意义的.
 *
 * @TC_LOCATION
 */
declare function MoveLocation(whichLocation: location, newX: number, newY: number): void;

/**
 * 点的X轴坐标  
 * ${点} 的X轴坐标
 *
 * @TC_NOTHING
 */
declare function GetLocationX(whichLocation: location): number;

/**
 * 点的Y轴坐标  
 * ${点} 的Y轴坐标
 *
 * @TC_NOTHING
 */
declare function GetLocationY(whichLocation: location): number;

/**
 * 点的Z轴高度 [R]  
 * ${点} 的Z轴高度
 *
 * @TC_NOTHING
 */
declare function GetLocationZ(whichLocation: location): number;

/**
 * 在不规则区域内 [R]  
 * ${不规则区域} 内存在 ${单位}
 *
 * @TC_UNIT
 */
declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean;

/**
 * 包含坐标  
 * ${不规则区域} 内包含坐标(${X},${Y})
 *
 * @remark
 * TC_REGION
 *
 * @TC_REGION
 */
declare function IsPointInRegion(whichRegion: region, x: number, y: number): boolean;

/**
 * 包含点  
 * ${不规则区域} 内包含点: ${点}
 *
 * @remark
 * TC_REGION
 *
 * @TC_REGION
 */
declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean;
declare function GetWorldBounds(): rect;

/**
 * 新建触发 [R]  
 * 新建触发
 *
 * @remark
 * 会创建一个新的触发器,如果对该功能不熟悉请慎用.
 *
 * @TC_TRIGGER
 */
declare function CreateTrigger(): trigger;

/**
 * 删除触发器 [R]  
 * 删除 ${触发器}
 *
 * @remark
 * 对不再使用的触发器可以使用该动作来删除.
 *
 * @TC_TRIGGER
 */
declare function DestroyTrigger(whichTrigger: trigger): void;
declare function ResetTrigger(whichTrigger: trigger): void;

/**
 * 开启触发  
 * 开启 ${Trigger}
 *
 * @TC_TRIGGER
 */
declare function EnableTrigger(whichTrigger: trigger): void;

/**
 * 关闭触发  
 * 关闭 ${Trigger}
 *
 * @TC_TRIGGER
 */
declare function DisableTrigger(whichTrigger: trigger): void;

/**
 * 触发开启  
 * ${触发} 处于开启状态
 *
 * @TC_TRIGGER
 */
declare function IsTriggerEnabled(whichTrigger: trigger): boolean;
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): void;
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean;

/**
 * 匹配单位  
 * 匹配单位
 *
 * @remark
 * 在'选取单位满足条件'之类功能的条件中,指代被判断单位.
 *
 * @TC_NOTHING
 */
declare function GetFilterUnit(): unit;

/**
 * 选取单位  
 * 选取单位
 *
 * @remark
 * 使用'选取单位做动作'时, 指代相应的单位.
 *
 * @TC_NOTHING
 */
declare function GetEnumUnit(): unit;

/**
 * 匹配的可破坏物  
 * 匹配的可破坏物
 *
 * @remark
 * 在'选取可破坏物满足条件'之类功能的条件中,指代被判断的可破坏物.
 *
 * @TC_NOTHING
 */
declare function GetFilterDestructable(): destructable;

/**
 * 选取的可破坏物  
 * 选取的可破坏物
 *
 * @remark
 * 使用'选取可破坏物做动作'时, 指代相应的可破坏物.
 *
 * @TC_NOTHING
 */
declare function GetEnumDestructable(): destructable;

/**
 * 匹配物品  
 * 匹配物品
 *
 * @remark
 * 在'选取物品满足条件'之类功能的条件中,指代被判断单位.
 *
 * @TC_NOTHING
 */
declare function GetFilterItem(): item;

/**
 * 选取物品  
 * 选取物品
 *
 * @remark
 * 使用'选取物品做动作'时, 指代相应的物品.
 *
 * @TC_NOTHING
 */
declare function GetEnumItem(): item;

/**
 * 匹配玩家  
 * 匹配玩家
 *
 * @remark
 * 在'选取玩家满足条件'之类功能的条件中,指代被判断玩家.
 *
 * @TC_NOTHING
 */
declare function GetFilterPlayer(): player;

/**
 * 选取玩家  
 * 选取玩家
 *
 * @remark
 * 使用'选取玩家做动作'时, 指代相应的玩家.
 *
 * @TC_NOTHING
 */
declare function GetEnumPlayer(): player;

/**
 * 当前触发  
 * 当前触发
 *
 * @remark
 * 当前所运行的触发器.
 *
 * @TC_NOTHING
 */
declare function GetTriggeringTrigger(): trigger;
declare function GetTriggerEventId(): eventid;

/**
 * 触发条件判断次数  
 * ${Trigger} 的触发条件判断次数
 *
 * @TC_TRIGGER
 */
declare function GetTriggerEvalCount(whichTrigger: trigger): number;

/**
 * 触发动作运行次数  
 * ${Trigger} 的触发动作运行次数
 *
 * @TC_TRIGGER
 */
declare function GetTriggerExecCount(whichTrigger: trigger): number;

/**
 * 运行函数 [R]  
 * 运行: ${函数名}
 *
 * @remark
 * 使用该功能运行的函数与触发独立, 只能运行自定义无参数函数.
 *
 * @TC_NOTHING
 */
declare function ExecuteFunc(funcName: string): void;
declare function And(operandA: boolexpr | (() => boolean) | null, operandB: boolexpr | (() => boolean) | null): boolexpr;
declare function Or(operandA: boolexpr | (() => boolean) | null, operandB: boolexpr | (() => boolean) | null): boolexpr;
declare function Not(operand: boolexpr | (() => boolean) | null): boolexpr;
declare function Condition(func: () => boolean): conditionfunc;
declare function DestroyCondition(c: conditionfunc): void;
declare function Filter(func: () => boolean): filterfunc;
declare function DestroyFilter(f: filterfunc): void;
declare function DestroyBoolExpr(e: boolexpr | (() => boolean) | null): void;

/**
 * 实数变量事件  
 * ${变量} 的值 ${Operation} ${值}
 *
 * @remark
 * 这个事件只适用于实数类型的变量.
 *
 * @TC_GAME
 */
declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: number): event;
declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: number, periodic: boolean): event;
declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event;
declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: number): event;
declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event;

/**
 * 对话框按钮被点击 [R]  
 * ${对话框按钮} 被点击
 *
 * @remark
 * 指定对话框按钮被点击,该事件一般需要在其他触发为其添加.
 *
 * @TC_DIALOG
 */
declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event;
declare function GetEventGameState(): gamestate;

/**
 * 比赛游戏事件  
 * 该游戏将在 ${Event Type} 后结束
 *
 * @remark
 * 该事件只出现在Battle.net的自动匹配游戏.
 *
 * @TC_GAME
 */
declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event;
declare function GetWinningPlayer(): player;

/**
 * 单位进入不规则区域(指定条件) [R]  
 * 单位进入 ${区域} 并满足 ${条件}
 *
 * @remark
 * 使用'事件响应 - 进入的单位'来响应进入该区域的单位. 该事件需要在其他触发为其添加.
 *
 * @TC_UNIT
 */
declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr | (() => boolean) | null): event;

/**
 * 触发区域 [R]  
 * 触发区域
 *
 * @remark
 * 响应单位进入/离开不规则区域事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTriggeringRegion(): region;

/**
 * 进入的单位  
 * 进入的单位
 *
 * @remark
 * 响应'单位进入区域'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEnteringUnit(): unit;

/**
 * 单位离开不规则区域(指定条件) [R]  
 * 单位离开 ${区域} 并满足 ${条件}
 *
 * @remark
 * 使用'事件响应 - 离开的单位'来响应离开该区域的单位. 该事件需要在其他触发为其添加.
 *
 * @TC_UNIT
 */
declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr | (() => boolean) | null): event;

/**
 * 离开的单位  
 * 离开的单位
 *
 * @remark
 * 响应'单位离开区域'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetLeavingUnit(): unit;

/**
 * 鼠标点击可追踪物 [R]  
 * 鼠标点击 ${可追踪物}
 *
 * @TC_TRACKABLE
 */
declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event;

/**
 * 鼠标移动到追踪对象 [R]  
 * 鼠标移动到 ${可追踪物}
 *
 * @TC_TRACKABLE
 */
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event;

/**
 * 事件响应 - 触发可追踪物 [R]  
 * 事件响应 - 触发可追踪物
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTriggeringTrackable(): trackable;
declare function GetClickedButton(): button;
declare function GetClickedDialog(): dialog;

/**
 * 比赛剩余时间  
 * 比赛剩余时间
 *
 * @remark
 * 响应'比赛事件'游戏将要结束. 单位为秒.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTournamentFinishSoonTimeRemaining(): number;

/**
 * 比赛结束规则  
 * 比赛结束规则
 *
 * @remark
 * 1表示游戏开始时间已经超过限定时,无法以平局结束. 其他值表示游戏还在初期阶段,此时退出游戏将以平局结束..
 *
 * @TC_GAME
 */
declare function GetTournamentFinishNowRule(): number;
declare function GetTournamentFinishNowPlayer(): player;

/**
 * 对战比赛得分  
 * ${Player} 的当前对战比赛得分
 *
 * @remark
 * 对战游戏时如果游戏时间过长,系统将以该值来决定胜负.
 *
 * @TC_GAME
 */
declare function GetTournamentScore(whichPlayer: player): number;

/**
 * 存档文件名  
 * 存档文件名
 *
 * @remark
 * 响应'游戏 - 保存进度'事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSaveBasicFilename(): string;
declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event;

/**
 * 触发玩家  
 * 触发玩家
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTriggerPlayer(): player;
declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr | (() => boolean) | null): event;

/**
 * 升级的英雄  
 * 升级的英雄
 *
 * @remark
 * 响应'提升等级'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetLevelingUnit(): unit;

/**
 * 学习技能的英雄  
 * 学习技能的英雄
 *
 * @remark
 * 响应'学习技能'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetLearningUnit(): unit;

/**
 * 学习技能 [R]  
 * 学习技能
 *
 * @remark
 * 响应'学习技能'单位事件, 指代被学习的技能.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetLearnedSkill(): number;

/**
 * 学习技能等级  
 * 学习技能等级
 *
 * @remark
 * 响应'学习技能'单位事件,指代被学习技能的等级. 注意,该值为学习后的等级.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetLearnedSkillLevel(): number;

/**
 * 可复活英雄  
 * 可复活英雄
 *
 * @remark
 * 响应'变为可复活的'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetRevivableUnit(): unit;

/**
 * 复活英雄  
 * 复活英雄
 *
 * @remark
 * 响应'开始/取消/完成复活'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetRevivingUnit(): unit;

/**
 * 攻击单位  
 * 攻击单位
 *
 * @remark
 * 响应'被攻击'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetAttacker(): unit;
declare function GetRescuer(): unit;

/**
 * 死亡单位  
 * 死亡单位
 *
 * @remark
 * 响应'死亡'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetDyingUnit(): unit;
declare function GetKillingUnit(): unit;

/**
 * 腐化的单位  
 * 腐化的单位
 *
 * @remark
 * 响应'开始腐化'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetDecayingUnit(): unit;

/**
 * 正在建造的建筑  
 * 正在建造的建筑
 *
 * @remark
 * 响应'开始建造建筑'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetConstructingStructure(): unit;

/**
 * 被取消的建筑  
 * 被取消的建筑
 *
 * @remark
 * 响应'取消建造建筑'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetCancelledStructure(): unit;

/**
 * 完成的建筑  
 * 完成的建筑
 *
 * @remark
 * 响应'完成建造建筑'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetConstructedStructure(): unit;

/**
 * 研究科技的单位  
 * 研究科技的单位
 *
 * @remark
 * 响应'开始/取消/完成科技研究'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetResearchingUnit(): unit;

/**
 * 被研究科技  
 * 被研究科技
 *
 * @remark
 * 响应'开始/取消/完成科技研究'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetResearched(): number;

/**
 * 训练单位类型  
 * 训练单位类型
 *
 * @remark
 * 响应'开始/取消/完成训练单位'单位事件, 指代所训练的单位类型.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTrainedUnitType(): number;

/**
 * 训练单位  
 * 训练单位
 *
 * @remark
 * 响应'完成训练单位'单位事件,指代被训练单位.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTrainedUnit(): unit;
declare function GetDetectedUnit(): unit;

/**
 * 召唤者  
 * 召唤者
 *
 * @remark
 * 响应'召唤单位'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSummoningUnit(): unit;

/**
 * 召唤单位  
 * 召唤单位
 *
 * @remark
 * 响应'召唤单位'单位事件,指代被召唤单位.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSummonedUnit(): unit;
declare function GetTransportUnit(): unit;
declare function GetLoadedUnit(): unit;

/**
 * 贩卖者  
 * 贩卖者
 *
 * @remark
 * 响应'出售单位','出售物品'或'抵押物品'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSellingUnit(): unit;

/**
 * 被贩卖单位  
 * 被贩卖单位
 *
 * @remark
 * 响应'出售单位'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSoldUnit(): unit;

/**
 * 购买者  
 * 购买者
 *
 * @remark
 * 响应'出售单位','出售物品'或'抵押物品'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetBuyingUnit(): unit;

/**
 * 被售出物品  
 * 被售出物品
 *
 * @remark
 * 响应'出售物品'或'抵押物品'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSoldItem(): item;

/**
 * 被改变所有者的单位  
 * 被改变所有者的单位
 *
 * @remark
 * 响应'改变所有者'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetChangingUnit(): unit;

/**
 * 原所有者  
 * 原所有者
 *
 * @remark
 * 响应'改变所有者'单位事件,指代单位原来的所有者.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetChangingUnitPrevOwner(): player;

/**
 * 操作物品的单位  
 * 操作物品的单位
 *
 * @remark
 * 响应'使用/获得/丢失物品'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetManipulatingUnit(): unit;

/**
 * 被操作物品  
 * 被操作物品
 *
 * @remark
 * 响应'使用/得到/丢弃物品'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetManipulatedItem(): item;

/**
 * 发布命令的单位  
 * 发布命令的单位
 *
 * @remark
 * 响应'发布命令'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderedUnit(): unit;
declare function GetIssuedOrderId(): number;

/**
 * 命令发布点X坐标 [R]  
 * 命令发布点X坐标
 *
 * @remark
 * 用坐标代替点可以省去创建、删除点的麻烦.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderPointX(): number;

/**
 * 命令发布点Y坐标 [R]  
 * 命令发布点Y坐标
 *
 * @remark
 * 用坐标代替点可以省去创建、删除点的麻烦.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderPointY(): number;

/**
 * 命令发布点  
 * 命令发布点
 *
 * @remark
 * 响应'发布指定点目标命令'单位事件. 会创建点.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderPointLoc(): location;
declare function GetOrderTarget(): widget;

/**
 * 命令发布目标(可破坏物)  
 * 命令发布目标
 *
 * @remark
 * 响应'发布指定物体目标命令'单位事件并以可破坏物为目标时.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderTargetDestructable(): destructable;

/**
 * 命令发布目标  
 * 命令发布目标
 *
 * @remark
 * 响应'发布指定物体目标命令'单位事件并以物品为目标时.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderTargetItem(): item;

/**
 * 命令发布目标  
 * 命令发布目标
 *
 * @remark
 * 响应'发布指定物体目标命令'单位事件并以单位为目标时.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetOrderTargetUnit(): unit;

/**
 * 施法单位  
 * 施法单位
 *
 * @remark
 * 响应'施放技能'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellAbilityUnit(): unit;

/**
 * 施放技能  
 * 施放技能
 *
 * @remark
 * 响应施放技能单位事件, 指代被施放的技能.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellAbilityId(): number;
declare function GetSpellAbility(): ability;

/**
 * 技能施放点  
 * 技能施放点
 *
 * @remark
 * 响应'技能施放'单位事件. 注意技能施放结束将无法捕获该点. 会创建点.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetLoc(): location;

/**
 * 技能施放点X坐标  
 * 获取技能目标点的X坐标
 *
 * @remark
 * 这是1.24的函数，但已加入函数库，在1.20也可以使用。
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetX(): number;

/**
 * 技能施放点Y坐标  
 * 获取技能目标点的Y坐标
 *
 * @remark
 * 这是1.24的函数，但已加入函数库，在1.20也可以使用。
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetY(): number;

/**
 * 技能施放目标(可破坏物)  
 * 技能施放目标
 *
 * @remark
 * 响应'施放技能'单位事件并以可破坏物为目标时. 注意: 技能施放结束将无法捕获施放目标.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetDestructable(): destructable;

/**
 * 技能施放目标  
 * 技能施放目标
 *
 * @remark
 * 响应施放技能单位事件并以物品为目标时. 注意: 技能施放结束将无法捕获施放目标.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetItem(): item;

/**
 * 技能施放目标  
 * 技能施放目标
 *
 * @remark
 * 响应'施放技能'单位事件并以单位为目标时. 注意: 技能施放结束将无法捕获施放目标.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetSpellTargetUnit(): unit;

/**
 * 联盟状态更改(指定项目)  
 * ${Player} 更改 ${Alliance Type} 设置
 *
 * @remark
 * 当改变项目为【共享单位】时，(触发玩家)会不生效，此时不建议使用【任意玩家】事件。
 *
 * @TC_PLAYER
 */
declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event;

/**
 * 属性事件  
 * ${玩家} 的 ${Property} 属性 ${Operation} ${值}
 *
 * @TC_PLAYER
 */
declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: number): event;
declare function GetEventPlayerState(): playerstate;

/**
 * 输入聊天信息  
 * ${玩家} 输入 ${Text} ,信息过滤方式 ${Match Type}
 *
 * @remark
 * 事件ID是(096)
 *
 * @TC_PLAYER
 */
declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event;

/**
 * 输入的聊天信息  
 * 输入的聊天信息
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEventPlayerChatString(): string;

/**
 * 匹配的聊天信息  
 * 匹配的聊天信息
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEventPlayerChatStringMatched(): string;

/**
 * 可破坏物死亡  
 * ${可破坏物} 死亡
 *
 * @remark
 * 使用'事件响应 - 死亡的可破坏物'来获取死亡物体.
 *
 * @TC_DESTRUCT
 */
declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event;

/**
 * 触发单位  
 * 触发单位
 *
 * @TC_EVENTRESPONSE
 */
declare function GetTriggerUnit(): unit;
declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: number): event;
declare function GetEventUnitState(): unitstate;

/**
 * 指定单位事件  
 * ${指定单位} ${事件}
 *
 * @TC_UNIT
 */
declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event;

/**
 * 伤害值  
 * 单位所受伤害
 *
 * @remark
 * 响应'受到伤害'单位事件,指代单位所受伤害.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEventDamage(): number;

/**
 * 伤害来源  
 * 伤害来源
 *
 * @remark
 * 响应'受到伤害'单位事件.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEventDamageSource(): unit;
declare function GetEventDetectingPlayer(): player;
declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr | (() => boolean) | null): event;

/**
 * 事件目标单位  
 * 事件目标单位
 *
 * @remark
 * 响应'注意到/获取攻击目标'单位事件,指代目标单位.
 *
 * @TC_EVENTRESPONSE
 */
declare function GetEventTargetUnit(): unit;
declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: number, filter: boolexpr | (() => boolean) | null): event;
declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr | (() => boolean) | null): triggercondition;
declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): void;
declare function TriggerClearConditions(whichTrigger: trigger): void;
declare function TriggerAddAction(whichTrigger: trigger, actionFunc: () => void): triggeraction;
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): void;
declare function TriggerClearActions(whichTrigger: trigger): void;

/**
 * 等待(玩家时间)  
 * 等待 ${Time} 秒
 *
 * @remark
 * 该延迟功能受真实时间的影响(也就是玩家机器上的时间). 因此每个玩家所延迟的时间可能不一致.
 *
 * @TC_WAIT
 */
declare function TriggerSleepAction(timeout: number): void;
declare function TriggerWaitForSound(s: sound, offset: number): void;

/**
 * 触发条件成立  
 * ${触发} 的条件成立
 *
 * @TC_TRIGGER
 */
declare function TriggerEvaluate(whichTrigger: trigger): boolean;

/**
 * 运行触发(无视条件)  
 * 运行 ${触发} (无视条件)
 *
 * @remark
 * 无视事件和条件,运行触发动作.
 *
 * @TC_TRIGGER
 */
declare function TriggerExecute(whichTrigger: trigger): void;
declare function TriggerExecuteWait(whichTrigger: trigger): void;
declare function TriggerSyncStart(): void;
declare function TriggerSyncReady(): void;
declare function GetWidgetLife(whichWidget: widget): number;
declare function SetWidgetLife(whichWidget: widget, newLife: number): void;
declare function GetWidgetX(whichWidget: widget): number;
declare function GetWidgetY(whichWidget: widget): number;
declare function GetTriggerWidget(): widget;
declare function CreateDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable;

/**
 * 新建可破坏物 [R]  
 * 新建的 ${可破坏物类型} 在(${X},${Y},${Z}),面向角度: ${Direction} 尺寸缩放: ${Scale} 样式: ${Variation}
 *
 * @remark
 * 坐标为(X,Y,Z)格式. 面向角度采用角度制,0度为正东方向,90度为正北方向.
 *
 * @TC_NOTHING
 */
declare function CreateDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable;
declare function CreateDeadDestructable(objectid: number, x: number, y: number, face: number, scale: number, variation: number): destructable;

/**
 * 新建可破坏物(死亡的) [R]  
 * 新建死亡的 ${可破坏物类型} 在(${X},${Y},${Z),面向角度: }${Direction} 尺寸缩放: ${Scale} 样式: ${Variation}
 *
 * @remark
 * 坐标为(X,Y,Z)格式. 面向角度采用角度制,0度为正东方向,90度为正北方向.
 *
 * @TC_NOTHING
 */
declare function CreateDeadDestructableZ(objectid: number, x: number, y: number, z: number, face: number, scale: number, variation: number): destructable;

/**
 * 删除  
 * 删除 ${可破坏物}
 *
 * @TC_DESTRUCT
 */
declare function RemoveDestructable(d: destructable): void;

/**
 * 杀死  
 * 杀死 ${可破坏物}
 *
 * @TC_DESTRUCT
 */
declare function KillDestructable(d: destructable): void;
declare function SetDestructableInvulnerable(d: destructable, flag: boolean): void;
declare function IsDestructableInvulnerable(d: destructable): boolean;
declare function EnumDestructablesInRect(r: rect, filter: boolexpr | (() => boolean) | null, actionFunc: () => void): void;

/**
 * 指定可破坏物的类型  
 * ${可破坏物} 的类型
 *
 * @TC_NOTHING
 */
declare function GetDestructableTypeId(d: destructable): number;

/**
 * 可破坏物所在X轴坐标 [R]  
 * ${可破坏物} 所在X轴坐标
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableX(d: destructable): number;

/**
 * 可破坏物所在Y轴坐标 [R]  
 * ${可破坏物} 所在Y轴坐标
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableY(d: destructable): number;

/**
 * 设置生命值(指定值)  
 * 设置 ${可破坏物} 的生命值为 ${Value}
 *
 * @TC_DESTRUCT
 */
declare function SetDestructableLife(d: destructable, life: number): void;

/**
 * 生命值  
 * ${可破坏物} 的当前生命值
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableLife(d: destructable): number;
declare function SetDestructableMaxLife(d: destructable, max: number): void;

/**
 * 最大生命值  
 * ${可破坏物} 的最大生命值
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableMaxLife(d: destructable): number;

/**
 * 复活  
 * 复活 ${Destructible} ,设置生命值为 ${Value} 并 ${Show/Hide} 生长动画
 *
 * @TC_DESTRUCT
 */
declare function DestructableRestoreLife(d: destructable, life: number, birth: boolean): void;
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): void;
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): void;

/**
 * 改变可破坏物动画播放速度 [R]  
 * 改变 ${可破坏物} 的动画播放速度为正常的 ${Percent}倍
 *
 * @remark
 * 设置1倍动画播放速度来恢复正常状态.
 *
 * @TC_ANIMATION
 */
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: number): void;

/**
 * 显示/隐藏 [R]  
 * 设置 ${可破坏物} 的状态为 ${Show/Hide}
 *
 * @remark
 * 隐藏的可破坏物不被显示,但仍影响通行和视线.
 *
 * @TC_DESTRUCT
 */
declare function ShowDestructable(d: destructable, flag: boolean): void;

/**
 * 闭塞高度  
 * ${可破坏物} 的闭塞高度
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableOccluderHeight(d: destructable): number;

/**
 * 设置闭塞高度  
 * 设置 ${可破坏物} 的闭塞高度为 ${Height}
 *
 * @TC_DESTRUCT
 */
declare function SetDestructableOccluderHeight(d: destructable, height: number): void;

/**
 * 物件名字  
 * ${物件} 的名字
 *
 * @TC_DESTRUCT
 */
declare function GetDestructableName(d: destructable): string;
declare function GetTriggerDestructable(): destructable;

/**
 * 创建  
 * 新建 ${物品} 在(${X},${Y})
 *
 * @TC_ITEM
 */

/**
 * 新建物品 [R]  
 * 新建 ${物品} 在(${X},${Y})
 *
 * @TC_NOTHING
 */
declare function CreateItem(itemid: number, x: number, y: number): item;

/**
 * 删除  
 * 删除 ${物品}
 *
 * @TC_ITEM
 */
declare function RemoveItem(whichItem: item): void;

/**
 * 物品所属玩家  
 * ${物品} 的所属玩家
 *
 * @remark
 * 与持有者无关,默认为中立被动玩家.
 *
 * @TC_NOTHING
 */
declare function GetItemPlayer(whichItem: item): player;

/**
 * 指定物品的类型  
 * ${物品} 的类型
 *
 * @TC_NOTHING
 */
declare function GetItemTypeId(i: item): number;

/**
 * 物品的X轴坐标 [R]  
 * ${物品} 的X轴坐标
 *
 * @TC_ITEM
 */
declare function GetItemX(i: item): number;

/**
 * 物品的Y轴坐标 [R]  
 * ${物品} 的Y轴坐标
 *
 * @TC_ITEM
 */
declare function GetItemY(i: item): number;

/**
 * 移动物品到坐标(立即)(指定坐标) [R]  
 * 移动 ${物品} 到(${X},${Y})
 *
 * @TC_ITEM
 */
declare function SetItemPosition(i: item, x: number, y: number): void;
declare function SetItemDropOnDeath(whichItem: item, flag: boolean): void;
declare function SetItemDroppable(i: item, flag: boolean): void;

/**
 * 设置物品可否抵押  
 * 设置 ${物品} ${Pawnable/Unpawnable}
 *
 * @remark
 * 不可抵押物品不能被卖到商店.
 *
 * @TC_ITEM
 */
declare function SetItemPawnable(i: item, flag: boolean): void;
declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): void;
declare function SetItemInvulnerable(whichItem: item, flag: boolean): void;

/**
 * 物品无敌  
 * ${物品} 是无敌的
 *
 * @TC_ITEM
 */
declare function IsItemInvulnerable(whichItem: item): boolean;

/**
 * 显示/隐藏 [R]  
 * 设置 ${物品} 的状态为: ${Show/Hide}
 *
 * @remark
 * 只对在地面的物品有效,不会影响在物品栏中的物品. 单位通过触发得到一个隐藏物品时,会自动显示该物品.
 *
 * @TC_ITEM
 */
declare function SetItemVisible(whichItem: item, show: boolean): void;

/**
 * 物品可见 [R]  
 * ${物品} 是可见的
 *
 * @remark
 * 物品不被隐藏且不被单位持有时即为可见的.
 *
 * @TC_ITEM
 */
declare function IsItemVisible(whichItem: item): boolean;

/**
 * 物品被持有  
 * ${物品} 是被持有的
 *
 * @remark
 * 在物品栏中的物品都是被持有的. 就算单位正处于死亡状态.
 *
 * @TC_ITEM
 */
declare function IsItemOwned(whichItem: item): boolean;

/**
 * 物品是拾取时自动使用的 [R]  
 * ${物品} 是拾取时自动使用类物品
 *
 * @TC_ITEM
 */
declare function IsItemPowerup(whichItem: item): boolean;

/**
 * 物品可被市场随机出售 [R]  
 * ${物品} 可被市场随机出售
 *
 * @TC_ITEM
 */
declare function IsItemSellable(whichItem: item): boolean;

/**
 * 物品可被抵押 [R]  
 * ${物品} 可被抵押
 *
 * @TC_ITEM
 */
declare function IsItemPawnable(whichItem: item): boolean;
declare function IsItemIdPowerup(itemId: number): boolean;
declare function IsItemIdSellable(itemId: number): boolean;
declare function IsItemIdPawnable(itemId: number): boolean;
declare function EnumItemsInRect(r: rect, filter: boolexpr | (() => boolean) | null, actionFunc: () => void): void;

/**
 * 物品等级  
 * ${物品} 的物品等级
 *
 * @TC_ITEM
 */
declare function GetItemLevel(whichItem: item): number;

/**
 * 指定物品的分类  
 * ${物品} 的分类
 *
 * @TC_NOTHING
 */
declare function GetItemType(whichItem: item): itemtype;

/**
 * 设置重生神符的产生单位类型  
 * 设置 ${物品} 产生 ${单位类型}
 *
 * @remark
 * 设置重生神符对应的单位类型后，当英雄吃了重生神符，则会产生指定类型的单位。
 *
 * @TC_ITEM
 */
declare function SetItemDropID(whichItem: item, unitId: number): void;

/**
 * 物品名字  
 * ${物品} 的名字
 *
 * @TC_ITEM
 */
declare function GetItemName(whichItem: item): string;

/**
 * 使用次数  
 * ${物品} 的使用次数
 *
 * @remark
 * 无限使用物品将返回0.
 *
 * @TC_ITEM
 */
declare function GetItemCharges(whichItem: item): number;

/**
 * 设置物品使用次数  
 * 设置 ${物品} 的使用次数为 ${Charges}
 *
 * @remark
 * 设置为0可以使物品能无限次使用.
 *
 * @TC_ITEM
 */
declare function SetItemCharges(whichItem: item, charges: number): void;

/**
 * 物品自定义值  
 * ${物品} 的自定义值
 *
 * @remark
 * 可以使用'物品 - 设置自定义值'来设置该值.
 *
 * @TC_ITEM
 */
declare function GetItemUserData(whichItem: item): number;

/**
 * 设置物品自定义值  
 * 设置 ${物品} 的自定义值为 ${Index}
 *
 * @remark
 * 物品自定义值只用于触发器. 可以用来为物品绑定一个整型数据.
 *
 * @TC_ITEM
 */
declare function SetItemUserData(whichItem: item, data: number): void;

/**
 * 新建单位(指定坐标) [R]  
 * 新建 ${玩家} 的 ${单位} 在(${X},${Y}),面向角度:${Face} 度
 *
 * @remark
 * 在坐标创建单位，不能被'最后创建的单位'获得。
 *
 * @TC_NOTHING
 */
declare function CreateUnit(id: player, unitid: number, x: number, y: number, face: number): unit;
declare function CreateUnitByName(whichPlayer: player, unitname: string, x: number, y: number, face: number): unit;

/**
 * 新建单位(指定点) [R]  
 * 新建 ${玩家} 的 ${单位} 在 ${点} 面向角度:${Face} 度
 *
 * @TC_NOTHING
 */
declare function CreateUnitAtLoc(id: player, unitid: number, whichLocation: location, face: number): unit;
declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: number): unit;

/**
 * 新建尸体 [R]  
 * 新建 ${玩家} 的 ${单位} 的尸体在(${X},${Y}),面向角度:${Face} 度
 *
 * @TC_NOTHING
 */
declare function CreateCorpse(whichPlayer: player, unitid: number, x: number, y: number, face: number): unit;

/**
 * 杀死  
 * 杀死 ${单位}
 *
 * @TC_UNIT
 */
declare function KillUnit(whichUnit: unit): void;

/**
 * 删除  
 * 删除 ${单位}
 *
 * @remark
 * 被删除的单位不会留下尸体. 如果是英雄则不能再被复活.
 *
 * @TC_UNIT
 */
declare function RemoveUnit(whichUnit: unit): void;

/**
 * 显示/隐藏 [R]  
 * 设置 ${单位} 的状态为 ${显示/隐藏}
 *
 * @remark
 * 隐藏单位不会被'区域内单位'所选取.
 *
 * @TC_UNIT
 */
declare function ShowUnit(whichUnit: unit, show: boolean): void;

/**
 * 设置单位属性 [R]  
 * 设置 ${单位} 的 ${属性} 为 ${Value}
 *
 * @TC_UNIT
 */
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: number): void;

/**
 * 设置X坐标 [R]  
 * 设置 ${单位} 的X坐标为 ${X}
 *
 * @remark
 * 注意如果坐标超出地图边界是会出错的.
 *
 * @TC_UNIT
 */
declare function SetUnitX(whichUnit: unit, newX: number): void;

/**
 * 设置Y坐标 [R]  
 * 设置 ${单位} 的Y坐标为 ${Y}
 *
 * @remark
 * 注意如果坐标超出地图边界是会出错的.
 *
 * @TC_UNIT
 */
declare function SetUnitY(whichUnit: unit, newY: number): void;

/**
 * 移动单位(立即)(指定坐标) [R]  
 * 立即移动 ${单位} 到(${X},${Y})
 *
 * @TC_UNIT
 */
declare function SetUnitPosition(whichUnit: unit, newX: number, newY: number): void;

/**
 * 移动单位(立即)(指定点)  
 * 立即移动 ${单位} 到 ${指定点}
 *
 * @TC_UNIT
 */
declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): void;

/**
 * 设置单位面向角度 [R]  
 * 设置 ${单位} 的面向角度为 ${Angle} 度
 *
 * @remark
 * 面向角度采用角度制,0度为正东方向,90度为正北方向。速度等于单位的转身速度。
 *
 * @TC_UNIT
 */
declare function SetUnitFacing(whichUnit: unit, facingAngle: number): void;

/**
 * 设置单位面向角度(指定时间)  
 * 设置 ${单位} 的面向角度为 ${Angle} 度,使用时间 ${Time} 秒
 *
 * @remark
 * 面向角度采用角度制,0度为正东方向,90度为正北方向。不能超过单位的转身速度。
 *
 * @TC_UNIT
 */
declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: number, duration: number): void;

/**
 * 设置移动速度  
 * 设置 ${单位} 的移动速度为 ${Speed}
 *
 * @TC_UNIT
 */
declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: number): void;
declare function SetUnitFlyHeight(whichUnit: unit, newHeight: number, rate: number): void;
declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: number): void;

/**
 * 改变单位转向角度(弧度制) [R]  
 * 改变 ${单位} 的转向角度为 ${数值} (弧度制)
 *
 * @remark
 * 设置单位转身时的转向角度. 数值越大转向幅度越大. 
 *
 * @TC_ANIMATION
 */
declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: number): void;
declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: number): void;

/**
 * 锁定指定单位的警戒点 [R]  
 * 设置 ${单位} 的警戒点: ${option}
 *
 * @remark
 * 锁定并防止 AI 脚本改动单位警戒点.
 *
 * @TC_AI
 */
declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): void;

/**
 * 当前主动攻击范围  
 * ${单位} 的当前主动攻击范围
 *
 * @TC_UNIT
 */
declare function GetUnitAcquireRange(whichUnit: unit): number;

/**
 * 当前转身速度  
 * ${单位} 的当前转身速度
 *
 * @remark
 * 转身速度表示单位改变面向方向时的速度. 数值越小表示转身越慢.
 *
 * @TC_UNIT
 */
declare function GetUnitTurnSpeed(whichUnit: unit): number;

/**
 * 当前转向角度(弧度制) [R]  
 * ${单位} 的当前转向角度(弧度制)
 *
 * @remark
 * 单位转身时的转向角度. 数值越大转向幅度越大. 
 *
 * @TC_UNIT
 */
declare function GetUnitPropWindow(whichUnit: unit): number;

/**
 * 当前飞行高度  
 * ${单位} 的当前飞行高度
 *
 * @remark
 * 飞行单位可以直接改变飞行高度. 其他单位通过添加/删除 替换为飞行单位的变身技能(如乌鸦形态)之后,也能改变飞行高度.
 *
 * @TC_UNIT
 */
declare function GetUnitFlyHeight(whichUnit: unit): number;

/**
 * 默认主动攻击范围  
 * ${单位} 的默认主动攻击范围
 *
 * @TC_UNIT
 */
declare function GetUnitDefaultAcquireRange(whichUnit: unit): number;

/**
 * 默认转身速度  
 * ${单位} 的默认转身速度
 *
 * @remark
 * 转身速度表示单位改变面向方向时的速度. 数值越小表示转身越慢.
 *
 * @TC_UNIT
 */
declare function GetUnitDefaultTurnSpeed(whichUnit: unit): number;
declare function GetUnitDefaultPropWindow(whichUnit: unit): number;

/**
 * 默认飞行高度  
 * ${单位} 的默认飞行高度
 *
 * @remark
 * 飞行单位可以直接改变飞行高度. 其他单位通过添加/删除 替换为飞行单位的变身技能(如乌鸦形态)之后,也能改变飞行高度.
 *
 * @TC_UNIT
 */
declare function GetUnitDefaultFlyHeight(whichUnit: unit): number;

/**
 * 改变所属  
 * 改变 ${单位} 所属为 ${Player} 并 ${Change/Retain Color}
 *
 * @TC_UNIT
 */
declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): void;

/**
 * 改变队伍颜色  
 * 改变 ${单位} 的队伍颜色为 ${Color}
 *
 * @remark
 * 改变队伍颜色并不会改变单位所属.
 *
 * @TC_UNIT
 */
declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): void;

/**
 * 改变单位尺寸(按倍数) [R]  
 * 改变 ${单位} 的尺寸缩放为:(${X},${Y},${Z})
 *
 * @remark
 * 缩放尺寸使用(长,宽,高)格式.
 *
 * @TC_ANIMATION
 */
declare function SetUnitScale(whichUnit: unit, scaleX: number, scaleY: number, scaleZ: number): void;

/**
 * 改变单位动画播放速度(按倍数) [R]  
 * 改变 ${单位} 的动画播放速度为正常速度的 ${Percent} 倍
 *
 * @remark
 * 设置1倍动画播放速度来恢复正常状态.
 *
 * @TC_ANIMATION
 */
declare function SetUnitTimeScale(whichUnit: unit, timeScale: number): void;
declare function SetUnitBlendTime(whichUnit: unit, blendTime: number): void;

/**
 * 改变单位的颜色(RGB:0-255) [R]  
 * 改变 ${单位} 的颜色值: (${Red},${Green},${Blue}), 透明值: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). 大多数单位使用(255,255,255)的颜色值和255的Alpha值. 透明值为0是不可见的.颜色值和Alpha值取值范围为0-255.
 *
 * @TC_ANIMATION
 */
declare function SetUnitVertexColor(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;
declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): void;

/**
 * 播放单位动画  
 * 播放 ${Unit} 的 ${动画名} 动作
 *
 * @remark
 * 通过 '重置单位动作' 恢复到普通的动作.
 *
 * @TC_ANIMATION
 */
declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): void;

/**
 * 播放单位指定序号动动作 [R]  
 * 播放 ${单位} 的第${序号} 号动作
 *
 * @remark
 * 可以指定播放所有的单位动画,不过需要自己多尝试.每个单位的动作序号不一样的.
 *
 * @TC_ANIMATION
 */
declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: number): void;

/**
 * 播放单位动运作(指定概率)  
 * 播放 ${单位} 的 ${Animation Name} 动作,只用 ${Rarity} 动作
 *
 * @remark
 * 通过 '重置单位动作' 恢复到普通的动作.
 *
 * @TC_ANIMATION
 */
declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): void;

/**
 * 添加/删除 单位动画附加名 [R]  
 * 给 ${单位} 附加动作 ${Tag} ,状态为 ${Add/Remove}
 *
 * @remark
 * 比如恶魔猎手添加'alternate'会显示为恶魔形态;农民添加'gold'则为背负黄金形态.
 *
 * @TC_ANIMATION
 */
declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): void;

/**
 * 锁定身体朝向  
 * 锁定 ${单位} 的 ${Source} 朝向 ${目标单位} ,偏移坐标 (${X}, ${Y}, ${Z})
 *
 * @remark
 * 单位的该身体部件会一直朝向目标单位的偏移坐标点处,直到使用'重置身体朝向'. 坐标偏移以目标单位脚下为坐标原点.
 *
 * @TC_ANIMATION
 */
declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: number, offsetY: number, offsetZ: number): void;

/**
 * 重置身体朝向  
 * 重置 ${单位} 的身体朝向
 *
 * @remark
 * 恢复单位的身体朝向为正常状态.
 *
 * @TC_ANIMATION
 */
declare function ResetUnitLookAt(whichUnit: unit): void;

/**
 * 设置可否营救(对玩家) [R]  
 * 设置 ${单位} 对 ${玩家}${Rescuable/Unrescuable}
 *
 * @TC_UNIT
 */
declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): void;

/**
 * 设置营救范围  
 * 设置 ${单位} 的营救范围为 ${Range}
 *
 * @TC_UNIT
 */
declare function SetUnitRescueRange(whichUnit: unit, range: number): void;

/**
 * 设置英雄力量 [R]  
 * 设置 ${英雄} 的力量为 ${Value} ,(${Permanent}永久奖励)
 *
 * @remark
 * 永久奖励貌似无效项,不需要理会.
 *
 * @TC_HERO
 */
declare function SetHeroStr(whichHero: unit, newStr: number, permanent: boolean): void;

/**
 * 设置英雄敏捷 [R]  
 * 设置 ${英雄} 的敏捷为 ${Value} ,(${Permanent}永久奖励)
 *
 * @remark
 * 永久奖励貌似无效项,不需要理会.
 *
 * @TC_HERO
 */
declare function SetHeroAgi(whichHero: unit, newAgi: number, permanent: boolean): void;

/**
 * 设置英雄智力 [R]  
 * 设置 ${英雄} 的智力为 ${Value} ,(${Permanent}永久奖励)
 *
 * @remark
 * 永久奖励貌似无效项,不需要理会.
 *
 * @TC_HERO
 */
declare function SetHeroInt(whichHero: unit, newInt: number, permanent: boolean): void;

/**
 * 英雄力量 [R]  
 * ${英雄} 的力量值(${Include/Exclude} 加成)
 *
 * @TC_HERO
 */
declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): number;

/**
 * 英雄敏捷 [R]  
 * ${英雄} 的敏捷值(${Include/Exclude} 加成)
 *
 * @TC_HERO
 */
declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): number;

/**
 * 英雄智力 [R]  
 * ${英雄} 的智力值(${Include/Exclude} 加成)
 *
 * @TC_HERO
 */
declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): number;

/**
 * 降低等级 [R]  
 * 降低 ${Hero} ${Level} 个等级
 *
 * @remark
 * 只能降低等级. 英雄经验将重置为该等级的初始值.
 *
 * @TC_HERO
 */
declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: number): boolean;

/**
 * 英雄经验值  
 * ${英雄} 的经验值
 *
 * @TC_HERO
 */
declare function GetHeroXP(whichHero: unit): number;

/**
 * 设置经验值  
 * 设置 ${Hero} 的经验值为 ${Quantity} , ${Show/Hide} 升级动画
 *
 * @remark
 * 经验值不能倒退.
 *
 * @TC_HERO
 */
declare function SetHeroXP(whichHero: unit, newXpVal: number, showEyeCandy: boolean): void;

/**
 * 未分配技能点数  
 * ${英雄} 的未分配技能点数
 *
 * @TC_HERO
 */
declare function GetHeroSkillPoints(whichHero: unit): number;

/**
 * 添加剩余技能点 [R]  
 * 增加 ${英雄} ${Value} 点剩余技能点
 *
 * @TC_HERO
 */
declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: number): boolean;

/**
 * 增加经验值 [R]  
 * 增加 ${Hero} ${Quantity} 点经验值, ${Show/Hide} 升级动画
 *
 * @remark
 * 经验值不能倒退.
 *
 * @TC_HERO
 */
declare function AddHeroXP(whichHero: unit, xpToAdd: number, showEyeCandy: boolean): void;

/**
 * 设置等级  
 * 设置 ${Hero} 的英雄等级为 ${Level} , ${Show/Hide} 升级动画
 *
 * @remark
 * 如果等级有变动,英雄经验将重置为该等级的初始值.
 *
 * @TC_HERO
 */
declare function SetHeroLevel(whichHero: unit, level: number, showEyeCandy: boolean): void;

/**
 * 英雄等级  
 * ${英雄} 的英雄等级
 *
 * @TC_HERO
 */
declare function GetHeroLevel(whichHero: unit): number;

/**
 * 单位等级  
 * ${单位} 的等级
 *
 * @remark
 * 对于英雄则会返回其英雄等级.
 *
 * @TC_UNIT
 */
declare function GetUnitLevel(whichUnit: unit): number;

/**
 * 英雄称谓  
 * ${Hero} 的称谓
 *
 * @remark
 * 如圣骑士会返回'无惧的布赞恩'而不是'圣骑士'.
 *
 * @TC_HERO
 */
declare function GetHeroProperName(whichHero: unit): string;

/**
 * 允许/禁止经验获取 [R]  
 * ${Enable/Disable} ${Hero} 的经验获取
 *
 * @TC_HERO
 */
declare function SuspendHeroXP(whichHero: unit, flag: boolean): void;

/**
 * 经验不可获得  
 * ${Hero} 不可获得经验
 *
 * @remark
 * 可使用'英雄 - 允许/禁止经验获取'来设置该项.
 *
 * @TC_HERO
 */
declare function IsSuspendedXP(whichHero: unit): boolean;

/**
 * 学习技能  
 * 命令 ${Hero} 学习技能 ${Skill}
 *
 * @remark
 * 只有当英雄有剩余技能点时有效.
 *
 * @TC_HERO
 */
declare function SelectHeroSkill(whichHero: unit, abilcode: number): void;

/**
 * 单位技能等级 [R]  
 * ${单位} 的 ${技能} 技能等级
 *
 * @remark
 * 如果单位没有该技能,则返回0.
 *
 * @TC_UNIT
 */
declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

/**
 * 降低技能等级 [R]  
 * 使 ${单位} 的 ${技能} 等级降低1级
 *
 * @remark
 * 改变死亡单位的光环技能会导致魔兽崩溃.
 *
 * @TC_UNIT
 */
declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

/**
 * 提升技能等级 [R]  
 * 使 ${单位} 的 ${技能} 等级提升1级
 *
 * @remark
 * 改变死亡单位的光环技能会导致魔兽崩溃.
 *
 * @TC_UNIT
 */
declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: number): number;

/**
 * 设置技能等级 [R]  
 * 设置 ${单位} 的 ${技能} 等级为 ${Level}
 *
 * @remark
 * 改变死亡单位的光环技能会导致魔兽崩溃.
 *
 * @TC_UNIT
 */
declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: number, level: number): number;

/**
 * 立即复活(指定坐标) [R]  
 * 立即复活 ${英雄} 在(${X},${Y}), ${Show/Hide} 复活动画
 *
 * @remark
 * 如果英雄正在祭坛复活,则会退回部分花费(默认为100%).
 *
 * @TC_HERO
 */
declare function ReviveHero(whichHero: unit, x: number, y: number, doEyecandy: boolean): boolean;

/**
 * 立即复活(指定点)  
 * 立即复活 ${英雄} 在 ${指定点} , ${Show/Hide} 复活动画
 *
 * @remark
 * 如果英雄正在祭坛复活,则会退回部分花费(默认为100%).
 *
 * @TC_HERO
 */
declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean;
declare function SetUnitExploded(whichUnit: unit, exploded: boolean): void;

/**
 * 设置无敌/可攻击  
 * 设置 ${单位} ${Invulnerable/Vulnerable}
 *
 * @TC_UNIT
 */
declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): void;

/**
 * 暂停/恢复 [R]  
 * 设置 ${单位} ${Pause/Unpause}
 *
 * @TC_UNIT
 */
declare function PauseUnit(whichUnit: unit, flag: boolean): void;
declare function IsUnitPaused(whichHero: unit): boolean;

/**
 * 设置碰撞开关  
 * 设置 ${单位} ${On/Off} 碰撞
 *
 * @remark
 * 关闭碰撞的单位无视障碍物,但其他单位仍视其为障碍物.
 *
 * @TC_UNIT
 */
declare function SetUnitPathing(whichUnit: unit, flag: boolean): void;

/**
 * 清空选择(所有玩家)  
 * 清空所有玩家的选择
 *
 * @remark
 * 使玩家取消选择所有已选单位.
 *
 * @TC_UNITSEL
 */
declare function ClearSelection(): void;
declare function SelectUnit(whichUnit: unit, flag: boolean): void;

/**
 * 单位附加值  
 * ${单位} 的附加值
 *
 * @remark
 * 单位附加值不可改变. 可以做一些特殊用途. 比如TD地图中的建筑贩卖价格.
 *
 * @TC_UNIT
 */
declare function GetUnitPointValue(whichUnit: unit): number;

/**
 * 单位附加值(指定单位类型)  
 * ${单位类型} 的附加值
 *
 * @remark
 * 单位附加值不可改变. 可以做一些特殊用途. 比如TD地图中的建筑贩卖价格.
 *
 * @TC_UNIT
 */
declare function GetUnitPointValueByType(unitType: number): number;

/**
 * 给予物品 [R]  
 * 给予 ${单位} ${物品}
 *
 * @TC_HERO
 */
declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean;
declare function UnitAddItemById(whichUnit: unit, itemId: number): item;

/**
 * 新建物品到指定物品栏 [R]  
 * 给予 ${单位} ${物品类型} 并放在物品栏# ${数值}
 *
 * @remark
 * 注意: 物品栏编号从0-5,而不是1-6. 该动作创建的物品不被'最后创建的物品'所记录.
 *
 * @TC_HERO
 */
declare function UnitAddItemToSlotById(whichUnit: unit, itemId: number, itemSlot: number): boolean;
declare function UnitRemoveItem(whichUnit: unit, whichItem: item): void;
declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: number): item;

/**
 * 持有物品  
 * ${Hero} 拥有 ${物品}
 *
 * @TC_HERO
 */
declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean;

/**
 * 单位持有物品  
 * ${单位} 物品栏第 ${Index} 格的物品
 *
 * @remark
 * 第一个单位格的位置为0.
 *
 * @TC_NOTHING
 */
declare function UnitItemInSlot(whichUnit: unit, itemSlot: number): item;
declare function UnitInventorySize(whichUnit: unit): number;

/**
 * 发布丢弃物品命令(指定坐标) [R]  
 * 命令 ${单位} 丢弃物品 ${物品} 到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */

/**
 * 发布丢弃物品命令(指定坐标) [R]  
 * 命令 ${单位} 丢弃物品 ${物品} 到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */
declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;

/**
 * 移动物品到物品栏 [R]  
 * 命令 ${单位} 移动 ${物品} 到物品栏# ${Index}
 *
 * @remark
 * 只有当单位持有该物品时才有效. 注意: 该函数中物品栏编号从0-5,而不是1-6.
 *
 * @TC_UNIT
 */

/**
 * 移动物品到物品栏 [R]  
 * 命令 ${单位} 移动 ${物品} 到物品栏# ${Index}
 *
 * @remark
 * 只有当单位持有该物品时才有效. 注意: 该函数中物品栏编号从0-5,而不是1-6.
 *
 * @TC_UNIT
 */
declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: number): boolean;
declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * 使用物品(无目标)  
 * 命令 ${单位} 使用 ${物品}
 *
 * @TC_HERO
 */
declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean;

/**
 * 使用物品(指定坐标)  
 * 命令 ${单位} 使用 ${物品} ,目标坐标:(${X},${Y})
 *
 * @TC_HERO
 */
declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: number, y: number): boolean;

/**
 * 使用物品(对单位)  
 * 命令 ${单位} 使用 ${物品} ,目标: ${单位}
 *
 * @TC_HERO
 */
declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * 单位所在X轴坐标 [R]  
 * ${单位} 所在X轴坐标
 *
 * @TC_UNIT
 */
declare function GetUnitX(whichUnit: unit): number;

/**
 * 单位所在Y轴坐标 [R]  
 * ${单位} 所在Y轴坐标
 *
 * @TC_UNIT
 */
declare function GetUnitY(whichUnit: unit): number;

/**
 * 单位位置  
 * ${单位} 的位置
 *
 * @remark
 * 会创建点.
 *
 * @TC_UNIT
 */
declare function GetUnitLoc(whichUnit: unit): location;

/**
 * 面向角度  
 * ${单位} 的面向角度
 *
 * @remark
 * 采用角度制. 0度为正东方向, 90度为正北方向.
 *
 * @TC_UNIT
 */
declare function GetUnitFacing(whichUnit: unit): number;

/**
 * 当前移动速度  
 * ${单位} 的当前移动速度
 *
 * @TC_UNIT
 */
declare function GetUnitMoveSpeed(whichUnit: unit): number;

/**
 * 默认移动速度  
 * ${单位} 的默认移动速度
 *
 * @TC_UNIT
 */
declare function GetUnitDefaultMoveSpeed(whichUnit: unit): number;

/**
 * 属性 [R]  
 * ${单位} 的 ${Property}
 *
 * @TC_UNIT
 */
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): number;

/**
 * 单位所有者  
 * ${单位} 的所有者
 *
 * @TC_NOTHING
 */
declare function GetOwningPlayer(whichUnit: unit): player;

/**
 * 指定单位的类型  
 * ${单位} 的类型
 *
 * @TC_NOTHING
 */
declare function GetUnitTypeId(whichUnit: unit): number;

/**
 * 单位种族  
 * ${单位} 所属种族
 *
 * @remark
 * 物体编辑器中设置的单位所属种族.
 *
 * @TC_NOTHING
 */
declare function GetUnitRace(whichUnit: unit): race;

/**
 * 单位名字  
 * ${单位} 的名字
 *
 * @TC_UNIT
 */
declare function GetUnitName(whichUnit: unit): string;

/**
 * 单位使用人口数量  
 * ${单位} 使用的人口数量
 *
 * @TC_UNIT
 */
declare function GetUnitFoodUsed(whichUnit: unit): number;

/**
 * 单位提供人口数量  
 * ${单位} 提供的人口数量
 *
 * @TC_UNIT
 */
declare function GetUnitFoodMade(whichUnit: unit): number;

/**
 * 单位提供人口数量(指定单位类型)  
 * ${单位类型} 提供的人口数量
 *
 * @TC_UNIT
 */
declare function GetFoodMade(unitId: number): number;

/**
 * 单位使用人口数量(指定单位类型)  
 * ${单位类型} 使用的人口数量
 *
 * @TC_UNIT
 */
declare function GetFoodUsed(unitId: number): number;

/**
 * 允许/禁止 人口占用 [R]  
 * 设置 ${单位} : ${Enable/Disable} 其人口占用
 *
 * @TC_UNIT
 */
declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): void;

/**
 * 单位集结点  
 * ${单位} 的集结点位置
 *
 * @remark
 * 如果单位没有设置集结点,则返回null. 设置自己为集结点可取消集结点设置. 会创建点.
 *
 * @TC_UNIT
 */
declare function GetUnitRallyPoint(whichUnit: unit): location;

/**
 * 单位集结点目标  
 * ${单位} 的集结点目标
 *
 * @remark
 * 如果指定单位没有设置集结点到单位目标,则返回null.
 *
 * @TC_UNIT
 */
declare function GetUnitRallyUnit(whichUnit: unit): unit;

/**
 * 单位集结点目标  
 * ${单位} 的集结点目标
 *
 * @remark
 * 如果指定单位没有设置集结点到可破坏物上,则返回null.
 *
 * @TC_UNIT
 */
declare function GetUnitRallyDestructable(whichUnit: unit): destructable;

/**
 * 在单位组  
 * ${单位} 在 ${单位组} 中
 *
 * @TC_UNIT
 */
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;

/**
 * 是玩家组里玩家的单位  
 * ${单位} 属于 ${玩家组} 里的玩家
 *
 * @remark
 * 判断单位是否属于这个玩家组里的玩家。
 *
 * @TC_UNIT
 */
declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean;

/**
 * 是玩家的单位  
 * ${单位} 属于 ${Player}
 *
 * @remark
 * 判断单位是否属于这个玩家。
 *
 * @TC_UNIT
 */
declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 是玩家的同盟单位  
 * ${单位} 是 ${Player} 的同盟单位
 *
 * @remark
 * 包括中立状态. 单向判断玩家对单位是否为不侵犯状态.
 *
 * @TC_UNIT
 */
declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 是玩家的敌对单位  
 * ${单位} 是 ${Player} 的敌对单位
 *
 * @remark
 * 不包括中立状态. 单向判断玩家对单位是否为敌对侵犯.
 *
 * @TC_UNIT
 */
declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 单位可见  
 * ${单位} 对 ${Player} 可见
 *
 * @TC_VISIBILITY
 */
declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 被检测到  
 * ${单位} 处在 ${玩家} 的真实视野范围内
 *
 * @remark
 * 用来判断单位在这个玩家反隐形范围内，注：不包含该玩家同盟的反隐范围。
 *
 * @TC_UNIT
 */
declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 单位不可见  
 * ${单位} 对 ${Player} 不可见
 *
 * @TC_VISIBILITY
 */
declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 单位在迷雾中  
 * ${单位} 在 ${Player} 的迷雾范围内
 *
 * @remark
 * 黑色阴影内的单位不被计算在内.
 *
 * @TC_VISIBILITY
 */
declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 单位在黑色阴影中  
 * ${单位} 在 ${Player} 的黑色阴影内
 *
 * @TC_VISIBILITY
 */
declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 被玩家选择  
 * ${单位} 被 ${Player} 选择
 *
 * @TC_UNIT
 */
declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean;

/**
 * 单位种族检查  
 * ${单位} 是 ${Race}
 *
 * @TC_UNIT
 */
declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean;

/**
 * 单位类别检查  
 * ${单位} 是 ${Type}
 *
 * @TC_UNIT
 */
declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * 单位检查  
 * ${单位} 与 ${单位}相同
 *
 * @remark
 * 用来判断两个单位是否相等。
 *
 * @TC_UNIT
 */
declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean;

/**
 * 在指定单位范围内 [R]  
 * ${单位} 在距离 ${指定单位} ${范围} 范围内
 *
 * @TC_UNIT
 */
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: number): boolean;

/**
 * 在指定坐标范围内 [R]  
 * ${单位} 在距离坐标(${X},${Y}) ${范围} 范围内
 *
 * @TC_UNIT
 */
declare function IsUnitInRangeXY(whichUnit: unit, x: number, y: number, distance: number): boolean;

/**
 * 在指定点范围内 [R]  
 * ${单位} 在距离 ${指定点} ${范围} 范围内
 *
 * @TC_UNIT
 */
declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: number): boolean;
declare function IsUnitHidden(whichUnit: unit): boolean;
declare function IsUnitIllusion(whichUnit: unit): boolean;
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean;
declare function IsUnitLoaded(whichUnit: unit): boolean;

/**
 * 单位类型是英雄单位  
 * ${UnitType} 是英雄单位
 *
 * @TC_UNIT
 */
declare function IsHeroUnitId(unitId: number): boolean;

/**
 * 单位类别检查(指定单位类型)  
 * ${单位类型} 是 ${Type}
 *
 * @TC_UNIT
 */
declare function IsUnitIdType(unitId: number, whichUnitType: unittype): boolean;

/**
 * 共享视野 [R]  
 * 设置 ${单位} 的视野对 ${Player} ${on/off}
 *
 * @TC_UNIT
 */
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): void;

/**
 * 暂停尸体腐烂 [R]  
 *  设置 ${单位} 的尸体腐烂状态: ${Suspend/Resume}
 *
 * @remark
 * 只对已完成死亡动作的尸体有效.
 *
 * @TC_UNIT
 */
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): void;

/**
 * 添加类别 [R]  
 * 为 ${单位} 添加 ${Classification} 类别
 *
 * @remark
 * 已去除所有无效类别.
 *
 * @TC_UNIT
 */
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * 删除类别 [R]  
 * 为 ${单位} 删除 ${Classification} 类别
 *
 * @remark
 * 已去除所有无效类别.
 *
 * @TC_UNIT
 */
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * 添加技能 [R]  
 * 为 ${单位} 添加 ${技能}
 *
 * @TC_UNIT
 */
declare function UnitAddAbility(whichUnit: unit, abilityId: number): boolean;

/**
 * 删除技能 [R]  
 * 为 ${单位} 删除 ${技能}
 *
 * @TC_UNIT
 */
declare function UnitRemoveAbility(whichUnit: unit, abilityId: number): boolean;

/**
 * 设置技能永久性 [R]  
 * 设置 ${单位} ${是否} ${技能} 永久性
 *
 * @remark
 * 如触发添加给单位的技能就是非永久性的,非永久性技能在变身并回复之后会丢失掉. 这类情况就需要设置技能永久性.
 *
 * @TC_UNIT
 */
declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: number): boolean;

/**
 * 删除魔法效果(指定极性) [R]  
 * 删除 ${单位} 的附带Buff,(${Include/Exclude} 正面Buff, ${Include/Exclude} 负面Buff)
 *
 * @TC_UNIT
 */
declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): void;

/**
 * 删除魔法效果(详细类别) [R]  
 * 删除 ${单位} 的附带Buff,(${Include/Exclude} 正面Buff, ${Include/Exclude} 负面Buff${Include/Exclude} 魔法Buff, ${Include/Exclude} 物理Buff${Include/Exclude} 生命周期, ${Include/Exclude} 光环效果${Include/Exclude} 不可驱散Buff)
 *
 * @TC_UNIT
 */
declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): void;
declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;

/**
 * 拥有Buff数量 [R]  
 * ${单位} 的附带Buff数量,(${Include/Exclude} 正面Buff, ${Include/Exclude} 负面Buff${Include/Exclude} 魔法Buff, ${Include/Exclude} 物理Buff${Include/Exclude} 生命周期, ${Include/Exclude} 光环效果${Include/Exclude} 不可驱散Buff)
 *
 * @TC_UNIT
 */
declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): number;
declare function UnitAddSleep(whichUnit: unit, add: boolean): void;
declare function UnitCanSleep(whichUnit: unit): boolean;

/**
 * 控制单位睡眠状态  
 * 使 ${单位} ${Sleep/Remain Awake}
 *
 * @remark
 * 使用该功能前必须用触发为单位添加'一直睡眠'技能.
 *
 * @TC_UNIT
 */
declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): void;

/**
 * 允许控制睡眠状态  
 * 允许控制 ${单位} 的睡眠状态
 *
 * @remark
 * 即该单位拥有'一直睡眠'技能.
 *
 * @TC_UNIT
 */
declare function UnitCanSleepPerm(whichUnit: unit): boolean;
declare function UnitIsSleeping(whichUnit: unit): boolean;
declare function UnitWakeUp(whichUnit: unit): void;

/**
 * 设置生命周期 [R]  
 * 为 ${单位} 设置 ${Buff Type} 类型的生命周期,持续时间为 ${Duration} 秒
 *
 * @TC_UNIT
 */
declare function UnitApplyTimedLife(whichUnit: unit, buffId: number, duration: number): void;
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;

/**
 * 重置技能CD  
 * 重置 ${单位} 的所有技能冷却时间
 *
 * @remark
 * 如果要重置单一技能的CD,可以通过删除技能+添加技能+设置技能等级来完成.
 *
 * @TC_UNIT
 */
declare function UnitResetCooldown(whichUnit: unit): void;

/**
 * 设置建筑建造进度条  
 * 设置 ${Building} 的建造进度条为 ${Progress}%
 *
 * @remark
 * 只作用于正在建造的建筑.
 *
 * @TC_UNIT
 */
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: number): void;

/**
 * 设置建筑升级进度条  
 * 设置 ${Building} 的升级进度条为 ${Progress}%
 *
 * @remark
 * 只作用于正在升级的建筑. 是建筑A升级为建筑B的升级,不是科技的研究.
 *
 * @TC_UNIT
 */
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: number): void;

/**
 * 暂停/恢复生命周期 [R]  
 * 使 ${单位} ${Pause/Unpause} 生命周期
 *
 * @remark
 * 只有召唤单位有生命周期.
 *
 * @TC_UNIT
 */
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): void;
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): void;

/**
 * 伤害区域 [R]  
 * 命令 ${单位} 在 ${Seconds} 秒后对半径为 ${Size} 圆心为(${X},${Y})的范围造成 ${Amount} 点伤害(${是} 攻击伤害, ${是}远程攻击) 攻击类型: ${AttackType} 伤害类型: ${DamageType} 装甲类型: ${WeaponType}
 *
 * @remark
 * 该动作不会打断单位动作. 由该动作伤害/杀死单位同样正常触发'受到伤害'和'死亡'单位事件.
 *
 * @TC_UNIT
 */

/**
 * 伤害区域 [R]  
 * 命令 ${单位} 在 ${Seconds} 秒后对半径为 ${Size} 圆心为(${X},${Y})的范围造成 ${Amount} 点伤害(${是} 攻击伤害, ${是}远程攻击) 攻击类型: ${AttackType} 伤害类型: ${DamageType} 装甲类型: ${WeaponType}
 *
 * @remark
 * 该动作不会打断单位动作. 由该动作伤害/杀死单位同样正常触发'受到伤害'和'死亡'单位事件.
 *
 * @TC_UNIT
 */
declare function UnitDamagePoint(whichUnit: unit, delay: number, radius: number, x: number, y: number, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * 伤害目标 [R]  
 * 命令 ${单位} 对 ${Target} 造成 ${Amount} 点伤害(${是} 攻击伤害, ${是}远程攻击) 攻击类型: ${AttackType} 伤害类型: ${DamageType} 武器类型: ${WeaponType}
 *
 * @remark
 * 该动作不会打断单位动作. 由该动作伤害/杀死单位同样正常触发'受到伤害'和'死亡'单位事件.
 *
 * @TC_UNIT
 */

/**
 * 伤害目标 [R]  
 * 命令 ${单位} 对 ${Target} 造成 ${Amount} 点伤害(${是} 攻击伤害, ${是}远程攻击) 攻击类型: ${AttackType} 伤害类型: ${DamageType} 武器类型: ${WeaponType}
 *
 * @remark
 * 该动作不会打断单位动作. 由该动作伤害/杀死单位同样正常触发'受到伤害'和'死亡'单位事件.
 *
 * @TC_UNIT
 */
declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: number, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * 发布命令(无目标)  
 * 对 ${单位} 发布 ${Order} 命令
 *
 * @TC_UNIT
 */

/**
 * 发布命令(无目标)  
 * 对 ${单位} 发布 ${Order} 命令
 *
 * @TC_UNIT
 */
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean;

/**
 * 发布命令(无目标)(ID)  
 * 对 ${单位} 发布 ${Order} 命令
 *
 * @TC_UNIT
 */

/**
 * 发布命令(无目标)(ID)  
 * 对 ${单位} 发布 ${Order} 命令
 *
 * @TC_UNIT
 */
declare function IssueImmediateOrderById(whichUnit: unit, order: number): boolean;

/**
 * 发布命令(指定坐标)  
 * 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定坐标) [R]  
 * 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */
declare function IssuePointOrder(whichUnit: unit, order: string, x: number, y: number): boolean;

/**
 * 发布命令(指定点)  
 * 对 ${单位} 发布 ${Order} 命令到目标点: ${指定点}
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定点)  
 * 对 ${单位} 发布 ${Order} 命令到目标点: ${指定点}
 *
 * @TC_UNIT
 */
declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean;

/**
 * 发布命令(指定坐标)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定坐标)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @TC_UNIT
 */
declare function IssuePointOrderById(whichUnit: unit, order: number, x: number, y: number): boolean;

/**
 * 发布命令(指定点)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到目标点: ${指定点}
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定点)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到目标点: ${指定点}
 *
 * @TC_UNIT
 */
declare function IssuePointOrderByIdLoc(whichUnit: unit, order: number, whichLocation: location): boolean;

/**
 * 发布命令(指定单位)  
 * 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定单位)  
 * 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @TC_UNIT
 */
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean;

/**
 * 发布命令(指定单位)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @TC_UNIT
 */

/**
 * 发布命令(指定单位)(ID)  
 * 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @TC_UNIT
 */
declare function IssueTargetOrderById(whichUnit: unit, order: number, targetWidget: widget): boolean;
declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: number, y: number, instantTargetWidget: widget): boolean;
declare function IssueInstantPointOrderById(whichUnit: unit, order: number, x: number, y: number, instantTargetWidget: widget): boolean;
declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;
declare function IssueInstantTargetOrderById(whichUnit: unit, order: number, targetWidget: widget, instantTargetWidget: widget): boolean;
declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: number, y: number): boolean;

/**
 * 发布建造命令(指定坐标) [R]  
 * 命令 ${单位} 建造 ${单位类型} 在坐标:(${X},${Y})
 *
 * @TC_UNIT
 */

/**
 * 发布建造命令(指定坐标) [R]  
 * 命令 ${单位} 建造 ${单位类型} 在坐标:(${X},${Y})
 *
 * @TC_UNIT
 */
declare function IssueBuildOrderById(whichPeon: unit, unitId: number, x: number, y: number): boolean;

/**
 * 发布中介命令(无目标)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(无目标)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean;

/**
 * 发布中介命令(无目标)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(无目标)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number): boolean;

/**
 * 发布中介命令(指定坐标)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(指定坐标)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: number, y: number): boolean;

/**
 * 发布中介命令(指定坐标)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(指定坐标)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到坐标:(${X},${Y})
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, x: number, y: number): boolean;

/**
 * 发布中介命令(指定单位)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(指定单位)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean;

/**
 * 发布中介命令(指定单位)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */

/**
 * 发布中介命令(指定单位)(ID)  
 * 使 ${玩家} 对 ${单位} 发布 ${Order} 命令到目标: ${单位}
 *
 * @remark
 * 可以用来对非本玩家单位发布命令.
 *
 * @TC_UNIT
 */
declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: number, target: widget): boolean;

/**
 * 当前命令ID  
 * ${单位} 的当前命令ID.
 *
 * @TC_UNIT
 */
declare function GetUnitCurrentOrder(whichUnit: unit): number;

/**
 * 设置黄金储量  
 * 设置 ${金矿} 的黄金储量为 ${Quantity}
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetResourceAmount(whichUnit: unit, amount: number): void;
declare function AddResourceAmount(whichUnit: unit, amount: number): void;

/**
 * 储金量  
 * ${金矿} 的储金量
 *
 * @remark
 * 只对金矿有效.
 *
 * @TC_NEUTRALBUILDING
 */
declare function GetResourceAmount(whichUnit: unit): number;

/**
 * 传送门目的地X坐标  
 * ${传送门} 的目的地X坐标
 *
 * @TC_NEUTRALBUILDING
 */
declare function WaygateGetDestinationX(waygate: unit): number;

/**
 * 传送门目的地Y坐标  
 * ${传送门} 的目的地Y坐标
 *
 * @TC_NEUTRALBUILDING
 */
declare function WaygateGetDestinationY(waygate: unit): number;

/**
 * 设置传送门目的坐标 [R]  
 * 设置 ${传送门} 的目的地为(${X},${Y})
 *
 * @TC_NEUTRALBUILDING
 */
declare function WaygateSetDestination(waygate: unit, x: number, y: number): void;
declare function WaygateActivate(waygate: unit, activate: boolean): void;
declare function WaygateIsActive(waygate: unit): boolean;

/**
 * 添加物品(所有市场)  
 * 添加 ${物品类型} 到所有市场并设置库存量: ${Count} 最大库存量: ${Max}
 *
 * @remark
 * 影响所有拥有'出售物品'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function AddItemToAllStock(itemId: number, currentStock: number, stockMax: number): void;
declare function AddItemToStock(whichUnit: unit, itemId: number, currentStock: number, stockMax: number): void;

/**
 * 添加单位(所有市场)  
 * 添加 ${单位类型} 到所有市场并设置库存量: ${Count} 最大库存量: ${Max}
 *
 * @remark
 * 影响所有拥有'出售单位'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function AddUnitToAllStock(unitId: number, currentStock: number, stockMax: number): void;
declare function AddUnitToStock(whichUnit: unit, unitId: number, currentStock: number, stockMax: number): void;

/**
 * 删除物品(所有市场)  
 * 删除 ${物品类型} 从所有市场
 *
 * @remark
 * 影响所有拥有'出售物品'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function RemoveItemFromAllStock(itemId: number): void;
declare function RemoveItemFromStock(whichUnit: unit, itemId: number): void;

/**
 * 删除单位(所有市场)  
 * 删除 ${单位类型} 从所有市场
 *
 * @remark
 * 影响所有拥有'出售单位'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function RemoveUnitFromAllStock(unitId: number): void;
declare function RemoveUnitFromStock(whichUnit: unit, unitId: number): void;

/**
 * 限制物品种类(所有市场)  
 * 限制所有市场的可出售物品种类数为 ${Quantity}
 *
 * @remark
 * 影响所有拥有'出售物品'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetAllItemTypeSlots(slots: number): void;

/**
 * 限制单位种类(所有市场)  
 * 限制所有市场的可出售单位种类数为 ${Quantity}
 *
 * @remark
 * 影响所有拥有'出售单位'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetAllUnitTypeSlots(slots: number): void;

/**
 * 限制物品种类(指定市场)  
 * 限制 ${Marketplace} 的可出售物品种类数为 ${Quantity}
 *
 * @remark
 * 只影响有'出售物品'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetItemTypeSlots(whichUnit: unit, slots: number): void;

/**
 * 限制单位种类(指定市场)  
 * 限制 ${Marketplace} 的可出售单位种类数为 ${Quantity}
 *
 * @remark
 * 只影响有'出售单位'技能的单位.
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetUnitTypeSlots(whichUnit: unit, slots: number): void;

/**
 * 单位自定义值  
 * ${单位} 的自定义值
 *
 * @remark
 * 可使用'单位 - 设置自定义值'来设置该值.
 *
 * @TC_UNIT
 */
declare function GetUnitUserData(whichUnit: unit): number;

/**
 * 设置自定义值  
 * 设置 ${单位} 的自定义值为 ${Index}
 *
 * @remark
 * 单位自定义值仅用于触发器. 可用来给单位绑定一个整型数据.
 *
 * @TC_UNIT
 */
declare function SetUnitUserData(whichUnit: unit, data: number): void;
declare function Player(number: number): player;

/**
 * 本地玩家 [R]  
 * 本地玩家
 *
 * @remark
 * 指代玩家自己,所以对每个玩家返回值都不一样. 如果不清楚该函数的话千万别用,因为很可能因为不同步而导致掉线.
 *
 * @TC_NOTHING
 */
declare function GetLocalPlayer(): player;

/**
 * 是玩家的盟友  
 * ${Player} 是 ${Player} 的盟友
 *
 * @remark
 * 包括中立状态. 单向判断玩家A对玩家B联盟不侵犯,即表示玩家A是玩家B的盟友.
 *
 * @TC_PLAYER
 */
declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean;

/**
 * 是玩家的敌人  
 * ${Player} 是 ${Player} 的敌人
 *
 * @remark
 * 不包括中立状态. 单向判断玩家A对玩家B敌对侵犯,即表示玩家A是玩家B的盟友.
 *
 * @TC_PLAYER
 */
declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean;

/**
 * 在玩家组  
 * ${Player} 在 ${玩家组} 中
 *
 * @TC_PLAYER
 */
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean;

/**
 * 玩家是裁判或观察者 [R]  
 * ${Player}是裁判或观察者
 *
 * @TC_PLAYER
 */
declare function IsPlayerObserver(whichPlayer: player): boolean;

/**
 * 坐标可见  
 * 坐标(${x},${y}) 对 ${玩家} 可见
 *
 * @TC_VISIBILITY
 */
declare function IsVisibleToPlayer(x: number, y: number, whichPlayer: player): boolean;

/**
 * 点可见  
 * ${指定点}对 ${Player} 可见
 *
 * @TC_VISIBILITY
 */
declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * 坐标在迷雾中  
 * 坐标(${x},${y}) 在 ${玩家} 的迷雾范围内
 *
 * @remark
 * 黑色阴影内的坐标不被计算在内。
 *
 * @TC_VISIBILITY
 */
declare function IsFoggedToPlayer(x: number, y: number, whichPlayer: player): boolean;

/**
 * 点在迷雾中  
 * ${指定点} 在 ${Player} 的迷雾范围内
 *
 * @remark
 * 黑色阴影内的点不被计算在内.
 *
 * @TC_VISIBILITY
 */
declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * 坐标在黑色阴影中  
 * 坐标(${x},${y}) 在 ${玩家} 的黑色阴影内
 *
 * @TC_VISIBILITY
 */
declare function IsMaskedToPlayer(x: number, y: number, whichPlayer: player): boolean;

/**
 * 点在黑色阴影中  
 * ${指定点} 在 ${Player} 的黑色阴影内
 *
 * @TC_VISIBILITY
 */
declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * 玩家的种族  
 * ${Player} 的种族
 *
 * @TC_NOTHING
 */
declare function GetPlayerRace(whichPlayer: player): race;

/**
 * 玩家ID - 1 [R]  
 * ${Player} 的玩家ID - 1
 *
 * @remark
 * 玩家ID取值1-16.
 *
 * @TC_PLAYER
 */
declare function GetPlayerId(whichPlayer: player): number;

/**
 * 非建筑单位数量  
 * ${Player} 拥有的非建筑单位数量(${Include/Exclude} 未完成的)
 *
 * @TC_PLAYER
 */
declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): number;
declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): number;

/**
 * 建筑数量  
 * ${Player} 拥有的建筑数量(${Include/Exclude} 未完成的)
 *
 * @TC_PLAYER
 */
declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): number;

/**
 * 玩家属性  
 * ${Player} ${Property}
 *
 * @TC_PLAYER
 */
declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): number;

/**
 * 玩家得分  
 * ${Player} ${Score}
 *
 * @TC_PLAYER
 */
declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): number;

/**
 * 联盟状态设置  
 * ${Player} 对 ${Player} 开启 ${Alliance Type}
 *
 * @TC_PLAYER
 */
declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;
declare function GetPlayerHandicap(whichPlayer: player): number;
declare function GetPlayerHandicapXP(whichPlayer: player): number;

/**
 * 设置生命上限 [R]  
 * 设置 ${Player} 的生命障碍为正常的 ${Percent}倍
 *
 * @remark
 * 生命上限影响玩家拥有单位的生命最大值. 生命之书并不受生命上限限制,所以对英雄血量可能会有偏差.
 *
 * @TC_PLAYER
 */
declare function SetPlayerHandicap(whichPlayer: player, handicap: number): void;

/**
 * 设置经验获得率 [R]  
 * 设置 ${Player} 的经验获得率为正常的 ${Value} 倍
 *
 * @TC_HERO
 */
declare function SetPlayerHandicapXP(whichPlayer: player, handicap: number): void;
declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: number, maximum: number): void;
declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: number): number;

/**
 * 增加科技等级  
 * 增加 ${玩家} 的 ${科技} 科技 ${整数} 级
 *
 * @remark
 * 科技等级不能倒退。
 *
 * @TC_PLAYER
 */
declare function AddPlayerTechResearched(whichPlayer: player, techid: number, levels: number): void;
declare function SetPlayerTechResearched(whichPlayer: player, techid: number, setToLevel: number): void;
declare function GetPlayerTechResearched(whichPlayer: player, techid: number, specificonly: boolean): boolean;
declare function GetPlayerTechCount(whichPlayer: player, techid: number, specificonly: boolean): number;
declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: number): void;
declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): void;

/**
 * 允许/禁用 技能 [R]  
 * 设置 ${Player} 的 ${技能} 为 ${Enable/Disable}
 *
 * @remark
 * 设置玩家能否使用该技能.
 *
 * @TC_PLAYER
 */
declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: number, avail: boolean): void;

/**
 * 设置属性  
 * 设置 ${Player} 的 ${Property} 为 ${Value}
 *
 * @TC_PLAYER
 */
declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: number): void;

/**
 * 踢除玩家  
 * 踢除 ${Player} ，玩家的游戏结果为 ${文字}
 *
 * @TC_PLAYER
 */
declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): void;
declare function CachePlayerHeroData(whichPlayer: player): void;

/**
 * 设置地图迷雾(矩形区域) [R]  
 * 为 ${玩家} 设置 ${FogStateVisible} 在 ${矩形区域} (对盟友 ${共享} 视野)
 *
 * @TC_VISIBILITY
 */
declare function SetFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): void;

/**
 * 设置地图迷雾(圆范围) [R]  
 * 为 ${玩家} 设置 ${FogStateVisible} 在圆心为(${X},${Y}) 半径为 ${数值} 的范围, (对盟友 ${共享} 视野)
 *
 * @TC_VISIBILITY
 */
declare function SetFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean): void;
declare function SetFogStateRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean): void;

/**
 * 启用/禁用黑色阴影 [R]  
 * ${启用/禁用} 黑色阴影
 *
 * @TC_VISIBILITY
 */
declare function FogMaskEnable(enable: boolean): void;

/**
 * 黑色阴影开启  
 * 黑色阴影开启
 *
 * @TC_VISIBILITY
 */
declare function IsFogMaskEnabled(): boolean;

/**
 * 启用/禁用 战争迷雾 [R]  
 * ${启用/禁用} 战争迷雾
 *
 * @TC_VISIBILITY
 */
declare function FogEnable(enable: boolean): void;

/**
 * 战争迷雾开启  
 * 战争迷雾开启
 *
 * @TC_VISIBILITY
 */
declare function IsFogEnabled(): boolean;

/**
 * 新建可见度修正器(矩形区域) [R]  
 * 新建的 ${玩家} 可见度修正器. 可见度: ${FogStateVisible} 影响区域: ${矩形区域} (对盟友 ${共享} 视野, ${覆盖} 单位视野)
 *
 * @remark
 * 会创建可见度修正器.
 *
 * @TC_NOTHING
 */
declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * 新建可见度修正器(圆范围) [R]  
 * 新建的 ${玩家} 可见度修正器. 可见度: ${FogStateVisible} 圆心坐标:(${X},${Y}) 半径: ${数值} (对盟友 ${共享} 视野, ${覆盖} 单位视野)
 *
 * @remark
 * 会创建可见度修正器.
 *
 * @TC_NOTHING
 */
declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: number, centerY: number, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier;
declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: number, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * 删除可见度修正器  
 * 删除 ${Visibility Modifier}
 *
 * @TC_VISIBILITY
 */
declare function DestroyFogModifier(whichFogModifier: fogmodifier): void;

/**
 * 启用可见度修正器  
 * 启用 ${Visibility Modifier}
 *
 * @TC_VISIBILITY
 */
declare function FogModifierStart(whichFogModifier: fogmodifier): void;

/**
 * 禁用可见度修正器  
 * 禁用 ${Visibility Modifier}
 *
 * @TC_VISIBILITY
 */
declare function FogModifierStop(whichFogModifier: fogmodifier): void;
declare function VersionGet(): version;
declare function VersionCompatible(whichVersion: version): boolean;
declare function VersionSupported(whichVersion: version): boolean;
declare function EndGame(doScoreScreen: boolean): void;

/**
 * 切换关卡 [R]  
 * 切换到关卡: ${Filename} (${Show/Skip} 计分屏)
 *
 * @TC_GAME
 */
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): void;
declare function RestartGame(doScoreScreen: boolean): void;
declare function ReloadGame(): void;
declare function SetCampaignMenuRace(r: race): void;
declare function SetCampaignMenuRaceEx(campaignIndex: number): void;
declare function ForceCampaignSelectScreen(): void;
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): void;

/**
 * 保存进度 [R]  
 * 保存游戏进度为: ${Filename}
 *
 * @TC_GAME
 */
declare function SaveGame(saveFileName: string): void;
declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean;
declare function RemoveSaveDirectory(sourceDirName: string): boolean;
declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean;

/**
 * 游戏存档存在  
 * ${存档文件} 已存在
 *
 * @TC_GAME
 */
declare function SaveGameExists(saveName: string): boolean;
declare function SyncSelections(): void;
declare function SetFloatGameState(whichFloatGameState: fgamestate, value: number): void;
declare function GetFloatGameState(whichFloatGameState: fgamestate): number;
declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: number): void;
declare function GetIntegerGameState(whichIntegerGameState: igamestate): number;
declare function SetTutorialCleared(cleared: boolean): void;
declare function SetMissionAvailable(campaignNumber: number, missionNumber: number, available: boolean): void;
declare function SetCampaignAvailable(campaignNumber: number, available: boolean): void;
declare function SetOpCinematicAvailable(campaignNumber: number, available: boolean): void;
declare function SetEdCinematicAvailable(campaignNumber: number, available: boolean): void;
declare function GetDefaultDifficulty(): gamedifficulty;
declare function SetDefaultDifficulty(g: gamedifficulty): void;
declare function SetCustomCampaignButtonVisible(whichButton: number, visible: boolean): void;
declare function GetCustomCampaignButtonVisible(whichButton: number): boolean;

/**
 * 关闭游戏录像功能 [R]  
 * 关闭游戏录像功能
 *
 * @remark
 * 游戏结束时不保存游戏录像.
 *
 * @TC_GAME
 */
declare function DoNotSaveReplay(): void;

/**
 * 新建对话框 [R]  
 * 新建对话框
 *
 * @remark
 * 创建新的对话框.
 *
 * @TC_DIALOG
 */
declare function DialogCreate(): dialog;

/**
 * 删除 [R]  
 * 删除 ${对话框}
 *
 * @remark
 * 将对话框清除出内存.一般来说对话框并不需要删除.
 *
 * @TC_DIALOG
 */
declare function DialogDestroy(whichDialog: dialog): void;
declare function DialogClear(whichDialog: dialog): void;
declare function DialogSetMessage(whichDialog: dialog, messageText: string): void;

/**
 * 添加对话框按钮 [R]  
 * 给 ${对话框} 添加按钮, 使用标题: ${文字} 快捷键: ${HotKey}
 *
 * @remark
 * 会创建对话框按钮.
 *
 * @TC_NOTHING
 */
declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: number): button;

/**
 * 添加退出游戏按钮 [R]  
 * 为 ${对话框} 添加退出游戏按钮(${跳过} 计分屏) 按钮标题为: ${文字} 快捷键为: ${HotKey}
 *
 * @remark
 * 该函数创建的按钮并不被纪录到'最后创建的对话框按钮'.当该按钮被点击时会退出游戏
 *
 * @TC_DIALOG
 */
declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: number): button;

/**
 * 显示/隐藏 [R]  
 * 对 ${Player} 设置 ${对话框} 的状态为 ${Show/Hide}
 *
 * @remark
 * 对话框不能应用于地图初始化事件.
 *
 * @TC_DIALOG
 */
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): void;

/**
 * 读取本地缓存数据  
 * 从本地硬盘读取缓存数据
 *
 * @remark
 * 只对单机游戏有效,从本地硬盘读取缓存数据,主要用来实现战役关卡间的数据传递.
 *
 * @TC_GAMECACHE
 */
declare function ReloadGameCachesFromDisk(): boolean;

/**
 * 新建游戏缓存 [R]  
 * 新建游戏缓存: ${缓存名}
 *
 * @remark
 * 创建一个新的游戏缓存,一个地图最多只有有256个游戏缓存.
 *
 * @TC_GAMECACHE
 */
declare function InitGameCache(campaignFile: string): gamecache;
declare function SaveGameCache(whichCache: gamecache): boolean;

/**
 * 记录整数  
 * 缓存: ${Game Cache}  类别名: ${Category} 使用名称: ${文字} 记录: ${整数}
 *
 * @remark
 * 使用'游戏缓存 - 读取整数'来读取该数值. 名称和类别名不能包含空格.
 *
 * @TC_GAMECACHE
 */
declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: number): void;

/**
 * 记录实数  
 * 缓存: ${Game Cache}  类别名: ${Category} 使用名称: ${文字} 记录: ${实数}
 *
 * @remark
 * 使用'游戏缓存 - 读取实数'来读取该数值. 名称和类别名不能包含空格.
 *
 * @TC_GAMECACHE
 */
declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: number): void;

/**
 * 记录布尔值  
 * 缓存: ${Game Cache}  类别名: ${Category} 使用名称: ${文字} 记录: ${布尔值}
 *
 * @remark
 * 使用'游戏缓存 - 读取布尔值'来读取该值. 名称和类别名不能包含空格.
 *
 * @TC_GAMECACHE
 */
declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): void;
declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;

/**
 * 记录字符串  
 * 缓存: ${Game Cache}  类别名: ${Category} 使用名称: ${文字} 记录: ${字符串}
 *
 * @remark
 * 使用'游戏缓存 - 读取字符串'来读取该值. 名称和类别名不能包含空格.
 *
 * @TC_GAMECACHE
 */
declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean;
declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): void;
declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): void;
declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean;
declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * 删除缓存 [C]  
 * 删除 ${GameCache}
 *
 * @remark
 * 删除并清空该缓存的所有数据.和原版UI完全一致，但却不能兼容原版UI，它的存在完全是在添乱啊
 *
 * @TC_YDHIDE
 */
declare function FlushGameCache(cache: gamecache): void;

/**
 * 删除类别  
 * 删除缓存 ${GameCache} 中 ${Category} 类别
 *
 * @remark
 * 清空该类别下的所有缓存数据.
 *
 * @TC_GAMECACHE
 */
declare function FlushStoredMission(cache: gamecache, missionKey: string): void;
declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): void;
declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): void;

/**
 * 缓存读取整数 [C]  
 * 从${Game Cache}中读取整数值,类别: ${Category},名称: ${文字}
 *
 * @remark
 * 如果该值不存在则返回0.
 *
 * @TC_GAMECACHE
 */
declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): number;

/**
 * 缓存读取实数 [C]  
 * 从 ${Game Cache} 中读取实数,类别: ${Category} 名称: ${文字}
 *
 * @remark
 * 如果该值不存在则返回0.
 *
 * @TC_GAMECACHE
 */
declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): number;

/**
 * 读取布尔值[R]  
 * 从${Game Cache}中读取布尔值,类别: ${Category},名称: ${文字}
 *
 * @remark
 * 如果该值不存在则返回false.
 *
 * @TC_GAMECACHE
 */
declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * 读取字符串 [C]  
 * 从 ${Game Cache} 中读取字符串,类别: ${Category} 名称: ${文字}
 *
 * @remark
 * 如果该值不存在,则返回空字符串. 注意,空字符串不等于null
 *
 * @TC_GAMECACHE
 */
declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string;
declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: number, y: number, facing: number): unit;

/**
 * <1.24> 新建哈希表 [C]  
 * 创建一个新的哈希表
 *
 * @remark
 * 您可以使用哈希表来储存临时数据
 *
 * @TC_HASHTABLE
 */
declare function InitHashtable(): hashtable;

/**
 * <1.24> 保存整数 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存整数 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取整数' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveInteger(table: hashtable, parentKey: number, childKey: number, value: number): void;

/**
 * <1.24> 保存实数 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存实数 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取实数' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveReal(table: hashtable, parentKey: number, childKey: number, value: number): void;

/**
 * <1.24> 保存布尔 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存布尔 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取布尔' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveBoolean(table: hashtable, parentKey: number, childKey: number, value: boolean): void;

/**
 * <1.24> 保存字符串 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存字符串 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取字符串' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveStr(table: hashtable, parentKey: number, childKey: number, value: string): boolean;

/**
 * <1.24> 保存玩家 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存玩家 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取玩家' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SavePlayerHandle(table: hashtable, parentKey: number, childKey: number, whichPlayer: player): boolean;
declare function SaveWidgetHandle(table: hashtable, parentKey: number, childKey: number, whichWidget: widget): boolean;

/**
 * <1.24> 保存可破坏物 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存可破坏物 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取可破坏物' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveDestructableHandle(table: hashtable, parentKey: number, childKey: number, whichDestructable: destructable): boolean;

/**
 * <1.24> 保存物品 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存物品 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取物品' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveItemHandle(table: hashtable, parentKey: number, childKey: number, whichItem: item): boolean;

/**
 * <1.24> 保存单位 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存单位 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取单位' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveUnitHandle(table: hashtable, parentKey: number, childKey: number, whichUnit: unit): boolean;
declare function SaveAbilityHandle(table: hashtable, parentKey: number, childKey: number, whichAbility: ability): boolean;

/**
 * <1.24> 保存计时器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存计时器 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取计时器' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTimerHandle(table: hashtable, parentKey: number, childKey: number, whichTimer: timer): boolean;

/**
 * <1.24> 保存触发器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存触发器 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取触发器' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTriggerHandle(table: hashtable, parentKey: number, childKey: number, whichTrigger: trigger): boolean;

/**
 * <1.24> 保存触发条件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存触发条件 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取触发条件' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggercondition: triggercondition): boolean;

/**
 * <1.24> 保存触发动作 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存触发动作 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取触发动作' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTriggerActionHandle(table: hashtable, parentKey: number, childKey: number, whichTriggeraction: triggeraction): boolean;

/**
 * <1.24> 保存触发事件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存触发事件 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取触发事件' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTriggerEventHandle(table: hashtable, parentKey: number, childKey: number, whichEvent: event): boolean;

/**
 * <1.24> 保存玩家组 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存玩家组 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取玩家组' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveForceHandle(table: hashtable, parentKey: number, childKey: number, whichForce: force): boolean;

/**
 * <1.24> 保存单位组 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存单位组 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取单位组' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveGroupHandle(table: hashtable, parentKey: number, childKey: number, whichGroup: group): boolean;

/**
 * <1.24> 保存点 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存点 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取点' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveLocationHandle(table: hashtable, parentKey: number, childKey: number, whichLocation: location): boolean;

/**
 * <1.24> 保存区域(矩型) [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存区域(矩型) ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取区域(矩型)' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveRectHandle(table: hashtable, parentKey: number, childKey: number, whichRect: rect): boolean;

/**
 * <1.24> 保存布尔表达式 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存布尔表达式 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取布尔表达式' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveBooleanExprHandle(table: hashtable, parentKey: number, childKey: number, whichBoolexpr: boolexpr | (() => boolean) | null): boolean;

/**
 * <1.24> 保存音效 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存音效 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取音效' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveSoundHandle(table: hashtable, parentKey: number, childKey: number, whichSound: sound): boolean;

/**
 * <1.24> 保存特效 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存特效 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取特效' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveEffectHandle(table: hashtable, parentKey: number, childKey: number, whichEffect: effect): boolean;

/**
 * <1.24> 保存单位池 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存单位池 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取单位池' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveUnitPoolHandle(table: hashtable, parentKey: number, childKey: number, whichUnitpool: unitpool): boolean;

/**
 * <1.24> 保存物品池 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存物品池 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取物品池' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveItemPoolHandle(table: hashtable, parentKey: number, childKey: number, whichItempool: itempool): boolean;

/**
 * <1.24> 保存任务 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存任务 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取任务' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveQuestHandle(table: hashtable, parentKey: number, childKey: number, whichQuest: quest): boolean;

/**
 * <1.24> 保存任务要求 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存任务要求 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取任务要求' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveQuestItemHandle(table: hashtable, parentKey: number, childKey: number, whichQuestitem: questitem): boolean;

/**
 * <1.24> 保存失败条件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存失败条件 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取失败条件' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number, whichDefeatcondition: defeatcondition): boolean;

/**
 * <1.24> 保存计时器窗口 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存计时器窗口 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取计时器窗口' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTimerDialogHandle(table: hashtable, parentKey: number, childKey: number, whichTimerdialog: timerdialog): boolean;

/**
 * <1.24> 保存排行榜 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存排行榜 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取排行榜' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveLeaderboardHandle(table: hashtable, parentKey: number, childKey: number, whichLeaderboard: leaderboard): boolean;

/**
 * <1.24> 保存多面板 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存多面板 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取多面板' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveMultiboardHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboard: multiboard): boolean;

/**
 * <1.24> 保存多面板项目 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存多面板项目 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取多面板项目' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number, whichMultiboarditem: multiboarditem): boolean;

/**
 * <1.24> 保存可追踪物 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存可追踪物 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取可追踪物' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTrackableHandle(table: hashtable, parentKey: number, childKey: number, whichTrackable: trackable): boolean;

/**
 * <1.24> 保存对话框 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存对话框 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取对话框' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveDialogHandle(table: hashtable, parentKey: number, childKey: number, whichDialog: dialog): boolean;

/**
 * <1.24> 保存对话框按钮 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存对话框按钮 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取对话框按钮' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveButtonHandle(table: hashtable, parentKey: number, childKey: number, whichButton: button): boolean;

/**
 * <1.24> 保存漂浮文字 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存漂浮文字 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取漂浮文字' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveTextTagHandle(table: hashtable, parentKey: number, childKey: number, whichTexttag: texttag): boolean;

/**
 * <1.24> 保存闪电效果 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存闪电效果 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取闪电效果' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveLightningHandle(table: hashtable, parentKey: number, childKey: number, whichLightning: lightning): boolean;

/**
 * <1.24> 保存图像 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存图像 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取图像' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveImageHandle(table: hashtable, parentKey: number, childKey: number, whichImage: image): boolean;

/**
 * <1.24> 保存地面纹理变化 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存地面纹理变化 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取地面纹理变化' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveUbersplatHandle(table: hashtable, parentKey: number, childKey: number, whichUbersplat: ubersplat): boolean;

/**
 * <1.24> 保存区域(不规则) [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存区域(不规则) ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取区域(不规则)' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveRegionHandle(table: hashtable, parentKey: number, childKey: number, whichRegion: region): boolean;

/**
 * <1.24> 保存迷雾状态 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存迷雾状态 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取迷雾状态' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveFogStateHandle(table: hashtable, parentKey: number, childKey: number, whichFogState: fogstate): boolean;

/**
 * <1.24> 保存可见度修正器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存可见度修正器 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取可见度修正器' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveFogModifierHandle(table: hashtable, parentKey: number, childKey: number, whichFogModifier: fogmodifier): boolean;

/**
 * <1.24> 保存实体对象 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存对象 ${Value}
 *
 * @remark
 * 实体对象即一切需要计算变量连接数的对象
 *
 * @TC_HASHTABLE
 */
declare function SaveAgentHandle(table: hashtable, parentKey: number, childKey: number, whichAgent: agent): boolean;

/**
 * <1.24> 保存哈希表 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 中保存哈希表 ${Value}
 *
 * @remark
 * 使用 '哈希表 - 从哈希表提取哈希表' 可以取出保存的值
 *
 * @TC_HASHTABLE
 */
declare function SaveHashtableHandle(table: hashtable, parentKey: number, childKey: number, whichHashtable: hashtable): boolean;

/**
 * <1.24> 从哈希表提取整数 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取整数
 *
 * @remark
 * 如果不存在则返回0
 *
 * @TC_HASHTABLE
 */
declare function LoadInteger(table: hashtable, parentKey: number, childKey: number): number;

/**
 * <1.24> 从哈希表提取实数 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取实数
 *
 * @remark
 * 如果不存在则返回0.00
 *
 * @TC_HASHTABLE
 */
declare function LoadReal(table: hashtable, parentKey: number, childKey: number): number;

/**
 * <1.24> 从哈希表提取布尔 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取布尔
 *
 * @remark
 * 如果不存在则返回False
 *
 * @TC_HASHTABLE
 */
declare function LoadBoolean(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * <1.24> 从哈希表提取字符串 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取字符串
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadStr(table: hashtable, parentKey: number, childKey: number): string;

/**
 * <1.24> 从哈希表提取玩家 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取玩家
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadPlayerHandle(table: hashtable, parentKey: number, childKey: number): player;
declare function LoadWidgetHandle(table: hashtable, parentKey: number, childKey: number): widget;

/**
 * <1.24> 从哈希表提取可破坏物 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取可破坏物
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadDestructableHandle(table: hashtable, parentKey: number, childKey: number): destructable;

/**
 * <1.24> 从哈希表提取物品 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取物品
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadItemHandle(table: hashtable, parentKey: number, childKey: number): item;

/**
 * <1.24> 从哈希表提取单位 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取单位
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadUnitHandle(table: hashtable, parentKey: number, childKey: number): unit;
declare function LoadAbilityHandle(table: hashtable, parentKey: number, childKey: number): ability;

/**
 * <1.24> 从哈希表提取计时器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取计时器
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTimerHandle(table: hashtable, parentKey: number, childKey: number): timer;

/**
 * <1.24> 从哈希表提取触发器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取触发器
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTriggerHandle(table: hashtable, parentKey: number, childKey: number): trigger;

/**
 * <1.24> 从哈希表提取触发条件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取触发条件
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTriggerConditionHandle(table: hashtable, parentKey: number, childKey: number): triggercondition;

/**
 * <1.24> 从哈希表提取触发动作 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取触发动作
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTriggerActionHandle(table: hashtable, parentKey: number, childKey: number): triggeraction;

/**
 * <1.24> 从哈希表提取触发事件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取触发事件
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTriggerEventHandle(table: hashtable, parentKey: number, childKey: number): event;

/**
 * <1.24> 从哈希表提取玩家组 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取玩家组
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadForceHandle(table: hashtable, parentKey: number, childKey: number): force;

/**
 * <1.24> 从哈希表提取单位组 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取单位组
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadGroupHandle(table: hashtable, parentKey: number, childKey: number): group;

/**
 * <1.24> 从哈希表提取点 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取点
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadLocationHandle(table: hashtable, parentKey: number, childKey: number): location;

/**
 * <1.24> 从哈希表提取区域(矩型) [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取区域(矩型)
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadRectHandle(table: hashtable, parentKey: number, childKey: number): rect;

/**
 * <1.24> 从哈希表提取布尔表达式 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取布尔表达式
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadBooleanExprHandle(table: hashtable, parentKey: number, childKey: number): boolexpr;

/**
 * <1.24> 从哈希表提取音效 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取音效
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadSoundHandle(table: hashtable, parentKey: number, childKey: number): sound;

/**
 * <1.24> 从哈希表提取特效 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取特效
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadEffectHandle(table: hashtable, parentKey: number, childKey: number): effect;

/**
 * <1.24> 从哈希表提取单位池 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取单位池
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadUnitPoolHandle(table: hashtable, parentKey: number, childKey: number): unitpool;

/**
 * <1.24> 从哈希表提取物品池 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取物品池
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadItemPoolHandle(table: hashtable, parentKey: number, childKey: number): itempool;

/**
 * <1.24> 从哈希表提取任务 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取任务
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadQuestHandle(table: hashtable, parentKey: number, childKey: number): quest;

/**
 * <1.24> 从哈希表提取任务要求 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取任务要求
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadQuestItemHandle(table: hashtable, parentKey: number, childKey: number): questitem;

/**
 * <1.24> 从哈希表提取失败条件 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取失败条件
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadDefeatConditionHandle(table: hashtable, parentKey: number, childKey: number): defeatcondition;

/**
 * <1.24> 从哈希表提取计时器窗口 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取计时器窗口
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTimerDialogHandle(table: hashtable, parentKey: number, childKey: number): timerdialog;

/**
 * <1.24> 从哈希表提取排行榜 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取排行榜
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadLeaderboardHandle(table: hashtable, parentKey: number, childKey: number): leaderboard;

/**
 * <1.24> 从哈希表提取多面板 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取多面板
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadMultiboardHandle(table: hashtable, parentKey: number, childKey: number): multiboard;

/**
 * <1.24> 从哈希表提取多面板项目 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取多面板项目
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadMultiboardItemHandle(table: hashtable, parentKey: number, childKey: number): multiboarditem;

/**
 * <1.24> 从哈希表提取可追踪物 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取可追踪物
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTrackableHandle(table: hashtable, parentKey: number, childKey: number): trackable;

/**
 * <1.24> 从哈希表提取对话框 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取对话框
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadDialogHandle(table: hashtable, parentKey: number, childKey: number): dialog;

/**
 * <1.24> 从哈希表提取对话框按钮 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取对话框按钮
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadButtonHandle(table: hashtable, parentKey: number, childKey: number): button;

/**
 * <1.24> 从哈希表提取漂浮文字 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取漂浮文字
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadTextTagHandle(table: hashtable, parentKey: number, childKey: number): texttag;

/**
 * <1.24> 从哈希表提取闪电效果 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取闪电效果
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadLightningHandle(table: hashtable, parentKey: number, childKey: number): lightning;

/**
 * <1.24> 从哈希表提取图象 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取图象
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadImageHandle(table: hashtable, parentKey: number, childKey: number): image;

/**
 * <1.24> 从哈希表提取地面纹理变化 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取地面纹理变化
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadUbersplatHandle(table: hashtable, parentKey: number, childKey: number): ubersplat;

/**
 * <1.24> 从哈希表提取区域(不规则) [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取区域(不规则)
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadRegionHandle(table: hashtable, parentKey: number, childKey: number): region;

/**
 * <1.24> 从哈希表提取迷雾状态 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取迷雾状态
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadFogStateHandle(table: hashtable, parentKey: number, childKey: number): fogstate;

/**
 * <1.24> 从哈希表提取可见度修正器 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取可见度修正器
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_HASHTABLE
 */
declare function LoadFogModifierHandle(table: hashtable, parentKey: number, childKey: number): fogmodifier;

/**
 * <1.24> 从哈希表提取哈希表 [C]  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value} 内提取哈希表
 *
 * @remark
 * 如果不存在则返回空
 *
 * @TC_LAST
 */
declare function LoadHashtableHandle(table: hashtable, parentKey: number, childKey: number): hashtable;

/**
 * <1.24> 哈希项存有整数值 <new>  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value}  存储有整数值
 *
 * @TC_HASHTABLE
 */
declare function HaveSavedInteger(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * <1.24> 哈希项存有实数值 <new>  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value}  存储有实数值
 *
 * @TC_HASHTABLE
 */
declare function HaveSavedReal(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * <1.24> 哈希项存有布尔值 <new>  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value}  存储有布尔值
 *
 * @TC_HASHTABLE
 */
declare function HaveSavedBoolean(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * <1.24> 哈希项存有字符串 <new>  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value}  存储有字符串
 *
 * @TC_HASHTABLE
 */
declare function HaveSavedString(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * <1.24> 哈希项存有句柄 <new>  
 * 在 ${Hashtable} 的主索引 ${Value} 子索引 ${Value}  存储有句柄
 *
 * @TC_HASHTABLE
 */
declare function HaveSavedHandle(table: hashtable, parentKey: number, childKey: number): boolean;

/**
 * 清理哈希项存储的整数值 <new>  
 * 清空 ${Hashtable}  主索引  ${Value}  子索引${childKey}  之内的整数值
 *
 * @remark
 * 清空哈希表主索引下的整数值
 *
 * @TC_HASHTABLE
 */
declare function RemoveSavedInteger(table: hashtable, parentKey: number, childKey: number): void;

/**
 * 清理哈希项存储的实数值 <new>  
 * 清空 ${Hashtable}  主索引  ${Value}  子索引${childKey}  之内的实数值
 *
 * @remark
 * 清空哈希表主索引下的实数值
 *
 * @TC_HASHTABLE
 */
declare function RemoveSavedReal(table: hashtable, parentKey: number, childKey: number): void;

/**
 * 清理哈希项存储的布尔值 <new>  
 * 清空 ${Hashtable}  主索引  ${Value}  子索引${childKey}  之内的布尔值
 *
 * @remark
 * 清空哈希表主索引下的布尔值
 *
 * @TC_HASHTABLE
 */
declare function RemoveSavedBoolean(table: hashtable, parentKey: number, childKey: number): void;

/**
 * 清理哈希项存储的字符串 <new>  
 * 清空 ${Hashtable}  主索引  ${Value}  子索引${childKey}  之内的字符串
 *
 * @remark
 * 清空哈希表主索引下的字符串
 *
 * @TC_HASHTABLE
 */
declare function RemoveSavedString(table: hashtable, parentKey: number, childKey: number): void;

/**
 * 清理哈希项存储的句柄 <new>  
 * 清空 ${Hashtable}  主索引  ${Value}  子索引${childKey}  之内的句柄
 *
 * @remark
 * 清空哈希表主索引下的句柄
 *
 * @TC_HASHTABLE
 */
declare function RemoveSavedHandle(table: hashtable, parentKey: number, childKey: number): void;

/**
 * <1.24> 清空哈希表 [C]  
 * 清空 ${Hashtable}
 *
 * @remark
 * 清空哈希表所有数据
 *
 * @TC_HASHTABLE
 */
declare function FlushParentHashtable(table: hashtable): void;

/**
 * <1.24> 清空哈希表主索引 [C]  
 * 清空 ${Hashtable} 中位于主索引 ${Value}  之内的所有数据
 *
 * @remark
 * 清空哈希表主索引下的所有数据
 *
 * @TC_HASHTABLE
 */
declare function FlushChildHashtable(table: hashtable, parentKey: number): void;

/**
 * 随机整数  
 * 随机整数,最小值: ${Minimum} 最大值: ${Maximum}
 *
 * @TC_MATH
 */
declare function GetRandomInt(lowBound: number, highBound: number): number;

/**
 * 随机实数  
 * 随机实数,最小值: ${Minimum} 最大值: ${Maximum}
 *
 * @TC_MATH
 */
declare function GetRandomReal(lowBound: number, highBound: number): number;

/**
 * 新建单位池 [R]  
 * 新建的空单位池
 *
 * @remark
 * 会创建单位池。
 *
 * @TC_NOTHING
 */
declare function CreateUnitPool(): unitpool;

/**
 * 删除单位池 [R]  
 * 删除 ${单位池}
 *
 * @TC_UNITPOOL
 */
declare function DestroyUnitPool(whichPool: unitpool): void;

/**
 * 添加单位类型 [R]  
 * 在 ${单位池} 中添加一个 ${单位} 比重为 ${数值}
 *
 * @remark
 * 比重越高被选择的机率越大
 *
 * @TC_UNITPOOL
 */
declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: number, weight: number): void;

/**
 * 删除单位类型 [R]  
 * 从 ${单位池} 中删除 ${单位}
 *
 * @TC_UNITPOOL
 */
declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: number): void;

/**
 * 选择放置单位 [R]  
 * 从 ${单位池} 中为 ${玩家} 任意选择一个单位并放置到点( ${X} , ${Y} ) 面向 ${度}
 *
 * @TC_UNITPOOL
 */

/**
 * 选择放置单位 [R]  
 * 从 ${单位池} 中为 ${玩家} 任意选择一个单位并放置到点( ${X} , ${Y} ) 面向 ${度}
 *
 * @remark
 * 从单位池中随机选取一个单位类型.
 *
 * @TC_UNITPOOL
 */
declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: number, y: number, facing: number): unit;

/**
 * 新建物品池 [R]  
 * 新建的空物品池
 *
 * @remark
 * 会创建物品池.
 *
 * @TC_NOTHING
 */
declare function CreateItemPool(): itempool;

/**
 * 删除物品池 [R]  
 * 删除 ${物品池}
 *
 * @TC_ITEMPOOL
 */
declare function DestroyItemPool(whichItemPool: itempool): void;

/**
 * 添加物品类型 [R]  
 * 在 ${物品池} 中添加一个 ${物品} 比重为 ${数值}
 *
 * @remark
 * 比重越高被选择的机率越大.
 *
 * @TC_ITEMPOOL
 */
declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: number, weight: number): void;

/**
 * 删除物品类型 [R]  
 * 从 ${物品池} 中删除 ${物品}
 *
 * @TC_ITEMPOOL
 */
declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: number): void;

/**
 * 选择放置物品 [R]  
 * 从 ${物品池} 中任意选择一个物品并放置到( ${X} , ${Y} )点
 *
 * @TC_ITEMPOOL
 */

/**
 * 选择放置物品 [R]  
 * 从 ${物品池} 中任意选择一个物品并放置到( ${X} , ${Y} )点
 *
 * @TC_ITEMPOOL
 */
declare function PlaceRandomItem(whichItemPool: itempool, x: number, y: number): item;
declare function ChooseRandomCreep(level: number): number;
declare function ChooseRandomNPBuilding(): number;
declare function ChooseRandomItem(level: number): number;
declare function ChooseRandomItemEx(whichType: itemtype, level: number): number;

/**
 * 设置随机种子  
 * 设置随机种子数为：${整数}
 *
 * @remark
 * 设置游戏的随机种子，随机种子会影响随机整数，攻击骰子之类的随机数。
 *
 * @TC_NOTHING
 */
declare function SetRandomSeed(seed: number): void;
declare function SetTerrainFog(a: number, b: number, c: number, d: number, e: number): void;
declare function ResetTerrainFog(): void;
declare function SetUnitFog(a: number, b: number, c: number, d: number, e: number): void;

/**
 * 设置迷雾 [R]  
 * 迷雾风格: ${Style}, Z轴开始端: ${Z-Start}, Z轴结束端: ${Z-End}, 密度: ${Density} 颜色:(${Red},${Green},${Blue})
 *
 * @remark
 * 颜色格式为(红,绿,蓝). 取值范围0.00-1.00.
 *
 * @TC_ENVIRONMENT
 */
declare function SetTerrainFogEx(style: number, zstart: number, zend: number, density: number, red: number, green: number, blue: number): void;

/**
 * 对玩家显示文本消息(自动限时) [R]  
 * 对 ${玩家} 在屏幕位移(${X},${Y})处显示文本: ${文字}
 *
 * @remark
 * 显示时间取决于文字长度. 位移的取值在0-1之间. 可使用'本地玩家'实现对所有玩家发送消息.
 *
 * @TC_GAME
 */
declare function DisplayTextToPlayer(toPlayer: player, x: number, y: number, message: string): void;

/**
 * 对玩家显示文本消息(指定时间) [R]  
 * 对 ${玩家} 在屏幕位移(${X},${Y})处显示 ${时间} 秒的文本信息: ${文字}
 *
 * @remark
 * 位移的取值在0-1之间. 可使用'本地玩家[R]'实现对所有玩家发送消息.
 *
 * @TC_GAME
 */
declare function DisplayTimedTextToPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void;
declare function DisplayTimedTextFromPlayer(toPlayer: player, x: number, y: number, duration: number, message: string): void;

/**
 * 清空文本信息(所有玩家) [R]  
 * 清空玩家屏幕上的文本信息
 *
 * @TC_GAME
 */
declare function ClearTextMessages(): void;
declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): void;

/**
 * 设置天空  
 * 设置天空模型为 ${Sky}
 *
 * @TC_ENVIRONMENT
 */
declare function SetSkyModel(skyModelFile: string): void;

/**
 * 启用/禁用玩家控制权(所有玩家) [R]  
 * ${启用/禁用} 玩家控制权
 *
 * @TC_CINEMATIC
 */
declare function EnableUserControl(b: boolean): void;
declare function EnableUserUI(b: boolean): void;
declare function SuspendTimeOfDay(b: boolean): void;

/**
 * 设置昼夜时间流逝速度 [R]  
 * 设置昼夜时间流逝速度为默认值的 ${Value}倍
 *
 * @remark
 * 设置100%来恢复正常值. 该值并不影响游戏速度.
 *
 * @TC_GAME
 */
declare function SetTimeOfDayScale(r: number): void;
declare function GetTimeOfDayScale(): number;

/**
 * 开启/关闭 信箱模式(所有玩家) [R]  
 * ${开启/关闭} 信箱模式,转换时间为 ${Duration} 秒
 *
 * @remark
 * 使用电影镜头模式,隐藏游戏界面.
 *
 * @TC_CINEMATIC
 */
declare function ShowInterface(flag: boolean, fadeDuration: number): void;

/**
 * 暂停/恢复游戏 [R]  
 * ${暂停/恢复} 游戏
 *
 * @TC_GAME
 */
declare function PauseGame(flag: boolean): void;

/**
 * 闪动指示器(对单位) [R]  
 * 对 ${单位} 闪动指示器,使用颜色:(${Red}%, ${Green}%, ${Blue}%) Alpha通道值: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha通道值0为不可见. 颜色值和Alpha通道值取值范围为0-255.
 *
 * @TC_CINEMATIC
 */
declare function UnitAddIndicator(whichUnit: unit, red: number, green: number, blue: number, alpha: number): void;
declare function AddIndicator(whichWidget: widget, red: number, green: number, blue: number, alpha: number): void;

/**
 * 小地图信号(所有玩家) [R]  
 * 对所有玩家发送小地图信号到坐标(${X},${Y}) 持续时间: ${Duration} 秒
 *
 * @TC_CINEMATIC
 */
declare function PingMinimap(x: number, y: number, duration: number): void;

/**
 * 小地图信号(指定颜色)(所有玩家) [R]  
 * 对所有玩家发送小地图信号到坐标(${X},${Y}) 持续时间: ${Duration} 秒, 信号颜色:(${Red},${Green},${Blue}) 信号类型: ${Style}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). 颜色值取值范围为0-255.
 *
 * @TC_CINEMATIC
 */
declare function PingMinimapEx(x: number, y: number, duration: number, red: number, green: number, blue: number, extraEffects: boolean): void;

/**
 * 允许/禁止闭塞(所有玩家) [R]  
 * ${Enable/Disable} 闭塞
 *
 * @TC_CINEMATIC
 */
declare function EnableOcclusion(flag: boolean): void;
declare function SetIntroShotText(introText: string): void;
declare function SetIntroShotModel(introModelPath: string): void;

/**
 * 允许/禁止 边界染色(所有玩家) [R]  
 * ${Enable/Disable} 边界染色,应用于所有玩家
 *
 * @remark
 * 禁用边界染色时边界为普通地形,不显示为黑色,但仍是不可通行的.
 *
 * @TC_CINEMATIC
 */
declare function EnableWorldFogBoundary(b: boolean): void;
declare function PlayModelCinematic(modelName: string): void;
declare function PlayCinematic(movieName: string): void;
declare function ForceUIKey(key: string): void;
declare function ForceUICancel(): void;
declare function DisplayLoadDialog(): void;

/**
 * 设置小地图特殊标志  
 * 设置小地图特殊标志为 ${Image}
 *
 * @remark
 * 必须使用16x16的图像.
 *
 * @TC_NEUTRALBUILDING
 */
declare function SetAltMinimapIcon(iconPath: string): void;

/**
 * 禁用 重新开始任务按钮  
 * 设置 重新开始任务按钮可以点击为 ${}
 *
 * @remark
 * 当单人游戏时，可以设置重新开始任务按钮能否允许点击。
 *
 * @TC_GAME
 */
declare function DisableRestartMission(flag: boolean): void;

/**
 * 新建漂浮文字 [R]  
 * 新建的空漂浮文字
 *
 * @remark
 * 会创建漂浮文字.
 *
 * @TC_NOTHING
 */
declare function CreateTextTag(): texttag;
declare function DestroyTextTag(t: texttag): void;

/**
 * 改变文字内容 [R]  
 * 改变 ${Floating Text} 的内容为 ${文字} ,字体大小: ${Size}
 *
 * @remark
 * 采用原始字体大小单位. 字体大小不能超过0.5.
 *
 * @TC_TEXTTAG
 */
declare function SetTextTagText(t: texttag, s: string, height: number): void;

/**
 * 改变位置(坐标) [R]  
 * 改变 ${Floating Text} 的位置为(${X},${Y}) ,Z轴高度为 ${Z}
 *
 * @TC_TEXTTAG
 */
declare function SetTextTagPos(t: texttag, x: number, y: number, heightOffset: number): void;
declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: number): void;

/**
 * 改变颜色 [R]  
 * 改变 ${Floating Text} 的颜色为(${Red},${Green},${Blue}) 透明值为 ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). 透明值0为不可见. 颜色值和透明值取值范围为0-255.
 *
 * @TC_TEXTTAG
 */
declare function SetTextTagColor(t: texttag, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置速率 [R]  
 * 设置 ${Floating Text} 的X轴速率: ${XSpeed} ,Y轴速率: ${YSpeed}
 *
 * @remark
 * 对移动后的漂浮文字设置速率,该漂浮文字会先回到原点再向设定的角度移动. 这里的1约等于游戏中的1800速度.
 *
 * @TC_TEXTTAG
 */
declare function SetTextTagVelocity(t: texttag, xvel: number, yvel: number): void;

/**
 * 显示/隐藏 (所有玩家) [R]  
 * 对所有玩家 ${Show/Hide} ${Floating Text}
 *
 * @TC_TEXTTAG
 */
declare function SetTextTagVisibility(t: texttag, flag: boolean): void;
declare function SetTextTagSuspended(t: texttag, flag: boolean): void;
declare function SetTextTagPermanent(t: texttag, flag: boolean): void;
declare function SetTextTagAge(t: texttag, age: number): void;
declare function SetTextTagLifespan(t: texttag, lifespan: number): void;
declare function SetTextTagFadepoint(t: texttag, fadepoint: number): void;

/**
 * 保留英雄图标  
 * 为玩家保留 ${Number} 个左上角英雄图标.
 *
 * @remark
 * 因为共享单位而被控制的其他玩家英雄的图标将在保留位置之后开始显示.
 *
 * @TC_HERO
 */
declare function SetReservedLocalHeroButtons(reserved: number): void;

/**
 * 联盟颜色显示设置  
 * 联盟颜色显示设置
 *
 * @remark
 * 0为不开启. 1为小地图显示. 2为小地图和游戏都显示.
 *
 * @TC_GAME
 */
declare function GetAllyColorFilterState(): number;

/**
 * 设置联盟颜色显示  
 * 设置联盟颜色显示状态为 ${State}
 *
 * @remark
 * 0为不开启. 1为小地图显示. 2为小地图和游戏都显示. 相当于游戏中Alt+A功能.
 *
 * @TC_GAME
 */
declare function SetAllyColorFilterState(state: number): void;

/**
 * 小地图中立生物显示开启  
 * 小地图中立生物显示开启
 *
 * @TC_GAME
 */
declare function GetCreepCampFilterState(): boolean;

/**
 * 设置小地图中立生物显示  
 * 小地图 ${Show/Hide} 中立生物
 *
 * @remark
 * 相当于游戏中Alt+R功能.
 *
 * @TC_GAME
 */
declare function SetCreepCampFilterState(state: boolean): void;

/**
 * 允许/禁用小地图按钮  
 * ${Enable/Disable} 联盟颜色显示按钮, ${Enable/Disable} 中立生物显示按钮
 *
 * @TC_GAME
 */
declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): void;

/**
 * 允许/禁用框选  
 * ${Enable/Disable} 框选功能 (${Enable/Disable} 显示选择框)
 *
 * @TC_GAME
 */
declare function EnableDragSelect(state: boolean, ui: boolean): void;

/**
 * 允许/禁用预选  
 * ${Enable/Disable} 预选功能 (${Enable/Disable} 显示预选圈,生命槽,物体信息)
 *
 * @TC_GAME
 */
declare function EnablePreSelect(state: boolean, ui: boolean): void;

/**
 * 允许/禁用选择  
 * ${Enable/Disable} 选择和取消选择功能 (${Enable/Disable} 显示选择圈)
 *
 * @remark
 * 禁用选择后仍可以通过触发来选择物体. 只有允许选择功能时才会显示选择圈.
 *
 * @TC_GAME
 */
declare function EnableSelect(state: boolean, ui: boolean): void;

/**
 * 新建可追踪物 [R]  
 * 新建的可追踪物, 使用模型: ${模型名字} 所在位置: ( ${X轴} , ${Y轴} ) 面向角度: ${数值} 度
 *
 * @remark
 * 可用来响应鼠标的移动和点击. 会创建可追踪物.
 *
 * @TC_NOTHING
 */
declare function CreateTrackable(trackableModelPath: string, x: number, y: number, facing: number): trackable;

/**
 * 新建任务 [R]  
 * 新建任务 
 *
 * @remark
 * 新建一个任务.注：这条毫无用处，别用——everguo
 *
 * @TC_QUEST
 */
declare function CreateQuest(): quest;
declare function DestroyQuest(whichQuest: quest): void;
declare function QuestSetTitle(whichQuest: quest, title: string): void;
declare function QuestSetDescription(whichQuest: quest, description: string): void;
declare function QuestSetIconPath(whichQuest: quest, iconPath: string): void;
declare function QuestSetRequired(whichQuest: quest, required: boolean): void;
declare function QuestSetCompleted(whichQuest: quest, completed: boolean): void;
declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): void;
declare function QuestSetFailed(whichQuest: quest, failed: boolean): void;

/**
 * 启用/禁用 任务 [R]  
 * 设置 ${Quest} ${Enable/Disable}
 *
 * @remark
 * 被禁用的任务将不会显示在任务列表.
 *
 * @TC_QUEST
 */
declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): void;

/**
 * 是主要任务  
 * ${Quest} 是主要任务
 *
 * @TC_QUEST
 */
declare function IsQuestRequired(whichQuest: quest): boolean;

/**
 * 任务完成  
 * ${Quest} 已完成
 *
 * @TC_QUEST
 */
declare function IsQuestCompleted(whichQuest: quest): boolean;

/**
 * 任务被发现  
 * ${Quest} 已被发现
 *
 * @TC_QUEST
 */
declare function IsQuestDiscovered(whichQuest: quest): boolean;

/**
 * 任务失败  
 * ${Quest} 失败
 *
 * @TC_QUEST
 */
declare function IsQuestFailed(whichQuest: quest): boolean;

/**
 * 任务激活  
 * ${Quest} 已激活
 *
 * @TC_QUEST
 */
declare function IsQuestEnabled(whichQuest: quest): boolean;
declare function QuestCreateItem(whichQuest: quest): questitem;
declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): void;
declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): void;

/**
 * 任务项目完成  
 * ${Quest Requirement} 已完成
 *
 * @TC_QUEST
 */
declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean;
declare function CreateDefeatCondition(): defeatcondition;
declare function DestroyDefeatCondition(whichCondition: defeatcondition): void;
declare function DefeatConditionSetDescription(whichCondition: defeatcondition, description: string): void;
declare function FlashQuestDialogButton(): void;
declare function ForceQuestDialogUpdate(): void;

/**
 * 新建计时器窗口 [R]  
 * 为 ${计时器} 新建计时窗口
 *
 * @remark
 * 为一个计时器创建一个新建计时器窗口.
 *
 * @TC_TIMER
 */
declare function CreateTimerDialog(t: timer): timerdialog;
declare function DestroyTimerDialog(whichDialog: timerdialog): void;
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): void;

/**
 * 改变计时器窗口文字颜色 [R]  
 * 改变 ${Timer Window} 文字颜色为(${Red},${Green},${Blue}) 透明值为: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha通道值0为不可见. 颜色值和透明值值取值范围为0-255.
 *
 * @TC_TIMER
 */
declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;

/**
 * 改变计时器窗口计时颜色 [R]  
 * 改变 ${Timer Window} 的计间颜色为(${Red},${Green},${Blue}) 透明值为: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha通道值0为不可见. 颜色值和透明值值取值范围为0-255.
 *
 * @TC_TIMER
 */
declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置计时器窗口速率 [R]  
 * 设置 ${Timer Window} 的时间流逝速度为 ${Factor} 倍
 *
 * @remark
 *  同时计时器显示时间也会随之变化. 就是说60秒的计时器设置为2倍速则显示时间也会变为120秒.
 *
 * @TC_TIMER
 */
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: number): void;

/**
 * 显示/隐藏 计时器窗口(所有玩家) [R]  
 * 设置 ${计时器窗口} 的状态为${Show/Hide}
 *
 * @remark
 * 计时器窗口不能在地图初始化时显示.
 *
 * @TC_TIMER
 */
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): void;
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean;
declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: number): void;

/**
 * 新建排行榜 [R]  
 * 新建的空排行榜
 *
 * @remark
 * 会创建排行榜.
 *
 * @TC_NOTHING
 */
declare function CreateLeaderboard(): leaderboard;
declare function DestroyLeaderboard(lb: leaderboard): void;

/**
 * 显示/隐藏 [R]  
 * 设置 ${排行榜} ${Show/Hide}
 *
 * @remark
 * 排行榜不能在地图初始化时显示.
 *
 * @TC_LEADERBOARD
 */
declare function LeaderboardDisplay(lb: leaderboard, show: boolean): void;
declare function IsLeaderboardDisplayed(lb: leaderboard): boolean;

/**
 * 行数  
 * ${Leaderboard} 的行数
 *
 * @TC_LEADERBOARD
 */
declare function LeaderboardGetItemCount(lb: leaderboard): number;
declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: number): void;
declare function LeaderboardAddItem(lb: leaderboard, label: string, value: number, p: player): void;
declare function LeaderboardRemoveItem(lb: leaderboard, index: number): void;
declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): void;

/**
 * 清空 [R]  
 * 清空 ${排行榜}
 *
 * @remark
 * 清空排行榜中所有内容.
 *
 * @TC_LEADERBOARD
 */
declare function LeaderboardClear(lb: leaderboard): void;
declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): void;
declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean;
declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): number;
declare function LeaderboardSetLabel(lb: leaderboard, label: string): void;
declare function LeaderboardGetLabelText(lb: leaderboard): string;

/**
 * 设置玩家使用的排行榜 [R]  
 * 设置 ${Player} 使用 ${排行榜}
 *
 * @remark
 * 每个玩家只能显示一个排行榜.
 *
 * @TC_LEADERBOARD
 */
declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): void;
declare function PlayerGetLeaderboard(toPlayer: player): leaderboard;

/**
 * 设置文字颜色 [R]  
 * 设置 ${Leaderboard} 的文字颜色为(${Red},${Green},${Blue}) Alpha通道值为: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha通道值0为不可见. 颜色值和Alpha通道值取值范围为0-255.
 *
 * @TC_LEADERBOARD
 */
declare function LeaderboardSetLabelColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置数值颜色 [R]  
 * 设置 ${Leaderboard} 的数值颜色为(${Red},${Green},${Blue}) Alpha通道值为: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha通道值0为不可见. 颜色值和Alpha通道值取值范围为0-255.
 *
 * @TC_LEADERBOARD
 */
declare function LeaderboardSetValueColor(lb: leaderboard, red: number, green: number, blue: number, alpha: number): void;
declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): void;
declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: number, val: number): void;
declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: number, val: string): void;
declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: number, showLabel: boolean, showValue: boolean, showIcon: boolean): void;
declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;
declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * 新建多面板 [R]  
 * 新建的空多面板
 *
 * @remark
 * 会创建多面板.
 *
 * @TC_NOTHING
 */
declare function CreateMultiboard(): multiboard;
declare function DestroyMultiboard(lb: multiboard): void;

/**
 * 显示/隐藏 [R]  
 * 设置 ${Multiboard} ${Show/Hide}
 *
 * @remark
 * 多面板不能在地图初始化时显示.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardDisplay(lb: multiboard, show: boolean): void;

/**
 * 多面板显示  
 * ${Multiboard} 是显示的
 *
 * @TC_MULTIBOARD
 */
declare function IsMultiboardDisplayed(lb: multiboard): boolean;

/**
 * 最大/最小化 [R]  
 * 设置 ${Multiboard} ${Minimize/Maximize}
 *
 * @remark
 * 最小化的多面板只显示标题.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardMinimize(lb: multiboard, minimize: boolean): void;

/**
 * 多面板最小化  
 * ${Multiboard} 是最小化的
 *
 * @TC_MULTIBOARD
 */
declare function IsMultiboardMinimized(lb: multiboard): boolean;

/**
 * 清空多面板  
 * 清空 ${Multiboard}
 *
 * @remark
 * 清空该多面板中的所有行和列.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardClear(lb: multiboard): void;

/**
 * 设置标题  
 * 设置 ${Multiboard} 的标题为 ${文字}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetTitleText(lb: multiboard, label: string): void;

/**
 * 多面板标题  
 * ${Multiboard} 的标题
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardGetTitleText(lb: multiboard): string;

/**
 * 设置标题颜色 [R]  
 * 设置 ${Multiboard} 的标题颜色为(${Red},${Green},${Blue}), Alpha值为 ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha值为0是不可见的. 颜色值和Alpha值取值范围为0-255.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetTitleTextColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void;

/**
 * 行数  
 * ${Multiboard} 的行数
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardGetRowCount(lb: multiboard): number;

/**
 * 列数  
 * ${Multiboard} 的列数
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardGetColumnCount(lb: multiboard): number;

/**
 * 设置列数  
 * 设置 ${Multiboard} 的列数为 ${Columns}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetColumnCount(lb: multiboard, count: number): void;

/**
 * 设置行数  
 * 设置 ${Multiboard} 的行数为 ${Rows}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetRowCount(lb: multiboard, count: number): void;

/**
 * 设置所有项目显示风格 [R]  
 * 设置 ${多面板} 的所有项目显示风格: ${Show/Hide} 文字 ${Show/Hide} 图标
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): void;

/**
 * 设置所有项目文本 [R]  
 * 设置 ${多面板} 的所有项目文本为 ${文字}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemsValue(lb: multiboard, value: string): void;

/**
 * 设置所有项目颜色 [R]  
 * 设置 ${多面板} 的所有项目颜色为(${Red},${Green},${Blue}), Alpha值为 ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha值为0是不可见的. 颜色值和Alpha值取值范围为0-255.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemsValueColor(lb: multiboard, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置所有项目宽度 [R]  
 * 设置 ${多面板} 的所有项目宽度为 ${Width} 倍屏幕宽度
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemsWidth(lb: multiboard, width: number): void;

/**
 * 设置所有项目图标 [R]  
 * 设置 ${多面板} 的所有项目图标为 ${Icon File}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): void;

/**
 * 多面板项目 [R]  
 * ${多面板} 的第 ${X} 行,第 ${Y} 列项
 *
 * @remark
 * (0,0)作为多面板首项,会创建多面板项目.
 *
 * @TC_NOTHING
 */
declare function MultiboardGetItem(lb: multiboard, row: number, column: number): multiboarditem;

/**
 * 删除多面板项目 [R]  
 * 删除 ${多面板项目}
 *
 * @remark
 * 并不会影响对多面板的显示. 多面板项目指向多面板但不附属于多面板.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardReleaseItem(mbi: multiboarditem): void;

/**
 * 设置指定项目显示风格 [R]  
 * 设置 ${多面板项目} 的显示风格: ${Show/Hide} 文字 ${Show/Hide} 图标
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): void;

/**
 * 设置指定项目文本 [R]  
 * 设置 ${多面板项目} 的项目文本为 ${文字}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): void;

/**
 * 设置指定项目颜色 [R]  
 * 设置 ${多面板项目} 的项目颜色为(${Red},${Green},${Blue}), Alpha值为 ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha值为0是不可见的. 颜色值和Alpha值取值范围为0-255.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemValueColor(mbi: multiboarditem, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置指定项目宽度 [R]  
 * 设置 ${多面板项目} 的项目宽度为 ${Width} 倍屏幕宽度
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemWidth(mbi: multiboarditem, width: number): void;

/**
 * 设置指定项目图标 [R]  
 * 设置 ${多面板项目} 的项目图标为 ${Icon File}
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): void;

/**
 * 显示/隐藏多面板模式 [R]  
 * ${打开/关闭} 隐藏多面板模式
 *
 * @remark
 * 隐藏多面板模式将无法显示多面板.
 *
 * @TC_MULTIBOARD
 */
declare function MultiboardSuppressDisplay(flag: boolean): void;
declare function SetCameraPosition(x: number, y: number): void;

/**
 * 设置空格键转向点(所有玩家) [R]  
 * 设置玩家的空格键转向点为(${X},${Y})
 *
 * @remark
 * 按下空格键时镜头转向的位置.
 *
 * @TC_CAMERA
 */
declare function SetCameraQuickPosition(x: number, y: number): void;

/**
 * 设置可用镜头区域(所有玩家) [R]  
 * 设置玩家可用镜头区域: 左下角(${X},${Y}), 左上角(${X},${Y}), 右上角(${X},${Y}), 右下角(${X},${Y})
 *
 * @remark
 * 该动作同样会影响小地图的显示. 但小地图的图片是无法改变的. 实际可用区域要大于可用镜头区域.
 *
 * @TC_CAMERA
 */
declare function SetCameraBounds(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

/**
 * 停止播放镜头(所有玩家) [R]  
 * 让所有玩家停止播放镜头
 *
 * @remark
 * 比如在平移镜头的过程中可用该动作来中断平移.
 *
 * @TC_CAMERA
 */
declare function StopCamera(): void;

/**
 * 重置游戏镜头(所有玩家) [R]  
 * 重置玩家镜头为游戏默认状态,持续  ${Time} 秒
 *
 * @TC_CAMERA
 */
declare function ResetToGameCamera(duration: number): void;
declare function PanCameraTo(x: number, y: number): void;

/**
 * 平移镜头(所有玩家)(限时) [R]  
 * 平移玩家镜头到(${X},${Y}),持续 ${Time} 秒
 *
 * @TC_CAMERA
 */
declare function PanCameraToTimed(x: number, y: number, duration: number): void;
declare function PanCameraToWithZ(x: number, y: number, zOffsetDest: number): void;

/**
 * 指定高度平移镜头(所有玩家)(限时) [R]  
 * 平移玩家镜头到(${X},${Y}),镜头距离地面高度为 ${Z},持续 ${Time} 秒
 *
 * @remark
 * 在指定移动路径上镜头不会低于地面高度.
 *
 * @TC_CAMERA
 */
declare function PanCameraToTimedWithZ(x: number, y: number, zOffsetDest: number, duration: number): void;

/**
 * 播放电影镜头(所有玩家) [R]  
 * 对所有玩家播放电影镜头: ${Camera File}
 *
 * @remark
 * 在'Objects\\CinematicCameras'目录下有一些电影镜头,可用Mpq工具来查询.
 *
 * @TC_CAMERA
 */
declare function SetCinematicCamera(cameraModelFile: string): void;

/**
 * 指定点旋转镜头(所有玩家)(弧度)(限时) [R]  
 * 以(${X},${Y})为中心,旋转弧度为${Rad}, 持续: ${Time} 秒
 *
 * @TC_CAMERA
 */
declare function SetCameraRotateMode(x: number, y: number, radiansToSweep: number, duration: number): void;

/**
 * 设置镜头属性(所有玩家)(限时) [R]  
 * 设置玩家的镜头属性 ${Field} 为 ${数值},持续 ${Time} 秒
 *
 * @TC_CAMERA
 */
declare function SetCameraField(whichField: camerafield, value: number, duration: number): void;
declare function AdjustCameraField(whichField: camerafield, offset: number, duration: number): void;

/**
 * 锁定镜头到单位(所有玩家) [R]  
 * 锁定玩家镜头到 ${单位}, 偏移坐标(${X}, ${Y}) ,使用 ${Rotation Source}
 *
 * @remark
 * 偏移坐标(X,Y)以单位脚底为原点坐标.
 *
 * @TC_CAMERA
 */
declare function SetCameraTargetController(whichUnit: unit, xoffset: number, yoffset: number, inheritOrientation: boolean): void;

/**
 * 锁定镜头到单位(固定镜头源)(所有玩家) [R]  
 * 锁定玩家镜头到 ${单位}, 偏移坐标(${X}, ${Y})
 *
 * @remark
 * 偏移坐标(X,Y)以单位脚底为原点坐标.
 *
 * @TC_CAMERA
 */
declare function SetCameraOrientController(whichUnit: unit, xoffset: number, yoffset: number): void;
declare function CreateCameraSetup(): camerasetup;
declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: number, duration: number): void;

/**
 * 镜头属性(指定镜头) [R]  
 * ${镜头} 的 ${Camera Field}
 *
 * @TC_CAMERA
 */
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): number;
declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: number, y: number, duration: number): void;

/**
 * 镜头目标点  
 * ${镜头} 的目标点
 *
 * @remark
 * 会创建点.
 *
 * @TC_CAMERA
 */
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location;
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): number;
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): number;
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): void;
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: number): void;

/**
 * 应用镜头(所有玩家)(限时) [R]  
 * 将 ${镜头} 应用方式设置为 ${Apply Method},持续 ${Time} 秒
 *
 * @TC_CAMERA
 */
declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: number): void;
declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: number, forceDuration: number): void;
declare function CameraSetTargetNoise(mag: number, velocity: number): void;
declare function CameraSetSourceNoise(mag: number, velocity: number): void;

/**
 * 摇晃镜头目标(所有玩家) [R]  
 * 摇晃玩家的镜头源, 摇晃幅度: ${Magnitude} 速率: ${Velocity} 摇晃方式: ${方式}
 *
 * @remark
 * 使用'镜头 - 重置镜头'或设置摇晃幅度和速率为0来停止摇晃.
 *
 * @TC_CAMERA
 */
declare function CameraSetTargetNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;

/**
 * 摇晃镜头源(所有玩家) [R]  
 * 摇晃玩家的镜头源, 摇晃幅度: ${Magnitude} 速率: ${Velocity} 摇晃方式: ${方式}
 *
 * @remark
 * 使用'镜头 - 重置镜头'或设置摇晃幅度和速率为0来停止摇晃.
 *
 * @TC_CAMERA
 */
declare function CameraSetSourceNoiseEx(mag: number, velocity: number, vertOnly: boolean): void;
declare function CameraSetSmoothingFactor(factor: number): void;
declare function SetCineFilterTexture(filename: string): void;
declare function SetCineFilterBlendMode(whichMode: blendmode): void;
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): void;
declare function SetCineFilterStartUV(minu: number, minv: number, maxu: number, maxv: number): void;
declare function SetCineFilterEndUV(minu: number, minv: number, maxu: number, maxv: number): void;
declare function SetCineFilterStartColor(red: number, green: number, blue: number, alpha: number): void;
declare function SetCineFilterEndColor(red: number, green: number, blue: number, alpha: number): void;
declare function SetCineFilterDuration(duration: number): void;
declare function DisplayCineFilter(flag: boolean): void;
declare function IsCineFilterDisplayed(): boolean;
declare function SetCinematicScene(portraitUnitId: number, color: playercolor, speakerTitle: string, text: string, sceneDuration: number, voiceoverDuration: number): void;
declare function EndCinematicScene(): void;
declare function ForceCinematicSubtitles(flag: boolean): void;
declare function GetCameraMargin(whichMargin: number): number;
declare function GetCameraBoundMinX(): number;
declare function GetCameraBoundMinY(): number;
declare function GetCameraBoundMaxX(): number;
declare function GetCameraBoundMaxY(): number;

/**
 * 镜头属性(当前镜头)  
 * 当前镜头的 ${Camera Field}
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraField(whichField: camerafield): number;

/**
 * 当前镜头目标X坐标  
 * 当前镜头目标X坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraTargetPositionX(): number;

/**
 * 当前镜头目标Y坐标  
 * 当前镜头目标Y坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraTargetPositionY(): number;

/**
 * 当前镜头目标Z坐标  
 * 当前镜头目标Z坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraTargetPositionZ(): number;

/**
 * 当前镜头目标点  
 * 当前镜头目标点
 *
 * @remark
 * 会创建点. 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraTargetPositionLoc(): location;

/**
 * 当前镜头源X坐标  
 * 当前镜头源X坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraEyePositionX(): number;

/**
 * 当前镜头源Y坐标  
 * 当前镜头源Y坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraEyePositionY(): number;

/**
 * 当前镜头源Z坐标  
 * 当前镜头源Z坐标
 *
 * @remark
 * 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraEyePositionZ(): number;

/**
 * 当前镜头源位置  
 * 当前镜头源位置
 *
 * @remark
 * 会创建点. 注意:该函数对各玩家返回值不同,请确定你知道自己在做什么,否则很容易引起掉线.
 *
 * @TC_CAMERA
 */
declare function GetCameraEyePositionLoc(): location;
declare function NewSoundEnvironment(environmentName: string): void;
declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, eaxSetting: string): sound;
declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number, SLKEntryName: string): sound;
declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: number, fadeOutRate: number): sound;
declare function CreateMIDISound(soundLabel: string, fadeInRate: number, fadeOutRate: number): sound;
declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): void;
declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: number): void;
declare function SetSoundChannel(soundHandle: sound, channel: number): void;

/**
 * 设置音效音量 [R]  
 * 设置 ${音效} 的音量为 ${Volume}
 *
 * @remark
 * 音量取值范围0-127.
 *
 * @TC_SOUND
 */
declare function SetSoundVolume(soundHandle: sound, volume: number): void;
declare function SetSoundPitch(soundHandle: sound, pitch: number): void;

/**
 * 设置音效播放时间点 [R]  
 * 设置 ${音效} 的播放时间点为 ${Offset} 毫秒
 *
 * @remark
 * 音效必须是正在播放的. 不能用于3D音效.
 *
 * @TC_SOUND
 */
declare function SetSoundPlayPosition(soundHandle: sound, millisecs: number): void;

/**
 * 设置3D音效衰减范围  
 * 设置 ${3D音效} 的衰减最小范围: ${数值} 最大范围: ${数值}
 *
 * @remark
 * 该动作仅用于3D音效. 注意不一定要达到最大范围,音量衰减到一定程度也会变没的.
 *
 * @TC_SOUND
 */
declare function SetSoundDistances(soundHandle: sound, minDist: number, maxDist: number): void;
declare function SetSoundConeAngles(soundHandle: sound, inside: number, outside: number, outsideVolume: number): void;
declare function SetSoundConeOrientation(soundHandle: sound, x: number, y: number, z: number): void;

/**
 * 设置3D音效位置(指定坐标) [R]  
 * 设置 ${3D音效} 的播放位置为(${X},${Y}), Z轴高度为 ${Z}
 *
 * @remark
 * 该动作仅用于3D音效.
 *
 * @TC_SOUND
 */
declare function SetSoundPosition(soundHandle: sound, x: number, y: number, z: number): void;
declare function SetSoundVelocity(soundHandle: sound, x: number, y: number, z: number): void;
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): void;
declare function StartSound(soundHandle: sound): void;
declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): void;
declare function KillSoundWhenDone(soundHandle: sound): void;

/**
 * 设置背景音乐列表 [R]  
 * 设置背景音乐列表为: ${Music} , ${允许/禁止} 随机播放, 开始播放序号为 ${Index}
 *
 * @remark
 * 可指定播放文件或播放目录.
 *
 * @TC_SOUND
 */
declare function SetMapMusic(musicName: string, random: boolean, index: number): void;
declare function ClearMapMusic(): void;
declare function PlayMusic(musicName: string): void;
declare function PlayMusicEx(musicName: string, frommsecs: number, fadeinmsecs: number): void;
declare function StopMusic(fadeOut: boolean): void;
declare function ResumeMusic(): void;

/**
 * 播放主题音乐 [C]  
 * 播放 ${Music Theme} 主题音乐
 *
 * @remark
 * 播放主题音乐一次,然后恢复原来的音乐.
 *
 * @TC_SOUND
 */
declare function PlayThematicMusic(musicFileName: string): void;

/**
 * 跳播主题音乐 [R]  
 * 播放 ${Music Theme} 主题音乐,跳过开始 ${Offset} 毫秒
 *
 * @TC_SOUND
 */
declare function PlayThematicMusicEx(musicFileName: string, frommsecs: number): void;

/**
 * 停止主题音乐[C]  
 * 停止正在播放的主题音乐
 *
 * @TC_SOUND
 */
declare function EndThematicMusic(): void;

/**
 * 设置背景音乐音量 [R]  
 * 设置背景音乐音量为 ${Volume}
 *
 * @remark
 * 音量取值范围为0-127.
 *
 * @TC_SOUND
 */
declare function SetMusicVolume(volume: number): void;

/**
 * 设置背景音乐播放时间点 [R]  
 * 设置当前背景音乐的播放时间点为 ${Offset} 毫秒
 *
 * @TC_SOUND
 */
declare function SetMusicPlayPosition(millisecs: number): void;

/**
 * 设置主题音乐播放时间点 [R]  
 * 设置当前主题音乐播放时间点为 ${Offset} 毫秒
 *
 * @TC_SOUND
 */
declare function SetThematicMusicPlayPosition(millisecs: number): void;
declare function SetSoundDuration(soundHandle: sound, duration: number): void;
declare function GetSoundDuration(soundHandle: sound): number;
declare function GetSoundFileDuration(musicFileName: string): number;

/**
 * 设置多通道音量 [R]  
 * 设置 ${Volume Channel} 的音量为 ${Volume}
 *
 * @remark
 * 音量取值范围0-1.
 *
 * @TC_SOUND
 */
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: number): void;
declare function VolumeGroupReset(): void;
declare function GetSoundIsPlaying(soundHandle: sound): boolean;
declare function GetSoundIsLoading(soundHandle: sound): boolean;
declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;
declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: number, rectheight: number): void;

/**
 * 新建天气效果 [R]  
 * 新建的在 ${矩形区域} 的天气效果: ${WeatherId}
 *
 * @remark
 * 会创建天气效果.
 *
 * @TC_NOTHING
 */
declare function AddWeatherEffect(where: rect, effectID: number): weathereffect;
declare function RemoveWeatherEffect(whichEffect: weathereffect): void;

/**
 * 启用/禁用 天气效果  
 * 设置 ${Weather Effect} 的状态为: ${On/Off}
 *
 * @remark
 * 可以使用'环境 - 创建天气效果'动作来创建天气效果.
 *
 * @TC_ENVIRONMENT
 */
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): void;

/**
 * 新建地形变化:弹坑 [R]  
 * 新建的弹坑变形. 中心坐标:(${X},${Y}) 半径: ${Radius} 深度: ${Depth} 持续时间: ${Duration} 毫秒, 变化类型: ${Type}
 *
 * @remark
 * 深度可取负数. 永久地形变化在保存游戏时不会被记录.
 *
 * @TC_NOTHING
 */
declare function TerrainDeformCrater(x: number, y: number, radius: number, depth: number, duration: number, permanent: boolean): terraindeformation;

/**
 * 新建地形变化:波纹 [R]  
 * 新建的波纹变形. 中心坐标:(${X},${Y}) 最终半径: ${Radius} 深度: ${Depth} 持续时间: ${Duration} 毫秒, 变化次数: ${Count} 面波数: ${SpaceWave} 总波数: ${TimeWave} 初始半径率: ${数值} 变化类型: ${Type}
 *
 * @remark
 * 初始半径率
 *
 * @TC_NOTHING
 */
declare function TerrainDeformRipple(x: number, y: number, radius: number, depth: number, duration: number, count: number, spaceWaves: number, timeWaves: number, radiusStartPct: number, limitNeg: boolean): terraindeformation;

/**
 * 新建地形变化:冲击波 [R]  
 * 新建的冲击波变形. 起始坐标:(${X},${Y}) 波方向:(${X},${Y}) 波距离: ${distance} 波速度: ${speed} 波半径: ${radius} 深度: ${Depth} 变形效果持续时间: ${Delay} 毫秒, 变化次数: ${Count}
 *
 * @remark
 * 深度可取负数. 方向以(X,Y)坐标形式表示,如(1,1)表示45度.
 *
 * @TC_NOTHING
 */
declare function TerrainDeformWave(x: number, y: number, dirX: number, dirY: number, distance: number, speed: number, radius: number, depth: number, trailTime: number, count: number): terraindeformation;

/**
 * 新建地形变化:随机 [R]  
 * 新建的随机变形. 中心坐标:(${X},${Y}) 半径: ${Radius} 最小高度变化: ${Depth} 最大高度变化: ${Depth} 持续时间: ${Duration} 毫秒, 变化周期: ${Duration} 毫秒
 *
 * @TC_NOTHING
 */
declare function TerrainDeformRandom(x: number, y: number, radius: number, minDelta: number, maxDelta: number, duration: number, updateInterval: number): terraindeformation;

/**
 * 停止地形变化 [R]  
 * 停止 ${Terrain Deformation} ,衰退时间: ${Duration} 毫秒
 *
 * @remark
 * 地形变化会平滑地过渡到无.
 *
 * @TC_ENVIRONMENT
 */
declare function TerrainDeformStop(deformation: terraindeformation, duration: number): void;

/**
 * 停止所有地形变化  
 * 停止所有地形变化
 *
 * @remark
 * 包括由技能引起的地形变化.
 *
 * @TC_ENVIRONMENT
 */
declare function TerrainDeformStopAll(): void;

/**
 * 新建特效(创建到坐标) [R]  
 * 新建特效 ${Model File} 在(${X},${Y})处
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpecialEffect(modelName: string, x: number, y: number): effect;

/**
 * 新建特效(创建到点) [R]  
 * 新建特效 ${Model File} 在 ${指定点} 处
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpecialEffectLoc(modelName: string, where: location): effect;

/**
 * 新建特效(创建到单位) [R]  
 * 新建特效 ${Model File} 并绑定到 ${单位} 的 ${Attachment Point} 附加点上
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect;
declare function DestroyEffect(whichEffect: effect): void;
declare function AddSpellEffect(abilityString: string, t: effecttype, x: number, y: number): effect;
declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect;

/**
 * 新建特效(指定技能，创建到坐标) [R]  
 * ${技能} 的 ${EffectType} , 创建到坐标(${X},${Y})
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpellEffectById(abilityId: number, t: effecttype, x: number, y: number): effect;

/**
 * 新建特效(指定技能，创建到点) [R]  
 * ${技能} 的 ${EffectType} , 创建到 ${指定点}
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpellEffectByIdLoc(abilityId: number, t: effecttype, where: location): effect;
declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * 新建特效(指定技能，创建到单位) [R]  
 * ${技能} 的 ${EffectType} , 绑定到 ${单位} 的 ${String} 附加点
 *
 * @remark
 * 会创建特效.
 *
 * @TC_NOTHING
 */
declare function AddSpellEffectTargetById(abilityId: number, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * 新建闪电效果 [R]  
 * 新建闪电效果: ${闪电效果} (${Boolean}检查可见性) 起始点:(${X},${Y}) 终结点:(${X},${Y})
 *
 * @remark
 * 会创建闪电效果. 允许检查可见性则在起始点和终结点都不可见时将不创建闪电效果.
 *
 * @TC_LIGHTNING
 */
declare function AddLightning(codeName: string, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): lightning;

/**
 * 新建闪电效果(指定Z轴) [R]  
 * 新建闪电效果: ${闪电效果} (${Boolean}检查可见性) 起始点:(${X},${Y},${Z}) 终结点:(${X},${Y},${Z})
 *
 * @remark
 * 会创建闪电效果. 允许检查可见性则在起始点和终结点都不可见时将不创建闪电效果.
 *
 * @TC_LIGHTNING
 */
declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): lightning;
declare function DestroyLightning(whichBolt: lightning): boolean;
declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, x2: number, y2: number): boolean;

/**
 * 移动闪电效果(指定坐标) [R]  
 * 移动 ${Lightning} 到新位置,(${Boolean} 检查可见性) 新起始点: (${X},${Y},${Z}) 新终结点: (${X},${Y},${Z})
 *
 * @remark
 * 可指定Z坐标. 允许检查可见性则在指定起始点和终结点都不可见时将不移动闪电效果.
 *
 * @TC_LIGHTNING
 */
declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
declare function GetLightningColorA(whichBolt: lightning): number;
declare function GetLightningColorR(whichBolt: lightning): number;
declare function GetLightningColorG(whichBolt: lightning): number;
declare function GetLightningColorB(whichBolt: lightning): number;
declare function SetLightningColor(whichBolt: lightning, r: number, g: number, b: number, a: number): boolean;
declare function GetAbilityEffect(abilityString: string, t: effecttype, index: number): string;
declare function GetAbilityEffectById(abilityId: number, t: effecttype, index: number): string;
declare function GetAbilitySound(abilityString: string, t: soundtype): string;
declare function GetAbilitySoundById(abilityId: number, t: soundtype): string;

/**
 * 地形悬崖高度(指定坐标) [R]  
 * 坐标(${X},${Y})处的地形悬崖高度
 *
 * @remark
 * 悬崖高度:深水区为0, 浅水区为1, 平原为2, 之后每层+1.
 *
 * @TC_ENVIRONMENT
 */
declare function GetTerrainCliffLevel(x: number, y: number): number;

/**
 * 设置水颜色 [R]  
 * 设置水颜色为:(${Red},${Green},${Blue}), 透明值为: ${Transparency}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). 透明值0为不可见. 颜色值和透明道值取值范围为0-255.
 *
 * @TC_ENVIRONMENT
 */
declare function SetWaterBaseColor(red: number, green: number, blue: number, alpha: number): void;

/**
 * 开启/关闭 水面变形  
 * ${On/Off} 水面变形
 *
 * @remark
 * 开启时当发生地形变化时水面高度也会随着变化. 对永久变形无效.
 *
 * @TC_ENVIRONMENT
 */
declare function SetWaterDeforms(val: boolean): void;

/**
 * 指定坐标地形 [R]  
 * 坐标(${X},${Y})处的地形
 *
 * @TC_ENVIRONMENT
 */
declare function GetTerrainType(x: number, y: number): number;

/**
 * 地形样式(指定坐标) [R]  
 * 坐标(${X},${Y})处的地形样式
 *
 * @TC_ENVIRONMENT
 */
declare function GetTerrainVariance(x: number, y: number): number;

/**
 * 改变地形类型(指定坐标) [R]  
 * 改变(${X},${Y})处的地形为 ${Terrain Type} ,使用样式: ${Variation} 范围: ${Area} 形状: ${Shape}
 *
 * @remark
 * 地形样式-1表示随机样式. 范围即地形编辑器中的刷子大小.1表示128x128范围
 *
 * @TC_ENVIRONMENT
 */
declare function SetTerrainType(x: number, y: number, terrainType: number, variation: number, area: number, shape: number): void;

/**
 * 地形通行状态关闭(指定坐标) [R]  
 * 坐标(${X},${Y})处的 ${Pathing Type} 通行状态为关闭
 *
 * @remark
 * 指定类型单位不能通行即通行状态为关闭. 如该点不能造建筑就是'建造'通行状态为关闭. 可使用'环境 - 设置地形通行状态'来改变通行状态.
 *
 * @TC_ENVIRONMENT
 */
declare function IsTerrainPathable(x: number, y: number, t: pathingtype): boolean;

/**
 * 设置地形通行状态(指定坐标) [R]  
 * 设置(${X},${Y})处单元点的 ${Pathing} 地形通行状态为: ${On/Off}
 *
 * @remark
 * 例:设置'建造'通行状态为开,则该点可以建造建筑. 一个单元点范围为32x32.
 *
 * @TC_ENVIRONMENT
 */
declare function SetTerrainPathable(x: number, y: number, t: pathingtype, flag: boolean): void;

/**
 * 新建图像 [R]  
 * 新建图像: ${Image} 大小:(${X},${Y},${Z}) 创建点:(${X},${Y},${Z}) 原点坐标:(${X},${Y},${Z}) 图像类型: ${Type}
 *
 * @remark
 * 使用'图像 - 设置永久渲染状态'动作才能显示图像. 大小、创建点和原点格式为(X,Y,Z). 创建点作为图像的左下角位置. 会创建图像.
 *
 * @TC_NOTHING
 */
declare function CreateImage(file: string, sizeX: number, sizeY: number, sizeZ: number, posX: number, posY: number, posZ: number, originX: number, originY: number, originZ: number, imageType: number): image;

/**
 * 删除  
 * 删除 ${图像}
 *
 * @TC_IMAGE
 */
declare function DestroyImage(whichImage: image): void;

/**
 * 显示/隐藏 [R]  
 * 设置 ${Image} ${Show/Hide}
 *
 * @TC_IMAGE
 */
declare function ShowImage(whichImage: image, flag: boolean): void;

/**
 * 设置图像高度  
 * 设置 ${Image} ${Enable/Disable} Z轴显示,并设置高度为 ${Height}
 *
 * @remark
 * 实际显示高度为图像高度+Z轴偏移. 只有允许Z轴显示时才有效.
 *
 * @TC_IMAGE
 */
declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: number): void;

/**
 * 改变图像位置(指定坐标) [R]  
 * 改变 ${Image} 的位置为(${X},${Y}),Z轴偏移为 ${Z}
 *
 * @remark
 * 指图像的左下角位置.
 *
 * @TC_IMAGE
 */
declare function SetImagePosition(whichImage: image, x: number, y: number, z: number): void;

/**
 * 改变图像颜色 [R]  
 * 设置 ${Image} 的颜色值为(${Red},${Green},${Blue}) Alpha值为 ${Alpha}
 *
 * @remark
 * 颜色格式为(红,绿,蓝). Alpha值为0是不可见的. 颜色值和Alpha值取值范围0-255.
 *
 * @TC_IMAGE
 */
declare function SetImageColor(whichImage: image, red: number, green: number, blue: number, alpha: number): void;

/**
 * 设置图像渲染状态  
 * 设置 ${Image} : ${Enable/Disable} 显示状态
 *
 * @remark
 * 未发现有任何作用.
 *
 * @TC_IMAGE
 */
declare function SetImageRender(whichImage: image, flag: boolean): void;

/**
 * 设置图像永久渲染状态  
 * 设置 ${Image} : ${Enable/Disable} 永久显示状态
 *
 * @remark
 * 要显示图像则必须开启该项.
 *
 * @TC_IMAGE
 */
declare function SetImageRenderAlways(whichImage: image, flag: boolean): void;

/**
 * 图像水面显示状态  
 * 设置 ${Image} : ${Enable/Disable} 水面显示, ${Enable/Disable} 水的Alpha通道
 *
 * @remark
 * 前者设置图像在水面或是水底显示. 后者设置图像是否受水的Alpha通道影响. 
 *
 * @TC_IMAGE
 */
declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): void;

/**
 * 改变图像类型  
 * 改变 ${Image} 类型为 ${Type}
 *
 * @TC_IMAGE
 */
declare function SetImageType(whichImage: image, imageType: number): void;

/**
 * 新建地面纹理变化 [R]  
 * 新建的地面纹理变化在点(${X},${Y}),使用图像: ${Type} 颜色值为(${Red},${Green},${Blue}) Alpha值为${Transparency} (${Enable/Disable} 暂停状态, ${Enble/Disable} 跳过出生动画)
 *
 * @remark
 * 颜色值和Alpha值取值范围0-255. 使用'地面纹理变化 - 设置永久渲染状态' 来显示创建的纹理变化. 暂停状态表示动画播放完毕后是否继续保留该纹理变化. 会创建纹理变化.
 *
 * @TC_NOTHING
 */
declare function CreateUbersplat(x: number, y: number, name: string, red: number, green: number, blue: number, alpha: number, forcePaused: boolean, noBirthTime: boolean): ubersplat;

/**
 * 删除地面纹理变化  
 * 删除 ${Ubersplat}
 *
 * @TC_UBERSPLAT
 */
declare function DestroyUbersplat(whichSplat: ubersplat): void;

/**
 * 重置地面纹理变化  
 * 重置 ${Ubersplat}
 *
 * @TC_UBERSPLAT
 */
declare function ResetUbersplat(whichSplat: ubersplat): void;

/**
 * 结束地面纹理变化  
 * 结束 ${Ubersplat}
 *
 * @remark
 * 在动画播放完毕时自动清除该地面纹理变化.
 *
 * @TC_UBERSPLAT
 */
declare function FinishUbersplat(whichSplat: ubersplat): void;

/**
 * 显示/隐藏 地面纹理变化[R]  
 * 设置 ${Ubersplat} 状态为 ${Show/Hide}
 *
 * @TC_UBERSPLAT
 */
declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): void;

/**
 * 设置渲染状态  
 * 设置 ${Ubersplat} : ${Enable/Disable} 渲染状态
 *
 * @remark
 * 未发现有任何作用.
 *
 * @TC_UBERSPLAT
 */
declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): void;

/**
 * 设置永久渲染状态  
 * 设置 ${Ubersplat} : ${Enable/Disable} 永久渲染状态
 *
 * @remark
 * 要显示地面纹理变化则必须开启该项.
 *
 * @TC_UBERSPLAT
 */
declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): void;

/**
 * 创建/删除荒芜地表(圆范围)(指定坐标) [R]  
 * 为 ${Player} 在圆心为(${X},${Y}),半径为 ${R} 的圆范围内 ${Create/Remove} 一块荒芜地表
 *
 * @TC_ENVIRONMENT
 */
declare function SetBlight(whichPlayer: player, x: number, y: number, radius: number, addBlight: boolean): void;

/**
 * 创建/删除荒芜地表(矩形区域) [R]  
 * 为 ${Player} 在 ${Region} ${Create/Remove} 一块荒芜地表
 *
 * @TC_ENVIRONMENT
 */
declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): void;
declare function SetBlightPoint(whichPlayer: player, x: number, y: number, addBlight: boolean): void;
declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: number, addBlight: boolean): void;

/**
 * 新建不死族金矿 [R]  
 * 新建 ${玩家} 的不死族金矿在(${X},${Y}),面向角度:${Face} 度
 *
 * @TC_NOTHING
 */
declare function CreateBlightedGoldmine(id: player, x: number, y: number, face: number): unit;

/**
 * 坐标点被荒芜地表覆盖 [R]  
 * 坐标点(${X},${Y})被荒芜地表覆盖
 *
 * @TC_ENVIRONMENT
 */
declare function IsPointBlighted(x: number, y: number): boolean;

/**
 * 播放圆范围内地形装饰物动画 [R]  
 * 选取圆心为(${X},${Y}),半径为 ${半径} 的圆范围内的 ${装饰物类型}(选取方式:${选取方式}), 做 ${Animation Name} 动作(${允许/禁止} 随机播放)
 *
 * @remark
 * 特殊动画名: 'show', 'hide', 'soundon', 'soundoff'. 随机播放:比如某装饰物有好几个'stand'动作,则允许该项时会随机抽取某个动作播放,而禁止该项时只播放首个动作.
 *
 * @TC_ANIMATION
 */
declare function SetDoodadAnimation(x: number, y: number, radius: number, doodadID: number, nearestOnly: boolean, animName: string, animRandom: boolean): void;

/**
 * 播放矩形区域内地形装饰物动画 [R]  
 * 播放 ${Rect} 内所有 ${装饰物类型} 的 ${Animation Name} 动作(${允许/禁止} 随机播放)
 *
 * @remark
 * 特殊动画名: 'show', 'hide', 'soundon', 'soundoff'. 随机播放:比如某装饰物有好几个'stand'动作,则允许该项时会随机抽取某个动作播放,而禁止该项时只播放首个动作.
 *
 * @TC_ANIMATION
 */
declare function SetDoodadAnimationRect(r: rect, doodadID: number, animName: string, animRandom: boolean): void;

/**
 * 启用对战AI  
 * 为 ${Player} 启用对战AI: ${Script}
 *
 * @remark
 * AI只能对电脑玩家使用,当运行该动作后,与之配匹的电脑玩家会强制执行该AI脚本.
 *
 * @TC_AI
 */
declare function StartMeleeAI(num: player, script: string): void;

/**
 * 启用战役AI  
 * 为 ${Player} 启用战役AI: ${Script}
 *
 * @remark
 * AI只能对电脑玩家使用,当运行该动作后,与之配匹的电脑玩家会强制执行该AI脚本.
 *
 * @TC_AI
 */
declare function StartCampaignAI(num: player, script: string): void;

/**
 * 发送AI命令  
 * 对 ${Player} 发送AI命令:(${命令}, ${数据})
 *
 * @remark
 * 发送的AI命令将被AI脚本所使用.
 *
 * @TC_AI
 */
declare function CommandAI(num: player, command: number, data: number): void;

/**
 * 暂停/恢复 AI脚本运行 [R]  
 * 设定 ${Player} ${暂停/恢复} 当前AI脚本的运行
 *
 * @remark
 * 事实上该函数是有问题的,可以这么理解:设玩家当前AI脚本的运行状态R为0,暂停1次则R+1,恢复1次则R-1,仅当R
 *
 * @TC_AI
 */
declare function PauseCompAI(p: player, pause: boolean): void;

/**
 * 玩家的AI难度  
 * ${Player} 的对战AI难度
 *
 * @remark
 * 对非AI玩家返回普通难度.
 *
 * @TC_NOTHING
 */
declare function GetAIDifficulty(num: player): aidifficulty;

/**
 * 忽视指定单位的警戒点  
 * 忽视 ${单位} 的警戒点
 *
 * @remark
 * 单位将不会自动返回原警戒点. 一个很有用的功能就是刷怪进攻时忽视单位警戒范围的话,怪就不会想家了.直接设置不生效，可能需要延迟0秒设置才生效
 *
 * @TC_AI
 */
declare function RemoveGuardPosition(hUnit: unit): void;

/**
 * 恢复指定单位的警戒点  
 * 恢复 ${单位} 的警戒点
 *
 * @remark
 * 这个动作通过 AI 来恢复特定单位的警戒点.
 *
 * @TC_AI
 */
declare function RecycleGuardPosition(hUnit: unit): void;

/**
 * 忽视所有单位的警戒点  
 * 忽视 ${Player} 的所有单位的警戒点
 *
 * @remark
 * 单位将不会自动返回原警戒点. 一个很有用的功能就是刷怪进攻时忽视单位警戒范围的话,怪就不会想家了.
 *
 * @TC_AI
 */
declare function RemoveAllGuardPositions(num: player): void;

/**
 * 输入作弊码 [R]  
 * 输入作弊码: ${String}
 *
 * @remark
 * 作弊码只在单机有效.
 *
 * @TC_GAME
 */
declare function Cheat(cheatStr: string): void;

/**
 * 无法胜利 [R]  
 * 玩家开启作弊模式: 无法胜利
 *
 * @remark
 * 单机作弊码开启的模式.
 *
 * @TC_GAME
 */
declare function IsNoVictoryCheat(): boolean;

/**
 * 无法失败 [R]  
 * 玩家开启作弊模式: 无法失败
 *
 * @remark
 * 单机作弊码开启的模式.
 *
 * @TC_GAME
 */
declare function IsNoDefeatCheat(): boolean;

/**
 * 预载文件  
 * 预载 ${文件}
 *
 * @remark
 * 可以事先载入文件并调入到游戏内存,以加快游戏的速度.
 *
 * @TC_GAME
 */
declare function Preload(filename: string): void;

/**
 * 开始预载  
 * 开始预载, 超时设置 ${Time} 秒
 *
 * @remark
 * 将文件调入到游戏内存中.
 *
 * @TC_GAME
 */
declare function PreloadEnd(timeout: number): void;
declare function PreloadStart(): void;
declare function PreloadRefresh(): void;
declare function PreloadEndEx(): void;
declare function PreloadGenClear(): void;
declare function PreloadGenStart(): void;
declare function PreloadGenEnd(filename: string): void;

/**
 * 批量预载  
 * 预载所有在 ${文件} 中列出的文件
 *
 * @TC_GAME
 */
declare function Preloader(filename: string): void;

declare const FALSE: boolean;
declare const TRUE: boolean;
declare const JASS_MAX_ARRAY_SIZE: number;
declare const PLAYER_NEUTRAL_PASSIVE: number;
declare const PLAYER_NEUTRAL_AGGRESSIVE: number;
declare const PLAYER_COLOR_RED: playercolor;
declare const PLAYER_COLOR_BLUE: playercolor;
declare const PLAYER_COLOR_CYAN: playercolor;
declare const PLAYER_COLOR_PURPLE: playercolor;
declare const PLAYER_COLOR_YELLOW: playercolor;
declare const PLAYER_COLOR_ORANGE: playercolor;
declare const PLAYER_COLOR_GREEN: playercolor;
declare const PLAYER_COLOR_PINK: playercolor;
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor;
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor;
declare const PLAYER_COLOR_AQUA: playercolor;
declare const PLAYER_COLOR_BROWN: playercolor;
declare const RACE_HUMAN: race;
declare const RACE_ORC: race;
declare const RACE_UNDEAD: race;
declare const RACE_NIGHTELF: race;
declare const RACE_DEMON: race;
declare const RACE_OTHER: race;
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult;
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult;
declare const PLAYER_GAME_RESULT_TIE: playergameresult;
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult;
declare const ALLIANCE_PASSIVE: alliancetype;
declare const ALLIANCE_HELP_REQUEST: alliancetype;
declare const ALLIANCE_HELP_RESPONSE: alliancetype;
declare const ALLIANCE_SHARED_XP: alliancetype;
declare const ALLIANCE_SHARED_SPELLS: alliancetype;
declare const ALLIANCE_SHARED_VISION: alliancetype;
declare const ALLIANCE_SHARED_CONTROL: alliancetype;
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype;
declare const ALLIANCE_RESCUABLE: alliancetype;
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype;
declare const VERSION_REIGN_OF_CHAOS: version;
declare const VERSION_FROZEN_THRONE: version;
declare const ATTACK_TYPE_NORMAL: attacktype;
declare const ATTACK_TYPE_MELEE: attacktype;
declare const ATTACK_TYPE_PIERCE: attacktype;
declare const ATTACK_TYPE_SIEGE: attacktype;
declare const ATTACK_TYPE_MAGIC: attacktype;
declare const ATTACK_TYPE_CHAOS: attacktype;
declare const ATTACK_TYPE_HERO: attacktype;
declare const DAMAGE_TYPE_UNKNOWN: damagetype;
declare const DAMAGE_TYPE_NORMAL: damagetype;
declare const DAMAGE_TYPE_ENHANCED: damagetype;
declare const DAMAGE_TYPE_FIRE: damagetype;
declare const DAMAGE_TYPE_COLD: damagetype;
declare const DAMAGE_TYPE_LIGHTNING: damagetype;
declare const DAMAGE_TYPE_POISON: damagetype;
declare const DAMAGE_TYPE_DISEASE: damagetype;
declare const DAMAGE_TYPE_DIVINE: damagetype;
declare const DAMAGE_TYPE_MAGIC: damagetype;
declare const DAMAGE_TYPE_SONIC: damagetype;
declare const DAMAGE_TYPE_ACID: damagetype;
declare const DAMAGE_TYPE_FORCE: damagetype;
declare const DAMAGE_TYPE_DEATH: damagetype;
declare const DAMAGE_TYPE_MIND: damagetype;
declare const DAMAGE_TYPE_PLANT: damagetype;
declare const DAMAGE_TYPE_DEFENSIVE: damagetype;
declare const DAMAGE_TYPE_DEMOLITION: damagetype;
declare const DAMAGE_TYPE_SLOW_POISON: damagetype;
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype;
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype;
declare const DAMAGE_TYPE_UNIVERSAL: damagetype;
declare const WEAPON_TYPE_WHOKNOWS: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype;
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype;
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype;
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype;
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype;
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype;
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype;
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype;
declare const PATHING_TYPE_ANY: pathingtype;
declare const PATHING_TYPE_WALKABILITY: pathingtype;
declare const PATHING_TYPE_FLYABILITY: pathingtype;
declare const PATHING_TYPE_BUILDABILITY: pathingtype;
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype;
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype;
declare const PATHING_TYPE_FLOATABILITY: pathingtype;
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype;
declare const RACE_PREF_HUMAN: racepreference;
declare const RACE_PREF_ORC: racepreference;
declare const RACE_PREF_NIGHTELF: racepreference;
declare const RACE_PREF_UNDEAD: racepreference;
declare const RACE_PREF_DEMON: racepreference;
declare const RACE_PREF_RANDOM: racepreference;
declare const RACE_PREF_USER_SELECTABLE: racepreference;
declare const MAP_CONTROL_USER: mapcontrol;
declare const MAP_CONTROL_COMPUTER: mapcontrol;
declare const MAP_CONTROL_RESCUABLE: mapcontrol;
declare const MAP_CONTROL_NEUTRAL: mapcontrol;
declare const MAP_CONTROL_CREEP: mapcontrol;
declare const MAP_CONTROL_NONE: mapcontrol;
declare const GAME_TYPE_MELEE: gametype;
declare const GAME_TYPE_FFA: gametype;
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype;
declare const GAME_TYPE_BLIZ: gametype;
declare const GAME_TYPE_ONE_ON_ONE: gametype;
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype;
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype;
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype;
declare const MAP_FOG_HIDE_TERRAIN: mapflag;
declare const MAP_FOG_MAP_EXPLORED: mapflag;
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag;
declare const MAP_USE_HANDICAPS: mapflag;
declare const MAP_OBSERVERS: mapflag;
declare const MAP_OBSERVERS_ON_DEATH: mapflag;
declare const MAP_FIXED_COLORS: mapflag;
declare const MAP_LOCK_RESOURCE_TRADING: mapflag;
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag;
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag;
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag;
declare const MAP_CHEATS: mapflag;
declare const MAP_CHEATS_HIDDEN: mapflag;
declare const MAP_LOCK_SPEED: mapflag;
declare const MAP_LOCK_RANDOM_SEED: mapflag;
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag;
declare const MAP_RANDOM_HERO: mapflag;
declare const MAP_RANDOM_RACES: mapflag;
declare const MAP_RELOADED: mapflag;
declare const MAP_PLACEMENT_RANDOM: placement;
declare const MAP_PLACEMENT_FIXED: placement;
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement;
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement;
declare const MAP_LOC_PRIO_LOW: startlocprio;
declare const MAP_LOC_PRIO_HIGH: startlocprio;
declare const MAP_LOC_PRIO_NOT: startlocprio;
declare const MAP_DENSITY_NONE: mapdensity;
declare const MAP_DENSITY_LIGHT: mapdensity;
declare const MAP_DENSITY_MEDIUM: mapdensity;
declare const MAP_DENSITY_HEAVY: mapdensity;
declare const MAP_DIFFICULTY_EASY: gamedifficulty;
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty;
declare const MAP_DIFFICULTY_HARD: gamedifficulty;
declare const MAP_DIFFICULTY_INSANE: gamedifficulty;
declare const MAP_SPEED_SLOWEST: gamespeed;
declare const MAP_SPEED_SLOW: gamespeed;
declare const MAP_SPEED_NORMAL: gamespeed;
declare const MAP_SPEED_FAST: gamespeed;
declare const MAP_SPEED_FASTEST: gamespeed;
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate;
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate;
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate;
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup;
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup;
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup;
declare const SOUND_VOLUMEGROUP_UI: volumegroup;
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup;
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup;
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup;
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate;
declare const GAME_STATE_DISCONNECTED: igamestate;
declare const GAME_STATE_TIME_OF_DAY: fgamestate;
declare const PLAYER_STATE_GAME_RESULT: playerstate;
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate;
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate;
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate;
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate;
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate;
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate;
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate;
declare const PLAYER_STATE_PLACED: playerstate;
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate;
declare const PLAYER_STATE_OBSERVER: playerstate;
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate;
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate;
declare const PLAYER_STATE_GOLD_GATHERED: playerstate;
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate;
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate;
declare const UNIT_STATE_LIFE: unitstate;
declare const UNIT_STATE_MAX_LIFE: unitstate;
declare const UNIT_STATE_MANA: unitstate;
declare const UNIT_STATE_MAX_MANA: unitstate;
declare const AI_DIFFICULTY_NEWBIE: aidifficulty;
declare const AI_DIFFICULTY_NORMAL: aidifficulty;
declare const AI_DIFFICULTY_INSANE: aidifficulty;
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore;
declare const PLAYER_SCORE_UNITS_KILLED: playerscore;
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore;
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore;
declare const PLAYER_SCORE_TECH_PERCENT: playerscore;
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore;
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore;
declare const PLAYER_SCORE_HEROES_KILLED: playerscore;
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore;
declare const PLAYER_SCORE_MERCS_HIRED: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore;
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore;
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore;
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore;
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore;
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore;
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore;
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore;
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore;
declare const PLAYER_SCORE_HERO_TOTAL: playerscore;
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore;
declare const PLAYER_SCORE_TOTAL: playerscore;
declare const EVENT_GAME_VICTORY: gameevent;
declare const EVENT_GAME_END_LEVEL: gameevent;
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent;
declare const EVENT_GAME_STATE_LIMIT: gameevent;
declare const EVENT_GAME_TIMER_EXPIRED: gameevent;
declare const EVENT_GAME_ENTER_REGION: gameevent;
declare const EVENT_GAME_LEAVE_REGION: gameevent;
declare const EVENT_GAME_TRACKABLE_HIT: gameevent;
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent;
declare const EVENT_GAME_SHOW_SKILL: gameevent;
declare const EVENT_GAME_BUILD_SUBMENU: gameevent;
declare const EVENT_PLAYER_STATE_LIMIT: playerevent;
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent;
declare const EVENT_PLAYER_DEFEAT: playerevent;
declare const EVENT_PLAYER_VICTORY: playerevent;
declare const EVENT_PLAYER_LEAVE: playerevent;
declare const EVENT_PLAYER_CHAT: playerevent;
declare const EVENT_PLAYER_END_CINEMATIC: playerevent;
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent;
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent;
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent;
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent;
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent;
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent;
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent;
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent;
declare const EVENT_UNIT_DAMAGED: unitevent;
declare const EVENT_UNIT_DEATH: unitevent;
declare const EVENT_UNIT_DECAY: unitevent;
declare const EVENT_UNIT_DETECTED: unitevent;
declare const EVENT_UNIT_HIDDEN: unitevent;
declare const EVENT_UNIT_SELECTED: unitevent;
declare const EVENT_UNIT_DESELECTED: unitevent;
declare const EVENT_UNIT_STATE_LIMIT: unitevent;
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent;
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent;
declare const EVENT_UNIT_ATTACKED: unitevent;
declare const EVENT_UNIT_RESCUED: unitevent;
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent;
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent;
declare const EVENT_UNIT_UPGRADE_START: unitevent;
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent;
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent;
declare const EVENT_UNIT_TRAIN_START: unitevent;
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent;
declare const EVENT_UNIT_TRAIN_FINISH: unitevent;
declare const EVENT_UNIT_RESEARCH_START: unitevent;
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent;
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent;
declare const EVENT_UNIT_ISSUED_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent;
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent;
declare const EVENT_UNIT_HERO_LEVEL: unitevent;
declare const EVENT_UNIT_HERO_SKILL: unitevent;
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent;
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent;
declare const EVENT_UNIT_SUMMON: unitevent;
declare const EVENT_UNIT_DROP_ITEM: unitevent;
declare const EVENT_UNIT_PICKUP_ITEM: unitevent;
declare const EVENT_UNIT_USE_ITEM: unitevent;
declare const EVENT_UNIT_LOADED: unitevent;
declare const EVENT_WIDGET_DEATH: widgetevent;
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent;
declare const EVENT_DIALOG_CLICK: dialogevent;
declare const EVENT_GAME_LOADED: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent;
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent;
declare const EVENT_GAME_SAVE: gameevent;
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent;
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent;
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent;
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent;
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent;
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent;
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent;
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent;
declare const EVENT_UNIT_SELL: unitevent;
declare const EVENT_UNIT_CHANGE_OWNER: unitevent;
declare const EVENT_UNIT_SELL_ITEM: unitevent;
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent;
declare const EVENT_UNIT_SPELL_CAST: unitevent;
declare const EVENT_UNIT_SPELL_EFFECT: unitevent;
declare const EVENT_UNIT_SPELL_FINISH: unitevent;
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent;
declare const EVENT_UNIT_PAWN_ITEM: unitevent;
declare const LESS_THAN: limitop;
declare const LESS_THAN_OR_EQUAL: limitop;
declare const EQUAL: limitop;
declare const GREATER_THAN_OR_EQUAL: limitop;
declare const GREATER_THAN: limitop;
declare const NOT_EQUAL: limitop;
declare const UNIT_TYPE_HERO: unittype;
declare const UNIT_TYPE_DEAD: unittype;
declare const UNIT_TYPE_STRUCTURE: unittype;
declare const UNIT_TYPE_FLYING: unittype;
declare const UNIT_TYPE_GROUND: unittype;
declare const UNIT_TYPE_ATTACKS_FLYING: unittype;
declare const UNIT_TYPE_ATTACKS_GROUND: unittype;
declare const UNIT_TYPE_MELEE_ATTACKER: unittype;
declare const UNIT_TYPE_RANGED_ATTACKER: unittype;
declare const UNIT_TYPE_GIANT: unittype;
declare const UNIT_TYPE_SUMMONED: unittype;
declare const UNIT_TYPE_STUNNED: unittype;
declare const UNIT_TYPE_PLAGUED: unittype;
declare const UNIT_TYPE_SNARED: unittype;
declare const UNIT_TYPE_UNDEAD: unittype;
declare const UNIT_TYPE_MECHANICAL: unittype;
declare const UNIT_TYPE_PEON: unittype;
declare const UNIT_TYPE_SAPPER: unittype;
declare const UNIT_TYPE_TOWNHALL: unittype;
declare const UNIT_TYPE_ANCIENT: unittype;
declare const UNIT_TYPE_TAUREN: unittype;
declare const UNIT_TYPE_POISONED: unittype;
declare const UNIT_TYPE_POLYMORPHED: unittype;
declare const UNIT_TYPE_SLEEPING: unittype;
declare const UNIT_TYPE_RESISTANT: unittype;
declare const UNIT_TYPE_ETHEREAL: unittype;
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype;
declare const ITEM_TYPE_PERMANENT: itemtype;
declare const ITEM_TYPE_CHARGED: itemtype;
declare const ITEM_TYPE_POWERUP: itemtype;
declare const ITEM_TYPE_ARTIFACT: itemtype;
declare const ITEM_TYPE_PURCHASABLE: itemtype;
declare const ITEM_TYPE_CAMPAIGN: itemtype;
declare const ITEM_TYPE_MISCELLANEOUS: itemtype;
declare const ITEM_TYPE_UNKNOWN: itemtype;
declare const ITEM_TYPE_ANY: itemtype;
declare const ITEM_TYPE_TOME: itemtype;
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield;
declare const CAMERA_FIELD_FARZ: camerafield;
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield;
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield;
declare const CAMERA_FIELD_ROLL: camerafield;
declare const CAMERA_FIELD_ROTATION: camerafield;
declare const CAMERA_FIELD_ZOFFSET: camerafield;
declare const BLEND_MODE_NONE: blendmode;
declare const BLEND_MODE_DONT_CARE: blendmode;
declare const BLEND_MODE_KEYALPHA: blendmode;
declare const BLEND_MODE_BLEND: blendmode;
declare const BLEND_MODE_ADDITIVE: blendmode;
declare const BLEND_MODE_MODULATE: blendmode;
declare const BLEND_MODE_MODULATE_2X: blendmode;
declare const RARITY_FREQUENT: raritycontrol;
declare const RARITY_RARE: raritycontrol;
declare const TEXMAP_FLAG_NONE: texmapflags;
declare const TEXMAP_FLAG_WRAP_U: texmapflags;
declare const TEXMAP_FLAG_WRAP_V: texmapflags;
declare const TEXMAP_FLAG_WRAP_UV: texmapflags;
declare const FOG_OF_WAR_MASKED: fogstate;
declare const FOG_OF_WAR_FOGGED: fogstate;
declare const FOG_OF_WAR_VISIBLE: fogstate;
declare const CAMERA_MARGIN_LEFT: number;
declare const CAMERA_MARGIN_RIGHT: number;
declare const CAMERA_MARGIN_TOP: number;
declare const CAMERA_MARGIN_BOTTOM: number;
declare const EFFECT_TYPE_EFFECT: effecttype;
declare const EFFECT_TYPE_TARGET: effecttype;
declare const EFFECT_TYPE_CASTER: effecttype;
declare const EFFECT_TYPE_SPECIAL: effecttype;
declare const EFFECT_TYPE_AREA_EFFECT: effecttype;
declare const EFFECT_TYPE_MISSILE: effecttype;
declare const EFFECT_TYPE_LIGHTNING: effecttype;
declare const SOUND_TYPE_EFFECT: soundtype;
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype;
