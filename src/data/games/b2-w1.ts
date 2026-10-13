import type { GamePack } from "./types";

// BASIC 2 · WEEK 1 — Simple present & daily routines. Day 1 intro (I/you/we/they, after the coaching session), Day 2 third-person rules,
// Day 3 yes/no questions (do/does), Day 4 Wh- questions, Day 5 How often. No present progressive yet.
export const B2_W1: GamePack = {
  level: "b2",
  week: 1,
  theme: "What is your daily routine?",
  teams: { suggestedNames: ["Red Foxes", "Blue Wolves", "Green Hawks", "Yellow Cobras"] },

  days: [
    { level: "b2", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple present: I / you / we / they · Daily routines", minutes: 10, note: "After the coaching session" },
    { level: "b2", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Third person: -s / -es / -ies · has / goes / does", minutes: 10 },
    { level: "b2", week: 1, day: 3, game: "build_person", title: "Build-a-Person — Daily routine", grammar: "He / She + verb-s · Yes/no questions: Does he...?", minutes: 10 },
    { level: "b2", week: 1, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Routine verbs · Wh- questions: What time / Where / What", minutes: 10 },
    { level: "b2", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Third-Person Troll", grammar: "Everything from the week · How often?", minutes: 10 },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Me levanto a las seis.", en: "I wake up at six.", alt: ["I get up at six.", "I wake up at 6."] },
      { tier: 1, es: "Trabajo de lunes a viernes.", en: "I work from Monday to Friday.", alt: ["I work Monday to Friday.", "I work Monday through Friday."] },
      { tier: 1, es: "Desayunamos a las siete.", en: "We have breakfast at seven.", alt: ["We eat breakfast at seven.", "We have breakfast at 7.", "We eat breakfast at 7."] },
      { tier: 1, es: "Ellos estudian inglés por la noche.", en: "They study English at night.", alt: ["They study English in the evening.", "They study English in the evenings."] },
      { tier: 2, es: "No tomo café por la mañana.", en: "I do not drink coffee in the morning.", alt: ["I don't drink coffee in the morning."] },
      { tier: 2, es: "Mis amigos juegan fútbol los sábados.", en: "My friends play soccer on Saturdays.", alt: ["My friends play soccer on Saturday."] },
      { tier: 2, es: "Me baño y me cepillo los dientes.", en: "I take a shower and I brush my teeth.", alt: ["I take a shower and brush my teeth."] },
      { tier: 2, es: "Usualmente almuerzo en la oficina.", en: "I usually have lunch at the office.", alt: ["I usually eat lunch at the office.", "Usually I have lunch at the office.", "I usually have lunch in the office."] },
      { tier: 3, es: "Llego a casa a las seis y ceno con mi familia.", en: "I get home at six and I have dinner with my family.", alt: ["I get home at six and have dinner with my family.", "I arrive home at six and I have dinner with my family."] },
      { tier: 3, es: "No trabajamos los domingos.", en: "We do not work on Sundays.", alt: ["We don't work on Sundays.", "We don't work on Sunday."] },
      { tier: 3, es: "Mis padres ven televisión todas las noches.", en: "My parents watch TV every night.", alt: ["My parents watch television every night."] },
      { tier: 3, es: "Me acuesto a las diez y media.", en: "I go to bed at ten thirty.", alt: ["I go to bed at 10:30.", "I go to bed at half past ten."] },
    ],
    echo: [
      { en: "I wake up at five, I take a shower and I go to work." },
      { en: "We have lunch at twelve and we get home at six." },
      { en: "My friends don't study on Saturdays." },
      { en: "I usually go to bed at eleven o'clock." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "She work at a call center.", right: "She works at a call center.", hint: "He / she / it → verb + S." },
      { wrong: "He go to the gym every day.", right: "He goes to the gym every day.", hint: "Go → goES." },
      { wrong: "My mom watchs TV at night.", right: "My mom watches TV at night.", hint: "-ch → -ES." },
      { wrong: "My brother studys English.", right: "My brother studies English.", hint: "Consonant + y → -IES." },
      { wrong: "She haves two jobs.", right: "She has two jobs.", hint: "Have → HAS." },
      { wrong: "He do his homework at five.", right: "He does his homework at five.", hint: "Do → DOES." },
      { wrong: "My sister plaies soccer.", right: "My sister plays soccer.", hint: "Vowel + y → just add S." },
      { wrong: "They works from Monday to Friday.", right: "They work from Monday to Friday.", hint: "They → no S." },
      { wrong: "He wake up at six and takes a shower.", right: "He wakes up at six and takes a shower.", hint: "Both verbs need the S." },
      { wrong: "My dad fixs cars.", right: "My dad fixes cars.", hint: "-x → -ES." },
      { wrong: "She eat breakfast at seven.", right: "She eats breakfast at seven.", hint: "She → verb + S." },
      { wrong: "I goes to bed at ten.", right: "I go to bed at ten.", hint: "I → no S." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "👨‍💻", title: "The Call Center Agent", facts: ["what time he wakes up", "what he has for breakfast", "where he works", "what time he starts work", "what he does at lunch", "what time he gets home", "what he does at night"], starters: ["He wakes up at ...", "He has ... for breakfast.", "He works at ...", "He starts work at ...", "At lunch he ...", "He gets home at ...", "At night he ..."], retell: "The other team asks 4 yes/no questions (Does he...?) and then retells his routine in 30 seconds." },
      { emoji: "👩‍⚕️", title: "The Night Nurse", facts: ["what time she wakes up", "where she works", "what time she starts work", "what she does in the morning", "what she eats", "what time she goes to bed", "what she does on Sundays"], starters: ["She wakes up at ...", "She works at ...", "She starts work at ...", "In the morning she ...", "She eats ...", "She goes to bed at ...", "On Sundays she ..."], retell: "The other team asks 4 yes/no questions (Does she...?) and then retells her routine in 30 seconds." },
      { emoji: "🧑‍🎓", title: "The Lazy Student", facts: ["what time she wakes up", "what she does NOT do in the morning", "where she studies", "what she does after class", "what she eats", "what she does at night", "what time she goes to bed"], starters: ["She wakes up at ...", "She doesn't ... in the morning.", "She studies at ...", "After class she ...", "She eats ...", "At night she ...", "She goes to bed at ..."], retell: "The other team asks 4 yes/no questions (Does she...?) and then retells her routine in 30 seconds." },
      { emoji: "🐕", title: "The Coach's Dog", facts: ["what time it wakes up", "what it eats", "what it does in the morning", "where it sleeps", "what it does when the coach works", "what it does NOT do", "what time it goes to bed"], starters: ["It wakes up at ...", "It eats ...", "In the morning it ...", "It sleeps ...", "When the coach works, it ...", "It doesn't ...", "It goes to bed at ..."], retell: "The other team asks 4 yes/no questions (Does it...?) and then retells the dog's day in 30 seconds." },
    ],
  },

  wordSprint: {
    words: [
      { es: "levantarse", en: "get up", alt: ["wake up", "to get up", "to wake up"], category: "routine" },
      { es: "bañarse", en: "take a shower", alt: ["to take a shower", "take a bath", "shower"], category: "routine" },
      { es: "cepillarse los dientes", en: "brush my teeth", alt: ["brush your teeth", "brush teeth", "to brush my teeth"], category: "routine" },
      { es: "desayunar", en: "have breakfast", alt: ["eat breakfast", "to have breakfast"], category: "routine" },
      { es: "ir al trabajo", en: "go to work", alt: ["to go to work"], category: "routine" },
      { es: "almorzar", en: "have lunch", alt: ["eat lunch", "to have lunch"], category: "routine" },
      { es: "llegar a casa", en: "get home", alt: ["arrive home", "to get home"], category: "routine" },
      { es: "cenar", en: "have dinner", alt: ["eat dinner", "to have dinner"], category: "routine" },
      { es: "acostarse", en: "go to bed", alt: ["to go to bed"], category: "routine" },
      { es: "usualmente", en: "usually", category: "time" },
      { es: "todos los días", en: "every day", category: "time" },
      { es: "por la mañana", en: "in the morning", category: "time" },
      { es: "por la noche", en: "at night", alt: ["in the evening"], category: "time" },
      { es: "los fines de semana", en: "on weekends", alt: ["on the weekend", "on the weekends", "at the weekend"], category: "time" },
      { es: "oficina", en: "office", category: "places" },
      { es: "gimnasio", en: "gym", category: "places" },
    ],
    flips: [
      { affirmative: "I wake up at six. (What time?)", negative: "I do not wake up at six.", question: "What time do you wake up?" },
      { affirmative: "She works at a call center. (Where?)", negative: "She does not work at a call center.", question: "Where does she work?" },
      { affirmative: "They have lunch at twelve. (What time?)", negative: "They do not have lunch at twelve.", question: "What time do they have lunch?" },
      { affirmative: "He studies English at night. (What?)", negative: "He does not study English at night.", question: "What does he study at night?" },
    ],
    numbers: [
      { say: "I wake up at five thirty", write: "5:30" },
      { say: "a quarter past seven", write: "7:15" },
      { say: "I get home at six forty-five", write: "6:45" },
      { say: "eight fifteen", write: "8:15" },
      { say: "half past twelve", write: "12:30" },
      { say: "ten forty", write: "10:40" },
    ],
  },

  bossBattle: {
    name: "The Third-Person Troll",
    hp: 100,
    lives: 3,
    rounds: [
      { kind: "translate", seconds: 90, items: 4 },
      { kind: "fix", seconds: 90, items: 4 },
      { kind: "word", seconds: 90, items: 4 },
      { kind: "person", seconds: 120, items: 1 },
    ],
    events: [
      { name: "🔥 Rage mode", effect: "For the next 3 items, wrong answers cost 2 lives instead of 1." },
      { name: "💎 Critical hit", effect: "The next correct answer deals double damage (10 HP)." },
      { name: "🔄 Swap", effect: "Teams swap their power cards." },
      { name: "🧊 Freeze", effect: "The team with more points can't answer the next item." },
      { name: "❤️ Heal", effect: "The troll recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "She WORK? Where is my S? Give me my S!",
      "He GO to the gym? He GOES... and you go home!",
      "She HAVES? Ha! She HAS... no chance.",
      "WatchS? StudyS? Delicious spelling!",
      "Does he...? DOES! Not DO! I eat your lives.",
    ],
  },

  punishments: [
    "Say your daily routine in 5 sentences, fast!",
    "Say what your coach does every day, in 4 sentences (He/She ...s).",
    "Say 5 verbs in third person: works, goes, watches...",
    "Ask your coach 3 questions with 'Do you...?' or 'Does your mom...?'",
    "Say what time you wake up, have lunch and go to bed, like a robot.",
    "Say 3 things you do NOT do in the morning.",
    "Act out your morning routine with no words; your team says it in English.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 'I wake up at five!' in 3 different voices.",
    "Answer: 'How often do you go to the gym?' and 'How often do you cook?' (every day / once a week / never).",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
