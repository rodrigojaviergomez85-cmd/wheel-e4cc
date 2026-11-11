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
import { B3_W1 } from "./b3-w1";
import { B3_W2 } from "./b3-w2";
import { B3_W3 } from "./b3-w3";
import { B3_W4 } from "./b3-w4";
import { B4_W1 } from "./b4-w1";
import { B4_W2 } from "./b4-w2";
import { B4_W3 } from "./b4-w3";
import { B4_W4 } from "./b4-w4";
import { TIGERS_W1 } from "./tigers-w1";
import { TIGERS_W2 } from "./tigers-w2";
import { TIGERS_W3 } from "./tigers-w3";
import { TIGERS_W4 } from "./tigers-w4";
import { SHARKS_W1 } from "./sharks-w1";
import { SHARKS_W2 } from "./sharks-w2";
import { SHARKS_W3 } from "./sharks-w3";
import { SHARKS_W4 } from "./sharks-w4";
import { EAGLES_W1 } from "./eagles-w1";
import { EAGLES_W2 } from "./eagles-w2";
import { EAGLES_W3 } from "./eagles-w3";
import { EAGLES_W4 } from "./eagles-w4";

export type { GamePack };

export const GAME_PACKS: GamePack[] = [B0_W1, B0_W2, B0_W3, B0_W4, B1_W1, B1_W2, B1_W3, B1_W4, B2_W1, B2_W2, B2_W3, B2_W4, B3_W1, B3_W2, B3_W3, B3_W4, B4_W1, B4_W2, B4_W3, B4_W4, TIGERS_W1, TIGERS_W2, TIGERS_W3, TIGERS_W4, SHARKS_W1, SHARKS_W2, SHARKS_W3, SHARKS_W4, EAGLES_W1, EAGLES_W2, EAGLES_W3, EAGLES_W4];

export function findGamePack(level: string, week: number) {
  return GAME_PACKS.find((p) => p.level === level && p.week === week);
}
