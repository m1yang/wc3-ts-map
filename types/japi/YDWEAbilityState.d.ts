/** @noSelfInFile **/


declare function EXGetUnitAbility(u: unit, abilcode: number): ability;
declare function EXGetUnitAbilityByIndex(u: unit, index: number): ability;
declare function EXGetAbilityId(abil: ability): number;
declare function EXGetAbilityState(abil: ability, state_type: number): number;
declare function EXSetAbilityState(abil: ability, state_type: number, value: number): boolean;
declare function EXGetAbilityDataReal(abil: ability, level: number, data_type: number): number;
declare function EXSetAbilityDataReal(abil: ability, level: number, data_type: number, value: number): boolean;
declare function EXGetAbilityDataInteger(abil: ability, level: number, data_type: number): number;
declare function EXSetAbilityDataInteger(abil: ability, level: number, data_type: number, value: number): boolean;
declare function EXGetAbilityDataString(abil: ability, level: number, data_type: number): string;
declare function EXSetAbilityDataString(abil: ability, level: number, data_type: number, value: string): boolean;
declare function EXSetAbilityAEmeDataA(abil: ability, unitid: number): boolean;
declare function EXGetItemDataString(itemcode: number, data_type: number): string;
declare function EXSetItemDataString(itemcode: number, data_type: number, value: string): boolean;


/**
 * 技能属性 [JAPI]  
 * ${单位} 的 ${技能} 的 ${状态}
 *
 * @TC_UNIT
 */
declare function YDWEGetUnitAbilityState(u: unit, abilcode: number, state_type: number): number;

/**
 * 技能数据 (整数) [JAPI]  
 * ${单位} 的 ${技能} 第 ${等级} 级的 ${数据}
 *
 * @TC_UNIT
 */
declare function YDWEGetUnitAbilityDataInteger(u: unit, abilcode: number, level: number, data_type: number): number;

/**
 * 技能数据 (实数) [JAPI]  
 * ${单位} 的 ${技能} 第 ${等级} 级的 ${数据}
 *
 * @remark
 * 数据A~数据I也就是物体编辑器里按Ctrl+D后看到的DataA~DataI
 *
 * @TC_UNIT
 */
declare function YDWEGetUnitAbilityDataReal(u: unit, abilcode: number, level: number, data_type: number): number;

/**
 * 技能数据 (字符串) [JAPI]  
 * ${单位} 的 ${技能} 第 ${等级} 级的 ${数据}
 *
 * @TC_UNIT
 */
declare function YDWEGetUnitAbilityDataString(u: unit, abilcode: number, level: number, data_type: number): string;

/**
 * 设置技能属性 [JAPI]  
 * 设置 ${单位} 的 ${技能} 的 ${状态} 为 ${Value}
 *
 * @TC_UNIT
 */
declare function YDWESetUnitAbilityState(u: unit, abilcode: number, state_type: number, value: number): boolean;

/**
 * 设置技能数据 (整数) [JAPI]  
 * 设置 ${单位} 的 ${技能} 第 ${等级} 级的 ${数据} 为 ${Value}
 *
 * @TC_UNIT
 */
declare function YDWESetUnitAbilityDataInteger(u: unit, abilcode: number, level: number, data_type: number, value: number): boolean;

/**
 * 设置技能数据 (实数) [JAPI]  
 * 设置 ${单位} 的 ${技能} 第 ${等级} 级的 ${数据} 为 ${Value}
 *
 * @remark
 * 数据A~数据I也就是物体编辑器里按Ctrl+D后看到的DataA~DataI
 *
 * @TC_UNIT
 */
declare function YDWESetUnitAbilityDataReal(u: unit, abilcode: number, level: number, data_type: number, value: number): boolean;

/**
 * 设置技能数据 (字符串) [JAPI]  
 * 设置 ${单位} 的 ${技能} 第 ${等级} 级的 ${数据} 为 ${Value}
 *
 * @TC_UNIT
 */
declare function YDWESetUnitAbilityDataString(u: unit, abilcode: number, level: number, data_type: number, value: string): boolean;

/**
 * 单位变身 [JAPI]  
 * ${单位} ${技能}为 ${目标单位}
 *
 * @remark
 * 技能请填恶魔猎手的变身<AEme>或其复制品
 *
 * @TC_UNIT
 */
declare function YDWEUnitTransform(u: unit, abilcode: number, targetid: number): void;

/**
 * 物品数据 (字符串) [JAPI]  
 * ${物品} 的 ${数据}
 *
 * @TC_ITEM
 */
declare function YDWEGetItemDataString(itemcode: number, data_type: number): string;

/**
 * 设置物品数据 (字符串) [JAPI]  
 * 设置 ${物品} 的 ${数据} 为 ${Value}
 *
 * @TC_ITEM
 */
declare function YDWESetItemDataString(itemcode: number, data_type: number, value: string): boolean;