import { MapPlayer } from "../handles/player";

export * from "./order";
export * from "./gametime";

export const Players: MapPlayer[] = [];

const bj_MAX_PLAYER_SLOTS = 16;
for (let i = 0; i < bj_MAX_PLAYER_SLOTS; i++) {
  const pl = MapPlayer.fromHandle(Player(i));
  if (pl) {
    Players[i] = pl;
  }
}
