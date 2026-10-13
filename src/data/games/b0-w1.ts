import type { GamePack } from "./types";

// BASIC 0 · WEEK 1 — Greetings, alphabet, numbers 1–1000, days & months, verb to be, colors, I live in / I work at / I study at.
export const B0_W1: GamePack = {
  level: "b0",
  week: 1,
  theme: "Hello, I am...",
  teams: { suggestedNames: ["Red Lions", "Blue Dolphins", "Green Parrots", "Yellow Bees"] },

  days: [
    { level: "b0", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Greetings · My name is · I am from · Verb to be", minutes: 10 },
    { level: "b0", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Verb to be · Age · Countries · Days", minutes: 10 },
    { level: "b0", week: 1, day: 3, game: "build_person", title: "Build-a-Person", grammar: "Tell me about yourself (in third person)", minutes: 10 },
    { level: "b0", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Spell It + Number Blitz", grammar: "Colors · Days · Months · Numbers · Alphabet", minutes: 10 },
    { level: "b0", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Verb-To-Be Monster", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Hola, me llamo Ana.", en: "Hello, my name is Ana." },
      { tier: 1, es: "Soy de El Salvador.", en: "I am from El Salvador.", alt: ["I'm from El Salvador."] },
      { tier: 1, es: "Buenos días, ¿cómo estás?", en: "Good morning, how are you?" },
      { tier: 1, es: "Tengo 25 años.", en: "I am 25 years old.", alt: ["I'm 25 years old."] },
      { tier: 2, es: "Ella es de Guatemala.", en: "She is from Guatemala.", alt: ["She's from Guatemala."] },
      { tier: 2, es: "Mi carro es azul.", en: "My car is blue." },
      { tier: 2, es: "Vivo en San Salvador.", en: "I live in San Salvador." },
      { tier: 2, es: "¿De dónde eres?", en: "Where are you from?" },
      { tier: 3, es: "Trabajo en Santa Tecla.", en: "I work in Santa Tecla." },
      { tier: 3, es: "Mi cumpleaños es en mayo.", en: "My birthday is in May." },
      { tier: 3, es: "Hoy es lunes.", en: "Today is Monday." },
      { tier: 3, es: "Él tiene 30 años y es de Honduras.", en: "He is 30 years old and he is from Honduras.", alt: ["He is 30 and he is from Honduras.", "He's 30 years old and he's from Honduras."] },
    ],
    echo: [
      { en: "Hello, my name is Carlos and I am from Santa Ana." },
      { en: "I am 22 years old and I live in San Miguel." },
      { en: "My phone is green." },
      { en: "Good afternoon! Nice to meet you." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have 31 years.", right: "I am 31 years old.", hint: "Age uses AM, not HAVE." },
      { wrong: "She are from Honduras.", right: "She is from Honduras.", hint: "She → IS." },
      { wrong: "My name are Luis.", right: "My name is Luis.", hint: "My name → IS." },
      { wrong: "We are from the El Salvador.", right: "We are from El Salvador.", hint: "No THE before the country." },
      { wrong: "I lives in Soyapango.", right: "I live in Soyapango.", hint: "I → LIVE." },
      { wrong: "Good afternoon, how you are?", right: "Good afternoon, how are you?", hint: "Question: how ARE YOU." },
      { wrong: "My car is the red.", right: "My car is red.", hint: "No THE before colors." },
      { wrong: "Today is friday.", right: "Today is Friday.", hint: "Days start with a capital letter." },
      { wrong: "He is 40 years.", right: "He is 40 years old.", hint: "Years OLD." },
      { wrong: "They is from Mexico.", right: "They are from Mexico.", hint: "They → ARE." },
      { wrong: "Where she is from?", right: "Where is she from?", hint: "Question: where IS SHE." },
      { wrong: "Her birthday is on October.", right: "Her birthday is in October.", hint: "IN + month." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "👨‍🍳", title: "The Chef", facts: ["name", "age", "country", "city", "where he works", "car color", "birthday month"], starters: ["His name is ...", "He is ... years old.", "He is from ...", "He lives in ...", "He works at ...", "His car is ...", "His birthday is in ..."], retell: "The other team retells everything about the chef in 30 seconds." },
      { emoji: "👩‍⚕️", title: "The Nurse", facts: ["name", "age", "country", "city", "where she works", "car color", "birthday month"], starters: ["Her name is ...", "She is ... years old.", "She is from ...", "She lives in ...", "She works at ...", "Her car is ...", "Her birthday is in ..."], retell: "The other team retells everything about the nurse in 30 seconds." },
      { emoji: "🧑‍🎓", title: "The Student", facts: ["name", "age", "country", "city", "where he or she studies", "phone color", "phone number"], starters: ["His/Her name is ...", "He/She is ... years old.", "He/She is from ...", "He/She lives in ...", "He/She studies at ...", "His/Her phone is ...", "His/Her phone number is ..."], retell: "The other team retells everything about the student in 30 seconds." },
      { emoji: "👴", title: "The Grandfather", facts: ["name", "age (a big number!)", "country", "city", "house color", "birthday month", "phone number"], starters: ["His name is ...", "He is ... years old.", "He is from ...", "He lives in ...", "His house is ...", "His birthday is in ...", "His phone number is ..."], retell: "The other team retells everything about the grandfather in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "rojo", en: "red", category: "colors" },
      { es: "azul", en: "blue", category: "colors" },
      { es: "verde", en: "green", category: "colors" },
      { es: "amarillo", en: "yellow", category: "colors" },
      { es: "lunes", en: "Monday", category: "days" },
      { es: "viernes", en: "Friday", category: "days" },
      { es: "miércoles", en: "Wednesday", category: "days" },
      { es: "enero", en: "January", category: "months" },
      { es: "marzo", en: "March", category: "months" },
      { es: "agosto", en: "August", category: "months" },
      { es: "quince", en: "fifteen", alt: ["15"], category: "numbers" },
      { es: "cien", en: "one hundred", alt: ["a hundred", "100"], category: "numbers" },
      { es: "buenas noches", en: "good night", alt: ["good evening"], category: "greetings" },
      { es: "gracias", en: "thank you", alt: ["thanks"], category: "greetings" },
      { es: "mucho gusto", en: "nice to meet you", category: "greetings" },
      { es: "adiós", en: "goodbye", alt: ["bye"], category: "greetings" },
    ],
    spell: [{ word: "Monday" }, { word: "yellow" }, { word: "March" }, { word: "fifteen" }],
    numbers: [
      { say: "twenty-two", write: "22" },
      { say: "one hundred fifteen", write: "115" },
      { say: "three hundred forty", write: "340" },
      { say: "seven - eight - nine - two (phone)", write: "7892" },
      { say: "ninety-nine", write: "99" },
      { say: "one thousand", write: "1000" },
    ],
  },

  bossBattle: {
    name: "The Verb-To-Be Monster",
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
      { name: "❤️ Heal", effect: "The monster recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "You HAVE 25 years? Delicious mistake.",
      "She ARE? I grow stronger!",
      "Capital letters for days, humans.",
      "Spell it... if you can.",
      "Numbers scare you, don't they?",
    ],
  },

  punishments: [
    "Count from 20 to 1 backwards in English.",
    "Spell your full name with a big smile.",
    "Say the 12 months of the year in 15 seconds.",
    "Say 5 colors you can see on your screen.",
    "Introduce yourself as a cat: name, age, where you are from.",
    "Say the days of the week... backwards!",
    "Say \"Hello, how are you?\" in 3 different voices.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Describe your coach with 3 words.",
    "Say your phone number in English, fast!",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
