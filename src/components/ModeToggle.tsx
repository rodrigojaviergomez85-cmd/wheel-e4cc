import { MODE_CONFIG, type WheelMode } from "@/data/questions";
import { cn } from "@/lib/utils";

const DESC: Record<WheelMode, string> = { classic: "8 normal + 2 crazy", crazy: "5 normal + 5 crazy" };

export function ModeToggle({ value, onChange, compact }: { value: WheelMode; onChange: (m: WheelMode) => void; compact?: boolean }) {
  return (
    <div role="radiogroup" aria-label="Wheel mode" className={cn("inline-flex rounded-full border-2 border-border bg-card p-1", !compact && "w-full")}>
      {(Object.keys(MODE_CONFIG) as WheelMode[]).map((m) => (
        <button
          key={m}
          role="radio"
          aria-checked={value === m}
          onClick={() => onChange(m)}
          className={cn(
            "flex-1 rounded-full font-bold transition-colors",
            compact ? "px-3 py-1 text-sm" : "px-4 py-3 font-display text-lg",
            value === m ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted",
          )}
        >
          {MODE_CONFIG[m].emoji} {MODE_CONFIG[m].label}
          {!compact && <span className="ml-1 font-sans text-sm font-semibold opacity-80">— {DESC[m]}</span>}
        </button>
      ))}
    </div>
  );
}

export const isMode = (m: unknown): m is WheelMode => m === "classic" || m === "crazy";
