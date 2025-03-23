/** @noSelfInFile **/

declare interface handle { __handle: never; }

/**
 * FourCC("four-character code")四字符代码
 */
declare function FourCC(str: string): number;
