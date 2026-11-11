import type { GamePack } from "./types";

// EAGLES · WEEK 4 — Day 1 simple future (dream job, future career), Day 2 present perfect with already / yet / so far (life goals),
// Day 3 present perfect progressive (How long have you been...?), Day 4 simple past vs. present perfect vs. perfect progressive (life achievements & lessons), Day 5 evaluations.
export const EAGLES_W4: GamePack = {
  level: "eagles",
  week: 4,
  theme: "Goals & achievements",
  teams: { suggestedNames: ["Red Eagles", "Blue Falcons", "Green Hawks", "Golden Condors"] },

  days: [
    { level: "eagles", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple future: will / won't · Dream job & career plans", minutes: 10 },
    { level: "eagles", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: already / yet / so far / since / for", minutes: 10 },
    { level: "eagles", week: 4, day: 3, game: "story_heist", title: "Story Heist — Life Goals", grammar: "How long have you been...? · Goals achieved and not yet", minutes: 10 },
    { level: "eagles", week: 4, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Past vs. perfect vs. perfect progressive", minutes: 10 },
    { level: "eagles", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Eagle King", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Cuando consiga mi trabajo soñado, compraré un carro.", en: "When I get my dream job, I will buy a car.", alt: ["When I get my dream job I'll buy a car."] },
      { tier: 1, es: "No trabajaré los domingos nunca más.", en: "I won't work on Sundays anymore.", alt: ["I will not work on Sundays anymore.", "I won't work on Sundays ever again."] },
      { tier: 1, es: "¿Cómo te prepararás para tu futura carrera?", en: "How will you prepare for your future career?" },
      { tier: 1, es: "Creo que seré supervisor en dos años.", en: "I think I will be a supervisor in two years.", alt: ["I think I'll be a supervisor in two years."] },
      { tier: 2, es: "Ahorraré la mitad de mi salario y el resto lo invertiré.", en: "I will save half of my salary and I will invest the rest.", alt: ["I'll save half of my salary and invest the rest.", "I will save half my salary and invest the rest."] },
      { tier: 2, es: "¿Qué comprarás primero cuando te paguen?", en: "What will you buy first when you get paid?", alt: ["What will you buy first when they pay you?"] },
      { tier: 2, es: "Mis amigos no vendrán a la graduación porque trabajan ese día.", en: "My friends won't come to the graduation because they work that day.", alt: ["My friends will not come to the graduation because they work that day."] },
      { tier: 2, es: "Algún día abriré mi propio negocio.", en: "Someday I will open my own business.", alt: ["One day I will open my own business.", "Someday I'll open my own business."] },
      { tier: 3, es: "Voy a seguir practicando y pasaré la entrevista en inglés sin problemas.", en: "I will keep practicing and I will pass the interview in English without problems.", alt: ["I'll keep practicing and I'll pass the English interview without any problems.", "I will continue practicing and I will pass the interview in English with no problems."] },
      { tier: 3, es: "Las empresas necesitarán más agentes bilingües el próximo año.", en: "Companies will need more bilingual agents next year.", alt: ["The companies will need more bilingual agents next year."] },
      { tier: 3, es: "Mi mamá estará orgullosa cuando vea mi primer cheque.", en: "My mom will be proud when she sees my first paycheck.", alt: ["My mother will be proud when she sees my first paycheck.", "My mom will be proud when she sees my first check."] },
      { tier: 3, es: "Tomaré un curso de servicio al cliente y después aplicaré a un puesto bilingüe.", en: "I will take a customer service course and then I will apply for a bilingual position.", alt: ["I'll take a customer service course and then apply for a bilingual position.", "I will take a customer service course and then apply to a bilingual position."] },
    ],
    echo: [
      { en: "I will finish Eagles, I will get a bilingual job and I will never say 'I have 25 years' again." },
      { en: "In five years she will have her own company and her own coffee machine." },
      { en: "We won't give up, even when the interview is in English." },
      { en: "Tomorrow I'll wake up early, practice for an hour and apply to three jobs." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have already finish my goals for this year.", right: "I have already finished my goals for this year.", hint: "Have + PARTICIPLE." },
      { wrong: "She hasn't started yet her project.", right: "She hasn't started her project yet.", hint: "YET goes at the end." },
      { wrong: "I have studied English since two years.", right: "I have studied English for two years.", hint: "Duration → FOR." },
      { wrong: "He has worked here for 2021.", right: "He has worked here since 2021.", hint: "A starting point → SINCE." },
      { wrong: "Have you finished the course? Yes, I did.", right: "Have you finished the course? Yes, I have.", hint: "Short answer with the same auxiliary." },
      { wrong: "So far I have save five hundred dollars.", right: "So far I have saved five hundred dollars.", hint: "Save → savED." },
      { wrong: "How long you have worked here?", right: "How long have you worked here?", hint: "How long HAVE YOU." },
      { wrong: "We haven't finish the course yet.", right: "We haven't finished the course yet.", hint: "Haven't + PARTICIPLE." },
      { wrong: "She has knew him for ten years.", right: "She has known him for ten years.", hint: "Know → known." },
      { wrong: "We have yet visited Guatemala.", right: "We haven't visited Guatemala yet.", hint: "Yet → negative + end." },
      { wrong: "I have already went to Mexico three times.", right: "I have already been to Mexico three times.", hint: "Go → BEEN (for visiting places)." },
      { wrong: "They have lived in San Salvador since five years.", right: "They have lived in San Salvador for five years.", hint: "Duration → FOR." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Life goals: Your team is 80 years old and looking back. What have you achieved and what haven't you done yet? (Round 1: I have traveled..., I have never..., I haven't ... yet.)", retellAs: "Round 2: the other team asks 6 questions (How long have you been married? Have you ever...? When did you...?). Round 3: the other team retells the life in third person (He has..., she hasn't ... yet)." },
      { prompt: "Life goals: Your coach has been secretly training to be an astronaut. How long has he or she been doing things? (Round 1: He/She has been training for..., has been studying since..., has already...)", retellAs: "Round 2: the other team asks 6 questions with How long / Have you already / Have you ... yet. Round 3: the other team says what the coach WILL do on the Moon (He/She will...)." },
      { prompt: "Life goals: A famous singer talks about her career: what she has done so far and what she still wants. (Round 1: She has recorded..., she has been singing since..., she hasn't ... yet.)", retellAs: "Round 2: the other team interviews her (How long have you been singing? What have you achieved so far? What did you do in 2020?). Round 3: the first team says 5 things she will do next year (She will...)." },
      { prompt: "Life goals: Life lessons: things you have learned in your life. (Round 1: I have learned that..., I have been trying to..., I learned ... when I was...)", retellAs: "Round 2: the other team asks 6 questions mixing tenses (What have you learned? When did you learn it? How long have you been...?). Round 3: both teams say what they will teach their kids (I will teach them to...)." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "achieve", es: "lograr", past: "achieved", participle: "achieved", sound: "d", example: "I have achieved two goals this year." },
      { base: "get", es: "conseguir", past: "got", participle: "gotten", sound: "irregular", example: "She has gotten a new job." },
      { base: "finish", es: "terminar", past: "finished", participle: "finished", sound: "t", example: "We have already finished the course." },
      { base: "become", es: "convertirse en", past: "became", participle: "become", sound: "irregular", example: "He has become a supervisor." },
      { base: "start", es: "empezar", past: "started", participle: "started", sound: "id", example: "They have started their own business." },
      { base: "know", es: "saber / conocer", past: "knew", participle: "known", sound: "irregular", example: "I have known my best friend for ten years." },
      { base: "save", es: "ahorrar", past: "saved", participle: "saved", sound: "d", example: "She has saved two thousand dollars so far." },
      { base: "grow", es: "crecer", past: "grew", participle: "grown", sound: "irregular", example: "My English has grown a lot this year." },
      { base: "learn", es: "aprender", past: "learned", participle: "learned", sound: "d", example: "What have you learned in Eagles?" },
      { base: "forget", es: "olvidar", past: "forgot", participle: "forgotten", sound: "irregular", example: "I have forgotten my password again." },
      { base: "travel", es: "viajar", past: "traveled", participle: "traveled", sound: "d", example: "Have you traveled abroad yet?" },
      { base: "speak", es: "hablar", past: "spoke", participle: "spoken", sound: "irregular", example: "She has spoken with the recruiter twice." },
      { base: "try", es: "intentar", past: "tried", participle: "tried", sound: "d", example: "I have tried to call you three times." },
      { base: "teach", es: "enseñar", past: "taught", participle: "taught", sound: "irregular", example: "My coach has taught me a lot." },
      { base: "wait", es: "esperar", past: "waited", participle: "waited", sound: "id", example: "We have waited for this moment for months." },
      { base: "choose", es: "elegir", past: "chose", participle: "chosen", sound: "irregular", example: "I have chosen my future career." },
    ],
    flips: [
      { affirmative: "I have been studying English for two years. (How long?)", negative: "I haven't been studying English for two years.", question: "How long have you been studying English?" },
      { affirmative: "She has already finished the course.", negative: "She hasn't finished the course yet.", question: "Has she finished the course yet?" },
      { affirmative: "He started working at the call center in 2023. (When?)", negative: "He didn't start working at the call center in 2023.", question: "When did he start working at the call center?" },
      { affirmative: "They will open a business next year. (What?)", negative: "They won't open a business next year.", question: "What will they open next year?" },
    ],
  },

  bossBattle: {
    name: "The Eagle King",
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
      { name: "❤️ Heal", effect: "The Eagle King recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "SINCE two years? FOR two years! I have ruled these skies FOR centuries.",
      "You haven't beaten me YET... and you never will.",
      "I have already won. Have you already lost? Yes, you have.",
      "How long have you been failing? Since Basic 0!",
      "Beat me and you will fly. Lose... and you will walk back to Tigers.",
    ],
  },

  punishments: [
    "Say 3 goals you have already achieved and 3 you haven't achieved yet.",
    "Say how long you have been doing 4 things in your life.",
    "Say 5 things you will do when you get your dream job.",
    "Ask your coach 3 questions: How long have you been...? Have you ... yet?",
    "Say 8 past participles in 8 seconds: gotten, become, known...",
    "Say 'I have already finished!' like a champion, a lazy person and a robot.",
    "Share 2 life lessons you have learned, with 'I have learned that...'.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say what you did last year, what you have done this year and what you will do next year.",
    "Give your coach a compliment with present perfect: 'You have been...'.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
