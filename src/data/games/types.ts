export type GameId =
  | "bomb_squad"
  | "lightning_sniper"
  | "story_heist"
  | "past_sprint"
  | "build_person"
  | "word_sprint"
  | "boss_battle";

export type TranslationItem = { es: string; en: string; alt?: string[]; tier: 1 | 2 | 3 };
export type EchoItem = { en: string };
export type SniperItem = { wrong: string; right: string; hint: string };
export type EdSoundItem = { verb: string; sound: "t" | "d" | "id" };
export type StoryPrompt = { prompt: string; retellAs: string };
export type VerbItem = { base: string; es: string; past: string; sound: "t" | "d" | "id" | "irregular"; example: string };
export type FlipItem = { affirmative: string; negative: string; question: string };

/** Build-a-Person (B0): a character the team builds one sentence at a time. */
export type PersonCard = {
  emoji: string;
  title: string; // e.g. "The Chef"
  facts: string[]; // what the team must cover (shown as a checklist the coach ticks)
  starters: string[]; // sentence starters shown as help, e.g. "His name is ..."
  retell: string; // instruction for the rival team's retell round
};

/** Word Sprint (B0): Spanish word → English word. */
export type WordItem = { es: string; en: string; alt?: string[]; category: string };
export type SpellItem = { word: string };
export type NumberItem = { say: string; write: string };

export type BossRound = { kind: "translate" | "fix" | "pastform" | "retell" | "word" | "person"; seconds: number; items: number };
export type BossEvent = { name: string; effect: string };

export type GameDay = {
  level: string;
  week: number;
  day: number;
  game: GameId;
  title: string;
  grammar: string;
  minutes: number;
  note?: string; // e.g. "After the evaluation"
};

export type GamePack = {
  level: string;
  week: number;
  theme: string;
  teams: { suggestedNames: string[] };
  days: GameDay[];
  bombSquad: { translations: TranslationItem[]; echo: EchoItem[] };
  lightningSniper: { items: SniperItem[]; edSounds?: EdSoundItem[] };
  storyHeist?: { prompts: StoryPrompt[]; secondsPerTurn: number; strikesToExplode: number };
  pastSprint?: { verbs: VerbItem[]; flips: FlipItem[] };
  buildPerson?: { cards: PersonCard[]; secondsPerTurn: number; strikesToExplode: number; retellSeconds: number };
  wordSprint?: { words: WordItem[]; spell?: SpellItem[]; flips?: FlipItem[]; numbers: NumberItem[] };
  bossBattle: { name: string; hp: number; lives: number; rounds: BossRound[]; events: BossEvent[]; taunts: string[] };
  punishments: string[];
  powerCards: { name: string; emoji: string; effect: string }[];
};
