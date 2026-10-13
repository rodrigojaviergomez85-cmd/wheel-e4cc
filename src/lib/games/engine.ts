import type { BossEvent, GameId, GamePack, PersonCard } from "@/data/games/types";

export type TeamIdx = 0 | 1;

export type Step =
  | { kind: "translate"; es: string; en: string; alt?: string[] | undefined; seconds: number; round?: number | undefined }
  | { kind: "echo"; en: string; seconds: number; round?: undefined }
  | { kind: "fix"; wrong: string; right: string; hint: string; seconds: number; round?: number | undefined }
  | { kind: "ed"; verb: string; sound: "t" | "d" | "id"; seconds: number; round?: undefined }
  | { kind: "pastform"; base: string; es: string; past: string; sound: "t" | "d" | "id" | "irregular"; example: string; seconds: number; round?: number | undefined }
  | { kind: "flip"; affirmative: string; negative: string; question: string; startTeam: TeamIdx; seconds: number; round?: undefined }
  | { kind: "retell"; prompt: string; retellAs: string; seconds: number; round?: number | undefined }
  | { kind: "word"; es: string; en: string; alt?: string[] | undefined; category: string; seconds: number; round?: number | undefined }
  | { kind: "spell"; word: string; spellTeam: TeamIdx; seconds: number; round?: undefined }
  | { kind: "number"; say: string; write: string; seconds: number; round?: undefined }
  | { kind: "person"; card: PersonCard; seconds: number; round?: number | undefined };

export type PersonState = { card: number; round: 1 | 2; turn: TeamIdx; speaker: string | null; ticks: boolean[]; spoke: [number, number]; retellTeam: TeamIdx; retold: number };

export type Team = {
  name: string;
  score: number;
  fuse: number;
  lives: number;
  cards: string[];
  strikes: number;
  double: boolean;
  shield: boolean;
  frozen: boolean;
  damage: number;
};

export type GState = {
  teams: [Team, Team];
  idx: number;
  phase: "main" | "sentence" | "done";
  firstTeam: TeamIdx | null;
  streakTeam: TeamIdx | null;
  streakCount: number;
  bossHp: number;
  crit: boolean;
  rage: number;
  /** Flip It sub-step: 0 = NEGATIVE, 1 = QUESTION. */
  flipSub: 0 | 1;
  story: { prompt: number; round: 1 | 2 | 3; turn: TeamIdx; speaker: string | null };
  person: PersonState;
};

export type Effects = {
  explode?: TeamIdx;
  punish?: TeamIdx;
  offerCard?: TeamIdx;
  shake?: boolean;
  taunt?: boolean;
  startSentence?: boolean;
  bossDead?: boolean;
  event?: BossEvent;
  flash?: string;
  /** Restart the item timer with this many seconds (e.g. next Flip sub-step). */
  restartTimer?: number;
};

export type Action =
  | { t: "first" | "plus" | "wrong"; team: TeamIdx }
  | { t: "ed"; team: TeamIdx; sound: "t" | "d" | "id" };

export const other = (t: TeamIdx): TeamIdx => (t === 0 ? 1 : 0);

export function buildSteps(game: GameId, pack: GamePack, rng: () => number = Math.random): Step[] {
  const steps: Step[] = [];
  if (game === "bomb_squad") {
    const tr = [...pack.bombSquad.translations].sort((a, b) => a.tier - b.tier);
    tr.forEach((t, i) => {
      steps.push({ kind: "translate", es: t.es, en: t.en, alt: t.alt, seconds: 10 });
      const echo = pack.bombSquad.echo[Math.floor(i / 3)];
      if ((i + 1) % 3 === 0 && echo) steps.push({ kind: "echo", en: echo.en, seconds: 15 });
    });
  } else if (game === "lightning_sniper") {
    pack.lightningSniper.items.forEach((t) => steps.push({ kind: "fix", ...t, seconds: 8 }));
    (pack.lightningSniper.edSounds ?? []).forEach((t) => steps.push({ kind: "ed", ...t, seconds: 8 }));
  } else if (game === "word_sprint" && pack.wordSprint) {
    const ws = pack.wordSprint;
    ws.words.forEach((w, i) => {
      steps.push({ kind: "word", es: w.es, en: w.en, alt: w.alt, category: w.category, seconds: 5 });
      const si = Math.floor(i / 4);
      const sp = ws.spell[si];
      if ((i + 1) % 4 === 0 && sp) steps.push({ kind: "spell", word: sp.word, spellTeam: si % 2 === 0 ? 0 : 1, seconds: 15 });
    });
    ws.numbers.forEach((n) => steps.push({ kind: "number", say: n.say, write: n.write, seconds: 8 }));
  } else if (game === "past_sprint" && pack.pastSprint) {
    const ps = pack.pastSprint;
    ps.verbs.forEach((v, i) => {
      steps.push({ kind: "pastform", ...v, seconds: 5 });
      const fi = Math.floor(i / 4);
      const f = ps.flips[fi];
      if ((i + 1) % 4 === 0 && f) steps.push({ kind: "flip", ...f, startTeam: fi % 2 === 0 ? 0 : 1, seconds: 10 });
    });
  } else if (game === "boss_battle") {
    const pick = <T,>(arr: T[], n: number) => [...arr].sort(() => rng() - 0.5).slice(0, n);
    pack.bossBattle.rounds.forEach((r, ri) => {
      const sec = Math.max(5, Math.round(r.seconds / Math.max(1, r.items)));
      if (r.kind === "translate") pick(pack.bombSquad.translations, r.items).forEach((t) => steps.push({ kind: "translate", es: t.es, en: t.en, alt: t.alt, seconds: sec, round: ri }));
      if (r.kind === "fix") pick(pack.lightningSniper.items, r.items).forEach((t) => steps.push({ kind: "fix", ...t, seconds: sec, round: ri }));
      if (r.kind === "pastform") pick(pack.pastSprint?.verbs ?? [], r.items).forEach((t) => steps.push({ kind: "pastform", ...t, seconds: sec, round: ri }));
      if (r.kind === "word") pick(pack.wordSprint?.words ?? [], r.items).forEach((w) => steps.push({ kind: "word", es: w.es, en: w.en, alt: w.alt, category: w.category, seconds: sec, round: ri }));
      if (r.kind === "person") pick(pack.buildPerson?.cards ?? [], 1).forEach((c) => steps.push({ kind: "person", card: c, seconds: r.seconds, round: ri }));
      if (r.kind === "retell") pick(pack.storyHeist?.prompts ?? [], r.items).forEach((t) => steps.push({ kind: "retell", ...t, seconds: r.seconds, round: ri }));
    });
  }
  return steps;
}

export function initState(game: GameId, pack: GamePack, names: [string, string]): GState {
  const team = (name: string): Team => ({
    name, score: 0, fuse: 100, lives: pack.bossBattle.lives, cards: [], strikes: 0,
    double: false, shield: false, frozen: false, damage: 0,
  });
  void game;
  return {
    teams: [team(names[0]), team(names[1])],
    idx: 0, flipSub: 0, phase: "main", firstTeam: null, streakTeam: null, streakCount: 0,
    bossHp: pack.bossBattle.hp, crit: false, rage: 0,
    story: { prompt: 0, round: 1, turn: 0, speaker: null },
    person: freshPerson(pack, 0),
  };
}

const freshPerson = (pack: GamePack, card: number): PersonState => ({
  card, round: 1, turn: 0, speaker: null, ticks: (pack.buildPerson?.cards[card]?.facts ?? []).map(() => false), spoke: [0, 0], retellTeam: 1, retold: 0,
});

const clone = (s: GState): GState => ({
  ...s,
  teams: [{ ...s.teams[0], cards: [...s.teams[0].cards] }, { ...s.teams[1], cards: [...s.teams[1].cards] }],
  story: { ...s.story },
  person: { ...s.person, ticks: [...s.person.ticks], spoke: [...s.person.spoke] as [number, number] },
});

/** Build-a-Person: pick the next speaker (A first, then alternating). */
export function personNextTurn(prev: GState, pickName: (t: TeamIdx) => string): GState {
  const s = clone(prev);
  if (s.person.round !== 1) return prev;
  const turn = s.person.speaker === null ? 0 : other(s.person.turn);
  s.person.turn = turn;
  s.person.speaker = pickName(turn);
  s.person.spoke[turn]++;
  s.teams[0].frozen = false; s.teams[1].frozen = false;
  return s;
}

/** Build-a-Person: BUILD → RETELL (team that spoke less, B if equal) → next card. */
export function personNextRound(pack: GamePack, prev: GState): GState {
  const s = clone(prev);
  if (s.person.round === 1) {
    const [a, b] = s.person.spoke;
    s.person = { ...s.person, round: 2, speaker: null, retold: 0, retellTeam: a < b ? 0 : 1 };
  } else s.person = freshPerson(pack, (s.person.card + 1) % Math.max(1, pack.buildPerson?.cards.length ?? 1));
  return s;
}

export function personSetCard(pack: GamePack, prev: GState, card: number): GState {
  return { ...clone(prev), person: freshPerson(pack, card) };
}

/** Ticking facts is only a visual aid: never changes score. */
export function personToggle(prev: GState, i: number): GState {
  const s = clone(prev);
  if (i >= 0 && i < s.person.ticks.length) s.person.ticks[i] = !s.person.ticks[i];
  return s;
}

/** Can this team press referee buttons right now? */
/** Whose turn it is in a Flip It sub-step. */
export const flipTeam = (step: Extract<Step, { kind: "flip" }>, s: GState): TeamIdx => (s.flipSub === 0 ? step.startTeam : other(step.startTeam));

export function canAnswer(game: GameId, s: GState, team: TeamIdx, step?: Step) {
  const t = s.teams[team];
  if (t.frozen) return false;
  if (step?.kind === "flip" && (s.phase === "done" || flipTeam(step, s) !== team)) return false;
  if (step?.kind === "spell" && (s.phase === "done" || step.spellTeam !== team)) return false;
  if (game === "build_person" && s.person.round === 2 && s.person.retellTeam !== team) return false;
  if (game === "boss_battle" && t.lives <= 0) return false;
  return true;
}

export function act(game: GameId, pack: GamePack, step: Step | undefined, prev: GState, a: Action): { s: GState; fx: Effects } {
  const s = clone(prev);
  const fx: Effects = {};
  const award = (team: TeamIdx, pts: number) => {
    const t = s.teams[team];
    if (pts > 0 && t.double) { pts *= 2; t.double = false; }
    t.score += pts;
  };
  const penalty = (team: TeamIdx, fn: () => void) => {
    if (s.teams[team].shield) { s.teams[team].shield = false; fx.flash = "🛡️ Shield blocked it!"; return; }
    fn();
  };
  const streak = (team: TeamIdx) => {
    if (game !== "bomb_squad" && game !== "lightning_sniper" && game !== "past_sprint" && game !== "word_sprint") return;
    if (s.streakTeam === team) s.streakCount++;
    else { s.streakTeam = team; s.streakCount = 1; }
    if (s.streakCount >= 3) { fx.offerCard = team; s.streakCount = 0; s.streakTeam = null; }
  };

  if (a.t === "ed") {
    if (step?.kind === "ed" && step.sound === a.sound) award(a.team, 2);
    s.phase = "done";
    return { s, fx };
  }

  const { team } = a;
  if (!canAnswer(game, prev, team, step)) return { s: prev, fx };

  if (game === "boss_battle") {
    if (a.t === "wrong") {
      penalty(team, () => {
        s.teams[team].lives = Math.max(0, s.teams[team].lives - (s.rage > 0 ? 2 : 1));
        fx.shake = true; fx.taunt = true;
      });
    } else {
      award(team, a.t === "first" ? 3 : 1);
      const dmg = s.crit ? 10 : 5;
      s.crit = false;
      s.bossHp = Math.max(0, s.bossHp - dmg);
      s.teams[team].damage += dmg;
      if (s.bossHp <= 0) fx.bossDead = true;
    }
    return { s, fx };
  }

  if (game === "story_heist") {
    if (a.t === "wrong") {
      penalty(team, () => {
        s.teams[team].strikes++;
        if (s.teams[team].strikes >= (pack.storyHeist?.strikesToExplode ?? 3)) { fx.punish = team; fx.explode = team; s.teams[team].strikes = 0; }
      });
    } else award(team, s.story.round === 3 ? 2 : 1);
    return { s, fx };
  }

  if (game === "build_person") {
    const bp = pack.buildPerson;
    if (s.person.round === 1) {
      if (a.t === "wrong") {
        penalty(team, () => {
          s.teams[team].strikes++;
          if (s.teams[team].strikes >= (bp?.strikesToExplode ?? 3)) { fx.punish = team; s.teams[team].strikes = 0; }
        });
      } else award(team, 1);
    } else {
      if (a.t === "wrong") penalty(team, () => { s.teams[team].score -= 1; });
      else {
        const max = bp?.cards[s.person.card]?.facts.length ?? 0;
        if (s.person.retold >= max) return { s: prev, fx };
        s.person.retold++;
        award(team, 1);
      }
    }
    return { s, fx };
  }

  if (step?.kind === "word" || step?.kind === "number") {
    if (a.t === "wrong") penalty(team, () => { s.teams[team].score -= 1; });
    else { award(team, a.t === "first" ? 2 : 1); if (a.t === "first" && step.kind === "word") streak(team); }
    return { s, fx };
  }

  if (step?.kind === "spell") {
    if (a.t === "wrong") penalty(team, () => { s.teams[other(team)].score += 1; });
    else award(team, 2);
    s.phase = "done";
    return { s, fx };
  }

  if (step?.kind === "translate" || step?.kind === "echo") {
    const echo = step.kind === "echo";
    if (a.t === "wrong") {
      penalty(team, () => {
        const t = s.teams[team];
        t.fuse = Math.max(0, t.fuse - (echo ? 10 : 15));
        if (t.fuse <= 0) { fx.explode = team; fx.punish = team; t.fuse = 100; }
      });
    } else {
      award(team, echo ? 2 : a.t === "first" ? 3 : 1);
      if (a.t === "first" && !echo) streak(team);
    }
    return { s, fx };
  }

  if (step?.kind === "fix") {
    if (a.t === "wrong") penalty(team, () => { s.teams[team].score -= 1; s.teams[other(team)].score += 1; });
    else { award(team, a.t === "first" ? 3 : 1); if (a.t === "first") streak(team); }
    return { s, fx };
  }

  if (step?.kind === "flip") {
    if (a.t === "wrong") penalty(team, () => { s.teams[team].score -= 1; });
    else award(team, 2);
    if (s.flipSub === 0) { s.flipSub = 1; fx.restartTimer = step.seconds; }
    else s.phase = "done";
    return { s, fx };
  }

  if (step?.kind === "pastform") {
    if (s.phase === "main") {
      if (a.t === "first") { award(team, 2); s.firstTeam = team; s.phase = "sentence"; fx.startSentence = true; streak(team); }
      else if (a.t === "plus") award(team, 1);
      else penalty(team, () => { s.teams[team].score -= 1; });
    } else if (s.phase === "sentence" && s.firstTeam === team) {
      if (a.t === "wrong") penalty(team, () => { s.teams[team].score -= 2; });
      else award(team, 1);
      s.phase = "done";
    }
    return { s, fx };
  }

  return { s: prev, fx };
}

export function nextStep(game: GameId, pack: GamePack, steps: Step[], prev: GState, rng: () => number = Math.random): { s: GState; fx: Effects } {
  const s = clone(prev);
  const fx: Effects = {};
  const oldRound = steps[s.idx]?.round;
  s.idx++;
  s.phase = "main";
  s.flipSub = 0;
  s.firstTeam = null;
  if (steps[s.idx]?.kind === "person") { const st = steps[s.idx] as Extract<Step, { kind: "person" }>; s.person = { ...s.person, ticks: st.card.facts.map(() => false) }; }
  s.teams[0].frozen = false;
  s.teams[1].frozen = false;
  if (s.rage > 0) s.rage--;
  const newRound = steps[s.idx]?.round;
  if (game === "boss_battle" && newRound !== undefined && newRound !== oldRound) {
    s.teams.forEach((t) => { t.lives = Math.max(1, t.lives); });
    if (newRound >= 1) {
      const ev = pack.bossBattle.events[Math.floor(rng() * pack.bossBattle.events.length)];
      if (ev) { fx.event = ev; applyEvent(s, ev, pack); }
    }
  }
  return { s, fx };
}

export function applyEvent(s: GState, ev: BossEvent, pack: GamePack) {
  const n = ev.name.toLowerCase();
  if (n.includes("heal")) s.bossHp = Math.min(pack.bossBattle.hp, s.bossHp + 10);
  else if (n.includes("freeze")) {
    if (s.teams[0].score !== s.teams[1].score) s.teams[s.teams[0].score > s.teams[1].score ? 0 : 1].frozen = true;
  } else if (n.includes("critical")) s.crit = true;
  else if (n.includes("rage")) s.rage = 3;
  else if (n.includes("swap")) { const c = s.teams[0].cards; s.teams[0].cards = s.teams[1].cards; s.teams[1].cards = c; }
}

export function giveCard(prev: GState, team: TeamIdx, card: string): GState {
  const s = clone(prev);
  if (s.teams[team].cards.length < 2) s.teams[team].cards.push(card);
  return s;
}

export function playCard(prev: GState, team: TeamIdx, cardIdx: number): GState {
  const s = clone(prev);
  const card = s.teams[team].cards[cardIdx];
  if (!card) return prev;
  s.teams[team].cards.splice(cardIdx, 1);
  const o = s.teams[other(team)];
  const n = card.toLowerCase();
  if (n === "freeze") o.frozen = true;
  else if (n === "double") s.teams[team].double = true;
  else if (n === "shield") s.teams[team].shield = true;
  else if (n === "steal") { o.score -= 3; s.teams[team].score += 3; }
  return s;
}
