import { Timer } from "../handles/timer";

export * from "./color";

export async function sleep(howMuch: number): Promise<undefined> {
  return new Promise((resolve, _reject) => {
    const t = Timer.create();
    t.start(howMuch, false, () => {
      t.destroy();
      resolve(undefined);
    });
  });
}
