import type { GamePack } from "./types";

// BASIC 3 · WEEK 3 — Past progressive: Day 1 affirmative/negative (What were you doing before class?), Day 2 while / when,
// Day 3 Wh- questions, Day 4 past progressive + when (What happened?), Day 5 movie evaluation. AF: Tell me about your favorite movie.
export const B3_W3: GamePack = {
  level: "b3",
  week: 3,
  theme: "What were you doing?",
  teams: { suggestedNames: ["Red Dragons", "Blue Sharks", "Green Monkeys", "Yellow Robots"] },

  days: [
    { level: "b3", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Past progressive: was / were + verb-ing", minutes: 10 },
    { level: "b3", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "was / were · while and when · -ing spelling", minutes: 10 },
    { level: "b3", week: 3, day: 3, game: "story_heist", title: "Story Heist — The Night Everything Happened", grammar: "What were you doing when...? · Wh- questions", minutes: 10 },
    { level: "b3", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Movie words · Past progressive flips · Years", minutes: 10 },
    { level: "b3", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The Was-Were Werewolf", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Yo estaba durmiendo a las diez.", en: "I was sleeping at ten.", alt: ["I was sleeping at 10."] },
      { tier: 1, es: "Ella estaba cocinando anoche.", en: "She was cooking last night." },
      { tier: 1, es: "Ellos estaban jugando fútbol.", en: "They were playing soccer.", alt: ["They were playing football."] },
      { tier: 1, es: "No estábamos estudiando.", en: "We were not studying.", alt: ["We weren't studying."] },
      { tier: 2, es: "Mi mamá estaba viendo televisión a las ocho.", en: "My mom was watching TV at eight.", alt: ["My mother was watching TV at eight.", "My mom was watching television at eight."] },
      { tier: 2, es: "¿Qué estabas haciendo antes de la clase?", en: "What were you doing before class?", alt: ["What were you doing before the class?"] },
      { tier: 2, es: "Yo estaba manejando a las seis de la mañana.", en: "I was driving at six in the morning.", alt: ["I was driving at 6 a.m.", "I was driving at 6 in the morning."] },
      { tier: 2, es: "Él no estaba escuchando al coach.", en: "He was not listening to the coach.", alt: ["He wasn't listening to the coach."] },
      { tier: 3, es: "Mientras yo estaba cocinando, mi hermano estaba durmiendo.", en: "While I was cooking, my brother was sleeping.", alt: ["My brother was sleeping while I was cooking."] },
      { tier: 3, es: "Estábamos viendo una película cuando se fue la luz.", en: "We were watching a movie when the power went out.", alt: ["We were watching a movie when the lights went out."] },
      { tier: 3, es: "Mis amigos estaban bailando a la medianoche.", en: "My friends were dancing at midnight." },
      { tier: 3, es: "Cristiano estaba entrenando cuando lo llamó su mamá.", en: "Cristiano was training when his mom called him.", alt: ["Cristiano was training when his mother called him."] },
    ],
    echo: [
      { en: "At nine o'clock last night I was watching my favorite movie." },
      { en: "They were dancing while the band was playing." },
      { en: "I was taking a shower when my phone rang." },
      { en: "We weren't sleeping; we were studying for the test." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I were sleeping at eleven.", right: "I was sleeping at eleven.", hint: "I → WAS." },
      { wrong: "They was playing basketball.", right: "They were playing basketball.", hint: "They → WERE." },
      { wrong: "She was cook when I arrived.", right: "She was cooking when I arrived.", hint: "Was + verb-ING." },
      { wrong: "We were runing in the park.", right: "We were running in the park.", hint: "Run → double N." },
      { wrong: "I was watching TV while my phone rang.", right: "I was watching TV when my phone rang.", hint: "Short action → WHEN." },
      { wrong: "Was you studying last night?", right: "Were you studying last night?", hint: "You → WERE." },
      { wrong: "He was driveing to work.", right: "He was driving to work.", hint: "Drop the E: driving." },
      { wrong: "What you were doing at eight?", right: "What were you doing at eight?", hint: "What WERE YOU." },
      { wrong: "Were you sleeping? Yes, I did.", right: "Were you sleeping? Yes, I was.", hint: "Yes, I WAS." },
      { wrong: "My parents was eating dinner.", right: "My parents were eating dinner.", hint: "Parents → WERE." },
      { wrong: "I was listening music in my room.", right: "I was listening to music in my room.", hint: "Listen TO." },
      { wrong: "Was raining when we left.", right: "It was raining when we left.", hint: "IT was raining." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Last night at 10 p.m. the lights went out in the whole city. What was everybody in your house doing? (Round 1: My mom was..., my dog was...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What were you doing when the lights went out? Where was your dad...? Why...?). Round 3: the other team retells the scene in NEGATIVE (Nobody was sleeping, the dog wasn't...)." },
      { prompt: "Crazy story: Yesterday at 3 p.m. a dinosaur walked into your call center. What was everybody doing? (Round 1: The agents were..., the boss was...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What was the boss doing? Who was talking to...? What were you doing when it arrived?). Round 3: the other team retells what happened next in SIMPLE PAST (The dinosaur ate..., everybody ran...)." },
      { prompt: "Crazy story: Think of your favorite movie. In the first scene, what was the hero doing while the villain was planning something? (Round 1: The hero was..., the villain was...)", retellAs: "Round 2: the other team asks 5 Wh- questions about the scene (What was the hero doing? Where was the villain...?). Round 3: the other team tells the ending in SIMPLE PAST (In the end, the hero...)." },
      { prompt: "Crazy story: Last Saturday at midnight you woke up and everybody in your family was doing something crazy. What were they doing? (Round 1: My grandma was..., my brother was...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What was your grandma doing? Why was your brother...?). Round 3: the other team retells the story in third person as a news report (At midnight, the family was...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "actor", en: "actor", alt: ["actress"], category: "movies" },
      { es: "personaje", en: "character", category: "movies" },
      { es: "escena", en: "scene", category: "movies" },
      { es: "villano", en: "villain", alt: ["bad guy"], category: "movies" },
      { es: "héroe", en: "hero", category: "movies" },
      { es: "final", en: "ending", alt: ["end", "the end"], category: "movies" },
      { es: "de miedo", en: "scary", category: "adjectives" },
      { es: "aburrida", en: "boring", category: "adjectives" },
      { es: "divertida", en: "funny", alt: ["fun"], category: "adjectives" },
      { es: "emocionante", en: "exciting", category: "adjectives" },
      { es: "triste", en: "sad", category: "adjectives" },
      { es: "mientras", en: "while", category: "connectors" },
      { es: "cuando", en: "when", category: "connectors" },
      { es: "de repente", en: "suddenly", category: "connectors" },
      { es: "anoche", en: "last night", category: "time" },
      { es: "a la medianoche", en: "at midnight", category: "time" },
    ],
    flips: [
      { affirmative: "I was sleeping at midnight.", negative: "I was not sleeping at midnight.", question: "Were you sleeping at midnight?" },
      { affirmative: "She was cooking when I arrived. (What?)", negative: "She was not cooking when I arrived.", question: "What was she doing when you arrived?" },
      { affirmative: "They were playing soccer in the park. (Where?)", negative: "They were not playing soccer in the park.", question: "Where were they playing soccer?" },
      { affirmative: "The hero was fighting the villain at midnight. (When?)", negative: "The hero was not fighting the villain at midnight.", question: "When was the hero fighting the villain?" },
    ],
    numbers: [
      { say: "the movie is from nineteen ninety-four", write: "1994" },
      { say: "it was eleven thirty at night", write: "11:30" },
      { say: "the movie is ninety minutes long", write: "90" },
      { say: "two thousand nineteen", write: "2019" },
      { say: "a quarter past nine", write: "9:15" },
      { say: "the ticket was six dollars and fifty cents", write: "$6.50" },
    ],
  },

  bossBattle: {
    name: "The Was-Were Werewolf",
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
      { name: "❤️ Heal", effect: "The werewolf recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "I WERE sleeping? I WAS... eating your lives!",
      "They WAS? They WERE... losing. Awoooo!",
      "She was COOK? Where is my -ING? Feed me!",
      "WHILE my phone rang? WHEN, little humans. WHEN!",
      "What were you doing when I attacked? Losing!",
    ],
  },

  punishments: [
    "Say what you were doing yesterday at 7, 9 and 11 p.m.",
    "Say what 4 people in your family were doing at 9 last night.",
    "Ask your coach 3 questions with 'What were you doing...?'",
    "Tell the story of your favorite movie in 20 seconds, in the past.",
    "Say 2 sentences with WHILE and 2 with WHEN, in the past.",
    "Say 'I was sleeping!' in 3 different voices.",
    "Spell these words out loud: running, driving, sleeping.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 5 adjectives to describe your favorite movie.",
    "Say what Cristiano Ronaldo was doing yesterday at 6 a.m., in 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
