import type { GamePack } from "./types";

// TIGERS · WEEK 4 — Day 1 simple future (savings, predictions), Day 2 present perfect with already / yet / so far / since / for (goals),
// Day 3 present perfect progressive (What has Peter been doing lately? How long have you...?),
// Day 4 simple past vs. present perfect vs. perfect progressive (lifestyle, new in the city), Day 5 evaluations.
export const TIGERS_W4: GamePack = {
  level: "tigers",
  week: 4,
  theme: "So far, so good",
  teams: { suggestedNames: ["Orange Tigers", "White Tigers", "Night Panthers", "Golden Jaguars"] },

  days: [
    { level: "tigers", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple future: will / won't · Savings & predictions", minutes: 10 },
    { level: "tigers", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: already / yet / so far / since / for", minutes: 10 },
    { level: "tigers", week: 4, day: 3, game: "story_heist", title: "Story Heist — Life Goals", grammar: "How long have you been...? · What has Peter been doing lately?", minutes: 10 },
    { level: "tigers", week: 4, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Past vs. perfect vs. perfect progressive", minutes: 10 },
    { level: "tigers", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — Sabertooth, the Final Tiger", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Mañana llamaré a mi mamá.", en: "I will call my mom tomorrow.", alt: ["Tomorrow I will call my mom.", "I'll call my mom tomorrow.", "I will call my mother tomorrow."] },
      { tier: 1, es: "No gastaré mis ahorros en ropa.", en: "I won't spend my savings on clothes.", alt: ["I will not spend my savings on clothes."] },
      { tier: 1, es: "¿Lloverá este fin de semana?", en: "Will it rain this weekend?" },
      { tier: 1, es: "Creo que nuestro equipo ganará hoy.", en: "I think our team will win today.", alt: ["I think that our team will win today."] },
      { tier: 2, es: "Con mis ahorros compraré una moto y viajaré a Guatemala.", en: "With my savings I will buy a motorcycle and travel to Guatemala.", alt: ["With my savings I'll buy a motorcycle and I'll travel to Guatemala.", "With my savings I will buy a motorcycle and I will travel to Guatemala.", "With my savings I will buy a motorbike and travel to Guatemala."] },
      { tier: 2, es: "¿Dónde vivirás dentro de cinco años?", en: "Where will you live in five years?", alt: ["Where will you live five years from now?"] },
      { tier: 2, es: "Ella no vendrá a la cena de Navidad; se quedará en casa.", en: "She won't come to Christmas dinner; she will stay home.", alt: ["She will not come to the Christmas dinner; she will stay at home.", "She won't come to the Christmas dinner, she'll stay home."] },
      { tier: 2, es: "En diez años los carros se manejarán solos.", en: "In ten years cars will drive themselves.", alt: ["In ten years cars will drive by themselves.", "In ten years cars will drive on their own."] },
      { tier: 3, es: "El próximo año terminaré el curso y conseguiré un trabajo bilingüe.", en: "Next year I will finish the course and get a bilingual job.", alt: ["Next year I will finish the course and I will get a bilingual job.", "Next year I'll finish the course and get a bilingual job."] },
      { tier: 3, es: "Los robots harán muchos trabajos, pero no reemplazarán a los coaches.", en: "Robots will do many jobs, but they won't replace coaches.", alt: ["Robots will do a lot of jobs, but they won't replace coaches.", "Robots will do many jobs, but they will not replace the coaches."] },
      { tier: 3, es: "¿Qué harás con tu primer salario: lo ahorrarás o lo gastarás?", en: "What will you do with your first salary: will you save it or spend it?", alt: ["What will you do with your first paycheck: will you save it or spend it?", "What will you do with your first salary: will you save it or will you spend it?"] },
      { tier: 3, es: "Algún día hablaré inglés sin miedo y mi familia estará orgullosa.", en: "Someday I will speak English without fear and my family will be proud.", alt: ["One day I will speak English without fear and my family will be proud.", "Someday I will speak English without fear and my family will be proud of me."] },
    ],
    echo: [
      { en: "Next month I will save fifty dollars, and I won't touch that money." },
      { en: "In twenty years people will live on Mars and they will still hate Mondays." },
      { en: "Don't worry, I'll help you study and you will pass the test." },
      { en: "She will open a small bakery and all of us will be her first customers." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have already pay my phone bill.", right: "I have already paid my phone bill.", hint: "Have + PARTICIPLE. Pay is irregular." },
      { wrong: "He hasn't called me already.", right: "He hasn't called me yet.", hint: "Negative sentence: ALREADY or YET?" },
      { wrong: "She has lived here since three months.", right: "She has lived here for three months.", hint: "Three months is a duration." },
      { wrong: "We have been friends for 2019.", right: "We have been friends since 2019.", hint: "2019 is a starting point." },
      { wrong: "Have you eaten yet lunch?", right: "Have you eaten lunch yet?", hint: "Where does YET go?" },
      { wrong: "So far we has completed four units.", right: "So far we have completed four units.", hint: "Check the auxiliary for WE." },
      { wrong: "How long she has had that car?", right: "How long has she had that car?", hint: "Question order: auxiliary before the subject." },
      { wrong: "My brother has already buyed a house.", right: "My brother has already bought a house.", hint: "Buy is irregular." },
      { wrong: "They haven't decide yet.", right: "They haven't decided yet.", hint: "Haven't + PARTICIPLE." },
      { wrong: "I have this job since January.", right: "I have had this job since January.", hint: "SINCE needs present perfect: have + participle." },
      { wrong: "Has he finished yet? No, he didn't.", right: "Has he finished yet? No, he hasn't.", hint: "Short answer: same auxiliary as the question." },
      { wrong: "We haven't took the test yet.", right: "We haven't taken the test yet.", hint: "Take → took → ?" },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Life goals: Peter has been acting very strangely lately because he has a secret goal. What has he been doing? (Round 1: He has been running at 4 a.m..., he has been saving..., he has been learning...)", retellAs: "Round 2: the other team asks 6 questions (How long has he been...? Has he already...? Has he ... yet?). Round 3: the other team guesses his goal and says what he WILL do next (He will...)." },
      { prompt: "Life goals: Your team is a famous band on TV. Tell the reporter your story. (Round 1: We have been playing together for..., we have been touring since..., we have already recorded...)", retellAs: "Round 2: the other team interviews the band (How long have you been singing? What have you achieved so far? What haven't you done yet?). Round 3: the other team reports it in third person (They have been..., they haven't ... yet)." },
      { prompt: "Life goals: Your goals for this year. What have you achieved so far and what have you been working on? (Round 1: So far I have..., I have been saving for..., I haven't ... yet.)", retellAs: "Round 2: the other team asks 6 questions (How long have you been...? Have you ... yet? When did you start?). Round 3: both teams make promises for next year (I will..., I won't...)." },
      { prompt: "Life goals: You are new in the city and you have been trying to find an apartment, a job and a friend. (Round 1: I have been living here for..., I have been looking for..., I have already visited...)", retellAs: "Round 2: the other team plays a friendly neighbor and asks 6 questions (How long have you been here? Have you found ... yet? Where did you live before?). Round 3: the neighbor team makes predictions (You will love..., you will find...)." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "achieve", es: "lograr (una meta)", past: "achieved", participle: "achieved", sound: "d", example: "I have achieved three goals so far." },
      { base: "pass", es: "aprobar (un examen)", past: "passed", participle: "passed", sound: "t", example: "She has already passed her driving test." },
      { base: "improve", es: "mejorar", past: "improved", participle: "improved", sound: "d", example: "My pronunciation has improved since January." },
      { base: "apply", es: "aplicar (a un trabajo)", past: "applied", participle: "applied", sound: "d", example: "He has applied for five jobs this month." },
      { base: "move", es: "mudarse", past: "moved", participle: "moved", sound: "d", example: "We have moved to a new apartment." },
      { base: "decide", es: "decidir", past: "decided", participle: "decided", sound: "id", example: "Have you decided what to study yet?" },
      { base: "begin", es: "comenzar", past: "began", participle: "begun", sound: "irregular", example: "The class has already begun." },
      { base: "give", es: "dar", past: "gave", participle: "given", sound: "irregular", example: "My boss has given me a new schedule." },
      { base: "keep", es: "guardar / mantener", past: "kept", participle: "kept", sound: "irregular", example: "I have kept my savings in the bank for years." },
      { base: "pay", es: "pagar", past: "paid", participle: "paid", sound: "irregular", example: "Have you paid the electricity bill yet?" },
      { base: "read", es: "leer", past: "read", participle: "read", sound: "irregular", example: "I have read two books so far this year." },
      { base: "sell", es: "vender", past: "sold", participle: "sold", sound: "irregular", example: "They have sold their old car." },
      { base: "spend", es: "gastar", past: "spent", participle: "spent", sound: "irregular", example: "She has spent all her money already." },
      { base: "think", es: "pensar", past: "thought", participle: "thought", sound: "irregular", example: "I have thought about my future a lot lately." },
      { base: "leave", es: "salir / irse", past: "left", participle: "left", sound: "irregular", example: "He has left the office; call him tomorrow." },
      { base: "make", es: "hacer (crear)", past: "made", participle: "made", sound: "irregular", example: "We have made a lot of progress since Basic 0." },
    ],
    flips: [
      { affirmative: "Peter has been working at a bank for six months. (How long?)", negative: "Peter hasn't been working at a bank for six months.", question: "How long has Peter been working at a bank?" },
      { affirmative: "I have already paid the rent.", negative: "I haven't paid the rent yet.", question: "Have you paid the rent yet?" },
      { affirmative: "She moved to Santa Tecla last year. (Where?)", negative: "She didn't move to Santa Tecla last year.", question: "Where did she move last year?" },
      { affirmative: "They will visit the museum on Saturday. (When?)", negative: "They won't visit the museum on Saturday.", question: "When will they visit the museum?" },
    ],
  },

  bossBattle: {
    name: "Sabertooth, the Final Tiger",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "pastform", seconds: 90, items: 4 },
      { kind: "retell", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "Sabertooth recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "SINCE three months? FOR three months! I have been hunting FOR ten thousand years.",
      "You haven't defeated me YET. YET goes at the end... like your team.",
      "So far you have made five mistakes. I have counted them all.",
      "How long have you been studying? And you still say BUYED?",
      "Beat me and you will move up to Sharks. Lose and you will be my lunch.",
    ],
  },

  punishments: [
    "Say 3 things you have already done today and 2 you haven't done yet.",
    "Say 3 goals you have achieved so far this year.",
    "Say what you will do with your savings, 3 sentences.",
    "Make 3 predictions about a classmate's future with WILL.",
    "Say base, past and participle of: begin, give, pay, sell.",
    "Say 'I haven't finished yet!' like a tired worker, a kid and a robot.",
    "Say what Peter has been doing lately, 3 crazy sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "You are new in the city: ask your coach 3 questions with 'How long have you...?'",
    "Say one thing you did last Christmas and one thing you will do next Christmas.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
