import { useEffect, useState } from "react";

export type Reaction = { id: number; correct: boolean; text: string; lostLives: number; onFire: boolean };
export type BossReaction = { id: number; damage: number; attack: boolean };

export function CountedScore({ value, enabled }: { value: number; enabled: boolean }) {
  const [shown, setShown] = useState(value);
  useEffect(() => {
    if (!enabled || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(value); return; }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 800);
      setShown(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, enabled]);
  return <>{shown}</>;
}

export function bossColour(name: string): string {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return `var(--boss-body-${hash % 6})`;
}