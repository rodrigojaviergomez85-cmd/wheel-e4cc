import type { GamePack } from "./types";

// BASIC 1 · WEEK 4 — Going to vs. Will · Gonna · Wh- questions in the future: What kind, What time, How, How much, How many.
// Role-play: news report. Days 4 and 5 = evaluation (games go after it).
export const B1_W4: GamePack = {
  level: "b1",
  week: 4,
  theme: "What will you do next weekend?",
  teams: { suggestedNames: ["Red Rockets", "Blue Jaguars", "Green Pumas", "Yellow Eagles"] },

  days: [
    { level: "b1", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "GOING TO (plans) vs. WILL (promises, predictions) · News report", minutes: 10 },
    { level: "b1", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Gonna · Going to vs. Will · Why ... ? Because ...", minutes: 10 },
    { level: "b1", week: 4, day: 3, game: "story_heist", title: "Story Heist — Future Edition", grammar: "What kind / What time / How / How much / How many ... in the future", minutes: 10 },
    { level: "b1", week: 4, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Question words · Month vocabulary review · Prices & quantities", minutes: 10, note: "After the evaluation" },
    { level: "b1", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Gonna Golem", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Voy a viajar el próximo mes. (plan)", en: "I am going to travel next month.", alt: ["I'm going to travel next month.", "I'm gonna travel next month."] },
      { tier: 1, es: "Te llamaré esta noche. (promesa)", en: "I will call you tonight.", alt: ["I'll call you tonight."] },
      { tier: 1, es: "Creo que ganará Brasil.", en: "I think Brazil will win.", alt: ["I think that Brazil will win."] },
      { tier: 1, es: "¿Qué hora es? Son las 3 y media.", en: "What time is it? It is 3:30.", alt: ["What time is it? It's 3:30.", "What time is it? It is half past three.", "What time is it? It is three thirty."] },
      { tier: 2, es: "¿A qué hora vas a llegar?", en: "What time are you going to arrive?" },
      { tier: 2, es: "¿Qué tipo de música vas a escuchar?", en: "What kind of music are you going to listen to?" },
      { tier: 2, es: "¿Cómo vas a viajar? En bus.", en: "How are you going to travel? By bus." },
      { tier: 2, es: "Va a hacer calor mañana.", en: "It is going to be hot tomorrow.", alt: ["It's going to be hot tomorrow.", "It's gonna be hot tomorrow."] },
      { tier: 3, es: "¿Cuánto dinero vas a gastar en la fiesta?", en: "How much money are you going to spend on the party?" },
      { tier: 3, es: "¿Cuántas personas vendrán a la boda?", en: "How many people will come to the wedding?" },
      { tier: 3, es: "Noticias: el presidente visitará San Miguel el viernes.", en: "News: the president will visit San Miguel on Friday.", alt: ["Breaking news: the president will visit San Miguel on Friday."] },
      { tier: 3, es: "No voy a comprar ese carro porque es muy caro.", en: "I am not going to buy that car because it is very expensive.", alt: ["I'm not going to buy that car because it's very expensive.", "I'm not gonna buy that car because it is very expensive."] },
    ],
    echo: [
      { en: "I'm gonna visit my grandmother on Sunday and I'll bring her flowers." },
      { en: "Good evening. Tomorrow it will be sunny in San Salvador." },
      { en: "What time are you going to wake up? At five thirty." },
      { en: "How many tacos are you going to eat? Ten!" },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I'm gonna to eat pizza.", right: "I'm gonna eat pizza.", hint: "Gonna already has the TO." },
      { wrong: "She gonna travel in May.", right: "She is gonna travel in May.", hint: "IS gonna / she's gonna." },
      { wrong: "I will going to call you.", right: "I will call you.", hint: "Will OR going to, not both." },
      { wrong: "How many money are you going to spend?", right: "How much money are you going to spend?", hint: "Money → HOW MUCH." },
      { wrong: "How much people will come?", right: "How many people will come?", hint: "People → HOW MANY." },
      { wrong: "What time you will arrive?", right: "What time will you arrive?", hint: "What time WILL YOU." },
      { wrong: "What kind music are you going to play?", right: "What kind of music are you going to play?", hint: "What kind OF." },
      { wrong: "How you are going to travel?", right: "How are you going to travel?", hint: "How ARE YOU going to." },
      { wrong: "The news: it will rains tomorrow.", right: "The news: it will rain tomorrow.", hint: "Base verb after will." },
      { wrong: "Why are you going to study? Because I want learn.", right: "Why are you going to study? Because I want to learn.", hint: "Want TO learn." },
      { wrong: "I'm gonna buy that phone because is cheap.", right: "I'm gonna buy that phone because it is cheap.", hint: "Because IT is." },
      { wrong: "What time is going to start the party?", right: "What time is the party going to start?", hint: "What time + is + SUBJECT + going to." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: A UFO is going to land at your school tomorrow. What are you going to do? (Round 1: I'm going to / I'm gonna...)", retellAs: "Round 2: the other team asks 5 questions with What kind / What time / How / How much / How many. Round 3: the other team reports the story like the news (Tomorrow a UFO will land... Students will...)." },
      { prompt: "Crazy story: Next weekend you will be the king or queen of El Salvador. What will you do? (Round 1: I will...)", retellAs: "Round 2: the other team asks 5 questions (What kind of food will you eat? How much money will you spend? What time will you wake up? How many...?). Round 3: the other team retells in third person (The king/queen will...)." },
      { prompt: "Crazy story: Your dog is going to win the lottery. What is it going to do with the money? (Round 1: It's gonna...)", retellAs: "Round 2: the other team asks 5 questions (How much money? What kind of house? How many cars? What time...? How...?). Round 3: the other team retells with WILL (The dog will...)." },
      { prompt: "Crazy story: You are going to open a hotel for monsters. What is going to be in the hotel? (Round 1: It's going to have...)", retellAs: "Round 2: the other team asks 5 questions (What kind of monsters? How much is a room? How many rooms? What time is breakfast? How will they arrive?). Round 3: the other team reports it like the news (Next year a monster hotel will open...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "¿qué tipo de?", en: "what kind of", category: "question words" },
      { es: "¿a qué hora?", en: "what time", category: "question words" },
      { es: "¿cómo?", en: "how", category: "question words" },
      { es: "¿cuánto? (dinero)", en: "how much", category: "question words" },
      { es: "¿cuántos? (personas)", en: "how many", category: "question words" },
      { es: "caro", en: "expensive", category: "adjectives" },
      { es: "barato", en: "cheap", category: "adjectives" },
      { es: "soleado", en: "sunny", category: "weather" },
      { es: "lluvioso", en: "rainy", category: "weather" },
      { es: "boda", en: "wedding", category: "events" },
      { es: "noticias", en: "news", category: "events" },
      { es: "fin de semana", en: "weekend", category: "time" },
      { es: "el próximo año", en: "next year", category: "time" },
      { es: "gastar (dinero)", en: "spend", alt: ["to spend"], category: "verbs" },
      { es: "llamar", en: "call", alt: ["to call"], category: "verbs" },
      { es: "ganar (un juego)", en: "win", alt: ["to win"], category: "verbs" },
    ],
    flips: [
      { affirmative: "I'm gonna spend fifty dollars. (How much?)", negative: "I'm not gonna spend fifty dollars.", question: "How much are you gonna spend?" },
      { affirmative: "The concert is going to start at nine. (What time?)", negative: "The concert is not going to start at nine.", question: "What time is the concert going to start?" },
      { affirmative: "Fifty people will come to the party. (How many?)", negative: "Fifty people will not come to the party.", question: "How many people will come to the party?" },
      { affirmative: "We are going to travel by plane. (How?)", negative: "We are not going to travel by plane.", question: "How are we going to travel?" },
    ],
    numbers: [
      { say: "one hundred twenty dollars", write: "$120" },
      { say: "eight forty-five in the morning", write: "8:45" },
      { say: "thirty-five people", write: "35" },
      { say: "two thousand twenty-seven", write: "2027" },
      { say: "nine dollars and ninety-nine cents", write: "$9.99" },
      { say: "a quarter past six", write: "6:15" },
    ],
  },

  bossBattle: {
    name: "The Gonna Golem",
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
      { name: "❤️ Heal", effect: "The golem recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Gonna TO? Gonna TO? I'm gonna crush you!",
      "How MANY money? Money is HOW MUCH, little humans.",
      "Will OR going to. Pick ONE, little human!",
      "What kind music? What kind OF music... OF!",
      "You're not gonna win. I promise you WON'T.",
    ],
  },

  punishments: [
    "Give tomorrow's weather report in English like a TV reporter.",
    "Say 2 plans with GOING TO and 2 promises with WILL.",
    "Ask your coach 3 questions: What kind / What time / How much.",
    "Say 5 sentences with GONNA, fast!",
    "Say the price of 4 things in your house in English.",
    "Say 'I'm gonna win!' in 3 different voices.",
    "Say what your coach is going to do tomorrow and why (3 sentences).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 4 things that will happen in 2050.",
    "Say what time you are going to wake up, eat and sleep tomorrow.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
