import type { GamePack } from "./types";

// SHARKS · WEEK 3 — Day 1 used to (when I was a kid / in high school), Day 2 short comparatives (-er than), Day 3 long comparatives (more ... than),
// Day 4 superlatives (celebrities), Day 5 simple present + grammar test / book quiz.
export const SHARKS_W3: GamePack = {
  level: "sharks",
  week: 3,
  theme: "Bigger fish: faster, funnier, the most famous",
  teams: { suggestedNames: ["Great Whites", "Hammerheads", "Bull Sharks", "Blue Makos"] },

  days: [
    { level: "sharks", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "USED TO · When I was a kid", minutes: 10 },
    { level: "sharks", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Short comparatives: -er than, better / worse, as ... as", minutes: 10 },
    { level: "sharks", week: 3, day: 3, game: "story_heist", title: "Story Heist — The Face-Off", grammar: "Long comparatives: more / less ... than", minutes: 10 },
    { level: "sharks", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Adjective → comparative → superlative · Celebrities", minutes: 10 },
    { level: "sharks", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — Captain Biggerbeard", grammar: "Everything from the week", minutes: 10, note: "After the book quiz" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "De niño solía coleccionar piedras.", en: "As a kid I used to collect rocks.", alt: ["When I was a kid I used to collect rocks.", "As a child I used to collect stones.", "As a kid I used to collect stones."] },
      { tier: 1, es: "Mi hermana antes les tenía miedo a los perros.", en: "My sister used to be afraid of dogs.", alt: ["My sister used to be scared of dogs."] },
      { tier: 1, es: "No solía comer verduras.", en: "I didn't use to eat vegetables.", alt: ["I did not use to eat vegetables.", "I never used to eat vegetables."] },
      { tier: 1, es: "¿Dónde solías jugar cuando eras niño?", en: "Where did you use to play when you were a kid?", alt: ["Where did you use to play when you were a child?"] },
      { tier: 2, es: "Él antes llegaba tarde al colegio todos los lunes.", en: "He used to arrive late to school every Monday.", alt: ["He used to be late for school every Monday.", "He used to get to school late every Monday."] },
      { tier: 2, es: "Antes veíamos caricaturas los sábados; ahora vemos series en el celular.", en: "We used to watch cartoons on Saturdays; now we watch series on our phones.", alt: ["We used to watch cartoons on Saturdays; now we watch shows on our phones.", "We used to watch cartoons on Saturdays; now we watch series on the phone."] },
      { tier: 2, es: "¿Tu mamá solía castigarte por tus notas?", en: "Did your mom use to punish you for your grades?", alt: ["Did your mother use to punish you for your grades?", "Did your mom use to ground you for your grades?"] },
      { tier: 2, es: "Antes la gente usaba mapas de papel; ahora le pregunta todo a la IA.", en: "People used to use paper maps; now they ask AI everything.", alt: ["People used to use paper maps; now they ask AI about everything."] },
      { tier: 3, es: "Cuando estaba en bachillerato solía copiar la tarea cinco minutos antes de la clase.", en: "When I was in high school I used to copy the homework five minutes before class.", alt: ["When I was in high school I used to copy the homework five minutes before the class.", "When I was in high school I used to copy homework five minutes before class."] },
      { tier: 3, es: "Mi abuelo solía caminar una hora para ir a la escuela y nunca se quejaba.", en: "My grandfather used to walk an hour to go to school and he never complained.", alt: ["My grandpa used to walk an hour to get to school and he never complained.", "My grandfather used to walk for an hour to go to school and never complained."] },
      { tier: 3, es: "Antes no usábamos el celular en la mesa, pero ahora nadie habla durante la cena.", en: "We didn't use to use our phones at the table, but now nobody talks during dinner.", alt: ["We never used to use our phones at the table, but now no one talks during dinner.", "We didn't use to use our phones at the table, but now no one talks at dinner."] },
      { tier: 3, es: "Antes me daba pena hablar inglés; ahora hablo aunque cometa errores.", en: "I used to be embarrassed to speak English; now I speak even when I make mistakes.", alt: ["I used to feel embarrassed to speak English; now I speak even if I make mistakes.", "I used to be embarrassed to speak English; now I speak even if I make mistakes."] },
    ],
    echo: [
      { en: "I used to think English was impossible, and now I dream in two languages." },
      { en: "My brother used to hide his report card under the sofa every month." },
      { en: "We used to rent movies at a store; now a robot recommends them." },
      { en: "She used to call her friends for hours, and now she only sends stickers." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Einstein was more smart than my neighbor.", right: "Einstein was smarter than my neighbor.", hint: "Short adjective → no MORE." },
      { wrong: "Karol G is more young than Shakira.", right: "Karol G is younger than Shakira.", hint: "One syllable → use the ending." },
      { wrong: "My phone is badder than yours.", right: "My phone is worse than yours.", hint: "Bad is irregular." },
      { wrong: "Bad Bunny is richer that my uncle.", right: "Bad Bunny is richer than my uncle.", hint: "Which word follows a comparative?" },
      { wrong: "Dogs are more friendlier than cats.", right: "Dogs are friendlier than cats.", hint: "One comparative marker only." },
      { wrong: "A shark is not as big than a whale.", right: "A shark is not as big as a whale.", hint: "AS + adjective + ?" },
      { wrong: "Pupusas are as good like tacos.", right: "Pupusas are as good as tacos.", hint: "As ... ?" },
      { wrong: "Rosalía sings more good than me.", right: "Rosalía sings better than me.", hint: "Good / well is irregular." },
      { wrong: "This song is long than that one.", right: "This song is longer than that one.", hint: "The comparative ending is missing." },
      { wrong: "My dog is more lazy than my cat.", right: "My dog is lazier than my cat.", hint: "Consonant + y → -IER, no MORE." },
      { wrong: "My sister is more short than me.", right: "My sister is shorter than me.", hint: "Short adjective → -ER, no MORE." },
      { wrong: "Is Messi more old than Ronaldo?", right: "Is Messi older than Ronaldo?", hint: "Short adjective → -ER." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Face-off: cats vs. dogs. Each speaker gives ONE comparison with a long adjective. (Round 1: Dogs are more loyal than..., cats are more independent than..., dogs are less quiet than...)", retellAs: "Round 2: the other team defends the other animal (But cats are more elegant than..., dogs are more expensive than...). Round 3: both teams agree on 3 final comparisons with a reason (Dogs are more fun than cats because...)." },
      { prompt: "Face-off: Bad Bunny vs. Einstein. Each speaker gives ONE comparison. (Round 1: Einstein was more intelligent than..., Bad Bunny is more famous than..., Einstein was less fashionable than...)", retellAs: "Round 2: the other team asks 5 questions (Who is more popular? Who was more patient? Who is richer?). Round 3: the other team answers each question with a reason (Bad Bunny is more popular than Einstein because...)." },
      { prompt: "Face-off: living in the big city vs. living at the beach. Each speaker gives ONE comparison. (Round 1: The city is more exciting than..., the beach is more relaxing than..., the city is more expensive than...)", retellAs: "Round 2: the other team gives the opposite view (But the beach is more boring than..., the city is more dangerous than...). Round 3: each team says where they used to live and compares it with now (I used to live in..., it was more peaceful than...)." },
      { prompt: "Face-off: your team sells a robot teacher, the other team sells a human coach. Compare your product with theirs. (Round 1: Our robot is more patient than..., more modern than..., less expensive than...)", retellAs: "Round 2: the other team sells the human coach (Our coach is funnier than..., more creative than..., friendlier than...). Round 3: the coach plays the customer and asks 5 comparison questions (Which one is more reliable? Which one is cheaper?) — the teams answer with comparatives." },
    ],
  },

  wordSprint: {
    words: [
      { es: "más alto (de estatura)", en: "taller", category: "comparatives" },
      { es: "más rápido", en: "faster", alt: ["quicker"], category: "comparatives" },
      { es: "más feo", en: "uglier", category: "comparatives" },
      { es: "más peligroso", en: "more dangerous", category: "comparatives" },
      { es: "más talentoso", en: "more talented", category: "comparatives" },
      { es: "más delgado", en: "thinner", alt: ["slimmer", "skinnier"], category: "comparatives" },
      { es: "más ocupado", en: "busier", category: "comparatives" },
      { es: "menos popular", en: "less popular", category: "comparatives" },
      { es: "el más fuerte", en: "the strongest", category: "superlatives" },
      { es: "el más rico (con más dinero)", en: "the richest", category: "superlatives" },
      { es: "el más chistoso", en: "the funniest", category: "superlatives" },
      { es: "el más famoso", en: "the most famous", category: "superlatives" },
      { es: "la más hermosa", en: "the most beautiful", category: "superlatives" },
      { es: "el más joven", en: "the youngest", category: "superlatives" },
      { es: "el más lejano", en: "the farthest", alt: ["the furthest"], category: "superlatives" },
      { es: "el menos caro", en: "the least expensive", alt: ["the cheapest"], category: "superlatives" },
    ],
    flips: [
      { affirmative: "My cousin is the funniest person in my family. (Who?)", negative: "My cousin is not the funniest person in my family.", question: "Who is the funniest person in your family?" },
      { affirmative: "Cats are quieter than dogs. (Which?)", negative: "Cats are not quieter than dogs.", question: "Which are quieter, cats or dogs?" },
      { affirmative: "February is the shortest month of the year.", negative: "February is not the shortest month of the year.", question: "Is February the shortest month of the year?" },
      { affirmative: "Einstein was as famous as a rock star.", negative: "Einstein was not as famous as a rock star.", question: "Was Einstein as famous as a rock star?" },
    ],
    numbers: [
      { say: "the tallest building has one hundred sixty-three floors", write: "163" },
      { say: "the cheapest ticket costs eighteen dollars and seventy-five cents", write: "$18.75" },
      { say: "Einstein was born in eighteen seventy-nine", write: "1879" },
      { say: "the most popular video has five hundred thousand likes", write: "500,000" },
      { say: "the biggest shark can be twelve meters long", write: "12" },
      { say: "the best discount is forty-five percent", write: "45%" },
    ],
  },

  bossBattle: {
    name: "Captain Biggerbeard",
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
      { name: "❤️ Heal", effect: "Captain Biggerbeard recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "MORE SMART? I am SMARTER than your whole team, arrr!",
      "BADDER? There is no badder. There is only WORSE... like your answers.",
      "My beard is the longest, my ship is the fastest and you are the slowest.",
      "Richer THAT me? THAN, sailor! THAN!",
      "She DON'T work on Saturdays? She DOESN'T! Walk the plank.",
    ],
  },

  punishments: [
    "Say 4 things you used to do in high school that you don't do now.",
    "Compare two famous singers in 3 sentences (taller, richer, more famous...).",
    "Compare cats and dogs in 3 sentences with MORE or LESS.",
    "Say the comparative and superlative of: tall, funny, bad, famous, far.",
    "Say 'I am the fastest shark in the sea!' like a pirate, a baby and a news reporter.",
    "Describe the biggest, the smallest and the oldest thing in your room.",
    "Say what Sarah does every Saturday morning: 4 sentences with SHE.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 3 sentences with 'as ... as' about your family.",
    "Say who is the funniest person in the class and why, in 2 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
