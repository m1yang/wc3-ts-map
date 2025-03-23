/** @noSelfInFile * */

import { Handle } from "./handle";
import { MapPlayer } from "./player";

export class Force extends Handle<force> {
  public static create(): Force | undefined {
    const handle = CreateForce();

    if (handle) {
      const obj = this.getObject(handle) as Force;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 添加玩家 [R]
   */
  public addPlayer(whichPlayer: MapPlayer) {
    ForceAddPlayer(this.handle, whichPlayer.handle);
  }

  /**
   * 清除玩家
   */
  public clear() {
    ForceClear(this.handle);
  }

  /**
   * 删除玩家组 [R]
   */
  public destroy() {
    DestroyForce(this.handle);
  }

  /**
   * 匹配联盟
   */
  public enumAllies(
    whichPlayer: MapPlayer,
    filter: boolexpr | (() => boolean)
  ) {
    ForceEnumAllies(
      this.handle,
      whichPlayer.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 匹配敌对
   */
  public enumEnemies(
    whichPlayer: MapPlayer,
    filter: boolexpr | (() => boolean)
  ) {
    ForceEnumEnemies(
      this.handle,
      whichPlayer.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 匹配玩家
   */
  public enumPlayers(filter: boolexpr | (() => boolean)) {
    ForceEnumPlayers(
      this.handle,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 匹配玩家 [countLimit 上限]
   */
  public enumPlayersCounted(
    filter: boolexpr | (() => boolean),
    countLimit: number
  ) {
    ForceEnumPlayersCounted(
      this.handle,
      typeof filter === "function" ? Filter(filter) : filter,
      countLimit
    );
  }

  /**
   * 选取所有玩家在玩家组做动作(单一的)
   */
  public for(callback: () => void) {
    ForForce(this.handle, callback);
  }

  /**
   * Returns all player handles belonging to this force
   * 选取所有玩家在玩家组做动作(单一的)
   */
  public getPlayers() {
    const players: MapPlayer[] = [];

    ForForce(this.handle, () => {
      const pl = MapPlayer.fromEnum();
      if (pl !== undefined) {
        players.push(pl);
      }
    });

    return players;
  }

  /**
   * 玩家在玩家组
   */
  public hasPlayer(whichPlayer: MapPlayer) {
    return IsPlayerInForce(whichPlayer.handle, this.handle);
  }

  /**
   * 移除玩家 [R]
   */
  public removePlayer(whichPlayer: MapPlayer) {
    ForceRemovePlayer(this.handle, whichPlayer.handle);
  }

  public static fromPlayer(whichPlayer: MapPlayer) {
    return this.fromHandle(GetForceOfPlayer(whichPlayer.handle));
  }

  public static fromHandle(handle: force | undefined): Force | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
