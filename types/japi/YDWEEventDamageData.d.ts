/** @noSelfInFile **/


declare function EXGetEventDamageData(edd_type: number): number;
declare function EXSetEventDamage(amount: number): boolean;


/**
 * 是物理伤害 [JAPI]  
 * 单位所受伤害是物理伤害
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventPhysicalDamage(): boolean;

/**
 * 是攻击伤害 [JAPI]  
 * 单位所受伤害是攻击伤害
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventAttackDamage(): boolean;

/**
 * 是远程伤害 [JAPI]  
 * 单位所受伤害是远程伤害
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventRangedDamage(): boolean;

/**
 * 伤害类型 [JAPI]  
 * 单位所受伤害的伤害类型是 ${伤害类型}
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventDamageType(damageType: damagetype): boolean;

/**
 * 武器类型 [JAPI]  
 * 单位所受伤害的武器类型是 ${武器类型}
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventWeaponType(weaponType: weapontype): boolean;

/**
 * 攻击类型 [JAPI]  
 * 单位所受伤害的攻击类型是 ${攻击类型}
 *
 * @remark
 * 响应'受到伤害'单位事件,不能用在等待之后
 *
 * @TC_EVENTRESPONSE
 */
declare function YDWEIsEventAttackType(attackType: attacktype): boolean;

/**
 * 设置伤害值 [JAPI]  
 * 设置单位所受伤害为 ${伤害值}
 *
 * @remark
 * 修改伤害事件里的伤害值，不能在等待之后使用。
 *
 * @TC_UNIT
 */
declare function YDWESetEventDamage(amount: number): boolean;