/** @noSelfInFile */

import { Handle } from "./handle";
import { MapPlayer } from "./player";

export class DialogButton extends Handle<button> {
  public static create(
    whichDialog: Dialog,
    text: string,
    hotkey = 0,
    quit = false,
    score = false
  ): DialogButton | undefined {
    let handle: button | undefined;

    if (quit === false) {
      handle = DialogAddButton(whichDialog.handle, text, hotkey);
    } else {
      handle = DialogAddQuitButton(whichDialog.handle, score, text, hotkey);
    }

    if (handle) {
      const obj = this.getObject(handle) as DialogButton;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  public static fromEvent() {
    return this.fromHandle(GetClickedButton());
  }

  public static fromHandle(
    handle: button | undefined
  ): DialogButton | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}

/**
 *
 * @example Create a simple dialog.
 * ```ts
 * const dialog = Dialog.create();
 * if (dialog) {
 *   const trigger = Trigger.create();
 *
 *   trigger.registerDialogEvent(dialog);
 *   trigger.addAction(() => {
 *     const clicked = DialogButton.fromEvent();
 *   });
 *
 *   Timer.create().start(1.00, false, () => {
 *     DialogButton.create(dialog, "Stay", 0);
 *     DialogButton.create(dialog, "Leave", 0, true);
 *
 *     dialog.setMessage("Welcome to TypeScript!");
 *     dialog.display(Players[0], true);
 *   });
 * }
 * ```
 */
export class Dialog extends Handle<dialog> {
  public static create(): Dialog | undefined {
    const handle = DialogCreate();

    if (handle) {
      const obj = this.getObject(handle) as Dialog;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  /**
   * 添加按钮
   * @param text
   * @param hotkey
   * @param quit
   * @param score
   */
  public addButton(text: string, hotkey = 0, quit = false, score = false) {
    return DialogButton.create(this, text, hotkey, quit, score);
  }

  /**
   * 清除
   */
  public clear() {
    DialogClear(this.handle);
  }

  /**
   * 销毁
   */
  public destroy() {
    DialogDestroy(this.handle);
  }

  /**
   * 显示
   * @note Dialogs can not be shown at map-init. Use a wait or a zero-timer to display as soon as possible.
   */
  public display(whichPlayer: MapPlayer, flag: boolean) {
    DialogDisplay(whichPlayer.handle, this.handle, flag);
  }

  /**
   * 设置消息
   */
  public setMessage(whichMessage: string) {
    DialogSetMessage(this.handle, whichMessage);
  }

  public static fromEvent() {
    return this.fromHandle(GetClickedDialog());
  }

  public static fromHandle(handle: dialog | undefined): Dialog | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
