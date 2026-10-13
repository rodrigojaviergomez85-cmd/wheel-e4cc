import { describe, expect, it } from "vitest";
import { B3_W2 } from "@/data/games/b3-w2";
import { act, buildSteps, initState, nextStep, type GState } from "@/lib/games/engine";
import { findGamePack } from "@/data/games";

const names: [string, string] = ["A", "B"];

describe("games engine", () => {
  it("only BASIC 3 week 2 has a pack", () => {
    expect(findGamePack("b3", 2)).toBeDefined();
    expect(findGamePack("b3", 1)).toBeUndefined();
  });

  it("bomb squad: wrong cuts fuse 15%, 7th wrong explodes and resets", () => {
    const steps = buildSteps("bomb_squad", B3_W2);
    let s: GState = initState("bomb_squad", B3_W2, names);
    let r = act("bomb_squad", B3_W2, steps[0], s, { t: "wrong", team: 0 });
    expect(r.s.teams[0].fuse).toBe(85);
    for (let i = 0; i < 6; i++) { s = r.s; r = act("bomb_squad", B3_W2, steps[0], s, { t: "wrong", team: 0 }); }
    expect(r.fx.explode).toBe(0);
    expect(r.s.teams[0].fuse).toBe(100);
  });

  it("bomb squad: first = 3, extra = 1", () => {
    const steps = buildSteps("bomb_squad", B3_W2);
    const s = initState("bomb_squad", B3_W2, names);
    const a = act("bomb_squad", B3_W2, steps[0], s, { t: "first", team: 1 }).s;
    expect(a.teams[1].score).toBe(3);
    expect(act("bomb_squad", B3_W2, steps[0], a, { t: "plus", team: 1 }).s.teams[1].score).toBe(4);
  });

  it("sniper: wrong B gives -1 to B and +1 to A", () => {
    const steps = buildSteps("lightning_sniper", B3_W2);
    const r = act("lightning_sniper", B3_W2, steps[0], initState("lightning_sniper", B3_W2, names), { t: "wrong", team: 1 });
    expect(r.s.teams[1].score).toBe(-1);
    expect(r.s.teams[0].score).toBe(1);
  });

  it("boss: correct deals 5 HP, wrong costs a life; 0 lives blocks the team", () => {
    const steps = buildSteps("boss_battle", B3_W2);
    let s = initState("boss_battle", B3_W2, names);
    s = act("boss_battle", B3_W2, steps[0], s, { t: "first", team: 0 }).s;
    expect(s.bossHp).toBe(95);
    for (let i = 0; i < 3; i++) s = act("boss_battle", B3_W2, steps[0], s, { t: "wrong", team: 1 }).s;
    expect(s.teams[1].lives).toBe(0);
    expect(act("boss_battle", B3_W2, steps[0], s, { t: "first", team: 1 }).s).toBe(s);
  });

  it("boss: new round refills lives to 1 and rolls an event", () => {
    const steps = buildSteps("boss_battle", B3_W2);
    let s = initState("boss_battle", B3_W2, names);
    s = { ...s, idx: 3, teams: [{ ...s.teams[0], lives: 0 }, s.teams[1]] };
    const r = nextStep("boss_battle", B3_W2, steps, s, () => 0.5);
    expect(r.s.teams[0].lives).toBeGreaterThanOrEqual(1);
    expect(r.fx.event).toBeDefined();
  });
});
