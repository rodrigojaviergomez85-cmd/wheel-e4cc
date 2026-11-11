import type { GamePack } from "./types";

// TIGERS · WEEK 1 — Day 1 coaching day + simple past (game after the session), Day 2 modal verbs (can / could / might / should / must),
// Day 3 modals for advice and recommendations, Day 4 semi-modals (have to / need to), Day 5 second conditional + grammar test.
// First intermediate month: sentences are a little shorter than in Eagles.
export const TIGERS_W1: GamePack = {
  level: "tigers",
  week: 1,
  theme: "Advice, rules and prize money",
  teams: { suggestedNames: ["Orange Tigers", "White Tigers", "Night Panthers", "Golden Jaguars"] },

  days: [
    { level: "tigers", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple past review · What did you do last month?", minutes: 10, note: "After the coaching session" },
    { level: "tigers", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Modal verbs: can / could / might / should / must + base verb", minutes: 10 },
    { level: "tigers", week: 1, day: 3, game: "story_heist", title: "Story Heist — The Advice Chain", grammar: "Advice and recommendations with modals", minutes: 10 },
    { level: "tigers", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Semi-modals: have to / need to · Travel & mental health", minutes: 10 },
    { level: "tigers", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Bossy Dragon", grammar: "Everything from the week", minutes: 10, note: "After the grammar test" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "El mes pasado visité a mi abuela en Santa Ana.", en: "Last month I visited my grandmother in Santa Ana.", alt: ["Last month I visited my grandma in Santa Ana.", "I visited my grandmother in Santa Ana last month.", "I visited my grandma in Santa Ana last month."] },
      { tier: 1, es: "No dormí bien anoche.", en: "I didn't sleep well last night.", alt: ["I did not sleep well last night."] },
      { tier: 1, es: "¿Qué hiciste el sábado por la noche?", en: "What did you do on Saturday night?", alt: ["What did you do Saturday night?"] },
      { tier: 1, es: "Compramos pupusas y las comimos en el parque.", en: "We bought pupusas and ate them in the park.", alt: ["We bought pupusas and we ate them in the park.", "We bought pupusas and ate them at the park."] },
      { tier: 2, es: "Mi hermana consiguió trabajo el mes pasado y lo celebramos en casa.", en: "My sister got a job last month and we celebrated at home.", alt: ["My sister found a job last month and we celebrated at home.", "My sister got a job last month and we celebrated it at home."] },
      { tier: 2, es: "Llegué tarde porque había mucho tráfico.", en: "I arrived late because there was a lot of traffic.", alt: ["I got there late because there was a lot of traffic.", "I was late because there was a lot of traffic."] },
      { tier: 2, es: "¿Dónde conociste a tu mejor amigo?", en: "Where did you meet your best friend?" },
      { tier: 2, es: "Él no trajo su cuaderno, así que escribió en su mano.", en: "He didn't bring his notebook, so he wrote on his hand.", alt: ["He did not bring his notebook, so he wrote on his hand."] },
      { tier: 3, es: "Ayer fue mi primer día en Tigers y hablé inglés todo el tiempo.", en: "Yesterday was my first day in Tigers and I spoke English the whole time.", alt: ["Yesterday was my first day in Tigers and I spoke English all the time."] },
      { tier: 3, es: "Vimos una película de terror y después nadie quiso apagar la luz.", en: "We watched a horror movie and then nobody wanted to turn off the light.", alt: ["We saw a horror movie and then nobody wanted to turn off the light.", "We watched a scary movie and after that no one wanted to turn off the lights."] },
      { tier: 3, es: "Cuando era niño perdí un diente en la escuela y lloré una hora.", en: "When I was a kid I lost a tooth at school and cried for an hour.", alt: ["When I was a child I lost a tooth at school and I cried for an hour.", "When I was a kid I lost a tooth at school and I cried for an hour.", "When I was a girl I lost a tooth at school and cried for an hour.", "When I was little I lost a tooth at school and cried for an hour."] },
      { tier: 3, es: "El coach nos hizo una pregunta difícil y todos miramos al piso.", en: "The coach asked us a difficult question and everybody looked at the floor.", alt: ["The coach asked us a hard question and everyone looked at the floor.", "The coach asked us a difficult question and we all looked at the floor."] },
    ],
    echo: [
      { en: "Last month I started a diet on Monday and ended it on Tuesday." },
      { en: "My brother cooked dinner, burned the rice and ordered pizza." },
      { en: "We went to the beach, forgot the food and came back hungry." },
      { en: "I woke up late, ran to the bus stop and left my lunch at home." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "She might buys a car with her prize money.", right: "She might buy a car with her prize money.", hint: "After a modal, the verb has no -S." },
      { wrong: "You should to save some money.", right: "You should save some money.", hint: "Modal + base verb. One extra word here." },
      { wrong: "My sister musts wear a uniform.", right: "My sister must wear a uniform.", hint: "Modals never change." },
      { wrong: "Does he can cook?", right: "Can he cook?", hint: "Questions: the modal goes first, no DOES." },
      { wrong: "We don't can park here.", right: "We can't park here.", hint: "Negative: modal + NOT, no DON'T." },
      { wrong: "You shouldn't eating so much sugar.", right: "You shouldn't eat so much sugar.", hint: "After a modal, no -ING." },
      { wrong: "When I was five, I can't read.", right: "When I was five, I couldn't read.", hint: "The sentence is in the past. CAN'T in the past?" },
      { wrong: "She might not comes to the debate.", right: "She might not come to the debate.", hint: "Might not + base verb." },
      { wrong: "You must be not late for class.", right: "You must not be late for class.", hint: "NOT goes right after the modal." },
      { wrong: "What I should do with the money?", right: "What should I do with the money?", hint: "Question order: Wh- + modal + subject." },
      { wrong: "He could spoke English when he was ten.", right: "He could speak English when he was ten.", hint: "COULD is already past. The verb stays in base form." },
      { wrong: "My uncle can plays the guitar.", right: "My uncle can play the guitar.", hint: "After CAN, the verb never changes." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Advice chain: Mark spends ten hours a day on social media and he is failing his classes. Give him advice. (Round 1: He should..., he must..., he could...)", retellAs: "Round 2: the other team says what Mark SHOULDN'T / MUST NOT do (He shouldn't..., he must not...). Round 3: the other team plays Mark and gives excuses ('I can't because...') — the first team answers each excuse with new advice." },
      { prompt: "Advice chain: Lucy won ten thousand dollars in a contest. What might she do with her prize money, and what should she do? (Round 1: She might..., she could..., she should...)", retellAs: "Round 2: the other team says what she SHOULDN'T do with the money (She shouldn't..., she must not...). Round 3: the other team plays Lucy and announces her plan ('First I should..., then I might...')." },
      { prompt: "Advice chain: A tourist is coming to El Salvador for the first time. Give recommendations. (Round 1: You should visit..., you must try..., you could go to...)", retellAs: "Round 2: the other team gives warnings (You shouldn't..., you must not..., you might get...). Round 3: the other team plays the tourist and repeats 4 recommendations ('OK, I should..., I must try...')." },
      { prompt: "Advice chain: Your friend has a job interview tomorrow, but he has no suit, no alarm clock and he is very nervous. Help him. (Round 1: He should..., he could..., he must...)", retellAs: "Round 2: the other team says what he SHOULDN'T do in the interview (He shouldn't..., he must not...). Round 3: the other team plays the friend with excuses ('I can't because...') and the first team answers each one (Then you could...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "licencia de conducir", en: "driver's license", alt: ["driving license", "driver license"], category: "travel" },
      { es: "examen de manejo", en: "driving test", alt: ["road test", "driver's test"], category: "travel" },
      { es: "boleto de avión", en: "plane ticket", alt: ["flight ticket", "airline ticket"], category: "travel" },
      { es: "equipaje", en: "luggage", alt: ["baggage"], category: "travel" },
      { es: "embajada", en: "embassy", category: "travel" },
      { es: "aduana", en: "customs", category: "travel" },
      { es: "seguro de viaje", en: "travel insurance", category: "travel" },
      { es: "reservar (un hotel)", en: "book", alt: ["to book", "reserve", "book a hotel"], category: "travel" },
      { es: "ahorrar dinero", en: "save money", alt: ["to save money"], category: "travel" },
      { es: "fecha límite", en: "deadline", alt: ["due date"], category: "travel" },
      { es: "salud mental", en: "mental health", category: "wellbeing" },
      { es: "estrés", en: "stress", category: "wellbeing" },
      { es: "descansar", en: "rest", alt: ["to rest", "take a break", "relax"], category: "wellbeing" },
      { es: "dormir lo suficiente", en: "get enough sleep", alt: ["sleep enough", "to get enough sleep"], category: "wellbeing" },
      { es: "redes sociales", en: "social media", alt: ["social networks"], category: "wellbeing" },
      { es: "pedir ayuda", en: "ask for help", alt: ["to ask for help"], category: "wellbeing" },
    ],
    flips: [
      { affirmative: "Betty has to renew her passport before the trip. (What ... do?)", negative: "Betty doesn't have to renew her passport before the trip.", question: "What does Betty have to do before the trip?" },
      { affirmative: "You need to pass a driving test to get a license.", negative: "You don't need to pass a driving test to get a license.", question: "Do you need to pass a driving test to get a license?" },
      { affirmative: "Mark has to turn off his phone at night. (When?)", negative: "Mark doesn't have to turn off his phone at night.", question: "When does Mark have to turn off his phone?" },
      { affirmative: "They need to sleep eight hours every night. (How many hours?)", negative: "They don't need to sleep eight hours every night.", question: "How many hours do they need to sleep every night?" },
    ],
    numbers: [
      { say: "the plane ticket costs four hundred sixty dollars", write: "$460" },
      { say: "the driving test has thirty-five questions", write: "35" },
      { say: "her flight leaves at six fifteen", write: "6:15" },
      { say: "Mark sleeps only five hours a night", write: "5" },
      { say: "you have to be eighteen years old", write: "18" },
      { say: "she needs to save one thousand two hundred dollars", write: "$1,200" },
    ],
  },

  bossBattle: {
    name: "The Bossy Dragon",
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
      { name: "❤️ Heal", effect: "The Dragon recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "You should TO run? No TO after a modal, little tiger!",
      "He MUSTS obey me? Modals never wear an S!",
      "If I were you, I would run. But you can't run on Zoom!",
      "DO YOU CAN beat me? No, you can't. And no DO, please!",
      "You don't have to be perfect. You just have to lose.",
    ],
  },

  punishments: [
    "Give Mark 3 pieces of advice to use his phone less: SHOULD, MUST, COULD.",
    "Say 4 things Betty has to do before she travels to the USA.",
    "Say what you might do with 1,000 dollars of prize money, 3 ideas.",
    "Say 3 things you must do to get a driver's license.",
    "Give 3 tips for good mental health with SHOULD and SHOULDN'T.",
    "Say 'You must not do that!' like a police officer, a grandma and a baby.",
    "Tell us 3 things you did last month, in the past.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Recommend a place in El Salvador in 3 sentences: You should..., you must..., you could...",
    "Say 2 things you have to do today and 2 things you don't have to do.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
