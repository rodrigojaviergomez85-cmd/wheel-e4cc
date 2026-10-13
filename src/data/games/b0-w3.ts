import type { GamePack } from "./types";

// BASIC 0 · WEEK 3 — Extended family, body parts, adjectives, yes/no & Wh- questions with verb to be,
// What time is it?, there is / there are, pets, prepositions of place, possessive 's.
export const B0_W3: GamePack = {
  level: "b0",
  week: 3,
  theme: "Tell me about a family member",
  teams: { suggestedNames: ["Red Lions", "Blue Dolphins", "Green Parrots", "Yellow Bees"] },

  days: [
    { level: "b0", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Family · Adjectives · Questions with to be · Time · There is / are", minutes: 10 },
    { level: "b0", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Questions with to be · There is / are · Prepositions · 's", minutes: 10 },
    { level: "b0", week: 3, day: 3, game: "build_person", title: "Build-a-Person (and a pet!)", grammar: "Describe a family member or a pet: body, adjectives, where he/she/it is", minutes: 10 },
    { level: "b0", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Spell It + Time Blitz", grammar: "Extended family · Body parts · Pets · Prepositions · Time", minutes: 10 },
    { level: "b0", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The There-Is Dragon", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Mi abuela es alta.", en: "My grandmother is tall." },
      { tier: 1, es: "¿Eres doctor?", en: "Are you a doctor?" },
      { tier: 1, es: "Son las tres en punto.", en: "It is three o'clock.", alt: ["It's three o'clock.", "It is 3 o'clock."] },
      { tier: 1, es: "Tengo un perro.", en: "I have a dog." },
      { tier: 2, es: "Hay un gato en la cocina.", en: "There is a cat in the kitchen.", alt: ["There's a cat in the kitchen."] },
      { tier: 2, es: "El perro de María es pequeño.", en: "Maria's dog is small.", alt: ["María's dog is small."] },
      { tier: 2, es: "¿Dónde está tu tío?", en: "Where is your uncle?", alt: ["Where's your uncle?"] },
      { tier: 2, es: "Mis ojos son cafés.", en: "My eyes are brown." },
      { tier: 3, es: "Hay tres libros sobre la mesa.", en: "There are three books on the table." },
      { tier: 3, es: "El carro está enfrente de la casa.", en: "The car is in front of the house." },
      { tier: 3, es: "¿A qué hora es la clase?", en: "What time is the class?" },
      { tier: 3, es: "Mi primo no es gordo, es delgado.", en: "My cousin is not fat, he is thin.", alt: ["My cousin isn't fat, he's thin."] },
    ],
    echo: [
      { en: "My uncle is tall and strong, and his hair is black." },
      { en: "There are two cats under the table." },
      { en: "It is a quarter past seven." },
      { en: "Is your grandfather at home? No, he is at work." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "My grandmother have 70 years.", right: "My grandmother is 70 years old.", hint: "Age uses IS, not HAVE." },
      { wrong: "Is tall my brother?", right: "Is my brother tall?", hint: "Is + person + adjective." },
      { wrong: "There is three dogs in the house.", right: "There are three dogs in the house.", hint: "Plural → THERE ARE." },
      { wrong: "The cat is in the table.", right: "The cat is on the table.", hint: "ON = sobre." },
      { wrong: "The dog of Maria is big.", right: "Maria's dog is big.", hint: "Possessive 'S." },
      { wrong: "What time is? It is seven o'clock.", right: "What time is it? It is seven o'clock.", hint: "What time is IT." },
      { wrong: "Her eyes is green.", right: "Her eyes are green.", hint: "Eyes → ARE." },
      { wrong: "Is nine o'clock.", right: "It is nine o'clock.", hint: "IT is + time." },
      { wrong: "My aunt is very strong, he is a nurse.", right: "My aunt is very strong, she is a nurse.", hint: "Aunt → SHE." },
      { wrong: "Are there a park near your house?", right: "Is there a park near your house?", hint: "Singular → IS THERE." },
      { wrong: "My hairs are black.", right: "My hair is black.", hint: "Hair: no plural." },
      { wrong: "Where your cousin is?", right: "Where is your cousin?", hint: "Where IS + person." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "👵", title: "My Grandmother", facts: ["name", "age", "tall or short", "hair color", "eye color", "her pet", "where she is now (at home / in the kitchen...)"], starters: ["Her name is ...", "She is ... years old.", "She is tall / short.", "Her hair is ...", "Her eyes are ...", "Her pet is a ...", "She is in the ..."], retell: "The other team retells everything about the grandmother in 30 seconds." },
      { emoji: "🐶", title: "My Pet", facts: ["name", "what animal", "color", "big or small", "fast or slow", "where it is now (under / on / next to ...)", "whose pet it is ('It is Ana's dog')"], starters: ["Its name is ...", "It is a ...", "It is ... (color)", "It is big / small.", "It is fast / slow.", "It is under / on / next to the ...", "It is ...'s dog."], retell: "The other team retells everything about the pet in 30 seconds." },
      { emoji: "👨‍👩‍👧", title: "My Family's House", facts: ["how many people (there are ...)", "who they are", "how many bedrooms", "a pet (there is a ...)", "where the TV is", "where the kitchen is", "what time dinner is"], starters: ["There are ... people in my house.", "There is my ..., my ... and my ...", "There are ... bedrooms.", "There is a ... (pet).", "The TV is in the ...", "The kitchen is next to the ...", "Dinner is at ... o'clock."], retell: "The other team retells the house in 30 seconds using THERE IS / THERE ARE." },
      { emoji: "🧑‍🦱", title: "My Cousin", facts: ["name", "age", "strong or thin", "hair", "eyes", "his or her pet", "what time his or her class is"], starters: ["His/Her name is ...", "He/She is ... years old.", "He/She is strong / thin.", "His/Her hair is ...", "His/Her eyes are ...", "His/Her pet is a ...", "His/Her class is at ..."], retell: "The other team retells everything about the cousin in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "abuelo", en: "grandfather", alt: ["grandpa"], category: "family" },
      { es: "tía", en: "aunt", category: "family" },
      { es: "sobrino", en: "nephew", category: "family" },
      { es: "primo", en: "cousin", category: "family" },
      { es: "cabeza", en: "head", category: "body" },
      { es: "ojos", en: "eyes", category: "body" },
      { es: "hombro", en: "shoulder", category: "body" },
      { es: "estómago", en: "stomach", category: "body" },
      { es: "fuerte", en: "strong", category: "adjectives" },
      { es: "delgado", en: "thin", category: "adjectives" },
      { es: "tortuga", en: "turtle", category: "pets" },
      { es: "loro", en: "parrot", category: "pets" },
      { es: "conejo", en: "rabbit", category: "pets" },
      { es: "debajo de", en: "under", category: "prepositions" },
      { es: "al lado de", en: "next to", category: "prepositions" },
      { es: "detrás de", en: "behind", category: "prepositions" },
    ],
    spell: [{ word: "nephew" }, { word: "stomach" }, { word: "shoulder" }, { word: "turtle" }],
    numbers: [
      { say: "half past two", write: "2:30" },
      { say: "a quarter past six", write: "6:15" },
      { say: "ten o'clock", write: "10:00" },
      { say: "a quarter to nine", write: "8:45" },
      { say: "half past eleven", write: "11:30" },
      { say: "a quarter to four", write: "3:45" },
    ],
  },

  bossBattle: {
    name: "The There-Is Dragon",
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
      { name: "❤️ Heal", effect: "The dragon recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "THERE IS three dogs? I eat grammar like that.",
      "The dog OF Maria... so weak.",
      "What time is? What time is IT, humans!",
      "The cat is IN the table? Inside the wood?",
      "My hairs... my eyes is... delicious.",
    ],
  },

  punishments: [
    "Say 8 parts of the body in 10 seconds.",
    "Describe a classmate: hair, eyes, tall or short.",
    "Say what time it is right now, then say what time your English class is.",
    "Spell the word SHOULDER letter by letter.",
    "Say 5 things in your room with THERE IS / THERE ARE.",
    "Name 6 family members in English: aunt, uncle, cousin...",
    "Put your hand under, on and behind your head while saying the preposition.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Describe your pet (or an imaginary pet) in 3 sentences.",
    "Ask your coach 3 questions with IS or ARE.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
