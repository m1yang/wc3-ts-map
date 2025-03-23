/** @noSelfInFile */

import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Point } from "./point";
import { Rectangle } from "./rect";
import { Unit } from "./unit";
import { Widget } from "./widget";

export class Group extends Handle<group> {
  public static create(): Group | undefined {
    const handle = CreateGroup();
    if (handle) {
      const obj = this.getObject(handle) as Group;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  //   public addGroupFast(addGroup: Group): number {
  //     return BlzGroupAddGroupFast(this.handle, addGroup.handle);
  //   }

  /**
   * 添加单位 [R]
   */
  public addUnit(whichUnit: Unit) {
    GroupAddUnit(this.handle, whichUnit.handle);
  }

  /**
   * 清除
   */
  public clear() {
    GroupClear(this.handle);
  }

  /**
   * 删除单位组 [R]
   */
  public destroy() {
    DestroyGroup(this.handle);
  }

  /**
   * 选取单位添加到单位组(坐标)
   */
  public enumUnitsInRange(
    x: number,
    y: number,
    radius: number,
    filter: boolexpr | (() => boolean)
  ) {
    GroupEnumUnitsInRange(
      this.handle,
      x,
      y,
      radius,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 选取单位添加到单位组(坐标)(不建议使用)
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRangeCounted(
    x: number,
    y: number,
    radius: number,
    filter: boolexpr | (() => boolean),
    countLimit: number
  ) {
    GroupEnumUnitsInRangeCounted(
      this.handle,
      x,
      y,
      radius,
      typeof filter === "function" ? Filter(filter) : filter,
      countLimit
    );
  }

  /**
   * 选取单位添加到单位组(点)
   */
  public enumUnitsInRangeOfPoint(
    whichPoint: Point,
    radius: number,
    filter: boolexpr | (() => boolean)
  ) {
    GroupEnumUnitsInRangeOfLoc(
      this.handle,
      whichPoint.handle,
      radius,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 选取单位添加到单位组(点)(不建议使用)
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRangeOfPointCounted(
    whichPoint: Point,
    radius: number,
    filter: boolexpr | (() => boolean),
    countLimit: number
  ) {
    GroupEnumUnitsInRangeOfLocCounted(
      this.handle,
      whichPoint.handle,
      radius,
      typeof filter === "function" ? Filter(filter) : filter,
      countLimit
    );
  }

  /**
   * 匹配范围单位
   */
  public enumUnitsInRect(r: Rectangle, filter: boolexpr | (() => boolean)) {
    GroupEnumUnitsInRect(
      this.handle,
      r.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 匹配范围单位 [countLimit 上限]
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsInRectCounted(
    r: Rectangle,
    filter: boolexpr | (() => boolean),
    countLimit: number
  ) {
    GroupEnumUnitsInRectCounted(
      this.handle,
      r.handle,
      typeof filter === "function" ? Filter(filter) : filter,
      countLimit
    );
  }

  /**
   * 通过玩家匹配单位
   * @note In contrast to other Enum-functions this function enumarates units with locust.
   */
  public enumUnitsOfPlayer(
    whichPlayer: MapPlayer,
    filter: boolexpr | (() => boolean)
  ) {
    GroupEnumUnitsOfPlayer(
      this.handle,
      whichPlayer.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 通过单位类型匹配单位
   */
  public enumUnitsOfType(unitName: string, filter: boolexpr | (() => boolean)) {
    GroupEnumUnitsOfType(
      this.handle,
      unitName,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 通过单位类型匹配单位 [countLimit 上限]
   * @bug Causes irregular behavior when used with large numbers
   */
  public enumUnitsOfTypeCounted(
    unitName: string,
    filter: boolexpr | (() => boolean),
    countLimit: number
  ) {
    GroupEnumUnitsOfTypeCounted(
      this.handle,
      unitName,
      typeof filter === "function" ? Filter(filter) : filter,
      countLimit
    );
  }

  /**
   * 选取单位添加到单位组(点)(不建议使用)
   */
  public enumUnitsSelected(
    whichPlayer: MapPlayer,
    filter: boolexpr | (() => boolean)
  ) {
    GroupEnumUnitsSelected(
      this.handle,
      whichPlayer.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 选取所有单位在单位组做 多动作
   */
  public for(callback: () => void) {
    ForGroup(this.handle, callback);
  }

  /**
   * @bug May return `null` even if there are still units in the group.
   * This happens when a unit in the group dies and decays since the group still
   * holds a reference to that unit but that unit is pretty much null.
   * See http://wc3c.net/showthread.php?t=104464.
   */
  public get first() {
    let unit = FirstOfGroup(this.handle);
    if (unit !== undefined) {
      return Unit.fromHandle(unit);
    }
    return undefined;
  }

  //   public get size(): number {
  //     return BlzGroupGetSize(this.handle);
  //   }

  public getUnits(): Unit[] {
    const units: Unit[] = [];
    this.for(() => {
      const u = Unit.fromFilter();
      if (u) {
        units.push(u);
      }
    });
    return units;
  }

  //   public getUnitAt(index: number) {
  //     return Unit.fromHandle(BlzGroupUnitAt(this.handle, index));
  //   }

  /**
   * 单位在 单位组
   */
  public hasUnit(whichUnit: Unit) {
    return IsUnitInGroup(whichUnit.handle, this.handle);
  }

  /**
   * 发布命令(指定坐标) [R]
   */
  public orderCoords(order: string | number, x: number, y: number) {
    if (typeof order === "string") {
      GroupPointOrder(this.handle, order, x, y);
    } else {
      GroupPointOrderById(this.handle, order, x, y);
    }
  }

  /**
   * 发送单位组命令到 没有目标
   */
  public orderImmediate(order: string | number) {
    if (typeof order === "string") {
      GroupImmediateOrder(this.handle, order);
    } else {
      GroupImmediateOrderById(this.handle, order);
    }
  }

  /**
   * 发送单位组命令到 点
   */
  public orderPoint(order: string | number, whichPoint: Point) {
    if (typeof order === "string") {
      GroupPointOrderLoc(this.handle, order, whichPoint.handle);
    } else {
      GroupPointOrderByIdLoc(this.handle, order, whichPoint.handle);
    }
  }

  /**
   * 发送单位组命令到 单位
   */
  public orderTarget(order: string | number, targetWidget: Widget | Unit) {
    if (typeof order === "string") {
      GroupTargetOrder(this.handle, order, targetWidget.handle);
    } else {
      GroupTargetOrderById(this.handle, order, targetWidget.handle);
    }
  }

  //   public removeGroupFast(removeGroup: Group): number {
  //     return BlzGroupRemoveGroupFast(this.handle, removeGroup.handle);
  //   }

  public removeUnit(whichUnit: Unit) {
    GroupRemoveUnit(this.handle, whichUnit.handle);
  }

  public static fromHandle(handle: group | undefined): Group | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static getEnumUnit() {
    return Unit.fromHandle(GetEnumUnit());
  }

  public static getFilterUnit() {
    return Unit.fromHandle(GetFilterUnit());
  }
}
