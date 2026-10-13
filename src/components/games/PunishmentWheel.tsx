import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { sfx } from "@/lib/games/sounds";

const SPIN_MS = 4000;
const COLORS = Array.from({ length: 10 }, (_, i) => `var(--seg-${i + 1})`);

export function PunishmentWheel({ items, teamName, onClose }: { items: string[]; teamName: string; onClose: () => void }) {
  const [rot, setRot] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [swapsLeft, setSwapsLeft] = useState(1);
  const [left, setLeft] = useState(15);
  const n = items.length;
  const seg = 360 / n;

  const spin = () => {
    if (spinning) return;
    const win = Math.floor(Math.random() * n);
    const target = 360 - (win * seg + seg / 2);
    const cur = ((rot % 360) + 360) % 360;
    setRot(rot + ((target - cur + 360) % 360) + 360 * 5);
    setSpinning(true);
    setResult(null);
    const t0 = performance.now();
    const iv = setInterval(() => { if (performance.now() - t0 > SPIN_MS - 600) clearInterval(iv); else sfx.tick(); }, 120);
    setTimeout(() => {
      setSpinning(false);
      setResult(win);
      setLeft(15);
      confetti({ particleCount: 140, spread: 90, origin: { y: 0.6 } });
    }, SPIN_MS);
  };

  useEffect(() => { const t = setTimeout(spin, 400); return () => clearTimeout(t); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (result === null || left <= 0) return;
    const t = setTimeout(() => { setLeft((l) => l - 1); if (left === 1) sfx.buzz(); }, 1000);
    return () => clearTimeout(t);
  }, [result, left]);

  const R = 200;
  const arc = (i: number) => {
    const a0 = ((i * seg - 90) * Math.PI) / 180;
    const a1 = (((i + 1) * seg - 90) * Math.PI) / 180;
    return `M0 0 L${R * Math.cos(a0)} ${R * Math.sin(a0)} A${R} ${R} 0 0 1 ${R * Math.cos(a1)} ${R * Math.sin(a1)} Z`;
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-overlay p-4">
      <div className="flex w-full max-w-5xl flex-col items-center gap-4 rounded-3xl bg-card p-6 text-center shadow-2xl">
        <p className="font-display text-2xl font-bold text-crazy">💥 PUNISHMENT for {teamName}</p>
        {result === null ? (
          <div className="relative w-[min(70vw,50vh)]">
            <div className="absolute left-1/2 top-[-6px] z-10 -translate-x-1/2">
              <svg width="40" height="48" viewBox="0 0 44 52"><path d="M22 52 L2 8 Q22 -6 42 8 Z" fill="var(--accent)" stroke="var(--primary)" strokeWidth="4" /></svg>
            </div>
            <div className="aspect-square w-full" style={{ transform: `rotate(${rot}deg)`, transition: spinning ? `transform ${SPIN_MS}ms cubic-bezier(0.17,0.67,0.12,0.99)` : "none" }}>
              <svg viewBox="-210 -210 420 420" className="h-full w-full drop-shadow-2xl">
                <circle r="208" fill="var(--primary)" />
                {items.map((_, i) => {
                  const mid = ((i + 0.5) * seg - 90) * (Math.PI / 180);
                  return (
                    <g key={i}>
                      <path d={arc(i)} fill={COLORS[i % 10]} stroke="var(--card)" strokeWidth="3" />
                      <text x={R * 0.7 * Math.cos(mid)} y={R * 0.7 * Math.sin(mid)} fill="white" fontSize="34" fontWeight="700" fontFamily="Fredoka, sans-serif" textAnchor="middle" dominantBaseline="central">{i + 1}</text>
                    </g>
                  );
                })}
                <circle r="30" fill="var(--card)" stroke="var(--primary)" strokeWidth="6" />
              </svg>
            </div>
          </div>
        ) : (
          <>
            <p className="font-display text-4xl font-semibold leading-tight md:text-5xl">{items[result]}</p>
            <p className={`font-display text-6xl font-bold ${left <= 3 ? "text-destructive" : "text-primary"}`}>{left}s</p>
          </>
        )}
        <div className="flex gap-3">
          {result !== null && swapsLeft > 0 && (
            <button onClick={() => { setSwapsLeft(0); spin(); }} className="rounded-full border-2 border-border px-6 py-3 font-display text-xl font-bold">🔄 Swap (once)</button>
          )}
          <button onClick={onClose} disabled={spinning} className="rounded-full bg-accent px-8 py-3 font-display text-xl font-bold text-accent-foreground disabled:opacity-50">Done</button>
        </div>
      </div>
    </div>
  );
}
