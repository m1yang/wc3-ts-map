/** @noSelfInFile **/



/**
 * 玩家是否拥有地图商城道具  
 * 获取 ',$whichPlayer,' 是否拥有:',$key,' 对应的地图商城道具.
 *
 * @remark
 * 检测玩家背包中是否拥该道具且处于有效状态。已过期的时效性道具、剩余数量为0的数量型道具均视为无效；
 */
declare function DzAPI_Map_HasMallItem(whichPlayer: player, key: string): boolean;

/**
 * 玩家地图等级  
 * 获取 ',$player,' 的地图等级
 *
 * @remark
 * 玩家地图等级【RPG大厅限定】
 */
declare function DzAPI_Map_GetMapLevel(whichPlayer: player): number;
declare function RequestExtraIntegerData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): number;
declare function RequestExtraBooleanData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): boolean;
declare function RequestExtraStringData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): string;
declare function RequestExtraRealData(dataType: number, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: number, param5: number, param6: number): number;



/**
 * 保存服务器存档  
 *  ',$玩家,'保存存档[',$存档名称,'][',$存档内容,']最大长度64位
 *
 * @remark
 * 保存服务器存档
 */
declare function DzAPI_Map_SaveServerValue(whichPlayer: player, key: string, value: string): boolean;

/**
 * 读取服务器存储的数据  
 * 获取 ',$whichPlayer,' ',$key,' 里的数据
 */
declare function DzAPI_Map_GetServerValue(whichPlayer: player, key: string): string;

/**
 * 本局游戏的开始时间  
 * 本局游戏的开始时间
 *
 * @remark
 * 获取本局游戏开始时的服务器时间。
 */
declare function DzAPI_Map_GetGameStartTime(): number;

/**
 * 本局游戏是否天梯排位赛  
 * 判断地图是否在RPG天梯
 *
 * @remark
 * 本局游戏是否通过RPG天梯启动，如果地图配置了多个天梯模式，可通过获取本局游戏的地图模式接口获取具体选定的是哪一个天梯模式。
 */
declare function DzAPI_Map_IsRPGLadder(): boolean;

/**
 * 本局游戏的地图模式  
 * 本局游戏的地图模式
 *
 * @remark
 * 获取本局游戏所选择地图模式，地图模式均由作者在开发者平台进行配置（包括天梯排位赛模式、快速匹配模式、建房间时房主所选定的地图模式）。
 */
declare function DzAPI_Map_GetMatchType(): number;

/**
 * 上报房间内显示的数据  
 * 设置 ',$whichPlayer,' 房间的 ',$key,' 项目显示 ',$value
 *
 * @remark
 * 作者可以将游戏内的关键数值或结果上报给平台，用于在平台游戏房间内展示以方便玩家相互快速了解实力，数据上报后需在开发者平台进行配置后才能展示出来。比如：比如获得MVP次数、最高通关难度等。
 */
declare function DzAPI_Map_Stat_SetStat(whichPlayer: player, key: string, value: string): void;

/**
 * 天梯提交字符串数据  
 * 提交 ',$whichPlayer,' 天梯项目:',$key,' 的值为:',$value
 */
declare function DzAPI_Map_Ladder_SetStat(whichPlayer: player, key: string, value: string): void;
declare function DzAPI_Map_Ladder_SetPlayerStat(whichPlayer: player, key: string, value: string): void;
declare function DzAPI_Map_GetServerValueErrorCode(whichPlayer: player): number;

/**
 * 玩家天梯等级  
 * 获取 ',$player,' 天梯等级
 *
 * @remark
 * 获取玩家在当前游戏局所采用的天梯模式下的天梯等级，仅天梯模式下的游戏局有效。
 */
declare function DzAPI_Map_GetLadderLevel(whichPlayer: player): number;

/**
 * 获取玩家身份类型[new]  
 *  ',$whichPlayer,' 的身份是 ',$key,' 
 */
declare function KKApiPlayerIdentityType(whichPlayer: player, id: number): boolean;

/**
 * 玩家是否平台认证的职业选手  
 * 判断 ',$player,' 是否是职业选手
 *
 * @remark
 * 判断玩家是否平台认证的职业选手（红V）。
 */
declare function DzAPI_Map_IsRedVIP(whichPlayer: player): boolean;

/**
 * 玩家是否平台认证的主播  
 * 判断 ',$player,' 平台认证的主播（蓝V）
 *
 * @remark
 * 判断指定玩家是否平台认证的主播（蓝V）。
 */
declare function DzAPI_Map_IsBlueVIP(whichPlayer: player): boolean;

/**
 * 玩家天梯排名  
 * 获取 ',$player,' 天梯排名
 *
 * @remark
 * 排名>1000的获取值为0，获取玩家在当前游戏局所采用的天梯模式下的天梯排名，仅天梯模式下的游戏局有效。
 */
declare function DzAPI_Map_GetLadderRank(whichPlayer: player): number;

/**
 * 玩家在地图等级排行榜上的排名  
 * 获取 ',$player,' 在地图等级排行榜上的排名
 *
 * @remark
 * 排名>100的获取值为0
 */
declare function DzAPI_Map_GetMapLevelRank(whichPlayer: player): number;

/**
 * 玩家在公会的职责【废弃】  
 * 获取 ',$whichPlayer,' 公会职责
 *
 * @remark
 * 获取玩家公会职责 Member
 */
declare function DzAPI_Map_GetGuildRole(whichPlayer: player): number;

/**
 * 本局游戏是否处于RPG游戏大厅  
 * 本局游戏是否处于RPG游戏大厅
 *
 * @remark
 * 获取当前游戏局是否通过RPG游戏大厅启动。
 */
declare function DzAPI_Map_IsRPGLobby(): boolean;
declare function DzAPI_Map_MissionComplete(whichPlayer: player, key: string, value: string): void;
declare function DzAPI_Map_GetActivityData(): string;

/**
 * 地图配置参数  
 * 获取:',$key,' 地图配置参数
 *
 * @remark
 * 获取作者在开发者平台配置的地图参数（原只读类型的地图全局存档），作者可以通过此接口实现节日活动开关、口令等功能。
 */
declare function DzAPI_Map_GetMapConfig(key: string): string;

/**
 * 保存服务器存档组  
 * 在服务器存档组:存储 ',$whichPlayer,' 数据,名称：',$key,',值:',$value
 *
 * @remark
 * 将变量保存到当前作者账号下的服务器存档组中。
 */
declare function DzAPI_Map_SavePublicArchive(whichPlayer: player, key: string, value: string): boolean;

/**
 * 读取服务器存档组  
 * 在服务器存档组读取 ',$whichPlayer,',名称:',$key,' 里的数据
 *
 * @remark
 * 读取当前作者账号下的服务器存档组变量数据。。
 */
declare function DzAPI_Map_GetPublicArchive(whichPlayer: player, key: string): string;

/**
 * 使用地图商城道具（局数型）  
 * 设置该局消耗 ',$whichPlayer,' 地图商城道具：',$key,' 一个
 *
 * @remark
 * 扣减玩家背包中的局数型道具1个，多次对同一个道具调用也只扣减1次。需先通过获取道具剩余数量确保玩家背包中的道具剩余数量大于0。
 */
declare function DzAPI_Map_UseConsumablesItem(whichPlayer: player, key: string): void;

/**
 * 触发BOSS击杀  
 * 设置 ',$whichPlayer,' 触发击杀 ',$bosskey
 *
 * @remark
 * 告知平台服务器游戏内发生了BOSS击杀，请求平台服务器计算BOSS掉落内容。触发之后用[DzAPI_Map_GetServerArchiveEquip]和[DzAPI_Map_GetServerArchiveDrop]读取
 */
declare function DzAPI_Map_OrpgTrigger(whichPlayer: player, key: string): void;

/**
 * BOSS击杀后的掉落内容  
 * 获取 ',$whichPlayer,' 击杀boss ',$bosskey,' 掉落的装备
 *
 * @remark
 * 游戏内调用触发BOSS击杀后，获取本次掉落内容。
 */
declare function DzAPI_Map_GetServerArchiveDrop(whichPlayer: player, key: string): string;

/**
 * BOSS击杀后的掉落数量  
 * 读取 ',$whichPlayer,' BOSS击杀后的 ',$itemkey,' 掉落的数量
 *
 * @remark
 * 游戏内调用[触发BOSS击杀]后，获取本次掉落数量。
 */
declare function DzAPI_Map_GetServerArchiveEquip(whichPlayer: player, key: string): number;
declare function DzAPI_Map_GetPlatformVIP(whichPlayer: player): number;

/**
 * 玩家是否平台尊享会员  
 * 玩家 ${player} 是平台尊享会员
 *
 * @remark
 * 判断玩家是否平台的尊享会员。
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_IsPlatformVIP(whichPlayer: player): boolean;

/**
 * 读取全局存档  
 * 读取全局存档 ',$key,' 里的数据
 *
 * @remark
 * 从服务器上读取的全局存档数据。
 */

/**
 * 读取全局存档  
 * 读取全局存档 名称 ${key}
 *
 * @remark
 * 只读的公共存档请使用另一个API读取
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_Global_GetStoreString(key: string): string;

/**
 * 保存全局存档  
 * 在全局存档 ',$key,',存储值:',$value
 *
 * @remark
 * 将变量数据存储到平台服务器上的全局存档中，保存时会受到开发者平台所配置的保存规则限制。保存成功后本局游戏及同一时间正在进行的其他游戏局内的所有玩家都会收到全局存档变化事件的事件广播。
 */

/**
 * 保存全局存档  
 * 保存全局存档 名称 ${key} 值 ${value}
 *
 * @remark
 * 保存时受开发者平台设定的规则限制
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_Global_StoreString(key: string, value: string): void;

/**
 * 全局存档变化事件  
 * 全局存档发生变化
 *
 * @remark
 * 本局游戏或其他游戏保存的全局存档都会触发这个事件，请使用[同步]分类下的获取同步数据来获得发生变化的全局存档KEY值
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_Global_ChangeMsg(trig: trigger): void;

/**
 * 读取服务器存档（区分大小写）  
 * 读取服务器玩家 ',$whichPlayer,',名称:',$key,' 里的数据
 *
 * @remark
 * 从服务器上读取变量数据，存档变量Key区分大小写，保存时会受到开发者平台所配置的防刷分规则限制。
 */

/**
 * 读取服务器存档（区分大小写）  
 * 获取服务器存储的数据（区分大小写） 玩家 ${player} 名称 ${key}
 *
 * @remark
 * 从服务器上读取变量数据，存档变量Key区分大小写，保存时会受到开发者平台所配置的防刷分规则限制。
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_ServerArchive(whichPlayer: player, key: string): string;

/**
 * 保存服务器存档（区分大小写）  
 * 保存服务器存档（区分大小写） 玩家 ${player} 名称 ${key} 值 ${value}
 *
 * @remark
 * 用将变量存储到服务器，存档变量Key区分大小写。
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_SaveServerArchive(whichPlayer: player, key: string, value: string): void;

/**
 * 本局游戏是否快速匹配  
 * 判断玩家是否是通过匹配模式进入游戏
 *
 * @remark
 * 本局游戏是否通过RPG快速匹配启动，如果地图配置了多个匹配模式，可通过[获取本局游戏的地图模式]接口获取具体选定的是哪一个匹配模式。
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_IsRPGQuickMatch(): boolean;

/**
 * 玩家地图商城道具剩余数量  
 * 获取 玩家 ${player} 地图商城道具 ${key} 的剩余库存次数
 *
 * @remark
 * 获取玩家地图商城道具剩余数量。仅对次数消耗型商品有效
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_GetMallItemCount(whichPlayer: player, key: string): number;

/**
 * 使用地图商城道具（数量型）  
 * 设置 ',$whichPlayer,' 使用地图商城道具 ',$key,' ',$数量,' 个
 *
 * @remark
 * 扣减玩家地图商城中的数量消耗型道具，可以多次调用。
 */
declare function DzAPI_Map_ConsumeMallItem(whichPlayer: player, key: string, count: number): boolean;

/**
 * 开启/关闭游戏内辅助功能  
 * 设置 ${player} 的 ${option} 号平台功能为 ${enable}
 *
 * @remark
 * 地图可以根据自身特点，强制打开或关闭视距调整、显示血条/蓝条、智能施法功能。1号功能为锁定镜头距离，2号功能为显示血、蓝条
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_EnablePlatformSettings(whichPlayer: player, option: number, enable: boolean): boolean;

/**
 * 玩家服务器存档是否读取成功  
 *  ',$whichPlayer,' 服务器存档是否读取成功.
 *
 * @remark
 * 如果返回false代表读取失败,反之成功,之后游戏里平台不会再发送“服务器保存失败”的信息，所以希望地图作者在游戏开始给玩家发下信息服务器存档是否正确读取。
 */
declare function GetPlayerServerValueSuccess(whichPlayer: player): boolean;

/**
 * 服务器存储整数（区分大小写）  
 * 服务器存储整数（区分大小写） 玩家 ${player} 名称 ${key} 值 ${value}
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I”，与普通存档共用KEY
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_StoreIntegerEX(whichPlayer: player, key: string, value: number): void;

/**
 * 获取服务器存储的整数（区分大小写）  
 * 获取服务器存储的整数（区分大小写） 玩家 ${player} 名称 ${key}
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I”，用于开发者平台设置的防刷分存档，与普通存档共用KEY
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_GetStoredIntegerEX(whichPlayer: player, key: string): number;

/**
 * 保存整数变量至服务器  
 * 服务器存档:存储 ',$whichPlayer,' 数据,名称：',$key,',值:',$value,' 最大长度63位
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I,（如您的key是AA，实际key为IAA。【IAA用于开发者平台填写，在编辑器上获取和读都填写AA就可以了】）”
 */
declare function DzAPI_Map_StoreInteger(whichPlayer: player, key: string, value: number): void;

/**
 * 读取服务器上的整数变量  
 * 获取',$whichPlayer,' 数据名称:',$key,' 里存储的整数.
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I”
 */
declare function DzAPI_Map_GetStoredInteger(whichPlayer: player, key: string): number;

/**
 * 玩家在地图自定义排行榜上的排名  
 * 获取玩家 ',$whichPlayer,' 自定义排行榜KEY(开发者平台填写)：',$key,' 的排名，【请注意100名以外的玩家获取的值为0！】
 *
 * @remark
 * 【100名以外的玩家排名为0】该功能适用于开发者平台-服务器存档-自定义排行榜 
 */
declare function DzAPI_Map_CommentTotalCount1(whichPlayer: player, id: number): number;

/**
 * 保存实数变量至服务器  
 * 服务器存档:存储 ',$whichPlayer,' 数据,名称：',$key,',值:',$value,' 最大长度63位
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”R,（如您的key是AA，实际key为RAA。【RAA用于开发者平台填写，在编辑器上获取和读都填写AA就可以了】”
 */
declare function DzAPI_Map_StoreReal(whichPlayer: player, key: string, value: number): void;

/**
 * 读取服务器上的实数变量  
 * 获取 ',$whichPlayer,' 数据名称:',$key,' 里存储的实数
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”R”
 */
declare function DzAPI_Map_GetStoredReal(whichPlayer: player, key: string): number;

/**
 * 保存布尔值变量至服务器  
 * 服务器存档:存储 ',$whichPlayer,' 数据,名称:',$key,',值:',$value,' 最大长度63位
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”B，（如您的key是AA，实际key为BAA。【BAA用于开发者平台填写，在编辑器上获取和读都填写AA就可以了】）”
 */
declare function DzAPI_Map_StoreBoolean(whichPlayer: player, key: string, value: boolean): void;

/**
 * 读取服务器上的布尔变量  
 * 获取 ',$whichPlayer,' 数据名称:',$key,' 里存储的布尔值
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”B”
 */
declare function DzAPI_Map_GetStoredBoolean(whichPlayer: player, key: string): boolean;

/**
 * 保存字符串变量至服务器  
 * 服务器存档:存储 ',$whichPlayer,' 数据,名称:',$key,',值:',$value,' 最大长度63位
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”S,（如您的key是AA，实际key为SAA。【SAA用于开发者平台填写，在编辑器上获取和读都填写AA就可以了】”
 */
declare function DzAPI_Map_StoreString(whichPlayer: player, key: string, value: string): void;

/**
 * 读取服务器上的字符串变量  
 * 获取 ',$whichPlayer,' 数据名称:',$key,' 里存储的字符串
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”S”
 */
declare function DzAPI_Map_GetStoredString(whichPlayer: player, key: string): string;

/**
 * 服务器存储字符串（区分大小写）  
 * 服务器存储字符串（区分大小写） 玩家 ${player} 名称 ${key} 值 ${value}
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”S”，与普通存档共用KEY
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_StoreStringEX(whichPlayer: player, key: string, value: string): void;

/**
 * 获取服务器存储的字符串（区分大小写）  
 * 获取服务器存储的字符串（区分大小写） 玩家 ${player} 名称 ${key}
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”S”，用于开发者平台设置的防刷分存档，与普通存档共用KEY
 *
 * @TC_DZAPI
 */
declare function DzAPI_Map_GetStoredStringEX(whichPlayer: player, key: string): string;

/**
 * 读取服务器存储的单位类型  
 * 获取 ',$whichPlayer,' 数据名称:',$key,' 里存储的单位类型
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I”
 */
declare function DzAPI_Map_GetStoredUnitType(whichPlayer: player, key: string): number;

/**
 * 读取服务器存储的技能类型  
 * 获取 ',$whichPlayer,' 数据名称:',$key,' 里存储的技能类型
 *
 * @remark
 * 这是经过封装的接口，实际Key会在原Key前面加”I”
 */
declare function DzAPI_Map_GetStoredAbilityId(whichPlayer: player, key: string): number;

/**
 * 清理服务器数据  
 * 服务器数据：清理',$whichPlayer,'数据,名称： ',$key
 *
 * @remark
 * 清理封装的接口记得在前面加对应的B、I、R、S
 */
declare function DzAPI_Map_FlushStoredMission(whichPlayer: player, key: string): void;

/**
 * 天梯提交整数数据  
 * 提交 ',$whichPlayer,' 天梯项目:',$key,' 的值为:',$value
 */
declare function DzAPI_Map_Ladder_SubmitIntegerData(whichPlayer: player, key: string, value: number): void;

/**
 * 天梯提交单位类型数据  
 * 提高 ',$whichPlayer,' 天梯项目:',$key,' 的值为:',$value
 */
declare function DzAPI_Map_Stat_SubmitUnitIdData(whichPlayer: player, key: string, value: number): void;
declare function DzAPI_Map_Stat_SubmitUnitData(whichPlayer: player, key: string, value: unit): void;

/**
 * 天梯提交技能数据  
 * 提交 ',$whichPlayer,' 天梯项目:',$key,' 的值为:',$value
 */
declare function DzAPI_Map_Ladder_SubmitAblityIdData(whichPlayer: player, key: string, value: number): void;

/**
 * 天梯提交物品数据  
 * 提交 ',$whichPlayer,' 天梯项目:',$key,' 的值为:',$value
 */
declare function DzAPI_Map_Ladder_SubmitItemIdData(whichPlayer: player, key: string, value: number): void;
declare function DzAPI_Map_Ladder_SubmitItemData(whichPlayer: player, key: string, value: item): void;

/**
 * 天梯提交布尔值数据  
 * 提交 ',$whichPlayer,' 天梯项目:',$key,' 的目的  ',$value
 */
declare function DzAPI_Map_Ladder_SubmitBooleanData(whichPlayer: player, key: string, value: boolean): void;

/**
 * 天梯提交获得称号  
 * 提交 ',$whichPlayer,' 获得称号:',$key
 */
declare function DzAPI_Map_Ladder_SubmitTitle(whichPlayer: player, value: string): void;

/**
 * 天梯提交玩家排名  
 * 设置 ',$whichPlayer,' 的游戏排名为:',$value
 */
declare function DzAPI_Map_Ladder_SubmitPlayerRank(whichPlayer: player, value: number): void;

/**
 * 天梯设置玩家额外分  
 * 设置 ',$whichPlayer,' 的额外分为 ',$value
 *
 * @remark
 * 最多30分
 */
declare function DzAPI_Map_Ladder_SubmitPlayerExtraExp(whichPlayer: player, value: number): void;

/**
 * 玩家累计游戏局数  
 * 获取 ',$whichPlayer,' 游戏局数
 *
 * @remark
 * 获取玩家中游戏局数
 */
declare function DzAPI_Map_PlayedGames(whichPlayer: player): number;

/**
 * 评论次数【废弃】  
 * 获取 ',$whichPlayer,' 评论次数
 *
 * @remark
 * 获取玩家的评论次数，该功能已失效，始终返回1
 */
declare function DzAPI_Map_CommentCount(whichPlayer: player): number;

/**
 * 玩家好友数量【废弃】  
 * 获取 ',$whichPlayer,' 好友数量
 *
 * @remark
 * 该功能废弃
 */
declare function DzAPI_Map_FriendCount(whichPlayer: player): number;

/**
 * 玩家是否平台认证的鉴赏家[废弃]  
 *  ',$whichPlayer,' 是鉴赏家
 *
 * @remark
 * 评论里的鉴赏家
 */
declare function DzAPI_Map_IsConnoisseur(whichPlayer: player): boolean;

/**
 * 玩家是否当前地图作者  
 *  ',$whichPlayer,' 是本图作者
 *
 * @remark
 * 判断指定玩家是否为本地图的作者。
 */
declare function DzAPI_Map_IsAuthor(whichPlayer: player): boolean;

/**
 * 地图评论次数  
 * 该图总评论次数
 *
 * @remark
 * 获取该图总评论次数
 */
declare function DzAPI_Map_CommentTotalCount(): number;

/**
 * 上报埋点数据  
 * 上报埋点数据： ',$whichPlayer,'，埋点key：',$eventKey,'，子key：',$不填,'，次数 ',$value
 *
 * @remark
 * 可以在游戏内的关键行为操作进行埋点，以便进行游戏内的玩家行为数据统计分析（比如某个英雄选择次数），上报前需先在开发者平台创建埋点。
 */
declare function DzAPI_Map_Statistics(whichPlayer: player, eventKey: string, eventType: string, value: number): void;

/**
 * 是否回流/收藏过地图的用户  
 * $whichPlayer,' ',$label
 *
 * @remark
 * 超过7天未玩地图的用户再次登录被称为地图回流用户，地图回流BUFF会存在7天，7天后消失。平台回流用户的BUFF存在15天，15天后消失。建议设置奖励，鼓励玩家回来玩地图！
 */
declare function DzAPI_Map_Returns(whichPlayer: player, label: number): boolean;

/**
 * 玩家签到天数  
 * $whichPlayer,' ',$label
 *
 * @remark
 * 获取玩家在指定地图的地图签到数据。
 */
declare function DzAPI_Map_ContinuousCount(whichPlayer: player, id: number): number;

/**
 * 玩家是否为真实玩家  
 * $whichPlayer,' 是否为真实玩家
 *
 * @remark
 * 当作者开启匹配模式的虚拟电脑玩家(AI)补位功能后，可通过此接口判定是否真实玩家。
 */
declare function DzAPI_Map_IsPlayer(whichPlayer: player): boolean;

/**
 * 玩家累计游戏时长  
 * $whichPlayer,' 累计游戏时长
 *
 * @remark
 * 获取玩家在当前地图的累计游戏时长
 */
declare function DzAPI_Map_MapsTotalPlayed(whichPlayer: player): number;

/**
 * 玩家在指定地图的地图等级  
 * $whichPlayer,' 在地图:',$mapId,' 的地图等级
 *
 * @remark
 * 获取玩家在指定地图的地图等级。
 */
declare function DzAPI_Map_MapsLevel(whichPlayer: player, mapId: number): number;

/**
 * 玩家在指定地图累计消耗平台金币【已废弃】  
 * $whichPlayer,' 在地图：',$mapId,' 的平台金币消耗
 *
 * @remark
 * 获取玩家在指定地图的累计消耗平台金币数量。
 */
declare function DzAPI_Map_MapsConsumeGold(whichPlayer: player, mapId: number): number;

/**
 * 玩家在指定地图的平台木材消耗【已废弃】  
 * $whichPlayer,' 地图：',$mapId,' 的平台木材消耗
 */
declare function DzAPI_Map_MapsConsumeLumber(whichPlayer: player, mapId: number): number;

/**
 * 玩家在指定地图累计消费金额区间（1$199）  
 * $whichPlayer,' 在地图 ',$199）区间',' 消费在（1
 *
 * @remark
 * 检测消费是否在（1$199）区间
 */
declare function DzAPI_Map_MapsConsumeLv1(whichPlayer: player, mapId: number): boolean;

/**
 * 玩家在指定地图累计消费金额区间（200$499）  
 * $whichPlayer,' 在地图 ',$499）区间',' 消费在（200
 *
 * @remark
 * 检测消费是否在（200$499）区间
 */
declare function DzAPI_Map_MapsConsumeLv2(whichPlayer: player, mapId: number): boolean;

/**
 * 玩家在指定地图累计消费金额区间（500$999）  
 * $whichPlayer,' 在地图 ',$999）区间',' 消费在（500
 *
 * @remark
 * 检测消费是否在（500$999）区间
 */
declare function DzAPI_Map_MapsConsumeLv3(whichPlayer: player, mapId: number): boolean;

/**
 * 玩家在指定地图累计消费金额区间（1000+）  
 * $whichPlayer,' 在地图 ',$地图id,' 消费在（1000+）区间
 *
 * @remark
 * 检测消费是否在（1000+）区间
 */
declare function DzAPI_Map_MapsConsumeLv4(whichPlayer: player, mapId: number): boolean;

/**
 * 玩家是否装备指定平台装饰  
 * $whichPlayer,' 装备了 ',$skinType,' 的 ',$id,' 道具
 *
 * @remark
 * 检查玩家是否装备着指定平台装饰（仅限平台和地图的合作装饰）。
 */
declare function DzAPI_Map_IsPlayerUsingSkin(whichPlayer: player, skinType: number, id: number): boolean;

/**
 * 玩家在地图社区上的互动数据  
 * $whichPlayer,' ',$whichData
 *
 * @remark
 * “获取玩家在当前地图的社区内的行为统计数据及身份数据。
 */
declare function DzAPI_Map_GetForumData(whichPlayer: player, whichData: number): number;

/**
 * 玩家标记  
 * $whichPlayer,' 是 ',$label
 *
 * @remark
 * 获取玩家在当前地图上的身份标记（当前是否回流用户、是否收藏地图）。
 */
declare function DzAPI_Map_PlayerFlags(whichPlayer: player, label: number): boolean;

/**
 * 玩家抽取指定地图宝箱次数  
 * 获取 ',$whichPlayer,' 第 ',$n,' 个地图宝箱的累计抽取次数
 *
 * @remark
 * 第二个参数为0代表第一个宝箱也为默认宝箱，为1代表第二个宝箱
 */
declare function DzAPI_Map_GetLotteryUsedCountEx(whichPlayer: player, index: number): number;

/**
 * 玩家抽取地图宝箱总次数  
 * $whichPlayer,' 玩家抽取地图宝箱总次数
 */
declare function DzAPI_Map_GetLotteryUsedCount(whichPlayer: player): number;

/**
 * 打开地图商城道具购买界面  
 * $whichPlayer,' 打开地图商城道具 ',$道具key,' 购买界面
 *
 * @remark
 * 打开游戏内置商城的道具购买页面，用于作者在地图内开发引导消费场景。购买成功后可通过玩家获得平台道具事件实现在游戏内立即生效。
 */
declare function DzAPI_Map_OpenMall(whichPlayer: player, whichkey: string): boolean;

/**
 * 上报本局游戏玩家数据  
 * 上报本局游戏：',$whichPlayer,' 项目：',$key,' 数据：',$value
 *
 * @remark
 * 上报本局游戏的玩家数据，比如战斗力、杀敌数等。
 */
declare function DzAPI_Map_GameResult_CommitData(whichPlayer: player, key: string, value: string): void;

/**
 * 上报本局游戏玩家称号  
 * 上报本局游戏：',$whichPlayer,' 称号：',$key
 *
 * @remark
 * 上报本局游戏玩家所获得的称号，请注意**称号Key**不能和[上报本局游戏玩家数据]的**数据项Key**重复。
 */
declare function DzAPI_Map_GameResult_CommitTitle(whichPlayer: player, value: string): void;

/**
 * 上报本局游戏玩家排名  
 * 上报本局游戏 ',$whichPlayer,' 的排名为：',$value
 *
 * @remark
 * 对于乱斗模式的地图，上报每一名玩家的名次。
 */
declare function DzAPI_Map_GameResult_CommitPlayerRank(whichPlayer: player, value: number): void;

/**
 * 上报本局游戏模式  
 * 上报本局游戏模式：',$模式名
 *
 * @remark
 * 上报本局游戏所选择的地图模式名称。
 */
declare function DzAPI_Map_GameResult_CommitGameMode(value: string): void;

/**
 * 上报本局游戏结果  
 * 上报本局游戏结果：',$whichPlayer,' ',$value
 *
 * @remark
 * 上报本局游戏玩家游戏结果（胜负），提交后会立即结束游戏。
 */
declare function DzAPI_Map_GameResult_CommitGameResult(whichPlayer: player, value: number): void;

/**
 * 上报本局游戏结果（不结束游戏）  
 * 上报本局游戏结果：',$whichPlayer,' ',$value,' [不结束游戏]
 *
 * @remark
 * 上报本局游戏玩家游戏结果（胜负），提交后不会立即结束游戏，适用于游戏正常结束后还有奖励关的地图。
 */
declare function DzAPI_Map_GameResult_CommitGameResultNoEnd(whichPlayer: player, value: number): void;

/**
 * 玩家本局游戏距上一局游戏的时间差  
 * $whichPlayer,' 本局游戏距上一局游戏的时间差
 *
 * @remark
 * 返查询该玩家上次玩游戏时间至本次玩游戏时间的差值，可以利用此接口实现离线收益之类的功能。
 */
declare function DzAPI_Map_GetSinceLastPlayedSeconds(whichPlayer: player): number;

/**
 * 使用U币快速购买地图商城道具  
 * 向 ',$whichPlayer,' 弹出商品 ',$key,' 的购买窗口，购买数量 ',$数量,' 窗口持续时间 ',$时间,' 秒
 *
 * @remark
 * 弹出提示框询问玩家是否使用U币直接购买指定道具，作者需已在商城上架对应商品（商品信息中的**道具和数量**与接口所请求的参数一致）。如果前一次购买的提示框未关闭的情况下再次调用此接口，后续请求无效。购买成功后可通过[玩家获得平台道具事件]实现在游戏内立即生效。
 */
declare function DzAPI_Map_QuickBuy(whichPlayer: player, key: string, count: number, seconds: number): boolean;

/**
 * 关闭U币快速购买界面  
 * 关闭 ',$whichPlayer,' U币快速购买窗口
 *
 * @remark
 * 关闭最后一次打开的U币快速购买窗口，结合打开U币快速购买窗口使用。
 */
declare function DzAPI_Map_CancelQuickBuy(whichPlayer: player): boolean;

/**
 * 玩家地图商城道具是否读取成功  
 * $whichPlayer,' 地图商城道具是否读取成功
 *
 * @remark
 * 判断本局游戏中玩家的商城道具是否正确加载。
 */
declare function DzAPI_Map_PlayerLoadedItems(whichPlayer: player): boolean;

/**
 * 自定义排行榜上榜人数  
 * 获取自定义排行榜 ',$key,' 的上榜人数
 *
 * @remark
 * key为开发者平台所配置的自定义排行榜key值,值为1$9
 */
declare function DzAPI_Map_CustomRankCount(id: number): number;

/**
 * 自定义排行榜上的玩家昵称  
 * 获取自定义排行榜 ',$key,' 的排名第 ',$ranking,' 的玩家昵称
 *
 * @remark
 * key为开发者平台所配置的自定义排行榜key值,值为1$9
 */
declare function DzAPI_Map_CustomRankPlayerName(id: number, ranking: number): string;

/**
 * 自定义排行榜上的玩家数值  
 * 获取自定义排行榜 ',$key,' 排名第 ',$ranking,' 的数值
 *
 * @remark
 * key为开发者平台所配置的自定义排行榜key值,值为1$9
 */
declare function DzAPI_Map_CustomRankValue(id: number, ranking: number): number;

/**
 * 玩家在KK对战平台的完整昵称  
 * $whichPlayer,' 在KK对战平台的完整昵称
 *
 * @remark
 * 获取玩家的KK平台完整昵称“基础昵称#编号”
 */
declare function DzAPI_Map_GetPlayerUserName(whichPlayer: player): string;

/**
 * 获取服务器存档限制余额  
 * 获取 ',$whichPlayer,' 存档 ',$key,' 上限余额
 *
 * @remark
 * 获取服务器存档当天上限余额，需要在开发者平台对指定KEY设置每天上限，获取的值为余额。如存档A上限为100，当天使用了80，返回20
 */
declare function KKApiGetServerValueLimitLeft(whichPlayer: player, key: string): number;

/**
 * 【随机只读存档】生成随机数  
 * 设置 ',$whichPlayer,' 对随机只读存档 ',$key,' 的组 ',$groupkey,' 生成随机数
 *
 * @remark
 * 生成一个服务器随机数并关联组ID，可以在开发者平台对组ID进行防刷分管理，同组ID下各个Key共享CD和次数。
 */
declare function KKApiRequestBackendLogic(whichPlayer: player, key: string, groupkey: string): boolean;

/**
 * 【随机只读存档】判断随机数是否存在  
 * $whichPlayer,' 随机只读存档 ',$key,' 是否存在
 *
 * @remark
 * 判断指定KEY生成的随机数是否存在，存在返回true
 */
declare function KKApiCheckBackendLogicExists(whichPlayer: player, key: string): boolean;

/**
 * 【随机只读存档】读取随机数的值  
 * 获取 ',$whichPlayer,' 随机只读存档 ',$key,' 的值
 *
 * @remark
 * 读取指定KEY生成的服务器随机数的值，返回整数。
 */
declare function KKApiGetBackendLogicIntResult(whichPlayer: player, key: string): number;

/**
 * 【随机只读存档】读取随机数的值  
 * 获取 ',$whichPlayer,' 随机只读存档 ',$key,' 的值
 *
 * @remark
 * 读取指定KEY生成的服务器随机数的值
 */
declare function KKApiGetBackendLogicStrResult(whichPlayer: player, key: string): string;

/**
 * 【随机只读存档】读取随机数的生成时间  
 * 获取 ',$whichPlayer,' 随机只读存档 ',$key,' 的生成时间
 *
 * @remark
 * 读取指定KEY生成的服务器随机数生成的时间戳，返回整数。
 */
declare function KKApiGetBackendLogicUpdateTime(whichPlayer: player, key: string): number;

/**
 * 【随机只读存档】读取随机数的组ID  
 * 获取 ',$whichPlayer,' 随机只读存档 ',$key,' 的组ID
 *
 * @remark
 * 读取指定KEY生成的服务器随机数生成的组ID，返回整数
 */
declare function KKApiGetBackendLogicGroup(whichPlayer: player, key: string): string;

/**
 * 【随机只读存档】删除随机数  
 * 删除 ',$whichPlayer,' 随机只读存档 ',$key,' 的随机数
 *
 * @remark
 * 删除指定KEY生成的服务器生成的随机数
 */
declare function KKApiRemoveBackendLogicResult(whichPlayer: player, key: string): boolean;

/**
 * 【随机只读存档】剩余次数  
 *  ',$whichPlayer,' 随机只读存档的组 ',$groupkey,' 今日的剩余次数
 */
declare function KKApiRandomSaveGameCount(whichPlayer: player, groupkey: string): number;

/**
 * 注册随机存档更新事件  
 * 注册随机存档更新事件
 *
 * @remark
 * 当玩家随机存档更新的时候触发该事件。用“当前变动的随机存档”来获取变动的随机存档key。
 */
declare function KKApiTriggerRegisterBackendLogicUpdata(trig: trigger): void;

/**
 * 注册随机存档删除事件  
 * 注册随机存档删除事件
 *
 * @remark
 * 当玩家随机存档删除的时候触发该事件。用“当前变动的随机存档”来获取变动的随机存档key
 */
declare function KKApiTriggerRegisterBackendLogicDelete(trig: trigger): void;

/**
 * 获取变动的随机存档  
 * 获取变动的随机存档
 *
 * @remark
 * 用在注册随机存档更新和删除事件之后
 */
declare function KKApiGetSyncBackendLogic(): string;

/**
 * 是否在平台正常游戏中  
 * 是否在平台正常游戏中
 *
 * @remark
 * 主要试用于平台运行中区分正常游戏和观战模式，返回true代表是正常游戏模式，反之为观战模式
 */
declare function KKApiIsGameMode(): boolean;

/**
 * 初始化平台键位显示设置  
 * 设置 ',$whichPlayer,' 的第 ',$n,' 套方案的键位：',$key,' 设置描述：',$描述,' 
 *
 * @remark
 * 初始化键位设置会显示在平台改键界面上，最多2套方案。
 */
declare function KKApiInitializeGameKey(whichPlayer: player, setIndex: number, k: string, data: string): boolean;

/**
 * 获取玩家的平台ID[new]  
 *  ',$whichPlayer,' 平台ID
 *
 * @remark
 * 返回的是一个32位的字符串
 */
declare function KKApiPlayerGUID(whichPlayer: player): string;

/**
 * 玩家地图任务状态[new]  
 *  ',$whichPlayer,' 地图任务：',$setIndex,' 在 ',$taskstat,' 状态
 */
declare function KKApiIsTaskInProgress(whichPlayer: player, setIndex: number, taskstat: number): boolean;

/**
 * 玩家地图任务当前进度[new]  
 *  ',$whichPlayer,' 地图任务：',$setIndex,' 的当前进度
 */
declare function KKApiQueryTaskCurrentProgress(whichPlayer: player, setIndex: number): number;

/**
 * 玩家地图任务总进度[new]  
 *  ',$whichPlayer,' 地图任务：',$setIndex,' 总进度
 */
declare function KKApiQueryTaskTotalProgress(whichPlayer: player, setIndex: number): number;

/**
 * 玩家平台该地图成就是否完成[new]  
 *  ',$whichPlayer,' 平台该地图成就：',$key,' 已经完成
 *
 * @remark
 * 完成返回true
 */
declare function KKApiIsAchievementCompleted(whichPlayer: player, id: string): boolean;

/**
 * 玩家平台该地图成就点数[new]  
 *  ',$whichPlayer,' 平台该地图成就点数
 */
declare function KKApiAchievementPoints(whichPlayer: player): number;

/**
 * 判定测试大厅游戏时长区间[new]  
 *  ',$whichPlayer,' 在测试大厅的游戏时长是否在区间（',$minHours,' 到 ',$maxHours,'）小时
 *
 * @remark
 * 判断测试大厅游戏时长是否满足该区间 ，0表示不限制，单位为小时
 */
declare function KKApiPlayedTime(whichPlayer: player, minHours: number, maxHours: number): boolean;

/**
 * 【批量存档】开始保存  
 *  ',$whichPlayer,' 开始批量保存存档
 *
 * @remark
 * 对添加批量保存存档条目进行保存。
 */
declare function KKApiBeginBatchSaveArchive(whichPlayer: player): boolean;

/**
 * 【批量存档】添加条目  
 * 设置 ',$whichPlayer,' 批量存档添加条目 ',$key,' ，数据：',$value,'，',$caseInsensitive,' 区分大小写
 *
 * @remark
 * 对添加批量保存存档条目进行保存。
 */
declare function KKApiAddBatchSaveArchive(whichPlayer: player, key: string, value: string, caseInsensitive: boolean): boolean;

/**
 * 【批量存档】结束保存  
 * 设置 ',$whichPlayer,' ',$abandon,' 结束批量保存存档
 *
 * @remark
 * 结束批量保存存档。
 */
declare function KKApiEndBatchSaveArchive(whichPlayer: player, abandon: boolean): boolean;

/**
 * 注册天梯投降事件  
 * 注册天梯投降事件
 *
 * @remark
 * 当玩家在天梯投降时候触发该事件。用“获取投降的队伍id”来获取。
 */
declare function KKApiTriggerRegisterLadderSurrender(trig: trigger): void;

/**
 * 获取天梯投降的队伍ID  
 * 获取天梯投降的队伍ID
 *
 * @remark
 * 用于天梯投降事件动作里
 */
declare function KKApiGetLadderSurrenderTeamId(): number;

/**
 * 玩家在公会的等级  
 * 获取 ',$whichPlayer,' 公会等级
 *
 * @remark
 * 获取玩家公会等级
 */
declare function KKApiGetGuildLevel(whichPlayer: player): number;

/**
 * 宠物探险次数  
 *  ',$whichPlayer,' 宠物探险次数
 *
 * @remark
 * 获取平台宠物探险次数
 */
declare function KKApiMapExplorationNum(whichPlayer: player): number;

/**
 * 宠物探险时间  
 *  ',$whichPlayer,' 宠物探险时间
 *
 * @remark
 * 获取平台宠物探险时间
 */
declare function KKApiMapExplorationTime(whichPlayer: player): number;

/**
 * 测试大厅预约人数  
 * 测试大厅预约人数
 */
declare function KKApiMapOrderNum(): number;

/**
 * 发送云脚本数据  
 * 发送云脚本数据 ',$玩家,' ',$事件,' ',$数据,'
 *
 * @remark
 * 发送云脚本数据
 */
declare function KKApiMlScriptEvent(whichPlayer: player, eventName: string, payload: string): boolean;

/**
 * 事件响应 - 商城道具最后变动的数量[new]  
 *  ',$whichPlayer,' 商城道具：',$key,' 最后更新的数量
 *
 * @remark
 * 获取的是当次玩家商城背包新增或消耗的数量，如果是时效型道具获取的是剩余时间，可以用于【玩家获取商城道具事件】、【玩家消耗使用商城道具事件】和【玩家删除商城道具事件】后。
 */
declare function KKApiGetMallItemUpdateCount(whichPlayer: player, key: string): number;