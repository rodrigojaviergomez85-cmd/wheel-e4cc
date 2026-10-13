import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LEVELS, findDay, isDebateDay, type WheelMode } from "@/data/questions";
import { ModeToggle, isMode } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import { findGamePack } from "@/data/games";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E4CC Question Wheel — Choose your class" },
      { name: "description", content: "Pick a level, week and day to open the English4CallCenters speaking wheel." },
      { property: "og:title", content: "E4CC Question Wheel" },
      { property: "og:description", content: "Pick a level, week and day to open the speaking wheel." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Selector,
});

const chip =
  "relative rounded-2xl border-2 px-4 py-3 font-display text-lg font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-45";
const on = "border-primary bg-primary text-primary-foreground shadow-lg scale-[1.03]";
const off = "border-border bg-card text-foreground hover:border-primary";

function Selector() {
  const [level, setLevel] = useState("b1");
  const [week, setWeek] = useState(1);
  const [day, setDay] = useState(1);
  const [mode, setModeState] = useState<WheelMode>("classic");
  useEffect(() => {
    const m = localStorage.getItem("e4cc-mode");
    if (isMode(m)) setModeState(m);
  }, []);
  const setMode = (m: WheelMode) => { setModeState(m); localStorage.setItem("e4cc-mode", m); };
  const sel = findDay(level, week, day);
  const canOpen = !!sel?.enabled;
  const debate = sel ? isDebateDay(sel) : false;
  const pack = findGamePack(level, week);
  const gameDay = pack?.days.find((g) => g.day === day);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 md:py-16">
      <header className="mb-10 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-accent">English4CallCenters</p>
        <h1 className="mt-2 text-5xl font-bold text-primary md:text-6xl">Question Wheel</h1>
        <p className="mt-3 text-muted-foreground">Choose your class and spin!</p>
      </header>

      <section className="space-y-8 rounded-3xl bg-card p-6 shadow-xl md:p-8">
        <div>
          <h2 className="mb-3 text-xl font-semibold">Level</h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
            {LEVELS.map((l) => (
              <button key={l.id} disabled={!l.enabled} onClick={() => setLevel(l.id)} className={cn(chip, level === l.id ? on : off)}>
                {l.label}
                {!l.enabled && (
                  <span className="absolute -top-2 right-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                    Coming soon
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">Week</h2>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((w) => (
              <button key={w} onClick={() => setWeek(w)} className={cn(chip, week === w ? on : off)}>
                Week {w}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">Day</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {[1, 2, 3, 4, 5].map((d) => {
              const info = findDay(level, week, d);
              const disabled = !info?.enabled && !pack?.days.some((g) => g.day === d);
              return (
                <button key={d} disabled={disabled} onClick={() => setDay(d)} className={cn(chip, "flex flex-col", day === d && !disabled ? on : off)}>
                  Day {d}
                  {disabled && <span className="text-xs font-sans font-bold">{info?.title ?? "No wheel"}</span>}
                </button>
              );
            })}
          </div>
        </div>

        {canOpen && !debate && (
          <div>
            <h2 className="mb-3 text-xl font-semibold">Wheel mode</h2>
            <ModeToggle value={mode} onChange={setMode} />
          </div>
        )}

        <div className="flex flex-col items-center gap-3 border-t pt-6 text-center">
          {sel && <p className="font-display text-2xl font-semibold">{sel.title}</p>}
          {sel?.grammar && <p className="text-sm text-muted-foreground">{sel.grammar}</p>}
          {!canOpen && sel?.disabledReason && <p className="text-sm font-bold text-destructive">{sel.disabledReason}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3">
          {canOpen ? (
            <Link
              to="/wheel"
              search={{ level, week, day, mode }}
              className="rounded-full bg-accent px-10 py-4 font-display text-2xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
            >
              Open wheel →
            </Link>
          ) : (
            <span className="rounded-full bg-muted px-10 py-4 font-display text-2xl font-bold text-muted-foreground">No wheel today</span>
          )}
          {gameDay ? (
            <Link
              to="/games"
              search={{ level, week, day }}
              className="rounded-full bg-primary px-10 py-4 font-display text-2xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              🎮 Games
            </Link>
          ) : (
            <span className="relative rounded-full bg-muted px-10 py-4 font-display text-2xl font-bold text-muted-foreground">
              🎮 Games
              <span className="absolute -top-2 right-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">Coming soon</span>
            </span>
          )}
          </div>
          {gameDay && <p className="text-sm text-muted-foreground">Today's game: {gameDay.title}</p>}
        </div>
      </section>
    </main>
  );
}
