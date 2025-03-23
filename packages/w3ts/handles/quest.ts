/** @noSelfInFile */

import { Handle } from "./handle";

export class QuestItem extends Handle<questitem> {
  public readonly quest?: Quest;

  public static create(whichQuest: Quest): QuestItem | undefined {
    const handle = QuestCreateItem(whichQuest.handle);
    if (handle) {
      const obj = this.getObject(handle) as QuestItem;

      const values: Record<string, unknown> = {};
      values.handle = handle;
      values.quest = whichQuest;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 任务物品介绍
   */
  public setDescription(description: string) {
    QuestItemSetDescription(this.handle, description);
  }

  /**
   * 任务条件完成
   */
  public get completed() {
    return IsQuestItemCompleted(this.handle);
  }

  /**
   * 任务物品发货
   */
  public set completed(completed: boolean) {
    QuestItemSetCompleted(this.handle, completed);
  }
}

export class Quest extends Handle<quest> {
  /**
   * @bug Do not use this in a global initialisation as it crashes the game there.
   */
  public static create(): Quest | undefined {
    const handle = CreateQuest();
    if (handle) {
      const obj = this.getObject(handle) as Quest;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * 任务完成
   */
  public get completed() {
    return IsQuestCompleted(this.handle);
  }

  /**
   * 任务完成
   */
  public set completed(completed: boolean) {
    QuestSetCompleted(this.handle, completed);
  }

  /**
   * 任务找到
   */
  public get discovered() {
    return IsQuestDiscovered(this.handle);
  }

  /**
   * 任务找到
   */
  public set discovered(discovered: boolean) {
    QuestSetDiscovered(this.handle, discovered);
  }

  /**
   * 判断任务是否启用
   */
  public get enabled() {
    return IsQuestEnabled(this.handle);
  }

  /**
   * 允许任务
   */
  public set enabled(enabled: boolean) {
    QuestSetEnabled(this.handle, enabled);
  }

  /**
   * 任务失败
   */
  public get failed() {
    return IsQuestFailed(this.handle);
  }

  /**
   * 任务失败
   */
  public set failed(failed: boolean) {
    QuestSetFailed(this.handle, failed);
  }

  /**
   * 任务是必须完成的
   */
  public get required() {
    return IsQuestRequired(this.handle);
  }

  /**
   * 任务是必须完成的
   */
  public set required(required: boolean) {
    QuestSetRequired(this.handle, required);
  }

  public addItem(description: string) {
    const questItem = QuestItem.create(this);

    questItem?.setDescription(description);

    return questItem;
  }

  public destroy() {
    DestroyQuest(this.handle);
  }

  public setDescription(description: string) {
    QuestSetDescription(this.handle, description);
  }

  public setIcon(iconPath: string) {
    QuestSetIconPath(this.handle, iconPath);
  }

  public setTitle(title: string) {
    QuestSetTitle(this.handle, title);
  }

  public static flashQuestDialogButton() {
    FlashQuestDialogButton();
  }

  public static forceQuestDialogUpdate() {
    ForceQuestDialogUpdate();
  }

  public static fromHandle(handle: quest | undefined): Quest | undefined {
    return handle ? this.getObject(handle) : undefined;
  }
}
