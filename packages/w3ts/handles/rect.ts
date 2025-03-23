/** @noSelfInFile */

import { Handle } from "./handle";
import { Point } from "./point";

export class Rectangle extends Handle<rect> {
  public static create(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number
  ): Rectangle {
    const handle = Rect(minX, minY, maxX, maxY);
    const obj = this.getObject(handle) as Rectangle;

    const values: Record<string, unknown> = {};
    values.handle = handle;

    return Object.assign(obj, values);
  }

  /**
   * 区域中心的 X 坐标
   */
  public get centerX() {
    return GetRectCenterX(this.handle);
  }

  /**
   * 区域中心的 Y 坐标
   */
  public get centerY() {
    return GetRectCenterY(this.handle);
  }

  /**
   * 区域最大 X 坐标
   */
  public get maxX() {
    return GetRectMaxX(this.handle);
  }

  /**
   * 区域最大 Y 坐标
   */
  public get maxY() {
    return GetRectMaxY(this.handle);
  }

  /**
   * 区域最小 X 坐标
   */
  public get minX() {
    return GetRectMinX(this.handle);
  }

  /**
   * 区域最小 Y 坐标
   */
  public get minY() {
    return GetRectMinY(this.handle);
  }

  /**
   * 删除矩形区域 [R]
   */
  public destroy() {
    RemoveRect(this.handle);
  }

  /**
   * 遍历区域内的可破坏物
   * @param filter
   * @param actionFunc
   */
  public enumDestructables(
    filter: boolexpr | (() => boolean),
    actionFunc: () => void
  ) {
    EnumDestructablesInRect(
      this.handle,
      typeof filter === "function" ? Filter(filter) : filter,
      actionFunc
    );
  }

  /**
   * 遍历区域内的物品
   * @param filter
   * @param actionFunc
   */
  public enumItems(filter: boolexpr | (() => boolean), actionFunc: () => void) {
    EnumItemsInRect(
      this.handle,
      typeof filter === "function" ? Filter(filter) : filter,
      actionFunc
    );
  }

  /**
   * 移动
   */
  public move(newCenterX: number, newCenterY: number) {
    MoveRectTo(this.handle, newCenterX, newCenterY);
  }

  /**
   * 移动到点
   */
  public movePoint(newCenterPoint: Point) {
    MoveRectToLoc(this.handle, newCenterPoint.handle);
  }

  /**
   * 设置矩形区域(指定坐标) [R]
   */
  public setRect(minX: number, minY: number, maxX: number, maxY: number) {
    SetRect(this.handle, minX, minY, maxX, maxY);
  }

  /**
   * 设置矩形区域(指定点) [R]
   */
  public setRectFromPoint(min: Point, max: Point) {
    SetRectFromLoc(this.handle, min.handle, max.handle);
  }

  public static fromHandle(handle: rect | undefined): Rectangle | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromPoint(min: Point, max: Point) {
    return this.fromHandle(RectFromLoc(min.handle, max.handle));
  }

  // Returns full map bounds, including unplayable borders, in world coordinates
  public static getWorldBounds() {
    return Rectangle.fromHandle(GetWorldBounds());
  }
}
