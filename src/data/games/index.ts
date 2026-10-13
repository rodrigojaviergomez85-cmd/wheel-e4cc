import type { GamePack } from "./types";
import { B0_W1 } from "./b0-w1";
import { B0_W2 } from "./b0-w2";
import { B0_W3 } from "./b0-w3";
import { B0_W4 } from "./b0-w4";
import { B1_W1 } from "./b1-w1";
import { B1_W2 } from "./b1-w2";
import { B1_W3 } from "./b1-w3";
import { B1_W4 } from "./b1-w4";
import { B2_W1 } from "./b2-w1";
import { B2_W2 } from "./b2-w2";
import { B2_W3 } from "./b2-w3";
import { B2_W4 } from "./b2-w4";
import { B3_W2 } from "./b3-w2";

export type { GamePack };

export const GAME_PACKS: GamePack[] = [B0_W1, B0_W2, B0_W3, B0_W4, B1_W1, B1_W2, B1_W3, B1_W4, B2_W1, B2_W2, B2_W3, B2_W4, B3_W2];

export function findGamePack(level: string, week: number) {
  return GAME_PACKS.find((p) => p.level === level && p.week === week);
}
