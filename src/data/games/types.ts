export type GameId = "bomb_squad" | "lightning_sniper" | "story_heist" | "word_heist" | "boss_battle";

export type TranslationItem = { es: string; en: string; alt?: string[]; tier: 1 | 2 | 3 };
export type EchoItem = { en: string };
export type SniperItem = { wrong: string; right: string; hint: string };
export type EdSoundItem = { verb: string; sound: "t" | "d" | "id" };
export type StoryPrompt = { prompt: string; retellAs: string };
export type VocabItem = { word: string; clue: string; sound: "t" | "d" | "id"; example: string };
export type VaultCode = { code: string };
export type BossRound = { kind: "translate" | "fix" | "vocab" | "retell"; seconds: number; items: number };
export type BossEvent = { name: string; effect: string };

export type GameDay = {
  level: string;
  week: number;
  day: number;
  game: GameId;
  title: string;
  grammar: string;
  minutes: number;
};

export type GamePack = {
  level: string;
  week: number;
  theme: string;
  teams: { suggestedNames: string[] };
  days: GameDay[];
  bombSquad: { translations: TranslationItem[]; echo: EchoItem[] };
  lightningSniper: { items: SniperItem[]; edSounds: EdSoundItem[] };
  storyHeist: { prompts: StoryPrompt[]; secondsPerTurn: number; strikesToExplode: number };
  wordHeist: { words: VocabItem[]; vault: VaultCode[] };
  bossBattle: { name: string; hp: number; lives: number; rounds: BossRound[]; events: BossEvent[]; taunts: string[] };
  punishments: string[];
  powerCards: { name: string; emoji: string; effect: string }[];
};
