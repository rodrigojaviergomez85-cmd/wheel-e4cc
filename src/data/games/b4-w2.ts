import type { GamePack } from "./types";

// BASIC 4 · WEEK 2 — PAST & PRESENT, review future. Day 1 simple present / third person (family), Day 2 third person at work
// (call center agent), Day 3 simple past / past progressive (before going to bed), Day 4 listening test + simple past review, Day 5 evaluation.
export const B4_W2: GamePack = {
  level: "b4",
  week: 2,
  theme: "Past & Present",
  teams: { suggestedNames: ["Red Titans", "Blue Vikings", "Green Ninjas", "Yellow Pirates"] },

  days: [
    { level: "b4", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Simple present · Third person · Family routines", minutes: 10 },
    { level: "b4", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Third person at work · do / does · frequency", minutes: 10 },
    { level: "b4", week: 2, day: 3, game: "build_person", title: "Build-a-Person — Mixed Tenses", grammar: "Every day · Last night · Yesterday · Right now · Tomorrow", minutes: 10 },
    { level: "b4", week: 2, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Family & work words · Mixed-tense flips", minutes: 10, note: "After the listening test" },
    { level: "b4", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Routine Reaper", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Mi familia cena junta todos los días.", en: "My family has dinner together every day.", alt: ["My family eats dinner together every day."] },
      { tier: 1, es: "Mi papá trabaja en un banco.", en: "My dad works at a bank.", alt: ["My father works at a bank.", "My dad works in a bank."] },
      { tier: 1, es: "Mi hermana no come carne.", en: "My sister doesn't eat meat.", alt: ["My sister does not eat meat."] },
      { tier: 1, es: "Los domingos visitamos a mis abuelos.", en: "On Sundays we visit my grandparents.", alt: ["We visit my grandparents on Sundays."] },
      { tier: 2, es: "¿Qué hace tu mamá los fines de semana?", en: "What does your mom do on weekends?", alt: ["What does your mother do on weekends?", "What does your mom do on the weekend?", "What does your mom do on the weekends?"] },
      { tier: 2, es: "Mi sobrino siempre juega con el perro.", en: "My nephew always plays with the dog." },
      { tier: 2, es: "Mi tía cocina pupusas los sábados.", en: "My aunt cooks pupusas on Saturdays.", alt: ["My aunt makes pupusas on Saturdays."] },
      { tier: 2, es: "Nunca vemos televisión durante la cena.", en: "We never watch TV during dinner.", alt: ["We never watch television during dinner."] },
      { tier: 3, es: "Mi esposo se levanta a las cinco y lleva a los niños a la escuela.", en: "My husband wakes up at five and takes the kids to school.", alt: ["My husband gets up at five and takes the kids to school.", "My husband wakes up at five and takes the children to school."] },
      { tier: 3, es: "Mi primo estudia de noche porque trabaja de día.", en: "My cousin studies at night because he works during the day.", alt: ["My cousin studies at night because he works in the daytime.", "My cousin studies at night because she works during the day."] },
      { tier: 3, es: "¿Con qué frecuencia visita tu familia la playa? Dos veces al año.", en: "How often does your family visit the beach? Twice a year.", alt: ["How often does your family go to the beach? Twice a year.", "How often does your family visit the beach? Two times a year."] },
      { tier: 3, es: "Mi abuela no usa celular, pero mi abuelo tiene dos.", en: "My grandmother doesn't use a cell phone, but my grandfather has two.", alt: ["My grandma doesn't use a cell phone, but my grandpa has two.", "My grandmother doesn't use a phone, but my grandfather has two."] },
    ],
    echo: [
      { en: "My mom cooks, my dad washes the dishes and I do nothing." },
      { en: "Every Sunday my family goes to church and then we have lunch together." },
      { en: "My brother doesn't live with us; he lives in Santa Ana." },
      { en: "My grandfather watches the news every night at eight." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "She answer calls all day.", right: "She answers calls all day.", hint: "She → verb + S." },
      { wrong: "He don't work on Saturdays.", right: "He doesn't work on Saturdays.", hint: "He → DOESN'T." },
      { wrong: "Does she takes a break at ten?", right: "Does she take a break at ten?", hint: "After DOES, no S." },
      { wrong: "My supervisor always help me.", right: "My supervisor always helps me.", hint: "Supervisor → helpS." },
      { wrong: "The agent talk with customers every day.", right: "The agent talks with customers every day.", hint: "The agent → talkS." },
      { wrong: "She goes to work in bus.", right: "She goes to work by bus.", hint: "Not IN... how do you travel?" },
      { wrong: "What time does he starts his shift?", right: "What time does he start his shift?", hint: "After DOES, no S." },
      { wrong: "He has a break at 12 and eat lunch.", right: "He has a break at 12 and eats lunch.", hint: "Both verbs: has / eatS." },
      { wrong: "She goes usually to work by bus.", right: "She usually goes to work by bus.", hint: "Usually goes BEFORE the verb." },
      { wrong: "My coworker never arrive late.", right: "My coworker never arrives late.", hint: "Coworker → arriveS." },
      { wrong: "Does he like his job? Yes, he likes.", right: "Does he like his job? Yes, he does.", hint: "Short answer with the auxiliary." },
      { wrong: "She wears a headset and speak English.", right: "She wears a headset and speaks English.", hint: "Both verbs need the S." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "🎧", title: "Karla, the Call Center Agent", facts: ["what she does every day at work", "what time she starts her shift", "what she was doing last night at 9", "what she did yesterday after work", "what she doesn't like about her job", "what she is doing right now", "what she is going to do this weekend"], starters: ["Every day she ...", "She starts her shift at ...", "Last night at 9 she was ...", "Yesterday after work she ...", "She doesn't like ...", "Right now she is ...", "This weekend she is going to ..."], retell: "The other team retells Karla's story in 30 seconds using the three tenses: every day..., last night..., yesterday..." },
      { emoji: "👨‍🍳", title: "Don Chepe, the Cook", facts: ["what he cooks every day", "how often he works on Sundays", "what he was doing yesterday at 6 a.m.", "what he did last weekend", "what he never does", "what he is cooking right now", "what he will cook tomorrow"], starters: ["Every day he cooks ...", "He works on Sundays ... (once a month / every Sunday)", "Yesterday at 6 a.m. he was ...", "Last weekend he ...", "He never ...", "Right now he is cooking ...", "Tomorrow he will cook ..."], retell: "The other team retells Don Chepe's story in 30 seconds using every day..., yesterday..., tomorrow..." },
      { emoji: "👩‍👧‍👦", title: "The Pérez Family", facts: ["what the family does on Sundays", "what the mom does every morning", "what the kids were doing last night at 8", "what the dad did yesterday", "what they don't do during dinner", "what the grandmother is doing right now", "what they are going to do in December"], starters: ["On Sundays the family ...", "Every morning the mom ...", "Last night at 8 the kids were ...", "Yesterday the dad ...", "During dinner they don't ...", "Right now the grandmother is ...", "In December they are going to ..."], retell: "The other team retells the Pérez family story in 30 seconds mixing the tenses." },
      { emoji: "🦸", title: "Super Coach", facts: ["what the coach does every day", "what the coach was doing before class", "what the coach did last weekend", "what the coach never does", "how often the coach drinks coffee", "what the coach is doing right now", "what the coach will do after class"], starters: ["Every day the coach ...", "Before class the coach was ...", "Last weekend the coach ...", "The coach never ...", "The coach drinks coffee ... times a day.", "Right now the coach is ...", "After class the coach will ..."], retell: "The other team retells the coach's story in 30 seconds mixing the tenses; the coach says: true or false!" },
    ],
  },

  wordSprint: {
    words: [
      { es: "sobrino", en: "nephew", category: "family" },
      { es: "sobrina", en: "niece", category: "family" },
      { es: "suegra", en: "mother-in-law", category: "family" },
      { es: "esposo", en: "husband", category: "family" },
      { es: "nieto", en: "grandson", category: "family" },
      { es: "turno", en: "shift", category: "work" },
      { es: "descanso (en el trabajo)", en: "break", category: "work" },
      { es: "jefe", en: "boss", alt: ["manager"], category: "work" },
      { es: "audífonos (de call center)", en: "headset", alt: ["headphones"], category: "work" },
      { es: "cliente", en: "customer", alt: ["client"], category: "work" },
      { es: "queja", en: "complaint", category: "work" },
      { es: "compañero de equipo", en: "teammate", alt: ["team member", "coworker"], category: "work" },
      { es: "anoche", en: "last night", category: "time" },
      { es: "antes de dormir", en: "before going to bed", alt: ["before bed", "before sleeping", "before going to sleep"], category: "time" },
      { es: "durante la cena", en: "during dinner", alt: ["at dinner"], category: "time" },
      { es: "dos veces al año", en: "twice a year", alt: ["two times a year"], category: "time" },
    ],
    flips: [
      { affirmative: "She answers calls every day. (What ... do?)", negative: "She doesn't answer calls every day.", question: "What does she do every day?" },
      { affirmative: "He was watching TV before going to bed. (What ... doing?)", negative: "He wasn't watching TV before going to bed.", question: "What was he doing before going to bed?" },
      { affirmative: "They visited their grandmother last Sunday. (When?)", negative: "They didn't visit their grandmother last Sunday.", question: "When did they visit their grandmother?" },
      { affirmative: "My uncle cooked dinner last night. (What?)", negative: "My uncle didn't cook dinner last night.", question: "What did your uncle cook last night?" },
    ],
    numbers: [
      { say: "her shift starts at two forty-five", write: "2:45" },
      { say: "she answers sixty calls a day", write: "60" },
      { say: "I have twelve cousins", write: "12" },
      { say: "a quarter to eleven", write: "10:45" },
      { say: "she works forty hours a week", write: "40" },
      { say: "he started working in two thousand twenty-one", write: "2021" },
    ],
  },

  bossBattle: {
    name: "The Routine Reaper",
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
      { name: "❤️ Heal", effect: "The Reaper recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "She ANSWER calls? Where is my S? I collect the S of the forgetful!",
      "He DON'T? He DOESN'T... and you don't either.",
      "Last night she WAS WATCH? Was watchING! Feed me -ING!",
      "Every day, last night, yesterday... three tenses, zero brains.",
      "Yes, he LIKES? Yes, he DOES! Your routine is losing.",
    ],
  },

  punishments: [
    "Say what 3 members of your family do every day (He/She ...s).",
    "Say what you were doing last night at 7, 9 and 11.",
    "Say what a call center agent does at work, in 4 sentences.",
    "Say 5 family members in English in 5 seconds: nephew, niece...",
    "Say what you did yesterday, in 4 sentences with different verbs.",
    "Say 'My mom cooks every day!' in 3 different voices.",
    "Say how often your family does 3 things (We visit..., we eat...).",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Tell the story of your first class at E4CC in 15 seconds.",
    "Say what your coach does to help you, in 3 sentences.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
