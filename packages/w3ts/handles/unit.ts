/** @noSelfInFile */

import { OrderId } from "../globals/order";
import { Destructable } from "./destructable";
import { Force } from "./force";
import { Handle } from "./handle";
import { Group } from "./group";
import { Item } from "./item";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Sound } from "./sound";
import { Widget } from "./widget";

export class Unit extends Widget {
  public declare readonly handle: unit;

  /**
   * Creates a unit.
   * @param owner The owner of the unit.
   * @param unitId The rawcode of the unit.
   * @param x The x-coordinate of the unit.
   * @param y The y-coordinate of the unit.
   * @param face The direction that the unit will be facing in degrees.
   */
  public static create(
    owner: MapPlayer,
    unitId: number,
    x: number,
    y: number,
    face?: number
  ): Unit | undefined {
    if (face === undefined) face = bj_UNIT_FACING;
    const handle = CreateUnit(owner.handle, unitId, x, y, face);
    if (handle) {
      const obj = this.getObject(handle) as Unit;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 设置主动攻击范围
   * Sets a unit's acquire range.  This is the value that a unit uses to choose targets to
   * engage with.  Note that this is not the attack range.  When acquisition range is
   * greater than attack range, the unit will attempt to move towards acquired targets, and then attack.
   * Setting acquisition range lower than attack range in the object editor limits the
   * unit's attack range to the acquisition range, but changing a unit's acquisition range
   * with this native does not change its attack range, nor the value displayed in the UI.
   *
   * @note It is a myth that reducing acquire range with this native can limit a unit's attack range.
   */
  public set acquireRange(value: number) {
    SetUnitAcquireRange(this.handle, value);
  }

  public get acquireRange() {
    return GetUnitAcquireRange(this.handle);
  }

  /**
   * 敏捷
   */
  public get agility() {
    return GetHeroAgi(this.handle, false);
  }

  /**
   * 敏捷
   */
  public set agility(value: number) {
    SetHeroAgi(this.handle, value, true);
  }

  // public get armor() {
  //   return BlzGetUnitArmor(this.handle);
  // }

  // public set armor(armorAmount: number) {
  //   BlzSetUnitArmor(this.handle, armorAmount);
  // }

  /**
   * 单位睡眠
   */
  public set canSleep(flag: boolean) {
    UnitAddSleep(this.handle, flag);
  }

  /**
   * 单位睡眠
   */
  public get canSleep() {
    return UnitCanSleep(this.handle);
  }

  // public get collisionSize() {
  //   return BlzGetUnitCollisionSize(this.handle);
  // }

  /**
   * 单位颜色
   */
  public set color(whichColor: playercolor) {
    SetUnitColor(this.handle, whichColor);
  }

  /**
   * 当前单位命令
   */
  public get currentOrder() {
    return GetUnitCurrentOrder(this.handle);
  }

  /**
   * 默认主动攻击范围
   */
  public get defaultAcquireRange() {
    return GetUnitDefaultAcquireRange(this.handle);
  }

  /**
   * 默认飞行高度
   */
  public get defaultFlyHeight() {
    return GetUnitDefaultFlyHeight(this.handle);
  }

  /**
   * 默认移动速度
   */
  public get defaultMoveSpeed() {
    return GetUnitDefaultMoveSpeed(this.handle);
  }

  /**
   * 默认转向速度
   * Returns a unit's default propulsion window angle in degrees.
   * @note This function is the odd case in the asymmetric prop window API, since the
   * other prop window natives use radians.
   */
  public get defaultPropWindow() {
    return GetUnitDefaultPropWindow(this.handle);
  }

  /**
   * 默认转向速度
   */
  public get defaultTurnSpeed() {
    return GetUnitDefaultTurnSpeed(this.handle);
  }

  /**
   * 经验值
   */
  public get experience() {
    return GetHeroXP(this.handle);
  }

  /**
   * 经验值
   */
  public set experience(newXpVal: number) {
    SetHeroXP(this.handle, newXpVal, true);
  }

  /**
   * 面向角度
   */
  public set facing(value: number) {
    SetUnitFacing(this.handle, value);
  }

  /**
   * 面向角度
   * @returns The units facing in degrees.
   */
  public get facing() {
    return GetUnitFacing(this.handle);
  }

  /**
   * 单位提供人口数量
   */
  public get foodMade() {
    return GetUnitFoodMade(this.handle);
  }

  /**
   * 单位使用人口数量
   */
  public get foodUsed() {
    return GetUnitFoodUsed(this.handle);
  }

  /**
   * 单位忽略报警开关
   */
  public get ignoreAlarmToggled() {
    return UnitIgnoreAlarmToggled(this.handle);
  }

  /**
   * 智力
   */
  public get intelligence() {
    return GetHeroInt(this.handle, false);
  }

  /**
   * 智力
   */
  public set intelligence(value: number) {
    SetHeroInt(this.handle, value, true);
  }

  /**
   * 单位物品栏大小
   */
  public get inventorySize() {
    return UnitInventorySize(this.handle);
  }

  /**
   * 设置单位 无敌
   * Renders a unit invulnerable/lifts that specific invulnerability.
   *
   * @note The native seems to employ the `'Avul'` ability, which is defined in the default AbilityData.slk.
   * If there is no `'Avul'` defined, this will crash the game.
   */
  public set invulnerable(flag: boolean) {
    SetUnitInvulnerable(this.handle, flag);
  }

  // public get invulnerable() {
  //   return BlzIsUnitInvulnerable(this.handle);
  // }

  public get level() {
    return GetUnitLevel(this.handle);
  }

  // public get localZ() {
  //   return BlzGetLocalUnitZ(this.handle);
  // }

  /**
   * 魔法
   */
  public get mana() {
    return this.getState(UNIT_STATE_MANA);
  }

  /**
   * 魔法
   */
  public set mana(value: number) {
    this.setState(UNIT_STATE_MANA, value);
  }

  /**
   * 最大生命值
   */
  public get maxLife() {
    return GetUnitState(this.handle, UNIT_STATE_MAX_LIFE);
    // return BlzGetUnitMaxHP(this.handle);
  }

  /**
   * 最大生命值
   */
  public set maxLife(value: number) {
    // BlzSetUnitMaxHP(this.handle, value);
    SetUnitState(this.handle, UNIT_STATE_MAX_LIFE, value);
  }

  /**
   * 最大魔法值
   */
  public get maxMana() {
    return GetUnitState(this.handle, UNIT_STATE_MAX_MANA);
    // return BlzGetUnitMaxMana(this.handle);
  }

  /**
   * 最大魔法值
   */
  public set maxMana(value: number) {
    SetUnitState(this.handle, UNIT_STATE_MAX_MANA, value);
    // BlzSetUnitMaxMana(this.handle, value);
  }

  /**
   * 移动速度
   */
  public set moveSpeed(value: number) {
    SetUnitMoveSpeed(this.handle, value);
  }

  /**
   * 移动速度
   */
  public get moveSpeed() {
    return GetUnitMoveSpeed(this.handle);
  }

  /**
   * 名字
   * @async
   */
  get name() {
    return GetUnitName(this.handle) ?? "";
  }

  // set name(value: string) {
  //   BlzSetUnitName(this.handle, value);
  // }

  // public set nameProper(value: string) {
  //   BlzSetHeroProperName(this.handle, value);
  // }

  /**
   * 英雄的姓名
   * Returns the hero's "Proper Name", which is the name displayed above the level bar.
   *
   * @note Will return 'null' on non-hero units.
   * @note Will return 'null' on illusions.
   */
  public get nameProper() {
    return GetHeroProperName(this.handle) ?? "";
  }

  /**
   * 所属玩家
   * @deprecated use getOwner/setOwner instead.
   */
  public set owner(whichPlayer: MapPlayer) {
    SetUnitOwner(this.handle, whichPlayer.handle, true);
  }

  /**
   * 所属玩家
   * @deprecated use getOwner/setOwner instead.
   */
  public get owner(): MapPlayer {
    return MapPlayer.fromHandle(
      GetOwningPlayer(this.handle) as player
    ) as MapPlayer;
  }

  /**
   * 暂停单位
   * Pauses a unit. A paused unit has the following properties:
   * 1. Buffs/effects are suspended
   * 2. Orders are stored when paused and fired on unpause
   * 3. The paused unit does not accept powerups. `addItem` returns true but the item is not picked up
   */
  public set paused(flag: boolean) {
    PauseUnit(this.handle, flag);
  }

  /**
   * 暂停单位
   * @returns true if the unit is paused
   */
  public get paused() {
    return IsUnitPaused(this.handle);
  }

  /**
   * 点
   * @deprecated use getPoint/setPoint instead.
   */
  public get point() {
    return Point.fromHandle(GetUnitLoc(this.handle) as location) as Point;
  }

  /**
   * 点
   * @deprecated use getPoint/setPoint instead.
   */
  public set point(whichPoint: Point) {
    SetUnitPositionLoc(this.handle, whichPoint.handle);
  }

  /**
   * 单位的 附加值
   */
  public get pointValue() {
    return GetUnitPointValue(this.handle);
  }

  /**
   * 改变单位转向角度
   * Sets a unit's propulsion window to the specified angle (in radians).
   * The propulsion window determines at which facing angle difference to the target
   * command's location (move, attack, patrol, smart) a unit will begin to move if
   * movement is required to fulfil the command, or if it will turn without movement.
   * A propulsion window of 0 makes the unit unable to move at all.
   * A propulsion window of 180 will force it to start moving as soon as the command
   * is given (if movement is required). In practice, this means that setting a
   * unit's prop window to 0 will prevent it from attacking.
   *
   * http://www.hiveworkshop.com/forums/2391397-post20.html

   * @param newPropWindowAngle The propulsion window angle to assign. Should be in radians.
   */
  public set propWindow(newPropWindowAngle: number) {
    SetUnitPropWindow(this.handle, newPropWindowAngle);
  }

  /**
   * 单位转向角度
   * Returns a unit's propulsion window angle in radians.
   */
  public get propWindow() {
    return GetUnitPropWindow(this.handle);
  }

  /**
   * 单位的种族
   */
  public get race() {
    return GetUnitRace(this.handle);
  }

  /**
   * 单位 聚集点
   */
  public get rallyDestructable() {
    return Destructable.fromHandle(GetUnitRallyDestructable(this.handle));
  }

  /**
   * 聚集点
   */
  public get rallyPoint() {
    return Point.fromHandle(GetUnitRallyPoint(this.handle));
  }

  /**
   * 拥有源聚集点单位
   */
  public get rallyUnit() {
    return Unit.fromHandle(GetUnitRallyUnit(this.handle));
  }

  /**
   * 设置金矿资源
   */
  public set resourceAmount(amount: number) {
    SetResourceAmount(this.handle, amount);
  }

  /**
   * 黄金资源数量
   */
  public get resourceAmount() {
    return GetResourceAmount(this.handle);
  }

  // public get selectable() {
  //   return BlzIsUnitSelectable(this.handle);
  // }

  // public set selectionScale(scale: number) {
  //   this.setField(UNIT_RF_SELECTION_SCALE, scale);
  // }

  // public get selectionScale() {
  //   const result = this.getField(UNIT_RF_SELECTION_SCALE);
  //   return typeof result === "number" ? result : 0;
  // }

  /**
   * 显示/隐藏 [R]
   */
  public set show(flag: boolean) {
    ShowUnit(this.handle, flag);
  }

  /**
   * 显示/隐藏 [R]
   */
  public get show() {
    return !IsUnitHidden(this.handle);
  }

  // public get skin() {
  //   return BlzGetUnitSkin(this.handle);
  // }

  // public set skin(skinId: number) {
  //   BlzSetUnitSkin(this.handle, skinId);
  // }

  /**
   * 未用完的技能点数
   * Returns the units available skill points.
   */
  public get skillPoints() {
    return GetHeroSkillPoints(this.handle);
  }

  /**
   * 添加剩余技能点 [R]
   * Adds the amount to the units available skill points. Calling with a negative
   * number reduces the skill points by that amount.
   * Returns false if the amount of available skill points is already zero and
   * if it's called with any non-positive number.
   * Returns true in any other case.
   * @note If `skillPointDelta` is greater than the amount of skillpoints the hero
   * actually can spend (like 9 for three 3-level abilities) only that amount will
   * be added. Negative `skillPointDelta` works as expected.
   */
  public set skillPoints(skillPointDelta: number) {
    UnitModifySkillPoints(this.handle, skillPointDelta);
  }

  /**
   * 单位在睡眠
   */
  public get sleeping() {
    return UnitIsSleeping(this.handle);
  }

  /**
   * 力量
   */
  public get strength() {
    return GetHeroStr(this.handle, false);
  }

  /**
   * 力量
   */
  public set strength(value: number) {
    SetHeroStr(this.handle, value, true);
  }

  /**
   * 设定单位转向速度
   */
  public set turnSpeed(value: number) {
    SetUnitTurnSpeed(this.handle, value);
  }

  /**
   * 设定单位转向速度
   */
  public get turnSpeed() {
    return GetUnitTurnSpeed(this.handle);
  }

  /**
   * 单位的类型
   */
  public get typeId() {
    return GetUnitTypeId(this.handle);
  }

  /**
   * 单位的类型
   */
  public get userData() {
    return GetUnitUserData(this.handle);
  }

  /**
   * 单位自定义值
   * Sets a single custom integer for a unit.
   *
   * @note This value is not used by any standard mechanisms in Warcraft III.
   */
  public set userData(value: number) {
    SetUnitUserData(this.handle, value);
  }

  /**
   * 传送门激活
   */
  public set waygateActive(flag: boolean) {
    WaygateActivate(this.handle, flag);
  }

  /**
   * 传送门激活
   */
  public get waygateActive() {
    return WaygateIsActive(this.handle);
  }

  /**
   * @bug If the unit is loaded into a zeppelin this will not return the position
   * of the zeppelin but the last position of the unit before it was loaded into
   * the zeppelin.
   */
  public override get x() {
    return GetUnitX(this.handle);
  }

  /**
   * @note If the unit has movementspeed of zero the unit will be moved but the model of the unit will not move.
   * @note This does not cancel orders of the unit. `setPosition` does cancel orders.
   */
  public override set x(value: number) {
    SetUnitX(this.handle, value);
  }

  public override get y() {
    return GetUnitY(this.handle);
  }

  /**
   * @note If the unit has movementspeed of zero the unit will be moved but the model of the unit will not move.
   * @note This does not cancel orders of the unit. `setPosition` does cancel orders.
   */
  public override set y(value: number) {
    SetUnitY(this.handle, value);
  }

  // /**
  //  * @async
  //  */
  // public get z() {
  //   return BlzGetUnitZ(this.handle);
  // }

  /**
   * 添加技能
   */
  public addAbility(abilityId: number) {
    return UnitAddAbility(this.handle, abilityId);
  }

  /**
   * 单位动画附加名
   */
  public addAnimationProps(animProperties: string, add: boolean) {
    AddUnitAnimationProperties(this.handle, animProperties, add);
  }

  /**
   * 增加经验值
   * Adds the input value of experience to the hero unit specified.
   *
   * If the experience added exceeds the amount required for the hero to gain a level,
   * then it will force the unit to gain a level and the remaining experience will spill over for the next level.
   *
   * @bug Adding negative value to experience will decrease it
   * by the stated value, but won't lower the level even if the experience value
   * after deduction is lower than the lower bound of the experience required to get
   * the stated level.
   * @bug If the value will become lower than zero, the experience won't be negative, instead of it it'll be equal
   * to `4294967296+(supposed_negative_experience_value)`.
   * @param xpToAdd The amount of experience to add to the hero unit.
   * @param showEyeCandy If the boolean input is true, then the hero-level-gain
   * effect will be shown if the hero gains a level from the added experience.
   */
  public addExperience(xpToAdd: number, showEyeCandy: boolean) {
    AddHeroXP(this.handle, xpToAdd, showEyeCandy);
  }

  /**
   * 闪动指示器(对单位) [R]
   */
  public addIndicator(red: number, blue: number, green: number, alpha: number) {
    UnitAddIndicator(this.handle, red, blue, green, alpha);
  }

  /**
   * 给予物品 [R]
   */
  public addItem(whichItem: Item) {
    return UnitAddItem(this.handle, whichItem.handle);
  }

  /**
   * 给予物品 [R]
   */
  public addItemById(itemId: number) {
    return Item.fromHandle(UnitAddItemById(this.handle, itemId));
  }

  /**
   * 新建物品到指定物品栏 [R]
   */
  public addItemToSlotById(itemId: number, itemSlot: number) {
    return UnitAddItemToSlotById(this.handle, itemId, itemSlot);
  }

  /**
   * 增加 物品-类型 (到商店)
   */
  public addItemToStock(
    itemId: number,
    currentStock: number,
    stockMax: number
  ) {
    AddItemToStock(this.handle, itemId, currentStock, stockMax);
  }

  /**
   * 添加金矿资源
   * Adds the amount more gold to the whichUnit gold mine.
   *
   * @bug If the value after adding negative amount will be less than zero, then it
   * will display negative resource amount, but if some peasant or peon will try to
   * gather resources from such a mine, he will bring back 0 gold and the mine will
   * be auto-destroyed.
   * @param amount The amount of resources to add to the unit.
   */
  public addResourceAmount(amount: number) {
    AddResourceAmount(this.handle, amount);
  }

  /**
   * 设置单位睡眠(无论何时)
   */
  public addSleepPerm(add: boolean) {
    UnitAddSleepPerm(this.handle, add);
  }

  /**
   * 添加类别 [R]
   */
  public addType(whichUnitType: unittype) {
    return UnitAddType(this.handle, whichUnitType);
  }

  /**
   * 增加 单位-类型 (到商店)
   */
  public addUnitToStock(
    unitId: number,
    currentStock: number,
    stockMax: number
  ) {
    AddUnitToStock(this.handle, unitId, currentStock, stockMax);
  }

  /**
   * 设置生命周期 [R]
   */
  public applyTimedLife(buffId: number, duration: number) {
    UnitApplyTimedLife(this.handle, buffId, duration);
  }

  /**
   * 添加声音
   */
  public attachSound(sound: Sound) {
    AttachSoundToUnit(sound.handle, this.handle);
  }

  // public cancelTimedLife() {
  //   BlzUnitCancelTimedLife(this.handle);
  // }

  /**
   * 单位在睡觉
   */
  public canSleepPerm() {
    return UnitCanSleepPerm(this.handle);
  }

  /**
   * 拥有Buff数量 [R]
   */
  public countBuffs(
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
  ) {
    return UnitCountBuffsEx(
      this.handle,
      removePositive,
      removeNegative,
      magic,
      physical,
      timedLife,
      aura,
      autoDispel
    );
  }

  /**
   * 伤害区域 [R]
   */
  public damageAt(
    delay: number,
    radius: number,
    x: number,
    y: number,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
  ) {
    return UnitDamagePoint(
      this.handle,
      delay,
      radius,
      x,
      y,
      amount,
      attack,
      ranged,
      attackType,
      damageType,
      weaponType
    );
  }

  /**
   * 伤害区目标 [R]
   * Deals damage to target widget from a source unit.
   *
   * @note For some insight about the different configurations of the different types see [this post](http://www.wc3c.net/showpost.php?p=1030046&postcount=19).
   * @param target The target being damaged.
   * @param amount How much damage is being dealt.
   * @param attack Consider the damage dealt as being an attack.
   * @param ranged Consider the damage dealt as being from a ranged source.
   * @param attackType
   * @param damageType
   * @param weaponType
   */
  public damageTarget(
    target: widget,
    amount: number,
    attack: boolean,
    ranged: boolean,
    attackType: attacktype,
    damageType: damagetype,
    weaponType: weapontype
  ) {
    return UnitDamageTarget(
      this.handle,
      target,
      amount,
      attack,
      ranged,
      attackType,
      damageType,
      weaponType
    );
  }

  /**
   * 降低等级 [R]
   * Decreases the level of a unit's ability by 1. The level will not go below 1.
   * @param abilCode The four digit rawcode representation of the ability.
   * @returns The new ability level.
   */
  public decAbilityLevel(abilCode: number) {
    return DecUnitAbilityLevel(this.handle, abilCode);
  }

  /**
   * Instantly removes the unit from the game.
   */
  public destroy() {
    RemoveUnit(this.handle);
  }

  // public disableAbility(abilId: number, flag: boolean, hideUI: boolean) {
  //   BlzUnitDisableAbility(this.handle, abilId, flag, hideUI);
  // }

  /**
   * 发布丢弃物品命令(指定坐标) [R]
   */
  public dropItem(whichItem: Item, x: number, y: number) {
    return UnitDropItemPoint(this.handle, whichItem.handle, x, y);
  }

  /**
   * 移动物品到物品栏 [R]
   */
  public dropItemFromSlot(whichItem: Item, slot: number) {
    return UnitDropItemSlot(this.handle, whichItem.handle, slot);
  }

  /**
   * 移动物品到物品栏 [R]
   */
  public dropItemTarget(
    whichItem: Item,
    target: Widget /* | Unit | Item | Destructable */
  ) {
    return UnitDropItemTarget(this.handle, whichItem.handle, target.handle);
  }

  // public endAbilityCooldown(abilCode: number) {
  //   BlzEndUnitAbilityCooldown(this.handle, abilCode);
  // }

  // public getAbility(abilId: number) {
  //   return BlzGetUnitAbility(this.handle, abilId);
  // }

  // public getAbilityByIndex(index: number) {
  //   return BlzGetUnitAbilityByIndex(this.handle, index);
  // }

  // public getAbilityCooldown(abilId: number, level: number) {
  //   return BlzGetUnitAbilityCooldown(this.handle, abilId, level);
  // }

  // public getAbilityCooldownRemaining(abilId: number) {
  //   return BlzGetUnitAbilityCooldownRemaining(this.handle, abilId);
  // }

  /**
   * 单位技能等级 [R]
   * Returns the level of the ability for the unit.
   * @note This function is **not** zero indexed.
   */
  public getAbilityLevel(abilCode: number) {
    return GetUnitAbilityLevel(this.handle, abilCode);
  }

  // public getAbilityManaCost(abilId: number, level: number) {
  //   return BlzGetUnitAbilityManaCost(this.handle, abilId, level);
  // }

  /**
   * 英雄敏捷 [R]
   */
  public getAgility(includeBonuses: boolean) {
    return GetHeroAgi(this.handle, includeBonuses);
  }

  // public getAttackCooldown(weaponIndex: number) {
  //   return BlzGetUnitAttackCooldown(this.handle, weaponIndex);
  // }

  // public getBaseDamage(weaponIndex: number) {
  //   return BlzGetUnitBaseDamage(this.handle, weaponIndex);
  // }

  // public getDiceNumber(weaponIndex: number) {
  //   return BlzGetUnitDiceNumber(this.handle, weaponIndex);
  // }

  // public getDiceSides(weaponIndex: number) {
  //   return BlzGetUnitDiceSides(this.handle, weaponIndex);
  // }

  // public getField(
  //   field: unitbooleanfield | unitintegerfield | unitrealfield | unitstringfield
  // ) {
  //   const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

  //   switch (fieldType) {
  //     case "unitbooleanfield": {
  //       const fieldBool: unitbooleanfield = field as unitbooleanfield;

  //       return BlzGetUnitBooleanField(this.handle, fieldBool);
  //     }
  //     case "unitintegerfield": {
  //       const fieldInt: unitintegerfield = field as unitintegerfield;

  //       return BlzGetUnitIntegerField(this.handle, fieldInt);
  //     }
  //     case "unitrealfield": {
  //       const fieldReal: unitrealfield = field as unitrealfield;

  //       return BlzGetUnitRealField(this.handle, fieldReal);
  //     }
  //     case "unitstringfield": {
  //       const fieldString: unitstringfield = field as unitstringfield;

  //       return BlzGetUnitStringField(this.handle, fieldString);
  //     }
  //     default:
  //       return 0;
  //   }
  // }

  /**
   * 飞行高度 (当前)
   */
  public getflyHeight() {
    return GetUnitFlyHeight(this.handle);
  }

  /**
   * 英雄等级
   */
  public getHeroLevel() {
    return GetHeroLevel(this.handle);
  }

  /**
   * 单位忽略报警
   */
  public getIgnoreAlarm(flag: boolean) {
    return UnitIgnoreAlarm(this.handle, flag);
  }

  /**
   * 英雄智力 [R]
   */
  public getIntelligence(includeBonuses: boolean) {
    return GetHeroInt(this.handle, includeBonuses);
  }

  /**
   * 单位持有物品
   */
  public getItemInSlot(slot: number) {
    return Item.fromHandle(UnitItemInSlot(this.handle, slot));
  }

  /**
   * 属性 [R]
   */
  public getState(whichUnitState: unitstate) {
    return GetUnitState(this.handle, whichUnitState);
  }

  /**
   * 力量 [R]
   */
  public getStrength(includeBonuses: boolean) {
    return GetHeroStr(this.handle, includeBonuses);
  }

  /**
   * 是否拥有buff [R]
   */
  public hasBuffs(
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
  ) {
    return UnitHasBuffsEx(
      this.handle,
      removePositive,
      removeNegative,
      magic,
      physical,
      timedLife,
      aura,
      autoDispel
    );
  }

  /**
   * 是否拥有物品 [R]
   */
  public hasItem(whichItem: Item) {
    return UnitHasItem(this.handle, whichItem.handle);
  }

  /**
   * TODO:是否拥有物品类型 [R]
   */

  // public hideAbility(abilId: number, flag: boolean) {
  //   BlzUnitHideAbility(this.handle, abilId, flag);
  // }

  /**
   * 提升技能等级 [R]
   * Increases the level of a unit's ability by 1.
   * @param abilCode The four digit rawcode representation of the ability.
   * @returns The new ability level.
   *
   * @note `incAbilityLevel` can increase an abilities level to maxlevel+1. On maxlevel+1 all ability fields are 0.
   *
   * http://www.wc3c.net/showthread.php?p=1029039#post1029039
   * http://www.hiveworkshop.com/forums/lab-715/silenceex-everything-you-dont-know-about-silence-274351/.
   */
  public incAbilityLevel(abilCode: number) {
    return IncUnitAbilityLevel(this.handle, abilCode);
  }

  /**
   * 是玩家组里玩家的单位
   */
  public inForce(whichForce: Force) {
    return IsUnitInForce(this.handle, whichForce.handle);
  }

  /**
   * 在单位组
   */
  public inGroup(whichGroup: Group) {
    return IsUnitInGroup(this.handle, whichGroup.handle);
  }

  /**
   * 在点的范围内
   * Check if a unit is within range of a point. Collision size is taken into account.
   */
  public inRange(x: number, y: number, distance: number) {
    return IsUnitInRangeXY(this.handle, x, y, distance);
  }

  /**
   * 在指定点范围内 [R]
   * Check if a unit is within range of a point. Collision size is taken into account.
   */
  public inRangeOfPoint(whichPoint: Point, distance: number) {
    return IsUnitInRangeLoc(this.handle, whichPoint.handle, distance);
  }

  /**
   * 在指定单位范围内 [R]
   * Check if a unit is within range of a another unit. Collision size is taken into account.
   */
  public inRangeOfUnit(otherUnit: Unit, distance: number) {
    return IsUnitInRange(this.handle, otherUnit.handle, distance);
  }

  // public interruptAttack() {
  //   BlzUnitInterruptAttack(this.handle);
  // }

  /**
   * 是运输单元
   */
  public inTransport(whichTransport: Unit) {
    return IsUnitInTransport(this.handle, whichTransport.handle);
  }

  /**
   * 是否存活
   */
  public isAlive(): boolean {
    return UnitAlive(this.handle);
  }

  /**
   * 单位所属玩家的同盟玩家
   */
  public isAlly(whichPlayer: MapPlayer) {
    return IsUnitAlly(this.handle, whichPlayer.handle);
  }

  /**
   * 单位所属玩家的敌对玩家
   */
  public isEnemy(whichPlayer: MapPlayer) {
    return IsUnitEnemy(this.handle, whichPlayer.handle);
  }

  /**
   * 英雄获得经验值
   */
  public isExperienceSuspended() {
    return IsSuspendedXP(this.handle);
  }

  /**
   * 单位被战争迷雾遮挡
   */
  public isFogged(whichPlayer: MapPlayer) {
    return IsUnitFogged(this.handle, whichPlayer.handle);
  }

  /**
   * 单位类型是英雄单位
   */
  public isHero() {
    return IsHeroUnitId(this.typeId);
  }

  /**
   * 是镜像单位
   */
  public isIllusion() {
    return IsUnitIllusion(this.handle);
  }

  /**
   * 单位加载
   */
  public isLoaded() {
    return IsUnitLoaded(this.handle);
  }

  /**
   * 单位被黑色阴影遮挡
   */
  public isMasked(whichPlayer: MapPlayer) {
    return IsUnitMasked(this.handle, whichPlayer.handle);
  }

  /**
   * 玩家已选定单位
   */
  public isSelected(whichPlayer: MapPlayer) {
    return IsUnitSelected(this.handle, whichPlayer.handle);
  }

  /**
   * 发布建造命令(指定坐标) [R]
   */
  public issueBuildOrder(unit: string | number, x: number, y: number) {
    return typeof unit === "string"
      ? IssueBuildOrder(this.handle, unit, x, y)
      : IssueBuildOrderById(this.handle, unit, x, y);
  }

  /**
   * 给单位发送命令到 没有目标
   */
  public issueImmediateOrder(order: string | OrderId) {
    return typeof order === "string"
      ? IssueImmediateOrder(this.handle, order)
      : IssueImmediateOrderById(this.handle, order);
  }

  /**
   * 发布命令(指定坐标)
   */
  public issueInstantOrderAt(
    order: string | OrderId,
    x: number,
    y: number,
    instantTargetWidget: Widget
  ) {
    return typeof order === "string"
      ? IssueInstantPointOrder(
          this.handle,
          order,
          x,
          y,
          instantTargetWidget.handle
        )
      : IssueInstantPointOrderById(
          this.handle,
          order,
          x,
          y,
          instantTargetWidget.handle
        );
  }

  /**
   * 发布命令(指定单位)
   */
  public issueInstantTargetOrder(
    order: string | OrderId,
    targetWidget: Widget,
    instantTargetWidget: Widget
  ) {
    return typeof order === "string"
      ? IssueInstantTargetOrder(
          this.handle,
          order,
          targetWidget.handle,
          instantTargetWidget.handle
        )
      : IssueInstantTargetOrderById(
          this.handle,
          order,
          targetWidget.handle,
          instantTargetWidget.handle
        );
  }

  /**
   * 发布命令(指定坐标)
   */
  public issueOrderAt(order: string | OrderId, x: number, y: number) {
    return typeof order === "string"
      ? IssuePointOrder(this.handle, order, x, y)
      : IssuePointOrderById(this.handle, order, x, y);
  }

  /**
   * 给单位发送命令到 点
   */
  public issuePointOrder(order: string | OrderId, whichPoint: Point) {
    return typeof order === "string"
      ? IssuePointOrderLoc(this.handle, order, whichPoint.handle)
      : IssuePointOrderByIdLoc(this.handle, order, whichPoint.handle);
  }

  /**
   * 给单位发送命令到 单位
   */
  public issueTargetOrder(order: string | OrderId, targetWidget: Widget) {
    return typeof order === "string"
      ? IssueTargetOrder(this.handle, order, targetWidget.handle)
      : IssueTargetOrderById(this.handle, order, targetWidget.handle);
  }

  /**
   * 是单位
   * @note Useless. Use operator == instead.
   */
  public isUnit(whichSpecifiedUnit: Unit) {
    return IsUnit(this.handle, whichSpecifiedUnit.handle);
  }

  /**
   * 检查单位 分类
   * @note This native returns a boolean, which when typecasted to integer might be greater than 1. It's probably implemented via a bitset.
   * @note In past patches this native bugged when used in conditionfuncs.
   * The fix back then was to compare with true (`==true`).
   * I cannot reproduce the faulty behaviour in patch 1.27 so this is only a note.
   * @param whichUnitType
   */
  public isUnitType(whichUnitType: unittype) {
    return IsUnitType(this.handle, whichUnitType);
  }

  /**
   * 单位对于玩家可见
   */
  public isVisible(whichPlayer: MapPlayer) {
    return IsUnitVisible(this.handle, whichPlayer.handle);
  }

  /**
   * Kills the unit.
   */
  public kill() {
    KillUnit(this.handle);
  }

  /**
   * 锁定单位脸面对方向
   * Locks a unit's bone to face the target until ResetUnitLookAt is called.
   *
   * The offset coordinates ( X, Y, Z ) are taken from the target's origin.
   * The bones will lock to the lookAtTarget, offset by those coordinates. You can't
   * have both the head and the chest locked to the target at the same time.
   * @param whichBone The bone to lock onto the target. The engine only supports
   * locking the head and the chest. To lock the head, you can put in any input
   * except a null string. To lock the chest, the string must start with `"bone_chest"`.
   * All leading spaces are ignored, it is case insensitive, and anything after the
   * first non-leading space will be ignored.
   * @param lookAtTargetThe bone will be locked to face this unit.
   * @param offsetX The x-offset from lookAtTarget's origin point.
   * @param offsetY The y-offset from lookAtTarget's origin point.
   * @param offsetZ The z-offset from lookAtTarget's origin point (this already factors in the terrain Z).
   * @note The parameter `whichBone` can only move the head bones and the chest bones.
   * All other input will default to the head bone. However, the function only looks
   * for the helper named `"Bone_Head"` (or `"Bone_Chest"`) in the MDL, so you can just
   * rename a helper so that it will move that set of bones instead.
   * @note SetUnitLookAt is affected by animation speed and blend time.
   * @note [How to instantly set a unit's facing](http://www.wc3c.net/showthread.php?t=105830)
   */
  public lookAt(
    whichBone: string,
    lookAtTarget: Unit,
    offsetX: number,
    offsetY: number,
    offsetZ: number
  ) {
    SetUnitLookAt(
      this.handle,
      whichBone,
      lookAtTarget.handle,
      offsetX,
      offsetY,
      offsetZ
    );
  }

  /**
   * 设置技能永久性 [R]
   * This native is used to keep abilities when morphing units
   */
  public makeAbilityPermanent(permanent: boolean, abilityId: number) {
    UnitMakeAbilityPermanent(this.handle, permanent, abilityId);
  }

  /**
   * 添加剩余技能点 [R]
   */
  public modifySkillPoints(skillPointDelta: number) {
    return UnitModifySkillPoints(this.handle, skillPointDelta);
  }

  // public pauseEx(flag: boolean) {
  //   BlzPauseUnitEx(this.handle, flag);
  // }

  /**
   * 暂停/恢复生命周期 [R]
   */
  public pauseTimedLife(flag: boolean) {
    UnitPauseTimedLife(this.handle, flag);
  }

  /**
   * 队列单位动作
   * @param whichAnimation
   */
  public queueAnimation(whichAnimation: string) {
    QueueUnitAnimation(this.handle, whichAnimation);
  }

  /**
   * 恢复单位的防守职责
   */
  public recycleGuardPosition() {
    RecycleGuardPosition(this.handle);
  }

  /**
   * 删除技能 [R]
   */
  public removeAbility(abilityId: number) {
    return UnitRemoveAbility(this.handle, abilityId);
  }

  /**
   * 删除魔法效果(指定极性) [R]
   */
  public removeBuffs(removePositive: boolean, removeNegative: boolean) {
    UnitRemoveBuffs(this.handle, removePositive, removeNegative);
  }

  /**
   * 删除魔法效果(详细类别) [R]
   */
  public removeBuffsEx(
    removePositive: boolean,
    removeNegative: boolean,
    magic: boolean,
    physical: boolean,
    timedLife: boolean,
    aura: boolean,
    autoDispel: boolean
  ) {
    UnitRemoveBuffsEx(
      this.handle,
      removePositive,
      removeNegative,
      magic,
      physical,
      timedLife,
      aura,
      autoDispel
    );
  }

  /**
   * 忽略单位的防守职责
   */
  public removeGuardPosition() {
    RemoveGuardPosition(this.handle);
  }

  /**
   * 新建物品到指定物品栏 [R]
   * The item is removed from the Hero and placed on the ground at the Hero's feet.
   * @param whichItem The item to remove.
   */
  public removeItem(whichItem: Item) {
    UnitRemoveItem(this.handle, whichItem.handle);
  }

  /**
   * 从物品栏移除物品
   * If an item exists in the given slot, it is removed from the Hero and placed on
   * the ground at the Hero's feed
   * @param itemSlot
   */
  public removeItemFromSlot(itemSlot: number) {
    return Item.fromHandle(UnitRemoveItemFromSlot(this.handle, itemSlot));
  }

  /**
   * 从物品栏移除物品根据物品类型
   * @param itemId
   */
  public removeItemFromStock(itemId: number) {
    RemoveItemFromStock(this.handle, itemId);
  }

  /**
   * 移除类型
   * @param whichUnitType
   */
  public removeType(whichUnitType: unittype) {
    return UnitAddType(this.handle, whichUnitType);
  }

  /**
   * 删除 单位-类型 (从商店)
   */
  public removeUnitFromStock(itemId: number) {
    RemoveUnitFromStock(this.handle, itemId);
  }

  /**
   * 重设单位技能Cool down
   */
  public resetCooldown() {
    UnitResetCooldown(this.handle);
  }

  /**
   * 重置单位面对方向
   * Unlocks the bone oriented by `lookAt`, allowing it to move in accordance to the unit's regular animations.
   */
  public resetLookAt() {
    ResetUnitLookAt(this.handle);
  }

  /**
   * 立即复活(指定坐标) [R]
   */
  public revive(x: number, y: number, doEyecandy: boolean) {
    return ReviveHero(this.handle, x, y, doEyecandy);
  }

  /**
   * 复活英雄（立即）
   */
  public reviveAtPoint(whichPoint: Point, doEyecandy: boolean) {
    return ReviveHeroLoc(this.handle, whichPoint.handle, doEyecandy);
  }

  /**
   * 选择单位
   */
  public select(flag: boolean) {
    SelectUnit(this.handle, flag);
  }

  /**
   * 英雄学习技能
   */
  public selectSkill(abilCode: number) {
    SelectHeroSkill(this.handle, abilCode);
  }

  // public setAbilityCooldown(abilId: number, level: number, cooldown: number) {
  //   BlzSetUnitAbilityCooldown(this.handle, abilId, level, cooldown);
  // }

  /**
   * 设置技能等级 [R]
   */
  public setAbilityLevel(abilCode: number, level: number) {
    return SetUnitAbilityLevel(this.handle, abilCode, level);
  }

  // public setAbilityManaCost(abilId: number, level: number, manaCost: number) {
  //   BlzSetUnitAbilityManaCost(this.handle, abilId, level, manaCost);
  // }

  /**
   * 设置英雄敏捷 [R]
   */
  public setAgility(value: number, permanent: boolean) {
    SetHeroAgi(this.handle, value, permanent);
  }

  /**
   * 播放单位动作
   */
  public setAnimation(whichAnimation: string | number) {
    if (typeof whichAnimation === "string") {
      SetUnitAnimation(this.handle, whichAnimation);
    } else {
      SetUnitAnimationByIndex(this.handle, whichAnimation);
    }
  }

  /**
   * 播放单位动作 (指定概率)
   */
  public setAnimationWithRarity(whichAnimation: string, rarity: raritycontrol) {
    SetUnitAnimationWithRarity(this.handle, whichAnimation, rarity);
  }

  // public setAttackCooldown(cooldown: number, weaponIndex: number) {
  //   BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex);
  // }

  // public setBaseDamage(baseDamage: number, weaponIndex: number) {
  //   BlzSetUnitBaseDamage(this.handle, baseDamage, weaponIndex);
  // }

  /**
   * 改变单位动画播放速度(按倍数) [R]
   */
  public setBlendTime(timeScale: number) {
    SetUnitBlendTime(this.handle, timeScale);
  }

  /**
   * 设置建筑物 建筑升级比
   */
  public setConstructionProgress(constructionPercentage: number) {
    UnitSetConstructionProgress(this.handle, constructionPercentage);
  }

  /**
   * 锁定指定单位的警戒点 [R]
   */
  public setCreepGuard(creepGuard: boolean) {
    SetUnitCreepGuard(this.handle, creepGuard);
  }

  // public setDiceNumber(diceNumber: number, weaponIndex: number) {
  //   BlzSetUnitDiceNumber(this.handle, diceNumber, weaponIndex);
  // }

  // public setDiceSides(diceSides: number, weaponIndex: number) {
  //   BlzSetUnitDiceSides(this.handle, diceSides, weaponIndex);
  // }

  /**
   * 设置英雄经验值
   */
  public setExperience(newXpVal: number, showEyeCandy: boolean) {
    SetHeroXP(this.handle, newXpVal, showEyeCandy);
  }

  /**
   * 复活英雄（立即）
   */
  public setExploded(exploded: boolean) {
    SetUnitExploded(this.handle, exploded);
  }

  // public setFacingEx(facingAngle: number) {
  //   BlzSetUnitFacingEx(this.handle, facingAngle);
  // }

  // public setField(
  //   field:
  //     | unitbooleanfield
  //     | unitintegerfield
  //     | unitrealfield
  //     | unitstringfield,
  //   value: boolean | number | string
  // ) {
  //   const fieldType = field.toString().substr(0, field.toString().indexOf(":"));

  //   if (fieldType === "unitbooleanfield" && typeof value === "boolean") {
  //     return BlzSetUnitBooleanField(
  //       this.handle,
  //       field as unitbooleanfield,
  //       value
  //     );
  //   }
  //   if (fieldType === "unitintegerfield" && typeof value === "number") {
  //     return BlzSetUnitIntegerField(
  //       this.handle,
  //       field as unitintegerfield,
  //       value
  //     );
  //   }
  //   if (fieldType === "unitrealfield" && typeof value === "number") {
  //     return BlzSetUnitRealField(this.handle, field as unitrealfield, value);
  //   }
  //   if (fieldType === "unitstringfield" && typeof value === "string") {
  //     return BlzSetUnitStringField(
  //       this.handle,
  //       field as unitstringfield,
  //       value
  //     );
  //   }

  //   return false;
  // }

  /**
   * 设定单位飞行高度
   * @param value
   * @param rate
   */
  public setflyHeight(value: number, rate: number) {
    SetUnitFlyHeight(this.handle, value, rate);
  }

  /**
   * 设置英雄等级
   */
  public setHeroLevel(level: number, showEyeCandy: boolean) {
    SetHeroLevel(this.handle, level, showEyeCandy);
  }

  /**
   * 设置英雄智力 [R]
   */
  public setIntelligence(value: number, permanent: boolean) {
    SetHeroInt(this.handle, value, permanent);
  }

  /**
   * 限制物品的位置 (从商店)
   */
  public setItemTypeSlots(slots: number) {
    SetItemTypeSlots(this.handle, slots);
  }

  /**
   * 改变单位所有者
   */
  public setOwner(whichPlayer: MapPlayer, changeColor = true) {
    SetUnitOwner(this.handle, whichPlayer.handle, changeColor);
  }

  // TODO: test if GetOwningPlayer() ever returns null.
  public getOwner() {
    return MapPlayer.fromHandle(GetOwningPlayer(this.handle));
  }

  /**
   * 移动单位(立即)(指定坐标) [R]
   */
  public setPoint(point: Point) {
    SetUnitPositionLoc(this.handle, point.handle);
  }

  /**
   * @bug If the unit is loaded into a zeppelin this will not return the position
   * of the zeppelin but the last position of the unit before it was loaded into
   * the zeppelin.
   */
  public getPoint() {
    return Point.fromHandle(GetUnitLoc(this.handle));
  }

  /**
   * 设置碰撞 打开/关闭
   */
  public setPathing(flag: boolean) {
    SetUnitPathing(this.handle, flag);
  }

  /**
   * @note This cancels the orders of the unit. If you want to move a unit without canceling its orders set `x`/`y`.
   */
  public setPosition(x: number, y: number) {
    SetUnitPosition(this.handle, x, y);
  }

  /**
   * 设置可否营救(对玩家) [R]
   */
  public setRescuable(byWhichPlayer: MapPlayer, flag: boolean) {
    SetUnitRescuable(this.handle, byWhichPlayer.handle, flag);
  }

  /**
   * 设置营救单位的营救距离
   */
  public setRescueRange(range: number) {
    SetUnitRescueRange(this.handle, range);
  }

  /**
   * 改变单位尺寸(按倍数) [R]
   * @bug Only takes scaleX into account and uses scaleX for all three dimensions.
   * @param scaleX This is actually the scale for *all* dimensions
   * @param scaleY This parameter is not taken into account
   * @param scaleZ This parameter is not taken into account
   */
  public setScale(scaleX: number, scaleY: number, scaleZ: number) {
    SetUnitScale(this.handle, scaleX, scaleY, scaleZ);
  }

  /**
   * 设置单位属性 [R]
   */
  public setState(whichUnitState: unitstate, newVal: number) {
    SetUnitState(this.handle, whichUnitState, newVal);
  }

  /**
   * 设置英雄力量 [R]
   */
  public setStrength(value: number, permanent: boolean) {
    SetHeroStr(this.handle, value, permanent);
  }

  /**
   * 改变单位动画播放速度(按倍数) [R]
   */
  public setTimeScale(timeScale: number) {
    SetUnitTimeScale(this.handle, timeScale);
  }

  // public setUnitAttackCooldown(cooldown: number, weaponIndex: number) {
  //   BlzSetUnitAttackCooldown(this.handle, cooldown, weaponIndex);
  // }

  /**
   * 限制单位的位置 (从商店)
   */
  public setUnitTypeSlots(slots: number) {
    SetUnitTypeSlots(this.handle, slots);
  }

  /**
   * 设置建筑物 科技升级比
   */
  public setUpgradeProgress(upgradePercentage: number) {
    UnitSetUpgradeProgress(this.handle, upgradePercentage);
  }

  /**
   * 设置单位小地图图标
   */
  public setUseAltIcon(flag: boolean) {
    UnitSetUsesAltIcon(this.handle, flag);
  }

  /**
   * 允许/禁止 人口占用 [R]
   */
  public setUseFood(useFood: boolean) {
    SetUnitUseFood(this.handle, useFood);
  }

  /**
   * 改变单位的颜色(RGB:0-255) [R]
   * Sets the unit's color to the color defined by (red,green,blue,alpha).
   * @param red An integer from 0-255 determining the amount of red color.
   * @param green An integer from 0-255 determining the amount of green color.
   * @param blue An integer from 0-255 determining the amount of blue color.
   * @param alpha An integer from 0-255 determining the amount of alpha color.
   */
  public setVertexColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    SetUnitVertexColor(this.handle, red, green, blue, alpha);
  }

  /**
   * 共享视野 [R]
   */
  public shareVision(whichPlayer: MapPlayer, share: boolean) {
    UnitShareVision(this.handle, whichPlayer.handle, share);
  }

  // public showTeamGlow(show: boolean) {
  //   BlzShowUnitTeamGlow(this.handle, show);
  // }

  // public startAbilityCooldown(abilCode: number, cooldown: number) {
  //   BlzStartUnitAbilityCooldown(this.handle, abilCode, cooldown);
  // }

  /**
   * 降低等级 [R]
   */
  public stripLevels(howManyLevels: number) {
    return UnitStripHeroLevel(this.handle, howManyLevels);
  }

  /**
   * 暂停尸体腐烂 [R]
   */
  public suspendDecay(suspend: boolean) {
    UnitSuspendDecay(this.handle, suspend);
  }

  /**
   * 允许/禁止经验获取 [R]
   */
  public suspendExperience(flag: boolean) {
    SuspendHeroXP(this.handle, flag);
  }

  /**
   * 使用物品
   */
  public useItem(whichItem: Item) {
    return UnitUseItem(this.handle, whichItem.handle);
  }

  /**
   * 使用物品(指定坐标)
   */
  public useItemAt(whichItem: Item, x: number, y: number) {
    return UnitUseItemPoint(this.handle, whichItem.handle, x, y);
  }

  /**
   * 对单位使用物品
   */
  public useItemTarget(whichItem: Item, target: Widget) {
    return UnitUseItemTarget(this.handle, whichItem.handle, target.handle);
  }

  /**
   * 单位在睡眠
   */
  public wakeUp() {
    UnitWakeUp(this.handle);
  }

  /**
   * 传送门目的地X坐标
   */
  public waygateGetDestinationX() {
    return WaygateGetDestinationX(this.handle);
  }

  /**
   * 传送门目的地Y坐标
   */
  public waygateGetDestinationY() {
    return WaygateGetDestinationY(this.handle);
  }

  /**
   * 设置传送门目的坐标 [R]
   */
  public waygateSetDestination(x: number, y: number) {
    WaygateSetDestination(this.handle, x, y);
  }

  // 1.33.0 Functions

  // /**
  //  * Get how many orders in this unit's order queue
  //  *
  //  * @returns Order counts
  //  */
  // public getOrderCount() {
  //   return BlzGetUnitOrderCount(this.handle);
  // }

  // /**
  //  * Clears either all orders or only queued up orders
  //  *
  //  * @param onlyQueued Whether clears only queued orders
  //  */
  // public clearOrders(onlyQueued: boolean) {
  //   BlzUnitClearOrders(this.handle, onlyQueued);
  // }

  // /**
  //  * Stops the current order and optionally clears the queue
  //  *
  //  * @param clearQueue Whether clears order queue
  //  */
  // public forceStopOrder(clearQueue: boolean) {
  //   BlzUnitForceStopOrder(this.handle, clearQueue);
  // }

  // /**
  //  * Add a build order into unit's order queue
  //  *
  //  * @param unitId Build which unit
  //  * @param x X coordinate of where you want to build
  //  * @param y Y coordinate of where you want to build
  //  * @returns Is order ordered successfully
  //  */
  // public queueBuildOrderById(unitId: number, x: number, y: number) {
  //   return BlzQueueBuildOrderById(this.handle, unitId, x, y);
  // }

  // /**
  //  * Add an immediate order into unit's order queue
  //  *
  //  * @param orderId Which order
  //  * @returns Is order ordered successfully
  //  */
  // public queueImmediateOrderById(orderId: number) {
  //   return BlzQueueImmediateOrderById(this.handle, orderId);
  // }

  // /**
  //  * Add a point order into unit's order queue
  //  *
  //  * @param orderId Order id
  //  * @param x X coordinate
  //  * @param y Y coordinate
  //  * @returns Is order ordered successfully
  //  */
  // public queuePointOrderById(orderId: number, x: number, y: number) {
  //   return BlzQueuePointOrderById(this.handle, orderId, x, y);
  // }

  // /**
  //  * Add a target order into unit's order queue
  //  *
  //  * @param orderId Order id
  //  * @param targetWidget Target widget
  //  * @returns Is order ordered successfully
  //  */
  // public queueTargetOrderById(orderId: number, targetWidget: Widget) {
  //   return BlzQueueTargetOrderById(this.handle, orderId, targetWidget.handle);
  // }

  // /**
  //  * Add an instant point order into unit's order queue
  //  *
  //  * @param orderId Order Id
  //  * @param x X coordinate
  //  * @param y Y coordinate
  //  * @param instantTargetWidget Instant target
  //  * @returns Is order ordered successfully
  //  */
  // public queueInstantPointOrderById(
  //   orderId: number,
  //   x: number,
  //   y: number,
  //   instantTargetWidget: Widget
  // ) {
  //   return BlzQueueInstantPointOrderById(
  //     this.handle,
  //     orderId,
  //     x,
  //     y,
  //     instantTargetWidget.handle
  //   );
  // }

  // /**
  //  * Add an instant target order into unit's order queue
  //  *
  //  * @param orderId Order Id
  //  * @param targetWidget Target
  //  * @param instantTargetWidget Instant target
  //  * @returns Is order ordered successfully
  //  */
  // public queueInstantTargetOrderById(
  //   orderId: number,
  //   targetWidget: Widget,
  //   instantTargetWidget: Widget
  // ) {
  //   return BlzQueueInstantTargetOrderById(
  //     this.handle,
  //     orderId,
  //     targetWidget.handle,
  //     instantTargetWidget.handle
  //   );
  // }

  // /**
  //  * Add a neutral immediate order into unit's order queue
  //  *
  //  * @param player Player
  //  * @param unitId Unit id
  //  * @returns Is order ordered successfully
  //  */
  // public queueNeutralImmediateOrderById(player: MapPlayer, unitId: number) {
  //   return BlzQueueNeutralImmediateOrderById(
  //     player.handle,
  //     this.handle,
  //     unitId
  //   );
  // }

  // /**
  //  * Add a neutral point order into unit's order queue
  //  *
  //  * @param player Player
  //  * @param unitId Unit id
  //  * @param x X coordinate
  //  * @param y Y coordinate
  //  * @returns Is order ordered successfully
  //  */
  // public queueNeutralPointOrderById(
  //   player: MapPlayer,
  //   unitId: number,
  //   x: number,
  //   y: number
  // ) {
  //   return BlzQueueNeutralPointOrderById(
  //     player.handle,
  //     this.handle,
  //     unitId,
  //     x,
  //     y
  //   );
  // }

  // /**
  //  * Add a neutral target order into unit's order queue
  //  *
  //  * @param player Player
  //  * @param unitId Unit id
  //  * @param target Target
  //  * @returns Is order ordered successfully
  //  */
  // public queueNeutralTargetOrderById(
  //   player: MapPlayer,
  //   unitId: number,
  //   target: Widget
  // ) {
  //   return BlzQueueNeutralTargetOrderById(
  //     player.handle,
  //     this.handle,
  //     unitId,
  //     target.handle
  //   );
  // }

  // 1.33.0 Functions end

  /**
   * 单位-类型 提供的人口
   */
  public static foodMadeByType(unitId: number) {
    return GetFoodMade(unitId);
  }

  /**
   * 单位-类型 使用的人口
   */
  public static foodUsedByType(unitId: number) {
    return GetFoodUsed(unitId);
  }

  /**
   * 选取的单位
   */
  public static fromEnum() {
    return this.fromHandle(GetEnumUnit());
  }

  /**
   * 触发单位
   */
  public static override fromEvent() {
    return this.fromHandle(GetTriggerUnit());
  }

  /**
   * 指定单位
   */
  public static fromFilter() {
    return this.fromHandle(GetFilterUnit());
  }

  public static override fromHandle(
    handle: unit | undefined
  ): Unit | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  /**
   * 单位-类型的 附加值
   */
  public static getPointValueByType(unitType: number) {
    return GetUnitPointValueByType(unitType);
  }

  /**
   * 单位类型是英雄单位
   */
  public static isUnitIdHero(unitId: number) {
    return IsHeroUnitId(unitId);
  }

  /**
   * 检查单位-类型 分类
   */
  public static isUnitIdType(unitId: number, whichUnitType: unittype) {
    return IsUnitIdType(unitId, whichUnitType);
  }
}
