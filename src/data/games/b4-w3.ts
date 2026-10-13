import type { GamePack } from "./types";

// BASIC 4 · WEEK 3 — VERB TO BE in past / present / future, questions in MIXED tenses. Day 1 was / is / will be (affirmative; childhood),
// Day 2 yes/no questions mixed tenses (describe a phone), Day 3 Wh- questions mixed tenses (opinions), Day 4 listening test + Wh- review, Day 5 evaluation.
export const B4_W3: GamePack = {
  level: "b4",
  week: 3,
  theme: "Was, is, will be",
  teams: { suggestedNames: ["Red Titans", "Blue Vikings", "Green Ninjas", "Yellow Pirates"] },

  days: [
    { level: "b4", week: 3, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Verb to be: was / were · am / is / are · will be", minutes: 10 },
    { level: "b4", week: 3, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Yes/no questions in mixed tenses: Do / Does / Did / Was / Are / Will", minutes: 10 },
    { level: "b4", week: 3, day: 3, game: "story_heist", title: "Story Heist — The Interrogation", grammar: "Wh- questions in mixed tenses", minutes: 10 },
    { level: "b4", week: 3, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Phone & opinion words · Mixed-tense flips with Wh- cues", minutes: 10, note: "After the listening test" },
    { level: "b4", week: 3, day: 5, game: "boss_battle", title: "Boss Battle — The Question Sphinx", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Yo era muy tímido cuando era niño.", en: "I was very shy when I was a child.", alt: ["I was very shy when I was a kid."] },
      { tier: 1, es: "Mi mamá es enfermera.", en: "My mom is a nurse.", alt: ["My mother is a nurse."] },
      { tier: 1, es: "Mañana estaré en San Miguel.", en: "Tomorrow I will be in San Miguel.", alt: ["I will be in San Miguel tomorrow.", "Tomorrow I'll be in San Miguel."] },
      { tier: 1, es: "Mis abuelos eran de Chalatenango.", en: "My grandparents were from Chalatenango." },
      { tier: 2, es: "Hace veinte años había un solo teléfono en mi casa.", en: "Twenty years ago there was only one phone in my house.", alt: ["Twenty years ago there was just one phone in my house.", "20 years ago there was only one phone in my house."] },
      { tier: 2, es: "Mi primera clase fue muy difícil.", en: "My first class was very difficult.", alt: ["My first class was very hard."] },
      { tier: 2, es: "El próximo año seremos agentes de call center.", en: "Next year we will be call center agents.", alt: ["Next year we'll be call center agents."] },
      { tier: 2, es: "Mi hermano estaba en casa anoche.", en: "My brother was at home last night.", alt: ["My brother was home last night."] },
      { tier: 3, es: "Hace 20 años mi papá era joven; ahora es viejo, pero sigue siendo fuerte.", en: "Twenty years ago my dad was young; now he is old, but he is still strong.", alt: ["20 years ago my father was young; now he is old, but he is still strong."] },
      { tier: 3, es: "En mi opinión, E4CC es una buena escuela porque los coaches son pacientes.", en: "In my opinion, E4CC is a good school because the coaches are patient.", alt: ["I think E4CC is a good school because the coaches are patient."] },
      { tier: 3, es: "Mi niñez fue feliz: éramos pobres, pero estábamos juntos.", en: "My childhood was happy: we were poor, but we were together.", },
      { tier: 3, es: "Mi teléfono es nuevo y la batería será un problema en un año.", en: "My phone is new and the battery will be a problem in a year.", alt: ["My phone is new and the battery will be a problem in one year.", "My phone is new and the battery is going to be a problem in a year."] },
    ],
    echo: [
      { en: "Twenty years ago I was a baby, today I am a student and next year I will be an agent." },
      { en: "My first coach was very funny and my new coach is very patient." },
      { en: "We were nervous on the first day, but now we are confident." },
      { en: "The test will be difficult, but we will be ready." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Do you was at the party last night?", right: "Were you at the party last night?", hint: "Past of to be → WERE, no DO." },
      { wrong: "Does she works at a call center?", right: "Does she work at a call center?", hint: "After DOES, no S." },
      { wrong: "Was you tired yesterday?", right: "Were you tired yesterday?", hint: "You → WERE." },
      { wrong: "Is she going to works tomorrow?", right: "Is she going to work tomorrow?", hint: "Going to + base verb." },
      { wrong: "Did you ate breakfast today?", right: "Did you eat breakfast today?", hint: "After DID, base verb." },
      { wrong: "Are you like your phone?", right: "Do you like your phone?", hint: "Like → DO you like." },
      { wrong: "Do you are nervous right now?", right: "Are you nervous right now?", hint: "Nervous → ARE you." },
      { wrong: "Will she comes to class tomorrow?", right: "Will she come to class tomorrow?", hint: "After WILL, base verb." },
      { wrong: "Were they sleeping? Yes, they did.", right: "Were they sleeping? Yes, they were.", hint: "Yes, they WERE." },
      { wrong: "Does your phone has a good camera?", right: "Does your phone have a good camera?", hint: "After DOES → HAVE." },
      { wrong: "Is your coach was funny last year?", right: "Was your coach funny last year?", hint: "Last year → WAS." },
      { wrong: "Did she was at home last night?", right: "Was she at home last night?", hint: "Verb to be in the past: no DID." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Your grandpa gave you one million dollars yesterday. Tell the story in three tenses: what happened, what you have now, what you will do. (Round 1: He gave me..., now I am..., I will...)", retellAs: "Round 2 — THE INTERROGATION: the other team asks 6 Wh- questions in mixed tenses (Where were you? What did he say? What are you going to buy? How much will you give your coach?). Round 3: the other team retells the story in third person." },
      { prompt: "Crazy story: You went to Paris last month, you are in Paris now, and you will stay one more year. (Round 1: Last month I..., now I..., next year I will...)", retellAs: "Round 2 — THE INTERROGATION: the other team asks 6 Wh- questions in mixed tenses (Why did you go? Where are you living? What do you eat every day? When will you come back?). Round 3: the other team retells it as a news report." },
      { prompt: "Crazy story: A scary moment: last night there was a monster in your kitchen. (Round 1: Last night I was..., the monster was..., I ran...)", retellAs: "Round 2 — THE INTERROGATION: the other team asks 6 Wh- questions in mixed tenses (What were you doing? What did the monster look like? Where is it now? What will you do tonight?). Round 3: the other team retells the story in NEGATIVE (There wasn't a monster, he didn't run...)." },
      { prompt: "Crazy story: Twenty years ago your phone was a brick; today it is a genius; in 2050 it will be your boss. (Round 1: Twenty years ago my phone was..., today it is..., in 2050 it will be...)", retellAs: "Round 2 — THE INTERROGATION: the other team asks 6 Wh- questions in mixed tenses (What was your first phone like? What does your phone do now? What will it do in 2050? How much did it cost?). Round 3: the other team gives their OPINION about phones (In my opinion..., I think... because...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "pantalla", en: "screen", category: "phone" },
      { es: "batería", en: "battery", category: "phone" },
      { es: "cargador", en: "charger", category: "phone" },
      { es: "cámara", en: "camera", category: "phone" },
      { es: "mensaje de texto", en: "text message", alt: ["text", "message"], category: "phone" },
      { es: "tomar fotos", en: "take pictures", alt: ["take photos", "to take pictures"], category: "phone" },
      { es: "en mi opinión", en: "in my opinion", category: "opinions" },
      { es: "creo que", en: "I think", alt: ["I think that"], category: "opinions" },
      { es: "paciente", en: "patient", category: "adjectives" },
      { es: "orgulloso", en: "proud", category: "adjectives" },
      { es: "nervioso", en: "nervous", category: "adjectives" },
      { es: "asustado", en: "scared", alt: ["afraid"], category: "adjectives" },
      { es: "especial", en: "special", category: "adjectives" },
      { es: "hace veinte años", en: "twenty years ago", alt: ["20 years ago"], category: "time" },
      { es: "niñez", en: "childhood", category: "nouns" },
      { es: "el año que viene", en: "next year", category: "time" },
    ],
    flips: [
      { affirmative: "I was at the beach last weekend. (Where?)", negative: "I was not at the beach last weekend.", question: "Where were you last weekend?" },
      { affirmative: "My coach is from Santa Ana. (Where?)", negative: "My coach is not from Santa Ana.", question: "Where is your coach from?" },
      { affirmative: "She bought a new phone last week. (What?)", negative: "She didn't buy a new phone last week.", question: "What did she buy last week?" },
      { affirmative: "They were nervous because of the test. (Why?)", negative: "They were not nervous because of the test.", question: "Why were they nervous?" },
    ],
    numbers: [
      { say: "twenty years ago, in two thousand six", write: "2006" },
      { say: "the phone costs three hundred ninety-nine dollars", write: "$399" },
      { say: "the battery is at fifteen percent", write: "15%" },
      { say: "my first class was at seven thirty", write: "7:30" },
      { say: "I was eight years old", write: "8" },
      { say: "in two thousand fifty", write: "2050" },
    ],
  },

  bossBattle: {
    name: "The Question Sphinx",
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
      { name: "❤️ Heal", effect: "The Sphinx recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "DO you WAS? Answer my riddle correctly or lose a life!",
      "WAS you? WERE you... ever good at this? No.",
      "Yes, they DID? With WERE? Yes, they WERE... wrong.",
      "Who, what, when, where, why... you will never know.",
      "I was a Sphinx, I am a Sphinx, I will be a Sphinx. You? Lunch.",
    ],
  },

  punishments: [
    "Say how you were 20 years ago and how you are now, 4 sentences.",
    "Ask your coach 4 yes/no questions in 4 different tenses (Do / Did / Are / Will).",
    "Ask your coach 4 Wh- questions in 4 different tenses.",
    "Describe your phone and 3 things it does.",
    "Give your opinion about E4CC in 3 sentences (In my opinion..., because...).",
    "Say 'Where were you last night?' like a detective, in 3 voices.",
    "Describe your family with the verb to be: 5 sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Tell a scary moment of your life in 15 seconds.",
    "Say where you were yesterday, where you are now and where you will be tomorrow.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
