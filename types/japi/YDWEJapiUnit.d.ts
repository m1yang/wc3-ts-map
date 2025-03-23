/** @noSelfInFile **/



/**
 * 设置单位面向角度 [JAPI] [New!]  
 * 设置 ${单位} 的面向角度为 ${Angle} 度
 *
 * @remark
 * 立即转身
 *
 * @TC_UNIT
 */
declare function EXSetUnitFacing(u: unit, angle: number): void;
declare function EXPauseUnit(u: unit, flag: boolean): void;

/**
 * 设置单位的碰撞类型 [JAPI] [New!]  
 * ${启用/禁用} ${单位} 对 ${碰撞} 的碰撞
 *
 * @TC_UNIT
 */
declare function EXSetUnitCollisionType(enable: boolean, u: unit, t: number): void;

/**
 * 设置单位的移动类型 [JAPI] [New!]  
 * 设置 ${单位} 的移动类型为 ${Value}
 *
 * @TC_UNIT
 */
declare function EXSetUnitMoveType(u: unit, t: number): void;



/**
 * 单位添加晕眩 [JAPI]  
 * ${单位} 添加晕眩
 *
 * @TC_UNIT
 */
declare function YDWEUnitAddStun(u: unit): void;

/**
 * 单位移除晕眩 [JAPI]  
 * ${单位} 移除晕眩
 *
 * @remark
 * 别用来移风暴之锤之类的晕眩。因为它只会移除晕眩并不会移除晕眩的buff。
 *
 * @TC_UNIT
 */
declare function YDWEUnitRemoveStun(u: unit): void;