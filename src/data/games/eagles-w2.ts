import type { GamePack } from "./types";

// EAGLES · WEEK 2 — Day 1 past & present progressive, Day 2 present perfect (Have you ever...?), Day 3 present perfect progressive
// (What have you been doing lately?), Day 4 simple past vs. present perfect vs. present perfect progressive + customer service role-play, Day 5 evaluations.
export const EAGLES_W2: GamePack = {
  level: "eagles",
  week: 2,
  theme: "Have you ever...?",
  teams: { suggestedNames: ["Red Eagles", "Blue Falcons", "Green Hawks", "Golden Condors"] },

  days: [
    { level: "eagles", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Past progressive vs. present progressive · What was happening?", minutes: 10 },
    { level: "eagles", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: have / has + participle · ever / never", minutes: 10 },
    { level: "eagles", week: 2, day: 3, game: "story_heist", title: "Story Heist — Confessions", grammar: "Have you ever...? · What have you been doing lately?", minutes: 10 },
    { level: "eagles", week: 2, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Simple past vs. present perfect vs. perfect progressive", minutes: 10 },
    { level: "eagles", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Perfect Phantom", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Estaba lloviendo cuando salí de la oficina.", en: "It was raining when I left the office.", alt: ["It was raining when I got out of the office."] },
      { tier: 1, es: "Ahora mismo estoy esperando una llamada importante.", en: "Right now I am waiting for an important call.", alt: ["I am waiting for an important call right now.", "Right now I'm waiting for an important call."] },
      { tier: 1, es: "¿Qué estabas haciendo a las diez de la noche?", en: "What were you doing at ten at night?", alt: ["What were you doing at 10 p.m.?", "What were you doing at ten o'clock at night?"] },
      { tier: 1, es: "Los agentes estaban atendiendo llamadas cuando se fue la luz.", en: "The agents were taking calls when the power went out.", alt: ["The agents were answering calls when the power went out.", "The agents were taking calls when the lights went out."] },
      { tier: 2, es: "El año pasado no estaba estudiando inglés; este año estoy estudiando todos los días.", en: "Last year I wasn't studying English; this year I am studying every day.", alt: ["Last year I was not studying English, this year I'm studying every day."] },
      { tier: 2, es: "Mientras ella cocinaba, los niños estaban peleando por el control remoto.", en: "While she was cooking, the kids were fighting over the remote control.", alt: ["While she was cooking, the kids were fighting for the remote control.", "While she was cooking the children were fighting over the remote."] },
      { tier: 2, es: "¿Está funcionando tu internet? El mío se está cayendo a cada rato.", en: "Is your internet working? Mine is dropping all the time.", alt: ["Is your internet working? Mine keeps dropping.", "Is your internet working? Mine keeps going down.", "Is your internet working? Mine is going down all the time."] },
      { tier: 2, es: "Un actor siempre está aprendiendo líneas nuevas.", en: "An actor is always learning new lines.", alt: ["An actor is always learning new lines of dialogue."] },
      { tier: 3, es: "Estaba manejando al trabajo cuando me di cuenta de que mi teléfono estaba en casa.", en: "I was driving to work when I realized my phone was at home.", alt: ["I was driving to work when I realized that my phone was at home.", "I was driving to work when I realized I didn't have my phone."] },
      { tier: 3, es: "Mi jefe estaba gritando, el cliente estaba llorando y yo solo estaba sonriendo.", en: "My boss was yelling, the customer was crying and I was just smiling.", alt: ["My boss was shouting, the customer was crying and I was just smiling.", "My boss was yelling, the client was crying and I was only smiling."] },
      { tier: 3, es: "Estamos buscando a alguien que esté disponible para el turno de noche.", en: "We are looking for someone who is available for the night shift.", alt: ["We're looking for somebody who is available for the night shift.", "We are looking for a person who is available for the night shift."] },
      { tier: 3, es: "¿Qué estaba pasando en tu casa anoche? Los vecinos estaban llamando a la policía.", en: "What was happening at your house last night? The neighbors were calling the police.", alt: ["What was going on at your house last night? The neighbors were calling the police."] },
    ],
    echo: [
      { en: "At nine last night I was taking calls while my coworkers were having dinner." },
      { en: "Right now the whole class is listening, nobody is sleeping, I hope." },
      { en: "While the supervisor was talking, the new agent was texting under the desk." },
      { en: "This year I am working from home and studying English at night." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Have you ever went to Guatemala?", right: "Have you ever been to Guatemala?", hint: "Have + PARTICIPLE: been." },
      { wrong: "I have saw that movie three times.", right: "I have seen that movie three times.", hint: "See → seen." },
      { wrong: "She has never eat sushi.", right: "She has never eaten sushi.", hint: "Eat → eaten." },
      { wrong: "Have you ever cheat on an exam?", right: "Have you ever cheated on an exam?", hint: "Cheat → cheatED." },
      { wrong: "He have worked here for two years.", right: "He has worked here for two years.", hint: "He → HAS." },
      { wrong: "She has never drive a motorcycle.", right: "She has never driven a motorcycle.", hint: "Drive → driven." },
      { wrong: "We haven't never been to Mexico.", right: "We have never been to Mexico.", hint: "Never is already negative." },
      { wrong: "Have you ever drank coffee at midnight?", right: "Have you ever drunk coffee at midnight?", hint: "Drink → drank → ?" },
      { wrong: "She has wrote three emails this morning.", right: "She has written three emails this morning.", hint: "Write → written." },
      { wrong: "Have they ever win a prize?", right: "Have they ever won a prize?", hint: "Win → won." },
      { wrong: "I have ever broken my phone.", right: "I have never broken my phone.", hint: "Affirmative sentence with ever? No — NEVER." },
      { wrong: "Has your mom ever visit the US?", right: "Has your mom ever visited the US?", hint: "Visit → visited." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Confessions: Your team is a group of spies. Confess crazy things you have done in your life. (Round 1: I have eaten..., I have never..., I have stolen...)", retellAs: "Round 2: the other team interrogates with 'Have you ever...?' (6 questions) and you answer: Yes, I have / No, I haven't + one detail in the simple past (Yes, I have. I did it in 2019.). Round 3: the other team retells the confessions in third person (He has..., she has never...)." },
      { prompt: "Confessions: Your coach has been acting strangely lately. What has he or she been doing? (Round 1: He/She has been sleeping in class..., has been eating..., has been learning...)", retellAs: "Round 2: the other team asks 6 questions with 'How long has the coach been...?' and 'What has the coach been doing?'. Round 3: the other team says what the coach HASN'T been doing (He/She hasn't been...)." },
      { prompt: "Confessions: You have been doing crazy things to get hired at Google. What have you been doing? (Round 1: I have been sending..., I have been learning..., I have been calling...)", retellAs: "Round 2: the other team asks 6 questions mixing tenses (How long have you been...? Have you ever...? What did you do yesterday?). Round 3: the other team retells it as a news report (This candidate has been...)." },
      { prompt: "Confessions: Customer service nightmare: a customer has been calling your call center for a week. What has happened? (Round 1: The customer has called..., the agent has been trying..., nobody has answered...)", retellAs: "Round 2: the other team plays the customer and complains with present perfect (I have called five times! I have been waiting for...). Round 3: the first team answers like a professional agent (I understand, we have checked..., I have been working on it...)." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "go", es: "ir", past: "went", participle: "gone", sound: "irregular", example: "She has gone to the bank; she will be back soon." },
      { base: "eat", es: "comer", past: "ate", participle: "eaten", sound: "irregular", example: "Have you ever eaten sushi?" },
      { base: "see", es: "ver", past: "saw", participle: "seen", sound: "irregular", example: "She has seen that movie twice." },
      { base: "work", es: "trabajar", past: "worked", participle: "worked", sound: "t", example: "He has worked here for two years." },
      { base: "write", es: "escribir", past: "wrote", participle: "written", sound: "irregular", example: "I have written three emails today." },
      { base: "be", es: "ser / estar", past: "was / were", participle: "been", sound: "irregular", example: "Have you ever been to Mexico?" },
      { base: "do", es: "hacer", past: "did", participle: "done", sound: "irregular", example: "We have done our homework." },
      { base: "live", es: "vivir", past: "lived", participle: "lived", sound: "d", example: "They have lived in San Salvador since 2020." },
      { base: "break", es: "romper", past: "broke", participle: "broken", sound: "irregular", example: "I have broken my phone twice." },
      { base: "take", es: "tomar / llevar", past: "took", participle: "taken", sound: "irregular", example: "She has taken the test already." },
      { base: "study", es: "estudiar", past: "studied", participle: "studied", sound: "d", example: "He has studied English for a year." },
      { base: "drink", es: "beber", past: "drank", participle: "drunk", sound: "irregular", example: "I have drunk three coffees today." },
      { base: "find", es: "encontrar", past: "found", participle: "found", sound: "irregular", example: "Have you ever found money on the street?" },
      { base: "steal", es: "robar", past: "stole", participle: "stolen", sound: "irregular", example: "Nobody has stolen my ideas... yet." },
      { base: "cheat", es: "hacer trampa", past: "cheated", participle: "cheated", sound: "id", example: "Have you ever cheated on an exam?" },
      { base: "win", es: "ganar (un premio)", past: "won", participle: "won", sound: "irregular", example: "Our team has won three games." },
    ],
    flips: [
      { affirmative: "I have been to Guatemala twice. (How many times?)", negative: "I have never been to Guatemala.", question: "How many times have you been to Guatemala?" },
      { affirmative: "She has been working here since 2022. (How long?)", negative: "She hasn't been working here since 2022.", question: "How long has she been working here?" },
      { affirmative: "They went to the beach last weekend.", negative: "They didn't go to the beach last weekend.", question: "Did they go to the beach last weekend?" },
      { affirmative: "He has eaten sushi. (ever?)", negative: "He has never eaten sushi.", question: "Has he ever eaten sushi?" },
    ],
  },

  bossBattle: {
    name: "The Perfect Phantom",
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
      { name: "❤️ Heal", effect: "The Phantom recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Have you ever WENT? I have never BEEN so happy!",
      "I have SAW? I have SEEN a thousand students fail.",
      "Yesterday with present perfect? Delicious confusion.",
      "How long have you been losing? Since the first round!",
      "I have been haunting this class for years... and you have learned nothing.",
    ],
  },

  punishments: [
    "Confess 3 things you have done and 3 things you have never done.",
    "Ask your coach 3 questions with 'Have you ever...?'",
    "Say what you have been doing this week to improve your English, 3 sentences.",
    "Say 8 past participles in 8 seconds: gone, eaten, seen...",
    "Say what you were doing yesterday at 6, 8 and 10 p.m.",
    "Say 'Have you ever been to Paris?' like a detective, a pirate and a baby.",
    "Say how long you have been doing 3 things (I have been studying English for...).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Play a customer: complain about something with 3 sentences in present perfect.",
    "Say 4 things that are happening in the world right now.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
