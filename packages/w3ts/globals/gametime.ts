import { Timer } from "../handles/timer";

let elapsedTime = 0.0;
let gameTimer: Timer | undefined;

export function getElapsedTime() {
  if (!gameTimer) return 0;
  return elapsedTime + gameTimer.elapsed;
}

gameTimer = Timer.create().start(30, true, () => {
  elapsedTime += 30;
});
