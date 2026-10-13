import type { GamePack } from "./types";

// BASIC 1 · WEEK 2 — Wh- questions with GOING TO: what / why (because) / where / when / who ... with.
// Warm-ups: prepositions, a vs. an, I need to get to, What date is it? Day 4 = Book quiz, Day 5 = Who / With + evaluation.
export const B1_W2: GamePack = {
  level: "b1",
  week: 2,
  theme: "What are you going to do tomorrow?",
  teams: { suggestedNames: ["Red Rockets", "Blue Jaguars", "Green Pumas", "Yellow Eagles"] },

  days: [
    { level: "b1", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Wh- questions with GOING TO: What / Where / When", minutes: 10 },
    { level: "b1", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Why ... ? Because ... · Wh- word order", minutes: 10 },
    { level: "b1", week: 2, day: 3, game: "story_heist", title: "Story Heist — Future Edition", grammar: "Where / When is he going to ...? · Plans", minutes: 10 },
    { level: "b1", week: 2, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Wh- words · Prepositions · A vs. An · Dates", minutes: 10, note: "After the book quiz" },
    { level: "b1", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Wh- Wizard", grammar: "Everything from the week + Who ... with?", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "¿Qué vas a hacer mañana?", en: "What are you going to do tomorrow?" },
      { tier: 1, es: "Voy a visitar a mis abuelos.", en: "I am going to visit my grandparents.", alt: ["I'm going to visit my grandparents."] },
      { tier: 1, es: "¿Dónde vas a comer?", en: "Where are you going to eat?" },
      { tier: 1, es: "¿Cuándo va a llegar tu hermano?", en: "When is your brother going to arrive?" },
      { tier: 2, es: "¿Dónde vas a celebrar tu cumpleaños?", en: "Where are you going to celebrate your birthday?" },
      { tier: 2, es: "¿Qué va a hacer Superman esta noche?", en: "What is Superman going to do tonight?" },
      { tier: 2, es: "Necesito llegar al aeropuerto.", en: "I need to get to the airport." },
      { tier: 2, es: "¿Cuándo van a estudiar ustedes?", en: "When are you going to study?" },
      { tier: 3, es: "¿Dónde va a dormir el perro? Debajo de la mesa.", en: "Where is the dog going to sleep? Under the table." },
      { tier: 3, es: "Mike va a comer en McDonald's a las dos.", en: "Mike is going to eat at McDonald's at two.", alt: ["Mike is going to eat at McDonald's at two o'clock.", "Mike is going to eat at McDonald's at 2."] },
      { tier: 3, es: "¿Qué fecha es hoy? Es 14 de febrero.", en: "What date is it today? It is February 14th.", alt: ["What date is it today? It's February 14th.", "What is the date today? It is February 14th.", "What is today's date? It is February 14th.", "What date is it today? It is the 14th of February."] },
      { tier: 3, es: "¿Dónde van a vivir tus padres el próximo año?", en: "Where are your parents going to live next year?" },
    ],
    echo: [
      { en: "What are you going to do tomorrow? I am going to work and then study." },
      { en: "Where is she going to celebrate her birthday? At the beach." },
      { en: "When are they going to have lunch? At twelve o'clock." },
      { en: "I need to get to the hospital. Where is the bus stop?" },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "What you are going to do tonight?", right: "What are you going to do tonight?", hint: "Wh- + ARE YOU + going to." },
      { wrong: "Why he is going to visit his parents?", right: "Why is he going to visit his parents?", hint: "Why IS HE going to." },
      { wrong: "Because is his dad's birthday.", right: "Because it is his dad's birthday.", hint: "Because IT is." },
      { wrong: "Where are you going to eat? To McDonald's.", right: "Where are you going to eat? At McDonald's.", hint: "Place where you eat → AT." },
      { wrong: "When is John going to has lunch?", right: "When is John going to have lunch?", hint: "Going to + base verb." },
      { wrong: "Where you going to sleep?", right: "Where are you going to sleep?", hint: "Where ARE you." },
      { wrong: "I am going to eat a apple.", right: "I am going to eat an apple.", hint: "AN + vowel sound." },
      { wrong: "The cat is going to sleep in the table.", right: "The cat is going to sleep on the table.", hint: "Preposition: the cat is on top of it." },
      { wrong: "I need get to the bank.", right: "I need to get to the bank.", hint: "Need TO get." },
      { wrong: "What is going to do your sister tonight?", right: "What is your sister going to do tonight?", hint: "Wh- + is + SUBJECT + going to." },
      { wrong: "Why are you going to sleep early? Because I tired.", right: "Why are you going to sleep early? Because I am tired.", hint: "Because I ... (verb to be!)." },
      { wrong: "When is your birthday? Is on May 20th.", right: "When is your birthday? It is on May 20th.", hint: "Don't forget the subject: IT is." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 8,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Tomorrow you are going to be the president. What are you going to do? Where? (Round 1: I am going to ... at/in ...)", retellAs: "Round 2: the other team asks 5 Wh- questions (Where / When / What / Why?) and you answer. Round 3: the other team retells the plan in third person (He/She is going to...)." },
      { prompt: "Crazy story: Superman is going to visit El Salvador next weekend. What is he going to do? (Round 1: He is going to...)", retellAs: "Round 2: the other team asks 5 Wh- questions about Superman's plan (Where is he going to...? When...? Why...?). Round 3: the other team answers WHY for every plan (Because...)." },
      { prompt: "Crazy story: You are going to live in a zoo for one week. What are you going to do every day? (Round 1: On Monday I am going to...)", retellAs: "Round 2: the other team asks 5 Wh- questions (When / Where / Why?). Round 3: the other team retells the week in third person." },
      { prompt: "Crazy story: Your phone is going to talk tomorrow. What is it going to say and where is it going to go? (Round 1: It is going to...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What / Where / When / Why?). Round 3: the other team retells the story in NEGATIVE (It is not going to...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "¿dónde?", en: "where", category: "wh- words" },
      { es: "¿cuándo?", en: "when", category: "wh- words" },
      { es: "¿por qué?", en: "why", category: "wh- words" },
      { es: "¿qué?", en: "what", category: "wh- words" },
      { es: "porque", en: "because", category: "wh- words" },
      { es: "debajo de", en: "under", alt: ["below"], category: "prepositions" },
      { es: "al lado de", en: "next to", alt: ["beside"], category: "prepositions" },
      { es: "entre", en: "between", category: "prepositions" },
      { es: "detrás de", en: "behind", category: "prepositions" },
      { es: "una manzana", en: "an apple", category: "a / an" },
      { es: "un huevo", en: "an egg", category: "a / an" },
      { es: "una naranja", en: "an orange", category: "a / an" },
      { es: "un ingeniero", en: "an engineer", category: "a / an" },
      { es: "aeropuerto", en: "airport", category: "places" },
      { es: "fiesta de cumpleaños", en: "birthday party", category: "plans" },
      { es: "almorzar", en: "have lunch", alt: ["to have lunch", "eat lunch"], category: "plans" },
    ],
    flips: [
      { affirmative: "She is going to celebrate at the beach. (Where?)", negative: "She is not going to celebrate at the beach.", question: "Where is she going to celebrate?" },
      { affirmative: "They are going to have lunch at twelve. (When?)", negative: "They are not going to have lunch at twelve.", question: "When are they going to have lunch?" },
      { affirmative: "I am going to visit my parents on Sunday. (When?)", negative: "I am not going to visit my parents on Sunday.", question: "When are you going to visit your parents?" },
      { affirmative: "He is going to study at the library. (Where?)", negative: "He is not going to study at the library.", question: "Where is he going to study?" },
    ],
    numbers: [
      { say: "February fourteenth", write: "February 14th" },
      { say: "the thirty-first of December", write: "December 31st" },
      { say: "two thousand thirty", write: "2030" },
      { say: "half past seven", write: "7:30" },
      { say: "three hundred twelve", write: "312" },
      { say: "the twenty-second of April", write: "April 22nd" },
    ],
  },

  bossBattle: {
    name: "The Wh- Wizard",
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
      { name: "❤️ Heal", effect: "The wizard recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "WHAT YOU ARE going to do? Ha! Word order, mortals!",
      "Because IS his birthday? Because IT is! My magic grows!",
      "FOR McDonald's? AT McDonald's, little humans.",
      "A apple... a apple... music to my ears.",
      "Who are you going to lose WITH? With your team!",
    ],
  },

  punishments: [
    "Ask your coach 4 Wh- questions about tomorrow (What / Where / When / Why).",
    "Say where you are going to be at 7, 9 and 12 tomorrow.",
    "Answer 'Why are you going to study English?' with 3 different BECAUSE reasons.",
    "Say today's full date in English, slowly and then fast.",
    "Say 5 things with A or AN: 'an apple, a banana...' in 10 seconds.",
    "Say when and where you are going to have dinner this week... and why.",
    "Describe where 4 objects are in your room (under, next to, behind, between).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 'What are you going to do?' in 3 different voices.",
    "Say what Superman is going to do this weekend, in 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
