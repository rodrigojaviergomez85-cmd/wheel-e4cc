import type { GamePack } from "./types";

// BASIC 0 · WEEK 2 — Professions, fruits, food, singular/plural, a vs. an, ordinal numbers & birthdays, verb to be,
// possessive adjectives (my/his/her/our/their), demonstratives (this/that/these/those), family members.
export const B0_W2: GamePack = {
  level: "b0",
  week: 2,
  theme: "This is my family",
  teams: { suggestedNames: ["Red Lions", "Blue Dolphins", "Green Parrots", "Yellow Bees"] },

  days: [
    { level: "b0", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Professions · A / An · Favorite food", minutes: 10 },
    { level: "b0", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "A / An · Plurals · This / These · Dates", minutes: 10 },
    { level: "b0", week: 2, day: 3, game: "build_person", title: "Build-a-Person", grammar: "Tell me about a family member (profession, favorites, birthday)", minutes: 10 },
    { level: "b0", week: 2, day: 4, game: "word_sprint", title: "Word Sprint + Spell It + Number Blitz", grammar: "Professions · Fruits · Food · Family · Ordinal numbers", minutes: 10 },
    { level: "b0", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Plural Beast", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Él es doctor.", en: "He is a doctor.", alt: ["He's a doctor."] },
      { tier: 1, es: "Mi fruta favorita es la sandía.", en: "My favorite fruit is watermelon." },
      { tier: 1, es: "Ella es ingeniera.", en: "She is an engineer.", alt: ["She's an engineer."] },
      { tier: 1, es: "Mi cumpleaños es el 5 de marzo.", en: "My birthday is on March 5th.", alt: ["My birthday is on March fifth.", "My birthday is on the fifth of March."] },
      { tier: 2, es: "Esta es mi hermana.", en: "This is my sister." },
      { tier: 2, es: "Mi comida favorita es el pollo.", en: "My favorite food is chicken." },
      { tier: 2, es: "Ellos son estudiantes.", en: "They are students.", alt: ["They're students."] },
      { tier: 2, es: "Su papá es abogado.", en: "Her dad is a lawyer.", alt: ["His dad is a lawyer.", "Their dad is a lawyer.", "Her father is a lawyer.", "His father is a lawyer.", "Their father is a lawyer."] },
      { tier: 3, es: "Esas mujeres son mis hermanas.", en: "Those women are my sisters." },
      { tier: 3, es: "Una manzana y un huevo, por favor.", en: "An apple and an egg, please." },
      { tier: 3, es: "Nuestra mamá es maestra y nuestro papá es contador.", en: "Our mom is a teacher and our dad is an accountant.", alt: ["Our mother is a teacher and our father is an accountant."] },
      { tier: 3, es: "¿Cuándo es tu cumpleaños?", en: "When is your birthday?", alt: ["When's your birthday?"] },
    ],
    echo: [
      { en: "This is my brother and these are my parents." },
      { en: "My favorite food is steak with salad." },
      { en: "She is a nurse and he is an engineer." },
      { en: "My birthday is on the first of June." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "My dad is doctor.", right: "My dad is a doctor.", hint: "A + profession." },
      { wrong: "My sister is a engineer.", right: "My sister is an engineer.", hint: "AN before a vowel sound." },
      { wrong: "These are my childs.", right: "These are my children.", hint: "Child → children." },
      { wrong: "This are my parents.", right: "These are my parents.", hint: "Plural → THESE." },
      { wrong: "Her birthday is in June 2nd.", right: "Her birthday is on June 2nd.", hint: "ON + a date." },
      { wrong: "Her name is Carlos and he is my brother.", right: "His name is Carlos and he is my brother.", hint: "HIS for a man." },
      { wrong: "My favorite fruit are grapes.", right: "My favorite fruit is grapes.", hint: "My favorite fruit → IS." },
      { wrong: "Three womans are in the office.", right: "Three women are in the office.", hint: "Woman → women." },
      { wrong: "That are my sisters.", right: "Those are my sisters.", hint: "Plural → THOSE." },
      { wrong: "My mother she is a teacher.", right: "My mother is a teacher.", hint: "One subject, not two." },
      { wrong: "He is a accountant.", right: "He is an accountant.", hint: "AN before a vowel sound." },
      { wrong: "Today is the three of May.", right: "Today is the third of May.", hint: "Dates use ordinal numbers." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "👩‍🏫", title: "The Teacher (my sister)", facts: ["name", "profession", "favorite fruit", "favorite food", "birthday (with ordinal)", "one family member: 'This is her ...'"], starters: ["Her name is ...", "She is a ...", "Her favorite fruit is ...", "Her favorite food is ...", "Her birthday is on ...", "This is her ..."], retell: "The other team retells everything about the teacher in 30 seconds." },
      { emoji: "👨‍🌾", title: "The Farmer (my father)", facts: ["name", "profession", "favorite fruit", "favorite food", "birthday (with ordinal)", "his children: 'These are his ...'"], starters: ["His name is ...", "He is a ...", "His favorite fruit is ...", "His favorite food is ...", "His birthday is on ...", "These are his ..."], retell: "The other team retells everything about the farmer in 30 seconds." },
      { emoji: "👩‍🍳", title: "The Cook (my mom)", facts: ["name", "profession", "favorite food", "favorite fruit", "birthday (with ordinal)", "her husband: 'This is her husband, he is a ...'"], starters: ["Her name is ...", "She is a ...", "Her favorite food is ...", "Her favorite fruit is ...", "Her birthday is on ...", "This is her husband, he is a ..."], retell: "The other team retells everything about the cook in 30 seconds." },
      { emoji: "🧑‍💼", title: "The Salesman (my brother)", facts: ["name", "profession", "favorite food", "favorite fruit", "birthday (with ordinal)", "his parents: 'Those are his parents, they are ...'"], starters: ["His name is ...", "He is a ...", "His favorite food is ...", "His favorite fruit is ...", "His birthday is on ...", "Those are his parents, they are ..."], retell: "The other team retells everything about the salesman in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "médico", en: "doctor", category: "professions" },
      { es: "abogado", en: "lawyer", category: "professions" },
      { es: "maestro", en: "teacher", category: "professions" },
      { es: "ingeniero", en: "engineer", category: "professions" },
      { es: "fresa", en: "strawberry", category: "fruits" },
      { es: "uvas", en: "grapes", category: "fruits" },
      { es: "piña", en: "pineapple", category: "fruits" },
      { es: "camarones", en: "shrimp", alt: ["shrimps"], category: "food" },
      { es: "pescado", en: "fish", category: "food" },
      { es: "ensalada", en: "salad", category: "food" },
      { es: "hijo", en: "son", category: "family" },
      { es: "hija", en: "daughter", category: "family" },
      { es: "esposo", en: "husband", category: "family" },
      { es: "padres", en: "parents", category: "family" },
      { es: "primero", en: "first", alt: ["1st"], category: "ordinals" },
      { es: "tercero", en: "third", alt: ["3rd"], category: "ordinals" },
    ],
    spell: [{ word: "engineer" }, { word: "pineapple" }, { word: "daughter" }, { word: "lawyer" }],
    numbers: [
      { say: "the twelfth", write: "12th" },
      { say: "the twenty-first", write: "21st" },
      { say: "March third", write: "March 3rd" },
      { say: "the thirtieth", write: "30th" },
      { say: "the second of May", write: "May 2nd" },
      { say: "the fifteenth", write: "15th" },
    ],
  },

  bossBattle: {
    name: "The Plural Beast",
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
      { name: "❤️ Heal", effect: "The beast recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Two childs? Two WOMANS? I love it!",
      "A engineer... A apple... Keep feeding me.",
      "THIS are? THESE are! Pathetic.",
      "Your birthday is IN March 5th? Wrong again.",
      "Is it HE or SHE? You don't know!",
    ],
  },

  punishments: [
    "Say 5 professions in 10 seconds.",
    "Say 5 fruits and 5 foods you like.",
    "Spell the word PINEAPPLE letter by letter.",
    "Say your birthday with the ordinal number, like a radio host.",
    "Introduce 3 members of your family: 'This is my ... He/She is a ...'",
    "Say the plural of: man, woman, child, apple, strawberry.",
    "Say 'an apple, an egg, an orange' 3 times fast.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Describe your coach's profession and favorite food (guess!).",
    "Say the ordinal numbers from 1st to 10th.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
