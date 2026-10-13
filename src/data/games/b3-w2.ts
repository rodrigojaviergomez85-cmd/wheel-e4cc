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
    { level: "b3", week: 2, day: 4, game: "word_heist", title: "Word Heist + Phonetic Vault", grammar: "Regular verbs vocabulary · -ED sounds", minutes: 10 },
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
  wordHeist: {
    words: [
      { word: "watched", clue: "Past of: to look at a movie or TV.", sound: "t", example: "I watched a movie last night." },
      { word: "cooked", clue: "Past of: to prepare food with heat.", sound: "t", example: "My dad cooked dinner yesterday." },
      { word: "danced", clue: "Past of: to move your body to music.", sound: "t", example: "We danced at the party." },
      { word: "finished", clue: "Past of: to complete something.", sound: "t", example: "She finished her homework late." },
      { word: "walked", clue: "Past of: to go somewhere on foot.", sound: "t", example: "They walked to the park." },
      { word: "played", clue: "Past of: to have fun with a game or sport.", sound: "d", example: "He played soccer on Sunday." },
      { word: "cleaned", clue: "Past of: to remove dirt from something.", sound: "d", example: "I cleaned my room this morning." },
      { word: "called", clue: "Past of: to talk to someone by phone.", sound: "d", example: "My mom called me yesterday." },
      { word: "studied", clue: "Past of: to learn something for school.", sound: "d", example: "We studied English for an hour." },
      { word: "arrived", clue: "Past of: to get to a place.", sound: "d", example: "The bus arrived late." },
      { word: "listened", clue: "Past of: to pay attention to a sound or music.", sound: "d", example: "She listened to music all afternoon." },
      { word: "visited", clue: "Past of: to go and see a person or place.", sound: "id", example: "I visited my grandmother on Saturday." },
      { word: "wanted", clue: "Past of: to desire something.", sound: "id", example: "He wanted a new phone." },
      { word: "needed", clue: "Past of: to require something.", sound: "id", example: "They needed more time." },
      { word: "started", clue: "Past of: to begin.", sound: "id", example: "The class started at 7." },
      { word: "decided", clue: "Past of: to make a choice.", sound: "id", example: "We decided to stay home." },
    ],
    vault: [{ code: "K7-M2-X9" }, { code: "B4-Q8-Z1" }, { code: "R3-J6-W5" }, { code: "H9-D2-T7" }],
  },

  // ───────────────────────── FRIDAY ─────────────────────────
  bossBattle: {
    name: "The -ED Beast",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "vocab", seconds: 90, items: 4 },
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
