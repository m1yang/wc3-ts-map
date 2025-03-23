/** @noSelfInFile **/



/**
 * X轴坐标 [JAPI] [New!]  
 * ${特效} 的X轴坐标
 *
 * @TC_SPECIALEFFECT
 */
declare function EXGetEffectX(e: effect): number;

/**
 * Y轴坐标 [JAPI] [New!]  
 * ${特效} 的Y轴坐标
 *
 * @TC_SPECIALEFFECT
 */
declare function EXGetEffectY(e: effect): number;

/**
 * 高度 [JAPI] [New!]  
 * ${特效} 的高度
 *
 * @TC_SPECIALEFFECT
 */
declare function EXGetEffectZ(e: effect): number;

/**
 * 移动到坐标 [JAPI] [New!]  
 * 移动 ${特效} 到（ ${X}, ${Y} ）
 *
 * @TC_SPECIALEFFECT
 */
declare function EXSetEffectXY(e: effect, x: number, y: number): void;

/**
 * 设置高度 [JAPI] [New!]  
 * 设置 ${特效} 的高度为 ${高度}
 *
 * @TC_SPECIALEFFECT
 */
declare function EXSetEffectZ(e: effect, z: number): void;

/**
 * 大小 [JAPI] [New!]  
 * ${特效} 的大小
 *
 * @TC_SPECIALEFFECT
 */
declare function EXGetEffectSize(e: effect): number;

/**
 * 设置大小 [JAPI] [New!]  
 * 设置 ${特效} 的大小为 ${大小}
 *
 * @TC_SPECIALEFFECT
 */
declare function EXSetEffectSize(e: effect, size: number): void;

/**
 * 绕X轴旋转 [JAPI] [New!]  
 * ${特效} 绕X轴旋转 ${度} 度
 *
 * @remark
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 *
 * @TC_SPECIALEFFECT
 */
declare function EXEffectMatRotateX(e: effect, angle: number): void;

/**
 * 绕Y轴旋转 [JAPI] [New!]  
 * ${特效} 绕Y轴旋转 ${度} 度
 *
 * @remark
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 *
 * @TC_SPECIALEFFECT
 */
declare function EXEffectMatRotateY(e: effect, angle: number): void;

/**
 * 绕Z轴旋转 [JAPI] [New!]  
 * ${特效} 绕Z轴旋转 ${度} 度
 *
 * @remark
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。
 *
 * @TC_SPECIALEFFECT
 */
declare function EXEffectMatRotateZ(e: effect, angle: number): void;

/**
 * 缩放 [JAPI] [New!]  
 * 设置 ${特效} 的X轴缩放[ ${缩放} ]，Y轴缩放[ ${缩放} ]，Z轴缩放[ ${缩放} ]。
 *
 * @remark
 * 多次调用，效果会叠加，不想叠加需要先重置为初始状态。设置为2,2,2时相当于大小变为2倍。设置为负数时，就是镜像翻转。
 *
 * @TC_SPECIALEFFECT
 */
declare function EXEffectMatScale(e: effect, x: number, y: number, z: number): void;

/**
 * 重置变换 [JAPI] [New!]  
 * 重置 ${特效}
 *
 * @remark
 * 清空所有的旋转和缩放，重置为初始状态。
 *
 * @TC_SPECIALEFFECT
 */
declare function EXEffectMatReset(e: effect): void;

/**
 * 设置动画速度 [JAPI] [New!]  
 * 设置 ${特效} 的动画速度为 ${动画速度}
 *
 * @TC_SPECIALEFFECT
 */
declare function EXSetEffectSpeed(e: effect, speed: number): void;



/**
 * 移动到点 [JAPI] [New!]  
 * 移动 ${特效} 到${点}
 *
 * @TC_SPECIALEFFECT
 */
declare function YDWESetEffectLoc(e: effect, loc: location): void;