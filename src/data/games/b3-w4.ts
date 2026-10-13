import type { GamePack } from "./types";

// BASIC 3 · WEEK 4 — Day 1 -ED sounds review (regular verbs), Day 2 four-tense comparison (simple present, present progressive,
// simple past, past progressive) + role-play "you came late to class", Day 3 USED TO (childhood), Days 4–5 monthly evaluation.
// AF: Tell me about your favorite movie. Expo: Walt Disney.
export const B3_W4: GamePack = {
  level: "b3",
  week: 4,
  theme: "Then and now",
  teams: { suggestedNames: ["Red Dragons", "Blue Sharks", "Green Monkeys", "Yellow Robots"] },

  days: [
    { level: "b3", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Regular verbs review · -ED sounds /t/ /d/ /ɪd/", minutes: 10 },
    { level: "b3", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Four tenses: every day · right now · yesterday · was doing", minutes: 10 },
    { level: "b3", week: 4, day: 3, game: "story_heist", title: "Story Heist — When I Was a Child", grammar: "USED TO · Did you use to...? · Now vs. before", minutes: 10 },
    { level: "b3", week: 4, day: 4, game: "past_sprint", title: "Past Form Sprint + Flip It", grammar: "Regular + irregular 50/50 · Mixed-tense flips", minutes: 10, note: "After the evaluation" },
    { level: "b3", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Used-To Mummy", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Ayer llegué tarde a clase.", en: "Yesterday I arrived late to class.", alt: ["I arrived late to class yesterday.", "Yesterday I arrived late for class."] },
      { tier: 1, es: "Ella llamó a su mamá anoche.", en: "She called her mom last night.", alt: ["She called her mother last night."] },
      { tier: 1, es: "Nosotros necesitamos ayuda ayer.", en: "We needed help yesterday." },
      { tier: 1, es: "Mi jefe quería hablar conmigo.", en: "My boss wanted to talk to me.", alt: ["My boss wanted to talk with me.", "My boss wanted to speak with me."] },
      { tier: 2, es: "Walt Disney empezó a dibujar cuando era niño.", en: "Walt Disney started to draw when he was a child.", alt: ["Walt Disney started drawing when he was a child.", "Walt Disney started to draw when he was a kid."] },
      { tier: 2, es: "Ellos no estudiaron para el examen.", en: "They didn't study for the test.", alt: ["They did not study for the test.", "They didn't study for the exam."] },
      { tier: 2, es: "¿Terminaste la película anoche?", en: "Did you finish the movie last night?" },
      { tier: 2, es: "Trabajé diez horas y me cansé mucho.", en: "I worked ten hours and I got very tired.", alt: ["I worked for ten hours and got very tired."] },
      { tier: 3, es: "El bus no paró y por eso llegué tarde.", en: "The bus didn't stop and that's why I arrived late.", alt: ["The bus didn't stop, so I arrived late.", "The bus did not stop and that is why I arrived late."] },
      { tier: 3, es: "Disney creó a Mickey Mouse en 1928.", en: "Disney created Mickey Mouse in 1928." },
      { tier: 3, es: "Ella decidió cambiar de trabajo el año pasado.", en: "She decided to change jobs last year.", alt: ["She decided to change her job last year."] },
      { tier: 3, es: "Mi abuelo vivió en Santa Ana y visitó muchos países.", en: "My grandfather lived in Santa Ana and visited many countries.", alt: ["My grandpa lived in Santa Ana and visited many countries."] },
    ],
    echo: [
      { en: "I washed the dishes, cleaned the kitchen and watched a movie." },
      { en: "Walt Disney wanted to create a magic kingdom and he did it." },
      { en: "We waited for the bus for thirty minutes and it never arrived." },
      { en: "She studied all night and passed the test." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Every day I am waking up at six.", right: "Every day I wake up at six.", hint: "Every day → simple present." },
      { wrong: "Right now she cooks dinner.", right: "Right now she is cooking dinner.", hint: "Right now → IS + -ing." },
      { wrong: "Yesterday I am going to the beach.", right: "Yesterday I went to the beach.", hint: "Yesterday → simple past." },
      { wrong: "Last night at 9 I sleeping when you called.", right: "Last night at 9 I was sleeping when you called.", hint: "Action in progress → WAS + -ing." },
      { wrong: "Sorry, I came late because I was miss the bus.", right: "Sorry, I came late because I missed the bus.", hint: "Simple past: MISSED." },
      { wrong: "Last year she watch TV every day.", right: "Last year she watched TV every day.", hint: "Last year → simple past, -ED." },
      { wrong: "I was eat breakfast when my boss called.", right: "I was eating breakfast when my boss called.", hint: "Was + verb-ING." },
      { wrong: "Did you studied last night?", right: "Did you study last night?", hint: "After did, base verb." },
      { wrong: "What do you doing right now?", right: "What are you doing right now?", hint: "Doing needs ARE." },
      { wrong: "They didn't went to the party.", right: "They didn't go to the party.", hint: "After didn't, base verb." },
      { wrong: "Walt Disney create Mickey Mouse in 1928.", right: "Walt Disney created Mickey Mouse in 1928.", hint: "1928 → past, -ED." },
      { wrong: "My brother play video games right now.", right: "My brother is playing video games right now.", hint: "Right now → IS + -ing." },
    ],
    edSounds: [
      { verb: "washed", sound: "t" }, { verb: "stopped", sound: "t" }, { verb: "worked", sound: "t" }, { verb: "missed", sound: "t" }, { verb: "passed", sound: "t" },
      { verb: "called", sound: "d" }, { verb: "lived", sound: "d" }, { verb: "cleaned", sound: "d" }, { verb: "changed", sound: "d" }, { verb: "studied", sound: "d" },
      { verb: "waited", sound: "id" }, { verb: "needed", sound: "id" }, { verb: "wanted", sound: "id" }, { verb: "created", sound: "id" }, { verb: "decided", sound: "id" },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: When you were a child, you used to be a secret agent. What did you use to do? (Round 1: I used to..., I never used to...)", retellAs: "Round 2: the other team asks 5 questions (Did you use to fly? Did you use to...?) and you answer Yes, I did / No, I didn't. Round 3: the other team says what you do NOW instead (Now he/she doesn't... he/she works at...)." },
      { prompt: "Crazy story: Your grandmother used to be a rock star. What did she use to do? (Round 1: She used to...)", retellAs: "Round 2: the other team asks 5 questions (Did she use to sing? Where did she use to...?). Round 3: the other team compares then and now (She used to..., but now she...)." },
      { prompt: "Crazy story: Walt Disney used to be your neighbor when you were a kid. What did he use to do every day? (Round 1: He used to draw..., we used to...)", retellAs: "Round 2: the other team asks 5 questions (Did he use to...? What did he use to...?). Round 3: the other team retells the story in simple past (One day he drew..., he created...)." },
      { prompt: "Crazy story: When you were five, your family used to live in a castle. What did you all use to do? (Round 1: We used to...)", retellAs: "Round 2: the other team asks 5 questions (Did you use to have a dragon? Did your mom use to...?). Round 3: the other team says what the family does NOW (Now they live in..., they don't...)." },
    ],
  },

  pastSprint: {
    verbs: [
      { base: "wash", es: "lavar", past: "washed", sound: "t", example: "I washed the dishes last night." },
      { base: "run", es: "correr", past: "ran", sound: "irregular", example: "She ran to the bus stop." },
      { base: "live", es: "vivir", past: "lived", sound: "d", example: "We lived in Santa Ana for five years." },
      { base: "know", es: "saber / conocer", past: "knew", sound: "irregular", example: "I knew the answer." },
      { base: "wait", es: "esperar", past: "waited", sound: "id", example: "They waited for the bus." },
      { base: "think", es: "pensar", past: "thought", sound: "irregular", example: "He thought about the problem." },
      { base: "stop", es: "parar", past: "stopped", sound: "t", example: "The bus stopped at the corner." },
      { base: "tell", es: "contar / decir", past: "told", sound: "irregular", example: "She told me a story." },
      { base: "change", es: "cambiar", past: "changed", sound: "d", example: "He changed jobs last year." },
      { base: "feel", es: "sentir(se)", past: "felt", sound: "irregular", example: "I felt tired after work." },
      { base: "need", es: "necesitar", past: "needed", sound: "id", example: "We needed more time." },
      { base: "find", es: "encontrar", past: "found", sound: "irregular", example: "I found my keys." },
      { base: "miss", es: "perder (el bus) / extrañar", past: "missed", sound: "t", example: "I missed the bus this morning." },
      { base: "leave", es: "salir / irse", past: "left", sound: "irregular", example: "She left the office at six." },
      { base: "create", es: "crear", past: "created", sound: "id", example: "Disney created Mickey Mouse." },
      { base: "meet", es: "conocer (a alguien)", past: "met", sound: "irregular", example: "I met my best friend at school." },
    ],
    flips: [
      { affirmative: "I used to play in the street. (What?)", negative: "I didn't use to play in the street.", question: "What did you use to do?" },
      { affirmative: "She was studying at nine last night. (What?)", negative: "She was not studying at nine last night.", question: "What was she doing at nine last night?" },
      { affirmative: "They watched a movie yesterday. (When?)", negative: "They didn't watch a movie yesterday.", question: "When did they watch a movie?" },
      { affirmative: "He is working right now.", negative: "He is not working right now.", question: "Is he working right now?" },
    ],
  },

  bossBattle: {
    name: "The Used-To Mummy",
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
      { name: "❤️ Heal", effect: "The mummy recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "I used to be a pharaoh. You used to have lives. Ha!",
      "Did you USED to? Did you USE to! One past marker, mortals.",
      "Yesterday I AM GOING? Yesterday... I WENT... to eat you.",
      "WaitED, needED, wantED... /ɪd/! Say it or lose it!",
      "Four tenses, one brain. Delicious.",
    ],
  },

  punishments: [
    "Say 4 things you used to do when you were a child.",
    "Say 3 things you did NOT use to do (I didn't use to...).",
    "Ask your coach 3 questions with 'Did you use to...?'",
    "Say the same sentence in 4 tenses: every day, right now, yesterday, at 9 last night.",
    "Say 6 regular verbs in the past and their sound: /t/, /d/ or /ɪd/.",
    "Say 'I used to be a baby!' in 3 different voices.",
    "Tell the story of your favorite movie in 20 seconds.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Explain why you came late to class with 3 excuses in the past.",
    "Say 3 things Walt Disney did in his life.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
