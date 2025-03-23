/** @noSelfInFile */

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Widget } from "./widget";

export class Effect extends Handle<effect> {
  public readonly attachWidget?: Widget;

  public readonly attachPointName?: string;

  /**
   * Creates a special effect.
   * 新建特效(创建到坐标)
   * @param modelName The path of the model that the effect will use.
   * @param x
   * @param y
   */
  public static create(
    modelName: string,
    x: number,
    y: number
  ): Effect | undefined {
    const handle = AddSpecialEffect(modelName, x, y);
    if (handle) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  /**
   * Creates a special effect attached to a widget.
   * 新建特效(绑定到单位)
   * @param modelName The path of the model that the effect will use.
   * @param targetWidget The widget to attach the effect to.
   * @param attachPointName The attachment point of the widget where the effect will
   * be placed. Attachment points are points in a model that can be referenced to as
   * areas for effects to be attached, whether it be from a spell or this function.
   * If the attachment point does not exist, it will attach the effect to the model's origin.
   */
  public static createAttachment(
    modelName: string,
    targetWidget: Widget,
    attachPointName: string
  ): Effect | undefined {
    const handle = AddSpecialEffectTarget(
      modelName,
      targetWidget.handle,
      attachPointName
    );
    if (handle) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;
      values.attachWidget = targetWidget;
      values.attachPointName = attachPointName;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a spell visual effect at position.
   * ```ts
   * // Create Thunder Clap's caster art effect at [0,0]
   * const clap = Effect.createSpell(FourCC("AHtz"), EFFECT_TYPE_CASTER, 0, 0);
   * ```
   */
  public static createSpell(
    abilityId: number,
    effectType: effecttype,
    x: number,
    y: number
  ): Effect | undefined {
    const handle = AddSpellEffectById(abilityId, effectType, x, y);
    if (handle) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a spell visual effect at position.
   * ```ts
   * const red = Players[0];
   * const peasant = Unit.create(red, FourCC("hpea"), 0, 0);
   * // Create Thunder Clap's caster art effect attached to "origin" of peasant.
   * const clap = Effect.createSpellAttachment(FourCC("AHtc"), EFFECT_TYPE_CASTER, peasant, "origin");
   * clap?.destroy();
   * ```
   */
  public static createSpellAttachment(
    abilityId: number,
    effectType: effecttype,
    targetWidget: Widget,
    attachPointName: string
  ): Effect | undefined {
    const handle = AddSpellEffectTargetById(
      abilityId,
      effectType,
      targetWidget.handle,
      attachPointName
    );
    if (handle) {
      const obj = this.getObject(handle) as Effect;

      const values: Record<string, unknown> = {};
      values.handle = handle;
      values.attachWidget = targetWidget;
      values.attachPointName = attachPointName;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 获取特效大小
   */
  public get scale() {
    return EXGetEffectSize(this.handle);
  }

  /**
   * 设置特效大小
   */
  public set scale(scale: number) {
    // BlzSetSpecialEffectScale(this.handle, scale);
    EXSetEffectSize(this.handle, scale);
  }

  // /**
  //  * Warning: asynchronous
  //  * @async
  //  */
  // public get x() {
  //   return BlzGetLocalSpecialEffectX(this.handle);
  // }

  // public set x(x: number) {
  //   BlzSetSpecialEffectX(this.handle, x);
  // }

  // /**
  //  * Warning: asynchronous
  //  * @async
  //  */
  // public get y() {
  //   return BlzGetLocalSpecialEffectY(this.handle);
  // }

  // public set y(y: number) {
  //   BlzSetSpecialEffectY(this.handle, y);
  // }

  // /**
  //  * Warning: asynchronous
  //  * @async
  //  */
  // public get z() {
  //   return BlzGetLocalSpecialEffectZ(this.handle);
  // }

  // public set z(z: number) {
  //   BlzSetSpecialEffectZ(this.handle, z);
  // }

  // public addSubAnimation(subAnim: subanimtype) {
  //   BlzSpecialEffectAddSubAnimation(this.handle, subAnim);
  // }

  // public clearSubAnimations() {
  //   BlzSpecialEffectClearSubAnimations(this.handle);
  // }

  // /**
  //  * Destroy the effect handle. This will play the effect's death animation.
  //  */
  // public destroy() {
  //   DestroyEffect(this.handle);
  // }

  // public playAnimation(animType: animtype) {
  //   BlzPlaySpecialEffect(this.handle, animType);
  // }

  // public playWithTimeScale(animType: animtype, timeScale: number) {
  //   BlzPlaySpecialEffectWithTimeScale(this.handle, animType, timeScale);
  // }

  // public removeSubAnimation(subAnim: subanimtype) {
  //   BlzSpecialEffectRemoveSubAnimation(this.handle, subAnim);
  // }

  // public resetScaleMatrix() {
  //   BlzResetSpecialEffectMatrix(this.handle);
  // }

  // public setAlpha(alpha: number) {
  //   BlzSetSpecialEffectAlpha(this.handle, alpha);
  // }

  // public setColor(red: number, green: number, blue: number) {
  //   BlzSetSpecialEffectColor(this.handle, red, green, blue);
  // }

  // public setColorByPlayer(whichPlayer: MapPlayer) {
  //   BlzSetSpecialEffectColorByPlayer(this.handle, whichPlayer.handle);
  // }

  // public setHeight(height: number) {
  //   BlzSetSpecialEffectHeight(this.handle, height);
  // }

  // public setOrientation(yaw: number, pitch: number, roll: number) {
  //   BlzSetSpecialEffectOrientation(this.handle, yaw, pitch, roll);
  // }

  // public setPitch(pitch: number) {
  //   BlzSetSpecialEffectPitch(this.handle, pitch);
  // }

  // public setPoint(p: Point) {
  //   BlzSetSpecialEffectPositionLoc(this.handle, p.handle);
  // }

  // public setPosition(x: number, y: number, z: number) {
  //   BlzSetSpecialEffectPosition(this.handle, x, y, z);
  // }

  // public setRoll(roll: number) {
  //   BlzSetSpecialEffectRoll(this.handle, roll);
  // }

  // public setScaleMatrix(x: number, y: number, z: number) {
  //   BlzSetSpecialEffectMatrixScale(this.handle, x, y, z);
  // }

  // public setTime(value: number) {
  //   BlzSetSpecialEffectTime(this.handle, value);
  // }

  // public setTimeScale(timeScale: number) {
  //   BlzSetSpecialEffectTimeScale(this.handle, timeScale);
  // }

  // public setYaw(y: number) {
  //   BlzSetSpecialEffectYaw(this.handle, y);
  // }

  /**
   * embed_japi
   * 设置特效粒子大小
   */
  public set effectPariticleSize(size: number) {
    // japi.SetPariticle2Size(this.handle, size);
  }

  /**
   * 设置特效高度
   */
  public set effectZ(Z: number) {
    EXSetEffectZ(this.handle, Z);
  }

  /**
   * 获取特效高度
   */
  public get effectZ() {
    return EXGetEffectZ(this.handle);
  }

  /**
   * 设置特效播放速度
   */
  public set effectSpeed(Speed: number) {
    EXSetEffectSpeed(this.handle, Speed);
  }

  /**
   * embed_japi
   * 设置特效颜色
   */
  public set effectColor(Color: number) {
    // japi.EXSetEffectColor(this.handle, Color);
  }

  /**
   * 获取特效颜色
   */
  // public get effectColor() {
  // return japi.EXGetEffectColor(this.handle);
  // }

  /**
   * embed_japi
   * 设置迷雾可见特效
   */
  public set effectFogVisible(fogvisible: boolean) {
    // japi.EXSetEffectFogVisible(this.handle, fogvisible);
  }

  /**
   * 设置特效可见
   */
  public set effectVisible(visible: boolean) {
    // japi.EXSetEffectVisible(this.handle, visible);
  }

  /**
   * 设置特效Z轴旋转
   */
  public set effectRotateZ(z: number) {
    EXEffectMatRotateZ(this.handle, z);
  }

  /**
   * 设置特效X轴旋转
   */
  public set effectRotateX(x: number) {
    EXEffectMatRotateX(this.handle, x);
  }

  /**
   * 设置特效Y轴旋转
   */
  public set effectRotateY(y: number) {
    EXEffectMatRotateY(this.handle, y);
  }

  /**
   * 移动特效到XY
   */
  public setEffectXY(x: number, y: number) {
    EXSetEffectXY(this.handle, x, y);
  }

  /**
   * 获取特效XY轴
   */
  public getEffectXY(): { x: number; y: number } {
    return {
      x: EXGetEffectX(this.handle),
      y: EXGetEffectY(this.handle),
    };
  }

  /**
   * embed_japi
   * 设置特效绑定handle
   */
  public setBindEffect(unit: handle, node: string) {
    // japi.BindEffect(unit, node, this.handle);
  }

  /**
   * embed_japi
   * 解除特效绑定
   */
  public unBindEffect() {
    // japi.UnBindEffect(this.handle);
  }

  /**
   * embed_japi
   * 设置特效播放动画
   */
  public setEffectAnimation(aon: number) {
    // japi.EXSetEffectAnimation(this.handle, aon);
  }

  /**
   * 特效重置（清空特效旋转与缩放）
   */
  public reset() {
    EXEffectMatReset(this.handle);
  }

  /**
   * 摧毁特效
   */
  public destroy() {
    DestroyEffect(this.handle);
  }

  public static fromHandle(handle: effect | undefined): Effect | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
