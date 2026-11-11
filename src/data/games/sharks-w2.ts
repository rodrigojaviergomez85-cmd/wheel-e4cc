import type { GamePack } from "./types";

// SHARKS · WEEK 2 — Day 1 past & present progressive (cellphones, life in the big city), Day 2 present perfect (Have you ever...?),
// Day 3 present perfect progressive (What has she been doing lately?), Day 4 simple past vs. present perfect vs. present perfect progressive, Day 5 evaluations.
export const SHARKS_W2: GamePack = {
  level: "sharks",
  week: 2,
  theme: "Never have I ever",
  teams: { suggestedNames: ["Great Whites", "Hammerheads", "Bull Sharks", "Blue Makos"] },

  days: [
    { level: "sharks", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Past progressive vs. present progressive · City life & cellphones", minutes: 10 },
    { level: "sharks", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: have / has + participle · ever / never", minutes: 10 },
    { level: "sharks", week: 2, day: 3, game: "story_heist", title: "Story Heist — The Catch-Up", grammar: "Present perfect progressive · What have you been doing lately?", minutes: 10 },
    { level: "sharks", week: 2, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Simple past vs. present perfect vs. perfect progressive", minutes: 10 },
    { level: "sharks", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Never-Ever Octopus", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Estaba cargando mi celular cuando empezó la clase.", en: "I was charging my cell phone when the class started.", alt: ["I was charging my phone when the class started.", "I was charging my cell phone when class started.", "I was charging my phone when class started."] },
      { tier: 1, es: "En este momento mi vecino está tocando la batería.", en: "Right now my neighbor is playing the drums.", alt: ["At the moment my neighbor is playing the drums.", "My neighbor is playing the drums right now.", "At this moment my neighbor is playing the drums."] },
      { tier: 1, es: "¿Con quién estabas hablando por teléfono?", en: "Who were you talking to on the phone?", alt: ["Who were you talking with on the phone?", "Who were you speaking to on the phone?"] },
      { tier: 1, es: "No estábamos poniendo atención cuando el coach hizo la pregunta.", en: "We weren't paying attention when the coach asked the question.", alt: ["We were not paying attention when the coach asked the question."] },
      { tier: 2, es: "Antes de E4CC estaba aprendiendo inglés con canciones; ahora estoy practicando con personas reales.", en: "Before E4CC I was learning English with songs; now I am practicing with real people.", alt: ["Before E4CC I was learning English with songs; now I'm practicing with real people."] },
      { tier: 2, es: "Mientras yo estaba esperando el bus, un hombre estaba vendiendo cargadores.", en: "While I was waiting for the bus, a man was selling chargers.", alt: ["While I was waiting for the bus, a man was selling phone chargers."] },
      { tier: 2, es: "¿Por qué estás usando mi teléfono? El tuyo está sonando en tu bolsillo.", en: "Why are you using my phone? Yours is ringing in your pocket." },
      { tier: 2, es: "Mucha gente se está mudando a la ciudad para buscar trabajo.", en: "Many people are moving to the city to look for work.", alt: ["A lot of people are moving to the city to look for a job.", "Many people are moving to the city to find work.", "A lot of people are moving to the city to look for work."] },
      { tier: 3, es: "Estaba cruzando la calle cuando se me cayó el celular y un carro le pasó encima.", en: "I was crossing the street when I dropped my phone and a car ran over it.", alt: ["I was crossing the street when I dropped my cell phone and a car ran over it."] },
      { tier: 3, es: "Mi mamá estaba viendo su novela mientras mi hermano estaba jugando en línea y gritando.", en: "My mom was watching her soap opera while my brother was playing online and yelling.", alt: ["My mom was watching her soap opera while my brother was playing online and shouting.", "My mother was watching her show while my brother was playing online and yelling.", "My mom was watching her telenovela while my brother was playing online and yelling."] },
      { tier: 3, es: "¿Qué está pasando en el centro? Están cerrando las calles y la gente está corriendo.", en: "What is happening downtown? They are closing the streets and people are running.", alt: ["What's going on downtown? They're closing the streets and people are running.", "What's happening downtown? They are closing the streets and people are running."] },
      { tier: 3, es: "Anoche a las once todavía estaba trabajando, y hoy me estoy durmiendo en clase.", en: "Last night at eleven I was still working, and today I am falling asleep in class.", alt: ["At eleven last night I was still working, and today I'm falling asleep in class.", "Last night at eleven I was still working, and today I'm falling asleep in class."] },
    ],
    echo: [
      { en: "While I was walking downtown, three people were selling the same phone case." },
      { en: "Right now my phone is updating, so I am not answering anybody." },
      { en: "Before E4CC I was watching movies with subtitles and understanding nothing." },
      { en: "The bus was moving, the driver was singing and everyone was holding on." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Have you ever stole anything?", right: "Have you ever stolen anything?", hint: "Steal → stole → ?" },
      { wrong: "I have never flew in a plane.", right: "I have never flown in a plane.", hint: "Fly → flew → ?" },
      { wrong: "She have never missed a class.", right: "She has never missed a class.", hint: "She → HAVE or HAS?" },
      { wrong: "Have you ever rode a horse?", right: "Have you ever ridden a horse?", hint: "Ride → rode → ?" },
      { wrong: "My dad has never sing in public.", right: "My dad has never sung in public.", hint: "Sing → sang → ?" },
      { wrong: "Have you ever meet a famous person?", right: "Have you ever met a famous person?", hint: "Have + PARTICIPLE of meet." },
      { wrong: "He hasn't never lost his wallet.", right: "He has never lost his wallet.", hint: "Two negatives? Keep only one (never OR not)." },
      { wrong: "Has you ever fallen in public?", right: "Have you ever fallen in public?", hint: "You → HAVE or HAS?" },
      { wrong: "We have never swam in a lake.", right: "We have never swum in a lake.", hint: "Swim → swam → ?" },
      { wrong: "Have ever you climbed a volcano?", right: "Have you ever climbed a volcano?", hint: "Word order: have + subject + ever." },
      { wrong: "They have never be to a concert.", right: "They have never been to a concert.", hint: "Be → was / were → ?" },
      { wrong: "Has your coach ever cry in class?", right: "Has your coach ever cried in class?", hint: "Regular verb: the ending is missing." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Catch-up: Your best friend went to study abroad one year ago and today you finally meet. Tell each other what you have been doing. (Round 1: I have been working..., I have been learning..., I have been living...)", retellAs: "Round 2: the other team asks 6 questions (How long have you been...? What have you been eating? Have you ever...?). Round 3: the other team retells it in third person (He has been..., she has been...)." },
      { prompt: "Catch-up: Your classmate looks very tired, has green hair and smells like fish. What has he or she been doing lately? (Round 1: He/She has been working at..., has been sleeping in..., has been cooking...)", retellAs: "Round 2: the other team says what the classmate HASN'T been doing (He/She hasn't been sleeping..., hasn't been studying...). Round 3: the other team plays the classmate and explains ('I have been ... because...')." },
      { prompt: "Catch-up: Your team has been doing strange things to be healthy. What have you been doing? (Round 1: I have been drinking..., I have been running..., I have been eating...)", retellAs: "Round 2: the other team plays the doctor and asks 6 questions (How long have you been...? Have you ever tried...?). Round 3: the other team reports to the class (They have been..., they haven't been...)." },
      { prompt: "Catch-up: The coach's phone has been ringing the whole class. Who has been calling and why? (Round 1: His/Her mom has been calling because..., the bank has been calling..., a secret admirer has been...)", retellAs: "Round 2: the other team asks 6 questions (Who has been calling? How long has the phone been ringing? Have they ever called before?). Round 3: the other team plays the callers and leaves voice messages ('Hi, I have been calling you all day because...')." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "be", es: "ser / estar", past: "was / were", participle: "been", sound: "irregular", example: "Have you ever been on TV?" },
      { base: "see", es: "ver", past: "saw", participle: "seen", sound: "irregular", example: "I have seen two good movies this month." },
      { base: "steal", es: "robar", past: "stole", participle: "stolen", sound: "irregular", example: "Have you ever stolen a pen from the office?" },
      { base: "fly", es: "volar", past: "flew", participle: "flown", sound: "irregular", example: "She has never flown in a helicopter." },
      { base: "ride", es: "montar (a caballo, en bici)", past: "rode", participle: "ridden", sound: "irregular", example: "I have only ridden a horse once." },
      { base: "meet", es: "conocer (a alguien)", past: "met", participle: "met", sound: "irregular", example: "We have met three famous singers." },
      { base: "sing", es: "cantar", past: "sang", participle: "sung", sound: "irregular", example: "He has sung karaoke in front of his boss." },
      { base: "lose", es: "perder", past: "lost", participle: "lost", sound: "irregular", example: "I have lost my keys twice this week." },
      { base: "fall", es: "caerse", past: "fell", participle: "fallen", sound: "irregular", example: "My phone has fallen into the toilet again." },
      { base: "swim", es: "nadar", past: "swam", participle: "swum", sound: "irregular", example: "Have you ever swum in a lake at night?" },
      { base: "buy", es: "comprar", past: "bought", participle: "bought", sound: "irregular", example: "She has bought the same shoes in three colors." },
      { base: "visit", es: "visitar", past: "visited", participle: "visited", sound: "id", example: "They have visited five countries so far." },
      { base: "watch", es: "mirar (una película, la tele)", past: "watched", participle: "watched", sound: "t", example: "Have you watched any good movies recently?" },
      { base: "climb", es: "escalar / subir", past: "climbed", participle: "climbed", sound: "d", example: "I have climbed the Santa Ana volcano twice." },
      { base: "dance", es: "bailar", past: "danced", participle: "danced", sound: "t", example: "He has never danced in the rain." },
      { base: "cry", es: "llorar", past: "cried", participle: "cried", sound: "d", example: "I have cried in a movie theater, I confess." },
    ],
    flips: [
      { affirmative: "I have ridden a motorcycle three times. (How many times?)", negative: "I have never ridden a motorcycle.", question: "How many times have you ridden a motorcycle?" },
      { affirmative: "He has been going to the gym for six months. (How long?)", negative: "He hasn't been going to the gym for six months.", question: "How long has he been going to the gym?" },
      { affirmative: "She saw a great movie last Friday. (When?)", negative: "She didn't see a great movie last Friday.", question: "When did she see a great movie?" },
      { affirmative: "They have met a famous actor. (ever?)", negative: "They have never met a famous actor.", question: "Have they ever met a famous actor?" },
    ],
  },

  bossBattle: {
    name: "The Never-Ever Octopus",
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
      { name: "❤️ Heal", effect: "The Octopus recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Have you ever STOLE? I have STOLEN eight points, one with each arm!",
      "She HAVE never? She HAS never beaten me, that's true.",
      "I have been squeezing students since Basic 0. My arms are not tired.",
      "Yesterday I HAVE eaten? No! Yesterday I ATE a whole team.",
      "Have you ever won against me? Never. Ever.",
    ],
  },

  punishments: [
    "Mention 3 fun experiences you have had in your life.",
    "Ask a classmate 3 questions with 'Have you ever...?'",
    "Say what you have been doing lately to be healthy, 3 sentences.",
    "Say 8 past participles in 8 seconds: flown, ridden, sung...",
    "Say what you were doing before class today, 3 sentences.",
    "Say 'Have you ever stolen anything?' like a police officer, a grandma and a shark.",
    "Recommend a movie you have seen recently in 15 seconds.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 3 things that are happening in your house right now.",
    "Tell us about a small problem you had this week and how you solved it, in 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
