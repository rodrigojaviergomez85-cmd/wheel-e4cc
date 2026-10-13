import type { GamePack } from "./types";

// BASIC 4 · WEEK 4 — QUESTIONS AND MIXED TENSES · JOB INTERVIEW PRACTICE (Days 1–3). Days 4–5 = weekly evaluation (games after it).
// The final week of the Basic block: every game is interview-flavored and mixes all the tenses from B0–B4.
export const B4_W4: GamePack = {
  level: "b4",
  week: 4,
  theme: "The Interview",
  teams: { suggestedNames: ["Red Titans", "Blue Vikings", "Green Ninjas", "Yellow Pirates"] },

  days: [
    { level: "b4", week: 4, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Interview questions and answers in mixed tenses", minutes: 10 },
    { level: "b4", week: 4, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Interview answers · one error per sentence · all tenses", minutes: 10 },
    { level: "b4", week: 4, day: 3, game: "build_person", title: "Build-a-Person — The Candidate", grammar: "Job interview: past · present · future · Round 2: the other team interviews", minutes: 10 },
    { level: "b4", week: 4, day: 4, game: "past_sprint", title: "Past Form Sprint + Flip It", grammar: "Regular + irregular 50/50 · Interview flips in mixed tenses", minutes: 10, note: "After the evaluation" },
    { level: "b4", week: 4, day: 5, game: "boss_battle", title: "Final Boss — Mr. Recruiter", grammar: "Everything from Basic 0 to Basic 4", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Cuénteme sobre usted.", en: "Tell me about yourself." },
      { tier: 1, es: "Trabajo en una tienda de ropa.", en: "I work at a clothing store.", alt: ["I work in a clothing store.", "I work at a clothes store."] },
      { tier: 1, es: "¿Por qué quiere este trabajo?", en: "Why do you want this job?" },
      { tier: 1, es: "Estudié inglés por cuatro meses.", en: "I studied English for four months." },
      { tier: 2, es: "¿Dónde trabajaba antes?", en: "Where did you work before?" },
      { tier: 2, es: "Soy responsable y aprendo rápido.", en: "I am responsible and I learn fast.", alt: ["I'm responsible and I learn fast.", "I am responsible and I learn quickly."] },
      { tier: 2, es: "¿Qué va a hacer en cinco años?", en: "What are you going to do in five years?", alt: ["What will you do in five years?"] },
      { tier: 2, es: "Ahora estoy buscando un trabajo de tiempo completo.", en: "Right now I am looking for a full-time job.", alt: ["Right now I'm looking for a full-time job.", "I am looking for a full-time job right now."] },
      { tier: 3, es: "En mi último trabajo atendía clientes y resolvía problemas.", en: "In my last job I helped customers and solved problems.", alt: ["At my last job I helped customers and solved problems.", "In my last job I took care of customers and solved problems.", "In my last job I assisted customers and solved problems."] },
      { tier: 3, es: "¿Está disponible para trabajar los fines de semana? Sí, estoy disponible.", en: "Are you available to work on weekends? Yes, I am available.", alt: ["Are you available to work weekends? Yes, I am.", "Are you available to work on weekends? Yes, I'm available."] },
      { tier: 3, es: "Mi jefe anterior era muy exigente, pero aprendí mucho con él.", en: "My last boss was very demanding, but I learned a lot from him.", alt: ["My previous boss was very demanding, but I learned a lot from him.", "My last boss was very demanding, but I learned a lot with him."] },
      { tier: 3, es: "Empezaré el lunes y daré lo mejor de mí.", en: "I will start on Monday and I will do my best.", alt: ["I'll start on Monday and I'll do my best.", "I will start on Monday and I will give my best."] },
    ],
    echo: [
      { en: "Good morning, my name is Ana and I am here for the interview." },
      { en: "I worked at a restaurant for two years and I learned to work under pressure." },
      { en: "Right now I am studying English and I am going to finish in December." },
      { en: "Thank you for your time. When will you call me?" },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I have 24 years old.", right: "I am 24 years old.", hint: "Age → AM." },
      { wrong: "I worked in a call center during two years.", right: "I worked in a call center for two years.", hint: "Duration → FOR." },
      { wrong: "Right now I am study English at E4CC.", right: "Right now I am studying English at E4CC.", hint: "AM + verb-ING." },
      { wrong: "In my last job I was answer calls.", right: "In my last job I answered calls.", hint: "Simple past: answerED." },
      { wrong: "Why you want to work here?", right: "Why do you want to work here?", hint: "Why DO you." },
      { wrong: "I going to learn fast.", right: "I am going to learn fast.", hint: "Going to needs AM / IS / ARE." },
      { wrong: "My boss say I am a good worker.", right: "My boss says I am a good worker.", hint: "My boss → sayS." },
      { wrong: "Yesterday I send my resume.", right: "Yesterday I sent my resume.", hint: "Send → SENT." },
      { wrong: "I am agree with my team.", right: "I agree with my team.", hint: "Agree is a verb: I agree." },
      { wrong: "Do you available on weekends?", right: "Are you available on weekends?", hint: "Available → ARE you." },
      { wrong: "I didn't had experience, but I learned fast.", right: "I didn't have experience, but I learned fast.", hint: "After didn't, base verb." },
      { wrong: "I am a person very responsible.", right: "I am a very responsible person.", hint: "Adjective BEFORE the noun." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "🧑‍💼", title: "The Candidate: Luis", facts: ["his age and where he lives", "what he does now", "where he worked before and for how long", "what he was doing at 8 a.m. today", "why he wants the job", "two adjectives that describe him", "what he will do in this job"], starters: ["Luis is ... years old and he lives in ...", "Now he ...", "Before, he worked at ... for ...", "At 8 a.m. today he was ...", "He wants the job because ...", "He is ... and ...", "In this job he will ..."], retell: "Round 2 — THE INTERVIEW: the other team asks Luis 6 questions in mixed tenses (Where did you work? What do you do now? Why do you want this job? What will you do...?) and the first team answers as Luis." },
      { emoji: "👩‍💼", title: "The Candidate: Marta", facts: ["her age and where she is from", "what she does every day", "what she did at her last job", "what she was doing before the interview", "why she left her last job", "two adjectives that describe her", "what she is going to do in five years"], starters: ["Marta is ... and she is from ...", "Every day she ...", "At her last job she ...", "Before the interview she was ...", "She left her last job because ...", "She is ... and ...", "In five years she is going to ..."], retell: "Round 2 — THE INTERVIEW: the other team asks Marta 6 questions in mixed tenses (What do you do every day? What did you do at your last job? Why did you leave? Where will you be in five years?) and the first team answers as Marta." },
      { emoji: "🤖", title: "The Candidate: Robot 3000", facts: ["where it is from and who built it", "what it does every day", "what it did yesterday", "what it was doing at 3 a.m.", "what it doesn't do", "why it wants to work at a call center", "what it will do on its first day"], starters: ["Robot 3000 is from ... and ... built it.", "Every day it ...", "Yesterday it ...", "At 3 a.m. it was ...", "It doesn't ...", "It wants to work at a call center because ...", "On its first day it will ..."], retell: "Round 2 — THE INTERVIEW: the other team asks the robot 6 questions in mixed tenses (Who built you? What did you do yesterday? Do you sleep? What will you do first?) and the first team answers as the robot." },
      { emoji: "🦸", title: "The Candidate: Your Coach", facts: ["the coach's age and city", "what the coach does now", "what the coach did before E4CC", "what the coach was doing this morning", "why the coach wants a job at Google", "two adjectives that describe the coach", "what the coach will do with the first salary"], starters: ["The coach is ... and lives in ...", "Now the coach ...", "Before E4CC the coach ...", "This morning the coach was ...", "The coach wants a job at Google because ...", "The coach is ... and ...", "With the first salary the coach will ..."], retell: "Round 2 — THE INTERVIEW: the other team interviews the coach with 6 questions in mixed tenses; the coach answers and the class judges the tense of every answer." },
    ],
  },

  pastSprint: {
    verbs: [
      { base: "work", es: "trabajar", past: "worked", sound: "t", example: "I worked at a restaurant for two years." },
      { base: "get", es: "conseguir", past: "got", sound: "irregular", example: "She got the job last week." },
      { base: "help", es: "ayudar", past: "helped", sound: "t", example: "I helped customers every day." },
      { base: "send", es: "enviar", past: "sent", sound: "irregular", example: "He sent his resume yesterday." },
      { base: "learn", es: "aprender", past: "learned", sound: "d", example: "We learned a lot at E4CC." },
      { base: "leave", es: "dejar / irse", past: "left", sound: "irregular", example: "She left her last job in May." },
      { base: "answer", es: "contestar", past: "answered", sound: "d", example: "I answered the phone all day." },
      { base: "speak", es: "hablar", past: "spoke", sound: "irregular", example: "I spoke with the manager." },
      { base: "start", es: "empezar", past: "started", sound: "id", example: "He started working in 2023." },
      { base: "become", es: "convertirse en / llegar a ser", past: "became", sound: "irregular", example: "She became a supervisor." },
      { base: "solve", es: "resolver", past: "solved", sound: "d", example: "We solved the problem quickly." },
      { base: "tell", es: "decir / contar", past: "told", sound: "irregular", example: "The recruiter told me the salary." },
      { base: "finish", es: "terminar", past: "finished", sound: "t", example: "I finished Basic 4 last month." },
      { base: "feel", es: "sentirse", past: "felt", sound: "irregular", example: "I felt nervous in the interview." },
      { base: "need", es: "necesitar", past: "needed", sound: "id", example: "They needed a new agent." },
      { base: "win", es: "ganar (un juego)", past: "won", sound: "irregular", example: "Our team won the game." },
    ],
    flips: [
      { affirmative: "I worked at a bank for two years. (How long?)", negative: "I didn't work at a bank for two years.", question: "How long did you work at a bank?" },
      { affirmative: "She is studying English right now. (What ... studying?)", negative: "She is not studying English right now.", question: "What is she studying right now?" },
      { affirmative: "He wants to work at a call center. (Where?)", negative: "He doesn't want to work at a call center.", question: "Where does he want to work?" },
      { affirmative: "They will start on Monday. (When?)", negative: "They will not start on Monday.", question: "When will they start?" },
    ],
  },

  bossBattle: {
    name: "Mr. Recruiter — Final Boss",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "pastform", seconds: 90, items: 4 },
      { kind: "person", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "Mr. Recruiter recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Tell me about yourself... in the wrong tense, and you're out.",
      "I HAVE 24 years? Next candidate, please!",
      "Right now I STUDY? Right now you are LOSING.",
      "Five months of English and you still forget the S? Interesting...",
      "Beat me and you get the job. Lose... and you start Basic 0 again!",
    ],
  },

  punishments: [
    "Answer 'Tell me about yourself' in 20 seconds with 3 tenses.",
    "Say 3 adjectives that describe you at work and why.",
    "Say what you did at your last job (or school) in 3 sentences.",
    "Ask your coach 4 interview questions in 4 different tenses.",
    "Say what you will do in this company in 5 years, 3 sentences.",
    "Say 'Why do you want this job?' like a boss, a robot and a grandma.",
    "Give 3 reasons to hire you as a coach at E4CC.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say your personal information like in an interview: name, age, city, job.",
    "Say the sentence 'I worked, I work, I am working, I will work' with examples, fast!",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
