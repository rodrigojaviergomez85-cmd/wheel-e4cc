import type { GamePack } from "./types";

// BASIC 0 · WEEK 4 — Vegetables, want / need (+ to), How many, places in the city, giving directions,
// emotions, love / like / hate, object pronouns (me, him, her, them, us).
export const B0_W4: GamePack = {
  level: "b0",
  week: 4,
  theme: "I want, I need, I like",
  teams: { suggestedNames: ["Red Lions", "Blue Dolphins", "Green Parrots", "Yellow Bees"] },

  days: [
    { level: "b0", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Want / Need · Like / Love / Hate · Emotions · Places", minutes: 10 },
    { level: "b0", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Want TO / Need TO · Object pronouns · Directions", minutes: 10 },
    { level: "b0", week: 4, day: 3, game: "build_person", title: "Build-a-Person", grammar: "Emotions · Wants and needs · Likes and hates · Where he/she is", minutes: 10 },
    { level: "b0", week: 4, day: 4, game: "word_sprint", title: "Word Sprint + Spell It + Number Blitz", grammar: "Vegetables · Places · Emotions · Directions", minutes: 10, note: "After the evaluation" },
    { level: "b0", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Want-To Monster", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Quiero una ensalada.", en: "I want a salad." },
      { tier: 1, es: "Necesito ir al banco.", en: "I need to go to the bank." },
      { tier: 1, es: "Estoy cansado.", en: "I am tired.", alt: ["I'm tired."] },
      { tier: 1, es: "Me gusta el brócoli.", en: "I like broccoli." },
      { tier: 2, es: "¿Cuántas zanahorias hay?", en: "How many carrots are there?" },
      { tier: 2, es: "Odio las cebollas.", en: "I hate onions." },
      { tier: 2, es: "El hospital está al lado del parque.", en: "The hospital is next to the park." },
      { tier: 2, es: "Ella está feliz hoy.", en: "She is happy today.", alt: ["She's happy today."] },
      { tier: 3, es: "Gira a la izquierda y sigue derecho.", en: "Turn left and go straight.", alt: ["Turn left and go straight ahead."] },
      { tier: 3, es: "Quiero comer pizza con ellos.", en: "I want to eat pizza with them." },
      { tier: 3, es: "¿Dónde está la farmacia? Está enfrente del banco.", en: "Where is the pharmacy? It is in front of the bank.", alt: ["Where's the pharmacy? It's in front of the bank."] },
      { tier: 3, es: "Necesitamos dos tomates y una cebolla.", en: "We need two tomatoes and an onion." },
    ],
    echo: [
      { en: "I want a coffee and I need a sandwich." },
      { en: "Turn right at the supermarket and the bank is on the left." },
      { en: "She is nervous because the test is today." },
      { en: "I love my family and I like my job." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I want eat pizza.", right: "I want to eat pizza.", hint: "Want TO + verb." },
      { wrong: "I need go to the pharmacy.", right: "I need to go to the pharmacy.", hint: "Need TO + verb." },
      { wrong: "How many tomato are there?", right: "How many tomatoes are there?", hint: "How many + plural." },
      { wrong: "I am boring in class.", right: "I am bored in class.", hint: "BORED = how you feel." },
      { wrong: "She is sad because she have a problem.", right: "She is sad because she has a problem.", hint: "She → HAS." },
      { wrong: "I like he.", right: "I like him.", hint: "Object pronoun: HIM." },
      { wrong: "Turn right in the pharmacy.", right: "Turn right at the pharmacy.", hint: "Turn right AT + place." },
      { wrong: "The bank is in front the park.", right: "The bank is in front of the park.", hint: "In front OF." },
      { wrong: "I love they.", right: "I love them.", hint: "Object pronoun: THEM." },
      { wrong: "Give the book to I.", right: "Give the book to me.", hint: "Object pronoun: ME." },
      { wrong: "I am hungry, I want to drink a sandwich.", right: "I am hungry, I want to eat a sandwich.", hint: "Sandwich → EAT." },
      { wrong: "They is tired and hungry.", right: "They are tired and hungry.", hint: "They → ARE." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "😋", title: "Hungry Pedro", facts: ["how he feels", "what he wants to eat", "what he needs", "what he likes", "what he hates", "where he is (a place in the city)", "who is with him"], starters: ["Pedro is ... (hungry / tired / happy).", "He wants to eat ...", "He needs ...", "He likes ...", "He hates ...", "He is at the ...", "He is with ... (her / them / us)."], retell: "The other team retells everything about Pedro in 30 seconds." },
      { emoji: "😰", title: "Nervous Carla", facts: ["how she feels and why", "what she needs to do", "what she wants", "what she loves", "what she hates", "where she is", "where she needs to go"], starters: ["Carla is nervous because ...", "She needs to ...", "She wants ...", "She loves ...", "She hates ...", "She is at the ...", "She needs to go to the ..."], retell: "The other team retells everything about Carla in 30 seconds." },
      { emoji: "🧭", title: "Lost Tourist", facts: ["how he feels", "where he is", "where he wants to go", "directions: turn left / right / go straight", "what is next to the place", "what he needs", "what he likes about the city"], starters: ["The tourist is ... (lost / tired).", "He is at the ...", "He wants to go to the ...", "Turn ... and go ...", "The ... is next to the ...", "He needs a ...", "He likes the ..."], retell: "The other team gives the directions again in 30 seconds." },
      { emoji: "🥦", title: "The Vegetable Seller", facts: ["how she feels today", "what vegetables she has (how many)", "what she wants to sell", "what she needs", "what customers like", "what she hates", "where her store is"], starters: ["She is ... today.", "She has ... carrots and ... onions.", "She wants to sell ...", "She needs ...", "Customers like ...", "She hates ...", "Her store is next to the ..."], retell: "The other team retells everything about the seller in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "zanahoria", en: "carrot", category: "vegetables" },
      { es: "cebolla", en: "onion", category: "vegetables" },
      { es: "lechuga", en: "lettuce", category: "vegetables" },
      { es: "papa", en: "potato", category: "vegetables" },
      { es: "banco", en: "bank", category: "places" },
      { es: "farmacia", en: "pharmacy", alt: ["drugstore"], category: "places" },
      { es: "iglesia", en: "church", category: "places" },
      { es: "parada de bus", en: "bus stop", category: "places" },
      { es: "feliz", en: "happy", category: "emotions" },
      { es: "triste", en: "sad", category: "emotions" },
      { es: "enojado", en: "angry", alt: ["mad"], category: "emotions" },
      { es: "cansado", en: "tired", category: "emotions" },
      { es: "a la derecha", en: "right", alt: ["to the right", "on the right"], category: "directions" },
      { es: "a la izquierda", en: "left", alt: ["to the left", "on the left"], category: "directions" },
      { es: "todo recto", en: "straight", alt: ["straight ahead", "go straight"], category: "directions" },
      { es: "con ella", en: "with her", category: "object pronouns" },
    ],
    spell: [{ word: "pharmacy" }, { word: "lettuce" }, { word: "church" }, { word: "angry" }],
    numbers: [
      { say: "forty-five carrots", write: "45" },
      { say: "twelve onions", write: "12" },
      { say: "three hundred people", write: "300" },
      { say: "seventeen", write: "17" },
      { say: "sixty-six", write: "66" },
      { say: "two hundred fifty", write: "250" },
    ],
  },

  bossBattle: {
    name: "The Want-To Monster",
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
      "I want EAT pizza? Where is the TO, humans?",
      "I like HE... I like SHE... delicious errors.",
      "Turn right IN the pharmacy? Inside the pharmacy? Ha!",
      "You are BORING? Yes, you are. Ha!",
      "In front THE park? In front OF, weaklings.",
    ],
  },

  punishments: [
    "Say 5 vegetables in 10 seconds.",
    "Give directions from your house to the nearest supermarket in English.",
    "Say 3 things you want and 3 things you need right now.",
    "Spell the word PHARMACY letter by letter.",
    "Show 5 emotions with your face and say them in English.",
    "Say 'I love pizza!' in 3 different voices.",
    "Say 5 things you hate, fast!",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 6 places in the city in 10 seconds.",
    "Say 3 sentences with HIM, HER and THEM: 'I like him', 'I love her', 'I need them' (about real people!).",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
