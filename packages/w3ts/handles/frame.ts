/** @noSelfInFile */

// import { Handle } from "./handle";

const map = new Map<number, any>();

/**
 * Warcraft III's UI uses a proprietary format known as FDF (Frame Definition Files).
 * This class provides the ability to manipulate and create them dynamically through code.
 *
 * @example Create a simple button.
 * ```ts
 * const gameui = Frame.fromOrigin(ORIGIN_FRAME_GAME_UI, 0);
 * if (gameui) {
 *  // Create a "GLUEBUTTON" named "Facebutton", the clickable Button, for game UI
 *  const buttonFrame = Frame.createType("FaceButton", gameui, 0, "GLUEBUTTON", "");
 *  if (buttonFrame) {
 *    // Create a BACKDROP named "FaceButtonIcon", the visible image, for buttonFrame.
 *    const buttonIconFrame = Frame.createType("FaceButton", buttonFrame, 0, "BACKDROP", "");
 *    // buttonIconFrame will mimic buttonFrame in size and position
 *    buttonIconFrame?.setAllPoints(buttonFrame);
 *    // Set a Texture
 *    buttonIconFrame?.setTexture("ReplaceableTextures\\CommandButtons\\BTNSelectHeroOn", 0, true);
 *    // Place the buttonFrame to the center of the screen
 *    buttonFrame.setAbsPoint(FRAMEPOINT_CENTER, 0.4, 0.3);
 *    // Give that buttonFrame a size
 *    buttonFrame.setSize(0.05, 0.05);
 *  }
 *}
 *```
 *
 * There are many aspects to modifying the UI and it can become complicated, so here are some
 * guides:
 *
 * https://www.hiveworkshop.com/threads/ui-frames-starting-guide.318603/
 * https://www.hiveworkshop.com/pastebin/913bd439799b3d917e5b522dd9ef458f20598/
 * https://www.hiveworkshop.com/tags/ui-fdf/
 */
export class Frame {
  public readonly handle: number;
  private static initHandle: number | undefined;

  protected constructor(handle?: number) {
    this.handle = handle === undefined ? Frame.initHandle : handle;
    map.set(this.handle, this);
  }
  protected static getObject(handle: number) {
    const obj = map.get(handle);
    if (obj !== undefined) {
      return obj;
    }
    Frame.initHandle = handle;
    const newObj = new this();
    Frame.initHandle = undefined;
    return newObj;
  }

  /**
   * Creates a Frame.
   * 新建Frame 名字:${frame} 父节点:${parent} ID:${Id}
   * 名字为fdf文件中的名字，ID默认填0。重复创建同名Frame会导致游戏退出时显示崩溃消息，如需避免可以使用Tag创建
   * @param frame
   * @param parent
   * @param Id
   */
  public static create(
    frame: string = "name",
    parent: number = DzGetGameUI(),
    Id: number = 0
  ): Frame | undefined {
    const handle = DzCreateFrame(frame, parent, Id);
    if (handle !== undefined) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Creates a SimpleFrame.
   * 与Frames不同，SimpleFrame需要fdf，如果没有先定义SimpleFrame的fdf，则无法以有用的方式创建SimpleFrame。
   * https://www.hiveworkshop.com/threads/ui-simpleframes.320385/
   * @param frame
   * @param parent
   * @param id
   */
  public static createSimple(
    frame: string = "name",
    parent: number = DzGetGameUI(),
    Id: number = 0
  ): Frame | undefined {
    const handle = DzCreateSimpleFrame(frame, parent, Id);
    if (handle !== undefined) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }
    return undefined;
  }

  /**
   * Create a Frame by type.
   * 创建 类型:${type} 名字:${frame} 父节点:${parent} 模版:${template} ID:${Id}
   * 此处名字可以自定义，类型和模版填写fdf文件中的内容。通过此函数创建的Frame无法获取到子Frame。
   * @param type
   * @param frame
   * @param parent
   * @param template
   * @param Id
   */
  public static createType(
    type: string = "FRAME",
    frame: string = "name",
    parent: number = DzGetGameUI(),
    template: string = "template",
    Id: number = 0
  ): Frame | undefined {
    const handle = DzCreateFrameByTagName(type, frame, parent, template, Id);

    if (handle !== undefined) {
      const obj = this.getObject(handle) as Frame;

      const values: Record<string, unknown> = {};
      values.handle = handle;

      return Object.assign(obj, values);
    }

    return undefined;
  }

  public set alpha(alpha: number) {
    DzFrameSetAlpha(this.handle, alpha);
  }

  public get alpha() {
    return DzFrameGetAlpha(this.handle);
  }

  public get children() {
    const count = this.childrenCount;
    const output: Frame[] = [];
    for (let i = 0; i < count; i++) {
      const child = this.getChild(i);
      if (child) {
        output.push(child);
      }
    }
    return output;
  }

  public get childrenCount() {
    return DzFrameGetChildrenCount(this.handle);
  }

  public set enabled(flag: boolean) {
    DzFrameSetEnable(this.handle, flag);
  }

  public get enabled() {
    return DzFrameGetEnable(this.handle);
  }

  public set height(height: number) {
    DzFrameSetSize(this.handle, this.width, height);
  }

  public get height() {
    return DzFrameGetHeight(this.handle);
  }

  /**
   * @deprecated use `getParent` and `setParent` instead.
   */
  public set parent(parent: Frame) {
    DzFrameSetParent(this.handle, parent.handle);
  }

  public get parent() {
    return Frame.fromHandle(DzFrameGetParent(this.handle)) as Frame;
  }

  public set text(text: string) {
    DzFrameSetText(this.handle, text);
  }

  public get text() {
    return DzFrameGetText(this.handle) ?? "";
  }

  public set textSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle, size);
  }

  public get textSizeLimit() {
    return DzFrameGetTextSizeLimit(this.handle);
  }

  public set value(value: number) {
    DzFrameSetValue(this.handle, value);
  }

  public get value() {
    return DzFrameGetValue(this.handle);
  }

  // public set visible(flag: boolean) {
  //   DzFrameShow(this.handle, flag);
  // }

  // public get visible() {
  //   return DzFrameIsVisible(this.handle);
  // }

  public set width(width: number) {
    DzFrameSetSize(this.handle, width, this.height);
  }

  public get width() {
    return DzFrameGetWidth(this.handle);
  }

  // public addText(text: string) {
  //   DzFrameAddText(this.handle, text);
  //   return this;
  // }

  public cageMouse(enable: boolean) {
    DzFrameCageMouse(this.handle, enable);
    return this;
  }

  public clearPoints() {
    DzFrameClearAllPoints(this.handle);
    return this;
  }

  // public click() {
  //   DzFrameClick(this.handle);
  //   return this;
  // }

  public destroy() {
    DzDestroyFrame(this.handle);
    return this;
  }

  public getChild(index: number) {
    return Frame.fromHandle(DzFrameGetChild(this.handle, index));
  }

  public setAbsPoint(point: number, x: number, y: number) {
    DzFrameSetAbsolutePoint(this.handle, point, x, y);
    return this;
  }

  public setAllPoints(relative: Frame) {
    DzFrameSetAllPoints(this.handle, relative.handle);
    return this;
  }

  public setAlpha(alpha: number) {
    DzFrameSetAlpha(this.handle, alpha);
    return this;
  }

  public setEnabled(flag: boolean) {
    DzFrameSetEnable(this.handle, flag);
    return this;
  }

  public setFocus(flag: boolean) {
    DzFrameSetFocus(this.handle, flag);
    return this;
  }

  public setFont(filename: string, height: number, flags: number) {
    DzFrameSetFont(this.handle, filename, height, flags);
    return this;
  }

  public setHeight(height: number) {
    DzFrameSetSize(this.handle, this.width, height);
    return this;
  }

  public setLevel(level: number) {
    DzFrameSetPriority(this.handle, level);
    return this;
  }

  public setMinMaxValue(minValue: number, maxValue: number) {
    DzFrameSetMinMaxValue(this.handle, minValue, maxValue);
    return this;
  }

  /**
   * 设置模型
   * 设置 ${frame} 的模型文件为 ${modelFile} ModelType:${modelType} Flag:${flag}
   * @param modelFile
   * @param modelType
   * @param flag
   * @returns
   */
  public setModel(modelFile: string, modelType: number = 0, flag: number = 0) {
    DzFrameSetModel(this.handle, modelFile, modelType, flag);
    return this;
  }

  public getName() {
    return DzFrameGetName(this.handle);
  }

  public getParent() {
    return Frame.fromHandle(DzFrameGetParent(this.handle));
  }

  public setParent(parent: Frame) {
    DzFrameSetParent(this.handle, parent.handle);
    return this;
  }

  /**
   * 设置相对位置
   * 设置 ${frame} 的 ${Point} 锚点 (跟随Frame-->${relativeFrame} 的 ${relativePoint} 锚点) 偏移(${x}, ${y})
   * @param point
   * @param relative
   * @param relativePoint
   * @param x
   * @param y
   * @returns
   */
  public setPoint(
    point: number,
    relative: Frame,
    relativePoint: number,
    x: number,
    y: number
  ) {
    DzFrameSetPoint(this.handle, point, relative.handle, relativePoint, x, y);
    return this;
  }

  public setScale(scale: number) {
    DzFrameSetScale(this.handle, scale);
    return this;
  }

  public setSize(width: number, height: number) {
    DzFrameSetSize(this.handle, width, height);
    return this;
  }

  public setSpriteAnimate(alpha: number = 0, autocast: boolean = false) {
    DzFrameSetAnimate(this.handle, alpha, autocast);
    return this;
  }

  public setStepSize(stepSize: number) {
    DzFrameSetStepValue(this.handle, stepSize);
    return this;
  }

  public setText(text: string) {
    DzFrameSetText(this.handle, text);
    return this;
  }

  /**
   * 255*0x1000000 + r*0x10000 + g*0x100 + b
   */
  public setTextColor(color: number) {
    DzFrameSetTextColor(this.handle, color);
    return this;
  }

  public setTextSizeLimit(size: number) {
    DzFrameSetTextSizeLimit(this.handle, size);
    return this;
  }

  /**
   * 设置贴图
   * 设置 ${frame} 的贴图为:${texture} 是否平铺 ${flag}
   * （支持Backdrop、SimpleStatusBar）
   * @param frame
   * @param texture imagefile
   * @param flag
   * @returns
   */
  public setTexture(texture: string, flag: number) {
    DzFrameSetTexture(this.handle, texture, flag);
    return this;
  }

  public setTooltip(tooltip: number) {
    DzFrameSetTooltip(this.handle, tooltip);
    return this;
  }

  public setValue(value: number) {
    DzFrameSetValue(this.handle, value);
    return this;
  }

  public setVertexColor(color: number) {
    DzFrameSetVertexColor(this.handle, color);
    return this;
  }

  public setVisible(flag: boolean) {
    DzFrameShow(this.handle, flag);
    return this;
  }

  public setWidth(width: number) {
    DzFrameSetSize(this.handle, width, this.height);
    return this;
  }

  // public static autoPosition(enable: boolean) {
  //   DzEnableUIAutoPosition(enable);
  // }

  public static fromEvent() {
    return this.fromHandle(DzGetTriggerUIEventFrame());
  }

  public static fromHandle(handle: number | undefined): Frame | undefined {
    return handle ? this.getObject(handle) : undefined;
  }

  public static fromName(name: string, createContext: number) {
    return this.fromHandle(DzFrameFindByName(name, createContext));
  }

  // public static fromOrigin(frameType: originframetype, index: number) {
  //   return this.fromHandle(DzGetOriginFrame(frameType, index));
  // }

  // public static getEventHandle() {
  //   return DzGetTriggerFrameEvent();
  // }

  // public static getEventText() {
  //   return DzGetTriggerFrameValue();
  // }

  // public static getEventValue() {
  //   return DzGetTriggerFrameValue();
  // }

  /**
   * 原生 - 隐藏界面元素
   * 隐藏所有界面UI
   * 不再在地图初始化时调用则会残留小地图和时钟模型
   */
  public static hideOrigin() {
    DzFrameHideInterface();
  }

  public static loadTOC(filename: string) {
    return DzLoadToc(filename);
  }
}
