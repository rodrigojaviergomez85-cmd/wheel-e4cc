import type { GamePack } from "./types";

// SHARKS · WEEK 1 — Day 1 coaching day + simple past (game after the session), Day 2 modal verbs (can / could / might / should / must),
// Day 3 modals for advice and recommendations, Day 4 semi-modals (have to / need to), Day 5 second conditional + grammar test.
export const SHARKS_W1: GamePack = {
  level: "sharks",
  week: 1,
  theme: "Advice from the deep: should, must, have to",
  teams: { suggestedNames: ["Great Whites", "Hammerheads", "Bull Sharks", "Blue Makos"] },

  days: [
    { level: "sharks", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple past review · Last Christmas & last birthday", minutes: 10, note: "After the coaching session" },
    { level: "sharks", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Modal verbs: can / could / might / should / must + base verb", minutes: 10 },
    { level: "sharks", week: 1, day: 3, game: "story_heist", title: "Story Heist — The Advice Hotline", grammar: "Advice and recommendations with modals", minutes: 10 },
    { level: "sharks", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Semi-modals: have to / need to · Office duties & better habits", minutes: 10 },
    { level: "sharks", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Must-Not Megalodon", grammar: "Everything from the week", minutes: 10, note: "After the grammar test" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "La Navidad pasada comimos pavo y bailamos toda la noche.", en: "Last Christmas we ate turkey and danced all night.", alt: ["Last Christmas we ate turkey and we danced all night.", "Last Christmas we ate turkey and danced all night long."] },
      { tier: 1, es: "No recibí ningún regalo en mi cumpleaños.", en: "I didn't get any gifts on my birthday.", alt: ["I didn't get any presents on my birthday.", "I didn't receive any gifts on my birthday.", "I did not get any gifts on my birthday.", "I didn't get any gifts for my birthday.", "I didn't get any presents for my birthday."] },
      { tier: 1, es: "¿Dónde celebraste tu último cumpleaños?", en: "Where did you celebrate your last birthday?" },
      { tier: 1, es: "Mi tío se durmió antes de la medianoche.", en: "My uncle fell asleep before midnight.", alt: ["My uncle went to sleep before midnight."] },
      { tier: 2, es: "Mis primos compraron cohetes y el perro se escondió debajo de la cama.", en: "My cousins bought fireworks and the dog hid under the bed.", alt: ["My cousins bought firecrackers and the dog hid under the bed."] },
      { tier: 2, es: "Ella gastó todo su aguinaldo en dos días.", en: "She spent her whole Christmas bonus in two days.", alt: ["She spent all her Christmas bonus in two days.", "She spent all of her Christmas bonus in two days.", "She spent her whole bonus in two days.", "She spent her entire Christmas bonus in two days."] },
      { tier: 2, es: "¿Qué te regalaron tus amigos el año pasado?", en: "What did your friends give you last year?", alt: ["What did your friends get you last year?"] },
      { tier: 2, es: "No fuimos a la playa porque llovió toda la semana.", en: "We didn't go to the beach because it rained all week.", alt: ["We didn't go to the beach because it rained the whole week.", "We did not go to the beach because it rained all week."] },
      { tier: 3, es: "Cuando abrí el regalo, vi que era el mismo suéter del año pasado.", en: "When I opened the gift, I saw it was the same sweater from last year.", alt: ["When I opened the present, I saw that it was the same sweater from last year.", "When I opened the gift, I saw that it was the same sweater as last year."] },
      { tier: 3, es: "Mi abuela cocinó para veinte personas y nadie la ayudó a lavar los platos.", en: "My grandmother cooked for twenty people and nobody helped her wash the dishes.", alt: ["My grandma cooked for twenty people and no one helped her wash the dishes.", "My grandmother cooked for twenty people and nobody helped her to wash the dishes.", "My grandma cooked for twenty people and nobody helped her do the dishes."] },
      { tier: 3, es: "Llegué tarde a mi propia fiesta porque el bus se quedó sin gasolina.", en: "I arrived late to my own party because the bus ran out of gas.", alt: ["I was late to my own party because the bus ran out of gas.", "I got to my own party late because the bus ran out of gas.", "I was late for my own party because the bus ran out of gas."] },
      { tier: 3, es: "Antes de venir a clase desayuné, me bañé y perdí mis llaves.", en: "Before coming to class I had breakfast, took a shower and lost my keys.", alt: ["Before I came to class I ate breakfast, took a shower and lost my keys.", "Before coming to class I had breakfast, I took a shower and I lost my keys."] },
    ],
    echo: [
      { en: "Last Christmas my aunt gave me socks, and I smiled like it was a new phone." },
      { en: "On my last birthday nobody called me, so I bought my own cake." },
      { en: "We danced, we sang karaoke and my dad broke the only microphone." },
      { en: "I woke up late, ran to the bus stop and left my lunch on the table." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "John might gets the job.", right: "John might get the job.", hint: "After a modal, the verb takes no -S." },
      { wrong: "You shouldn't to text while you drive.", right: "You shouldn't text while you drive.", hint: "Modal + base verb. One word is extra." },
      { wrong: "She musts wear a seat belt.", right: "She must wear a seat belt.", hint: "Modals never change with he / she." },
      { wrong: "Can you to lend me five dollars?", right: "Can you lend me five dollars?", hint: "No TO after a modal." },
      { wrong: "He could being the new manager.", right: "He could be the new manager.", hint: "Modal + BASE verb, not -ING." },
      { wrong: "Does she can drive a truck?", right: "Can she drive a truck?", hint: "Questions: the modal goes first, no DO / DOES." },
      { wrong: "I don't can find my keys.", right: "I can't find my keys.", hint: "Negative: the modal takes NOT, no DON'T." },
      { wrong: "You no must park here.", right: "You must not park here.", hint: "Negative: modal + NOT." },
      { wrong: "What I should do with my money?", right: "What should I do with my money?", hint: "Question: the modal goes before the subject." },
      { wrong: "My sister could swam when she was four.", right: "My sister could swim when she was four.", hint: "After could, base verb." },
      { wrong: "They might not to come to the party.", right: "They might not come to the party.", hint: "Modal + NOT + base verb." },
      { wrong: "You must be not late for the interview.", right: "You must not be late for the interview.", hint: "NOT goes right after the modal." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Advice hotline: Beto wants to lose weight, but he eats pupusas at midnight and takes a taxi to the corner store. Give him recommendations. (Round 1: He should..., he could..., he must...)", retellAs: "Round 2: the other team says what Beto SHOULDN'T / MUST NOT do (He shouldn't..., he must not...). Round 3: the other team plays Beto with excuses ('But I can't, because...') and the first team answers each excuse with new advice." },
      { prompt: "Advice hotline: Your uncle is a terrible driver: he texts, eats and sings with his eyes closed. Say what he should NOT do while driving. (Round 1: He shouldn't..., he must not..., he can't...)", retellAs: "Round 2: the other team says what he SHOULD and MUST do (He should..., he must...). Round 3: the other team plays the uncle and promises ('OK, I must..., I can..., I must not...')." },
      { prompt: "Advice hotline: John starts his first call center job tomorrow and he is very nervous. What might happen, and what should he do? (Round 1: He might..., he should..., he could...)", retellAs: "Round 2: the other team says what he MUST NOT do on his first day (He must not..., he shouldn't...). Round 3: the other team retells the plan as John ('First I should..., then I could..., I must not...')." },
      { prompt: "Advice hotline: Sarah is a shopaholic: 40 pairs of shoes, three credit cards and no money for rent. Give her advice. (Round 1: She should..., she could..., she must...)", retellAs: "Round 2: the other team plays Sarah and gives excuses (I can't because..., I must buy..., I might need...). Round 3: the first team answers every excuse with a solution (You could..., you should...)." },
    ],
  },

  wordSprint: {
    words: [
      { es: "fecha límite", en: "deadline", alt: ["due date"], category: "office" },
      { es: "reunión", en: "meeting", category: "office" },
      { es: "informe (documento del trabajo)", en: "report", category: "office" },
      { es: "horario (de trabajo)", en: "schedule", alt: ["work schedule"], category: "office" },
      { es: "contestar el teléfono", en: "answer the phone", alt: ["to answer the phone", "pick up the phone"], category: "office" },
      { es: "enviar un correo", en: "send an email", alt: ["to send an email"], category: "office" },
      { es: "llegar a tiempo", en: "be on time", alt: ["arrive on time", "to be on time", "get there on time"], category: "office" },
      { es: "horas extra", en: "overtime", alt: ["extra hours"], category: "office" },
      { es: "ahorrar dinero", en: "save money", alt: ["to save money"], category: "habits" },
      { es: "bajar de peso", en: "lose weight", alt: ["to lose weight"], category: "habits" },
      { es: "acostarse temprano", en: "go to bed early", alt: ["to go to bed early"], category: "habits" },
      { es: "cinturón de seguridad", en: "seat belt", alt: ["seatbelt"], category: "habits" },
      { es: "presupuesto", en: "budget", category: "habits" },
      { es: "deuda", en: "debt", category: "habits" },
      { es: "meta (objetivo)", en: "goal", category: "habits" },
      { es: "gastar (dinero)", en: "spend", alt: ["to spend", "spend money"], category: "habits" },
    ],
    flips: [
      { affirmative: "Olivia has to finish the report before noon. (What?)", negative: "Olivia doesn't have to finish the report before noon.", question: "What does Olivia have to finish before noon?" },
      { affirmative: "He needs to charge his phone before bed.", negative: "He doesn't need to charge his phone before bed.", question: "Does he need to charge his phone before bed?" },
      { affirmative: "Sarah has to pay her credit card bill this week. (When?)", negative: "Sarah doesn't have to pay her credit card bill this week.", question: "When does Sarah have to pay her credit card bill?" },
      { affirmative: "I need to save money to improve my life. (Why?)", negative: "I don't need to save money to improve my life.", question: "Why do you need to save money?" },
    ],
    numbers: [
      { say: "the meeting starts at nine fifteen", write: "9:15" },
      { say: "Sarah owes three thousand two hundred dollars", write: "$3,200" },
      { say: "he needs to lose thirty-five pounds", write: "35" },
      { say: "you have to answer sixty calls a day", write: "60" },
      { say: "the speed limit is ninety kilometers per hour", write: "90" },
      { say: "the shoes cost forty-nine dollars and fifty cents", write: "$49.50" },
    ],
  },

  bossBattle: {
    name: "The Must-Not Megalodon",
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
      { name: "❤️ Heal", effect: "The Megalodon recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "You should TO swim away? No TO after SHOULD, little fish!",
      "He MUSTS? Modals never take an S. And I must eat you now.",
      "If I were you, I would study more. But I'm not you. I'm bigger.",
      "You don't need to run. Actually, yes... you HAVE TO!",
      "If your pet could talk, it would correct your grammar.",
    ],
  },

  punishments: [
    "Give Sarah the shopaholic 3 pieces of advice with SHOULD, MUST and COULD.",
    "Say 4 things you have to do before going to bed.",
    "Say 3 things you must NOT do while driving.",
    "Tell us what you did last Christmas in 15 seconds, in the past.",
    "Say 3 things that might happen at work tomorrow.",
    "Say 'You need to save money!' like a mom, a banker and a shark.",
    "Say 3 things you need to do to improve your life.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Give 3 recommendations to a friend who wants to lose weight.",
    "Say what you did on your last birthday: 3 sentences in the past.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
