/** @noSelfInFile */

import { Dialog, DialogButton } from "./dialog";
import { Frame } from "./frame";
import { Handle } from "./handle";
import { MapPlayer } from "./player";
import { Unit } from "./unit";
import { Widget } from "./widget";

export class Trigger extends Handle<trigger> {
  public static create(): Trigger {
    const handle = CreateTrigger();
    const obj = this.getObject(handle) as Trigger;

    const values: Record<string, unknown> = {};
    values.handle = handle;

    return Object.assign(obj, values);
  }

  /**
   * 触发器是否打开
   */
  public set enabled(flag: boolean) {
    if (flag) {
      EnableTrigger(this.handle);
    } else {
      DisableTrigger(this.handle);
    }
  }

  public get enabled() {
    return IsTriggerEnabled(this.handle);
  }

  public get evalCount() {
    return GetTriggerEvalCount(this.handle);
  }

  public static get eventId() {
    return GetTriggerEventId();
  }

  public get execCount() {
    return GetTriggerExecCount(this.handle);
  }

  /**
   * Marks the given trigger to wait/no longer wait for `TriggerSleepAction`s in sub trigger executions started via `TriggerExecuteWait`.
   * Since this is an attribute of the execution rather than the trigger object, this affects future runs of the given trigger, and not
   * those already started.
   */
  public set waitOnSleeps(flag: boolean) {
    TriggerWaitOnSleeps(this.handle, flag);
  }

  public get waitOnSleeps() {
    return IsTriggerWaitOnSleeps(this.handle);
  }

  public addAction(actionFunc: () => void) {
    return TriggerAddAction(this.handle, actionFunc);
  }

  /**
   * 添加触发器动作
   * Adds a new condition to the trigger.
   *
   * Adding more conditions later wil join them by AND (that means all conditions need to evaluate to `true`)
   *
   * @example
   * ```ts
   * const t = Trigger.create()
   *
   * // trigger fires if a unit is attacked
   * t.registerAnyUnitEvent(EVENT_PLAYER_UNIT_ATTACKED)
   *
   * // but only if the unit name matches
   * t.addCondition(Condition(() => Unit.fromHandle(GetAttacker()).name === 'Attacker Unit'))
   *
   * t.addAction(() => {
   *  //do something...
   * })
   * ```
   * @param condition The condition which must evaluate to true in order to run the trigger's actions.
   */
  public addCondition(condition: boolexpr | (() => boolean)) {
    if (typeof condition === "function") {
      const cf = Condition(condition);
      return cf !== undefined
        ? TriggerAddCondition(this.handle, cf)
        : undefined;
    }
    return TriggerAddCondition(this.handle, condition);
  }

  /**
   * 删除触发器 [R]
   * @bug Do not destroy the current running Trigger (when waits are involved)
   * as it can cause handle stack corruption as documented [here](http://www.wc3c.net/showthread.php?t=110519).
   */
  public destroy() {
    DestroyTrigger(this.handle);
  }

  /**
   * 触发器条件成立
   * Evaluates all functions that were added to the trigger via `addCondition`.
   * All return-values from all added condition-functions are `and`ed together as the final return-value.
   * Returns the boolean value of the return value from the condition-function.
   * So if 0/0.0/null would be returned in the condition-function, `eval`
   * would return false. Note that `""` would return `true`.
   * @note If a condition-function crashes the thread or does not return any value `eval` will return false.
   * @note If you want to return false for a condition-function that returns string (for whatever reason) return `null` instead of `""`
   * @note *All* functions added via `addCondition` are run. There is no short-circuting. If you want short-circuting use `And` or `Or`.
   * @note All functions added via `addCondition` are run in the order they were added.
   */
  public eval() {
    return TriggerEvaluate(this.handle);
  }

  /**
   * 运行触发器 (忽略条件)
   * Calls the actions of a trigger in a new execution context.
   * Control will return to the caller when the trigger has finished or has been suspended via TriggerSleepAction.
   */
  public exec() {
    return TriggerExecute(this.handle);
  }

  /**
   * Does the same as `exec` but if the caller has been marked with `waitOnSleeps` before its
   * execution, it will additionally wait for `TriggerSleepAction`s of the callee, so this really ensures that
   * the callee has finished. If there was a `TriggerSleepAction`, there will be a short delay before returning.
   */
  public execWait() {
    TriggerExecuteWait(this.handle);
  }

  /**
   * 任意玩家单位事件
   */
  public registerAnyUnitEvent(whichPlayerUnitEvent: playerunitevent) {
    return TriggerRegisterAnyUnitEventBJ(this.handle, whichPlayerUnitEvent);
  }

  //   public registerCommandEvent(whichAbility: number, order: string) {
  //     return TriggerRegisterCommandEvent(this.handle, whichAbility, order);
  //   }

  /**
   * 可毁坏物死亡
   */
  public registerDeathEvent(whichWidget: Widget) {
    return TriggerRegisterDeathEvent(this.handle, whichWidget.handle);
  }

  /**
   * 对话框按钮被点击 [R]
   */
  public registerDialogButtonEvent(whichButton: DialogButton) {
    return TriggerRegisterDialogButtonEvent(this.handle, whichButton.handle);
  }

  /**
   * 对话框事件
   */
  public registerDialogEvent(whichDialog: Dialog) {
    return TriggerRegisterDialogEvent(this.handle, whichDialog.handle);
  }

  /**
   * TODO:单位进入区域[R]
   * TODO:单位离开区域[R]
   */

  /**
   * 单位进入不规则区域(指定条件) [R]
   */
  public registerEnterRegion(
    whichRegion: region,
    filter: boolexpr | (() => boolean) | undefined
  ) {
    return TriggerRegisterEnterRegion(
      this.handle,
      whichRegion,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 特定玩家事件
   */
  public registerFilterUnitEvent(
    whichUnit: unit,
    whichEvent: unitevent,
    filter: boolexpr | (() => boolean) | undefined
  ) {
    return TriggerRegisterFilterUnitEvent(
      this.handle,
      whichUnit,
      whichEvent,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 比赛游戏事件
   */
  public registerGameEvent(whichGameEvent: gameevent) {
    return TriggerRegisterGameEvent(this.handle, whichGameEvent);
  }

  /**
   * 游戏状态事件
   */
  public registerGameStateEvent(
    whichState: gamestate,
    opcode: limitop,
    limitval: number
  ) {
    return TriggerRegisterGameStateEvent(
      this.handle,
      whichState,
      opcode,
      limitval
    );
  }

  /**
   * 单位离开不规则区域(指定条件) [R]
   */
  public registerLeaveRegion(
    whichRegion: region,
    filter: boolexpr | (() => boolean) | undefined
  ) {
    return TriggerRegisterLeaveRegion(
      this.handle,
      whichRegion,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 联盟状态改变(特殊)
   */
  public registerPlayerAllianceChange(
    whichPlayer: MapPlayer,
    whichAlliance: alliancetype
  ) {
    return TriggerRegisterPlayerAllianceChange(
      this.handle,
      whichPlayer.handle,
      whichAlliance
    );
  }

  /**
   * 玩家输入聊天信息
   */
  public registerPlayerChatEvent(
    whichPlayer: MapPlayer,
    chatMessageToDetect: string,
    exactMatchOnly: boolean
  ) {
    return TriggerRegisterPlayerChatEvent(
      this.handle,
      whichPlayer.handle,
      chatMessageToDetect,
      exactMatchOnly
    );
  }

  /**
   * TODO:任意玩家输入聊天信息
   */

  /**
   * 玩家事件
   */
  public registerPlayerEvent(
    whichPlayer: MapPlayer,
    whichPlayerEvent: playerevent
  ) {
    return TriggerRegisterPlayerEvent(
      this.handle,
      whichPlayer.handle,
      whichPlayerEvent
    );
  }

  /**
   * TODO:任意玩家事件
   */
  //   public registerPlayerKeyEvent(
  //     whichPlayer: MapPlayer,
  //     whichKey: oskeytype,
  //     metaKey: number,
  //     fireOnKeyDown: boolean
  //   ) {
  //     return BlzTriggerRegisterPlayerKeyEvent(
  //       this.handle,
  //       whichPlayer.handle,
  //       whichKey,
  //       metaKey,
  //       fireOnKeyDown
  //     );
  //   }

  // public registerPlayerMouseEvent(
  //   whichPlayer: MapPlayer,
  //   whichMouseEvent: number
  // ) {
  //   return TriggerRegisterPlayerMouseEventBJ(
  //     this.handle,
  //     whichPlayer.handle,
  //     whichMouseEvent
  //   );
  // }

  /**
   * 玩家属性事件
   */
  public registerPlayerStateEvent(
    whichPlayer: MapPlayer,
    whichState: playerstate,
    opcode: limitop,
    limitval: number
  ) {
    return TriggerRegisterPlayerStateEvent(
      this.handle,
      whichPlayer.handle,
      whichState,
      opcode,
      limitval
    );
  }

    public registerSyncEvent(
      prefix: string,
      fromServer: boolean
    ) {
      return DzTriggerRegisterSyncData(
        this.handle,
        prefix,
        fromServer
      );
    }

  /**
   * 玩家单位事件
   */
  public registerPlayerUnitEvent(
    whichPlayer: MapPlayer,
    whichPlayerUnitEvent: playerunitevent,
    filter: boolexpr | (() => boolean) | undefined
  ) {
    return TriggerRegisterPlayerUnitEvent(
      this.handle,
      whichPlayer.handle,
      whichPlayerUnitEvent,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 计时器到期事件
   * Creates it's own timer and triggers when it expires
   */
  public registerTimerEvent(timeout: number, periodic: boolean) {
    return TriggerRegisterTimerEvent(this.handle, timeout, periodic);
  }

  /**
   * 注册计时器事件
   * Triggers when the timer you tell it about expires
   */
  public registerTimerExpireEvent(t: timer) {
    return TriggerRegisterTimerExpireEvent(this.handle, t);
  }

  /**
   * 鼠标点击可追踪物 [R]
   */
  public registerTrackableHitEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableHitEvent(this.handle, whichTrackable);
  }

  /**
   * 鼠标移动到追踪对象 [R]
   */
  public registerTrackableTrackEvent(whichTrackable: trackable) {
    return TriggerRegisterTrackableTrackEvent(this.handle, whichTrackable);
  }

  /**
   * 详细单位的事件
   */
  public registerUnitEvent(whichUnit: Unit, whichEvent: unitevent) {
    return TriggerRegisterUnitEvent(this.handle, whichUnit.handle, whichEvent);
  }

  /**
   * 范围内玩家事件
   */
  public registerUnitInRage(
    whichUnit: unit,
    range: number,
    filter: boolexpr | (() => boolean) | undefined
  ) {
    return TriggerRegisterUnitInRange(
      this.handle,
      whichUnit,
      range,
      typeof filter === "function" ? Filter(filter) : filter
    );
  }

  /**
   * 单位状态事件
   */
  public registerUnitStateEvent(
    whichUnit: Unit,
    whichState: unitstate,
    opcode: limitop,
    limitval: number
  ) {
    return TriggerRegisterUnitStateEvent(
      this.handle,
      whichUnit.handle,
      whichState,
      opcode,
      limitval
    );
  }

  //   public registerUpgradeCommandEvent(whichUpgrade: number) {
  //     return TriggerRegisterUpgradeCommandEvent(this.handle, whichUpgrade);
  //   }

  /**
   *  变量的值
   */
  public registerVariableEvent(
    varName: string,
    opcode: limitop,
    limitval: number
  ) {
    return TriggerRegisterVariableEvent(this.handle, varName, opcode, limitval);
  }

  /**
   * 移除触发器动作
   */
  public removeAction(whichAction: triggeraction) {
    return TriggerRemoveAction(this.handle, whichAction);
  }

  /**
   * 清空触发器动作
   */
  public removeActions() {
    return TriggerClearActions(this.handle);
  }

  /**
   * 移除触发器限制条件
   */
  public removeCondition(whichCondition: triggercondition) {
    return TriggerRemoveCondition(this.handle, whichCondition);
  }

  /**
   * 清空触发器限制条件
   */
  public removeConditions() {
    return TriggerClearConditions(this.handle);
  }

  /**
   * 重置触发
   */
  public reset() {
    ResetTrigger(this.handle);
  }

  //   public triggerRegisterFrameEvent(frame: Frame, eventId: frameeventtype) {
  //     return BlzTriggerRegisterFrameEvent(this.handle, frame.handle, eventId);
  //   }

  //   public registerFrameEvent(frame: Frame, eventId: frameeventtype) {
  //     this.triggerRegisterFrameEvent(frame, eventId);
  //   }

  public static fromEvent() {
    return this.fromHandle(GetTriggeringTrigger());
  }

  public static fromHandle(handle: trigger | undefined): Trigger | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
