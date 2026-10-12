import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { findDay, LEVELS, isCrazy, isDebateDay, pickWheelIndices, type WheelMode } from "@/data/questions";
import { ModeToggle, isMode } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";

type Search = { level: string; week: number; day: number; mode?: WheelMode };

export const Route = createFileRoute("/wheel")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    level: typeof s["level"] === "string" ? s["level"] : "b1",
    week: Number(s["week"]) || 1,
    day: Number(s["day"]) || 1,
    mode: isMode(s["mode"]) ? s["mode"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Spin the wheel — E4CC Question Wheel" },
      { name: "description", content: "Spin the wheel and answer the English speaking question." },
      { property: "og:title", content: "Spin the wheel — E4CC" },
      { property: "og:description", content: "Live speaking practice wheel for English4CallCenters classes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: WheelPage,
});

const SEG_COLORS = Array.from({ length: 10 }, (_, i) => `var(--seg-${i + 1})`);
const SPIN_MS = 4500;

function playTick(ctx: AudioContext) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "square";
  o.frequency.value = 1400;
  g.gain.setValueAtTime(0.08, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.04);
  o.connect(g).connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + 0.05);
}

function WheelPage() {
  const search = Route.useSearch();
  const { level, week, day } = search;
  const navigate = Route.useNavigate();
  const data = findDay(level, week, day);
  const levelLabel = LEVELS.find((l) => l.id === level)?.label ?? level.toUpperCase();
  const debate = data ? isDebateDay(data) : false;

  const [mode, setModeState] = useState<WheelMode>(search.mode ?? "classic");
  const [wheel, setWheel] = useState<number[]>([]);
  const [remaining, setRemaining] = useState<number[]>([]);
  const [loadedKey, setLoadedKey] = useState("");
  const key = `e4cc-${level}-w${week}-d${day}-${mode}`;
  const total = wheel.length;

  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [showList, setShowList] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  const wheelRef = useRef<SVGGElement>(null);

  // Resolve mode from URL, else stored, else classic
  useEffect(() => {
    try {
      setMuted(localStorage.getItem("e4cc-muted") === "1");
      if (!search.mode) {
        const m = localStorage.getItem("e4cc-mode");
        if (isMode(m)) setModeState(m);
      } else {
        setModeState(search.mode);
        localStorage.setItem("e4cc-mode", search.mode);
      }
    } catch {}
  }, [search.mode]);

  // Load wheel + progress for this class/mode
  useEffect(() => {
    if (!data || !data.enabled) return;
    let picked: number[] | undefined;
    let rem: number[] | undefined;
    try {
      const saved = JSON.parse(localStorage.getItem(key) ?? "null");
      if (Array.isArray(saved)) rem = saved;
      else if (saved) { picked = saved.picked; rem = saved.remaining; }
    } catch {}
    const w = pickWheelIndices(data, mode, picked);
    const valid = rem?.filter((i) => w.includes(i));
    setWheel(w);
    setRemaining(valid ?? w);
    setResult(null);
    setLoadedKey(key);
  }, [key, data, mode]);

  useEffect(() => {
    if (loadedKey !== key) return;
    const picked = wheel.filter((i) => data && isCrazy(data.questions[i] ?? ""));
    localStorage.setItem(key, JSON.stringify(mode === "classic" ? { picked, remaining } : { remaining }));
  }, [remaining, wheel, key, loadedKey, mode, data]);

  const changeMode = (m: WheelMode) => {
    if (spinning) return;
    localStorage.setItem("e4cc-mode", m);
    setModeState(m);
    void navigate({ search: { level, week, day, mode: m }, replace: true });
  };

  const spin = useCallback(() => {
    if (spinning || remaining.length === 0 || result !== null) return;
    const n = remaining.length;
    const winIdx = Math.floor(Math.random() * n);
    const segDeg = 360 / n;
    const jitter = (Math.random() - 0.5) * segDeg * 0.6;
    const target = 360 - (winIdx * segDeg + segDeg / 2) + jitter;
    const current = ((rotation % 360) + 360) % 360;
    const delta = ((target - current + 360) % 360) + 360 * (5 + Math.floor(Math.random() * 2));
    const final = rotation + delta;
    setRotation(final);
    setSpinning(true);

    if (!muted) {
      if (!audioRef.current) audioRef.current = new AudioContext();
      const ctx = audioRef.current;
      const start = performance.now();
      let lastSeg = -1;
      const startRot = rotation;
      const tick = () => {
        const el = wheelRef.current?.ownerSVGElement?.parentElement;
        if (!el) return;
        const m = new DOMMatrix(getComputedStyle(el).transform);
        const ang = (Math.atan2(m.b, m.a) * 180) / Math.PI;
        const seg = Math.floor((((ang % 360) + 360) % 360) / segDeg);
        if (seg !== lastSeg) { playTick(ctx); lastSeg = seg; }
        if (performance.now() - start < SPIN_MS) requestAnimationFrame(tick);
      };
      void startRot;
      requestAnimationFrame(tick);
    }

    setTimeout(() => {
      setSpinning(false);
      const q = remaining[winIdx]!;
      setResult(q);
      setRemaining((r) => r.filter((x) => x !== q));
      confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 } });
    }, SPIN_MS);
  }, [spinning, remaining, result, rotation, muted]);

  const spinRef = useRef(spin);
  spinRef.current = spin;
  const closeResult = () => setResult(null);
  const nextSpin = () => { setResult(null); setTimeout(() => spinRef.current(), 50); };
  const reset = () => {
    if (!data) return;
    const w = pickWheelIndices(data, mode); // re-rolls crazy pick in classic
    setWheel(w);
    setRemaining(w);
    setResult(null);
  };
  const toggleMute = () => setMuted((m) => { localStorage.setItem("e4cc-muted", m ? "0" : "1"); return !m; });
  const fullscreen = () => (document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") { e.preventDefault(); spin(); }
      if (e.key === "Escape") setResult(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [spin]);

  if (!data || !data.enabled) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
        <h1 className="text-4xl font-bold">No wheel for this class</h1>
        <p className="text-muted-foreground">{data?.disabledReason ?? "This class doesn't exist yet."}</p>
        <Link to="/" className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground">← Back</Link>
      </main>
    );
  }

  const n = remaining.length;
  const R = 200;
  const segDeg = 360 / Math.max(n, 1);
  const arc = (i: number) => {
    const a0 = ((i * segDeg - 90) * Math.PI) / 180;
    const a1 = (((i + 1) * segDeg - 90) * Math.PI) / 180;
    const large = segDeg > 180 ? 1 : 0;
    return `M0 0 L${R * Math.cos(a0)} ${R * Math.sin(a0)} A${R} ${R} 0 ${large} 1 ${R * Math.cos(a1)} ${R * Math.sin(a1)} Z`;
  };
  const resultText = result !== null ? (data.questions[result] ?? "") : "";
  const isCrazy = resultText.startsWith("Crazy story:");

  const btn = "rounded-full border-2 border-border bg-card px-4 py-2 font-bold text-sm hover:border-primary transition-colors";

  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className={btn}>← Back</Link>
        <div className="flex gap-2">
          <button onClick={toggleMute} className={btn} aria-label="Toggle sound">{muted ? "🔇 Sound off" : "🔊 Sound on"}</button>
          <button onClick={() => setShowList((s) => !s)} className={btn}>{showList ? "Hide list" : "Show list"}</button>
          <button onClick={fullscreen} className={btn}>⛶ Fullscreen</button>
        </div>
      </header>

      <div className="mt-4 text-center">
        <p className="font-display text-lg font-semibold text-accent">{levelLabel} · Week {week} · Day {day}</p>
        <h1 className="text-3xl font-bold text-primary md:text-5xl">{data.title}</h1>
      </div>

      <div className={cn("mt-6 flex flex-1 flex-col items-center gap-8", showList && "lg:flex-row lg:items-start lg:justify-center")}>
        <div className="flex flex-col items-center gap-5">
          {n > 0 ? (
            <div className="relative w-[min(85vw,60vh)] max-w-[520px]">
              <div className="absolute left-1/2 top-[-6px] z-10 -translate-x-1/2 drop-shadow-lg">
                <svg width="44" height="52" viewBox="0 0 44 52"><path d="M22 52 L2 8 Q22 -6 42 8 Z" fill="var(--accent)" stroke="var(--primary)" strokeWidth="4" /></svg>
              </div>
              <div
                className="aspect-square w-full"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: spinning ? `transform ${SPIN_MS}ms cubic-bezier(0.17, 0.67, 0.12, 0.99)` : "none",
                }}
              >
                <svg viewBox="-210 -210 420 420" className="h-full w-full drop-shadow-2xl">
                  <g ref={wheelRef}>
                    <circle r="208" fill="var(--primary)" />
                    {remaining.map((q, i) => {
                      const mid = ((i + 0.5) * segDeg - 90) * (Math.PI / 180);
                      return (
                        <g key={q}>
                          {n === 1 ? <circle r={R} fill={SEG_COLORS[q % 10]} /> : <path d={arc(i)} fill={SEG_COLORS[q % 10]} stroke="var(--card)" strokeWidth="3" />}
                          <text
                            x={n === 1 ? 0 : R * 0.68 * Math.cos(mid)}
                            y={n === 1 ? 0 : R * 0.68 * Math.sin(mid)}
                            fill="white"
                            fontSize="40"
                            fontWeight="700"
                            fontFamily="Fredoka, sans-serif"
                            textAnchor="middle"
                            dominantBaseline="central"
                          >
                            {q + 1}
                          </text>
                        </g>
                      );
                    })}
                    <circle r="34" fill="var(--card)" stroke="var(--primary)" strokeWidth="6" />
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex aspect-square w-[min(85vw,55vh)] max-w-[480px] flex-col items-center justify-center gap-4 rounded-full bg-card text-center shadow-2xl">
              <p className="font-display text-3xl font-bold">All questions done 🎉</p>
              <button onClick={reset} className="rounded-full bg-primary px-8 py-3 font-display text-xl font-bold text-primary-foreground">Reset</button>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={spin}
              disabled={spinning || n === 0}
              className="rounded-full bg-accent px-14 py-4 font-display text-3xl font-bold text-accent-foreground shadow-xl transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {spinning ? "..." : "SPIN"}
            </button>
          </div>
          <p className="font-bold text-muted-foreground">
            Questions left: {n}/{total} {n > 0 && n < total && <button onClick={reset} className="ml-2 underline">Reset</button>}
          </p>
          <p className="hidden text-xs text-muted-foreground md:block">Space = spin · Esc = close</p>
        </div>

        {showList && (
          <ol className="w-full max-w-xl space-y-2 rounded-3xl bg-card p-6 shadow-xl">
            {data.questions.map((q, i) => (
              <li key={i} className={cn("flex gap-3 text-lg", !remaining.includes(i) && "text-muted-foreground line-through")}>
                <span className="font-display font-bold text-primary">{i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      {result !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4" onClick={closeResult}>
          <div className="w-full max-w-5xl rounded-3xl bg-card p-8 text-center shadow-2xl animate-in zoom-in-90 md:p-14" onClick={(e) => e.stopPropagation()}>
            <p className="font-display text-xl font-bold text-primary">Question #{result + 1}</p>
            {isCrazy && (
              <span className="mt-3 inline-block rounded-full bg-crazy px-4 py-1 font-display font-bold text-crazy-foreground">🤪 CRAZY STORY</span>
            )}
            <p className="mt-5 font-display text-3xl font-semibold leading-tight text-card-foreground md:text-[2.75rem]">
              {isCrazy ? resultText.replace(/^Crazy story:\s*/, "") : resultText}
            </p>
            <div className="mt-10 flex justify-center gap-4">
              {n > 0 && (
                <button onClick={nextSpin} className="rounded-full bg-accent px-8 py-3 font-display text-xl font-bold text-accent-foreground">Next spin</button>
              )}
              <button onClick={closeResult} className="rounded-full border-2 border-border px-8 py-3 font-display text-xl font-bold">Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
