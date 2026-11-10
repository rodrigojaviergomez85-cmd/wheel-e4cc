import type { GameId, GamePack } from "@/data/games/types";
import { act, canAnswer, type Action, type GState, type Step, type TeamIdx } from "./engine";

export type RefereeSnapshot = { state: GState; firstGiven: boolean };
export const refereeSnapshot = (state: GState, firstGiven: boolean): RefereeSnapshot => ({ state, firstGiven });

export function panelAction(step: Step | undefined, team: TeamIdx, firstGiven: boolean, correct: boolean): Action {
  // The sound bonus has its own engine action; referee taps judge the spoken sound.
  if (step?.kind === "ed") return { t: "ed", team, sound: correct ? step.sound : step.sound === "t" ? "d" : "t" };
  return { t: correct ? firstGiven ? "plus" : "first" : "wrong", team };
}

export function panelCanAnswer(game: GameId, state: GState, step: Step | undefined, team: TeamIdx): boolean {
  if (state.phase === "done" || !canAnswer(game, state, team, step)) return false;
  if (game === "story_heist") return state.story.speaker !== null && state.story.turn === team;
  if (game === "build_person") return state.person.round === 2
    ? state.person.retellTeam === team
    : state.person.speaker !== null && state.person.turn === team;
  // Boss speaking items have no student-turn progression; alternate the designated team by item.
  if (game === "boss_battle" && (step?.kind === "person" || step?.kind === "retell")) return state.idx % 2 === team;
  if (game !== "boss_battle" && step?.kind === "pastform" && state.phase === "sentence") return state.firstTeam === team;
  return true;
}

export function correctHint(game: GameId, pack: GamePack, step: Step | undefined, state: GState, team: TeamIdx, firstGiven: boolean): string {
  const action = panelAction(step, team, firstGiven, true);
  const next = act(game, pack, step, state, action).s;
  const points = next.teams[team].score - state.teams[team].score;
  return `+${points} ${firstGiven ? "more" : "first"}`;
}