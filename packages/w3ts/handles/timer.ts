/** @noSelfInFile */

import { Handle } from "./handle";

export class Timer extends Handle<timer> {
  public static create(): Timer {
    const handle = CreateTimer();
    const obj = this.getObject(handle) as Timer;

    const values: Record<string, unknown> = {};
    values.handle = handle;

    return Object.assign(obj, values);
  }

  /**
   * 计时器经过的时间
   */
  public get elapsed(): number {
    return TimerGetElapsed(this.handle);
  }

  /**
   * 计时器剩余时间
   * @bug This might not return the correct value if the timer was paused and restarted at one point. See http://www.wc3c.net/showthread.php?t=95756.
   */
  public get remaining(): number {
    return TimerGetRemaining(this.handle);
  }

  /**
   * 计时器初始的时间
   */
  public get timeout(): number {
    return TimerGetTimeout(this.handle);
  }

  /**
   * 删除计时器 [R]
   */
  public destroy() {
    DestroyTimer(this.handle);
    return this;
  }

  /**
   * 暂停计时器 [R]
   */
  public pause() {
    PauseTimer(this.handle);
    return this;
  }

  /**
   * 恢复计时器 [R]
   */
  public resume() {
    ResumeTimer(this.handle);
    return this;
  }
  /**
   * 运行计时器 [C]
   */
  public start(timeout: number, periodic: boolean, handlerFunc: () => void) {
    TimerStart(this.handle, timeout, periodic, handlerFunc);
    return this;
  }

  /**
   * 事件响应 - 计时器期满
   * @bug Might crash the game if called when there is no expired timer.
   */
  public static fromExpired() {
    return this.fromHandle(GetExpiredTimer());
  }

  public static fromHandle(handle: timer | undefined): Timer | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
