/** @noSelfInFile */

import { Handle } from "./handle";

export class MultiboardItem extends Handle<multiboarditem> {
  public static create(
    board: Multiboard,
    x: number,
    y: number
  ): MultiboardItem | undefined {
    const handle = MultiboardGetItem(board.handle, x - 1, y - 1);
    if (handle) {
      const obj = this.getObject(handle) as MultiboardItem;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 删除多面板项目 [R]
   */
  public destroy() {
    MultiboardReleaseItem(this.handle);
  }

  /**
   * 设置指定项目图标 [R]
   */
  public setIcon(icon: string) {
    MultiboardSetItemIcon(this.handle, icon);
  }

  /**
   * 设置指定项目显示风格 [R]
   */
  public setStyle(showValue: boolean, showIcon: boolean) {
    MultiboardSetItemStyle(this.handle, showValue, showIcon);
  }

  /**
   * 设置指定项目文本 [R]
   */
  public setValue(val: string) {
    MultiboardSetItemValue(this.handle, val);
  }

  /**
   * 设置指定项目颜色 [R]
   */
  public setValueColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    MultiboardSetItemValueColor(this.handle, red, green, blue, alpha);
  }

  /**
   * 设置指定项目宽度 [R]
   */
  public setWidth(width: number) {
    MultiboardSetItemWidth(this.handle, width);
  }

  public static fromHandle(handle: multiboarditem): MultiboardItem {
    return this.getObject(handle);
  }
}

export class Multiboard extends Handle<multiboard> {
  /**
   * Create a Multiboard object
   * @bug Do not use this in a global initialisation as it crashes the game there.
   */
  public static create(): Multiboard | undefined {
    const handle = CreateMultiboard();
    if (handle) {
      const obj = this.getObject(handle) as Multiboard;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 获得多列面板 的列数
   */
  public get columns() {
    return MultiboardGetColumnCount(this.handle);
  }

  /**
   * 改变多列面板'列数'
   */
  public set columns(count: number) {
    MultiboardSetColumnCount(this.handle, count);
  }

  /**
   * 多列面板 是已显示的
   */
  public get displayed() {
    return IsMultiboardDisplayed(this.handle);
  }

  /**
   * 获得多列面板 的行数
   */
  public get rows() {
    return MultiboardGetRowCount(this.handle);
  }

  /**
   * 改变多列面板'行数'
   * @bug It is only safe to change the row count by one. Use multiple calls for bigger values.
   */
  public set rows(count: number) {
    MultiboardSetRowCount(this.handle, count);
  }

  /**
   * 改变 多列面板 标题
   */
  public set title(label: string) {
    MultiboardSetTitleText(this.handle, label);
  }

  /**
   * 多列面板 的标题
   */
  public get title() {
    return MultiboardGetTitleText(this.handle) ?? "";
  }

  /**
   * 清除 多列面板
   */
  public clear() {
    MultiboardClear(this.handle);
  }

  /**
   * 新建 多列面板项目
   */
  public createItem(x: number, y: number) {
    return MultiboardItem.create(this, x, y);
  }

  /**
   * 销毁
   */
  public destroy() {
    DestroyMultiboard(this.handle);
  }

  /**
   * 显示
   * @note Multiboards can not be shown at map-init. Use a wait or a zero-timer to display as soon as possible.
   */
  public display(show: boolean) {
    MultiboardDisplay(this.handle, show);
  }

  /**
   * 最大/最小化 [R]
   */
  public minimize(flag: boolean) {
    MultiboardMinimize(this.handle, flag);
  }

  /**
   * 多列面板 是最小化的
   * @async
   */
  public minimized() {
    return IsMultiboardMinimized(this.handle);
  }

  /**
   * 设置所有项目图标 [R]
   */
  public setItemsIcons(icon: string) {
    MultiboardSetItemsIcon(this.handle, icon);
  }

  /**
   * 设置所有项目显示风格 [R]
   */
  public setItemsStyle(showValues: boolean, showIcons: boolean) {
    MultiboardSetItemsStyle(this.handle, showValues, showIcons);
  }

  /**
   * 设置所有项目文本 [R]
   */
  public setItemsValue(value: string) {
    MultiboardSetItemsValue(this.handle, value);
  }

  /**
   * 设置所有项目颜色 [R]
   */
  public setItemsValueColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    MultiboardSetItemsValueColor(this.handle, red, green, blue, alpha);
  }

  /**
   * 设置所有项目宽度 [R]
   */
  public setItemsWidth(width: number) {
    MultiboardSetItemsWidth(this.handle, width);
  }

  /**
   * 设置标题颜色 [R]
   */
  public setTitleTextColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    MultiboardSetTitleTextColor(this.handle, red, green, blue, alpha);
  }

  public static fromHandle(
    handle: multiboard | undefined
  ): Multiboard | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  /**
   * Meant to unequivocally suspend display of existing and subsequently displayed multiboards.
   */
  public static suppressDisplay(flag: boolean) {
    MultiboardSuppressDisplay(flag);
  }
}
