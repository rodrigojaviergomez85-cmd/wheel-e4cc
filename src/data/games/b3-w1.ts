import type { GamePack } from "./types";

// BASIC 3 · WEEK 1 — Simple past with IRREGULAR verbs. Day 1 intro (after the coaching session), Day 2 irregular verbs + didn't,
// Day 3 yes/no questions (Did you...?), Day 4 Wh- questions (What did you do...?), Day 5 past / present / progressive / future comparison.
// Regular -ed verbs are NOT taught yet (Week 2): only irregular verbs here.
export const B3_W1: GamePack = {
  level: "b3",
  week: 1,
  theme: "What did you do yesterday?",
  teams: { suggestedNames: ["Red Dragons", "Blue Sharks", "Green Monkeys", "Yellow Robots"] },

  days: [
    { level: "b3", week: 1, day: 1, game: "bomb_squad", title: "Bomb Squad — Translation", grammar: "Irregular past: went, ate, saw, had, bought... (affirmative)", minutes: 10, note: "After the coaching session" },
    { level: "b3", week: 1, day: 2, game: "lightning_sniper", title: "Lightning Sniper — Fix the mistake", grammar: "Irregular forms · didn't + base verb", minutes: 10 },
    { level: "b3", week: 1, day: 3, game: "story_heist", title: "Story Heist — Yesterday Edition", grammar: "Past story · Did you...? Yes, I did / No, I didn't", minutes: 10 },
    { level: "b3", week: 1, day: 4, game: "past_sprint", title: "Past Form Sprint + Flip It", grammar: "16 irregular verbs · didn't · Wh- questions with did", minutes: 10 },
    { level: "b3", week: 1, day: 5, game: "boss_battle", title: "Boss Battle — The Irregular Hydra", grammar: "Everything from the week · Past vs. present vs. future", minutes: 10 },
  ],

  bombSquad: {
    translations: [
      { tier: 1, es: "Ayer fui al supermercado.", en: "Yesterday I went to the supermarket.", alt: ["I went to the supermarket yesterday."] },
      { tier: 1, es: "Comí pupusas anoche.", en: "I ate pupusas last night." },
      { tier: 1, es: "Ella vio una película el sábado.", en: "She saw a movie on Saturday." },
      { tier: 1, es: "Mi papá compró un carro nuevo.", en: "My dad bought a new car.", alt: ["My father bought a new car."] },
      { tier: 2, es: "Tuvimos una clase muy buena ayer.", en: "We had a very good class yesterday.", alt: ["Yesterday we had a very good class.", "We had a really good class yesterday."] },
      { tier: 2, es: "Mis amigos vinieron a mi casa el domingo.", en: "My friends came to my house on Sunday." },
      { tier: 2, es: "Tomé el bus a las siete.", en: "I took the bus at seven.", alt: ["I took the bus at 7."] },
      { tier: 2, es: "Él hizo la tarea en la noche.", en: "He did his homework at night.", alt: ["He did the homework at night.", "He did his homework in the evening."] },
      { tier: 3, es: "Dormí ocho horas y me sentí muy bien.", en: "I slept eight hours and I felt very good.", alt: ["I slept for eight hours and I felt very good.", "I slept eight hours and felt great.", "I slept eight hours and I felt very well."] },
      { tier: 3, es: "Mi hermana le dio un regalo a mi mamá.", en: "My sister gave my mom a gift.", alt: ["My sister gave a gift to my mom.", "My sister gave my mother a present."] },
      { tier: 3, es: "Fuimos a la playa y nadamos todo el día.", en: "We went to the beach and we swam all day.", alt: ["We went to the beach and swam all day."] },
      { tier: 3, es: "Ayer conocí a Albert Einstein en un sueño.", en: "Yesterday I met Albert Einstein in a dream.", alt: ["I met Albert Einstein in a dream yesterday."] },
    ],
    echo: [
      { en: "Yesterday I woke up at six, I took a shower and I went to work." },
      { en: "My mom made breakfast and we ate together." },
      { en: "Last weekend we saw a movie and bought popcorn." },
      { en: "Albert Einstein grew up in Germany and became a famous scientist." },
    ],
  },

  lightningSniper: {
    items: [
      { wrong: "I goed to the mall yesterday.", right: "I went to the mall yesterday.", hint: "Go → WENT." },
      { wrong: "She eated pizza last night.", right: "She ate pizza last night.", hint: "Eat → ATE." },
      { wrong: "They buyed a new TV.", right: "They bought a new TV.", hint: "Buy → BOUGHT." },
      { wrong: "I didn't went to class yesterday.", right: "I didn't go to class yesterday.", hint: "After didn't, base verb." },
      { wrong: "He haved a good day.", right: "He had a good day.", hint: "Have → HAD." },
      { wrong: "We seed a movie on Sunday.", right: "We saw a movie on Sunday.", hint: "See → SAW." },
      { wrong: "My dad no came to the party.", right: "My dad didn't come to the party.", hint: "Negative past: DIDN'T + verb." },
      { wrong: "I taked the bus to work.", right: "I took the bus to work.", hint: "Take → TOOK." },
      { wrong: "She didn't ate breakfast.", right: "She didn't eat breakfast.", hint: "After didn't, base verb." },
      { wrong: "Yesterday I sleep all day.", right: "Yesterday I slept all day.", hint: "Yesterday → past. Sleep → ?" },
      { wrong: "They maked a cake for my birthday.", right: "They made a cake for my birthday.", hint: "Make → MADE." },
      { wrong: "Last night I do my homework.", right: "Last night I did my homework.", hint: "Do → DID." },
    ],
  },

  storyHeist: {
    secondsPerTurn: 6,
    strikesToExplode: 3,
    prompts: [
      { prompt: "Crazy story: Yesterday you woke up with superpowers. What did you do? (Round 1: I woke up..., I went..., I saw...)", retellAs: "Round 2: the other team asks 5 yes/no questions (Did you fly? Did you...?) and you answer Yes, I did / No, I didn't. Round 3: the other team retells the story in third person (He/She went...)." },
      { prompt: "Crazy story: Last night you had dinner with Albert Einstein. What did you do? (Round 1: We ate..., he said..., I took...)", retellAs: "Round 2: the other team asks 5 yes/no questions (Did he eat pupusas? Did you...?). Round 3: the other team retells the dinner in NEGATIVE (They didn't...)." },
      { prompt: "Crazy story: Yesterday your dog drove your car to the beach. What did it do? (Round 1: It drove..., it swam..., it ate...)", retellAs: "Round 2: the other team asks 5 yes/no questions (Did it swim? Did the dog...?). Round 3: the other team retells the story as the dog (I drove...)." },
      { prompt: "Crazy story: Last weekend you found one million dollars in the street. What did you do? (Round 1: I found..., I bought..., I went...)", retellAs: "Round 2: the other team asks 5 yes/no questions (Did you buy a house? Did you...?). Round 3: the other team retells the story in third person (He/She found...)." },
    ],
  },

  pastSprint: {
    verbs: [
      { base: "go", es: "ir", past: "went", sound: "irregular", example: "I went to the beach on Sunday." },
      { base: "eat", es: "comer", past: "ate", sound: "irregular", example: "We ate pupusas last night." },
      { base: "see", es: "ver", past: "saw", sound: "irregular", example: "She saw her cousin at the mall." },
      { base: "have", es: "tener", past: "had", sound: "irregular", example: "They had a party on Saturday." },
      { base: "buy", es: "comprar", past: "bought", sound: "irregular", example: "He bought a new phone." },
      { base: "take", es: "tomar / llevar", past: "took", sound: "irregular", example: "I took the bus at seven." },
      { base: "make", es: "hacer (preparar)", past: "made", sound: "irregular", example: "My mom made dinner." },
      { base: "do", es: "hacer", past: "did", sound: "irregular", example: "I did my homework late." },
      { base: "come", es: "venir", past: "came", sound: "irregular", example: "My friends came to my house." },
      { base: "get", es: "conseguir / llegar", past: "got", sound: "irregular", example: "I got home at six." },
      { base: "sleep", es: "dormir", past: "slept", sound: "irregular", example: "The baby slept all night." },
      { base: "drink", es: "beber / tomar", past: "drank", sound: "irregular", example: "We drank coffee in the morning." },
      { base: "give", es: "dar", past: "gave", sound: "irregular", example: "She gave me a gift." },
      { base: "write", es: "escribir", past: "wrote", sound: "irregular", example: "He wrote an email to his boss." },
      { base: "drive", es: "manejar", past: "drove", sound: "irregular", example: "My dad drove to work." },
      { base: "say", es: "decir", past: "said", sound: "irregular", example: "The coach said hello." },
    ],
    flips: [
      { affirmative: "I went to the beach on Sunday. (Where?)", negative: "I didn't go to the beach on Sunday.", question: "Where did you go on Sunday?" },
      { affirmative: "She ate pupusas last night. (What?)", negative: "She didn't eat pupusas last night.", question: "What did she eat last night?" },
      { affirmative: "They bought a car last month. (When?)", negative: "They didn't buy a car last month.", question: "When did they buy a car?" },
      { affirmative: "He took the bus at seven. (What time?)", negative: "He didn't take the bus at seven.", question: "What time did he take the bus?" },
    ],
  },

  bossBattle: {
    name: "The Irregular Hydra",
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
      { name: "❤️ Heal", effect: "The hydra recovers 10 HP. Hurry up!" },
    ],
    taunts: [
      "GOED? EATED? Every wrong verb grows me a new head!",
      "Didn't WENT? After didn't... base verb, mortal!",
      "I TAKED your lives. No wait: I TOOK them. Ha!",
      "Did you study? No, you DIDN'T.",
      "Yesterday you lost. Today you lose. Tomorrow you will lose.",
    ],
  },

  punishments: [
    "Say what you did yesterday in 5 sentences, fast!",
    "Say 8 irregular verbs in the past in 8 seconds: went, ate...",
    "Ask your coach 3 questions with 'Did you...?'",
    "Say 3 things you did NOT do yesterday (I didn't...).",
    "Say what your mom did last weekend, in 3 sentences.",
    "Say 'I went to the beach!' in 3 different voices.",
    "Tell the story of your morning in the past in 15 seconds.",
    "Do 5 jumping jacks counting in English with your camera on (or swap).",
    "Say 3 things Albert Einstein did in his life.",
    "Say what you did yesterday, what you do every day and what you are going to do tomorrow.",
  ],

  powerCards: [
    { name: "Freeze", emoji: "🧊", effect: "The other team can't answer the next item." },
    { name: "Double", emoji: "✖️2", effect: "Your next correct answer is worth double." },
    { name: "Shield", emoji: "🛡️", effect: "Cancel one fuse cut / one lost life." },
    { name: "Steal", emoji: "🕵️", effect: "Take 3 points from the other team." },
  ],
};
