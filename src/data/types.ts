export type LevelId =
  | "b0" | "b1" | "b2" | "b3" | "b4"
  | "tigers" | "sharks" | "eagles"
  | "adv1" | "adv2" | "adv3";

export type DayData = {
  level: LevelId;
  week: 1 | 2 | 3 | 4;
  day: 1 | 2 | 3 | 4 | 5;
  title: string; // base "Automatic Fluency" question of the day, shown in header
  grammar: string; // grammar focus (informational)
  enabled: boolean; // false = coaching / evaluation day
  disabledReason?: string;
  // Normal questions first, then "Crazy story:" questions.
  // Regular days: 8 normal + 5 crazy. Debate days: 10 debates, 0 crazy.
  questions: string[];
};

export type WheelMode = "classic" | "crazy";
