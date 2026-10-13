import type { GamePack } from "./types";

// BASIC 1 · WEEK 3 — Future with WILL: affirmative, yes/no questions, Wh- questions, contractions ('ll / won't).
// Role-plays: traveling, at the restaurant. Day 4 = movie evaluation, Day 5 = contractions + evaluation. Going to stays as warm-up.
export const B1_W3: GamePack = {
  level: "b1",
  week: 3,
  theme: "I will, I won't",
  teams: { suggestedNames: ["Red Rockets", "Blue Jaguars", "Green Pumas", "Yellow Eagles"] },

  days: [
    { level: "b1", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "WILL affirmative & negative · Traveling", minutes: 10 },
    { level: "b1", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "WILL yes/no questions · At the restaurant", minutes: 10 },
    { level: "b1", week: 3, day: 3, game: "story_heist", title: "Story Heist — Future Edition", grammar: "WILL Wh- questions · What will she do tomorrow?", minutes: 10 },
    { level: "b1", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Travel & restaurant words · WILL flips · Prices", minutes: 10, note: "After the evaluation" },
    { level: "b1", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The Won't Monster", grammar: "Everything from the week · Contractions 'll / won't", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Te ayudaré con la tarea.", en: "I will help you with the homework.", alt: ["I'll help you with the homework.", "I will help you with your homework.", "I'll help you with your homework."] },
      { tier: 1, es: "Mañana lloverá.", en: "It will rain tomorrow.", alt: ["Tomorrow it will rain.", "It'll rain tomorrow."] },
      { tier: 1, es: "Viajaré a Guatemala en diciembre.", en: "I will travel to Guatemala in December.", alt: ["I'll travel to Guatemala in December."] },
      { tier: 1, es: "Ella no vendrá a la fiesta.", en: "She will not come to the party.", alt: ["She won't come to the party."] },
      { tier: 2, es: "Compraré los boletos esta noche.", en: "I will buy the tickets tonight.", alt: ["I'll buy the tickets tonight."] },
      { tier: 2, es: "El avión saldrá a las 6.", en: "The plane will leave at 6.", alt: ["The plane will leave at six.", "The plane will leave at 6 o'clock."] },
      { tier: 2, es: "No olvidaré mi pasaporte.", en: "I will not forget my passport.", alt: ["I won't forget my passport."] },
      { tier: 2, es: "Nosotros pediremos una pizza grande.", en: "We will order a large pizza.", alt: ["We'll order a large pizza.", "We will order a big pizza."] },
      { tier: 3, es: "El mesero traerá la cuenta en cinco minutos.", en: "The waiter will bring the check in five minutes.", alt: ["The waiter will bring the bill in five minutes."] },
      { tier: 3, es: "Mi hotel estará cerca de la playa.", en: "My hotel will be near the beach.", alt: ["My hotel will be close to the beach."] },
      { tier: 3, es: "Mis amigos no pagarán la cena; yo pagaré.", en: "My friends will not pay for the dinner; I will pay.", alt: ["My friends won't pay for the dinner; I will pay.", "My friends won't pay for dinner; I'll pay."] },
      { tier: 3, es: "Llegaremos al aeropuerto a las nueve de la mañana.", en: "We will arrive at the airport at nine in the morning.", alt: ["We'll arrive at the airport at nine in the morning.", "We will arrive at the airport at 9 a.m."] },
    ],
    echo: [
      { en: "I will travel to Mexico next month and I will visit the beach." },
      { en: "The waiter will bring the menu in a minute." },
      { en: "We will not forget our tickets." },
      { en: "My flight will leave at seven in the morning." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I will to study tonight.", right: "I will study tonight.", hint: "Will + base verb, no TO." },
      { wrong: "She wills travel in June.", right: "She will travel in June.", hint: "WILL never changes." },
      { wrong: "Will she come to the party? Yes, she is.", right: "Will she come to the party? Yes, she will.", hint: "Answer with the same word as the question." },
      { wrong: "Will she comes to the restaurant?", right: "Will she come to the restaurant?", hint: "Base verb after will." },
      { wrong: "Do you will order pizza?", right: "Will you order pizza?", hint: "Questions start with WILL." },
      { wrong: "Will you travel tomorrow? Yes, I do.", right: "Will you travel tomorrow? Yes, I will.", hint: "Yes, I WILL." },
      { wrong: "I will no pay the check.", right: "I will not pay the check.", hint: "Will NOT / won't." },
      { wrong: "They will going to arrive at six.", right: "They will arrive at six.", hint: "Will + base verb (no going to)." },
      { wrong: "We will arrive tomorrow in the night.", right: "We will arrive tomorrow at night.", hint: "AT night." },
      { wrong: "You will travel with me? Yes, I will.", right: "Will you travel with me? Yes, I will.", hint: "Questions: WILL goes first." },
      { wrong: "I am will order a salad.", right: "I will order a salad.", hint: "No AM with will." },
      { wrong: "Will you have a dessert? Yes, I have.", right: "Will you have a dessert? Yes, I will.", hint: "Short answer: Yes, I ___." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Tomorrow a dinosaur will come to your house. What will you do? (Round 1: I will...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What will you...? Where...? When...? Who ... with?). Round 3: the other team retells the story in third person (He/She will...)." },
      { prompt: "Crazy story: Next week you will be a millionaire. What will you do first? (Round 1: I will...)", retellAs: "Round 2: the other team asks 5 Wh- questions (What will you buy? Where will you go? When...?). Round 3: the other team retells the story in NEGATIVE (He/She won't...)." },
      { prompt: "Crazy story: In 2050 cars will fly. What will people do? (Round 1: People will...)", retellAs: "Round 2: the other team asks 5 Wh- questions (Where will people live? What will they eat? When will they work?). Round 3: the other team says 5 things that WON'T happen in 2050." },
      { prompt: "Crazy story: You will travel to Japan tomorrow with your coach. What will you do there? (Round 1: We will...)", retellAs: "Round 2: the other team asks 5 Wh- questions (Where will you stay? What will you eat? When will you come back?). Round 3: the other team retells the trip in third person (They will...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "pasaporte", en: "passport", category: "travel" },
      { es: "boleto", en: "ticket", category: "travel" },
      { es: "vuelo", en: "flight", category: "travel" },
      { es: "maleta", en: "suitcase", alt: ["luggage", "bag"], category: "travel" },
      { es: "hotel", en: "hotel", category: "travel" },
      { es: "playa", en: "beach", category: "travel" },
      { es: "mesero", en: "waiter", alt: ["server"], category: "restaurant" },
      { es: "menú", en: "menu", category: "restaurant" },
      { es: "la cuenta", en: "the check", alt: ["the bill", "check", "bill"], category: "restaurant" },
      { es: "postre", en: "dessert", category: "restaurant" },
      { es: "bebida", en: "drink", alt: ["beverage"], category: "restaurant" },
      { es: "pedir (comida)", en: "order", alt: ["to order"], category: "restaurant" },
      { es: "ayudar", en: "help", alt: ["to help"], category: "verbs" },
      { es: "olvidar", en: "forget", alt: ["to forget"], category: "verbs" },
      { es: "llegar", en: "arrive", alt: ["to arrive"], category: "verbs" },
      { es: "pagar", en: "pay", alt: ["to pay"], category: "verbs" },
    ],
    flips: [
      { affirmative: "I will travel to Mexico in June.", negative: "I will not travel to Mexico in June.", question: "Will you travel to Mexico in June?" },
      { affirmative: "She will order a dessert.", negative: "She will not order a dessert.", question: "Will she order a dessert?" },
      { affirmative: "The waiter will bring the check.", negative: "The waiter will not bring the check.", question: "Will the waiter bring the check?" },
      { affirmative: "They will arrive at nine.", negative: "They will not arrive at nine.", question: "Will they arrive at nine?" },
    ],
    numbers: [
      { say: "forty-five dollars and fifty cents", write: "$45.50" },
      { say: "two hundred dollars", write: "$200" },
      { say: "six fifteen in the morning", write: "6:15" },
      { say: "twelve dollars and ninety-nine cents", write: "$12.99" },
      { say: "two thousand fifty", write: "2050" },
      { say: "a quarter to ten", write: "9:45" },
    ],
  },

  bossBattle: {
    name: "The Won't Monster",
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
      { name: "❤️ Heal", effect: "The monster recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "I will TO study? There is no TO after will, humans!",
      "She WILLS? Will never changes. Never!",
      "Yes, I DO? With WILL? Yes, I WILL!",
      "You won't win. You WON'T!",
      "DO you will? Ha! WILL you... but you will not.",
    ],
  },

  punishments: [
    "Say 5 things you will do next weekend, fast!",
    "Say 5 things you will NEVER do, with WON'T.",
    "Ask your coach 3 questions with 'Will you...?'",
    "Order a full meal in English: drink, food and dessert.",
    "Say what you will pack in your suitcase: 6 things.",
    "Say 'I will win!' in 3 different voices.",
    "Say what your best friend will do tomorrow, in 3 sentences (He/She will...).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say a price in English for 4 things on your desk.",
    "Say 4 contractions out loud: I'll, you'll, she'll, we won't... in full sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
