import type { GamePack } from "./types";

// TIGERS · WEEK 3 — Day 1 used to (childhood, technology 30 years ago), Day 2 short comparatives (-er than / as ... as),
// Day 3 long comparatives (more / less ... than), Day 4 superlatives + sales role-play, Day 5 simple present + grammar test / book quiz.
export const TIGERS_W3: GamePack = {
  level: "tigers",
  week: 3,
  theme: "Before and now, bigger and best",
  teams: { suggestedNames: ["Orange Tigers", "White Tigers", "Night Panthers", "Golden Jaguars"] },

  days: [
    { level: "tigers", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "USED TO · When I was a kid · Technology before", minutes: 10 },
    { level: "tigers", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Short comparatives: older than, better than, as ... as", minutes: 10 },
    { level: "tigers", week: 3, day: 3, game: "story_heist", title: "Story Heist — Compare & Rank", grammar: "Long comparatives: more / less ... than", minutes: 10 },
    { level: "tigers", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Adjective → comparative → superlative · Sales pitch", minutes: 10 },
    { level: "tigers", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The Show-Off Troll", grammar: "Everything from the week", minutes: 10, note: "After the book quiz" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Cuando era niño, solía subirme a los árboles.", en: "When I was a kid, I used to climb trees.", alt: ["When I was a child, I used to climb trees.", "I used to climb trees when I was a kid."] },
      { tier: 1, es: "Mi mamá antes trabajaba en un banco.", en: "My mom used to work at a bank.", alt: ["My mother used to work at a bank.", "My mom used to work in a bank."] },
      { tier: 1, es: "Antes no me gustaba el café.", en: "I didn't use to like coffee.", alt: ["I did not use to like coffee.", "I never used to like coffee."] },
      { tier: 1, es: "¿Dónde solías vivir?", en: "Where did you use to live?" },
      { tier: 2, es: "Antes veíamos caricaturas todos los sábados por la mañana.", en: "We used to watch cartoons every Saturday morning." },
      { tier: 2, es: "Él solía llegar tarde, pero ahora llega temprano.", en: "He used to arrive late, but now he arrives early.", alt: ["He used to be late, but now he is early.", "He used to come late, but now he comes early."] },
      { tier: 2, es: "¿Tu abuelo solía contarte chistes?", en: "Did your grandfather use to tell you jokes?", alt: ["Did your grandpa use to tell you jokes?"] },
      { tier: 2, es: "Los teléfonos antes tenían botones; ahora solo tienen una pantalla.", en: "Phones used to have buttons; now they only have a screen.", alt: ["Phones used to have buttons, now they just have a screen."] },
      { tier: 3, es: "Antes alquilábamos películas en una tienda; ahora las vemos por internet.", en: "We used to rent movies at a store; now we watch them online.", alt: ["We used to rent movies from a store; now we watch them online.", "We used to rent movies at a store, now we watch them on the internet."] },
      { tier: 3, es: "Yo solía tenerle miedo a hablar en inglés, pero ya no.", en: "I used to be afraid of speaking English, but not anymore.", alt: ["I used to be scared of speaking English, but not anymore.", "I used to be afraid to speak English, but I'm not anymore."] },
      { tier: 3, es: "Hace treinta años la gente no solía tomarle fotos a su comida.", en: "Thirty years ago people didn't use to take pictures of their food.", alt: ["Thirty years ago people didn't use to take photos of their food.", "30 years ago people did not use to take pictures of their food."] },
      { tier: 3, es: "Mi hermana y yo solíamos compartir cuarto y solíamos pelear por todo.", en: "My sister and I used to share a room and we used to fight about everything.", alt: ["My sister and I used to share a room and fight about everything.", "My sister and I used to share a room and we used to fight over everything."] },
    ],
    echo: [
      { en: "I used to hate vegetables, but now I eat salad almost every day." },
      { en: "My grandparents used to listen to the radio every night after dinner." },
      { en: "We didn't use to have cell phones, so we used to knock on doors." },
      { en: "She used to be my neighbor, and now she is my boss." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Daddy Yankee is more old than Bad Bunny.", right: "Daddy Yankee is older than Bad Bunny.", hint: "Short adjective: no MORE." },
      { wrong: "My handwriting is badder than my doctor's.", right: "My handwriting is worse than my doctor's.", hint: "Bad is irregular." },
      { wrong: "The mountains are colder that the beach.", right: "The mountains are colder than the beach.", hint: "Check the small word after the comparative." },
      { wrong: "Pupusas are more better than pizza.", right: "Pupusas are better than pizza.", hint: "One comparative marker is enough." },
      { wrong: "August is weter than March.", right: "August is wetter than March.", hint: "Spelling: short vowel + one consonant." },
      { wrong: "A train is fast than a bus.", right: "A train is faster than a bus.", hint: "You are comparing two things. The adjective needs an ending." },
      { wrong: "My dog is more small than my cat.", right: "My dog is smaller than my cat.", hint: "Small is a short adjective." },
      { wrong: "She is so tall as her mother.", right: "She is as tall as her mother.", hint: "Equal comparison: ___ tall as." },
      { wrong: "Is your house more big than mine?", right: "Is your house bigger than mine?", hint: "Big is a short adjective." },
      { wrong: "This exercise is more easy than the last one.", right: "This exercise is easier than the last one.", hint: "Two syllables ending in Y work like short adjectives." },
      { wrong: "My English is more good than last year.", right: "My English is better than last year.", hint: "Good is irregular." },
      { wrong: "My brother is not as tall than me.", right: "My brother is not as tall as me.", hint: "Equal comparison: as ... ___." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Compare & Rank: beaches vs. mountains for a vacation. Each speaker gives ONE comparison with a long adjective. (Round 1: Beaches are more relaxing than..., mountains are more peaceful than...)", retellAs: "Round 2: the other team defends the other side (But the beach is more crowded than..., the mountains are less expensive than...). Round 3: both teams agree on 3 final comparisons with a reason (The beach is more exciting than the mountains because...)." },
      { prompt: "Compare & Rank: Bad Bunny vs. Daddy Yankee. Each speaker gives ONE comparison. (Round 1: Bad Bunny is more popular than..., Daddy Yankee is more famous than..., older than...)", retellAs: "Round 2: the other team asks 5 questions (Who is more creative? Who is richer? Who is more elegant?). Round 3: the other team chooses a winner for each question and gives a reason (Daddy Yankee is more ... than Bad Bunny because...)." },
      { prompt: "Compare & Rank: working from home vs. working in an office. Each speaker gives ONE comparison. (Round 1: Working from home is more comfortable than..., the office is more boring than...)", retellAs: "Round 2: the other team gives the opposite opinion (But the office is more organized than..., home is noisier than...). Round 3: both teams say what they used to think and what they think now (I used to think ..., but now I think ... is more ... than ...)." },
      { prompt: "Compare & Rank: a smartphone today vs. a phone from 30 years ago. Each speaker gives ONE comparison. (Round 1: Smartphones are more useful than..., old phones were less expensive than...)", retellAs: "Round 2: the other team sells the OLD phone (It is cheaper than..., simpler than..., less distracting than...). Round 3: the coach plays the customer and asks 5 questions (Which one is lighter? Which one is more expensive?) — the teams answer with comparatives." },
    ],
  },

  wordSprint: {
    words: [
      { es: "más alto (persona)", en: "taller", category: "comparatives" },
      { es: "más rápido", en: "faster", alt: ["quicker"], category: "comparatives" },
      { es: "más feliz", en: "happier", category: "comparatives" },
      { es: "más caliente", en: "hotter", category: "comparatives" },
      { es: "más peligroso", en: "more dangerous", category: "comparatives" },
      { es: "más hermoso", en: "more beautiful", alt: ["prettier"], category: "comparatives" },
      { es: "más ocupado", en: "busier", category: "comparatives" },
      { es: "menos difícil", en: "less difficult", category: "comparatives" },
      { es: "el más barato", en: "the cheapest", alt: ["the least expensive"], category: "superlatives" },
      { es: "el más rápido", en: "the fastest", alt: ["the quickest"], category: "superlatives" },
      { es: "el más famoso", en: "the most famous", category: "superlatives" },
      { es: "el más difícil", en: "the most difficult", alt: ["the hardest"], category: "superlatives" },
      { es: "el mejor", en: "the best", category: "superlatives" },
      { es: "el peor", en: "the worst", category: "superlatives" },
      { es: "el más fuerte", en: "the strongest", category: "superlatives" },
      { es: "el más caro", en: "the most expensive", category: "superlatives" },
    ],
    flips: [
      { affirmative: "Lake Coatepeque is the most beautiful place in El Salvador. (What?)", negative: "Lake Coatepeque is not the most beautiful place in El Salvador.", question: "What is the most beautiful place in El Salvador?" },
      { affirmative: "This laptop is the cheapest one in the store.", negative: "This laptop is not the cheapest one in the store.", question: "Is this laptop the cheapest one in the store?" },
      { affirmative: "Carla is the fastest agent on the team. (Who?)", negative: "Carla is not the fastest agent on the team.", question: "Who is the fastest agent on the team?" },
      { affirmative: "Mountains are more peaceful than beaches.", negative: "Mountains are not more peaceful than beaches.", question: "Are mountains more peaceful than beaches?" },
    ],
    numbers: [
      { say: "the cheapest phone costs one hundred forty-nine dollars", write: "$149" },
      { say: "my parents got married in nineteen ninety-six", write: "1996" },
      { say: "the most expensive laptop costs two thousand three hundred dollars", write: "$2,300" },
      { say: "this plan is fifteen percent cheaper", write: "15%" },
      { say: "the tallest building has sixty-four floors", write: "64" },
      { say: "the best offer is forty-nine dollars and fifty cents", write: "$49.50" },
    ],
  },

  bossBattle: {
    name: "The Show-Off Troll",
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
      { name: "❤️ Heal", effect: "The Troll recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "MORE OLD? I am OLDER than your grandma's grandma!",
      "BADDER? There is no badder. Only WORSE... like your score.",
      "I am the smartest, the fastest and the most beautiful troll in the world.",
      "SO TALL AS? AS tall AS! And nobody is as tall as me.",
      "I used to lose battles. Then I met this class.",
    ],
  },

  punishments: [
    "Name 3 games you used to play when you were a kid.",
    "Compare Bad Bunny and Daddy Yankee in 3 sentences.",
    "Compare beaches and mountains: 3 sentences with MORE ... THAN.",
    "Sell your phone to the class with 3 superlatives: the best, the fastest...",
    "Say the comparative and superlative of: big, easy, bad, famous.",
    "Say 'I am the fastest!' like a turtle, a superhero and a robot.",
    "Say how technology used to be 30 years ago, 3 sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Compare yourself with a famous person in 3 funny sentences (taller, funnier, more organized...).",
    "She is a nurse. Say 4 things she usually does at work.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
