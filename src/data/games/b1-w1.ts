import type { GamePack } from "./types";

// BASIC 1 · WEEK 1 — Basics review (greetings, alphabet, numbers, verb to be, days & months, body & adjectives, How much is this?)
// + GOING TO: intro (Day 3) and yes/no questions (Day 4). Days 1–2 are review only: no "going to" yet.
export const B1_W1: GamePack = {
  level: "b1",
  week: 1,
  theme: "I am going to...",
  teams: { suggestedNames: ["Red Rockets", "Blue Jaguars", "Green Pumas", "Yellow Eagles"] },

  days: [
    { level: "b1", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Review: greetings · verb to be · age · countries", minutes: 10 },
    { level: "b1", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Review: verb to be · numbers · days & months · How much is this?", minutes: 10 },
    { level: "b1", week: 1, day: 3, game: "story_heist", title: "Story Heist — Future Edition", grammar: "GOING TO: affirmative · negative · third person", minutes: 10 },
    { level: "b1", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "GOING TO yes/no questions · Time expressions · Body & adjectives · Dates", minutes: 10 },
    { level: "b1", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Going-To Gorilla", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Hola, ¿cómo te va?", en: "Hello, how is it going?", alt: ["Hi, how is it going?", "Hello, how's it going?"] },
      { tier: 1, es: "Tengo 28 años.", en: "I am 28 years old.", alt: ["I'm 28 years old."] },
      { tier: 1, es: "Ella es de Honduras.", en: "She is from Honduras.", alt: ["She's from Honduras."] },
      { tier: 1, es: "Hoy es martes.", en: "Today is Tuesday." },
      { tier: 2, es: "¿Cuántos años tiene tu mamá?", en: "How old is your mom?", alt: ["How old is your mother?"] },
      { tier: 2, es: "Mi cumpleaños es el 3 de junio.", en: "My birthday is on June 3rd.", alt: ["My birthday is on June third.", "My birthday is June 3rd.", "My birthday is on the third of June."] },
      { tier: 2, es: "¿Cuánto cuesta esto?", en: "How much is this?" },
      { tier: 2, es: "Mis hermanos son altos y fuertes.", en: "My brothers are tall and strong." },
      { tier: 3, es: "Mi papá tiene 50 años y es de Guatemala.", en: "My dad is 50 years old and he is from Guatemala.", alt: ["My father is 50 years old and he is from Guatemala.", "My dad is 50 and he is from Guatemala.", "My dad is 50 years old and he's from Guatemala."] },
      { tier: 3, es: "¿De dónde son tus amigos? Son de México.", en: "Where are your friends from? They are from Mexico.", alt: ["Where are your friends from? They're from Mexico."] },
      { tier: 3, es: "Mi clase es el lunes y el miércoles.", en: "My class is on Monday and Wednesday.", alt: ["My class is on Mondays and Wednesdays.", "My class is on Monday and on Wednesday."] },
      { tier: 3, es: "Estoy enfermo y muy cansado hoy.", en: "I am sick and very tired today.", alt: ["I'm sick and very tired today."] },
    ],
    echo: [
      { en: "Good morning! My name is Carla and I am 30 years old." },
      { en: "My sister is short and my brother is very tall." },
      { en: "How much is this? It is fifteen dollars." },
      { en: "My birthday is on October 20th." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have 31 years.", right: "I am 31 years old.", hint: "Age uses AM, not HAVE." },
      { wrong: "She are from Nicaragua.", right: "She is from Nicaragua.", hint: "She → IS." },
      { wrong: "How old is you?", right: "How old are you?", hint: "You → ARE." },
      { wrong: "My birthday is in April 9th.", right: "My birthday is on April 9th.", hint: "ON + full date." },
      { wrong: "Is Juan from Honduras? Yes, he are.", right: "Is Juan from Honduras? Yes, he is.", hint: "He → IS." },
      { wrong: "How much is these?", right: "How much are these?", hint: "These (plural) → ARE." },
      { wrong: "My brothers is tall.", right: "My brothers are tall.", hint: "Brothers (plural) → ARE." },
      { wrong: "It is one hundred twenty dollar.", right: "It is one hundred twenty dollars.", hint: "120 → dollarS." },
      { wrong: "What day is today? Is Friday.", right: "What day is today? It is Friday.", hint: "Don't forget the subject: IT is." },
      { wrong: "Where you are from?", right: "Where are you from?", hint: "Question: where ARE YOU." },
      { wrong: "Her birthday is on October.", right: "Her birthday is in October.", hint: "IN + month." },
      { wrong: "The class is at Monday.", right: "The class is on Monday.", hint: "ON + day." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Tomorrow you are going to be invisible. What are you going to do? (Round 1: I am going to...)", retellAs: "Round 2: the other team says 4 things you are NOT going to do (You are not going to...). Round 3: the other team retells the story in third person (He/She is going to...)." },
      { prompt: "Crazy story: A monkey is going to live in your house next week. Say what it is going to do. (Round 1: It is going to...)", retellAs: "Round 2: the other team says 4 things the monkey is NOT going to do (It is not going to...). Round 3: the other team retells the story about the monkey and the first team (They are going to...)." },
      { prompt: "Crazy story: You have one million dollars. What are you going to do tomorrow? (Round 1: I am going to...)", retellAs: "Round 2: the other team says 4 things you are NOT going to do. Round 3: the other team retells the story in third person (He/She is going to...)." },
      { prompt: "Crazy story: Your coach is going to be a chicken tomorrow. Say what he or she is going to do. (Round 1: He/She is going to...)", retellAs: "Round 2: the other team says 4 things the coach is NOT going to do (He/She is not going to...). Round 3: the other team retells the story as the coach (I am going to...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "mañana (el día de mañana)", en: "tomorrow", category: "time" },
      { es: "esta noche", en: "tonight", alt: ["this evening"], category: "time" },
      { es: "el próximo fin de semana", en: "next weekend", category: "time" },
      { es: "el próximo mes", en: "next month", category: "time" },
      { es: "hoy", en: "today", category: "time" },
      { es: "la próxima semana", en: "next week", category: "time" },
      { es: "hombro", en: "shoulder", category: "body" },
      { es: "rodilla", en: "knee", category: "body" },
      { es: "estómago", en: "stomach", category: "body" },
      { es: "alto", en: "tall", category: "adjectives" },
      { es: "bajo (persona)", en: "short", category: "adjectives" },
      { es: "fuerte", en: "strong", category: "adjectives" },
      { es: "cansado", en: "tired", category: "adjectives" },
      { es: "trescientos", en: "three hundred", alt: ["300"], category: "numbers" },
      { es: "mil", en: "one thousand", alt: ["a thousand", "thousand", "1000"], category: "numbers" },
      { es: "doscientos cincuenta", en: "two hundred fifty", alt: ["two hundred and fifty", "250"], category: "numbers" },
    ],
    flips: [
      { affirmative: "I am going to study tonight.", negative: "I am not going to study tonight.", question: "Are you going to study tonight?" },
      { affirmative: "She is going to cook tomorrow.", negative: "She is not going to cook tomorrow.", question: "Is she going to cook tomorrow?" },
      { affirmative: "They are going to play soccer on Saturday.", negative: "They are not going to play soccer on Saturday.", question: "Are they going to play soccer on Saturday?" },
      { affirmative: "My parents are going to travel next month.", negative: "My parents are not going to travel next month.", question: "Are your parents going to travel next month?" },
    ],
    numbers: [
      { say: "two thousand twenty-six", write: "2026" },
      { say: "May twenty-seventh", write: "May 27th" },
      { say: "four hundred sixty", write: "460" },
      { say: "the year nineteen ninety-nine", write: "1999" },
      { say: "the first of August", write: "August 1st" },
      { say: "seventy-five dollars", write: "$75" },
    ],
  },

  bossBattle: {
    name: "The Going-To Gorilla",
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
      { name: "❤️ Heal", effect: "The gorilla recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "I HAVE 31 years? Delicious mistake.",
      "I GOING to? Where is your AM, human?",
      "Yes, I DO? No! Yes, I AM!",
      "IN Monday... ON Monday, weaklings.",
      "Your future is full of mistakes. Delicious.",
    ],
  },

  punishments: [
    "Spell the word TOMORROW letter by letter.",
    "Count from 100 to 110 in English, fast!",
    "Say today's date in English like a news anchor.",
    "Say 'I am the champion!' in 3 different voices.",
    "Touch 4 parts of your body and say them in English.",
    "Say 3 sentences about your mom: her age, where she is from and what she is like.",
    "Say the 12 months of the year in 15 seconds.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 5 adjectives to describe your coach.",
    "Say the price of 3 things on your desk: 'It is ten dollars.'",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
