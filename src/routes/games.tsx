import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { LEVELS } from "@/data/questions";
import { findGamePack } from "@/data/games";
import type { BossEvent, GamePack, GameDay } from "@/data/games/types";
import { PunishmentWheel } from "@/components/games/PunishmentWheel";
import {
  act, buildSteps, canAnswer, giveCard, initState, nextStep, other, playCard,
  type Action, type Effects, type GState, type Step, type TeamIdx,
} from "@/lib/games/engine";
import { sfx } from "@/lib/games/sounds";
import { cn } from "@/lib/utils";

type Search = { level: string; week: number; day: number };

export const Route = createFileRoute("/games")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    level: typeof s["level"] === "string" ? s["level"] : "b3",
    week: Number(s["week"]) || 1,
    day: Number(s["day"]) || 1,
  }),
  head: () => ({
    meta: [
      { title: "Games Arena — E4CC Question Wheel" },
      { name: "description", content: "10-minute end-of-class team games for English4CallCenters coaches to project on Zoom." },
      { property: "og:title", content: "Games Arena — E4CC" },
      { property: "og:description", content: "Team games: Bomb Squad, Lightning Sniper, Story Heist, Word Heist and Boss Battle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: GamesPage,
});

function GamesPage() {
  const { level, week, day } = Route.useSearch();
  const pack = findGamePack(level, week);
  const gd = pack?.days.find((d) => d.day === day);
  if (!pack || !gd) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-4xl font-bold">Games coming soon</h1>
        <p className="text-muted-foreground">There is no game pack for this level and week yet.</p>
        <Link to="/" className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">← Back</Link>
      </main>
    );
  }
  return <Arena key={`${level}-${week}-${day}`} pack={pack} gd={gd} />;
}

type Board = { days: Record<string, [number, number]>; bonus: [number, number]; names?: [string, string] };
const boardKey = (p: GamePack) => `e4cc-games-${p.level}-w${p.week}`;
const loadBoard = (p: GamePack): Board => {
  try { const b = JSON.parse(localStorage.getItem(boardKey(p)) ?? "null"); if (b?.days) return { bonus: [0, 0], ...b }; } catch {}
  return { days: {}, bonus: [0, 0] };
};

const SESSION = 600;
const SOUND_LABEL = { t: "/t/", d: "/d/", id: "/ɪd/" } as const;

function Arena({ pack, gd }: { pack: GamePack; gd: GameDay }) {
  const game = gd.game;
  const levelLabel = LEVELS.find((l) => l.id === pack.level)?.label ?? pack.level.toUpperCase();
  const steps = useMemo<Step[]>(() => buildSteps(game, pack), [game, pack]);
  const isStory = game === "story_heist";
  const isBoss = game === "boss_battle";

  const [s, setS] = useState<GState>(() => initState(game, pack, [pack.teams.suggestedNames[0] ?? "Team A", pack.teams.suggestedNames[1] ?? "Team B"]));
  const [history, setHistory] = useState<GState[]>([]);
  const [started, setStarted] = useState(false);
  const [session, setSession] = useState(SESSION);
  const [itemLeft, setItemLeft] = useState(0);
  const [itemTotal, setItemTotal] = useState(10);
  const [revealed, setRevealed] = useState(false);
  const [echoHidden, setEchoHidden] = useState(false);
  const [punishQ, setPunishQ] = useState<TeamIdx[]>([]);
  const [explosion, setExplosion] = useState<TeamIdx | null>(null);
  const [flash, setFlash] = useState<{ big: string; text: string } | null>(null);
  const [event, setEvent] = useState<BossEvent | null>(null);
  const [cardDrawer, setCardDrawer] = useState<TeamIdx | null>(null);
  const [offer, setOffer] = useState<TeamIdx | null>(null);
  const [shake, setShake] = useState(false);
  const [taunt, setTaunt] = useState<string | null>(null);
  const [final, setFinal] = useState<null | "time" | "done" | "boss">(null);
  const [edFeedback, setEdFeedback] = useState<{ team: TeamIdx; ok: boolean } | null>(null);
  const [names, setNames] = useState<[string, string]>(["", ""]);
  const [setupOpen, setSetupOpen] = useState(isStory);
  const [muted, setMuted] = useState(false);
  const lastSpeaker = useRef<string | null>(null);

  const step = steps[s.idx];
  const finishedItems = !isStory && s.idx >= steps.length;

  // load saved names (team + story students)
  useEffect(() => {
    setMuted(localStorage.getItem("e4cc-muted") === "1");
    const b = loadBoard(pack);
    if (b.names) setS((p) => ({ ...p, teams: [{ ...p.teams[0], name: b.names![0] }, { ...p.teams[1], name: b.names![1] }] }));
    try {
      const n = JSON.parse(localStorage.getItem(`${boardKey(pack)}-students`) ?? "null");
      if (Array.isArray(n) && n.length === 2) { setNames([String(n[0]), String(n[1])]); if (n[0] && n[1]) setSetupOpen(false); }
    } catch {}
  }, [pack]);

  const startItemTimer = useCallback((sec: number) => { setItemTotal(sec); setItemLeft(sec); }, []);

  // session countdown
  useEffect(() => {
    if (!started || final || session <= 0) return;
    const t = setTimeout(() => {
      setSession((x) => x - 1);
      if (session === 1) { sfx.horn(); setFinal(isBoss ? "time" : "done"); }
    }, 1000);
    return () => clearTimeout(t);
  }, [started, session, final, isBoss]);

  // item countdown
  const paused = !started || !!final || punishQ.length > 0 || !!event || explosion !== null;
  useEffect(() => {
    if (paused || itemLeft <= 0) return;
    const t = setTimeout(() => {
      setItemLeft((x) => x - 1);
      if (itemLeft <= 4 && itemLeft > 1) sfx.tick();
      if (itemLeft === 1) sfx.buzz();
    }, 1000);
    return () => clearTimeout(t);
  }, [itemLeft, paused]);

  // persist team names
  const saveNames = (teams: [string, string]) => {
    const b = loadBoard(pack);
    localStorage.setItem(boardKey(pack), JSON.stringify({ ...b, names: teams }));
  };

  const handleFx = useCallback((fx: Effects) => {
    if (fx.explode !== undefined && game !== "story_heist") {
      sfx.boom();
      setExplosion(fx.explode);
      const t = fx.explode;
      setTimeout(() => { setExplosion(null); setPunishQ((q) => [...q, t]); }, 1600);
    } else if (fx.punish !== undefined) { sfx.boom(); setPunishQ((q) => [...q, fx.punish!]); }
    if (fx.offerCard !== undefined) setOffer(fx.offerCard);
    if (fx.shake) { setShake(true); setTimeout(() => setShake(false), 500); }
    if (fx.taunt) {
      const list = pack.bossBattle.taunts;
      setTaunt(list[Math.floor(Math.random() * list.length)] ?? null);
      setTimeout(() => setTaunt(null), 2600);
    }
    if (fx.startSentence) startItemTimer(10);
    if (fx.bossDead) { sfx.horn(); setFinal("boss"); }
    if (fx.event) { setEvent(fx.event); setTimeout(() => setEvent(null), 3000); }
    if (fx.flash) { setFlash({ big: "🛡️", text: fx.flash }); setTimeout(() => setFlash(null), 1500); }
  }, [game, pack, startItemTimer]);

  const commit = (next: GState) => { setHistory((h) => [...h.slice(-40), s]); setS(next); };

  const doAct = (a: Action) => {
    if (!started || final) return;
    const { s: n, fx } = act(game, pack, step, s, a);
    if (n === s) return;
    if (a.t !== "wrong" && a.t !== "vault") sfx.ding();
    commit(n);
    handleFx(fx);
  };

  const pickSpeaker = (team: TeamIdx) => {
    const list = (names[team] ?? "").split(",").map((x) => x.trim()).filter(Boolean);
    if (!list.length) return s.teams[team].name;
    const pool = list.length > 1 ? list.filter((x) => x !== lastSpeaker.current) : list;
    const pick = pool[Math.floor(Math.random() * pool.length)] ?? list[0]!;
    lastSpeaker.current = pick;
    return pick;
  };

  const doNext = () => {
    if (!started || final) return;
    setRevealed(false); setEchoHidden(false); setEdFeedback(null);
    if (isStory) {
      const turn = s.story.speaker === null ? s.story.turn : other(s.story.turn);
      commit({ ...s, teams: [{ ...s.teams[0], frozen: false }, { ...s.teams[1], frozen: false }], story: { ...s.story, turn, speaker: pickSpeaker(turn) } });
      startItemTimer(pack.storyHeist.secondsPerTurn);
      return;
    }
    if (s.idx >= steps.length) return;
    const { s: n, fx } = nextStep(game, pack, steps, s);
    commit(n);
    handleFx(fx);
    const ns = steps[n.idx];
    if (ns) startItemTimer(ns.seconds);
  };

  const storyRound = (dir: "round" | "prompt", promptIdx?: number) => {
    const st = s.story;
    let story = st;
    if (dir === "prompt") story = { prompt: promptIdx ?? st.prompt, round: 1, turn: 0, speaker: null };
    else story = st.round < 3 ? { ...st, round: (st.round + 1) as 2 | 3, speaker: null } : { prompt: (st.prompt + 1) % pack.storyHeist.prompts.length, round: 1, turn: 0, speaker: null };
    commit({ ...s, story });
    setItemLeft(0);
  };

  const undo = () => {
    setHistory((h) => {
      const prev = h[h.length - 1];
      if (prev) setS(prev);
      return h.slice(0, -1);
    });
  };

  const start = () => {
    setStarted(true);
    if (isStory) return;
    if (step) startItemTimer(step.seconds);
  };

  // final results → leaderboard
  const [board, setBoard] = useState<Board>({ days: {}, bonus: [0, 0] });
  useEffect(() => { setBoard(loadBoard(pack)); }, [pack]);
  useEffect(() => {
    if (!final) return;
    confetti({ particleCount: final === "time" ? 60 : 260, spread: 120, origin: { y: 0.5 } });
    const b = loadBoard(pack);
    b.days[String(gd.day)] = [s.teams[0].score, s.teams[1].score];
    b.names = [s.teams[0].name, s.teams[1].name];
    if (final === "boss" && s.teams[0].damage !== s.teams[1].damage) {
      b.bonus = [0, 0];
      b.bonus[s.teams[0].damage > s.teams[1].damage ? 0 : 1] = 10;
    }
    localStorage.setItem(boardKey(pack), JSON.stringify(b));
    setBoard(b);
    if (final === "time" && isBoss) setPunishQ([0, 1]);
  }, [final]); // eslint-disable-line react-hooks/exhaustive-deps

  // keyboard
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {});
  keyRef.current = (e: KeyboardEvent) => {
    if ((e.target as HTMLElement)?.tagName === "INPUT" || (e.target as HTMLElement)?.tagName === "TEXTAREA") return;
    if (punishQ.length || final || setupOpen) return;
    const k = e.key.toLowerCase();
    const map: Record<string, Action> = {
      q: { t: "first", team: 0 }, p: { t: "first", team: 1 },
      a: { t: "plus", team: 0 }, l: { t: "plus", team: 1 },
      z: { t: "wrong", team: 0 }, m: { t: "wrong", team: 1 },
    };
    if (map[k]) { e.preventDefault(); doAct(map[k]!); }
    else if (e.code === "Space") { e.preventDefault(); if (!started) start(); else doNext(); }
    else if (k === "s") doNext();
    else if (k === "r") setRevealed((r) => !r);
    else if (k === "u" || e.key === "Backspace") undo();
  };
  useEffect(() => {
    const h = (e: KeyboardEvent) => keyRef.current(e);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  const toggleMute = () => setMuted((m) => { localStorage.setItem("e4cc-muted", m ? "0" : "1"); return !m; });
  const fullscreen = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
  const mmss = `${Math.floor(session / 60)}:${String(session % 60).padStart(2, "0")}`;
  const vaultDictating: TeamIdx = 0;

  const card = (name: string) => pack.powerCards.find((c) => c.name === name);
  const onPlayCard = (team: TeamIdx, i: number) => {
    const c = card(s.teams[team].cards[i] ?? "");
    commit(playCard(s, team, i));
    if (c) { setFlash({ big: c.emoji, text: `${s.teams[team].name}: ${c.name} — ${c.effect}` }); setTimeout(() => setFlash(null), 1800); }
  };

  const ref = (label: string, key: string, onClick: () => void, cls: string, disabled = false) => (
    <button onClick={onClick} disabled={disabled || !started || !!final} className={cn("rounded-2xl px-3 py-3 font-display text-lg font-bold shadow transition-transform active:scale-95 disabled:opacity-35", cls)}>
      {label} <span className="text-xs opacity-75">({key})</span>
    </button>
  );
  const ok = (t: TeamIdx) => canAnswer(game, s, t);
  const topBtn = "rounded-full border-2 border-border bg-card px-3 py-1.5 text-sm font-bold hover:border-primary";

  return (
    <main className={cn("flex h-screen min-h-[640px] flex-col gap-2 overflow-hidden p-3", shake && "animate-shake")}>
      {/* Top bar */}
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Link to="/" className={topBtn}>← Back</Link>
          <p className="font-display text-lg font-semibold">
            <span className="text-accent">{levelLabel} · Week {pack.week} · Day {gd.day}</span> · <span className="text-primary">{gd.title}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          {isStory && <button onClick={() => setSetupOpen(true)} className={topBtn}>👥 Names</button>}
          <button onClick={toggleMute} className={topBtn}>{muted ? "🔇" : "🔊"}</button>
          <button onClick={fullscreen} className={topBtn}>⛶</button>
          <button onClick={() => setFinal(isBoss ? "time" : "done")} className={topBtn}>🏁 End</button>
          <span className={cn("rounded-2xl px-4 py-1 font-display text-3xl font-bold tabular-nums", session <= 60 ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground")}>{mmss}</span>
        </div>
      </header>

      {isBoss && <BossBar pack={pack} s={s} />}

      <div className="grid min-h-0 flex-1 grid-cols-[230px_1fr_230px] gap-3">
        {([0, 1] as TeamIdx[]).map((t) => (
          <TeamPanel
            key={t}
            t={t}
            s={s}
            game={game}
            pack={pack}
            className={t === 0 ? "order-1" : "order-3"}
            onRename={(name) => { const n: GState = { ...s, teams: [...s.teams] as GState["teams"] }; n.teams[t] = { ...n.teams[t], name }; setS(n); saveNames([n.teams[0].name, n.teams[1].name]); }}
            onPlay={(i) => onPlayCard(t, i)}
          />
        ))}

        {/* Center */}
        <section className="order-2 flex min-h-0 flex-col items-center justify-center gap-3 rounded-3xl bg-card p-4 text-center shadow-xl">
          {isBoss && <BossMonster taunt={taunt} rage={s.rage > 0} />}
          {!started ? (
            <div className="flex flex-col items-center gap-4">
              <p className="font-display text-5xl font-bold text-primary">{gd.title}</p>
              <p className="text-lg text-muted-foreground">{gd.grammar}</p>
              <button onClick={start} className="rounded-full bg-accent px-14 py-5 font-display text-4xl font-bold text-accent-foreground shadow-xl hover:scale-105">▶ Start</button>
              <p className="text-sm text-muted-foreground">Space = start · 10-minute session</p>
            </div>
          ) : isStory ? (
            <StoryCenter pack={pack} s={s} itemLeft={itemLeft} itemTotal={itemTotal} onPrompt={(i) => storyRound("prompt", i)} onRound={() => storyRound("round")} />
          ) : finishedItems ? (
            <div className="flex flex-col items-center gap-4">
              <p className="font-display text-5xl font-bold">All items done 🎉</p>
              <button onClick={() => setFinal(isBoss ? "time" : "done")} className="rounded-full bg-accent px-10 py-4 font-display text-3xl font-bold text-accent-foreground">Final results</button>
            </div>
          ) : step ? (
            <ItemCenter
              step={step} s={s} game={game} itemLeft={itemLeft} itemTotal={itemTotal}
              revealed={revealed} echoHidden={echoHidden} onHideEcho={() => setEchoHidden(true)}
              edFeedback={edFeedback} total={steps.length}
              onEd={(team, sound) => { if (s.phase === "done") return; doAct({ t: "ed", team, sound }); setEdFeedback({ team, ok: step.kind === "ed" && step.sound === sound }); }}
              onVault={(okv) => doAct({ t: "vault", ok: okv, dictating: vaultDictating })}
              teamNames={[s.teams[0].name, s.teams[1].name]}
            />
          ) : null}
        </section>
      </div>

      {/* Referee bar */}
      <footer className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-3xl bg-card p-2 shadow-xl">
        <div className="grid grid-cols-3 gap-2">
          {ref("A first ✔", "Q", () => doAct({ t: "first", team: 0 }), "bg-team-a text-team-foreground", !ok(0))}
          {ref("+A", "A", () => doAct({ t: "plus", team: 0 }), "bg-team-a/80 text-team-foreground", !ok(0))}
          {ref("✘A", "Z", () => doAct({ t: "wrong", team: 0 }), "border-2 border-team-a bg-card text-team-a", !ok(0))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {ref(isStory ? "Next turn" : "Next", "Space", doNext, "bg-accent text-accent-foreground")}
          {!isStory && ref("Skip", "S", doNext, "bg-muted text-foreground")}
          {!isStory && ref(revealed ? "Hide" : "Reveal", "R", () => setRevealed((r) => !r), "bg-secondary text-secondary-foreground")}
          <button onClick={() => setCardDrawer(0)} disabled={!started} className="rounded-2xl bg-secondary px-3 py-3 font-display text-lg font-bold disabled:opacity-35">🎁 Card</button>
          <button onClick={() => setPunishQ((q) => [...q, s.teams[0].score <= s.teams[1].score ? 0 : 1])} disabled={!started} className="rounded-2xl bg-crazy px-3 py-3 font-display text-lg font-bold text-crazy-foreground disabled:opacity-35">💥 Punish</button>
          <button onClick={undo} disabled={!history.length} className="rounded-2xl border-2 border-border px-3 py-3 font-display text-lg font-bold disabled:opacity-35">↺ Undo <span className="text-xs opacity-75">(U)</span></button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {ref("✘B", "M", () => doAct({ t: "wrong", team: 1 }), "border-2 border-team-b bg-card text-team-b", !ok(1))}
          {ref("+B", "L", () => doAct({ t: "plus", team: 1 }), "bg-team-b/80 text-team-foreground", !ok(1))}
          {ref("B first ✔", "P", () => doAct({ t: "first", team: 1 }), "bg-team-b text-team-foreground", !ok(1))}
        </div>
      </footer>

      {/* Overlays */}
      {offer !== null && cardDrawer === null && (
        <div className="fixed bottom-28 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-accent px-6 py-3 font-display text-xl font-bold text-accent-foreground shadow-2xl">
          🔥 3 in a row for {s.teams[offer].name}!
          <button onClick={() => { setCardDrawer(offer); setOffer(null); }} className="rounded-full bg-card px-4 py-1 text-foreground">Give a card</button>
          <button onClick={() => setOffer(null)} className="text-sm underline">later</button>
        </div>
      )}

      {cardDrawer !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4" onClick={() => setCardDrawer(null)}>
          <div className="w-full max-w-3xl rounded-3xl bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-2xl font-bold">🎁 Give a power card to</p>
              <div className="flex gap-2">
                {([0, 1] as TeamIdx[]).map((t) => (
                  <button key={t} onClick={() => setCardDrawer(t)} className={cn("rounded-full px-4 py-2 font-bold", cardDrawer === t ? (t === 0 ? "bg-team-a text-team-foreground" : "bg-team-b text-team-foreground") : "border-2 border-border")}>
                    {s.teams[t].name}
                  </button>
                ))}
              </div>
            </div>
            {s.teams[cardDrawer].cards.length >= 2 && <p className="mb-3 font-bold text-destructive">This team already holds 2 cards (max).</p>}
            <div className="grid grid-cols-2 gap-3">
              {pack.powerCards.map((c) => (
                <button
                  key={c.name}
                  disabled={s.teams[cardDrawer].cards.length >= 2}
                  onClick={() => { commit(giveCard(s, cardDrawer, c.name)); setCardDrawer(null); }}
                  className="rounded-2xl border-2 border-border p-4 text-left hover:border-primary disabled:opacity-40"
                >
                  <p className="font-display text-2xl font-bold">{c.emoji} {c.name}</p>
                  <p className="text-muted-foreground">{c.effect}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {explosion !== null && (
        <div className="fixed inset-0 z-[55] flex flex-col items-center justify-center bg-overlay">
          <p className="animate-in zoom-in-50 text-[12rem] leading-none">💥</p>
          <p className="font-display text-6xl font-bold text-team-foreground">BOOM! {s.teams[explosion].name}</p>
        </div>
      )}

      {flash && (
        <div className="pointer-events-none fixed inset-0 z-[58] flex flex-col items-center justify-center gap-4 bg-overlay p-8 text-center">
          <p className="animate-in zoom-in-50 text-9xl">{flash.big}</p>
          <p className="max-w-4xl font-display text-4xl font-bold text-team-foreground">{flash.text}</p>
        </div>
      )}

      {event && (
        <div className="fixed inset-0 z-[58] flex flex-col items-center justify-center gap-4 bg-overlay p-8 text-center">
          <p className="font-display text-2xl font-bold text-accent">⚡ RANDOM EVENT</p>
          <p className="animate-in zoom-in-50 font-display text-8xl font-bold text-team-foreground">{event.name}</p>
          <p className="max-w-3xl font-display text-3xl text-team-foreground">{event.effect}</p>
        </div>
      )}

      {setupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4">
          <div className="w-full max-w-3xl space-y-4 rounded-3xl bg-card p-6 shadow-2xl">
            <p className="font-display text-3xl font-bold">👥 Students per team</p>
            <p className="text-muted-foreground">Type names separated by commas. Saved for the whole week.</p>
            {([0, 1] as TeamIdx[]).map((t) => (
              <label key={t} className="block">
                <span className={cn("font-display text-xl font-bold", t === 0 ? "text-team-a" : "text-team-b")}>{s.teams[t].name}</span>
                <textarea
                  value={names[t]}
                  onChange={(e) => { const n: [string, string] = [...names]; n[t] = e.target.value; setNames(n); }}
                  rows={2}
                  className="mt-1 w-full rounded-2xl border-2 border-border bg-background p-3 text-lg"
                  placeholder="Ana, Luis, Carla, José…"
                />
              </label>
            ))}
            <button
              onClick={() => { localStorage.setItem(`${boardKey(pack)}-students`, JSON.stringify(names)); setSetupOpen(false); }}
              className="rounded-full bg-accent px-8 py-3 font-display text-xl font-bold text-accent-foreground"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {final && punishQ.length === 0 && (
        <FinalPanel
          pack={pack} s={s} final={final} board={board} day={gd.day}
          onClose={() => setFinal(null)}
          onPunishLoser={() => { if (s.teams[0].score !== s.teams[1].score) setPunishQ([s.teams[0].score < s.teams[1].score ? 0 : 1]); }}
        />
      )}

      {punishQ.length > 0 && (
        <PunishmentWheel
          key={`${punishQ.length}-${punishQ[0]}`}
          items={pack.punishments}
          teamName={s.teams[punishQ[0]!].name}
          onClose={() => setPunishQ((q) => q.slice(1))}
        />
      )}
    </main>
  );
}

function TeamPanel({ t, s, game, pack, className, onRename, onPlay }: {
  t: TeamIdx; s: GState; game: GameDay["game"]; pack: GamePack; className: string;
  onRename: (n: string) => void; onPlay: (i: number) => void;
}) {
  const team = s.teams[t];
  const color = t === 0 ? "bg-team-a" : "bg-team-b";
  const streak = s.streakTeam === t ? s.streakCount : 0;
  return (
    <aside className={cn("flex min-h-0 flex-col gap-3 rounded-3xl p-4 text-team-foreground shadow-xl", color, className, team.frozen && "opacity-60")}>
      <input value={team.name} onChange={(e) => onRename(e.target.value)} className="w-full rounded-xl bg-transparent text-center font-display text-2xl font-bold outline-none focus:bg-card/20" aria-label="Team name" />
      <p className="text-center font-display text-8xl font-bold leading-none tabular-nums">{team.score}</p>
      {game === "boss_battle" ? (
        <p className="text-center text-4xl">{Array.from({ length: pack.bossBattle.lives }, (_, i) => (i < team.lives ? "❤️" : "🖤")).join("")}</p>
      ) : game === "bomb_squad" ? (
        <div>
          <p className="text-sm font-bold">💣 Fuse {team.fuse}%</p>
          <div className="mt-1 h-4 overflow-hidden rounded-full bg-card/30"><div className="h-full rounded-full bg-accent transition-all" style={{ width: `${team.fuse}%` }} /></div>
        </div>
      ) : null}
      {game === "story_heist" && <p className="text-center text-3xl font-bold">{team.strikes > 0 ? `⚠️ x${team.strikes}` : "—"}</p>}
      {game === "boss_battle" && <p className="text-center text-sm font-bold">⚔️ Damage dealt: {team.damage}</p>}
      <p className="text-center font-bold">🔥 Streak: {streak}</p>
      <div className="flex flex-wrap justify-center gap-1 text-xs font-bold">
        {team.frozen && <span className="rounded-full bg-card/30 px-2 py-0.5">🧊 FROZEN</span>}
        {team.double && <span className="rounded-full bg-card/30 px-2 py-0.5">✖️2 Double</span>}
        {team.shield && <span className="rounded-full bg-card/30 px-2 py-0.5">🛡️ Shield</span>}
      </div>
      <div className="mt-auto space-y-2">
        <p className="text-center text-xs font-bold uppercase tracking-wider opacity-80">Power cards (tap to play)</p>
        {[0, 1].map((i) => {
          const c = pack.powerCards.find((p) => p.name === team.cards[i]);
          return c ? (
            <button key={i} onClick={() => onPlay(i)} className="w-full rounded-xl bg-card px-2 py-2 font-display text-lg font-bold text-foreground shadow hover:scale-105">{c.emoji} {c.name}</button>
          ) : (
            <div key={i} className="rounded-xl border-2 border-dashed border-card/40 py-2 text-center text-sm opacity-60">empty</div>
          );
        })}
      </div>
    </aside>
  );
}

function ItemTimer({ left, total, label }: { left: number; total: number; label?: string | undefined }) {
  const r = 34;
  const c = 2 * Math.PI * r;
  const frac = total > 0 ? left / total : 0;
  return (
    <div className="flex items-center gap-2">
      <svg width="88" height="88" viewBox="0 0 88 88">
        <circle cx="44" cy="44" r={r} fill="none" stroke="var(--muted)" strokeWidth="8" />
        <circle cx="44" cy="44" r={r} fill="none" stroke={left <= 3 ? "var(--destructive)" : "var(--primary)"} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - frac)} transform="rotate(-90 44 44)" style={{ transition: "stroke-dashoffset 1s linear" }} />
        <text x="44" y="44" textAnchor="middle" dominantBaseline="central" fontSize="28" fontWeight="700" fontFamily="Fredoka, sans-serif" fill={left <= 3 ? "var(--destructive)" : "var(--foreground)"}>{left}</text>
      </svg>
      {label && <span className="font-bold text-muted-foreground">{label}</span>}
    </div>
  );
}

function ItemCenter({ step, s, game, itemLeft, itemTotal, revealed, echoHidden, onHideEcho, edFeedback, total, onEd, onVault, teamNames }: {
  step: Step; s: GState; game: GameDay["game"]; itemLeft: number; itemTotal: number; revealed: boolean; echoHidden: boolean; onHideEcho: () => void;
  edFeedback: { team: TeamIdx; ok: boolean } | null; total: number; onEd: (t: TeamIdx, sound: "t" | "d" | "id") => void; onVault: (ok: boolean) => void; teamNames: [string, string];
}) {
  const big = "font-display text-[clamp(40px,4.4vw,64px)] font-semibold leading-tight";
  const answer = "rounded-2xl bg-secondary px-6 py-3 text-2xl font-bold text-secondary-foreground";
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <span className="font-bold text-muted-foreground">Item {s.idx + 1}/{total}</span>
        <ItemTimer left={itemLeft} total={itemTotal} label={s.phase === "sentence" ? "Sentence!" : undefined} />
      </div>
      {game === "bomb_squad" && <p className="animate-bomb text-7xl">💣</p>}

      {step.kind === "translate" && (
        <>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Translate into English</p>
          <p className={big}>{step.es}</p>
          {revealed && <div className={answer}>{step.en}{step.alt?.map((a) => <p key={a} className="text-lg opacity-80">or: {a}</p>)}</div>}
        </>
      )}
      {step.kind === "echo" && (
        <>
          <p className="rounded-full bg-crazy px-5 py-1 font-display text-xl font-bold text-crazy-foreground">🔊 ECHO ROUND — Coach reads it ONCE</p>
          {!echoHidden || revealed ? <p className={big}>{step.en}</p> : <p className={cn(big, "text-muted-foreground")}>🙈 Repeat it exactly!</p>}
          {!echoHidden && <button onClick={onHideEcho} className="rounded-full border-2 border-border px-6 py-2 font-bold">Hide sentence</button>}
          <p className="text-sm text-muted-foreground">✔ = 2 pts · ✘ = fuse −10%</p>
        </>
      )}
      {step.kind === "fix" && (
        <>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">🎯 Fix the mistake</p>
          <p className={cn(big, "text-destructive")}>🎯 {step.wrong}</p>
          {revealed && <div className={answer}>✅ {step.right}<p className="text-lg opacity-80">💡 {step.hint}</p></div>}
        </>
      )}
      {step.kind === "ed" && (
        <>
          <p className="rounded-full bg-accent px-5 py-1 font-display text-xl font-bold text-accent-foreground">🗣️ SAY IT RIGHT — verb + its -ED sound</p>
          <p className={big}>{step.verb}</p>
          {([0, 1] as TeamIdx[]).map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className={cn("w-32 truncate font-bold", t === 0 ? "text-team-a" : "text-team-b")}>{teamNames[t]}</span>
              {(["t", "d", "id"] as const).map((snd) => (
                <button key={snd} disabled={s.phase === "done"} onClick={() => onEd(t, snd)}
                  className={cn("rounded-2xl px-6 py-3 font-display text-3xl font-bold text-team-foreground disabled:opacity-40", t === 0 ? "bg-team-a" : "bg-team-b")}>
                  {SOUND_LABEL[snd]}
                </button>
              ))}
            </div>
          ))}
          {edFeedback && <p className={cn("font-display text-3xl font-bold", edFeedback.ok ? "text-primary" : "text-destructive")}>{edFeedback.ok ? "✔ Correct! +2" : `✘ It's ${SOUND_LABEL[step.sound]}`}</p>}
          {revealed && !edFeedback && <div className={answer}>{SOUND_LABEL[step.sound]}</div>}
        </>
      )}
      {step.kind === "vocab" && (
        <>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Guess the word</p>
          <p className={big}>{step.clue}</p>
          {s.phase === "sentence" && s.firstTeam !== null && (
            <p className="rounded-full bg-accent px-5 py-2 font-display text-2xl font-bold text-accent-foreground">
              {teamNames[s.firstTeam]}: say a sentence in the PAST with the word! (✔ +1 · ✘ −2)
            </p>
          )}
          {revealed && <div className={answer}>{step.word} · {SOUND_LABEL[step.sound]}<p className="text-lg opacity-80">{step.example}</p></div>}
        </>
      )}
      {step.kind === "vault" && (
        <>
          <p className="rounded-full bg-primary px-5 py-1 font-display text-xl font-bold text-primary-foreground">🔐 PHONETIC VAULT</p>
          {itemLeft > 0 || revealed ? <p className="font-display text-8xl font-bold tracking-widest">{step.code}</p> : <p className={cn(big, "text-muted-foreground")}>🔒 Code hidden</p>}
          <p className="text-lg">{teamNames[0]} dictates it with the phonetic alphabet · {teamNames[1]} types it in the chat</p>
          <div className="flex gap-3">
            <button disabled={s.phase === "done"} onClick={() => onVault(true)} className="rounded-2xl bg-team-a px-6 py-3 font-display text-xl font-bold text-team-foreground disabled:opacity-40">🔓 Opened → {teamNames[0]} steals 5</button>
            <button disabled={s.phase === "done"} onClick={() => onVault(false)} className="rounded-2xl bg-team-b px-6 py-3 font-display text-xl font-bold text-team-foreground disabled:opacity-40">🔒 Failed → {teamNames[1]} +2</button>
          </div>
        </>
      )}
      {step.kind === "retell" && (
        <>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Final round · Retell</p>
          <p className={cn(big, "text-[clamp(32px,3vw,48px)]")}>{step.prompt}</p>
          <p className="text-xl text-muted-foreground">{step.retellAs}</p>
        </>
      )}
    </>
  );
}

function StoryCenter({ pack, s, itemLeft, itemTotal, onPrompt, onRound }: { pack: GamePack; s: GState; itemLeft: number; itemTotal: number; onPrompt: (i: number) => void; onRound: () => void }) {
  const p = pack.storyHeist.prompts[s.story.prompt];
  const label = s.story.round === 1 ? "ROUND 1 · PAST" : s.story.round === 2 ? "ROUND 2 · PRESENT" : "ROUND 3 · FUTURE (2 pts)";
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-1">
          {pack.storyHeist.prompts.map((_, i) => (
            <button key={i} onClick={() => onPrompt(i)} className={cn("rounded-full px-3 py-1 text-sm font-bold", i === s.story.prompt ? "bg-primary text-primary-foreground" : "border-2 border-border")}>Story {i + 1}</button>
          ))}
        </div>
        <ItemTimer left={itemLeft} total={itemTotal} />
      </div>
      <p className="rounded-full bg-accent px-5 py-1 font-display text-xl font-bold text-accent-foreground">{label}</p>
      <p className="font-display text-[clamp(28px,2.8vw,42px)] font-semibold leading-tight">{s.story.round === 1 ? p?.prompt : p?.retellAs}</p>
      {s.story.speaker ? (
        <p className={cn("rounded-3xl px-10 py-4 font-display text-[clamp(48px,5vw,80px)] font-bold text-team-foreground", s.story.turn === 0 ? "bg-team-a" : "bg-team-b")}>🎤 {s.story.speaker}</p>
      ) : (
        <p className="text-xl text-muted-foreground">Press Next turn (Space) to pick the first speaker</p>
      )}
      <p className="text-sm text-muted-foreground">One sentence each · ✔ = {s.story.round === 3 ? 2 : 1} pt · ✘ = strike (3 strikes = 💥)</p>
      <button onClick={onRound} className="rounded-full border-2 border-primary px-6 py-2 font-bold text-primary">{s.story.round < 3 ? "Next round →" : "Next story →"}</button>
    </>
  );
}

function BossBar({ pack, s }: { pack: GamePack; s: GState }) {
  const pct = (s.bossHp / pack.bossBattle.hp) * 100;
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-card px-4 py-2 shadow">
      <span className="font-display text-xl font-bold text-destructive">👹 {pack.bossBattle.name}</span>
      <div className="h-6 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-destructive transition-all" style={{ width: `${pct}%` }} /></div>
      <span className="font-display text-xl font-bold tabular-nums">{s.bossHp} HP</span>
      {s.crit && <span className="font-bold">💎 Critical ready</span>}
      {s.rage > 0 && <span className="font-bold text-destructive">🔥 Rage ({s.rage})</span>}
    </div>
  );
}

function BossMonster({ taunt, rage }: { taunt: string | null; rage: boolean }) {
  return (
    <div className="relative">
      <svg width="130" height="110" viewBox="0 0 130 110" className={cn(rage && "animate-bomb")}>
        <path d="M20 40 L10 8 L38 28 Z M110 40 L120 8 L92 28 Z" fill="var(--seg-7)" />
        <ellipse cx="65" cy="62" rx="52" ry="44" fill="var(--seg-7)" />
        <circle cx="45" cy="48" r="10" fill="var(--card)" /><circle cx="85" cy="48" r="10" fill="var(--card)" />
        <circle cx="45" cy="50" r="5" fill="var(--destructive)" /><circle cx="85" cy="50" r="5" fill="var(--destructive)" />
        <path d="M42 72 L52 80 L60 72 L70 80 L78 72 L88 80" stroke="var(--card)" strokeWidth="4" fill="none" />
        <text x="65" y="100" textAnchor="middle" fontSize="16" fontWeight="800" fontFamily="Fredoka, sans-serif" fill="var(--accent)">-ED</text>
      </svg>
      {taunt && (
        <div className="absolute left-full top-0 ml-2 w-64 rounded-2xl border-2 border-destructive bg-card p-3 text-left font-bold animate-in zoom-in-75">💬 {taunt}</div>
      )}
    </div>
  );
}

function FinalPanel({ pack, s, final, board, day, onClose, onPunishLoser }: {
  pack: GamePack; s: GState; final: "time" | "done" | "boss"; board: Board; day: number; onClose: () => void; onPunishLoser: () => void;
}) {
  const [a, b] = s.teams;
  const winner = a.score === b.score ? null : a.score > b.score ? 0 : 1;
  const totals: [number, number] = [board.bonus[0], board.bonus[1]];
  Object.values(board.days).forEach(([x, y]) => { totals[0] += x; totals[1] += y; });
  const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4">
      <div className="w-full max-w-4xl space-y-4 rounded-3xl bg-card p-6 text-center shadow-2xl">
        {pack.days.find((d) => d.day === day)?.game === "boss_battle" ? (
          <p className="font-display text-6xl font-bold text-primary">{final === "boss" ? "🏆 BOSS DEFEATED!" : "👹 THE BEAST SURVIVED"}</p>
        ) : null}
        <p className="font-display text-5xl font-bold">{winner === null ? "🤝 It's a tie!" : `🏆 ${s.teams[winner].name} wins!`}</p>
        <div className="flex justify-center gap-6">
          {([0, 1] as TeamIdx[]).map((t) => (
            <div key={t} className={cn("rounded-3xl px-10 py-4 text-team-foreground", t === 0 ? "bg-team-a" : "bg-team-b")}>
              <p className="font-display text-2xl font-bold">{s.teams[t].name}</p>
              <p className="font-display text-7xl font-bold">{s.teams[t].score}</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl bg-muted p-4">
          <p className="mb-2 font-display text-2xl font-bold">🏆 Week leaderboard</p>
          <table className="mx-auto text-lg">
            <thead><tr><th className="px-3 text-left">Team</th>{dayNames.map((d) => <th key={d} className="px-3">{d}</th>)}<th className="px-3">Bonus</th><th className="px-3">Total</th></tr></thead>
            <tbody>
              {([0, 1] as TeamIdx[]).map((t) => (
                <tr key={t}>
                  <td className={cn("px-3 text-left font-bold", t === 0 ? "text-team-a" : "text-team-b")}>{s.teams[t].name}</td>
                  {[1, 2, 3, 4, 5].map((d) => <td key={d} className="px-3">{board.days[String(d)]?.[t] ?? "—"}</td>)}
                  <td className="px-3">{board.bonus[t] || "—"}</td>
                  <td className="px-3 font-display text-2xl font-bold">{totals[t]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center gap-3">
          {winner !== null && <button onClick={onPunishLoser} className="rounded-full bg-crazy px-8 py-3 font-display text-xl font-bold text-crazy-foreground">💥 Punish the loser</button>}
          <button onClick={onClose} className="rounded-full border-2 border-border px-8 py-3 font-display text-xl font-bold">Close</button>
          <Link to="/" className="rounded-full bg-primary px-8 py-3 font-display text-xl font-bold text-primary-foreground">← Home</Link>
        </div>
      </div>
    </div>
  );
}
