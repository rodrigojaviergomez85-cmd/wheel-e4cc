import type { GamePack } from "./types";

// SHARKS · WEEK 4 — Day 1 simple future (first paycheck, plans for next year), Day 2 present perfect with already / yet / so far / since / for,
// Day 3 present perfect progressive (How long have you been...?), Day 4 simple past vs. present perfect vs. perfect progressive (life interview, love & romance), Day 5 evaluations.
export const SHARKS_W4: GamePack = {
  level: "sharks",
  week: 4,
  theme: "Paychecks, plans & love stories",
  teams: { suggestedNames: ["Great Whites", "Hammerheads", "Bull Sharks", "Blue Makos"] },

  days: [
    { level: "sharks", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple future: will / won't · First paycheck & plans for next year", minutes: 10 },
    { level: "sharks", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Present perfect: already / yet / so far / since / for", minutes: 10 },
    { level: "sharks", week: 4, day: 3, game: "story_heist", title: "Story Heist — Long Time No See", grammar: "How long have you been...? · What have you been doing lately?", minutes: 10 },
    { level: "sharks", week: 4, day: 4, game: "past_sprint", title: "Participle Sprint + Flip It", grammar: "Past participles · Past vs. perfect vs. perfect progressive", minutes: 10 },
    { level: "sharks", week: 4, day: 5, game: "boss_battle", title: "Boss Battle — The Deep-Sea Emperor", grammar: "Everything from the month", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Con mi primer sueldo llevaré a mi mamá a cenar.", en: "With my first paycheck I will take my mom out to dinner.", alt: ["With my first paycheck I'll take my mom to dinner.", "With my first salary I will take my mom out to dinner.", "With my first paycheck I will take my mother to dinner."] },
      { tier: 1, es: "No gastaré todo mi dinero en ropa.", en: "I won't spend all my money on clothes.", alt: ["I will not spend all my money on clothes.", "I won't spend all of my money on clothes."] },
      { tier: 1, es: "¿Dónde vivirás el próximo año?", en: "Where will you live next year?" },
      { tier: 1, es: "Mañana lloverá, así que llevaré paraguas.", en: "It will rain tomorrow, so I will take an umbrella.", alt: ["Tomorrow it will rain, so I'll bring an umbrella.", "It'll rain tomorrow, so I'll take an umbrella.", "Tomorrow it will rain, so I will take an umbrella."] },
      { tier: 2, es: "El próximo año aprenderé a manejar y sacaré mi licencia.", en: "Next year I will learn to drive and I will get my license.", alt: ["Next year I'll learn to drive and get my license.", "Next year I will learn how to drive and get my driver's license."] },
      { tier: 2, es: "¿Quién te ayudará a mudarte el sábado?", en: "Who will help you move on Saturday?", alt: ["Who will help you to move on Saturday?", "Who'll help you move on Saturday?"] },
      { tier: 2, es: "Él no fumará más y empezará a correr por las mañanas.", en: "He won't smoke anymore and he will start running in the mornings.", alt: ["He will not smoke anymore and he'll start to run in the morning.", "He won't smoke anymore and he'll start running in the morning."] },
      { tier: 2, es: "Creo que la IA no reemplazará a los buenos agentes.", en: "I don't think AI will replace good agents.", alt: ["I think AI won't replace good agents.", "I think AI will not replace good agents.", "I don't think AI will replace the good agents."] },
      { tier: 3, es: "Pagaré mis deudas primero y después le compraré una refrigeradora nueva a mi abuela.", en: "I will pay my debts first and then I will buy my grandmother a new refrigerator.", alt: ["I'll pay my debts first and then I'll buy a new fridge for my grandma.", "I will pay my debts first and then I will buy a new refrigerator for my grandmother."] },
      { tier: 3, es: "Mi novia y yo nos casaremos en diciembre, pero no tendremos una fiesta grande.", en: "My girlfriend and I will get married in December, but we won't have a big party.", alt: ["My girlfriend and I will get married in December, but we will not have a big party."] },
      { tier: 3, es: "Dentro de cinco años hablaré inglés todo el día y me pagarán en dólares.", en: "In five years I will speak English all day and they will pay me in dollars.", alt: ["Five years from now I'll speak English all day and they'll pay me in dollars.", "In five years I'll speak English all day and they'll pay me in dollars."] },
      { tier: 3, es: "El lunes me levantaré a las cinco, haré ejercicio y no llegaré tarde nunca más.", en: "On Monday I will get up at five, exercise and never be late again.", alt: ["On Monday I'll get up at five, exercise and I'll never be late again.", "On Monday I will get up at five, I will exercise and I won't be late ever again.", "On Monday I will wake up at five, work out and I won't be late anymore.", "On Monday I will get up at five, I will exercise and I won't be late anymore."] },
    ],
    echo: [
      { en: "With my first paycheck I will buy pizza for everyone, and then I will cry when I see my bank account." },
      { en: "Next year I will travel, I will save money and I won't buy another pair of shoes." },
      { en: "She will finish Sharks, she will fly to Eagles and nobody will stop her." },
      { en: "Tomorrow he'll wake up early, he'll call the recruiter and he won't hang up." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have always want to visit Japan.", right: "I have always wanted to visit Japan.", hint: "Have + PARTICIPLE." },
      { wrong: "He hasn't paid yet the bill.", right: "He hasn't paid the bill yet.", hint: "Where does YET go?" },
      { wrong: "We have been friends since six years.", right: "We have been friends for six years.", hint: "A period of time → not SINCE." },
      { wrong: "She has had that car for January.", right: "She has had that car since January.", hint: "A starting point → not FOR." },
      { wrong: "Have you eaten yet? No, I didn't.", right: "Have you eaten yet? No, I haven't.", hint: "Short answer: same auxiliary as the question." },
      { wrong: "So far we have win four games.", right: "So far we have won four games.", hint: "Win → ?" },
      { wrong: "How long she has lived in Santa Tecla?", right: "How long has she lived in Santa Tecla?", hint: "Question: HAS before the subject." },
      { wrong: "I have already see that episode.", right: "I have already seen that episode.", hint: "See → saw → ?" },
      { wrong: "My brother have already left the house.", right: "My brother has already left the house.", hint: "My brother = he → ?" },
      { wrong: "I haven't told my parents already.", right: "I haven't told my parents yet.", hint: "Negative sentence → not ALREADY." },
      { wrong: "I know her since 2015.", right: "I have known her since 2015.", hint: "From the past until now → present perfect." },
      { wrong: "We are married for ten years.", right: "We have been married for ten years.", hint: "Until now + FOR → present perfect." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 7,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Long time no see: Your team has been living on a desert island for a year. What have you been doing there? (Round 1: We have been eating..., I have been building..., we have been talking to...)", retellAs: "Round 2: the other team are reporters and ask 6 questions (How long have you been...? What have you been eating? Have you seen a ship yet?). Round 3: the other team says what you WILL do when you get home (They will...)." },
      { prompt: "Long time no see: Superman has been looking for a normal job. What has he been doing lately? (Round 1: He has been sending..., he has been practicing..., he has been hiding...)", retellAs: "Round 2: the other team interviews Superman (How long have you been looking for a job? Have you had an interview yet?). Round 3: the first team says what he will do with his first paycheck (He will...)." },
      { prompt: "Long time no see: You have been studying English for a long time. Tell the true or crazy things you have been doing to learn it. (Round 1: I have been singing..., I have been talking to my dog..., I have been watching...)", retellAs: "Round 2: the other team asks 6 questions (How long have you been studying English? What have you learned so far? What haven't you tried yet?). Round 3: the other team retells it in third person (She has been..., he hasn't ... yet)." },
      { prompt: "Long time no see: Two people have been dating for ten years and still aren't married. What have they been doing all this time? (Round 1: They have been saving..., he has been waiting for..., she has been planning...)", retellAs: "Round 2: the other team plays the family and asks 6 questions (How long have you been dating? Have you bought the ring yet? What have you been waiting for?). Round 3: both teams say what will happen at the wedding (They will..., the dog will...)." },
    ],
  },

  pastSprint: {
    mode: "participle",
    verbs: [
      { base: "make", es: "hacer / fabricar", past: "made", participle: "made", sound: "irregular", example: "She has made a lot of friends at E4CC." },
      { base: "tell", es: "decir / contar", past: "told", participle: "told", sound: "irregular", example: "I have told you that story a hundred times." },
      { base: "feel", es: "sentir", past: "felt", participle: "felt", sound: "irregular", example: "Have you ever felt scared on a bus?" },
      { base: "think", es: "pensar", past: "thought", participle: "thought", sound: "irregular", example: "I have thought about your idea, and I like it." },
      { base: "keep", es: "guardar / mantener", past: "kept", participle: "kept", sound: "irregular", example: "He has kept my secret for years." },
      { base: "leave", es: "irse / dejar", past: "left", participle: "left", sound: "irregular", example: "She has already left the office." },
      { base: "pay", es: "pagar", past: "paid", participle: "paid", sound: "irregular", example: "We haven't paid the rent yet." },
      { base: "send", es: "enviar", past: "sent", participle: "sent", sound: "irregular", example: "He has sent her flowers every month since May." },
      { base: "hear", es: "oír", past: "heard", participle: "heard", sound: "irregular", example: "Have you heard that song yet?" },
      { base: "give", es: "dar", past: "gave", participle: "given", sound: "irregular", example: "My boyfriend has given me the same gift twice." },
      { base: "begin", es: "comenzar", past: "began", participle: "begun", sound: "irregular", example: "The interview has already begun." },
      { base: "kiss", es: "besar", past: "kissed", participle: "kissed", sound: "t", example: "They have never kissed in public." },
      { base: "love", es: "amar", past: "loved", participle: "loved", sound: "d", example: "I have always loved scary movies." },
      { base: "decide", es: "decidir", past: "decided", participle: "decided", sound: "id", example: "She has decided to change her life." },
      { base: "practice", es: "practicar", past: "practiced", participle: "practiced", sound: "t", example: "We have practiced this role-play five times so far." },
      { base: "move", es: "mudarse / mover", past: "moved", participle: "moved", sound: "d", example: "He has moved three times so far." },
    ],
    flips: [
      { affirmative: "She has been dating Carlos for three years. (How long?)", negative: "She hasn't been dating Carlos for three years.", question: "How long has she been dating Carlos?" },
      { affirmative: "He has already paid the rent.", negative: "He hasn't paid the rent yet.", question: "Has he paid the rent yet?" },
      { affirmative: "They met at a wedding in 2019. (Where?)", negative: "They didn't meet at a wedding in 2019.", question: "Where did they meet in 2019?" },
      { affirmative: "I will spend my first paycheck on a new phone. (What ... on?)", negative: "I won't spend my first paycheck on a new phone.", question: "What will you spend your first paycheck on?" },
    ],
  },

  bossBattle: {
    name: "The Deep-Sea Emperor",
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
      { name: "❤️ Heal", effect: "The Emperor recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "SINCE six years? FOR six years! I have ruled the ocean SINCE the dinosaurs.",
      "You haven't defeated me YET. I have ALREADY ordered my victory dinner.",
      "How long have you been swimming in circles? Since the first round!",
      "I KNOW her since 2015? You HAVE KNOWN nothing, little fish.",
      "Beat me and you will fly with the Eagles. Lose and you will swim one more lap with me.",
    ],
  },

  punishments: [
    "Say 2 things you have already done today and 2 you haven't done yet.",
    "Say what you will do with your first paycheck: 3 sentences.",
    "Talk about something you have always wanted to do, in 15 seconds.",
    "Ask a classmate 3 different questions with 'How long have you been...?'",
    "Say 8 past participles in 8 seconds: made, told, felt...",
    "Say 'I haven't finished yet!' like a sleepy student, a superhero and a shark.",
    "Say how long you have been studying English and 2 things you have been doing to practice.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 3 plans for next year with WILL and 1 thing you WON'T do.",
    "Interview your coach: ask 3 questions about his or her life in 3 different tenses.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
