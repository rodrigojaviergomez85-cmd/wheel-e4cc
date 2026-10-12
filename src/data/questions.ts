import type { DayData, LevelId, WheelMode } from "./types";
import { B0 } from "./levels/b0";
import { B1 } from "./levels/b1";
import { B2 } from "./levels/b2";
import { B3 } from "./levels/b3";
import { B4 } from "./levels/b4";
import { TIGERS } from "./levels/tigers";
import { SHARKS } from "./levels/sharks";
import { EAGLES } from "./levels/eagles";
import { ADV1 } from "./levels/adv1";
import { ADV2 } from "./levels/adv2";
import { ADV3 } from "./levels/adv3";

export type { DayData, LevelId, WheelMode };

export const LEVELS = [
  { id: "b0", label: "BASIC 0", enabled: true },
  { id: "b1", label: "BASIC 1", enabled: true },
  { id: "b2", label: "BASIC 2", enabled: true },
  { id: "b3", label: "BASIC 3", enabled: true },
  { id: "b4", label: "BASIC 4", enabled: true },
  { id: "tigers", label: "TIGERS", enabled: true },
  { id: "sharks", label: "SHARKS", enabled: true },
  { id: "eagles", label: "EAGLES", enabled: true },
  { id: "adv1", label: "ADVANCED 1", enabled: true },
  { id: "adv2", label: "ADVANCED 2", enabled: true },
  { id: "adv3", label: "ADVANCED 3", enabled: true },
] as const;

export const DAYS: DayData[] = [
  ...B0, ...B1, ...B2, ...B3, ...B4,
  ...TIGERS, ...SHARKS, ...EAGLES,
  ...ADV1, ...ADV2, ...ADV3,
];

export function findDay(level: string, week: number, day: number) {
  return DAYS.find((d) => d.level === level && d.week === week && d.day === day);
}

export const isCrazy = (q: string) => q.startsWith("Crazy story:");

/** A day where every question is a debate (no crazy questions): mode has no effect. */
export function isDebateDay(d: DayData) {
  return d.questions.length > 0 && d.questions.every((q) => q.startsWith("Debate:"));
}

/** How many crazy questions each mode puts on the wheel. */
export const MODE_CONFIG: Record<WheelMode, { label: string; emoji: string; normal: number | "all"; crazy: number | "all" }> = {
  classic: { label: "Classic", emoji: "🎯", normal: "all", crazy: 2 }, // 8 normal + 2 random crazy = 10
  crazy: { label: "Crazy", emoji: "🎲", normal: 5, crazy: "all" },      // 5 normal + 5 crazy = 10 (original behaviour)
};

/**
 * Returns the ORIGINAL indices (into day.questions) that go on the wheel for a mode.
 * `seed` lets the caller store the random crazy pick so a refresh keeps the same wheel.
 */
export function pickWheelIndices(d: DayData, mode: WheelMode, seed?: number[]): number[] {
  if (isDebateDay(d)) return d.questions.map((_, i) => i);
  const normals = d.questions.map((q, i) => (isCrazy(q) ? -1 : i)).filter((i) => i >= 0);
  const crazies = d.questions.map((q, i) => (isCrazy(q) ? i : -1)).filter((i) => i >= 0);
  const cfg = MODE_CONFIG[mode];
  const n = cfg.normal === "all" ? normals : normals.slice(0, cfg.normal);
  let c: number[];
  if (cfg.crazy === "all") c = crazies;
  else if (seed && seed.length === cfg.crazy && seed.every((i) => crazies.includes(i))) c = seed;
  else c = [...crazies].sort(() => Math.random() - 0.5).slice(0, cfg.crazy).sort((a, b) => a - b);
  return [...n, ...c];
}
