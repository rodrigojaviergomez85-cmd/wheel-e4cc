import type { GamePack } from "./types";

// BASIC 3 · WEEK 2 — Simple past with regular verbs, -ED sounds, past/present/future comparison, happy moment.
export const B3_W2: GamePack = {
  level: "b3",
  week: 2,
  theme: "The -ED Week",
  teams: { suggestedNames: ["Red Dragons", "Blue Sharks", "Green Monkeys", "Yellow Robots"] },

  days: [
    { level: "b3", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Regular verbs · -ED (affirmative, negative, questions)", minutes: 10 },
    { level: "b3", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Regular verbs · -ED sounds", minutes: 10 },
    { level: "b3", week: 2, day: 3, game: "story_heist", title: "Story Heist — Time Machine", grammar: "Past · Present · Future comparison", minutes: 10 },
    { level: "b3", week: 2, day: 4, game: "past_sprint", title: "Past Form Sprint + Flip It", grammar: "Past forms · regular + irregular 50/50 · didn't / did", minutes: 10 },
    { level: "b3", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The -ED Beast", grammar: "Everything from the week (after the evaluation)", minutes: 10 },
  ],

  // ───────────────────────── MONDAY ─────────────────────────
  bombSquad: {
    translations: [
      { tier: 1, es: "Ayer trabajé hasta las seis.", en: "Yesterday I worked until six." },
      { tier: 1, es: "Mi mamá cocinó pupusas anoche.", en: "My mom cooked pupusas last night." },
      { tier: 1, es: "Nosotros miramos una película el sábado.", en: "We watched a movie on Saturday." },
      { tier: 1, es: "Yo estudié inglés dos horas ayer.", en: "I studied English for two hours yesterday.", alt: ["Yesterday I studied English for two hours."] },
      { tier: 2, es: "Ella no limpió su cuarto ayer.", en: "She didn't clean her room yesterday." },
      { tier: 2, es: "Él no llamó a su jefe el lunes.", en: "He didn't call his boss on Monday." },
      { tier: 2, es: "Mis amigos bailaron toda la noche.", en: "My friends danced all night." },
      { tier: 2, es: "¿Jugaste fútbol el fin de semana?", en: "Did you play soccer on the weekend?", alt: ["Did you play soccer at the weekend?"] },
      { tier: 3, es: "¿Dónde viviste cuando eras niño?", en: "Where did you live when you were a kid?", alt: ["Where did you live when you were a child?"] },
      { tier: 3, es: "Llegamos tarde a clase porque llovió.", en: "We arrived late to class because it rained." },
      { tier: 3, es: "Ella visitó a su abuela y la ayudó en la cocina.", en: "She visited her grandmother and helped her in the kitchen." },
      { tier: 3, es: "¿Por qué no terminaste la tarea anoche?", en: "Why didn't you finish the homework last night?" },
    ],
    echo: [
      { en: "Last weekend my cousins visited us and we cooked together." },
      { en: "I wanted to call you, but my phone died." },
      { en: "They didn't watch the game because they worked late." },
      { en: "She started a new job and finished her first week happy." },
    ],
  },

  // ───────────────────────── TUESDAY ─────────────────────────
  lightningSniper: {
    items: [
      { wrong: "I watch TV last night.", right: "I watched TV last night.", hint: "Past needs -ED." },
      { wrong: "She didn't cleaned her room.", right: "She didn't clean her room.", hint: "After didn't, the verb is base form." },
      { wrong: "They play soccer yesterday.", right: "They played soccer yesterday.", hint: "Past needs -ED." },
      { wrong: "Did you visited your grandma?", right: "Did you visit your grandma?", hint: "After did, the verb is base form." },
      { wrong: "He studyed English for two hours.", right: "He studied English for two hours.", hint: "Consonant + y → -ied." },
      { wrong: "We dance all night at the party.", right: "We danced all night at the party.", hint: "Past needs -ED." },
      { wrong: "My mom cook pupusas last Sunday.", right: "My mom cooked pupusas last Sunday.", hint: "Past needs -ED." },
      { wrong: "I didn't wanted to go to work.", right: "I didn't want to go to work.", hint: "Only one past marker: didn't." },
      { wrong: "Where did you worked last year?", right: "Where did you work last year?", hint: "Only one past marker: did." },
      { wrong: "They arrive late because the bus was slow.", right: "They arrived late because the bus was slow.", hint: "Past needs -ED." },
      { wrong: "She traveled to Guatemala and visit her uncle.", right: "She traveled to Guatemala and visited her uncle.", hint: "Both verbs in the past." },
      { wrong: "Yesterday I was call my friend.", right: "Yesterday I called my friend.", hint: "No 'was' with a simple past verb." },
    ],
    // Bonus round "Say it right": teams sort verbs by -ED sound.
    edSounds: [
      { verb: "watched", sound: "t" }, { verb: "cooked", sound: "t" }, { verb: "danced", sound: "t" }, { verb: "finished", sound: "t" }, { verb: "helped", sound: "t" },
      { verb: "played", sound: "d" }, { verb: "cleaned", sound: "d" }, { verb: "called", sound: "d" }, { verb: "studied", sound: "d" }, { verb: "arrived", sound: "d" },
      { verb: "visited", sound: "id" }, { verb: "wanted", sound: "id" }, { verb: "needed", sound: "id" }, { verb: "started", sound: "id" }, { verb: "decided", sound: "id" },
    ],
  },

  // ───────────────────────── WEDNESDAY ─────────────────────────
  storyHeist: {
    secondsPerTurn: 5,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Last year you were a famous singer. What did you do? (Round 1: PAST)", retellAs: "Round 2: retell it as your DAILY ROUTINE now (present). Round 3: retell it as your PLANS for next year (future)." },
      { prompt: "Crazy story: Yesterday a robot cleaned your house. What did it do? (Round 1: PAST)", retellAs: "Round 2: the robot does it EVERY DAY (present). Round 3: what the robot WILL do tomorrow (future)." },
      { prompt: "Crazy story: Your cat was a doctor last year. What did it do? (Round 1: PAST)", retellAs: "Round 2: the cat is a doctor NOW — what does it usually do? Round 3: the cat is going to open a hospital — what is it going to do?" },
      { prompt: "Crazy story: Last night you visited the year 3000. What did you see? (Round 1: PAST)", retellAs: "Round 2: you LIVE in the year 3000 — what do you do every day? Round 3: what will people do there in the future?" },
    ],
  },

  // ───────────────────────── THURSDAY ─────────────────────────
  pastSprint: {
    // Base verb + Spanish meaning → students type the PAST form. 50/50: 8 regular + 8 irregular, interleaved.
    verbs: [
      { base: "clean", es: "limpiar", past: "cleaned", sound: "d", example: "I cleaned my room yesterday." },
      { base: "go", es: "ir", past: "went", sound: "irregular", example: "They went to the beach." },
      { base: "watch", es: "mirar / ver", past: "watched", sound: "t", example: "We watched a movie last night." },
      { base: "eat", es: "comer", past: "ate", sound: "irregular", example: "I ate pupusas for dinner." },
      { base: "visit", es: "visitar", past: "visited", sound: "id", example: "She visited her grandmother on Saturday." },
      { base: "see", es: "ver", past: "saw", sound: "irregular", example: "I saw my cousin at the mall." },
      { base: "play", es: "jugar", past: "played", sound: "d", example: "He played soccer on Sunday." },
      { base: "have", es: "tener", past: "had", sound: "irregular", example: "We had a great time." },
      { base: "cook", es: "cocinar", past: "cooked", sound: "t", example: "My dad cooked dinner yesterday." },
      { base: "buy", es: "comprar", past: "bought", sound: "irregular", example: "She bought a new phone." },
      { base: "study", es: "estudiar", past: "studied", sound: "d", example: "We studied English for an hour." },
      { base: "take", es: "tomar / llevar", past: "took", sound: "irregular", example: "He took the bus to work." },
      { base: "want", es: "querer", past: "wanted", sound: "id", example: "He wanted a new phone." },
      { base: "make", es: "hacer", past: "made", sound: "irregular", example: "My mom made breakfast." },
      { base: "finish", es: "terminar", past: "finished", sound: "t", example: "She finished her homework late." },
      { base: "get", es: "conseguir / obtener", past: "got", sound: "irregular", example: "I got a new job last month." },
    ],
    // Every 4 verbs: one team says the NEGATIVE, the other the QUESTION.
    flips: [
      { affirmative: "She cleaned her room yesterday.", negative: "She didn't clean her room yesterday.", question: "Did she clean her room yesterday?" },
      { affirmative: "They played soccer last weekend.", negative: "They didn't play soccer last weekend.", question: "Did they play soccer last weekend?" },
      { affirmative: "He studied English for two hours.", negative: "He didn't study English for two hours.", question: "Did he study English for two hours?" },
      { affirmative: "We visited our grandmother on Sunday.", negative: "We didn't visit our grandmother on Sunday.", question: "Did you visit your grandmother on Sunday?" },
    ],
  },

  // ───────────────────────── FRIDAY ─────────────────────────
  bossBattle: {
    name: "The -ED Beast",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "pastform", seconds: 90, items: 4 },
      { kind: "retell", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "The Beast recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "You forgot the -ED again? Delicious.",
      "Did you 'studyed'? I'm getting stronger!",
      "Only one past marker per sentence, humans.",
      "/t/, /d/ or /ɪd/? You don't know, do you?",
      "Your silence feeds me.",
    ],
  },

  punishments: [
    "Say this tongue twister 3 times: \"She sells seashells by the seashore.\"",
    "Sing the chorus of a song in English for 10 seconds.",
    "Tell a Crazy Story about your coach in 20 seconds without stopping.",
    "Speak only in questions for the next 60 seconds.",
    "Describe your coach using 5 adjectives (the coach is listening).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Sell the object closest to you in 20 seconds.",
    "Use a ridiculous Zoom background for the rest of the class.",
    "Answer the next question with a British accent.",
    "Say 5 regular verbs in the past in 5 seconds. Go!",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
