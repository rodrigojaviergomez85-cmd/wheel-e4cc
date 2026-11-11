import type { GamePack } from "./types";

// EAGLES · WEEK 3 — Day 1 used to (life before vs. now), Day 2 short comparatives (-er than), Day 3 long comparatives (more ... than),
// Day 4 superlatives + sales role-play, Day 5 simple present + grammar test / book quiz.
export const EAGLES_W3: GamePack = {
  level: "eagles",
  week: 3,
  theme: "Better, worse, the best",
  teams: { suggestedNames: ["Red Eagles", "Blue Falcons", "Green Hawks", "Golden Condors"] },

  days: [
    { level: "eagles", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "USED TO · Life before vs. now", minutes: 10 },
    { level: "eagles", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Short comparatives: bigger than, better than, as ... as", minutes: 10 },
    { level: "eagles", week: 3, day: 3, game: "story_heist", title: "Story Heist — Compare & Rank", grammar: "Long comparatives: more / less ... than", minutes: 10 },
    { level: "eagles", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Adjective → comparative → superlative · Sales pitch", minutes: 10 },
    { level: "eagles", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The Biggest Baddest Giant", grammar: "Everything from the week", minutes: 10, note: "After the book quiz" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Antes jugaba fútbol todos los días.", en: "I used to play soccer every day.", alt: ["I used to play football every day."] },
      { tier: 1, es: "Ella antes odiaba el brócoli, pero ahora le encanta.", en: "She used to hate broccoli, but now she loves it." },
      { tier: 1, es: "No solíamos tener internet en casa.", en: "We didn't use to have internet at home.", alt: ["We did not use to have internet at home.", "We never used to have internet at home."] },
      { tier: 1, es: "¿Qué solías hacer después de la escuela?", en: "What did you use to do after school?" },
      { tier: 2, es: "Mi papá antes fumaba, pero lo dejó hace cinco años.", en: "My dad used to smoke, but he quit five years ago.", alt: ["My father used to smoke, but he quit five years ago.", "My dad used to smoke but he stopped five years ago."] },
      { tier: 2, es: "Antes vivíamos en el campo; ahora vivimos en la ciudad.", en: "We used to live in the countryside; now we live in the city.", alt: ["We used to live in the country, now we live in the city."] },
      { tier: 2, es: "¿Solías pelear con tus hermanos cuando eras niño?", en: "Did you use to fight with your siblings when you were a kid?", alt: ["Did you use to fight with your brothers and sisters when you were a child?", "Did you use to fight with your siblings when you were a child?"] },
      { tier: 2, es: "La gente antes escribía cartas; ahora manda mensajes de voz.", en: "People used to write letters; now they send voice messages.", alt: ["People used to write letters, now they send voice notes."] },
      { tier: 3, es: "Antes no me gustaba levantarme temprano, pero ahora disfruto las mañanas tranquilas.", en: "I didn't use to like waking up early, but now I enjoy quiet mornings.", alt: ["I didn't use to like getting up early, but now I enjoy the quiet mornings.", "I did not use to like waking up early, but now I enjoy quiet mornings."] },
      { tier: 3, es: "Mi abuela solía contarnos historias de miedo antes de dormir.", en: "My grandmother used to tell us scary stories before bed.", alt: ["My grandma used to tell us scary stories before going to bed.", "My grandmother used to tell us scary stories before bedtime."] },
      { tier: 3, es: "Hace veinte años la gente no solía depender del teléfono.", en: "Twenty years ago people didn't use to depend on their phones.", alt: ["Twenty years ago people did not use to depend on the phone.", "20 years ago people didn't use to depend on their phones."] },
      { tier: 3, es: "Antes trabajaba de noche y dormía de día; ya no lo hago.", en: "I used to work at night and sleep during the day; I don't do that anymore.", alt: ["I used to work nights and sleep during the day; I don't anymore.", "I used to work at night and sleep in the daytime, I don't do that anymore.", "I used to work at night and sleep during the day; not anymore."] },
    ],
    echo: [
      { en: "I used to be shy, but now I talk to customers all day." },
      { en: "We used to play outside until it got dark; kids today play on their phones." },
      { en: "My coach used to be a student at E4CC, and look at him now." },
      { en: "Life used to be slow, cheap and really boring." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Mr. Bean is more funny than Bad Bunny.", right: "Mr. Bean is funnier than Bad Bunny.", hint: "Short adjective → -ER." },
      { wrong: "This phone is gooder than mine.", right: "This phone is better than mine.", hint: "Good → BETTER." },
      { wrong: "My brother is taller that me.", right: "My brother is taller than me.", hint: "Comparative + THAN." },
      { wrong: "Beer is more cheap than wine.", right: "Beer is cheaper than wine.", hint: "Short adjective → -ER." },
      { wrong: "Today is more hot than yesterday.", right: "Today is hotter than yesterday.", hint: "Hot → hoTTer." },
      { wrong: "She is more older than her husband.", right: "She is older than her husband.", hint: "One comparative marker only." },
      { wrong: "This test was more bad than the last one.", right: "This test was worse than the last one.", hint: "Bad → WORSE." },
      { wrong: "A bicycle is slow than a car.", right: "A bicycle is slower than a car.", hint: "Comparative: slowER than." },
      { wrong: "My city is bigger as yours.", right: "My city is bigger than yours.", hint: "Bigger THAN." },
      { wrong: "He is as tall than his dad.", right: "He is as tall as his dad.", hint: "As ... AS." },
      { wrong: "Cats are easyer to take care of than dogs.", right: "Cats are easier to take care of than dogs.", hint: "Consonant + y → -IER." },
      { wrong: "The beach is more far than the mountains.", right: "The beach is farther than the mountains.", hint: "Far → FARTHER (or further)." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Compare & Rank: cars vs. bicycles. Each speaker gives ONE comparison with a long adjective. (Round 1: Cars are more expensive than..., bicycles are better for the environment than...)", retellAs: "Round 2: the other team defends the other side (But bicycles are less comfortable than..., cars are more dangerous than...). Round 3: both teams agree on 3 final comparisons with a reason (Cars are more practical than bicycles because..., bicycles are better for...)." },
      { prompt: "Compare & Rank: Mr. Bean vs. your coach. Each speaker gives ONE comparison. (Round 1: Mr. Bean is funnier than..., the coach is more intelligent than...)", retellAs: "Round 2: the other team asks 5 questions (Who is more patient? Who is funnier? Who is more intelligent?). Round 3: the other team decides who wins each comparison and gives a reason (The coach is more patient than Mr. Bean because...)." },
      { prompt: "Compare & Rank: life 20 years ago vs. now. Each speaker gives ONE comparison. (Round 1: Life used to be slower than now..., phones are more expensive than before..., people were less stressed...)", retellAs: "Round 2: the other team gives the opposite view (But now life is more comfortable than..., we are more connected than...). Round 3: both teams say 3 things that are better now and 3 things that were better before (Now ... is better because..., Before ... was less stressful...)." },
      { prompt: "Compare & Rank: Sales pitch: your team sells a very old car, the other team sells a very old bicycle. Compare your product with theirs. (Round 1: Our car is more comfortable than..., less noisy than...)", retellAs: "Round 2: the other team sells the bicycle (Our bicycle is cheaper than..., healthier than...). Round 3: the coach plays the customer and asks 5 comparison questions (Which one is safer? Which is more expensive? Which is more comfortable?) — the teams answer with comparatives." },
    ],
  },

  wordSprint: {
    words: [
      { es: "más grande", en: "bigger", alt: ["larger"], category: "comparatives" },
      { es: "mejor", en: "better", category: "comparatives" },
      { es: "peor", en: "worse", category: "comparatives" },
      { es: "más caro", en: "more expensive", category: "comparatives" },
      { es: "más fácil", en: "easier", category: "comparatives" },
      { es: "más lejos", en: "farther", alt: ["further"], category: "comparatives" },
      { es: "más cómodo", en: "more comfortable", category: "comparatives" },
      { es: "más barato", en: "cheaper", category: "comparatives" },
      { es: "el mejor", en: "the best", category: "superlatives" },
      { es: "el peor", en: "the worst", category: "superlatives" },
      { es: "el más grande", en: "the biggest", category: "superlatives" },
      { es: "el más interesante", en: "the most interesting", category: "superlatives" },
      { es: "el más feliz", en: "the happiest", category: "superlatives" },
      { es: "el más importante", en: "the most important", category: "superlatives" },
      { es: "tan ... como", en: "as ... as", alt: ["as as"], category: "comparatives" },
      { es: "menos caro", en: "less expensive", category: "comparatives" },
    ],
    flips: [
      { affirmative: "Cars are more expensive than bicycles. (Which?)", negative: "Cars are not more expensive than bicycles.", question: "Which are more expensive, cars or bicycles?" },
      { affirmative: "Mr. Bean is funnier than my coach. (Who?)", negative: "Mr. Bean is not funnier than my coach.", question: "Who is funnier, Mr. Bean or your coach?" },
      { affirmative: "This phone is the best one in the store. (Which?)", negative: "This phone is not the best one in the store.", question: "Which is the best phone in the store?" },
      { affirmative: "Beer is as popular as wine in El Salvador.", negative: "Beer is not as popular as wine in El Salvador.", question: "Is beer as popular as wine in El Salvador?" },
    ],
    numbers: [
      { say: "this car costs twelve thousand five hundred dollars", write: "$12,500" },
      { say: "the bicycle costs three hundred dollars", write: "$300" },
      { say: "twenty years ago, in two thousand six", write: "2006" },
      { say: "the biggest discount is thirty percent", write: "30%" },
      { say: "the fastest car goes two hundred twenty kilometers per hour", write: "220" },
      { say: "the best price is ninety-nine dollars and ninety-nine cents", write: "$99.99" },
    ],
  },

  bossBattle: {
    name: "The Biggest Baddest Giant",
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
      { name: "❤️ Heal", effect: "The Giant recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "MORE FUNNY? I am FUNNIER than your grammar!",
      "GOODER? There is no gooder. Only BETTER... me.",
      "I am the biggest, the strongest and the most handsome. You? The weakest.",
      "Taller THAT me? THAN! THAN! Feed me your mistakes.",
      "You used to be good students. Used to.",
    ],
  },

  punishments: [
    "Say 4 things you used to do as a kid that you don't do now.",
    "Compare yourself with your coach in 4 sentences (taller, funnier, more patient...).",
    "Sell the object closest to you using 3 superlatives.",
    "Compare cats and dogs: 3 comparisons with long adjectives.",
    "Say the comparative and superlative of: good, bad, far, happy, expensive.",
    "Say 'I am the best!' like a boxer, a grandma and a robot.",
    "Compare life 20 years ago and now in 3 sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say who is the best celebrity and why, with 2 superlatives.",
    "Say 3 sentences with 'as ... as' about your classmates.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
