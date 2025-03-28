/** @noSelfInFile */

import { Force } from "./force";
import { Handle } from "./handle";
import { Point } from "./point";

export class MapPlayer extends Handle<player> {
  private static create(index: number): MapPlayer | undefined {
    const handle = Player(index);
    if (handle) {
      const obj = this.getObject(handle) as MapPlayer;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 玩家颜色 [R]
   */
  public set color(color: playercolor) {
    SetPlayerColor(this.handle, color);
  }

  /**
   * 玩家颜色 [R]
   */
  public get color() {
    return GetPlayerColor(this.handle);
  }

  /**
   * 玩家控制者
   */
  public get controller() {
    return GetPlayerController(this.handle);
  }

  /**
   * 经验上限
   */
  public get handicap() {
    return GetPlayerHandicap(this.handle);
  }

  /**
   * 设置经验上限 [R]
   */
  public set handicap(handicap: number) {
    SetPlayerHandicap(this.handle, handicap);
  }

  /***
   * 经验获得率
   */
  public get handicapXp() {
    return GetPlayerHandicapXP(this.handle);
  }

  /**
   * 设置经验获得率 [R]
   */
  public set handicapXp(handicap: number) {
    SetPlayerHandicapXP(this.handle, handicap);
  }

  /**
   * 玩家ID - 1 [R]
   */
  public override get id() {
    return GetPlayerId(this.handle);
  }

  /**
   * 玩家名字
   */
  public get name() {
    return GetPlayerName(this.handle) ?? "";
  }

  /**
   * 设置玩家名字
   */
  public set name(value: string) {
    SetPlayerName(this.handle, value);
  }

  /**
   * 玩家的种族
   */
  public get race() {
    return GetPlayerRace(this.handle);
  }

  /**
   * 玩家游戏属性
   */
  public get slotState() {
    return GetPlayerSlotState(this.handle);
  }

  /**
   * 玩家开始点
   */
  public get startLocation() {
    return GetPlayerStartLocation(this.handle);
  }

  /**
   * 起始点x
   */
  public get startLocationX() {
    return GetStartLocationX(this.startLocation);
  }

  /**
   * 起始点y
   */
  public get startLocationY() {
    return GetStartLocationY(this.startLocation);
  }

  /**
   * 起始点
   */
  public get startLocationPoint() {
    return GetStartLocationLoc(this.startLocation);
  }

  /**
   * 玩家所在的队伍
   */
  public get team() {
    return GetPlayerTeam(this.handle);
  }

  //   public get townHallCount() {
  //     return BlzGetPlayerTownHallCount(this.handle);
  //   }

  /**
   * 增加科技等级
   * In upgrades that have multiple levels, it will research the upgrade by the number of levels specified.
   * @param techId The four digit rawcode ID of the upgrade.
   * @param levels The number of levels to add to the current research level of the upgrade.
   */
  public addTechResearched(techId: number, levels: number) {
    AddPlayerTechResearched(this.handle, techId, levels);
  }

  //   public decTechResearched(techId: number, levels: number) {
  //     BlzDecPlayerTechResearched(this.handle, techId, levels);
  //   }

  /**
   * 缓存玩家数据
   * Used to store hero level data for the scorescreen, before units are moved to neutral passive in melee games.
   */
  public cacheHeroData() {
    CachePlayerHeroData(this.handle);
  }

  /**
   * 玩家与玩家结盟
   */
  public compareAlliance(
    otherPlayer: MapPlayer,
    whichAllianceSetting: alliancetype
  ) {
    return GetPlayerAlliance(
      this.handle,
      otherPlayer.handle,
      whichAllianceSetting
    );
  }

  /**
   * 坐标在迷雾中
   */
  public coordsFogged(x: number, y: number) {
    return IsFoggedToPlayer(x, y, this.handle);
  }

  /**
   * 坐标在黑色阴影中
   */
  public coordsMasked(x: number, y: number) {
    return IsMaskedToPlayer(x, y, this.handle);
  }

  /**
   * 坐标可见
   */
  public coordsVisible(x: number, y: number) {
    return IsVisibleToPlayer(x, y, this.handle);
  }

  /**
   * 削弱玩家
   * Reveals a player's remaining buildings to a force.
   * The black mask over the buildings will be removed as if the territory had been discovered
   * @param toWhichPlayers The players who will see whichPlayer's buildings.
   * @param flag If true, the buildings will be revealed. If false, the buildings will not be revealed.
   * Note that if you set it to false, it will not hide the buildings with a black mask.
   * @note his function will not check whether the player has a town hall before revealing.
   */
  public cripple(toWhichPlayers: Force, flag: boolean) {
    CripplePlayer(this.handle, toWhichPlayers.handle, flag);
  }

  /**
   * 获得玩家得分
   */
  public getScore(whichPlayerScore: playerscore) {
    return GetPlayerScore(this.handle, whichPlayerScore);
  }

  /**
   * 获得玩家属性
   */
  public getState(whichPlayerState: playerstate) {
    return GetPlayerState(this.handle, whichPlayerState);
  }

  /**
   * 获得建筑数量
   */
  public getStructureCount(includeIncomplete: boolean) {
    return GetPlayerStructureCount(this.handle, includeIncomplete);
  }

  /**
   * 玩家税率 [R]
   */
  public getTaxRate(otherPlayer: player, whichResource: playerstate) {
    return GetPlayerTaxRate(this.handle, otherPlayer, whichResource);
  }

  /**
   * 获取玩家科技数量
   */
  public getTechCount(techId: number, specificonly: boolean) {
    return GetPlayerTechCount(this.handle, techId, specificonly);
  }

  /**
   * 获取允许玩家的科技上限
   * 单位默认建造数量为2147483647
   */
  public getTechMaxAllowed(techId: number) {
    return GetPlayerTechMaxAllowed(this.handle, techId);
  }

  /**
   * 获取玩家科技是否已经研究
   */
  public getTechResearched(techId: number, specificonly: boolean) {
    return GetPlayerTechResearched(this.handle, techId, specificonly);
  }

  /**
   * 单位数量
   */
  public getUnitCount(includeIncomplete: boolean) {
    return GetPlayerUnitCount(this.handle, includeIncomplete);
  }

  /**
   * 获取玩家特定单位数
   * @param unitName
   * @param includeIncomplete
   * @param includeUpgrades
   */
  public getUnitCountByType(
    unitName: string,
    includeIncomplete: boolean,
    includeUpgrades: boolean
  ) {
    return GetPlayerTypedUnitCount(
      this.handle,
      unitName,
      includeIncomplete,
      includeUpgrades
    );
  }

  /**
   * 玩家在玩家组
   */
  public inForce(whichForce: Force) {
    return IsPlayerInForce(this.handle, whichForce.handle);
  }

  /**
   * 玩家是裁判或观察者 [R]
   */
  public isLocal() {
    return GetLocalPlayer() === this.handle;
  }

  /**
   * 玩家是玩家的同盟
   */
  public isObserver() {
    return IsPlayerObserver(this.handle);
  }

  /**
   * 玩家是玩家的敌人
   */
  public isPlayerAlly(otherPlayer: MapPlayer) {
    return IsPlayerAlly(this.handle, otherPlayer.handle);
  }

  /**
   * 玩家的种族选择
   */
  public isPlayerEnemy(otherPlayer: MapPlayer) {
    return IsPlayerEnemy(this.handle, otherPlayer.handle);
  }

  /**
   * 玩家的种族选择
   */
  public isRacePrefSet(pref: racepreference) {
    return IsPlayerRacePrefSet(this.handle, pref);
  }

  /**
   * 玩家是否可选
   */
  public isSelectable() {
    return GetPlayerSelectable(this.handle);
  }

  /**
   * 点被迷雾遮挡
   */
  public pointFogged(whichPoint: Point) {
    return IsLocationFoggedToPlayer(whichPoint.handle, this.handle);
  }

  /**
   * 点被黑色阴影遮挡
   */
  public pointMasked(whichPoint: Point) {
    return IsLocationMaskedToPlayer(whichPoint.handle, this.handle);
  }

  /**
   * 点对于玩家可见
   */
  public pointVisible(whichPoint: Point) {
    return IsLocationVisibleToPlayer(whichPoint.handle, this.handle);
  }

  /**
   * 踢除玩家
   */
  public remove(gameResult: playergameresult) {
    RemovePlayer(this.handle, gameResult);
  }

  /**
   * 忽略所有单位的防守职责
   */
  public removeAllGuardPositions() {
    RemoveAllGuardPositions(this.handle);
  }

  /**
   * 允许/禁用 技能 [R]
   */
  public setAbilityAvailable(abilId: number, avail: boolean) {
    SetPlayerAbilityAvailable(this.handle, abilId, avail);
  }

  /**
   * 设置联盟状态(指定项目) [R]
   */
  public setAlliance(
    otherPlayer: MapPlayer,
    whichAllianceSetting: alliancetype,
    value: boolean
  ) {
    SetPlayerAlliance(
      this.handle,
      otherPlayer.handle,
      whichAllianceSetting,
      value
    );
  }

  /**
   * 显示/隐藏计分屏显示 [R]
   */
  public setOnScoreScreen(flag: boolean) {
    SetPlayerOnScoreScreen(this.handle, flag);
  }

  /**
   * 设置玩家属性
   */
  public setState(whichPlayerState: playerstate, value: number) {
    SetPlayerState(this.handle, whichPlayerState, value);
  }

  /**
   * 设置税率 [R]
   */
  public setTaxRate(
    otherPlayer: MapPlayer,
    whichResource: playerstate,
    rate: number
  ) {
    SetPlayerTaxRate(this.handle, otherPlayer.handle, whichResource, rate);
  }

  /**
   * 允许玩家的科技上限
   * @param techId
   * @param maximum
   */
  public setTechMaxAllowed(techId: number, maximum: number) {
    SetPlayerTechMaxAllowed(this.handle, techId, maximum);
  }

  /**
   * 设置玩家科技等级
   */
  public setTechResearched(techId: number, setToLevel: number) {
    SetPlayerTechResearched(this.handle, techId, setToLevel);
  }

  /**
   * 设置单位所属玩家
   */
  public setUnitsOwner(newOwner: number) {
    SetPlayerUnitsOwner(this.handle, newOwner);
  }

  /**
   * 选取的玩家
   */
  public static fromEnum() {
    return MapPlayer.fromHandle(GetEnumPlayer());
  }

  /**
   * 触发玩家
   */
  public static fromEvent() {
    return MapPlayer.fromHandle(GetTriggerPlayer());
  }

  /**
   * 匹配的玩家
   */
  public static fromFilter() {
    return MapPlayer.fromHandle(GetFilterPlayer());
  }

  public static fromHandle(handle: player | undefined): MapPlayer | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromIndex(index: number) {
    return this.fromHandle(Player(index));
  }

  /**
   * @async
   */
  public static fromLocal() {
    const pl = GetLocalPlayer();
    if (pl === undefined) {
      for (let i = 0; i < 10; i++) {
        print("$$$$$$$$$ LOCAL PLAYER IS NULL. TELL ME");
      }
    }
    return this.fromHandle(pl) as MapPlayer;
  }
}
