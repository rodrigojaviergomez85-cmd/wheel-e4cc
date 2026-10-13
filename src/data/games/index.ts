import type { GamePack } from "./types";
import { B3_W2 } from "./b3-w2";

export type { GamePack };

export const GAME_PACKS: GamePack[] = [B3_W2];

export function findGamePack(level: string, week: number) {
  return GAME_PACKS.find((p) => p.level === level && p.week === week);
}
