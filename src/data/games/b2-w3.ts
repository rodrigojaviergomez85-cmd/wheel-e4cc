import type { GamePack } from "./types";

// BASIC 2 · WEEK 3 — Present progressive: Day 1 affirmative/negative, Day 2 yes/no questions, Day 3 Wh- questions,
// Day 4 future vs. simple present vs. present progressive, Day 5 movie evaluation. AF: How do you install TikTok? (steps: first, then, finally).
export const B2_W3: GamePack = {
  level: "b2",
  week: 3,
  theme: "What are you doing right now?",
  teams: { suggestedNames: ["Red Foxes", "Blue Wolves", "Green Hawks", "Yellow Cobras"] },

  days: [
    { level: "b2", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Present progressive: am / is / are + verb-ing · Right now", minutes: 10 },
    { level: "b2", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Progressive yes/no questions · -ing spelling · Short answers", minutes: 10 },
    { level: "b2", week: 3, day: 3, game: "build_person", title: "Build-a-Scene — Right now", grammar: "What is he doing? Why? Where? · Scenes in progress", minutes: 10 },
    { level: "b2", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Action verbs · Every day vs. right now vs. tomorrow", minutes: 10 },
    { level: "b2", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The -ING Kraken", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Estoy estudiando inglés ahora.", en: "I am studying English now.", alt: ["I'm studying English now.", "I am studying English right now."] },
      { tier: 1, es: "Ella está cocinando.", en: "She is cooking.", alt: ["She's cooking."] },
      { tier: 1, es: "Los niños están durmiendo.", en: "The kids are sleeping.", alt: ["The children are sleeping."] },
      { tier: 1, es: "No estoy trabajando hoy.", en: "I am not working today.", alt: ["I'm not working today."] },
      { tier: 2, es: "Mi mamá está hablando por teléfono.", en: "My mom is talking on the phone.", alt: ["My mother is talking on the phone.", "My mom is speaking on the phone."] },
      { tier: 2, es: "Estamos viendo una película.", en: "We are watching a movie.", alt: ["We're watching a movie."] },
      { tier: 2, es: "Mi hermano está jugando videojuegos en su cuarto.", en: "My brother is playing video games in his room." },
      { tier: 2, es: "Ellos no están escuchando al coach.", en: "They are not listening to the coach.", alt: ["They aren't listening to the coach."] },
      { tier: 3, es: "Está lloviendo y mi perro está corriendo en el parque.", en: "It is raining and my dog is running in the park.", alt: ["It's raining and my dog is running in the park."] },
      { tier: 3, es: "Mi papá está manejando al trabajo ahora mismo.", en: "My dad is driving to work right now.", alt: ["My father is driving to work right now."] },
      { tier: 3, es: "Los estudiantes están escribiendo en el chat.", en: "The students are writing in the chat.", alt: ["The students are typing in the chat."] },
      { tier: 3, es: "No estoy comiendo; estoy tomando café.", en: "I am not eating; I am drinking coffee.", alt: ["I'm not eating; I'm drinking coffee."] },
    ],
    echo: [
      { en: "Right now I am sitting in my room and I am studying English." },
      { en: "My sister is cooking and my brother is watching TV." },
      { en: "The students are not sleeping; they are listening." },
      { en: "It is raining and the dogs are running in the garden." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "She is cook dinner.", right: "She is cooking dinner.", hint: "Is + verb-ING." },
      { wrong: "I eating pizza right now.", right: "I am eating pizza right now.", hint: "AM / IS / ARE + -ing." },
      { wrong: "They are runing in the park.", right: "They are running in the park.", hint: "Run → double N." },
      { wrong: "He is writeing an email.", right: "He is writing an email.", hint: "Drop the E: writing." },
      { wrong: "Are you working? Yes, I do.", right: "Are you working? Yes, I am.", hint: "Yes, I AM." },
      { wrong: "Is she sleeping? Yes, she sleeps.", right: "Is she sleeping? Yes, she is.", hint: "Short answer: Yes, she IS." },
      { wrong: "Are you study right now?", right: "Are you studying right now?", hint: "Are you + verb-ING." },
      { wrong: "We are swiming in the pool.", right: "We are swimming in the pool.", hint: "Swim → double M." },
      { wrong: "Do you are listening to me?", right: "Are you listening to me?", hint: "No DO with -ing." },
      { wrong: "My parents is watching TV.", right: "My parents are watching TV.", hint: "Parents → ARE." },
      { wrong: "Is raining right now.", right: "It is raining right now.", hint: "IT is raining." },
      { wrong: "She is not listen to music.", right: "She is not listening to music.", hint: "Not + verb-ING." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "🎉", title: "The Birthday Party — right now", facts: ["what the DJ is doing", "what grandma is doing", "what the kids are doing", "what the dog is doing", "what your coach is doing", "what the neighbors are doing", "what is NOT happening"], starters: ["The DJ is ...", "Grandma is ...", "The kids are ...", "The dog is ...", "The coach is ...", "The neighbors are ...", "Nobody is ..."], retell: "The other team asks 4 Wh- questions (What is grandma doing? Why is the dog...? Where are the kids...?) and then retells the scene in 30 seconds." },
      { emoji: "🏢", title: "The Call Center — right now", facts: ["what the agents are doing", "what the supervisor is doing", "what one customer is doing", "what the new agent is doing", "what is happening in the kitchen", "who is NOT working", "what the boss is doing"], starters: ["The agents are ...", "The supervisor is ...", "A customer is ...", "The new agent is ...", "In the kitchen, ... is ...", "The ... is not working; he is ...", "The boss is ..."], retell: "The other team asks 4 Wh- questions (What is the boss doing? Why is the new agent...?) and then retells the scene in 30 seconds." },
      { emoji: "🚌", title: "The Bus — right now", facts: ["what the driver is doing", "what a grandmother is doing", "what two students are doing", "what a baby is doing", "what a man with a chicken is doing", "what you are doing", "what the bus is doing"], starters: ["The driver is ...", "A grandmother is ...", "Two students are ...", "A baby is ...", "A man with a chicken is ...", "I am ...", "The bus is ... (stopping / moving / turning)"], retell: "The other team asks 4 Wh- questions (What is the baby doing? What is the driver doing?) and then retells the scene in 30 seconds." },
      { emoji: "🏖️", title: "The Beach — right now", facts: ["what the kids are doing", "what your mom is doing", "what a dog is doing", "what the sun is doing", "what you are eating or drinking", "what your friend is NOT doing", "what the waiter is doing"], starters: ["The kids are ...", "My mom is ...", "A dog is ...", "The sun is ...", "I am eating / drinking ...", "My friend is not ...", "The waiter is ..."], retell: "The other team asks 4 Wh- questions (What are the kids doing? Why is your friend not...?) and then retells the scene in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "corriendo", en: "running", category: "-ing" },
      { es: "nadando", en: "swimming", category: "-ing" },
      { es: "escribiendo", en: "writing", category: "-ing" },
      { es: "durmiendo", en: "sleeping", category: "-ing" },
      { es: "manejando", en: "driving", category: "-ing" },
      { es: "sentado", en: "sitting", alt: ["sitting down"], category: "-ing" },
      { es: "hablando", en: "talking", alt: ["speaking"], category: "-ing" },
      { es: "lloviendo", en: "raining", category: "-ing" },
      { es: "ahora mismo", en: "right now", alt: ["now"], category: "time" },
      { es: "en este momento", en: "at the moment", alt: ["at this moment", "right now"], category: "time" },
      { es: "hoy", en: "today", category: "time" },
      { es: "esta semana", en: "this week", category: "time" },
      { es: "primero", en: "first", category: "steps" },
      { es: "luego / después", en: "then", alt: ["after that", "next"], category: "steps" },
      { es: "finalmente", en: "finally", alt: ["lastly", "last"], category: "steps" },
      { es: "instalar", en: "install", alt: ["to install"], category: "steps" },
    ],
    flips: [
      { affirmative: "I am working right now.", negative: "I am not working right now.", question: "Are you working right now?" },
      { affirmative: "She is cooking dinner. (What?)", negative: "She is not cooking dinner.", question: "What is she cooking?" },
      { affirmative: "They play soccer every Saturday. (When?)", negative: "They do not play soccer every Saturday.", question: "When do they play soccer?" },
      { affirmative: "He is going to work tomorrow.", negative: "He is not going to work tomorrow.", question: "Is he going to work tomorrow?" },
    ],
    numbers: [
      { say: "it is three twenty right now", write: "3:20" },
      { say: "a quarter past eleven", write: "11:15" },
      { say: "twenty-five students are listening", write: "25" },
      { say: "half past one", write: "1:30" },
      { say: "step number four", write: "4" },
      { say: "nine fifty-five", write: "9:55" },
    ],
  },

  bossBattle: {
    name: "The -ING Kraken",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "word", seconds: 90, items: 4 },
      { kind: "person", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "The kraken recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "She is COOK? Where is my -ING? Feed me -ING!",
      "RUNING with one N? RUNNING has two... like your tears!",
      "Are you winning? Yes, I DO? No! Yes, I AM... and you are NOT.",
      "I eating? I EATING? You are SINKING!",
      "DO you are? No DO with -ing, little sailors!",
    ],
  },

  punishments: [
    "Say 5 things people in your house are doing right now.",
    "Say what you are NOT doing right now, 4 sentences.",
    "Ask your coach 3 questions with 'Are you...ing?'",
    "Act out an action on camera; your team says it in English (He is ...ing).",
    "Spell these words out loud: running, writing, swimming.",
    "Say 'What are you doing?' in 3 different voices.",
    "Explain how to install TikTok in 3 steps: first, then, finally.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say what your coach is doing right now and what he or she does every day.",
    "Describe what is happening on your screen right now, 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
