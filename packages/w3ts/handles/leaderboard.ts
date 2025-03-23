/** @noSelfInFile */

import { Handle } from "./handle";
import { MapPlayer } from "./player";

export class Leaderboard extends Handle<leaderboard> {
  /**
   * Create a Leaderboard object
   * @note Leaderboards initially have 0 rows, 0 columns, and no label.
   * @bug Do not use this in a global initialisation as it crashes the game there.
   */
  public static create(): Leaderboard | undefined {
    const handle = CreateLeaderboard();
    if (handle) {
      const obj = this.getObject(handle) as Leaderboard;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 添加玩家项目
   * @param label
   * @param value
   * @param p
   */
  public addItem(label: string, value: number, p: MapPlayer) {
    LeaderboardAddItem(this.handle, label, value, p.handle);
  }

  /**
   * 清空 [R]
   */
  public clear() {
    LeaderboardClear(this.handle);
  }

  /**
   * 删除排行榜
   */
  public destroy() {
    DestroyLeaderboard(this.handle);
  }

  /**
   * 显示/隐藏 [R]
   */
  public display(flag = true) {
    LeaderboardDisplay(this.handle, flag);
  }

  /**
   * 是否显示排行榜
   */
  public get displayed() {
    return IsLeaderboardDisplayed(this.handle);
  }

  /**
   * 行数
   */
  public get itemCount() {
    return LeaderboardGetItemCount(this.handle);
  }

  /**
   * 排行榜设置大小（按项目计数）
   * @param count
   */
  public set itemCount(count: number) {
    LeaderboardSetSizeByItemCount(this.handle, count);
  }

  /**
   * 排行榜获取玩家指数
   * @param p
   */
  public getPlayerIndex(p: MapPlayer) {
    return LeaderboardGetPlayerIndex(this.handle, p.handle);
  }

  /**
   * 排行榜有玩家项目
   * @param p
   */
  public hasPlayerItem(p: MapPlayer) {
    LeaderboardHasPlayerItem(this.handle, p.handle);
  }

  /**
   * 排行榜删除项目
   * @param index
   */
  public removeItem(index: number) {
    LeaderboardRemoveItem(this.handle, index);
  }

  /**
   * 排行榜删除玩家项目
   * @param index
   */
  public removePlayerItem(p: MapPlayer) {
    LeaderboardRemovePlayerItem(this.handle, p.handle);
  }

  /**
   * 排行榜集合项目标签
   * @param item
   * @param label
   */
  public setItemLabel(item: number, label: string) {
    LeaderboardSetItemLabel(this.handle, item, label);
  }

  /**
   * 排行榜设置项目标签颜色
   * @param item
   * @param red
   * @param green
   * @param blue
   * @param alpha
   */
  public setItemLabelColor(
    item: number,
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    LeaderboardSetItemLabelColor(this.handle, item, red, green, blue, alpha);
  }

  /**
   * 排行榜集合项目样式
   * @param item
   * @param showLabel
   * @param showValues
   * @param showIcons
   */
  public setItemStyle(
    item: number,
    showLabel = true,
    showValues = true,
    showIcons = true
  ) {
    LeaderboardSetItemStyle(
      this.handle,
      item,
      showLabel,
      showValues,
      showIcons
    );
  }

  /**
   * 排行榜设置项目值
   * @param item
   * @param value
   */
  public setItemValue(item: number, value: number) {
    LeaderboardSetItemValue(this.handle, item, value);
  }

  /**
   * 排行榜设置项目值颜色
   * @param item
   * @param red
   * @param green
   * @param blue
   * @param alpha
   */
  public setItemValueColor(
    item: number,
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    LeaderboardSetItemValueColor(this.handle, item, red, green, blue, alpha);
  }

  /**
   * 设置文字颜色 [R]
   */
  public setLabelColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    LeaderboardSetLabelColor(this.handle, red, green, blue, alpha);
  }

  /**
   * 设置玩家使用的排行榜 [R]
   */
  public setPlayerBoard(p: MapPlayer) {
    PlayerSetLeaderboard(p.handle, this.handle);
  }

  /**
   * 排行榜设置样式
   * @param showLabel
   * @param showNames
   * @param showValues
   * @param showIcons
   */
  public setStyle(
    showLabel = true,
    showNames = true,
    showValues = true,
    showIcons = true
  ) {
    LeaderboardSetStyle(
      this.handle,
      showLabel,
      showNames,
      showValues,
      showIcons
    );
  }

  /**
   * 设置数值颜色 [R]
   */
  public setValueColor(
    red: number,
    green: number,
    blue: number,
    alpha: number
  ) {
    LeaderboardSetValueColor(this.handle, red, green, blue, alpha);
  }

  /**
   * 根据标签排行
   * @param asc
   */
  public sortByLabel(asc = true) {
    LeaderboardSortItemsByLabel(this.handle, asc);
  }

  /**
   * 根据玩家排行
   * @param asc
   */
  public sortByPlayer(asc = true) {
    LeaderboardSortItemsByPlayer(this.handle, asc);
  }

  /**
   * 根据值排行
   * @param asc
   */
  public sortByValue(asc = true) {
    LeaderboardSortItemsByValue(this.handle, asc);
  }

  /**
   * 设置标签
   * @param value
   */
  public set label(value: string) {
    LeaderboardSetLabel(this.handle, value);
  }

  /**
   * 标签
   */
  public get label() {
    return LeaderboardGetLabelText(this.handle) ?? "";
  }

  public static fromHandle(
    handle: leaderboard | undefined
  ): Leaderboard | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromPlayer(p: MapPlayer) {
    return this.fromHandle(PlayerGetLeaderboard(p.handle));
  }
}
