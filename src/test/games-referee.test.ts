import { describe, expect, it } from "vitest";
import { B1_W1 } from "@/data/games/b1-w1";
import { B3_W2 } from "@/data/games/b3-w2";
import { B0_W1 } from "@/data/games/b0-w1";
import { act, buildSteps, initState, nextStep, personNextTurn } from "@/lib/games/engine";
import { correctHint, panelAction, panelCanAnswer, refereeSnapshot } from "@/lib/games/referee";

describe("Arena referee presentation", () => {
  it("smart taps award 3 first, 1 more; Next restores 3 first", () => {
    const steps = buildSteps("bomb_squad", B1_W1);
    const start = initState("bomb_squad", B1_W1, ["Red", "Blue"]);
    const red = act("bomb_squad", B1_W1, steps[0], start, panelAction(steps[0], 0, false, true)).s;
    expect(red.teams[0].score).toBe(3);
    const blue = act("bomb_squad", B1_W1, steps[0], red, panelAction(steps[0], 1, true, true)).s;
    expect(blue.teams[1].score).toBe(1);
    const next = nextStep("bomb_squad", B1_W1, steps, blue).s;
    expect(act("bomb_squad", B1_W1, steps[next.idx], next, panelAction(steps[next.idx], 1, false, true)).s.teams[1].score).toBe(4);
  });
  it("wrong cuts the translation fuse by 15", () => {
    const step = buildSteps("bomb_squad", B1_W1)[0];
    const state = initState("bomb_squad", B1_W1, ["Red", "Blue"]);
    expect(act("bomb_squad", B1_W1, step, state, panelAction(step, 0, false, false)).s.teams[0].fuse).toBe(85);
  });
  it("Echo awards 2 and wrong cuts fuse by 10", () => {
    const step = buildSteps("bomb_squad", B1_W1)[3];
    const state = initState("bomb_squad", B1_W1, ["Red", "Blue"]);
    expect(act("bomb_squad", B1_W1, step, state, panelAction(step, 0, true, true)).s.teams[0].score).toBe(2);
    expect(act("bomb_squad", B1_W1, step, state, panelAction(step, 0, false, false)).s.teams[0].fuse).toBe(90);
  });
  it("Undo snapshots preserve both score and first-answer eligibility", () => {
    const state = initState("bomb_squad", B1_W1, ["Red", "Blue"]);
    const before = refereeSnapshot(state, false);
    const step = buildSteps("bomb_squad", B1_W1)[0];
    const next = act("bomb_squad", B1_W1, step, state, panelAction(step, 0, false, true)).s;
    const after = refereeSnapshot(next, true);
    expect(before.state.teams[0].score).toBe(0);
    expect(panelAction(step, 1, before.firstGiven, true).t).toBe("first");
    expect(after.state.teams[0].score).toBe(3);
    expect(panelAction(step, 1, after.firstGiven, true).t).toBe("plus");
  });
  it("only Story Heist's speaking team has active panel controls", () => {
    const state = initState("story_heist", B1_W1, ["Red", "Blue"]);
    expect(panelCanAnswer("story_heist", state, undefined, 0)).toBe(false);
    state.story.speaker = "Ana";
    expect(panelCanAnswer("story_heist", state, undefined, 0)).toBe(true);
    expect(panelCanAnswer("story_heist", state, undefined, 1)).toBe(false);
  });
  it("Build-a-Person only enables the active speaker", () => {
    const state = personNextTurn(initState("build_person", B0_W1, ["Red", "Blue"]), () => "Ana");
    expect(panelCanAnswer("build_person", state, undefined, 0)).toBe(true);
    expect(panelCanAnswer("build_person", state, undefined, 1)).toBe(false);
  });
  it("sound bonus taps preserve its 2-point correct and zero-point wrong scoring", () => {
    const step = buildSteps("lightning_sniper", B3_W2).find((s) => s.kind === "ed");
    const state = initState("lightning_sniper", B3_W2, ["Red", "Blue"]);
    expect(step?.kind).toBe("ed");
    expect(act("lightning_sniper", B3_W2, step, state, panelAction(step, 0, false, true)).s.teams[0].score).toBe(2);
    expect(act("lightning_sniper", B3_W2, step, state, panelAction(step, 0, false, false)).s.teams[0].score).toBe(0);
  });
  it("hints use engine points including Double and boss damage scoring", () => {
    const state = initState("bomb_squad", B1_W1, ["Red", "Blue"]);
    const step = buildSteps("bomb_squad", B1_W1)[0];
    expect(correctHint("bomb_squad", B1_W1, step, state, 0, false)).toBe("+3 first");
    state.teams[0].double = true;
    expect(correctHint("bomb_squad", B1_W1, step, state, 0, false)).toBe("+6 first");
  });
});