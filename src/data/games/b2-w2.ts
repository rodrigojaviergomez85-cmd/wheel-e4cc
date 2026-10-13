import type { GamePack } from "./types";

// BASIC 2 · WEEK 2 — Simple present third person, do/does, frequency adverbs & How often, describing people (someone you admire), hobbies.
// Day 4 = book quiz, Day 5 = deep level evaluation. No present progressive yet.
export const B2_W2: GamePack = {
  level: "b2",
  week: 2,
  theme: "Someone I admire",
  teams: { suggestedNames: ["Red Foxes", "Blue Wolves", "Green Hawks", "Yellow Cobras"] },

  days: [
    { level: "b2", week: 2, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Third person · Hobbies & free time · What does he like to do?", minutes: 10 },
    { level: "b2", week: 2, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "DO / DOES questions and negatives · Short answers", minutes: 10 },
    { level: "b2", week: 2, day: 3, game: "build_person", title: "Build-a-Person — Someone I admire", grammar: "Frequency adverbs · How often does he...? · Compare two people", minutes: 10 },
    { level: "b2", week: 2, day: 4, game: "word_sprint", title: "Word Sprint + Flip It + Number Blitz", grammar: "Hobbies · Adjectives to describe people · Frequency", minutes: 10, note: "After the book quiz" },
    { level: "b2", week: 2, day: 5, game: "boss_battle", title: "Boss Battle — The Never-Always Ogre", grammar: "Everything from the week", minutes: 10, note: "After the evaluation" },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Mi hermano juega videojuegos todos los días.", en: "My brother plays video games every day.", alt: ["My brother plays videogames every day."] },
      { tier: 1, es: "A ella le gusta bailar.", en: "She likes to dance.", alt: ["She likes dancing."] },
      { tier: 1, es: "¿Qué hace él en su tiempo libre?", en: "What does he do in his free time?" },
      { tier: 1, es: "Mi mamá cocina muy bien.", en: "My mom cooks very well.", alt: ["My mother cooks very well."] },
      { tier: 2, es: "Él va al gimnasio tres veces a la semana.", en: "He goes to the gym three times a week.", alt: ["He goes to the gym three times per week."] },
      { tier: 2, es: "Mi papá no ve televisión.", en: "My dad does not watch TV.", alt: ["My dad doesn't watch TV.", "My father doesn't watch TV.", "My dad does not watch television."] },
      { tier: 2, es: "¿A tu hermana le gusta leer?", en: "Does your sister like to read?", alt: ["Does your sister like reading?"] },
      { tier: 2, es: "Mi abuela siempre se levanta temprano.", en: "My grandmother always wakes up early.", alt: ["My grandmother always gets up early.", "My grandma always wakes up early."] },
      { tier: 3, es: "Admiro a mi mamá porque trabaja mucho.", en: "I admire my mom because she works a lot.", alt: ["I admire my mother because she works a lot.", "I admire my mom because she works hard."] },
      { tier: 3, es: "Él nunca llega tarde al trabajo.", en: "He never arrives late to work.", alt: ["He is never late for work.", "He never gets to work late.", "He is never late to work."] },
      { tier: 3, es: "¿Con qué frecuencia visitas a tus abuelos?", en: "How often do you visit your grandparents?" },
      { tier: 3, es: "Mi mejor amigo es gracioso y le gusta cantar.", en: "My best friend is funny and he likes to sing.", alt: ["My best friend is funny and likes to sing.", "My best friend is funny and he likes singing."] },
    ],
    echo: [
      { en: "My sister loves music and she plays the guitar every night." },
      { en: "He usually goes to the gym, but he never runs." },
      { en: "Does your dad like soccer? Yes, he does." },
      { en: "I admire my grandfather because he always helps people." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "Does she likes pizza?", right: "Does she like pizza?", hint: "After DOES, no S." },
      { wrong: "Do he work on Saturdays?", right: "Does he work on Saturdays?", hint: "He → DOES." },
      { wrong: "She don't like soccer.", right: "She doesn't like soccer.", hint: "She → DOESN'T." },
      { wrong: "He doesn't plays the guitar.", right: "He doesn't play the guitar.", hint: "After DOESN'T, no S." },
      { wrong: "Does your mom cook? Yes, she do.", right: "Does your mom cook? Yes, she does.", hint: "Yes, she DOES." },
      { wrong: "What does he likes to do?", right: "What does he like to do?", hint: "After DOES, no S." },
      { wrong: "Where do your brother work?", right: "Where does your brother work?", hint: "Your brother → DOES." },
      { wrong: "I no like coffee.", right: "I don't like coffee.", hint: "I → DON'T." },
      { wrong: "Does they play video games?", right: "Do they play video games?", hint: "They → DO." },
      { wrong: "He likes sing in the shower.", right: "He likes to sing in the shower.", hint: "Likes TO + verb." },
      { wrong: "Do you like to read? Yes, I like.", right: "Do you like to read? Yes, I do.", hint: "Short answer: Yes, I DO." },
      { wrong: "My dad doesn't has a car.", right: "My dad doesn't have a car.", hint: "After DOESN'T → HAVE." },
    ],
  },

  buildPerson: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    retellSeconds: 30,
    cards: [
      { emoji: "👩‍🏫", title: "My Favorite Teacher", facts: ["what she is like (2 adjectives)", "where she works", "what she always does", "what she never does", "how often she exercises", "what she likes to do in her free time", "why you admire her"], starters: ["She is ... and ...", "She works at ...", "She always ...", "She never ...", "She exercises ... times a week.", "In her free time she likes to ...", "I admire her because ..."], retell: "The other team asks 4 questions (How often does she...? Does she...?) and then compares her with your coach: 'My coach always... but she never...'" },
      { emoji: "⚽", title: "The Soccer Star", facts: ["what he is like (2 adjectives)", "how often he trains", "what he eats every day", "what he never does", "what he usually does on Sundays", "what he likes to do", "why people admire him"], starters: ["He is ... and ...", "He trains ... times a week.", "Every day he eats ...", "He never ...", "On Sundays he usually ...", "He likes to ...", "People admire him because ..."], retell: "The other team asks 4 questions (How often does he...? What does he...?) and then compares him with a lazy person: 'He always... but a lazy person never...'" },
      { emoji: "👵", title: "Super Grandma", facts: ["what she is like (2 adjectives)", "what time she always wakes up", "what she cooks", "how often she goes to church", "what she never does", "what she likes to do", "why you admire her"], starters: ["She is ... and ...", "She always wakes up at ...", "She cooks ...", "She goes to church ...", "She never ...", "She likes to ...", "I admire her because ..."], retell: "The other team asks 4 questions (How often does she...? Does she...?) and then retells everything about her in 30 seconds." },
      { emoji: "🦥", title: "Lazy Larry vs. Busy Betty", facts: ["what Larry is like", "what Betty is like", "what Larry always does", "what Betty always does", "how often Larry exercises", "how often Betty exercises", "what they both like"], starters: ["Larry is ...", "Betty is ...", "Larry always ...", "Betty always ...", "Larry never ... / Larry exercises once a ...", "Betty exercises every ... / ... times a week.", "They both like ..."], retell: "The other team compares the two characters in 30 seconds using always / usually / sometimes / never." },
    ],
  },

  wordSprint: {
    words: [
      { es: "siempre", en: "always", category: "frequency" },
      { es: "nunca", en: "never", category: "frequency" },
      { es: "a veces", en: "sometimes", category: "frequency" },
      { es: "una vez a la semana", en: "once a week", category: "frequency" },
      { es: "dos veces al mes", en: "twice a month", alt: ["two times a month"], category: "frequency" },
      { es: "trabajador", en: "hardworking", alt: ["hard-working"], category: "adjectives" },
      { es: "perezoso", en: "lazy", category: "adjectives" },
      { es: "tímido", en: "shy", category: "adjectives" },
      { es: "gracioso", en: "funny", category: "adjectives" },
      { es: "amable", en: "kind", alt: ["nice", "friendly"], category: "adjectives" },
      { es: "inteligente", en: "smart", alt: ["intelligent"], category: "adjectives" },
      { es: "jugar videojuegos", en: "play video games", alt: ["to play video games"], category: "hobbies" },
      { es: "escuchar música", en: "listen to music", alt: ["to listen to music"], category: "hobbies" },
      { es: "leer", en: "read", alt: ["to read"], category: "hobbies" },
      { es: "ir al gimnasio", en: "go to the gym", alt: ["to go to the gym"], category: "hobbies" },
      { es: "pasatiempo", en: "hobby", category: "hobbies" },
    ],
    flips: [
      { affirmative: "She goes to the gym every day. (How often?)", negative: "She does not go to the gym every day.", question: "How often does she go to the gym?" },
      { affirmative: "My cousin likes to play video games. (What ... like to do?)", negative: "My cousin does not like to play video games.", question: "What does your cousin like to do?" },
      { affirmative: "My parents visit my grandma twice a month. (How often?)", negative: "My parents do not visit my grandma twice a month.", question: "How often do your parents visit your grandma?" },
      { affirmative: "My brother reads every night. (When?)", negative: "My brother does not read every night.", question: "When does your brother read?" },
    ],
    numbers: [
      { say: "three times a week", write: "3" },
      { say: "he is forty-two years old", write: "42" },
      { say: "she wakes up at four thirty", write: "4:30" },
      { say: "he goes to church twice a month", write: "2" },
      { say: "twelve times a year", write: "12" },
      { say: "a quarter to nine", write: "8:45" },
    ],
  },

  bossBattle: {
    name: "The Never-Always Ogre",
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
      { name: "❤️ Heal", effect: "The ogre recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "Does she LIKES? After DOES, no S! I always win!",
      "She DON'T? She DOESN'T... and you don't either.",
      "Yes, she DO? Yes, she DOES! Delicious.",
      "You never study. You ALWAYS lose.",
      "He likes SING? He likes TO sing. And I like to eat lives.",
    ],
  },

  punishments: [
    "Say 3 things you always do and 3 things you never do, fast!",
    "Describe someone you admire in 4 sentences.",
    "Ask your coach 3 questions with 'How often do you...?'",
    "Say 5 adjectives to describe your best friend.",
    "Say what your coach does in his or her free time, in 3 sentences (He/She likes to...).",
    "Say 'Does she like pizza?' in 3 different voices.",
    "Compare your mom and your dad with always / never, in 4 sentences.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 4 hobbies in English in 8 seconds.",
    "Answer: 'How often do you clean your room?' Be honest!",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
