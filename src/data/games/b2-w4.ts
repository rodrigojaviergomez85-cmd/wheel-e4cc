import type { GamePack } from "./types";

// BASIC 2 · WEEK 4 — Simple present Wh- questions (a new job), present progressive Wh- questions (call your son/daughter),
// future vs. simple present vs. present progressive (Cristiano Ronaldo AF), explain a process (How to make a sandwich). Days 4–5 = monthly evaluation.
export const B2_W4: GamePack = {
  level: "b2",
  week: 4,
  theme: "Every day · Right now · Next weekend",
  teams: { suggestedNames: ["Red Foxes", "Blue Wolves", "Green Hawks", "Yellow Cobras"] },

  days: [
    { level: "b2", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple present Wh- questions · A new job", minutes: 10 },
    { level: "b2", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Progressive Wh- questions · Every day vs. right now", minutes: 10 },
    { level: "b2", week: 4, day: 3, game: "story_heist", title: "Story Heist — Three Tenses", grammar: "Every day (simple present) · Right now (progressive) · Next weekend (future)", minutes: 10 },
    { level: "b2", week: 4, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "How to make a sandwich · Job words · Mixed tenses", minutes: 10, note: "After the evaluation" },
    { level: "b2", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Three-Headed Tense Dragon", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "¿Dónde trabajas?", en: "Where do you work?" },
      { tier: 1, es: "¿A qué hora empiezas a trabajar?", en: "What time do you start work?", alt: ["What time do you start working?", "What time do you start to work?"] },
      { tier: 1, es: "¿Qué hace tu jefe?", en: "What does your boss do?" },
      { tier: 1, es: "¿Qué haces en tu nuevo trabajo?", en: "What do you do at your new job?", alt: ["What do you do in your new job?"] },
      { tier: 2, es: "¿Con quién trabajas?", en: "Who do you work with?" },
      { tier: 2, es: "¿Por qué te gusta tu nuevo trabajo?", en: "Why do you like your new job?" },
      { tier: 2, es: "¿Cuándo terminas de trabajar?", en: "When do you finish work?", alt: ["When do you finish working?", "What time do you finish work?"] },
      { tier: 2, es: "¿Cuántas horas trabajas al día?", en: "How many hours do you work a day?", alt: ["How many hours do you work per day?", "How many hours a day do you work?"] },
      { tier: 3, es: "¿Dónde está tu hermana? Está estudiando en la biblioteca.", en: "Where is your sister? She is studying at the library.", alt: ["Where is your sister? She's studying at the library.", "Where is your sister? She is studying in the library."] },
      { tier: 3, es: "Cristiano entrena todos los días y ahora mismo está comiendo.", en: "Cristiano trains every day and right now he is eating.", alt: ["Cristiano trains every day and he is eating right now."] },
      { tier: 3, es: "¿Qué va a hacer tu mamá el próximo fin de semana?", en: "What is your mom going to do next weekend?", alt: ["What is your mother going to do next weekend?"] },
      { tier: 3, es: "Primero pones el jamón en el pan, luego el queso y finalmente cortas el sándwich.", en: "First you put the ham on the bread, then the cheese, and finally you cut the sandwich.", alt: ["First put the ham on the bread, then the cheese, and finally cut the sandwich."] },
    ],
    echo: [
      { en: "Where do you work and what time do you start?" },
      { en: "What is your daughter doing right now? She is sleeping." },
      { en: "Every day I wake up at six, but today I am sleeping until nine." },
      { en: "First, take two slices of bread. Then, put some cheese on one slice." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "What are you do at the moment?", right: "What are you doing at the moment?", hint: "Are you + verb-ING." },
      { wrong: "What is your son doing? He plays video games right now.", right: "What is your son doing? He is playing video games right now.", hint: "Right now → IS + -ing." },
      { wrong: "Where are you working every day?", right: "Where do you work every day?", hint: "Every day → simple present." },
      { wrong: "Why you are crying?", right: "Why are you crying?", hint: "Why ARE YOU." },
      { wrong: "What does your boss doing?", right: "What is your boss doing?", hint: "Doing needs IS, not DOES." },
      { wrong: "Who is she talk to?", right: "Who is she talking to?", hint: "Is + verb-ING." },
      { wrong: "What time does you have lunch?", right: "What time do you have lunch?", hint: "You → DO." },
      { wrong: "Every day I am waking up at six.", right: "Every day I wake up at six.", hint: "Every day → simple present." },
      { wrong: "Right now I eat a sandwich.", right: "Right now I am eating a sandwich.", hint: "Right now → AM + -ing." },
      { wrong: "First, you puts the bread on the plate.", right: "First, you put the bread on the plate.", hint: "You → no S." },
      { wrong: "What is he going to do tomorrow? He works.", right: "What is he going to do tomorrow? He is going to work.", hint: "Tomorrow → going to." },
      { wrong: "How many hours does she works?", right: "How many hours does she work?", hint: "After DOES, no S." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Your coach is secretly a superhero. Round 1: what does he or she do EVERY DAY? (He/She wakes up at..., he/she saves...)", retellAs: "Round 2: the other team says what the coach is doing RIGHT NOW, 6 sentences (He/She is flying...). Round 3: the first team says what the coach is going to do NEXT WEEKEND, 6 sentences (He/She is going to...)." },
      { prompt: "Crazy story: Cristiano Ronaldo moves to San Salvador and works at a call center. Round 1: what does he do EVERY DAY? (He takes the bus, he answers calls...)", retellAs: "Round 2: the other team says what Cristiano is doing RIGHT NOW (He is eating pupusas...). Round 3: the first team says what he is going to do NEXT WEEKEND (He is going to...)." },
      { prompt: "Crazy story: A robot lives in your house. Round 1: what does the robot do EVERY DAY? (It cleans..., it cooks...)", retellAs: "Round 2: the other team says what the robot is doing RIGHT NOW (It is dancing...). Round 3: the first team says what the robot is going to do NEXT WEEKEND (It is going to...)." },
      { prompt: "Crazy story: Your grandmother is a famous DJ. Round 1: what does she do EVERY DAY? (She sleeps until noon, she...)", retellAs: "Round 2: the other team says what grandma is doing RIGHT NOW (She is playing music in...). Round 3: the first team says what she is going to do NEXT WEEKEND (She is going to...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "pan", en: "bread", category: "sandwich" },
      { es: "jamón", en: "ham", category: "sandwich" },
      { es: "queso", en: "cheese", category: "sandwich" },
      { es: "mayonesa", en: "mayonnaise", alt: ["mayo"], category: "sandwich" },
      { es: "cuchillo", en: "knife", category: "sandwich" },
      { es: "rebanada", en: "slice", category: "sandwich" },
      { es: "cortar", en: "cut", alt: ["to cut"], category: "sandwich" },
      { es: "untar", en: "spread", alt: ["to spread"], category: "sandwich" },
      { es: "jefe", en: "boss", category: "job" },
      { es: "compañero de trabajo", en: "coworker", alt: ["co-worker", "colleague"], category: "job" },
      { es: "horario", en: "schedule", category: "job" },
      { es: "turno", en: "shift", category: "job" },
      { es: "llamada", en: "call", category: "job" },
      { es: "cliente", en: "customer", alt: ["client"], category: "job" },
      { es: "sándwich", en: "sandwich", category: "sandwich" },
      { es: "el próximo fin de semana", en: "next weekend", category: "time" },
    ],
    flips: [
      { affirmative: "My boss works at the bank on Mondays. (When?)", negative: "My boss does not work at the bank on Mondays.", question: "When does your boss work at the bank?" },
      { affirmative: "They are eating pupusas right now. (What?)", negative: "They are not eating pupusas right now.", question: "What are they eating right now?" },
      { affirmative: "He is going to travel next weekend. (When?)", negative: "He is not going to travel next weekend.", question: "When is he going to travel?" },
      { affirmative: "My son is sleeping in his room. (Where?)", negative: "My son is not sleeping in his room.", question: "Where is your son sleeping?" },
    ],
    numbers: [
      { say: "the sandwich is three dollars and fifty cents", write: "$3.50" },
      { say: "I work eight hours a day", write: "8" },
      { say: "my shift starts at two fifteen", write: "2:15" },
      { say: "two slices of bread", write: "2" },
      { say: "the cheese is four dollars and twenty cents", write: "$4.20" },
      { say: "a quarter to seven", write: "6:45" },
    ],
  },

  bossBattle: {
    name: "The Three-Headed Tense Dragon",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "word", seconds: 90, items: 4 },
      { kind: "retell", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "The dragon recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Every day I AM EATING? Every day I EAT... students!",
      "Right now he PLAYS? Right now he IS PLAYING... and losing.",
      "What are you DO? What are you DOING? Burning, that's what.",
      "Three heads, three tenses. You have one brain. Ha!",
      "Tomorrow he WORKS? Tomorrow he is GOING TO lose.",
    ],
  },

  punishments: [
    "Explain how to make a sandwich in 4 steps: first, then, after that, finally.",
    "Say what you do every day, what you are doing now and what you are going to do tomorrow.",
    "Ask your coach 4 Wh- questions about his or her job (Where / What time / Who / Why).",
    "Call your 'son' or 'daughter' (the coach) and ask what he or she is doing, 3 questions.",
    "Say what Cristiano Ronaldo does every day, in 3 sentences.",
    "Say 'What are you doing?' like an angry mom, a robot and a baby.",
    "Say 5 words from the sandwich list in 8 seconds.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say what 3 people in your family are doing right now.",
    "Say 3 plans for next weekend with GOING TO.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
