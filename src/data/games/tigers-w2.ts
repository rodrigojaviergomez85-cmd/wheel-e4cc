import type { GamePack } from "./types";

// TIGERS · WEEK 2 — Day 1 past & present progressive, Day 2 present perfect (Have you ever...?), Day 3 present perfect progressive
// (What has she been doing and why?), Day 4 simple past vs. present perfect vs. present perfect progressive, Day 5 evaluations.
export const TIGERS_W2: GamePack = {
  level: "tigers",
  week: 2,
  theme: "Ever, never and lately",
  teams: { suggestedNames: ["Orange Tigers", "White Tigers", "Night Panthers", "Golden Jaguars"] },

  days: [
    { level: "tigers", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Past progressive vs. present progressive · Yesterday at 7 p.m. vs. right now", minutes: 10 },
    { level: "tigers", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: have / has + participle · ever / never", minutes: 10 },
    { level: "tigers", week: 2, day: 3, game: "story_heist", title: "Story Heist — The Mystery Files", grammar: "Present perfect progressive · What has she been doing and why?", minutes: 10 },
    { level: "tigers", week: 2, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Simple past vs. present perfect vs. perfect progressive", minutes: 10 },
    { level: "tigers", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Ever-Never Vampire", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Ayer a las siete de la noche estaba cenando con mi familia.", en: "Yesterday at seven p.m. I was having dinner with my family.", alt: ["Yesterday at 7 p.m. I was eating dinner with my family.", "Yesterday at seven in the evening I was having dinner with my family.", "I was having dinner with my family yesterday at seven p.m."] },
      { tier: 1, es: "En este momento el coach está escribiendo en la pizarra.", en: "Right now the coach is writing on the board.", alt: ["At this moment the coach is writing on the board.", "The coach is writing on the board right now.", "Right now the coach is writing on the whiteboard."] },
      { tier: 1, es: "¿Con quién estabas chateando anoche?", en: "Who were you chatting with last night?", alt: ["Who were you chatting to last night?", "Who were you texting last night?"] },
      { tier: 1, es: "No estoy durmiendo, estoy pensando.", en: "I'm not sleeping, I'm thinking.", alt: ["I am not sleeping, I am thinking."] },
      { tier: 2, es: "Mientras yo estaba estudiando, mi hermano estaba jugando videojuegos.", en: "While I was studying, my brother was playing video games." },
      { tier: 2, es: "Estábamos viendo el partido cuando se cayó el internet.", en: "We were watching the game when the internet went down.", alt: ["We were watching the match when the internet went down.", "We were watching the game when the internet went out."] },
      { tier: 2, es: "¿Por qué estás usando tu teléfono en clase?", en: "Why are you using your phone in class?" },
      { tier: 2, es: "Ella no estaba poniendo atención porque estaba mandando mensajes.", en: "She wasn't paying attention because she was texting.", alt: ["She was not paying attention because she was texting.", "She wasn't paying attention because she was sending messages."] },
      { tier: 3, es: "Esta mañana él estaba trabajando en la oficina, pero ahora está descansando en la playa.", en: "This morning he was working at the office, but now he is resting at the beach.", alt: ["This morning he was working in the office, but now he's relaxing at the beach.", "This morning he was working at the office, but now he is resting on the beach."] },
      { tier: 3, es: "Estaba caminando al trabajo cuando un perro empezó a seguirme.", en: "I was walking to work when a dog started to follow me.", alt: ["I was walking to work when a dog started following me.", "I was walking to work when a dog began to follow me."] },
      { tier: 3, es: "Mis vecinos estaban cantando karaoke a medianoche y yo estaba tratando de dormir.", en: "My neighbors were singing karaoke at midnight and I was trying to sleep." },
      { tier: 3, es: "¿Qué están haciendo tus compañeros mientras tú estás respondiendo esta pregunta?", en: "What are your classmates doing while you are answering this question?", alt: ["What are your classmates doing while you're answering this question?"] },
    ],
    echo: [
      { en: "Yesterday at seven I was washing the dishes and my sister was watching TV." },
      { en: "Right now my team is winning and the other team is getting nervous." },
      { en: "While the coach was explaining the grammar, two students were eating chips quietly." },
      { en: "I was taking a shower when my phone started ringing." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Have you ever order something online?", right: "Have you ever ordered something online?", hint: "Have + PARTICIPLE. Regular verb." },
      { wrong: "My uncle has never flew in a helicopter.", right: "My uncle has never flown in a helicopter.", hint: "Fly → flew → ?" },
      { wrong: "She have never tried Thai food.", right: "She has never tried Thai food.", hint: "Check the auxiliary for SHE." },
      { wrong: "Have you ever ate iguana?", right: "Have you ever eaten iguana?", hint: "Eat → ate → ?" },
      { wrong: "He has never rode a horse.", right: "He has never ridden a horse.", hint: "Ride → rode → ?" },
      { wrong: "Do you have ever talked to a celebrity?", right: "Have you ever talked to a celebrity?", hint: "HAVE is the auxiliary here. No DO." },
      { wrong: "I have never sang in public.", right: "I have never sung in public.", hint: "Sing → sang → ?" },
      { wrong: "Has he ever be late for work?", right: "Has he ever been late for work?", hint: "Be → was / were → ?" },
      { wrong: "They has never lost a debate.", right: "They have never lost a debate.", hint: "Check the auxiliary for THEY." },
      { wrong: "Have ever you forgotten your password?", right: "Have you ever forgotten your password?", hint: "Word order: where does EVER go?" },
      { wrong: "I haven't never visited Honduras.", right: "I have never visited Honduras.", hint: "NEVER is already negative. One negative only." },
      { wrong: "Has she ever buy a lottery ticket?", right: "Has she ever bought a lottery ticket?", hint: "Buy is irregular." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Mystery: Sara has paint on her hands, flour in her hair and very red eyes. What has she been doing, and why? (Round 1: She has been painting ... because..., she has been baking...)", retellAs: "Round 2: the other team asks 6 questions (Has she been...? What has she been doing? Has she ever...?). Round 3: the other team says what Sara HASN'T been doing (She hasn't been sleeping...)." },
      { prompt: "Mystery: Your coach is very tired today and has a big secret. What has he or she been doing at night? (Round 1: He/She has been working as a clown..., has been dancing...)", retellAs: "Round 2: the other team plays the coach and denies everything (I haven't been dancing! I have been...). Round 3: the first team reports it like a news program (Our coach has been...)." },
      { prompt: "Mystery: You have been learning English for months. What have you been doing to improve? Crazy ideas are welcome. (Round 1: I have been talking to my dog in English..., I have been watching...)", retellAs: "Round 2: the other team asks 6 questions (How long have you been...? Have you ever...? What were you doing last night?). Round 3: the other team retells it in third person (He has been..., she has been...)." },
      { prompt: "Mystery: The office is a disaster this morning: pizza on the floor, loud music and a goat in the kitchen. What has everybody been doing? (Round 1: The agents have been..., the boss has been...)", retellAs: "Round 2: the other team plays the angry manager and asks 6 questions (Who has been eating here? What have you been doing?). Round 3: the first team answers with excuses (We have been working! The goat has been...)." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "be", es: "ser / estar", past: "was / were", participle: "been", sound: "irregular", example: "I have never been to Canada." },
      { base: "see", es: "ver", past: "saw", participle: "seen", sound: "irregular", example: "Have you ever seen a ghost?" },
      { base: "buy", es: "comprar", past: "bought", participle: "bought", sound: "irregular", example: "She has bought three pairs of shoes this month." },
      { base: "meet", es: "conocer (a alguien)", past: "met", participle: "met", sound: "irregular", example: "I have never met a celebrity." },
      { base: "lose", es: "perder", past: "lost", participle: "lost", sound: "irregular", example: "He has lost his keys again." },
      { base: "ride", es: "montar (bici, caballo)", past: "rode", participle: "ridden", sound: "irregular", example: "Have you ever ridden a motorcycle?" },
      { base: "fly", es: "volar", past: "flew", participle: "flown", sound: "irregular", example: "My dad has flown to Miami twice." },
      { base: "sing", es: "cantar", past: "sang", participle: "sung", sound: "irregular", example: "We have sung karaoke many times." },
      { base: "swim", es: "nadar", past: "swam", participle: "swum", sound: "irregular", example: "Have you ever swum in the ocean at night?" },
      { base: "drive", es: "manejar", past: "drove", participle: "driven", sound: "irregular", example: "She has never driven a bus." },
      { base: "fall", es: "caerse", past: "fell", participle: "fallen", sound: "irregular", example: "My phone has fallen into the water twice." },
      { base: "send", es: "enviar", past: "sent", participle: "sent", sound: "irregular", example: "They have sent me the wrong package." },
      { base: "order", es: "pedir (comida, un producto)", past: "ordered", participle: "ordered", sound: "d", example: "Have you ever ordered food at 3 a.m.?" },
      { base: "watch", es: "mirar (TV, una serie)", past: "watched", participle: "watched", sound: "t", example: "I have watched this series three times." },
      { base: "visit", es: "visitar", past: "visited", participle: "visited", sound: "id", example: "We have visited Guatemala twice." },
      { base: "cook", es: "cocinar", past: "cooked", participle: "cooked", sound: "t", example: "He has never cooked for his family." },
    ],
    flips: [
      { affirmative: "I have flown in a plane three times. (How many times?)", negative: "I haven't flown in a plane three times.", question: "How many times have you flown in a plane?" },
      { affirmative: "John has been cleaning his house all day. (What ... doing?)", negative: "John hasn't been cleaning his house all day.", question: "What has John been doing all day?" },
      { affirmative: "She ordered a pizza last night.", negative: "She didn't order a pizza last night.", question: "Did she order a pizza last night?" },
      { affirmative: "They have been waiting for the bus for an hour. (How long?)", negative: "They haven't been waiting for the bus for an hour.", question: "How long have they been waiting for the bus?" },
    ],
  },

  bossBattle: {
    name: "The Ever-Never Vampire",
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
      { name: "❤️ Heal", effect: "The Vampire recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Have you ever ATE? I have EATEN students for less!",
      "She HAVE never? She HAS never beaten me!",
      "I have been living for 500 years and I have never heard participles like yours.",
      "Flew, flown... you look confused. Delicious!",
      "What have you been doing all week? Sleeping? Me too. In a coffin.",
    ],
  },

  punishments: [
    "Ask a classmate 3 questions with 'Have you ever...?'",
    "Say 3 things you have never done but you want to do.",
    "Say what you were doing yesterday at 7 p.m. and what your family was doing.",
    "Say what 3 people in your house are doing right now. Guess!",
    "Say base, past and participle of: fly, ride, sing, swim.",
    "Say 'I have never seen a ghost!' like a scared person, a liar and a robot.",
    "Say what you have been doing to get ready for your next interview, 3 sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say how long you have been studying English and 2 challenges you have faced.",
    "Describe what your coach is doing right now like a sports commentator.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
