import type { GamePack } from "./types";

// EAGLES · WEEK 1 — Day 1 coaching day + simple past (game after the session), Day 2 modal verbs (could / might / should / must),
// Day 3 modals for advice and recommendations, Day 4 semi-modals (have to / need to), Day 5 second conditional + grammar test.
// Role-play: convince your friend to go to a party.
export const EAGLES_W1: GamePack = {
  level: "eagles",
  week: 1,
  theme: "You should, you must, you have to",
  teams: { suggestedNames: ["Red Eagles", "Blue Falcons", "Green Hawks", "Golden Condors"] },

  days: [
    { level: "eagles", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple past review · First day at E4CC", minutes: 10, note: "After the coaching session" },
    { level: "eagles", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Modal verbs: could / might / should / must + base verb", minutes: 10 },
    { level: "eagles", week: 1, day: 3, game: "story_heist", title: "Story Heist — The Advice Chain", grammar: "Advice and recommendations with modals", minutes: 10 },
    { level: "eagles", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Semi-modals: have to / need to · Requirements & processes", minutes: 10 },
    { level: "eagles", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Modal Minotaur", grammar: "Everything from the week", minutes: 10, note: "After the grammar test" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "El primer día de clase estaba muy nervioso.", en: "On my first day of class I was very nervous.", alt: ["On the first day of class I was very nervous.", "I was very nervous on my first day of class."] },
      { tier: 1, es: "Ayer trabajé doce horas y no almorcé.", en: "Yesterday I worked twelve hours and I didn't have lunch.", alt: ["Yesterday I worked for twelve hours and I didn't eat lunch.", "I worked twelve hours yesterday and didn't have lunch.", "Yesterday I worked twelve hours and didn't have lunch."] },
      { tier: 1, es: "¿A qué hora te fuiste de la fiesta?", en: "What time did you leave the party?", alt: ["At what time did you leave the party?"] },
      { tier: 1, es: "Mi coach no nos dejó hablar en español.", en: "My coach didn't let us speak Spanish.", alt: ["My coach did not let us speak Spanish.", "My coach didn't let us talk in Spanish.", "My coach didn't let us speak in Spanish."] },
      { tier: 2, es: "Cuando llegué a E4CC no entendía nada, pero hice amigos.", en: "When I arrived at E4CC I didn't understand anything, but I made friends.", alt: ["When I got to E4CC I didn't understand anything, but I made friends."] },
      { tier: 2, es: "Perdimos el bus, así que tomamos un taxi.", en: "We missed the bus, so we took a taxi.", alt: ["We missed the bus, so we got a taxi."] },
      { tier: 2, es: "Ella rompió su teléfono y compró uno nuevo.", en: "She broke her phone and bought a new one.", alt: ["She broke her phone and she bought a new one."] },
      { tier: 2, es: "¿Por qué no viniste a la clase de ayer?", en: "Why didn't you come to yesterday's class?", alt: ["Why didn't you come to class yesterday?"] },
      { tier: 3, es: "Aunque estaba cansado, terminé la tarea antes de dormirme.", en: "Although I was tired, I finished the homework before I fell asleep.", alt: ["Even though I was tired, I finished my homework before falling asleep.", "Although I was tired, I finished my homework before I fell asleep."] },
      { tier: 3, es: "Mi amigo me convenció de ir a la fiesta y la pasamos increíble.", en: "My friend convinced me to go to the party and we had an amazing time.", alt: ["My friend convinced me to go to the party and we had an incredible time.", "My friend talked me into going to the party and we had an amazing time."] },
      { tier: 3, es: "El coach nos explicó las reglas y después empezamos la primera actividad.", en: "The coach explained the rules to us and then we started the first activity.", alt: ["The coach explained the rules and then we started the first activity.", "The coach explained the rules to us and after that we began the first activity."] },
      { tier: 3, es: "No sabía qué decir, así que solo sonreí y dije mi nombre.", en: "I didn't know what to say, so I just smiled and said my name.", alt: ["I did not know what to say, so I only smiled and said my name."] },
    ],
    echo: [
      { en: "On my first day I forgot my name, my coach laughed and everybody relaxed." },
      { en: "We studied until midnight and we still failed the quiz." },
      { en: "She didn't want to speak, but after a week she never stopped talking." },
      { en: "I took the wrong bus, arrived late and sat in the wrong classroom." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "You should to study more.", right: "You should study more.", hint: "Modal + base verb, no TO." },
      { wrong: "She cans speak three languages.", right: "She can speak three languages.", hint: "Modals never take -S." },
      { wrong: "He must to see a doctor.", right: "He must see a doctor.", hint: "Must + base verb." },
      { wrong: "You might to win the prize.", right: "You might win the prize.", hint: "Might + base verb." },
      { wrong: "I couldn't went to Peru last year.", right: "I couldn't go to Peru last year.", hint: "After a modal, base verb." },
      { wrong: "Do you can help me?", right: "Can you help me?", hint: "Questions: modal first, no DO." },
      { wrong: "Tom should stops smoking.", right: "Tom should stop smoking.", hint: "After should, base verb." },
      { wrong: "You don't should eat that.", right: "You shouldn't eat that.", hint: "Negative: modal + NOT." },
      { wrong: "She might be sick, she must goes home.", right: "She might be sick, she must go home.", hint: "Must + base verb." },
      { wrong: "We could to take a taxi.", right: "We could take a taxi.", hint: "Could + base verb." },
      { wrong: "You must not to smoke here.", right: "You must not smoke here.", hint: "Must not + base verb." },
      { wrong: "Should I to call the doctor?", right: "Should I call the doctor?", hint: "Should I + base verb." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Advice chain: Tom is addicted to cigarettes and video games, he never sleeps and he eats pizza every day. Give him advice. (Round 1: He should..., he must..., he could...)", retellAs: "Round 2: the other team says what Tom SHOULDN'T / MUSTN'T do (He shouldn't..., he must not...). Round 3: the other team plays Tom and answers: 'I can't because...' — and the first team replies with a new piece of advice." },
      { prompt: "Advice chain: Aria wants to travel to Peru but she has no money, no passport and her boss says no. What could she do? (Round 1: She could..., she might..., she should...)", retellAs: "Round 2: the other team says what she MUST do first (She must..., she should ... first). Round 3: the other team retells the plan as Aria ('First I should..., then I could...')." },
      { prompt: "Advice chain: Your best friend doesn't want to go to the party tonight. Convince him or her. (Round 1: You should come because..., you could..., you might meet...)", retellAs: "Round 2: the other team plays the friend and gives excuses (I can't because..., I must..., I should...). Round 3: the first team answers every excuse with a solution (You could..., we might...)." },
      { prompt: "Advice chain: Your coach is a terrible student: late, no homework, phone in class. Give advice using modals. (Round 1: He/She should..., must..., shouldn't...)", retellAs: "Round 2: the other team says what the coach COULD do to be a good student (He/She could...). Round 3: the other team retells the advice as the coach ('OK, I should..., I will...')." },
    ],
  },

  wordSprint: {
    words: [
      { es: "pasaporte", en: "passport", category: "requirements" },
      { es: "visa", en: "visa", category: "requirements" },
      { es: "requisito", en: "requirement", category: "requirements" },
      { es: "cita (en la embajada)", en: "appointment", category: "requirements" },
      { es: "llenar un formulario", en: "fill out a form", alt: ["fill in a form", "to fill out a form"], category: "requirements" },
      { es: "pagar la tarifa", en: "pay the fee", alt: ["to pay the fee"], category: "requirements" },
      { es: "entrevista", en: "interview", category: "requirements" },
      { es: "solicitar", en: "apply", alt: ["to apply", "apply for", "request"], category: "requirements" },
      { es: "dejar de fumar", en: "quit smoking", alt: ["stop smoking", "to quit smoking"], category: "advice" },
      { es: "hacer ejercicio", en: "exercise", alt: ["work out", "do exercise", "to exercise"], category: "advice" },
      { es: "consejo", en: "advice", alt: ["a piece of advice", "tip"], category: "advice" },
      { es: "hábito", en: "habit", category: "advice" },
      { es: "adicto a", en: "addicted to", category: "advice" },
      { es: "saludable", en: "healthy", category: "advice" },
      { es: "obligatorio", en: "required", alt: ["mandatory", "compulsory", "obligatory"], category: "requirements" },
      { es: "convencer", en: "convince", alt: ["to convince", "persuade"], category: "advice" },
    ],
    flips: [
      { affirmative: "You have to get a visa to travel to the US. (What?)", negative: "You don't have to get a visa to travel to the US.", question: "What do you have to get to travel to the US?" },
      { affirmative: "She needs to fill out a form. (What ... do?)", negative: "She doesn't need to fill out a form.", question: "What does she need to do?" },
      { affirmative: "They have to pay the fee today.", negative: "They don't have to pay the fee today.", question: "Do they have to pay the fee today?" },
      { affirmative: "He has to wake up at five because of his shift. (Why?)", negative: "He doesn't have to wake up at five.", question: "Why does he have to wake up at five?" },
    ],
    numbers: [
      { say: "the visa fee is one hundred eighty-five dollars", write: "$185" },
      { say: "you have to wait ninety days", write: "90" },
      { say: "the appointment is at seven forty-five", write: "7:45" },
      { say: "he smokes twenty cigarettes a day", write: "20" },
      { say: "the passport is valid for ten years", write: "10" },
      { say: "you need to save two thousand five hundred dollars", write: "$2,500" },
    ],
  },

  bossBattle: {
    name: "The Modal Minotaur",
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
      { name: "❤️ Heal", effect: "The Minotaur recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "You should TO study? There is no TO in my labyrinth!",
      "She CANS? Modals never take an S. Never!",
      "If you won the lottery, you would still lose to me.",
      "You must not... you MUST NOT... escape.",
      "Advice for you: you should give up. Ha!",
    ],
  },

  punishments: [
    "Give your coach 3 pieces of advice with SHOULD, MUST and COULD.",
    "Say 4 things you have to do before traveling to the US.",
    "Convince your coach to go to a party tonight in 15 seconds.",
    "Say 2 things you must NOT do in class and 2 things you don't have to do.",
    "Say what Tom should do to quit smoking, 3 sentences.",
    "Say 'You should study more!' like a mom, a boss and a robot.",
    "Tell the story of your first day at E4CC in 15 seconds, in the past.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Give advice to a friend who wants to be fit: 4 sentences.",
    "Say what you could do this weekend with 50 dollars, 3 ideas.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
