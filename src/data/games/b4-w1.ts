import type { GamePack } from "./types";

// BASIC 4 · WEEK 1 — PAST & FUTURE review. Day 1 coaching day (game after it: light past/future mix, all known grammar),
// Day 2 going to ↔ will, Day 3 simple past -ED endings (happy moment), Day 4 irregular verbs (last Christmas), Day 5 weekly evaluation.
export const B4_W1: GamePack = {
  level: "b4",
  week: 1,
  theme: "Past & Future",
  teams: { suggestedNames: ["Red Titans", "Blue Vikings", "Green Ninjas", "Yellow Pirates"] },

  days: [
    { level: "b4", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Past & future mix: what you did · what you will do", minutes: 10, note: "After the coaching session" },
    { level: "b4", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "GOING TO vs. WILL · one future marker only", minutes: 10 },
    { level: "b4", week: 1, day: 3, game: "story_heist", title: "Story Heist — A Happy Moment", grammar: "Simple past with -ED verbs · then the future", minutes: 10 },
    { level: "b4", week: 1, day: 4, game: "past_sprint", title: "Past Form Sprint + Flip It", grammar: "Regular + irregular 50/50 · Past and future flips", minutes: 10 },
    { level: "b4", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Time Twister", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Ayer aprendí diez palabras nuevas.", en: "Yesterday I learned ten new words.", alt: ["I learned ten new words yesterday."] },
      { tier: 1, es: "Mañana voy a practicar más.", en: "Tomorrow I am going to practice more.", alt: ["Tomorrow I'm going to practice more.", "I am going to practice more tomorrow.", "Tomorrow I'm gonna practice more."] },
      { tier: 1, es: "Te llamaré el viernes.", en: "I will call you on Friday.", alt: ["I'll call you on Friday.", "I will call you Friday.", "I'll call you Friday."] },
      { tier: 1, es: "No vine a clase el lunes.", en: "I didn't come to class on Monday.", alt: ["I did not come to class on Monday."] },
      { tier: 2, es: "En Basic 3 no hablé mucho, pero en Basic 4 hablaré todos los días.", en: "In Basic 3 I didn't speak a lot, but in Basic 4 I will speak every day.", alt: ["In Basic 3 I didn't speak much, but in Basic 4 I'll speak every day.", "In Basic 3 I didn't talk a lot, but in Basic 4 I will talk every day."] },
      { tier: 2, es: "¿Qué vas a hacer el fin de semana?", en: "What are you going to do on the weekend?", alt: ["What are you going to do this weekend?", "What are you gonna do on the weekend?"] },
      { tier: 2, es: "Mi hermana viajó a México el año pasado.", en: "My sister traveled to Mexico last year.", alt: ["My sister travelled to Mexico last year."] },
      { tier: 2, es: "Creo que va a llover esta noche.", en: "I think it is going to rain tonight.", alt: ["I think it's going to rain tonight.", "I think it's gonna rain tonight.", "I think it will rain tonight."] },
      { tier: 3, es: "El año pasado trabajé en una tienda; el próximo año trabajaré en un call center.", en: "Last year I worked at a store; next year I will work at a call center.", alt: ["Last year I worked in a store; next year I'll work in a call center.", "Last year I worked at a store and next year I will work at a call center."] },
      { tier: 3, es: "Ella no va a venir a la fiesta porque trabajó toda la noche.", en: "She is not going to come to the party because she worked all night.", alt: ["She isn't going to come to the party because she worked all night.", "She's not gonna come to the party because she worked all night."] },
      { tier: 3, es: "¿Qué aprendiste hoy? Aprendí a usar will y going to.", en: "What did you learn today? I learned to use will and going to.", alt: ["What did you learn today? I learned how to use will and going to."] },
      { tier: 3, es: "Terminamos el examen ayer y mañana celebraremos.", en: "We finished the test yesterday and tomorrow we will celebrate.", alt: ["We finished the exam yesterday and we'll celebrate tomorrow.", "We finished the test yesterday and we will celebrate tomorrow."] },
    ],
    echo: [
      { en: "Yesterday I studied for two hours and tomorrow I will study for three." },
      { en: "She didn't pass the test, but she is going to try again next month." },
      { en: "We are going to travel in December and we will stay for a week." },
      { en: "I learned a lot today and I will practice tonight." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I will going to call you tomorrow.", right: "I will call you tomorrow.", hint: "A promise → WILL (one future marker)." },
      { wrong: "She is going to travels in June.", right: "She is going to travel in June.", hint: "Going to + base verb." },
      { wrong: "They will to study tonight.", right: "They will study tonight.", hint: "No TO after will." },
      { wrong: "I gonna eat pizza tonight.", right: "I'm gonna eat pizza tonight.", hint: "AM / IS / ARE + gonna." },
      { wrong: "It's gonna to rain this afternoon.", right: "It's gonna rain this afternoon.", hint: "Gonna already has the TO." },
      { wrong: "Are you will come to the party?", right: "Will you come to the party?", hint: "Question with will: WILL you (no ARE)." },
      { wrong: "She will be travel next year.", right: "She will travel next year.", hint: "Will + base verb, no BE." },
      { wrong: "He wills travel next year.", right: "He will travel next year.", hint: "Will never changes." },
      { wrong: "What you are going to do tomorrow?", right: "What are you going to do tomorrow?", hint: "What ARE YOU going to." },
      { wrong: "I think she is going to wins the game.", right: "I think she is going to win the game.", hint: "Going to + base verb." },
      { wrong: "Tomorrow I no will work.", right: "Tomorrow I will not work.", hint: "Will NOT / won't." },
      { wrong: "My parents is going to visit me on Sunday.", right: "My parents are going to visit me on Sunday.", hint: "Parents → ARE." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Last year you visited Paris with your coach and everything went wrong. What happened? Use -ED verbs. (Round 1: We arrived..., we walked..., the coach wanted...)", retellAs: "Round 2: the other team asks 5 questions in the past (Did you...? What did you...? Why did the coach...?). Round 3: the first team says what you WILL do on the next trip (Next time we will..., we won't...)." },
      { prompt: "Crazy story: A happy moment: the day your dog started to talk. What happened? Use -ED verbs. (Round 1: I opened the door..., the dog talked..., we laughed...)", retellAs: "Round 2: the other team asks 5 questions in the past (Did it...? What did it say? Where did you...?). Round 3: the first team says what the dog is GOING TO do next week (It is going to...)." },
      { prompt: "Crazy story: Last Christmas Santa Claus visited your house at 3 a.m. What happened? Use -ED verbs. (Round 1: He knocked..., my mom screamed..., we cooked...)", retellAs: "Round 2: the other team asks 5 questions in the past (Did he...? What did he want? Why...?). Round 3: the first team says what WILL happen next Christmas (Next Christmas he will..., we won't...)." },
      { prompt: "Crazy story: On your first day of class at E4CC, the coach was a robot. What happened? Use -ED verbs. (Round 1: The robot talked..., we listened..., I asked...)", retellAs: "Round 2: the other team asks 5 questions in the past (Did it...? What did the robot...?). Round 3: the first team says what the robot is GOING TO teach next month (It is going to...)." },
    ],
  },

  pastSprint: {
    verbs: [
      { base: "learn", es: "aprender", past: "learned", sound: "d", example: "I learned ten new words yesterday." },
      { base: "go", es: "ir", past: "went", sound: "irregular", example: "We went to the beach last Christmas." },
      { base: "open", es: "abrir", past: "opened", sound: "d", example: "She opened her gifts at midnight." },
      { base: "give", es: "dar", past: "gave", sound: "irregular", example: "My mom gave me a phone." },
      { base: "celebrate", es: "celebrar", past: "celebrated", sound: "id", example: "We celebrated all night." },
      { base: "eat", es: "comer", past: "ate", sound: "irregular", example: "They ate tamales on December 24th." },
      { base: "laugh", es: "reír", past: "laughed", sound: "t", example: "Everybody laughed at the joke." },
      { base: "sing", es: "cantar", past: "sang", sound: "irregular", example: "We sang Christmas songs." },
      { base: "travel", es: "viajar", past: "traveled", sound: "d", example: "She traveled to Guatemala in December." },
      { base: "see", es: "ver", past: "saw", sound: "irregular", example: "I saw my cousins at the party." },
      { base: "dance", es: "bailar", past: "danced", sound: "t", example: "They danced until 2 a.m." },
      { base: "buy", es: "comprar", past: "bought", sound: "irregular", example: "He bought gifts for everybody." },
      { base: "visit", es: "visitar", past: "visited", sound: "id", example: "We visited my grandmother on Christmas Day." },
      { base: "drink", es: "beber / tomar", past: "drank", sound: "irregular", example: "My uncle drank too much coffee." },
      { base: "cook", es: "cocinar", past: "cooked", sound: "t", example: "My dad cooked the turkey." },
      { base: "sleep", es: "dormir", past: "slept", sound: "irregular", example: "I slept until noon on December 25th." },
    ],
    flips: [
      { affirmative: "We celebrated Christmas at my grandma's house. (Where?)", negative: "We didn't celebrate Christmas at my grandma's house.", question: "Where did you celebrate Christmas?" },
      { affirmative: "She is going to travel in December. (When?)", negative: "She is not going to travel in December.", question: "When is she going to travel?" },
      { affirmative: "They bought a big tree last year.", negative: "They didn't buy a big tree last year.", question: "Did they buy a big tree last year?" },
      { affirmative: "I will cook dinner on the 24th.", negative: "I will not cook dinner on the 24th.", question: "Will you cook dinner on the 24th?" },
    ],
  },

  bossBattle: {
    name: "The Time Twister",
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
      { name: "❤️ Heal", effect: "The Time Twister recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Will going to? I twist your tenses and your brains!",
      "Yesterday you LEARN? Yesterday you LEARNED... nothing!",
      "Gonna TO? The TO is already inside gonna, little humans.",
      "Last Christmas you lost. Next Christmas you WILL lose.",
      "Past, future... you don't know what day it is!",
    ],
  },

  punishments: [
    "Say 3 things you did in Basic 3 and 3 things you will do in Basic 4.",
    "Say what you did last Christmas in 4 sentences.",
    "Say 5 promises with WILL for this month, fast!",
    "Convert these to WILL: 'I'm going to study', 'She is going to travel', 'They are going to win'.",
    "Say 6 verbs in the past with the -ED sound: /t/, /d/ or /ɪd/.",
    "Say 'I will win!' in 3 different voices.",
    "Describe a happy moment of your life in 15 seconds, in the past.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Ask your coach 2 questions in the past and 2 about the future.",
    "Say what you learned today in 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
