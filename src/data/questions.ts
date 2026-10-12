export type DayData = {
  level: "b1" | "b2" | "b3" | "b4" | "tigers" | "sharks" | "eagles" | "adv1" | "adv2" | "adv3";
  week: 1 | 2 | 3 | 4;
  day: 1 | 2 | 3 | 4 | 5;
  title: string; // base "Automatic Fluency" question, shown in header
  grammar: string; // grammar focus (informational)
  enabled: boolean; // false = coaching / evaluation day
  disabledReason?: string;
  questions: string[]; // up to 10
};

export const LEVELS = [
  { id: "b0", label: "BASIC 0", enabled: false },
  { id: "b1", label: "BASIC 1", enabled: true },
  { id: "b2", label: "BASIC 2", enabled: true },
  { id: "b3", label: "BASIC 3", enabled: true },
  { id: "b4", label: "BASIC 4", enabled: true },
  { id: "tigers", label: "TIGERS", enabled: true },
  { id: "sharks", label: "SHARKS", enabled: true },
  { id: "eagles", label: "EAGLES", enabled: true },
  { id: "adv1", label: "ADVANCED 1", enabled: true },
  { id: "adv2", label: "ADVANCED 2", enabled: true },
  { id: "adv3", label: "ADVANCED 3", enabled: false },
] as const;

export const DAYS: DayData[] = [
  {
    "level": "b1",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "Tell me about yourself",
    "grammar": "Greetings · Alphabet · Verb to be",
    "questions": [
      "Tell me about yourself.",
      "What is your name, where are you from and how old are you?",
      "What is your favorite food and your favorite color?",
      "Spell your name and tell me where you live.",
      "What do you do? Tell me about your job or your studies.",
      "Crazy story: You are a famous singer. Tell me about yourself.",
      "Crazy story: You are a cat. Tell me about yourself: your name, your age, your favorite food.",
      "Crazy story: You are an alien from Mars. Tell me about yourself.",
      "Crazy story: You are 100 years old. Tell me about yourself.",
      "Crazy story: You are a superhero. What is your name, where are you from and what is your favorite color?"
    ]
  },
  {
    "level": "b1",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Tell me about a family member",
    "grammar": "Numbers · Verb to be · Days · Months",
    "questions": [
      "Tell me about a family member.",
      "Tell me about your mom: her name, her age and her favorite food.",
      "How many people are in your family? Tell me about them.",
      "When is your birthday? When is your best friend's birthday?",
      "Tell me about your best friend.",
      "Crazy story: Your brother is a pirate. Tell me about him.",
      "Crazy story: Your grandmother is 200 years old. Tell me about her.",
      "Crazy story: Your dog is a family member. Tell me about him: his name, his age, his birthday.",
      "Crazy story: Your cousin is a famous soccer player. Tell me about him or her.",
      "Crazy story: Your sister lives on the moon. Tell me about her."
    ]
  },
  {
    "level": "b1",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "Crazy Story — What are you going to do?",
    "grammar": "Future GOING TO (introduction)",
    "questions": [
      "What are you going to do tomorrow?",
      "What are you going to do this weekend?",
      "What are you going to eat tonight?",
      "What is your mom going to do tomorrow?",
      "What are you going to do after class?",
      "Crazy story: A monkey is in your kitchen. What is it going to do?",
      "Crazy story: You have one million dollars. What are you going to do tomorrow?",
      "Crazy story: Tomorrow you are going to be invisible. What are you going to do?",
      "Crazy story: Your coach is going to be a chicken tomorrow. What is he or she going to do?",
      "Crazy story: A dinosaur is going to visit your house tonight. What are you going to do?"
    ]
  },
  {
    "level": "b1",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "Crazy Story — Are you going to...?",
    "grammar": "Yes/No questions with GOING TO",
    "questions": [
      "Are you going to study English tomorrow? Why?",
      "Are you going to eat pizza tonight? What are you going to eat?",
      "Is your mom going to cook tomorrow?",
      "Are you going to travel next month? Where?",
      "Is your coach going to give homework today?",
      "Crazy story: Are you going to marry a robot in the future? Why or why not?",
      "Crazy story: A zombie is at your door. Are you going to open it? What are you going to do?",
      "Crazy story: Are you going to eat 50 tacos tonight? Why?",
      "Crazy story: Is your cat going to drive your car tomorrow? What is it going to do?",
      "Crazy story: Are you going to live in a castle with a dragon? Why?"
    ]
  },
  {
    "level": "b1",
    "week": 1,
    "day": 5,
    "enabled": false,
    "title": "Coaching Day",
    "grammar": "",
    "disabledReason": "Coaching Day — no wheel",
    "questions": []
  },
  {
    "level": "b1",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "What are you going to do tomorrow?",
    "grammar": "Wh- questions with GOING TO",
    "questions": [
      "What are you going to do tomorrow?",
      "Where are you going to eat lunch tomorrow?",
      "When are you going to study English this week?",
      "Who are you going to visit this weekend?",
      "What is your best friend going to do tonight?",
      "Crazy story: Tomorrow you are going to be the president of El Salvador. What are you going to do?",
      "Crazy story: Superman is going to visit your house. What is he going to do?",
      "Crazy story: You are going to live in a zoo for one week. What are you going to do?",
      "Crazy story: Your phone is going to talk tomorrow. What is it going to say?",
      "Crazy story: You are going to be 5 years old again tomorrow. What are you going to do?"
    ]
  },
  {
    "level": "b1",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "What are you going to do tomorrow?",
    "grammar": "WHY questions with GOING TO (Because...)",
    "questions": [
      "What are you going to do tomorrow and why?",
      "Why are you going to study English?",
      "Why are you going to work in a call center?",
      "What are you going to do this weekend and why?",
      "Why is your mom going to be happy tomorrow?",
      "Crazy story: You are going to sleep in a tree tonight. Why?",
      "Crazy story: Your coach is going to eat 100 pupusas. Why?",
      "Crazy story: You are going to go to the moon tomorrow. Why?",
      "Crazy story: Your dog is going to go to school tomorrow. Why?",
      "Crazy story: You are going to buy 1,000 bananas. Why?"
    ]
  },
  {
    "level": "b1",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "What are you going to do tomorrow?",
    "grammar": "WHEN and WHERE questions with GOING TO",
    "questions": [
      "What are you going to do tomorrow? Where and when?",
      "Where are you going to eat tomorrow?",
      "When are you going to have lunch tomorrow?",
      "Where are you going to celebrate your birthday?",
      "Where are you going to live in 5 years?",
      "Crazy story: You are going to have a party with 500 monkeys. Where and when?",
      "Crazy story: You are going to hide a treasure. Where are you going to hide it?",
      "Crazy story: An alien is going to visit El Salvador. Where is it going to go first?",
      "Crazy story: You are going to open a restaurant for dogs. Where and when?",
      "Crazy story: Your grandmother is going to be a rock star. Where is she going to sing?"
    ]
  },
  {
    "level": "b1",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "What are you going to do tomorrow?",
    "grammar": "GOING TO review (Book Quiz day)",
    "questions": [
      "What are you going to do tomorrow?",
      "Tell me 3 things you are going to do this weekend.",
      "What is your family going to do on Sunday?",
      "What are you NOT going to do tomorrow?",
      "What is your coach going to do tomorrow?",
      "Crazy story: Tomorrow you are going to wake up with wings. What are you going to do?",
      "Crazy story: Your house is going to be made of chocolate. What are you going to do?",
      "Crazy story: A giant is going to come to your city. What is he going to do?",
      "Crazy story: You are going to be a teacher for lions. What are you going to teach them?",
      "Crazy story: It is going to rain pizza tomorrow. What are you going to do?"
    ]
  },
  {
    "level": "b1",
    "week": 2,
    "day": 5,
    "enabled": true,
    "title": "What are you going to do tomorrow?",
    "grammar": "WHO are you going to ___ WITH?",
    "questions": [
      "What are you going to do tomorrow and who are you going to do it with?",
      "Who are you going to have dinner with tonight?",
      "Who are you going to spend time with this weekend?",
      "Who is going to cook in your house tomorrow?",
      "Who are you going to watch a movie with?",
      "Crazy story: You are going to travel to the moon. Who are you going to go with?",
      "Crazy story: You are going to have dinner with a famous person. Who? What are you going to eat?",
      "Crazy story: You are going to fight a dragon. Who is going to help you?",
      "Crazy story: A ghost is going to live in your house. Who is going to talk to it?",
      "Crazy story: You are going to dance with an animal at a party. Which animal and why?"
    ]
  },
  {
    "level": "b1",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "Crazy Story — What will you do?",
    "grammar": "Future WILL (introduction)",
    "questions": [
      "What will you do tomorrow?",
      "What will you do next weekend?",
      "What will you eat tonight?",
      "What will your mom do tomorrow?",
      "What will you do when you finish your English course?",
      "Crazy story: A dinosaur will come to your house tomorrow. What will you do?",
      "Crazy story: You will be a millionaire tomorrow. What will you do?",
      "Crazy story: Tomorrow all the cars will fly. What will you do?",
      "Crazy story: Your coach will be a baby tomorrow. What will the class do?",
      "Crazy story: You will wake up in Japan tomorrow. What will you do?"
    ]
  },
  {
    "level": "b1",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Crazy Story — Will you...?",
    "grammar": "Yes/No questions with WILL",
    "questions": [
      "Will you study English tomorrow?",
      "Will your mom cook tomorrow?",
      "Will you travel next year? Where?",
      "Will it rain tomorrow?",
      "Will you work in a call center? When?",
      "Crazy story: Will you live on Mars one day? Why or why not?",
      "Crazy story: A lion is in your bathroom. Will you take a shower? What will you do?",
      "Crazy story: Will you eat a spider for $1,000? Why?",
      "Crazy story: Will your cat be the president one day? What will it do?",
      "Crazy story: Will you sleep in a haunted house for one night? Why?"
    ]
  },
  {
    "level": "b1",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Crazy Story — What will she do?",
    "grammar": "Wh- questions with WILL",
    "questions": [
      "What will you do after class?",
      "Where will you go next weekend?",
      "When will you finish your English course?",
      "Who will you visit next month?",
      "Where will you live in 10 years?",
      "Crazy story: What will people do in the year 3000?",
      "Crazy story: A robot will cook for you forever. What will it cook?",
      "Crazy story: Tomorrow you will be a fish. Where will you live and what will you eat?",
      "Crazy story: You will meet an alien tonight. What will you say?",
      "Crazy story: Your shoes will talk tomorrow. What will they say?"
    ]
  },
  {
    "level": "b1",
    "week": 3,
    "day": 4,
    "enabled": false,
    "title": "Movie Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b1",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "What'll you do? (contractions)",
    "grammar": "Contractions: I'll, you'll, she'll, we'll, they'll, won't",
    "questions": [
      "What will you do tonight? Answer with \"I'll\".",
      "Tell me 3 things you'll do this weekend.",
      "What will your mom do tomorrow? Use \"she'll\".",
      "Tell me 3 things you won't do tomorrow.",
      "What will you and your family do on Sunday? Use \"we'll\".",
      "Crazy story: You'll be a pirate tomorrow. What'll you do?",
      "Crazy story: A monkey will be your boss. What'll he do? What won't he do?",
      "Crazy story: You'll live in a chocolate house. What'll you eat? What won't you eat?",
      "Crazy story: Your friends will be ghosts tonight. What'll they do?",
      "Crazy story: It'll snow in El Salvador tomorrow. What'll you do?"
    ]
  },
  {
    "level": "b1",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "What will you do next weekend?",
    "grammar": "GOING TO (plans) vs. WILL (promises / predictions)",
    "questions": [
      "What are you going to do tomorrow? And what will you do next year?",
      "Tell me a plan for this weekend (going to) and a promise for next week (will).",
      "What is your mom going to do tomorrow? What will she do next month?",
      "What will happen tomorrow in El Salvador? Make a prediction.",
      "Tell me 3 promises for this week. Use \"I will\".",
      "Crazy story: A UFO is going to land in your city tomorrow. What will you do?",
      "Crazy story: You are going to be a king or queen. What will you change in your country?",
      "Crazy story: Your dog is going to win the lottery. What will he buy?",
      "Crazy story: Look at the sky: it's dark and green. What is going to happen? What will you do?",
      "Crazy story: You are going to open a hotel for monsters. What will the monsters do there?"
    ]
  },
  {
    "level": "b1",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "What will you do next weekend?",
    "grammar": "GONNA (informal going to)",
    "questions": [
      "What are you gonna do tomorrow?",
      "What is your coach gonna do tomorrow and why?",
      "Where are you gonna go this weekend?",
      "What are you gonna buy with $1,000?",
      "What is your family gonna do next Christmas?",
      "Crazy story: You are gonna be famous tomorrow. What are you gonna do?",
      "Crazy story: A shark is gonna be your pet. What are you gonna do with it?",
      "Crazy story: You're gonna live in a bus for one year. What are you gonna do?",
      "Crazy story: Your teacher is gonna be a monkey. What is she gonna teach?",
      "Crazy story: You're gonna be the strongest person in the world. What are you gonna do?"
    ]
  },
  {
    "level": "b1",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Evaluation practice — Wh- questions in future",
    "grammar": "What kind · What time · How · How much · How many",
    "questions": [
      "What time are you going to wake up tomorrow?",
      "What kind of food are you going to eat tonight?",
      "How are you going to go to work tomorrow?",
      "How much money are you going to spend this weekend?",
      "How many hours are you going to study English this week?",
      "Crazy story: You are going to have a party for 1,000 cats. How much food? What kind of music?",
      "Crazy story: You are going to travel to the moon. How are you going to go? What time are you going to leave?",
      "Crazy story: You are going to build a house of pizza. How many pizzas? What kind?",
      "Crazy story: An elephant is going to live with you. How much is it going to eat? Where is it going to sleep?",
      "Crazy story: You are going to be a giant. What kind of clothes are you going to wear? How much will they cost?"
    ]
  },
  {
    "level": "b1",
    "week": 4,
    "day": 4,
    "enabled": false,
    "title": "Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b1",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b2",
    "week": 1,
    "day": 1,
    "enabled": false,
    "title": "Coaching Day",
    "grammar": "",
    "disabledReason": "Coaching Day — no wheel",
    "questions": []
  },
  {
    "level": "b2",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "What is your daily routine? What do you usually do?",
    "grammar": "Simple Present · 3rd person rules",
    "questions": [
      "What is your daily routine? What do you usually do?",
      "What do you do in the morning before class?",
      "What does your mom do every day?",
      "What do you usually do on Saturdays?",
      "What does your best friend do in his or her free time?",
      "Crazy story: You are a vampire. What is your daily routine?",
      "Crazy story: Your dog goes to work every day. What does he do?",
      "Crazy story: Describe the daily routine of a pirate.",
      "Crazy story: Santa Claus lives in El Salvador. What does he do every day in July?",
      "Crazy story: You are the president. What do you usually do every day?"
    ]
  },
  {
    "level": "b2",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "What is your daily routine? What do you usually do?",
    "grammar": "Simple Present · Yes/No questions",
    "questions": [
      "What is your daily routine? Do you wake up early?",
      "Do you drink coffee every morning? What do you usually drink?",
      "Does your mom cook every day? What does she cook?",
      "Do you study English every day? When?",
      "Does your best friend work? What does he or she do?",
      "Crazy story: Do you sleep in a tree every night? Describe your crazy daily routine.",
      "Crazy story: Does your cat cook breakfast for you? What does it do every morning?",
      "Crazy story: You live with a monster. Does it eat pizza every day? What does it do?",
      "Crazy story: Does your coach drive a tractor to class? What does he or she do every day?",
      "Crazy story: Does a robot do your homework? Describe its daily routine."
    ]
  },
  {
    "level": "b2",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "What is your daily routine? What do you usually do?",
    "grammar": "Simple Present · Wh- questions",
    "questions": [
      "What is your daily routine? What do you usually do?",
      "Where do you usually eat lunch? What do you eat?",
      "What time do you wake up and what time do you go to bed?",
      "Who do you live with? What do they do every day?",
      "Why do you study English? When do you study?",
      "Crazy story: You live on a cloud. Where do you sleep? What do you eat?",
      "Crazy story: A giant lives in your house. What does he do every day? Where does he sleep?",
      "Crazy story: You are 300 years old. What do you do every day? Why?",
      "Crazy story: Your grandmother is a secret agent. Where does she work? What does she do?",
      "Crazy story: You work at a zoo with the lions. What do you do every day?"
    ]
  },
  {
    "level": "b2",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "What is your daily routine? What do you usually do?",
    "grammar": "How often questions",
    "questions": [
      "What is your daily routine? How often do you exercise?",
      "How often do you eat pizza? Why?",
      "How often does your mom go to the supermarket?",
      "How often do you visit your grandparents? What do you do with them?",
      "How often do you practice English? Explain why.",
      "Crazy story: You are a mermaid. How often do you go to the beach? What do you do there?",
      "Crazy story: Your dog drives a car. How often does he drive? Where does he go?",
      "Crazy story: A ghost cleans your house. How often does it clean? What does it do?",
      "Crazy story: You eat 20 pupusas every day. How often do you go to the doctor?",
      "Crazy story: Your coach sleeps in the classroom. How often does he or she go home?"
    ]
  },
  {
    "level": "b2",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "Crazy Story — What does he do?",
    "grammar": "Simple Present 3rd person · Describing people",
    "questions": [
      "What does your mom do every day?",
      "What does your best friend do in his or her free time?",
      "Describe someone you admire. What does he or she do every day?",
      "What does your coach do after class?",
      "What does your favorite singer do every day?",
      "Crazy story: Spider-Man works in a call center. What does he do every day?",
      "Crazy story: Your grandfather is an astronaut. What does he do every day in space?",
      "Crazy story: A chicken is the manager of your school. What does she do every day?",
      "Crazy story: Your neighbor is a dragon. What does he eat? What does he do at night?",
      "Crazy story: The president of El Salvador is a baby. What does he do every day?"
    ]
  },
  {
    "level": "b2",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Crazy Story — Do / Does",
    "grammar": "Simple Present · DO / DOES",
    "questions": [
      "Does your mom work? What does she do?",
      "Do you cook at home? Who cooks in your house?",
      "Does your best friend study English? What does he or she study?",
      "Do you watch TV every day? What do you watch?",
      "Does your coach like coffee? What does he or she drink?",
      "Crazy story: Does your cat speak English? What does it say every day?",
      "Crazy story: Does your dad fly to work? How does he go to work?",
      "Crazy story: Does Batman eat pupusas for breakfast? What does he eat?",
      "Crazy story: Does your teacher live in a castle? Where does she live? What does she do there?",
      "Crazy story: Do aliens visit your house every night? What do they do?"
    ]
  },
  {
    "level": "b2",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "Crazy Story — How often / frequency adverbs",
    "grammar": "Frequency adverbs · How often · Compare people",
    "questions": [
      "What do you always do in the morning? What do you never do?",
      "How often does your mom cook? What does she usually cook?",
      "What does your best friend usually do on weekends?",
      "How often do you go to the gym? Why?",
      "Compare your routine with your mom's routine. Who wakes up earlier?",
      "Crazy story: A monkey always does your homework. How often does it make mistakes?",
      "Crazy story: Your coach never sleeps. What does he or she usually do at night?",
      "Crazy story: Compare a vampire's routine with a zombie's routine. Who eats more?",
      "Crazy story: Your dog sometimes cooks dinner. What does he usually cook?",
      "Crazy story: An elephant always takes the bus with you. How often does it pay?"
    ]
  },
  {
    "level": "b2",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "Crazy Story — Simple Present review",
    "grammar": "Simple Present review (Book Quiz day)",
    "questions": [
      "What is your daily routine? What do you usually do?",
      "What does your family do on Sundays?",
      "Describe someone you admire: what does he or she do?",
      "What do you do at work or at school every day?",
      "What does your coach always say in class?",
      "Crazy story: Describe the daily routine of a shark that works in an office.",
      "Crazy story: Your mom is a rock star. What does she do every day?",
      "Crazy story: You are a cloud. What do you do every day? Where do you go?",
      "Crazy story: Describe a day in the life of your shoes.",
      "Crazy story: A superhero lives in your bathroom. What does he do every day?"
    ]
  },
  {
    "level": "b2",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Deep Level Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b2",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "How do you install TikTok?",
    "grammar": "Present Progressive (introduction) · Explain a process",
    "questions": [
      "How do you install TikTok? Explain step by step.",
      "How do you make coffee? Explain the steps.",
      "How do you send a message on WhatsApp?",
      "How do you make pupusas? Explain step by step.",
      "What are you doing right now? What is your family doing?",
      "Crazy story: How do you teach a cat to use TikTok? Explain step by step.",
      "Crazy story: How do you install a swimming pool in your bedroom?",
      "Crazy story: A monkey is using your phone right now. What is it doing?",
      "Crazy story: How do you make a sandwich for a giant? Explain the steps.",
      "Crazy story: Your coach is dancing on the table right now. What is he or she doing and why?"
    ]
  },
  {
    "level": "b2",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "How do you install TikTok?",
    "grammar": "Present Progressive · Yes/No questions",
    "questions": [
      "How do you install TikTok? Explain the steps.",
      "Are you studying English right now? What are you doing?",
      "Is your mom cooking right now? What is she doing?",
      "Are your friends working right now? What are they doing?",
      "Is it raining right now? What is happening outside?",
      "Crazy story: Is a lion sleeping in your bed right now? What is it doing?",
      "Crazy story: Is your grandmother driving a motorcycle right now? Where is she going?",
      "Crazy story: Are aliens eating in your kitchen? What are they eating?",
      "Crazy story: Is your dog installing TikTok right now? What is he doing with the phone?",
      "Crazy story: Is your coach swimming in the classroom? What is he or she doing?"
    ]
  },
  {
    "level": "b2",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "How do you install TikTok?",
    "grammar": "Present Progressive · Wh- questions",
    "questions": [
      "How do you install TikTok? Explain step by step.",
      "What are you doing right now? Why?",
      "Where is your mom right now? What is she doing?",
      "What are your classmates doing right now?",
      "Who is talking right now? What is he or she saying?",
      "Crazy story: What is Superman doing in your kitchen right now?",
      "Crazy story: Why is a cow sitting in your car? What is it doing?",
      "Crazy story: Where is your coach going on a dinosaur right now? Why?",
      "Crazy story: What are the fish doing in the sky right now?",
      "Crazy story: What is your phone doing while you are sleeping?"
    ]
  },
  {
    "level": "b2",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "How do you install TikTok?",
    "grammar": "Future vs. Simple Present vs. Present Progressive",
    "questions": [
      "How do you install TikTok? Explain step by step.",
      "What do you usually do at night? What are you doing right now? What are you going to do tomorrow?",
      "What does your mom do every day? What is she doing right now?",
      "What are you doing right now, and what are you going to do after class?",
      "Compare: what do you do on Mondays? What are you doing today?",
      "Crazy story: A robot lives with you. What does it do every day? What is it doing right now? What is it going to do tomorrow?",
      "Crazy story: Your cat is a chef. What does it cook every day? What is it cooking right now?",
      "Crazy story: You are a pirate. What do you usually do? What are you doing right now? What are you going to do tonight?",
      "Crazy story: Your coach is a superhero. What does he or she do every day? What is he or she doing right now?",
      "Crazy story: Describe a dinosaur's day: what does it usually do, what is it doing now, what is it going to do tomorrow?"
    ]
  },
  {
    "level": "b2",
    "week": 3,
    "day": 5,
    "enabled": false,
    "title": "Movie Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b2",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
    "grammar": "Simple Present Wh- questions · Mixed tenses",
    "questions": [
      "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
      "What does your favorite singer do every day? What is he or she doing right now?",
      "What does your mom do every day? What is she doing right now? What is she going to do tomorrow?",
      "What do you do every day? What are you doing right now? What are you going to do when you finish English?",
      "What does your best friend do on weekends? What is he or she going to do next weekend?",
      "Crazy story: Messi is a chef. What does he cook every day? What is he cooking right now? What is he going to cook tomorrow?",
      "Crazy story: Your dog is a famous soccer player. What does he do every day? What is he doing right now?",
      "Crazy story: Shakira is your English coach. What does she do in class? What is she doing right now?",
      "Crazy story: A dinosaur plays for your favorite team. What does he do every day? What is he going to do when he retires?",
      "Crazy story: Your grandmother is a famous boxer. What does she do every day? What is she doing right now?"
    ]
  },
  {
    "level": "b2",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
    "grammar": "Present Progressive Wh- questions · Mixed tenses",
    "questions": [
      "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
      "What is your family doing right now? What do they usually do at this time?",
      "What are your classmates doing right now? What are they going to do after class?",
      "What does your coach do every day? What is he or she doing right now?",
      "What are you doing right now? What do you usually do at this time?",
      "Crazy story: Your son or daughter is on the moon. Call them: what are they doing? What do they do every day there?",
      "Crazy story: A giant is walking in San Salvador right now. What is he doing? What is he going to do?",
      "Crazy story: Your cat has a new job. What does it do? What is it doing right now?",
      "Crazy story: Batman is cooking in your kitchen. What is he cooking? What does he usually cook?",
      "Crazy story: Your shoes are running without you. Where are they going? What are they doing?"
    ]
  },
  {
    "level": "b2",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
    "grammar": "Simple Future · Simple Present · Present Progressive · Explain a process",
    "questions": [
      "What does Cristiano Ronaldo do every day? What is he doing right now? What is he going to do when he retires?",
      "What do you do every day, what are you doing now, and what are you going to do this weekend?",
      "What does your mom usually do? What is she doing right now? What is she going to do on Sunday?",
      "Explain a process: how do you make a sandwich? What are you going to eat tonight?",
      "What does your best friend do every day? What is he or she going to do next year?",
      "Crazy story: You are a famous chef for monsters. What do you cook every day? What are you cooking now? What are you going to cook tomorrow?",
      "Crazy story: Your coach is an astronaut. What does he or she do in space? What is he or she doing right now? What is he or she going to do next year?",
      "Crazy story: A monkey works at your call center. What does he do every day? What is he doing right now? What is he going to do when he retires?",
      "Crazy story: Describe a day of a zombie: what does he usually do, what is he doing now, what is he going to do tonight?",
      "Crazy story: Your phone is alive. What does it do every day? What is it doing right now? What is it going to do when you sleep?"
    ]
  },
  {
    "level": "b2",
    "week": 4,
    "day": 4,
    "enabled": false,
    "title": "Monthly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b2",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Monthly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b3",
    "week": 1,
    "day": 1,
    "enabled": false,
    "title": "Coaching Day",
    "grammar": "",
    "disabledReason": "Coaching Day — no wheel",
    "questions": []
  },
  {
    "level": "b3",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "What did you do yesterday?",
    "grammar": "Simple Past · Irregular verbs",
    "questions": [
      "What did you do yesterday?",
      "What did you eat yesterday? Where did you go?",
      "What did your mom do yesterday?",
      "What did you do last weekend?",
      "Tell me 5 things you did yesterday. Use irregular verbs.",
      "Crazy story: Yesterday you woke up with a tail. What did you do?",
      "Crazy story: A monkey took your phone yesterday. What did it do? What did you do?",
      "Crazy story: Yesterday your coach came to class on a horse. What did he or she do?",
      "Crazy story: You found one million dollars yesterday. What did you buy? Where did you go?",
      "Crazy story: Yesterday you met Batman at the supermarket. What did you say? What did he do?"
    ]
  },
  {
    "level": "b3",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "What did you do yesterday?",
    "grammar": "Simple Past · Yes/No questions",
    "questions": [
      "What did you do yesterday? Did you go to work?",
      "Did you eat breakfast yesterday? What did you eat?",
      "Did your mom cook yesterday? What did she make?",
      "Did you study English last night? Why or why not?",
      "Did you see your friends last weekend? What did you do?",
      "Crazy story: Did you sleep on the roof last night? Why? What happened?",
      "Crazy story: Did a dinosaur eat your homework yesterday? What did you tell your coach?",
      "Crazy story: Did your cat drive your car last night? Where did it go?",
      "Crazy story: Did you dance with the president yesterday? What song did you dance to?",
      "Crazy story: Did your grandmother win a boxing match last weekend? What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "What did you do yesterday?",
    "grammar": "Simple Past · Wh- questions",
    "questions": [
      "What did you do yesterday? Where did you go and who did you see?",
      "What time did you wake up yesterday? What did you do after that?",
      "Where did you eat lunch yesterday? What did you eat?",
      "Who did you talk to yesterday? What did you talk about?",
      "Why did you come to class today? What did you do before class?",
      "Crazy story: Where did you go yesterday with a dragon? What did you do there?",
      "Crazy story: Who did you see in your bathroom yesterday? What did he or she say?",
      "Crazy story: Why did your coach cry in class yesterday? What happened?",
      "Crazy story: What did your dog cook for dinner last night? Why?",
      "Crazy story: What time did the aliens arrive at your house yesterday? What did they do?"
    ]
  },
  {
    "level": "b3",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "What did you do yesterday?",
    "grammar": "Past · Present · Present Progressive · Future comparison",
    "questions": [
      "What did you do yesterday? What are you doing now? What are you going to do tomorrow?",
      "What did you do last weekend, and what are you going to do next weekend?",
      "What does your mom do every day? What did she do yesterday?",
      "What did you eat yesterday? What are you eating right now? What will you eat tonight?",
      "Where did you go last year? Where are you going to go next year?",
      "Crazy story: Yesterday you were a cat. What did you do? What are you doing today as a human?",
      "Crazy story: Your coach was a pirate last week. What did he or she do? What is he or she doing now?",
      "Crazy story: Yesterday it rained money. What did you do? What are you going to do with the money tomorrow?",
      "Crazy story: A ghost lived with you last year. What did it do every day? What is it going to do now?",
      "Crazy story: Yesterday you flew to the moon. What did you see? What are you going to do there tomorrow?"
    ]
  },
  {
    "level": "b3",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "Crazy Story — What did you do?",
    "grammar": "Regular verbs · -ED sounds",
    "questions": [
      "What did you do yesterday? Use regular verbs (watched, played, cooked, visited...).",
      "What did you watch on TV last night?",
      "What did you do on your first day of class at E4CC?",
      "Who did you visit last weekend? What did you talk about?",
      "What did you cook or what did you order last night?",
      "Crazy story: Yesterday you walked to work with an elephant. What happened?",
      "Crazy story: Your dog played soccer against Messi last night. Who scored? What happened?",
      "Crazy story: Last night you danced with a ghost at a party. What happened?",
      "Crazy story: Yesterday you cooked dinner for 100 monkeys. What did you cook? What happened?",
      "Crazy story: Your coach visited the moon last weekend. What did he or she do there?"
    ]
  },
  {
    "level": "b3",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Crazy Story — What happened?",
    "grammar": "Regular verbs · -ED sounds · What happened?",
    "questions": [
      "What happened yesterday at your house?",
      "What did you do last Saturday? Tell me 5 things.",
      "What did your best friend do yesterday?",
      "What happened on your last birthday?",
      "What did you do the last time it rained?",
      "Crazy story: Yesterday a giant knocked on your door. What happened?",
      "Crazy story: Your grandmother started a rock band last week. What happened at the concert?",
      "Crazy story: Last night your phone talked to you. What did it say? What did you do?",
      "Crazy story: You opened your refrigerator yesterday and a penguin jumped out. What happened?",
      "Crazy story: Yesterday your coach arrived to class in a helicopter. What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "Crazy Story — Past, present and future",
    "grammar": "Past · Present · Future comparison",
    "questions": [
      "What did you do yesterday, what do you do every day, and what are you going to do tomorrow?",
      "What did you do last weekend? What are you going to do next weekend?",
      "What did your mom do yesterday? What is she doing right now?",
      "Where did you go on your last vacation? Where are you going to go on your next vacation?",
      "What did you learn last week? What are you going to learn this week?",
      "Crazy story: Last year you were a famous singer. What did you do? What do you do now? What are you going to do next year?",
      "Crazy story: Yesterday a robot cleaned your house. What did it do? What is it doing now? What will it do tomorrow?",
      "Crazy story: Your cat was a doctor last year. What did it do? What is it doing now?",
      "Crazy story: Last night you visited the year 3000. What did you see? What are people going to do there?",
      "Crazy story: Yesterday your coach was invisible. What did he or she do? What is he or she going to do tomorrow?"
    ]
  },
  {
    "level": "b3",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "Tell me about a happy moment of your life!",
    "grammar": "Simple Past (Book Quiz day)",
    "questions": [
      "Tell me about a happy moment of your life. Use simple past.",
      "What was the best day of your life? What happened?",
      "Tell me about your last birthday. What did you do? Who was there?",
      "What was the happiest moment of your childhood? What happened?",
      "Tell me about a day you laughed a lot. What happened?",
      "Crazy story: The happiest moment of your life was when you met a dragon. What happened?",
      "Crazy story: Yesterday was the best day ever: you won a trip to Mars. What did you do?",
      "Crazy story: Tell me about the happy day your dog learned to talk. What did he say?",
      "Crazy story: Tell me about the day you became the president of El Salvador. What happened? What did you do first?",
      "Crazy story: Tell me about the happy moment when your coach gave everyone a million dollars. What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Deep Level Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b3",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "Past Progressive (introduction)",
    "questions": [
      "Tell me about your favorite movie.",
      "Tell me about your favorite movie: what happened at the beginning?",
      "What were you doing before your English class today?",
      "What were you doing yesterday at 8 pm?",
      "What was your family doing last night while you were studying?",
      "Crazy story: Tell me about a movie where your coach is the hero. What happened?",
      "Crazy story: What were you doing when a dinosaur walked into your kitchen?",
      "Crazy story: Tell me about a movie where a cat saves the world. What happened?",
      "Crazy story: What was your dog doing while you were sleeping last night?",
      "Crazy story: Tell me about a movie where you are a pirate. What happened at the end?"
    ]
  },
  {
    "level": "b3",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "Past Progressive · WHILE and WHEN",
    "questions": [
      "Tell me about your favorite movie. What happened while the main character was in trouble?",
      "What were you doing when your phone rang yesterday?",
      "What happened while you were coming to class today?",
      "What were you doing when it started to rain last time?",
      "What was your mom doing when you arrived home yesterday?",
      "Crazy story: You were taking a shower when a monkey opened the door. What happened?",
      "Crazy story: Your coach was teaching when a UFO landed outside. What happened?",
      "Crazy story: While you were sleeping, your shoes walked to the store. What did they buy?",
      "Crazy story: You were eating pupusas when Shakira called you. What did she say?",
      "Crazy story: While your family was watching TV, a giant sat on the house. What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "Past Progressive · Wh- questions",
    "questions": [
      "Tell me about your favorite movie. Who was the main character? What was he or she doing?",
      "What were you doing before going to sleep last night?",
      "Where were you going yesterday at 5 pm? What were you doing?",
      "Who were you talking to yesterday? What were you talking about?",
      "Why were you laughing the last time you laughed a lot? What was happening?",
      "Crazy story: What were the chickens doing in your car yesterday?",
      "Crazy story: Where was your coach going on a dinosaur yesterday? Why?",
      "Crazy story: Who was dancing in your kitchen at 3 am last night? What were they doing?",
      "Crazy story: Why was a lion sleeping on your bed yesterday? What was it doing before that?",
      "Crazy story: What was your grandmother doing on a motorcycle yesterday? Where was she going?"
    ]
  },
  {
    "level": "b3",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "Past Progressive with WHEN · What happened?",
    "questions": [
      "Tell me about your favorite movie. What happened at the end?",
      "What happened yesterday while you were working or studying?",
      "What were you doing when you heard good news last time?",
      "Tell me about an accident or a surprise: what were you doing when it happened?",
      "What were your friends doing when you arrived at the last party?",
      "Crazy story: You were walking to class when a dragon offered you a ride. What happened?",
      "Crazy story: Tell me about a movie where a zombie was working in a call center. What happened?",
      "Crazy story: Your coach was sleeping in class when the students started a party. What happened?",
      "Crazy story: You were cooking when your dog started to sing. What happened?",
      "Crazy story: While the president was talking on TV, a monkey took the microphone. What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 3,
    "day": 5,
    "enabled": false,
    "title": "Movie Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b3",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "-ED sounds review",
    "questions": [
      "Tell me about your favorite movie.",
      "Tell me about your favorite movie: what happened to the main character?",
      "What movie did you watch last? What happened? Did you like it?",
      "What did you do last weekend? Use regular verbs (watched, visited, played, cooked).",
      "Tell me about the last party you attended. What happened?",
      "Crazy story: Tell me about a movie where your dog is the president. What happened?",
      "Crazy story: Last night you watched a movie and the actors jumped out of the TV. What happened?",
      "Crazy story: Tell me about a movie where your coach fights 100 chickens. What happened?",
      "Crazy story: You visited a planet where everybody dances all day. What happened?",
      "Crazy story: Tell me about a movie where a pupusa saves the world. What happened?"
    ]
  },
  {
    "level": "b3",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "Past Progressive · Present Progressive · Simple Past · Simple Present comparison",
    "questions": [
      "Tell me about your favorite movie: what happened, and what is happening in the sequel?",
      "What did you do yesterday, what are you doing now, and what were you doing at this time yesterday?",
      "What does your mom usually do? What was she doing last night at 9 pm?",
      "What were you doing last Sunday at 10 am? What do you usually do on Sundays?",
      "Tell me about the last time you came late to class. What happened? What were you doing?",
      "Crazy story: Your cat usually sleeps all day, but yesterday it was flying a plane. What happened?",
      "Crazy story: Your coach was dancing with a robot yesterday. What does the robot usually do? What is it doing now?",
      "Crazy story: A ghost lives in your house. What does it usually do? What was it doing last night?",
      "Crazy story: Tell me about a movie where you are a superhero: what do you do every day, and what were you doing when the city needed help?",
      "Crazy story: Yesterday you were a bird. What were you doing at 7 am? What are you doing now as a human?"
    ]
  },
  {
    "level": "b3",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Tell me about your favorite movie.",
    "grammar": "USED TO",
    "questions": [
      "Tell me about your favorite movie. What did you use to watch when you were a child?",
      "What did you use to do when you were a child?",
      "What did you use to eat when you were a kid? What do you eat now?",
      "Where did you use to live? Where do you live now?",
      "What did your mom use to do when she was young?",
      "Crazy story: You used to be a dragon. What did you use to do every day?",
      "Crazy story: Your coach used to live on the moon. What did he or she use to do there?",
      "Crazy story: Your dog used to be a famous singer. What did he use to sing?",
      "Crazy story: When you were a kid you used to fly to school. What did you use to see from the sky?",
      "Crazy story: Your grandmother used to be a pirate. What did she use to do? Why did she stop?"
    ]
  },
  {
    "level": "b3",
    "week": 4,
    "day": 4,
    "enabled": false,
    "title": "Monthly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b3",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Monthly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 1,
    "day": 1,
    "enabled": false,
    "title": "Coaching Day",
    "grammar": "",
    "disabledReason": "Coaching Day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "What didn't you do in B3 that you will do in B4 to improve your English?",
    "grammar": "Past & Future · Going to / Will · Negatives",
    "questions": [
      "What didn't you do in B3 that you will do in B4 to improve your English?",
      "What did you do well in B3? What are you going to do better in B4?",
      "What mistakes did you make last month? What will you do differently now?",
      "What don't you do every day that you will start doing to practice English?",
      "What did you learn yesterday, and what are you going to learn this week?",
      "Crazy story: Last month you studied English with a parrot. What did it teach you? What will you teach it in B4?",
      "Crazy story: In B3 you never did your homework because a dragon ate it. What will you do in B4 to stop the dragon?",
      "Crazy story: Yesterday your coach was a robot. What didn't the robot do? What will the human coach do today?",
      "Crazy story: You didn't speak English in B3 because you were a fish. Now you are human. What will you do?",
      "Crazy story: Your brain was on vacation in B3. Where did it go? What is it going to do in B4?"
    ]
  },
  {
    "level": "b4",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "Describe a happy moment in your life.",
    "grammar": "Simple Past · -ED endings · Mixed tenses",
    "questions": [
      "Describe a happy moment in your life.",
      "What was the happiest day of your life? What happened and why was it special?",
      "Tell me about a happy moment with your family. What were you doing? What happened?",
      "What is a happy moment you are going to have soon? What did you do to prepare?",
      "Describe a happy moment that didn't go as planned. What happened?",
      "Crazy story: The happiest moment of your life was when your dog won the lottery. What happened? What is he going to do with the money?",
      "Crazy story: Describe the happy moment when you met an alien who spoke perfect English. What did you talk about?",
      "Crazy story: Yesterday your coach gave everyone a car. What happened? What are you going to do with yours?",
      "Crazy story: Describe the happy day your grandmother became a famous DJ. What happened?",
      "Crazy story: You were walking when you found a door to Disneyland in your kitchen. What did you do? What will you do tomorrow?"
    ]
  },
  {
    "level": "b4",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "What was your birthday like and what will you do on the next one?",
    "grammar": "Simple Past (irregular verbs) · Future · Mixed tenses",
    "questions": [
      "What was your birthday like and what will you do on the next one?",
      "What did you do on your last birthday? Who was there? What didn't you do?",
      "What are you going to do on your next birthday? Where will you celebrate?",
      "What was your best birthday ever? Why? What did you do?",
      "What did your family do for your last birthday? What will you do for theirs?",
      "Crazy story: On your last birthday a dinosaur brought the cake. What happened? What will it bring next year?",
      "Crazy story: Your last birthday party was on the moon. What did you do? What won't you do next time?",
      "Crazy story: Your coach celebrated your birthday by singing opera on the roof. What happened? What is he or she going to do next year?",
      "Crazy story: On your last birthday you woke up as a superhero. What did you do? What will you do on your next one?",
      "Crazy story: Your cat organized your last birthday. What did it do? What is it going to do differently next year?"
    ]
  },
  {
    "level": "b4",
    "week": 1,
    "day": 5,
    "enabled": false,
    "title": "Weekly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "How was your last family trip and why?",
    "grammar": "Simple Present / 3rd person · Mixed tenses",
    "questions": [
      "How was your last family trip and why?",
      "Where did you go on your last family trip? What did you do there? What didn't you like?",
      "What do you usually do on family trips? Where are you going to go next?",
      "What was the best trip of your life? What happened?",
      "What did your family do on the last trip while you were resting?",
      "Crazy story: Your last family trip was to the center of the Earth. How was it? What did you see?",
      "Crazy story: On your last trip your grandmother drove a race car. What happened? Why?",
      "Crazy story: Your family traveled with 10 monkeys. How was the trip? What are you going to do next time?",
      "Crazy story: Your last family trip was on a flying bus. Where did you go? What happened?",
      "Crazy story: On your last trip your dad got lost in the jungle and became king. How was it? What is he doing now?"
    ]
  },
  {
    "level": "b4",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "What does your coach do to help you?",
    "grammar": "Simple Present 3rd person · Mixed tenses · Negatives",
    "questions": [
      "What does your coach do to help you?",
      "What does your coach do every class? What did he or she do yesterday that helped you?",
      "What doesn't your coach do that you want him or her to do?",
      "What does your coach do when you make a mistake? What did he or she say last time?",
      "What do your classmates do to help you? What will you do to help them?",
      "Crazy story: Your coach is a wizard. What does he or she do to help you learn English? What did he or she do yesterday?",
      "Crazy story: Your coach is a robot from the future. What does it do in class? What is it going to do tomorrow?",
      "Crazy story: Your coach has a magic parrot. What does the parrot do every class? What did it do yesterday?",
      "Crazy story: Your coach is Spider-Man. What does he do to help you? What doesn't he do?",
      "Crazy story: Your coach sends you dreams in English every night. What does he or she do? What did you dream last night?"
    ]
  },
  {
    "level": "b4",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "How was your first class at E4CC?",
    "grammar": "Simple Past · Past Progressive · Mixed tenses",
    "questions": [
      "How was your first class at E4CC?",
      "What did you do on your first day at E4CC? How did you feel? How do you feel now?",
      "What were you doing before your first class? What happened during the class?",
      "What didn't you understand on your first day? What do you understand now?",
      "What will you remember about your first class at E4CC?",
      "Crazy story: On your first day at E4CC the coach was a chicken. How was the class? What did it teach?",
      "Crazy story: Your first class at E4CC was underwater. What happened? What are you going to do in the next class?",
      "Crazy story: On your first day you arrived on a horse. What happened? What did your classmates say?",
      "Crazy story: In your first class everybody spoke only in songs. How was it? What did you sing?",
      "Crazy story: On your first day at E4CC a ghost was sitting next to you. What did it do? What is it doing now?"
    ]
  },
  {
    "level": "b4",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "How was E4CC founded?",
    "grammar": "Simple Past review · Mixed tenses",
    "questions": [
      "How was E4CC founded?",
      "Who founded E4CC? When did it start? What does it do now?",
      "What did E4CC do at the beginning? What is it doing now? What will it do in the future?",
      "How was your favorite company founded? What does it do today?",
      "Imagine you founded a school. What did you do first? What is it going to teach?",
      "Crazy story: E4CC was founded by a talking pupusa. How did it happen? What does the pupusa do now?",
      "Crazy story: E4CC was founded on Mars. What happened? How did the students get there?",
      "Crazy story: Your dog founded a school for cats. How was it founded? What does it teach now?",
      "Crazy story: E4CC was founded 500 years ago by pirates. What did they teach? What is going to change next year?",
      "Crazy story: Your grandmother founded a call center for monkeys. How did it happen? What are the monkeys doing right now?"
    ]
  },
  {
    "level": "b4",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Weekly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "How was life 20 years ago vs. now?",
    "grammar": "Verb to be: past / present / future",
    "questions": [
      "How was life 20 years ago vs. now?",
      "What did people do 20 years ago that they don't do now?",
      "What was your life like 10 years ago? What is it like now? What will it be like in 10 years?",
      "How were phones 20 years ago? How are they now? What will they be like in the future?",
      "What did your parents do for fun when they were young? What do you do now?",
      "Crazy story: 20 years ago everybody traveled on dinosaurs. How was life? What do people use now?",
      "Crazy story: 20 years ago your coach was a baby genius teaching English. What did he or she do? What is he or she doing now?",
      "Crazy story: 20 years ago phones were alive and talked to you. How was life? What are phones going to be like in 20 years?",
      "Crazy story: 20 years ago your city was under the sea. How did people live? How do they live now?",
      "Crazy story: 20 years ago you were a famous rock star. What did you do? What do you do now? What will you do in 20 years?"
    ]
  },
  {
    "level": "b4",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "What do you think about E4CC?",
    "grammar": "Yes/No questions in mixed tenses · Opinions",
    "questions": [
      "What do you think about E4CC?",
      "What do you like about E4CC? What don't you like?",
      "What did you think about E4CC before you started? What do you think now?",
      "What is your opinion about your coach and your classmates?",
      "What do you think E4CC is going to do for your future?",
      "Crazy story: E4CC is a school for superheroes. What do you think about it? What did you learn yesterday?",
      "Crazy story: Imagine E4CC has a swimming pool with sharks in every classroom. What do you think? What did the sharks do yesterday?",
      "Crazy story: Your dog studies at E4CC too. What does he think about it? What is he going to do when he graduates?",
      "Crazy story: E4CC moved to the moon. What do you think? How did the students get there?",
      "Crazy story: The coaches at E4CC are all famous singers. What do you think? What did they sing yesterday?"
    ]
  },
  {
    "level": "b4",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Talk about a special moment in your life.",
    "grammar": "Wh- questions in mixed tenses",
    "questions": [
      "Talk about a special moment in your life.",
      "What was the most special day of your life? What happened? Who was there?",
      "Talk about a special moment with a friend. What were you doing? What happened?",
      "What special moment are you going to have this year? What did you do to prepare?",
      "Talk about a special moment that changed your life. What did you do after that?",
      "Crazy story: A special moment: the day you talked to a whale. What did it say? What are you going to do with the information?",
      "Crazy story: Talk about the special day your coach became the president. What happened? What is he or she doing now?",
      "Crazy story: The most special moment of your life: you found a dragon egg. What did you do? What is the dragon doing now?",
      "Crazy story: Talk about the day your shoes started to talk. What did they say? What do they say every morning now?",
      "Crazy story: A special moment: you won a trip to the year 2500. What did you see? What are people going to do there?"
    ]
  },
  {
    "level": "b4",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Talk about a scary moment in your life.",
    "grammar": "Mixed tenses · Past Progressive",
    "questions": [
      "Talk about a scary moment in your life.",
      "What was the scariest moment of your life? What were you doing when it happened?",
      "Talk about a scary moment when you were a child. What happened? What did you do?",
      "What scares you now? What scared you before? What won't scare you in the future?",
      "Talk about a scary movie you watched. What happened? How did you feel?",
      "Crazy story: A scary moment: a zombie was in your kitchen eating your pupusas. What happened? What did you do?",
      "Crazy story: Talk about the scary night your coach called you at 3 am to practice English. What happened?",
      "Crazy story: The scariest moment of your life: your cat started to speak. What did it say? What does it say now?",
      "Crazy story: You were sleeping when a giant spider asked you for directions. What happened? What did you tell it?",
      "Crazy story: Talk about the scary day the sun didn't rise. What did people do? What are they going to do if it happens again?"
    ]
  },
  {
    "level": "b4",
    "week": 3,
    "day": 5,
    "enabled": false,
    "title": "Weekly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "Interview practice",
    "grammar": "Interview questions · Mixed tenses",
    "questions": [
      "Tell me about yourself: what do you do, what did you do before, and what are you going to do in the future?",
      "Why do you want to work in a call center? What did you do to prepare?",
      "What are your strengths and weaknesses? What did you do to improve them?",
      "Tell me about your last job or school. What did you do there? What didn't you like?",
      "Where do you see yourself in 5 years? What will you do to get there?",
      "Crazy story: You are in a job interview to be the king's chef. What did you cook before? What will you cook for the king?",
      "Crazy story: Interview for a job on Mars. Why do you want to go? What did you do to prepare? What are you going to do there?",
      "Crazy story: A monkey is interviewing you. What questions does it ask? What did you answer?",
      "Crazy story: Interview to be a superhero. What are your powers? What did you do yesterday with them?",
      "Crazy story: Interview for a job as a dragon trainer. What experience do you have? What will you do on your first day?"
    ]
  },
  {
    "level": "b4",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Interview practice",
    "grammar": "Interview questions · Mixed tenses",
    "questions": [
      "Why should we hire you? What did you do in the past that shows you are a good worker?",
      "Tell me about a problem you had and how you solved it. What are you going to do if it happens again?",
      "What do you do when a customer is angry? What did you do last time someone was angry with you?",
      "What did you learn at E4CC? How are you going to use it in your job?",
      "Do you have work experience? What did you do? What didn't you like about it?",
      "Crazy story: Interview to be a pirate captain. What did you do on your last ship? What will you do on this one?",
      "Crazy story: You are interviewing a ghost for a call center job. What does it do? What did it do before?",
      "Crazy story: Interview for a job as the president's personal DJ. What music did you play before? What are you going to play?",
      "Crazy story: Interview to work in a zoo for aliens. What experience do you have? What will you do with the aliens?",
      "Crazy story: Interview to be Santa Claus. What did you do last Christmas? What are you going to do this Christmas?"
    ]
  },
  {
    "level": "b4",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Interview practice",
    "grammar": "Interview questions · Mixed tenses",
    "questions": [
      "What makes you happy at work? What made you happy in your last job or at school?",
      "Tell me about your biggest achievement. What did you do? What are you going to achieve next?",
      "How do you work with a team? Tell me about a time you worked with a team. What happened?",
      "What are you doing right now to improve your English? What did you do last month? What will you do next month?",
      "Describe a typical day in your life. What did you do differently yesterday? What will change when you get a job?",
      "Crazy story: Interview to be a professional sleeper. What experience do you have? What did you do yesterday? What will you do on Monday?",
      "Crazy story: Interview to be a taxi driver for dinosaurs. What did you do before? How are you going to handle a T-Rex?",
      "Crazy story: Interview with a robot boss. What does it ask? What did you tell it about your biggest achievement?",
      "Crazy story: Interview to be a chef at a restaurant for cats. What did you cook before? What are you going to cook for the cats?",
      "Crazy story: Interview for the job of official pupusa taster. What did you eat yesterday? What will you taste tomorrow?"
    ]
  },
  {
    "level": "b4",
    "week": 4,
    "day": 4,
    "enabled": false,
    "title": "Weekly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "b4",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Weekly Evaluation",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "tigers",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "What did you do last month?",
    "grammar": "Simple Past (Coaching Day)",
    "questions": [
      "What did you do last month?",
      "What was the best thing that happened to you last month? Why?",
      "What did you do last month that you had never done before?",
      "What didn't you do last month that you wanted to do? Why not?",
      "What did you learn last month, in English or in life?",
      "Crazy story: Last month you woke up as a millionaire for 30 days. What did you do with the money?",
      "Crazy story: Last month a dragon worked at your call center. What did it do? What happened with the customers?",
      "Crazy story: Last month you traveled to the year 1800. What did you do? What did people say about your phone?",
      "Crazy story: Last month your coach was invisible. What did he or she do in class? How did you know?",
      "Crazy story: Last month you lived with 20 monkeys. What did they do? What did you do to survive?"
    ]
  },
  {
    "level": "tigers",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Modal Verbs",
    "questions": [
      "Debate: Should students be allowed to use their phones in class? Why or why not?",
      "Debate: Is it better to work from home or at the office? What should companies do?",
      "Debate: Should everyone in El Salvador learn English? What might happen if they don't?",
      "Debate: Can money buy happiness? What should people do to be truly happy?",
      "Debate: Should call centers require a dress code? Why or why not?",
      "Debate: Should people get a job as soon as they finish high school, or should they go to university first?",
      "Debate: Should social media be banned for people under 16? What could happen?",
      "Debate: Is it better to be rich and busy, or poor and free? What would you choose?",
      "Debate: Should employees be allowed to take a nap at work? What might be the benefits and problems?",
      "Debate: Should pets be allowed in the office? Why should or shouldn't they?"
    ]
  },
  {
    "level": "tigers",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "Give recommendations",
    "grammar": "Modal Verbs",
    "questions": [
      "Give recommendations to a friend who wants to pass a job interview at a call center. Use modals.",
      "Your friend can't sleep well. What should he or she do?",
      "A classmate wants to improve his English fast. What should he do and what shouldn't he do?",
      "Give recommendations to someone who wants to save money.",
      "Your friend wants to visit El Salvador. What should he or she do and see?",
      "Crazy story: Your friend wants to become a pirate. What should he do? What shouldn't he do?",
      "Crazy story: A zombie wants to get a job at a call center. Give him recommendations.",
      "Crazy story: Your dog wants to learn English. What should he do? What might help him?",
      "Crazy story: Your coach wants to live on the moon. What should he or she take? What must he or she do first?",
      "Crazy story: An alien just arrived in San Salvador. Give it recommendations: what should it eat, where should it go?"
    ]
  },
  {
    "level": "tigers",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "How to keep great mental health. Use modals.",
    "grammar": "Semi-modal Verbs",
    "questions": [
      "Talk about how to keep great mental health. Use modals.",
      "What do you have to do every day to feel good? What do you need to stop doing?",
      "What should people do when they feel stressed at work?",
      "What did you have to do last week to relax? What are you going to have to do this week?",
      "Give advice to a classmate who feels nervous before an interview. What ought he or she to do?",
      "Crazy story: A dragon is very stressed because everybody runs away from him. What does he need to do to feel better?",
      "Crazy story: Your coach has to teach 100 classes a day and is very tired. What should he or she do? What must the school do?",
      "Crazy story: A robot feels sad because it has no emotions. What does it have to do to keep great mental health?",
      "Crazy story: Your cat is anxious because the dog got a promotion. Give it advice. Use modals.",
      "Crazy story: You have to live one year on a small island with a talking parrot. What do you need to do to keep great mental health?"
    ]
  },
  {
    "level": "tigers",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "What would you do if you met your favorite celebrity?",
    "grammar": "Second Conditional",
    "questions": [
      "What would you do if you had the chance to meet your favorite celebrity and why?",
      "If you won one million dollars, what would you do with the money?",
      "If you could live anywhere in the world, where would you live and why?",
      "What would you do if you were the president of El Salvador?",
      "If you could change one thing about your past, what would you change?",
      "Crazy story: If your dog could talk for one day, what would you ask him?",
      "Crazy story: If you woke up tomorrow as your coach, what would you do in class?",
      "Crazy story: If a dinosaur knocked on your door right now, what would you do?",
      "Crazy story: If you could turn into any animal, which one would you choose and what would you do?",
      "Crazy story: If aliens offered you a job on their planet, would you accept? What would you do there?"
    ]
  },
  {
    "level": "tigers",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "What were you doing yesterday at 7 pm? What are you doing right now?",
    "grammar": "Past and Present Progressive",
    "questions": [
      "What were you doing yesterday at 7 pm? What are you doing right now? Explain why.",
      "What were you doing this morning at 6 am? What are you doing now that is different?",
      "What was your family doing last night while you were studying English? What are they doing right now?",
      "What were you doing when you received your last important phone call? What are you doing right now instead?",
      "What was your coach doing at the beginning of class? What is he or she doing now?",
      "Crazy story: Yesterday at 7 pm you were wrestling a bear. What was happening? What are you doing right now to recover?",
      "Crazy story: Last night at midnight your neighbor was flying over your house. What was he doing? What is he doing right now?",
      "Crazy story: At 7 pm yesterday your coach was selling pupusas on the moon. What was he or she doing exactly? What is he or she doing now?",
      "Crazy story: While you were sleeping, your phone was texting your boss. What was it saying? What is it doing right now?",
      "Crazy story: Yesterday at 7 pm a giant was taking a shower in the ocean. What was everyone else doing? What is the giant doing now?"
    ]
  },
  {
    "level": "tigers",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Has technology made our lives better or worse? Give examples of things that have changed.",
      "Debate: Have call centers been good for El Salvador? What have they changed?",
      "Debate: Is it better to have traveled a lot or to have saved a lot of money?",
      "Debate: Has social media made people more connected or less connected?",
      "Debate: Should companies hire people who have never had a job? Why or why not?",
      "Debate: Have video games done more harm or more good to young people?",
      "Debate: Is it better to have one best friend or many friends?",
      "Debate: Has online learning been better than in-person classes? What has your experience been?",
      "Debate: Should people who have made serious mistakes get a second chance at work?",
      "Debate: Has life become easier or harder than it was for our grandparents?"
    ]
  },
  {
    "level": "tigers",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "How long have you been studying English? What challenges have you faced?",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "How long have you been studying English, and what challenges have you faced along the way?",
      "How long have you been living in your city? What has changed since you arrived?",
      "What have you been doing lately to practice English outside of class?",
      "How long have you been working or studying? What have you learned so far?",
      "What is something you have been trying to do for a long time? Have you succeeded?",
      "Crazy story: You have been teaching English to a dragon for 3 years. What challenges have you faced?",
      "Crazy story: Your cat has been studying at E4CC for 6 months. What has it been doing in class? How has it improved?",
      "Crazy story: You have been living in a submarine for one year. What have you been doing there? What have you missed?",
      "Crazy story: Your coach has been secretly training to be an astronaut. How long has he or she been doing it? What has been the hardest part?",
      "Crazy story: You have been working at a call center for ghosts for 2 years. What have the customers been asking? What challenges have you faced?"
    ]
  },
  {
    "level": "tigers",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "What have you been doing to get ready for your next interview?",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "What have you been doing to get ready for your next interview?",
      "What did you do in your last interview that worked well? What have you changed since then?",
      "What skills have you been improving this month? How did you practice yesterday?",
      "What has E4CC taught you so far that you will use in an interview?",
      "What have you been doing to improve your pronunciation? What did you do last week?",
      "Crazy story: Your next interview is with a dragon company. What have you been doing to get ready? What did you practice yesterday?",
      "Crazy story: You have been preparing for an interview on Mars. What have you packed? What did you learn about Martians last week?",
      "Crazy story: Your dog has an interview at a bank tomorrow. What has he been doing to prepare? What did he wear to the last one?",
      "Crazy story: You have been practicing interviews with a talking mirror for a month. What has it told you? What did it say yesterday?",
      "Crazy story: Your coach has been training you with a sword for your interview. Why? What have you learned?"
    ]
  },
  {
    "level": "tigers",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "tigers",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "Describe the evolution of technology over the past 30 years.",
    "grammar": "USED TO",
    "questions": [
      "Describe the evolution of technology over the past 30 years.",
      "What did people use to do before smartphones? What do they do now?",
      "How did people use to communicate 30 years ago? How do they communicate today?",
      "What technology did you use to have as a kid that doesn't exist anymore?",
      "What did your parents use to do for fun that you don't do? What do you think people will use in 30 years?",
      "Crazy story: 30 years ago people used to send messages with trained pigeons. Describe how technology evolved from pigeons to WhatsApp.",
      "Crazy story: Your grandmother used to be a hacker in the 90s. What did she use to do? What does she do now?",
      "Crazy story: Phones used to be alive and used to bite people. Describe how they evolved into today's phones.",
      "Crazy story: 30 years ago your coach used to teach English with smoke signals. How did his or her classes evolve?",
      "Crazy story: Cars used to run on bananas. Describe the evolution of transportation over the past 30 years."
    ]
  },
  {
    "level": "tigers",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Short Comparatives",
    "questions": [
      "Debate: Is it better to be smarter or to be funnier?",
      "Debate: Which is harder: learning English or learning to drive?",
      "Debate: Is life in the city better than life in the countryside?",
      "Debate: Are older people wiser than younger people?",
      "Debate: Is it more important to be happy at work or to earn more money?",
      "Debate: Are cats easier to take care of than dogs?",
      "Debate: Is it cheaper and healthier to cook at home than to eat out?",
      "Debate: Is working in a call center more stressful than working in a restaurant?",
      "Debate: Is it better to be an early bird or a night owl?",
      "Debate: Is watching a movie at home more fun than going to the cinema?"
    ]
  },
  {
    "level": "tigers",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Choose a topic and discuss it with your friends.",
    "grammar": "Long Comparatives",
    "questions": [
      "Compare beaches and mountains. Which is more relaxing and why?",
      "Compare working in a call center with working in a restaurant. Which is more interesting?",
      "Compare your life now with your life 5 years ago. What is more difficult? What is more exciting?",
      "Compare two famous singers. Who is more talented and why?",
      "Compare learning English online with learning in person. Which is more effective?",
      "Crazy story: Compare a dragon and a unicorn as pets. Which is more dangerous? Which is more expensive?",
      "Crazy story: Compare living on the moon with living under the sea. Which is more comfortable?",
      "Crazy story: Compare your coach with a robot teacher. Who is more patient? Who is more boring?",
      "Crazy story: Compare a zombie and a vampire as coworkers. Who is more responsible?",
      "Crazy story: Compare a pupusa and a pizza as superheroes. Which one is more powerful?"
    ]
  },
  {
    "level": "tigers",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Sales Role Play",
    "grammar": "Superlatives",
    "questions": [
      "Sales role play: Sell me this phone. Why is it the best phone on the market?",
      "Sales role play: Convince me to buy a car. What is the most important feature?",
      "Sales role play: Sell me a vacation package to El Salvador. Why is it the best destination?",
      "Sales role play: Sell me an English course at E4CC. What is the biggest advantage?",
      "Sales role play: Sell me a gym membership. Why is it the healthiest decision I can make?",
      "Crazy story: Sell me a pet dragon. Why is it the best pet in the world?",
      "Crazy story: Sell me a ticket to the moon. Why is it the most exciting trip ever?",
      "Crazy story: Sell me invisible shoes. Why are they the most comfortable shoes ever made?",
      "Crazy story: Sell me your coach as a personal assistant. Why is he or she the best?",
      "Crazy story: Sell me a time machine. What is the most interesting year I could visit?"
    ]
  },
  {
    "level": "tigers",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "She is a nurse. What does she usually do? Explain why.",
    "grammar": "Simple Present (Book Quiz day)",
    "questions": [
      "She is a nurse. What does she usually do? Explain why.",
      "He is a call center agent. What does he usually do every day? Explain why.",
      "What does your mom usually do on weekdays? Why?",
      "What does a good coach usually do in class? Explain why.",
      "What do you usually do after class? Why?",
      "Crazy story: She is a nurse for dinosaurs. What does she usually do? Explain why.",
      "Crazy story: He is a chef on a pirate ship. What does he usually cook? Why?",
      "Crazy story: Your dog is a lawyer. What does he usually do at work? Explain why.",
      "Crazy story: She is a teacher on the moon. What does she usually do in class? Why?",
      "Crazy story: He is a vampire who works at a bank. What does he usually do? Explain why."
    ]
  },
  {
    "level": "tigers",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "Predictions",
    "grammar": "Simple Future",
    "questions": [
      "Make 3 predictions about your life in 10 years.",
      "What will El Salvador be like in 20 years?",
      "What will technology be like in 2050?",
      "What will you do with your first salary when you get hired?",
      "Make predictions about your classmates: what will they be doing in 5 years?",
      "Crazy story: Predict what will happen if dogs learn to talk next year.",
      "Crazy story: In 2040 robots will be our coaches. What will classes be like?",
      "Crazy story: Predict what will happen when your cat becomes the president.",
      "Crazy story: In the future, people will live on clouds. What will their daily life be like?",
      "Crazy story: Predict what will happen if pupusas become the official currency of El Salvador."
    ]
  },
  {
    "level": "tigers",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Is it worse to regret something you did or something you didn't do?",
      "Debate: Is it better to have lived in many countries or to have deep roots in one place?",
      "Debate: Has English become more important than any other skill for getting a job?",
      "Debate: Should people who have never failed be trusted with big responsibilities?",
      "Debate: Has fast food done more damage than good to our society?",
      "Debate: Have smartphones made us smarter or lazier?",
      "Debate: Is it better to have had a strict teacher or a relaxed one?",
      "Debate: Has the internet made learning easier or just more distracting?",
      "Debate: Should a person who has worked 10 years in the same job change careers?",
      "Debate: Have we become too dependent on delivery apps?"
    ]
  },
  {
    "level": "tigers",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "How long have you ______?",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "How long have you been living in your current house? What do you like about it?",
      "How long have you been studying English? What has been the biggest challenge?",
      "How long have you known your best friend? How did you meet?",
      "How long have you been doing your favorite hobby? Why did you start?",
      "How long have you been waiting for something important? What is it?",
      "Crazy story: How long have you been hiding a dinosaur in your garage? Why?",
      "Crazy story: How long has your coach been living in the classroom? What has he or she been eating?",
      "Crazy story: How long have you been working as a spy? What missions have you done?",
      "Crazy story: How long has your cat been running a business? What has it been selling?",
      "Crazy story: How long have aliens been living in your neighbor's house? What have they been doing?"
    ]
  },
  {
    "level": "tigers",
    "week": 4,
    "day": 4,
    "enabled": true,
    "title": "Role-Play: New in the city",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "Role-play: You are new in the city. Ask a stranger for directions to the nearest bank.",
      "Role-play: You just moved to a new city. Tell your neighbor about yourself and ask about the neighborhood.",
      "Role-play: You are new at work. Introduce yourself to a coworker and ask how long he or she has been working there.",
      "Role-play: You are new in the city and you lost your wallet. Ask a police officer for help.",
      "Role-play: You just arrived in a new city. Ask at a restaurant what the best local food is.",
      "Crazy story: You are new in a city where everybody is a robot. Ask for directions.",
      "Crazy story: You just moved to a city on the moon. Ask your neighbor about the rules.",
      "Crazy story: You are new in the city and your only guide is a talking dog. Ask him where to eat.",
      "Crazy story: You just arrived in a city where nobody has heard of pupusas. Explain what they are and ask where to buy the ingredients.",
      "Crazy story: You are new in a city of vampires. Ask a stranger where you can find a doctor."
    ]
  },
  {
    "level": "tigers",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "sharks",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "What did you do last Christmas?",
    "grammar": "Simple Past (Coaching Day)",
    "questions": [
      "What did you do last Christmas?",
      "Where did you spend last Christmas? Who was with you? What did you eat?",
      "What was the best gift you received last Christmas? What did you give?",
      "What did you do on New Year's Eve? What didn't you do that you usually do?",
      "What was different about last Christmas compared to the one before?",
      "Crazy story: Last Christmas Santa got stuck in your chimney. What did you do? What did he say?",
      "Crazy story: Last Christmas your family celebrated on a pirate ship. What happened? What did you eat?",
      "Crazy story: Last Christmas you received a baby dragon as a gift. What did it do? What did you do?",
      "Crazy story: Last Christmas your coach dressed as a reindeer and visited every student. What did he or she do at your house?",
      "Crazy story: Last Christmas all the gifts came alive at midnight. What happened? What did you do?"
    ]
  },
  {
    "level": "sharks",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Modal Verbs",
    "questions": [
      "Debate: Should employees be allowed to work four days a week? What might happen?",
      "Debate: Should children be able to choose what they study at school?",
      "Debate: Must every call center agent speak perfect English, or is good communication enough?",
      "Debate: Should people over 70 be allowed to drive? What could happen?",
      "Debate: Should companies be able to check their employees' social media?",
      "Debate: Should students have homework every day? Why or why not?",
      "Debate: Should everyone learn how to cook before they turn 18?",
      "Debate: Should people be able to bring their kids to work?",
      "Debate: Should fast food restaurants be allowed near schools?",
      "Debate: Should a boss be able to call you after working hours?"
    ]
  },
  {
    "level": "sharks",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "Give recommendations. Explain why.",
    "grammar": "Modal Verbs",
    "questions": [
      "Give recommendations to a person who wants to lose weight. Explain why.",
      "Mention things you should not do while driving. Explain why.",
      "What are some requirements to get a job in your country? Explain why.",
      "Give recommendations to a friend who wants to work at a call center. What should he or she do first?",
      "Give advice to someone who wants to learn English in one year.",
      "Crazy story: A hippo wants to lose weight to fit in an airplane seat. Give him recommendations.",
      "Crazy story: Your grandmother wants to drive a race car. What should she do and what shouldn't she do?",
      "Crazy story: A zombie wants to get a job as a nurse. What are the requirements? What should he do?",
      "Crazy story: Your dog wants to run a marathon. Give him recommendations. Explain why.",
      "Crazy story: A ghost wants to get a driver's license. What should it do? What must it avoid?"
    ]
  },
  {
    "level": "sharks",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "What are some things you have to do to improve your life?",
    "grammar": "Semi-modal Verbs",
    "questions": [
      "What are some things you have to do to improve your life?",
      "What do you need to do this year to improve your English and get a job?",
      "What do you have to stop doing to be healthier? Explain why.",
      "What did you have to do last year that improved your life?",
      "What does a person need to do to be a better friend?",
      "Crazy story: A vampire wants to improve his life. What does he have to do? What does he need to stop doing?",
      "Crazy story: Your coach has to live with 50 cats. What does he or she need to do to be happy?",
      "Crazy story: A robot wants to become human. What does it have to do first?",
      "Crazy story: You have to improve your life in 24 hours or you turn into a frog. What do you need to do?",
      "Crazy story: A pirate wants to change his life and work in an office. What does he have to do? What does he need to learn?"
    ]
  },
  {
    "level": "sharks",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "If you could live anywhere in the world... / If your pet started talking...",
    "grammar": "Second Conditional",
    "questions": [
      "If you could live anywhere in the world, where would it be and why?",
      "If your pet started talking to you, what would it say?",
      "If you could have dinner with any famous person, who would you choose and what would you ask?",
      "If you had one extra hour every day, what would you do with it?",
      "If you could have any job in the world, what would you do?",
      "Crazy story: If your pet started talking and asked for a salary, what would you say?",
      "Crazy story: If you could live on any planet, which one would you choose and what would you do there?",
      "Crazy story: If your coach became a cat, how would classes change?",
      "Crazy story: If you woke up and everybody spoke only in songs, what would you sing first?",
      "Crazy story: If a genie gave you three ridiculous wishes, what would you wish for?"
    ]
  },
  {
    "level": "sharks",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "What were you doing to improve your English before E4CC? What are you doing now?",
    "grammar": "Past and Present Progressive",
    "questions": [
      "What were you doing to improve your English before E4CC? And what are you doing now with E4CC?",
      "What were you doing last year at this time? What are you doing now that is different?",
      "What were you doing to find a job before? What are you doing now?",
      "What was your family doing while you were studying last night? What are they doing now?",
      "What were you doing 5 years ago? What are you doing right now to change your life?",
      "Crazy story: Before E4CC you were learning English from a parrot. What was it teaching you? What are you doing now?",
      "Crazy story: Last year you were working as a clown in a circus. What were you doing there? What are you doing now?",
      "Crazy story: Before E4CC you were practicing English with ghosts at midnight. What were you saying? What are you doing now instead?",
      "Crazy story: Yesterday your coach was teaching English to monkeys. What were they doing? What is the coach doing now?",
      "Crazy story: Five years ago you were living in a tree. What were you doing every day? What are you doing now?"
    ]
  },
  {
    "level": "sharks",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Has El Salvador changed for the better in the last 10 years?",
      "Debate: Is it better to have failed many times or to have never tried?",
      "Debate: Have streaming services killed the cinema?",
      "Debate: Should people who have never traveled give travel advice?",
      "Debate: Has music gotten better or worse in the last 20 years?",
      "Debate: Is a person who has read many books smarter than one who has traveled a lot?",
      "Debate: Have cell phones ruined family dinners?",
      "Debate: Should someone who has made a big mistake at work be fired immediately?",
      "Debate: Has working from home made people more or less productive?",
      "Debate: Have we lost important traditions because of technology?"
    ]
  },
  {
    "level": "sharks",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "Your best friend studied abroad for a year. Describe what you both have been doing.",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "Your best friend started to study abroad 1 year ago. Now it is time to meet. Describe what you both have been doing.",
      "What have you been doing since you started at E4CC? What has changed?",
      "Imagine you meet an old classmate after 5 years. What have you been doing? What has he or she been doing?",
      "What has your family been doing lately? What have you been doing with them?",
      "What have you been working on this month? What have you been struggling with?",
      "Crazy story: Your best friend has been studying on Mars for a year. Describe what you both have been doing.",
      "Crazy story: Your dog went to study abroad in Paris. He is back. What has he been doing there?",
      "Crazy story: Your coach has been living with penguins for a year. What has he or she been doing? What have you been doing in class without him or her?",
      "Crazy story: You have been working as a secret agent for a year. What have you been doing? What have your friends been thinking?",
      "Crazy story: Your cousin has been living in a castle with a dragon. Describe what they have both been doing."
    ]
  },
  {
    "level": "sharks",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "Have you ever had a difficult moment in your life? How did you overcome it?",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "Have you ever had a difficult moment in your life? How did you overcome it?",
      "What is the hardest thing you have ever done? What did you learn from it?",
      "Have you ever failed at something important? What did you do after that?",
      "What has been the most difficult part of learning English? How have you been dealing with it?",
      "Tell me about a problem you had at work or school. How did you solve it?",
      "Crazy story: Have you ever been chased by a dinosaur? How did you overcome it?",
      "Crazy story: You once lost your voice for a month and could only sing. How did you overcome it?",
      "Crazy story: Have you ever had to teach English to 100 monkeys? What was difficult? How did you do it?",
      "Crazy story: One day you woke up in a world without coffee. How did you overcome it?",
      "Crazy story: Your coach once turned into a statue during class. What did the students do? How did they overcome it?"
    ]
  },
  {
    "level": "sharks",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "sharks",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "What did you use to do when you were younger and how is it different now?",
    "grammar": "USED TO",
    "questions": [
      "What did you use to do when you were younger, and how is it different now?",
      "What did you use to eat as a kid that you don't eat now?",
      "What games did you use to play? What do you do for fun now?",
      "What did your parents use to say that you didn't understand then but understand now?",
      "What did you use to think about your future when you were a kid? What do you think now?",
      "Crazy story: When you were younger you used to be a superhero. What did you use to do? Why did you stop?",
      "Crazy story: You used to live under the sea with the fish. How is life different now?",
      "Crazy story: Your coach used to be a famous wrestler. What did he or she use to do? What does he or she do now?",
      "Crazy story: When you were a kid, your pet used to talk. What did it use to say? What does it do now?",
      "Crazy story: You used to travel to school on a dragon. How is your transportation different now?"
    ]
  },
  {
    "level": "sharks",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Short Comparatives",
    "questions": [
      "Debate: Is it harder to be a parent today than 30 years ago?",
      "Debate: Are dogs more loyal than people?",
      "Debate: Is it better to be famous or to be rich?",
      "Debate: Is summer better than winter?",
      "Debate: Is it more difficult to speak English or to understand it?",
      "Debate: Are big cities safer than small towns?",
      "Debate: Is it better to be a leader or a team player?",
      "Debate: Are books better than movies?",
      "Debate: Is it easier to make friends as a kid or as an adult?",
      "Debate: Is it better to have a job you love with a low salary, or a boring job with a high salary?"
    ]
  },
  {
    "level": "sharks",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Choose a topic and discuss it with your friends.",
    "grammar": "Long Comparatives",
    "questions": [
      "Compare cats and dogs. Which is more affectionate? Which is more independent?",
      "Compare traveling by bus and traveling by car. Which is more comfortable and more expensive?",
      "Compare living with your parents and living alone. Which is more difficult?",
      "Compare two cities you know. Which is more interesting? Which is more dangerous?",
      "Compare two social media apps. Which is more useful? Which is more addictive?",
      "Crazy story: Compare a giant and a tiny elf as roommates. Who is more annoying?",
      "Crazy story: Compare a dragon and a submarine as transportation. Which is more comfortable and more dangerous?",
      "Crazy story: Compare a vampire and a werewolf as babysitters. Who is more responsible?",
      "Crazy story: Compare a talking parrot and a robot as English coaches. Who is more patient?",
      "Crazy story: Compare life on the moon and life inside a volcano. Which is more exciting?"
    ]
  },
  {
    "level": "sharks",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Choose a topic and discuss it with your friends.",
    "grammar": "Superlatives",
    "questions": [
      "What is the best place in El Salvador? Why is it the most beautiful?",
      "Who is the most talented singer of all time? Why?",
      "What is the most difficult thing about learning English? What is the easiest?",
      "What was the happiest day of your life? What was the worst?",
      "What is the most important invention in history? Why?",
      "Crazy story: What is the most dangerous pet in the world: a dragon, a shark or a baby T-Rex? Why?",
      "Crazy story: Who is the best superhero to work at a call center? Why?",
      "Crazy story: What is the worst place to live: the moon, the bottom of the ocean, or inside a volcano? Why?",
      "Crazy story: Which animal would be the laziest boss? Why?",
      "Crazy story: What is the most ridiculous job in the world? Why would it be the best?"
    ]
  },
  {
    "level": "sharks",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "What does Sarah do every Saturday morning?",
    "grammar": "Simple Present (Book Quiz day)",
    "questions": [
      "What does Sarah do every Saturday morning? Explain why.",
      "What do you do every Saturday morning? Why?",
      "What does your best friend do on weekends? Explain why.",
      "What does your mom usually do on Sundays?",
      "What does a call center agent do every day at work?",
      "Crazy story: Sarah is a dragon. What does she do every Saturday morning? Explain why.",
      "Crazy story: Your dog has a job at a bank. What does he do every Monday?",
      "Crazy story: Your coach lives in a castle. What does he or she do every Saturday morning?",
      "Crazy story: A ghost lives in your kitchen. What does it do every night? Why?",
      "Crazy story: Superman is unemployed. What does he do every Saturday morning now?"
    ]
  },
  {
    "level": "sharks",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "What are your plans for next year?",
    "grammar": "Simple Future",
    "questions": [
      "What are your plans for next year?",
      "What will you do with your first paycheck when you get hired?",
      "What changes will you make in your life next year?",
      "Where will you be and what will you be doing one year from now?",
      "What are you going to do next year that you didn't do this year?",
      "Crazy story: Next year you will be the mayor of a city of cats. What are your plans?",
      "Crazy story: Next year you will open a restaurant on the moon. What will you cook? Who will visit?",
      "Crazy story: Next year your coach will become a pirate. What are his or her plans?",
      "Crazy story: Next year you will have a pet dinosaur. What will you do with it?",
      "Crazy story: Next year all phones will disappear. What are your plans to survive?"
    ]
  },
  {
    "level": "sharks",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Has the world become a better place in the last 50 years?",
      "Debate: Should people who have never worked in a call center give advice about it?",
      "Debate: Have online friendships become as real as in-person friendships?",
      "Debate: Has E4CC changed your life more than school did?",
      "Debate: Should a person who has lied once never be trusted again?",
      "Debate: Have cars done more harm than good to cities?",
      "Debate: Is it better to have had many jobs or one long career?",
      "Debate: Has the internet made people ruder?",
      "Debate: Should people who have never had kids give parenting advice?",
      "Debate: Has fashion become less creative than it used to be?"
    ]
  },
  {
    "level": "sharks",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Role-play: What have you been doing lately?",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "Role-play: You meet a friend you haven't seen in months. What have you been doing lately?",
      "Role-play: Your boss asks what you have been working on this week. Explain.",
      "Role-play: Call your mom and tell her what you have been doing lately.",
      "Role-play: Your coach asks what you have been doing to practice English. Explain.",
      "Role-play: You meet an old classmate. Ask what he or she has been doing and share what you have been doing.",
      "Crazy story: Role-play: You meet your dog on the street wearing a suit. Ask him what he has been doing lately.",
      "Crazy story: Role-play: An alien visits you and asks what humans have been doing lately. Explain.",
      "Crazy story: Role-play: Your coach has been missing for a month and comes back with a long beard. Ask what he or she has been doing.",
      "Crazy story: Role-play: You meet Santa Claus in July. Ask him what he has been doing since Christmas.",
      "Crazy story: Role-play: A zombie neighbor asks what you have been doing. Answer and ask him too."
    ]
  },
  {
    "level": "sharks",
    "week": 4,
    "day": 4,
    "enabled": true,
    "title": "Questions about love and romance",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "What is the most important quality in a partner? Why?",
      "How did your parents or grandparents meet? What have they been doing together since then?",
      "What do you think about online dating? Have you or your friends ever tried it?",
      "What is the best date you have ever heard about? What happened?",
      "What should a person do on a first date? What shouldn't they do?",
      "Crazy story: A vampire asks you out on a date. What would you do? Where would you go?",
      "Crazy story: Your best friend fell in love with a robot. What has he or she been doing? What advice would you give?",
      "Crazy story: Describe the perfect first date on the moon. What would you do?",
      "Crazy story: Your coach is planning a romantic dinner for 100 cats. What is he or she going to do?",
      "Crazy story: Cupid is on vacation and you have his job for one day. Who would you make fall in love and why?"
    ]
  },
  {
    "level": "sharks",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "eagles",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "What did you do on your first day of class at E4CC?",
    "grammar": "Simple Past (Coaching Day)",
    "questions": [
      "What did you do on your first day of class at E4CC?",
      "How did you feel on your first day at E4CC? What surprised you?",
      "Who did you meet on your first day? What did you talk about?",
      "What didn't you understand on your first day? What did you do about it?",
      "What did you do after your first class? Did you tell anyone about it?",
      "Crazy story: On your first day at E4CC the classroom was on a boat. What happened?",
      "Crazy story: On your first day your coach spoke only in riddles. What did you do? What did you understand?",
      "Crazy story: On your first day at E4CC a dragon was sitting in the front row. What did it do? What did the coach do?",
      "Crazy story: You arrived on your first day and everybody was wearing pajamas. What happened? What did you wear the next day?",
      "Crazy story: On your first day you accidentally joined a class for astronauts. What did you learn? How did you get back?"
    ]
  },
  {
    "level": "eagles",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Modal Verbs",
    "questions": [
      "Debate: Should people be able to retire at 50? What might happen to the economy?",
      "Debate: Should every employee have to learn basic first aid?",
      "Debate: Should students be allowed to grade their teachers?",
      "Debate: Must a good leader be strict, or can a relaxed leader be just as effective?",
      "Debate: Should people have to pass an exam before becoming parents?",
      "Debate: Should companies be able to ban tattoos and piercings at work?",
      "Debate: Should everyone learn a musical instrument at school?",
      "Debate: Should people be able to vote online from their phones?",
      "Debate: Should public transportation be free for everyone?",
      "Debate: Should employees be allowed to listen to music while they work?"
    ]
  },
  {
    "level": "eagles",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "Give recommendations",
    "grammar": "Modal Verbs",
    "questions": [
      "Give recommendations to a friend who is addicted to his phone. Explain why.",
      "Your classmate is always late to class. What should he or she do?",
      "A friend wants to start exercising but has no time. What could he or she do?",
      "Give recommendations to a person who feels nervous when speaking English.",
      "Your cousin wants to study abroad. What should he or she do first? What must he or she avoid?",
      "Crazy story: A dragon is addicted to cigarettes. What advice can you give him?",
      "Crazy story: Your coach wants to become a professional wrestler. What should he or she do and what shouldn't he or she do?",
      "Crazy story: A ghost is always late to his haunting job. Give him recommendations.",
      "Crazy story: A robot wants to make friends with humans. What should it do? What might scare people?",
      "Crazy story: Your dog wants to become a YouTuber. Give him recommendations. Explain why."
    ]
  },
  {
    "level": "eagles",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "Role-Play: Convince your friend to go to a party with you",
    "grammar": "Semi-modal Verbs",
    "questions": [
      "Role-play: Convince your friend to go to a party with you. What does he or she have to do to get ready?",
      "Role-play: Convince your friend to join E4CC. What does he or she need to do to apply?",
      "Role-play: Convince your boss to let you leave early. What do you have to finish first?",
      "Role-play: Convince your mom to let you travel with your friends. What do you need to promise?",
      "Role-play: Convince a classmate to practice English with you every day. What does he or she have to do?",
      "Crazy story: Role-play: Convince a vampire to go to a party at the beach at noon. What does he need to bring?",
      "Crazy story: Role-play: Convince your cat to go to a dog party. What does it have to do to be accepted?",
      "Crazy story: Role-play: Convince your coach to have the class on a roller coaster. What does the school need to do?",
      "Crazy story: Role-play: Convince a robot to dance at a party. What does it have to learn first?",
      "Crazy story: Role-play: Convince a dinosaur to go to a costume party. What does it need to wear?"
    ]
  },
  {
    "level": "eagles",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "If you won the lottery, what would you do and why?",
    "grammar": "Second Conditional",
    "questions": [
      "If you won the lottery, what would you do and why?",
      "If you won the lottery, would you keep working? Why or why not?",
      "If you won the lottery, what would you buy first? What would you give to your family?",
      "If you won the lottery, where would you travel and who would you take?",
      "If you won the lottery, how would your daily life change?",
      "Crazy story: If you won the lottery but could only spend it on animals, what would you buy?",
      "Crazy story: If you won the lottery and had to give half to your coach, what would he or she do with it?",
      "Crazy story: If you won the lottery on Mars, what would you buy there?",
      "Crazy story: If you won the lottery but had to live in a castle with a ghost, would you accept? What would you do?",
      "Crazy story: If your dog won the lottery, what would he do with the money?"
    ]
  },
  {
    "level": "eagles",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "What weren't you doing last year that you are doing this year?",
    "grammar": "Past and Present Progressive",
    "questions": [
      "What weren't you doing last year that you are doing this year?",
      "What were you doing last year at this time? What are you doing now instead?",
      "What weren't you doing for your health last year that you are doing now?",
      "What was your family doing last year that they aren't doing now?",
      "What weren't you doing to find a job last year? What are you doing now?",
      "Crazy story: Last year you weren't flying to work, but this year you are. What happened? What are you doing differently?",
      "Crazy story: Last year you were living with monkeys. What weren't you doing then that you are doing now with humans?",
      "Crazy story: Last year your coach was teaching from a submarine. What wasn't he or she doing then that he or she is doing now?",
      "Crazy story: Last year you weren't talking to your plants, but this year you are. What are they saying?",
      "Crazy story: Last year you were a professional sleeper. What weren't you doing then that you are doing now at E4CC?"
    ]
  },
  {
    "level": "eagles",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Has artificial intelligence made students lazier?",
      "Debate: Has food in El Salvador become healthier or unhealthier over the years?",
      "Debate: Should a company promote the person who has worked there the longest or the one who has worked the best?",
      "Debate: Have superhero movies become boring?",
      "Debate: Has social media made it harder to keep a secret?",
      "Debate: Is a person who has never left their country less open-minded?",
      "Debate: Have delivery apps made restaurants worse?",
      "Debate: Has the way we make friends changed for the better?",
      "Debate: Should someone who has failed an exam three times be allowed to take it again?",
      "Debate: Have people stopped reading books for pleasure?"
    ]
  },
  {
    "level": "eagles",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "What hobbies have you been doing during your free time?",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "What hobbies have you been doing during your free time? Explain why.",
      "What new hobby have you been trying lately? How has it been going?",
      "How long have you been doing your favorite hobby? Who introduced you to it?",
      "What hobby have you been wanting to start but haven't? Why?",
      "What have your friends been doing in their free time? Have you been joining them?",
      "Crazy story: You have been collecting dragon eggs as a hobby. How has it been going? What has hatched?",
      "Crazy story: Your coach has been training squirrels to sing in his or her free time. What have they been learning?",
      "Crazy story: You have been practicing underwater dancing with sharks. Why? How has it been going?",
      "Crazy story: Your grandmother has been doing extreme sports lately. What has she been doing? What have you been thinking?",
      "Crazy story: Your cat has been writing a novel in its free time. What has it been writing about?"
    ]
  },
  {
    "level": "eagles",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "Role-Play: Customer Service",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "Role-play: A customer calls because the internet has stopped working. Help him or her.",
      "Role-play: A customer has been waiting 3 days for a package that hasn't arrived. Solve the problem.",
      "Role-play: A customer wants to cancel a subscription. Find out why and offer a solution.",
      "Role-play: A customer is angry because he was charged twice. Apologize and fix it.",
      "Role-play: A customer has forgotten her password and has tried to log in 5 times. Help her.",
      "Crazy story: Role-play: A dragon calls customer service because his fire has stopped working. Help him.",
      "Crazy story: Role-play: A ghost calls because nobody has been scared by him lately. Offer a solution.",
      "Crazy story: Role-play: A customer calls because his robot has been dancing all night and won't stop. Help him.",
      "Crazy story: Role-play: An alien calls because the phone he bought doesn't work on his planet. Solve the problem.",
      "Crazy story: Role-play: A customer calls because her cat has ordered 500 pizzas online. Apologize and fix it."
    ]
  },
  {
    "level": "eagles",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "eagles",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "Compare life before vs. now",
    "grammar": "USED TO",
    "questions": [
      "Compare life before vs. now. What did people use to do that they don't do anymore?",
      "What did you use to dislike when you were a kid that you enjoy now as an adult?",
      "How did your family use to spend weekends? How do they spend them now?",
      "What did school use to be like? How is education different now?",
      "What did you use to do after school? What do you do after class now?",
      "Crazy story: Compare life before vs. now in a world where people used to have wings. Why did they stop flying?",
      "Crazy story: Your coach used to teach in a cave with dinosaurs. How are classes different now?",
      "Crazy story: People used to pay with bananas. Compare shopping before vs. now.",
      "Crazy story: You used to be invisible as a kid. How is life different now that people can see you?",
      "Crazy story: Dogs used to be the bosses and humans were the pets. Compare life before vs. now."
    ]
  },
  {
    "level": "eagles",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Short Comparatives",
    "questions": [
      "Debate: Is it better to be an only child or to have many siblings?",
      "Debate: Is it more important to be kind or to be honest?",
      "Debate: Is life easier for men or for women?",
      "Debate: Is it harder to learn English as a child or as an adult?",
      "Debate: Is working at night worse than working during the day?",
      "Debate: Are people happier in warm countries than in cold countries?",
      "Debate: Is it better to be the smartest person in the room or the funniest?",
      "Debate: Is it more stressful to be a student or to be a worker?",
      "Debate: Are online classes cheaper and better than in-person classes?",
      "Debate: Is a quiet person more trustworthy than a talkative person?"
    ]
  },
  {
    "level": "eagles",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "Choose a topic and discuss it with your friends.",
    "grammar": "Long Comparatives",
    "questions": [
      "Compare cars and bicycles. Which is more practical and more expensive?",
      "Compare working at night and working during the day. Which is more difficult?",
      "Compare Mr. Bean and a serious actor. Who is more entertaining?",
      "Compare living in El Salvador and living in the United States. Which is more comfortable? More expensive?",
      "Compare studying alone and studying in a group. Which is more effective?",
      "Crazy story: Compare a flying carpet and a dragon as transportation. Which is more comfortable? More dangerous?",
      "Crazy story: Compare a zombie and a mummy as roommates. Who is more organized?",
      "Crazy story: Compare a castle and a cave as a house. Which is more comfortable and more expensive?",
      "Crazy story: Compare your coach and a pirate as a boss. Who is more demanding?",
      "Crazy story: Compare a unicorn and a T-Rex as pets for a child. Which is more dangerous? More fun?"
    ]
  },
  {
    "level": "eagles",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Sales Role Play",
    "grammar": "Superlatives",
    "questions": [
      "Sales role play: Sell me a laptop. Why is it the fastest and most reliable on the market?",
      "Sales role play: Sell me a pair of running shoes. Why are they the most comfortable?",
      "Sales role play: Sell me a trip to the beach in El Salvador. Why is it the best beach in Central America?",
      "Sales role play: Sell me an internet plan. Why is it the cheapest and the fastest?",
      "Sales role play: Sell me a coffee. Why is it the best coffee in the world?",
      "Crazy story: Sell me a flying car. Why is it the safest car ever built?",
      "Crazy story: Sell me a house on the moon. Why is it the most exclusive neighborhood?",
      "Crazy story: Sell me a talking pillow. Why is it the most relaxing product ever?",
      "Crazy story: Sell me a vacation inside a volcano. Why is it the hottest destination?",
      "Crazy story: Sell me a pet dinosaur. Why is it the most loyal pet in the world?"
    ]
  },
  {
    "level": "eagles",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "She is a singer. What does she usually do? Explain why.",
    "grammar": "Simple Present (Book Quiz day)",
    "questions": [
      "She is a singer. What does she usually do? Explain why.",
      "He is a firefighter. What does he usually do every day?",
      "What does your coach usually do before class starts?",
      "What does a good student usually do every week? Explain why.",
      "What do you usually do when you feel stressed?",
      "Crazy story: She is a singer for cats. What does she usually do? Explain why.",
      "Crazy story: He is a firefighter in a city of dragons. What does he usually do?",
      "Crazy story: Your dog is a famous chef. What does he usually cook? Why?",
      "Crazy story: She is a pirate who works at a bank. What does she usually do every day?",
      "Crazy story: Your coach is a secret superhero. What does he or she usually do after class?"
    ]
  },
  {
    "level": "eagles",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "How will you prepare for your future career?",
    "grammar": "Simple Future",
    "questions": [
      "How will you prepare for your future career?",
      "What will you buy when you get your dream job?",
      "What skills will you need in your future career? How will you learn them?",
      "What will your life be like 5 years after you get your dream job?",
      "What won't you do anymore when you have your dream job?",
      "Crazy story: Your future career is dragon trainer. How will you prepare?",
      "Crazy story: You will be the first call center agent on Mars. How will you prepare for the job?",
      "Crazy story: Your dream job is professional ice cream tester. What will you do to get it?",
      "Crazy story: Your coach will become an astronaut next year. How will he or she prepare?",
      "Crazy story: In the future, your job will be translating for aliens. How will you prepare?"
    ]
  },
  {
    "level": "eagles",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Debates",
    "grammar": "Present Perfect",
    "questions": [
      "Debate: Has technology made our memories worse?",
      "Debate: Should people who have achieved their goals early retire early?",
      "Debate: Have we become too obsessed with being productive?",
      "Debate: Has the quality of TV improved or declined in the last 10 years?",
      "Debate: Should a company hire someone who has changed jobs every year?",
      "Debate: Have smartphones made people worse drivers?",
      "Debate: Has the world become too dependent on English?",
      "Debate: Is someone who has traveled a lot automatically more interesting?",
      "Debate: Have video calls replaced the need to travel for work?",
      "Debate: Has social media made people more creative or less creative?"
    ]
  },
  {
    "level": "eagles",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "How long have you ______?",
    "grammar": "Present Perfect Progressive",
    "questions": [
      "How long have you been working on your English? Tell us about it.",
      "How long have you been living in your neighborhood? What has changed?",
      "How long have you known your closest friend? How did you meet?",
      "How long have you been trying to reach an important goal? What have you done so far?",
      "How long have you been using your current phone? What have you been doing with it?",
      "Crazy story: How long have you been living with a ghost? What has it been doing?",
      "Crazy story: How long has your coach secretly been a vampire? How did you find out?",
      "Crazy story: How long have you been training your cat to drive? How has it been going?",
      "Crazy story: How long have aliens been studying at E4CC? What have they been learning?",
      "Crazy story: How long have you been hiding a dinosaur in your garage? What has it been eating?"
    ]
  },
  {
    "level": "eagles",
    "week": 4,
    "day": 4,
    "enabled": true,
    "title": "Life Lessons questions",
    "grammar": "Simple Past · Present Perfect · Present Perfect Progressive",
    "questions": [
      "What is the most important life lesson you have learned? How did you learn it?",
      "What has been your biggest achievement so far? What did you do to get there?",
      "What is a mistake you made that taught you something? What have you been doing differently since then?",
      "What advice would you give to your younger self?",
      "Who has taught you the most in your life? What did that person teach you?",
      "Crazy story: What life lesson did you learn from a talking monkey? What has changed since then?",
      "Crazy story: Your grandmother was a pirate and taught you a life lesson. What was it?",
      "Crazy story: What did you learn from the day you lived as a cat? How has it changed your life?",
      "Crazy story: Your coach learned a life lesson from a dragon. What was it? What has he or she been doing since then?",
      "Crazy story: What life lesson did you learn the day it rained pizza? Explain."
    ]
  },
  {
    "level": "eagles",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "adv1",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "VAOAT: Expired food — calm down the customer",
    "grammar": "VAOAT technique (Coaching Day)",
    "questions": [
      "VAOAT role-play. Customer: You bought food that was expired and you want compensation. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: Your pizza arrived cold and two hours late. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: You found a hair in your salad at a restaurant. Agent: Calm down the customer and offer a solution.",
      "VAOAT role-play. Customer: The supermarket charged you for 3 items you didn't buy. Agent: Apply VAOAT and fix the problem.",
      "VAOAT role-play. Customer: Your grocery delivery was missing half of the items. Agent: Calm down the customer applying VAOAT.",
      "Crazy story: VAOAT. Customer: A dragon bought 100 pounds of meat and it was expired. He is breathing fire. Agent: Calm him down applying VAOAT.",
      "Crazy story: VAOAT. Customer: You ordered a birthday cake and it arrived alive and singing. Agent: Calm down the customer and offer a solution.",
      "Crazy story: VAOAT. Customer: A vampire ordered tomato juice and received orange juice. He is furious. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your coffee machine started giving life advice instead of coffee. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: You bought a sandwich that expired in 1950. Agent: Calm down the customer and compensate."
    ]
  },
  {
    "level": "adv1",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Book a group tour",
    "grammar": "Simple Past · Past Progressive (parallel and interrupted actions)",
    "questions": [
      "Role-play. Customer: Book a group tour to Disneyland for your family. Agent: Help him or her and ask all the necessary questions.",
      "Role-play. Customer: Book a group tour to the beach for 15 coworkers. Agent: Offer options, dates and prices.",
      "Role-play. Customer: Book a city tour in New York for a couple on their honeymoon. Agent: Help them choose and confirm the booking.",
      "Role-play. Customer: Book a tour to the Mayan ruins for a school group of 30 students. Agent: Explain the requirements and confirm.",
      "Role-play. Customer: You want to change the date of a group tour you already booked. Agent: Help with the change and explain the policy.",
      "Crazy story: Role-play. Customer: Book a group tour to the moon for your grandparents. Agent: Help him or her and explain the requirements.",
      "Crazy story: Role-play. Customer: Book a tour for 20 dragons to visit a volcano. Agent: Ask the necessary questions and confirm.",
      "Crazy story: Role-play. Customer: A ghost family wants a night tour of a haunted castle. Agent: Help them book.",
      "Crazy story: Role-play. Customer: Book a group tour to Disneyland for your 12 cats. Agent: Explain the pet policy and offer options.",
      "Crazy story: Role-play. Customer: Book an underwater tour for a group of mermaids. Agent: Help them and confirm the booking."
    ]
  },
  {
    "level": "adv1",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "VAOAT: Customer – Agent",
    "grammar": "Simple Present · Present Progressive with prepositions",
    "questions": [
      "VAOAT role-play. Customer: Your internet has been down for 3 days and nobody has called you back. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: Your package was delivered to the wrong address. Agent: Apply VAOAT and solve it.",
      "VAOAT role-play. Customer: You were charged twice for the same order. Agent: Calm down the customer and fix the problem.",
      "VAOAT role-play. Customer: You have been on hold for 45 minutes and you are furious. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: Your new phone stopped working after one day. Agent: Calm down the customer and offer a solution.",
      "Crazy story: VAOAT. Customer: Your robot vacuum cleaner ran away from home. Agent: Calm down the customer applying VAOAT.",
      "Crazy story: VAOAT. Customer: Your smart fridge ordered 300 eggs by itself. Agent: Apply VAOAT and solve it.",
      "Crazy story: VAOAT. Customer: A zombie received a bill for a service he didn't order. Agent: Calm him down.",
      "Crazy story: VAOAT. Customer: Your package arrived in the year 1999 instead of today. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your GPS sent you to the bottom of the ocean. Agent: Calm down the customer and compensate."
    ]
  },
  {
    "level": "adv1",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "What will you do if you don't know the answer to a customer's question?",
    "grammar": "Simple Future with prepositions of time",
    "questions": [
      "What will you do if you don't know the answer to a customer's question?",
      "What will you do if a customer asks to speak with your supervisor?",
      "What will you do if the system goes down in the middle of a call?",
      "What will you do on your first day at a call center to make a good impression?",
      "What will you do if you make a mistake with a customer's account?",
      "Crazy story: What will you do if a customer calls and only speaks in rhymes?",
      "Crazy story: What will you do if a dragon calls and asks for a refund for a knight?",
      "Crazy story: What will you do if a customer asks you to sing before giving any information?",
      "Crazy story: What will you do if the customer is your own grandmother and she doesn't recognize your voice?",
      "Crazy story: What will you do if a customer calls from the year 2200 asking for a product that doesn't exist yet?"
    ]
  },
  {
    "level": "adv1",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "Booking a flight: Vocab + Role Play",
    "grammar": "Quiz day · Flow: booking a flight",
    "questions": [
      "Role-play. Customer: Book a round-trip flight from San Salvador to Los Angeles. Agent: Ask for dates, passengers and preferences.",
      "Role-play. Customer: You need to change your flight because of an emergency. Agent: Explain the options and fees.",
      "Role-play. Customer: You want a window seat and extra luggage. Agent: Explain the prices and confirm.",
      "Role-play. Customer: Your flight was cancelled and you need to travel today. Agent: Find alternatives.",
      "Role-play. Customer: Book a flight for a family of 5 with a baby. Agent: Explain the requirements and help them.",
      "Crazy story: Role-play. Customer: Book a flight to the moon for next Tuesday. Agent: Explain the options and the baggage policy.",
      "Crazy story: Role-play. Customer: A dragon wants to book a seat but he is 10 meters long. Agent: Find a solution.",
      "Crazy story: Role-play. Customer: A ghost wants a flight but has no passport. Agent: Explain the requirements.",
      "Crazy story: Role-play. Customer: Book a flight for 50 penguins to Antarctica. Agent: Ask the necessary questions and confirm.",
      "Crazy story: Role-play. Customer: You want to fly inside the luggage compartment because it's cheaper. Agent: Explain why that's not possible and offer options."
    ]
  },
  {
    "level": "adv1",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "RIOC: Sell a video game console",
    "grammar": "Present Perfect · Present Perfect Progressive",
    "questions": [
      "RIOC role-play. Customer: You want to buy a video game console. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a new smartphone but you are not sure which one. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You are looking for a laptop for work. Agent: Identify the needs and sell using RIOC.",
      "RIOC role-play. Customer: You want a TV for your living room. Agent: Sell using RIOC and offer an upgrade.",
      "RIOC role-play. Customer: You want to buy headphones for the gym. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A dragon wants a console that resists fire. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A grandmother wants a console to beat her grandson at video games. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A robot wants a console to \"feel emotions\". Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A pirate wants a console for his ship, which has no electricity. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: An alien wants a console but doesn't know what a video game is. Agent: Sell using RIOC."
    ]
  },
  {
    "level": "adv1",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Troubleshoot a technical issue",
    "grammar": "Past Perfect · Past Perfect Progressive",
    "questions": [
      "Role-play. Customer: Your printer isn't working. Agent: Troubleshoot the technical issue step by step.",
      "Role-play. Customer: Your Wi-Fi is connected but there is no internet. Agent: Troubleshoot.",
      "Role-play. Customer: Your phone won't charge. Agent: Troubleshoot the issue.",
      "Role-play. Customer: Your laptop is very slow. Agent: Troubleshoot and give recommendations.",
      "Role-play. Customer: Your TV has no sound. Agent: Troubleshoot step by step.",
      "Crazy story: Role-play. Customer: Your printer only prints pictures of cats. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your robot assistant only speaks in opera. Agent: Troubleshoot the issue.",
      "Crazy story: Role-play. Customer: Your smart fridge is freezing everything, including the kitchen. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your phone keeps calling your ex every midnight. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your microwave travels in time every time you heat food. Agent: Troubleshoot."
    ]
  },
  {
    "level": "adv1",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "RIOC: Customer – Agent",
    "grammar": "Modal Verbs",
    "questions": [
      "RIOC role-play. Customer: You want to buy a gym membership. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You are looking for a car insurance plan. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want an internet plan for your home office. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want to book a hotel for a weekend. Agent: Sell using RIOC and upsell.",
      "RIOC role-play. Customer: You want an English course. Agent: Sell E4CC using RIOC.",
      "Crazy story: RIOC. Customer: A vampire wants life insurance. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A mermaid wants a gym membership. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A ghost wants an internet plan for his haunted house. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A giant wants a hotel room. Agent: Sell using RIOC and find a solution.",
      "Crazy story: RIOC. Customer: A dinosaur wants an English course. Agent: Sell E4CC using RIOC."
    ]
  },
  {
    "level": "adv1",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "RIOC: Buy a new mattress",
    "grammar": "Comparatives and Superlatives",
    "questions": [
      "RIOC role-play. Customer: You want to buy a new mattress. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a sofa for a small apartment. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You need a new refrigerator. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a washing machine. Agent: Sell using RIOC and offer a warranty.",
      "RIOC role-play. Customer: You want an office chair because your back hurts. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A giant needs a mattress 10 meters long. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A vampire wants a comfortable coffin. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A dragon needs a fireproof sofa. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A family of 20 monkeys needs a refrigerator for bananas. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A robot wants a mattress to \"learn how to sleep\". Agent: Sell using RIOC."
    ]
  },
  {
    "level": "adv1",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "adv1",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "VAOAT: Flower arrangement with bad quality",
    "grammar": "BE USED TO · USED TO",
    "questions": [
      "VAOAT role-play. Customer: You ordered a flower arrangement and the quality is bad. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: The flowers for your mother's birthday arrived one day late. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: You ordered a wedding cake and it arrived with the wrong name. Agent: Calm down the customer.",
      "VAOAT role-play. Customer: You bought a dress online and it's a different color. Agent: Apply VAOAT and offer a solution.",
      "VAOAT role-play. Customer: The gift you sent to your friend never arrived. Agent: Calm down the customer and solve it.",
      "Crazy story: VAOAT. Customer: You ordered roses and received carnivorous plants that ate your cat's food. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your flower arrangement started singing at 3 am. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: A witch ordered magic flowers and they don't work. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your wedding cake was delivered to a dragon who ate it. Agent: Calm down the customer and compensate.",
      "Crazy story: VAOAT. Customer: The dress you ordered turns invisible when it rains. Agent: Apply VAOAT."
    ]
  },
  {
    "level": "adv1",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Read a medical bill",
    "grammar": "BE ABOUT TO · WAS/WERE GOING TO",
    "questions": [
      "Role-play. Customer: You don't understand your medical bill. Agent: Explain each charge clearly.",
      "Role-play. Customer: You think your medical bill has a mistake. Agent: Review it and explain.",
      "Role-play. Customer: You want to set up a payment plan for a hospital bill. Agent: Explain the options.",
      "Role-play. Customer: Your insurance didn't cover a procedure. Agent: Explain why and what the customer can do.",
      "Role-play. Customer: You received a bill for a doctor you never visited. Agent: Investigate and solve it.",
      "Crazy story: Role-play. Customer: A dragon received a medical bill for \"fire extinguishing\". Agent: Explain the charges.",
      "Crazy story: Role-play. Customer: A zombie doesn't understand why he was charged for a heartbeat check. Agent: Explain.",
      "Crazy story: Role-play. Customer: A robot's medical bill includes \"oil change\" and \"software therapy\". Agent: Explain each charge.",
      "Crazy story: Role-play. Customer: Your cat received a medical bill with 9 charges for 9 lives. Agent: Review it.",
      "Crazy story: Role-play. Customer: A ghost was charged for an X-ray that showed nothing. Agent: Explain and solve it."
    ]
  },
  {
    "level": "adv1",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "VAOAT: Customer – Agent",
    "grammar": "Passive Voice: past and future",
    "questions": [
      "VAOAT role-play. Customer: Your hotel room was dirty and the air conditioning didn't work. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: Your rental car had a flat tire and nobody helped you. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: Your streaming subscription was cancelled by mistake. Agent: Calm down the customer and restore it.",
      "VAOAT role-play. Customer: A technician never showed up for the appointment. Agent: Apply VAOAT and reschedule.",
      "VAOAT role-play. Customer: Your bank blocked your card while you were traveling. Agent: Calm down the customer and solve it.",
      "Crazy story: VAOAT. Customer: Your hotel room had a dragon sleeping in the bathtub. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your rental car only drives backwards. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: Your streaming service only shows documentaries about potatoes. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: The technician arrived, but he was a monkey and broke everything. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: Your bank sent your money to the moon by mistake. Agent: Apply VAOAT."
    ]
  },
  {
    "level": "adv1",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "What would you do if you had an angry customer?",
    "grammar": "Second Conditional",
    "questions": [
      "What would you do if you had an angry customer?",
      "What would you do if a customer insulted you during a call?",
      "What would you do if a customer called just to chat and wasn't asking for help?",
      "What would you do if you were struggling to meet your targets?",
      "What would you do if your team leader gave you negative feedback?",
      "Crazy story: What would you do if an angry dragon called and started breathing fire through the phone?",
      "Crazy story: What would you do if a customer insisted that he was calling from the year 1800?",
      "Crazy story: What would you do if a customer only communicated by singing?",
      "Crazy story: What would you do if your team leader were a talking parrot?",
      "Crazy story: What would you do if a customer offered you a million dollars to hang up?"
    ]
  },
  {
    "level": "adv1",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "Phone Carriers: Vocab + Role Play",
    "grammar": "Quiz day · Flow: phone carriers",
    "questions": [
      "Role-play. Customer: You want to change your phone plan to one with more data. Agent: Explain the options.",
      "Role-play. Customer: Your phone bill is higher than usual. Agent: Explain the charges.",
      "Role-play. Customer: You want to activate international roaming for a trip. Agent: Explain how it works and the cost.",
      "Role-play. Customer: Your signal is very weak at home. Agent: Troubleshoot and offer solutions.",
      "Role-play. Customer: You want to cancel your plan and switch to another carrier. Agent: Try to retain the customer.",
      "Crazy story: Role-play. Customer: A ghost wants a phone plan, but his calls always drop at midnight. Agent: Offer a solution.",
      "Crazy story: Role-play. Customer: A dragon melted three phones this month and wants insurance. Agent: Explain the options.",
      "Crazy story: Role-play. Customer: An alien wants international roaming for Mars. Agent: Explain the options.",
      "Crazy story: Role-play. Customer: A grandmother wants unlimited data to watch cat videos 24 hours a day. Agent: Help her.",
      "Crazy story: Role-play. Customer: Your phone only has signal when you stand on one foot. Agent: Troubleshoot."
    ]
  },
  {
    "level": "adv1",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "Interview Questions",
    "grammar": "Simple Past · -ED sounds",
    "questions": [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What is your greatest weakness? What is your greatest strength?",
      "Why do you want to work in a call center?",
      "Where do you see yourself in five years?",
      "Crazy story: Interview. You are applying to be the personal assistant of a dragon. Why should he hire you?",
      "Crazy story: Interview. Tell me about yourself, but you are a superhero hiding your identity.",
      "Crazy story: Interview. You are applying for a job on Mars. What is your greatest weakness?",
      "Crazy story: Interview. Why do you want to work at a call center for ghosts?",
      "Crazy story: Interview. Where do you see yourself in 500 years?"
    ]
  },
  {
    "level": "adv1",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Track an order",
    "grammar": "Present Perfect + SINCE and FOR",
    "questions": [
      "Role-play. Customer: You want to track an order that hasn't arrived. Agent: Find the order and give an update.",
      "Role-play. Customer: The tracking says \"delivered\" but you didn't receive anything. Agent: Investigate and solve it.",
      "Role-play. Customer: You want to change the delivery address of an order in transit. Agent: Help the customer.",
      "Role-play. Customer: Your order has been \"in process\" for two weeks. Agent: Explain and offer a solution.",
      "Role-play. Customer: You received only part of your order. Agent: Track the missing items.",
      "Crazy story: Role-play. Customer: Your order is being delivered by a turtle and it's been 3 months. Agent: Track it.",
      "Crazy story: Role-play. Customer: The tracking says your package is on the moon. Agent: Investigate.",
      "Crazy story: Role-play. Customer: A dragon ate the delivery truck with your order inside. Agent: Solve it.",
      "Crazy story: Role-play. Customer: Your package was delivered to your neighbor's dog, who won't give it back. Agent: Help.",
      "Crazy story: Role-play. Customer: You ordered one sock and received 10,000. Agent: Track the mistake and fix it."
    ]
  },
  {
    "level": "adv1",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Interview Questions",
    "grammar": "Prepositions: in / on / at",
    "questions": [
      "Tell me about a time you had a conflict with a coworker or classmate. How did you solve it?",
      "How do you handle working under pressure? Give an example.",
      "What can you contribute to our team?",
      "Tell me about your job experience or your studies.",
      "What motivates you every day?",
      "Crazy story: Interview. You are applying to be a pirate captain. How do you handle working under pressure?",
      "Crazy story: Interview. Tell me about a time you had a conflict with a zombie coworker.",
      "Crazy story: Interview. What can you contribute to a team of superheroes?",
      "Crazy story: Interview. Tell me about your job experience as a dragon trainer.",
      "Crazy story: Interview. You are a robot. What motivates you every day?"
    ]
  },
  {
    "level": "adv1",
    "week": 4,
    "day": 4,
    "enabled": true,
    "title": "What could you have done differently to achieve your goals faster?",
    "grammar": "Perfect Modals",
    "questions": [
      "What are some things you could have done differently to achieve your goals faster?",
      "What are 3 things you would have done differently in your life?",
      "What should you have done last year that you didn't do?",
      "What might have happened if you had started learning English earlier?",
      "What could your parents have done differently when you were a kid?",
      "Crazy story: You could have been a famous rock star. What should you have done differently?",
      "Crazy story: A dragon failed his job interview. What could he have done differently?",
      "Crazy story: Your coach could have been an astronaut. What should he or she have done?",
      "Crazy story: You lost a race against a turtle. What could you have done differently?",
      "Crazy story: A robot wanted to become human and failed. What might it have done differently?"
    ]
  },
  {
    "level": "adv1",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "adv2",
    "week": 1,
    "day": 1,
    "enabled": true,
    "title": "Tell me about yourself professionally",
    "grammar": "Interview (Coaching Day)",
    "questions": [
      "Tell me about yourself professionally.",
      "Describe your work experience and the skills you have developed.",
      "What are your professional goals for the next three years?",
      "Describe yourself in three words and explain why.",
      "What makes you a good candidate for a bilingual position?",
      "Crazy story: Tell me about yourself professionally, but you are a dragon applying for a customer service job.",
      "Crazy story: Describe your work experience as a pirate who now wants to work in sales.",
      "Crazy story: You are a robot. Tell me about yourself professionally and your \"software\" skills.",
      "Crazy story: Describe yourself in three words, but you are a cat applying to be a manager.",
      "Crazy story: Tell me about yourself professionally as a superhero looking for a desk job."
    ]
  },
  {
    "level": "adv2",
    "week": 1,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Make a hotel reservation",
    "grammar": "Simple Past · Past Progressive (parallel and interrupted actions)",
    "questions": [
      "Role-play. Customer: Make a hotel reservation for two nights in Miami. Agent: Ask for dates, room type and payment.",
      "Role-play. Customer: You need a hotel room with a sea view for your anniversary. Agent: Offer options and prices.",
      "Role-play. Customer: Reserve 5 rooms for a company event. Agent: Explain group rates and confirm.",
      "Role-play. Customer: You want to modify your reservation and add one more night. Agent: Help and explain the policy.",
      "Role-play. Customer: You need a room accessible for a wheelchair. Agent: Check availability and confirm.",
      "Crazy story: Role-play. Customer: Make a hotel reservation for a family of giants. Agent: Find a suitable room.",
      "Crazy story: Role-play. Customer: A vampire wants a room with no windows and late check-out at sunset. Agent: Help him.",
      "Crazy story: Role-play. Customer: Reserve a room for 30 penguins with a cold pool. Agent: Offer options.",
      "Crazy story: Role-play. Customer: A ghost wants a haunted suite for Halloween. Agent: Confirm the reservation.",
      "Crazy story: Role-play. Customer: Make a hotel reservation on the moon for your honeymoon. Agent: Explain the options."
    ]
  },
  {
    "level": "adv2",
    "week": 1,
    "day": 3,
    "enabled": true,
    "title": "VAOAT: Customer – Agent",
    "grammar": "Simple Present · Present Progressive with prepositions",
    "questions": [
      "VAOAT role-play. Customer: Your flight was overbooked and you lost your seat. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: The cable company cut your service by mistake. Agent: Apply VAOAT and restore it.",
      "VAOAT role-play. Customer: Your online order was cancelled without explanation. Agent: Calm down the customer.",
      "VAOAT role-play. Customer: You waited two hours at the restaurant and your food never came. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: The gym charged you after you cancelled your membership. Agent: Calm down the customer and solve it.",
      "Crazy story: VAOAT. Customer: A wizard's flying broom was cancelled by the airline. Agent: Calm him down applying VAOAT.",
      "Crazy story: VAOAT. Customer: Your cable company only transmits channels in dolphin language. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: You ordered a robot assistant and it is bossing you around. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: A giant waited at a restaurant and the chairs were too small. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: The gym charged a dragon for breaking all the treadmills with his fire. Agent: Calm him down and solve it."
    ]
  },
  {
    "level": "adv2",
    "week": 1,
    "day": 4,
    "enabled": true,
    "title": "Role-play: Read a phone bill",
    "grammar": "Simple Future with prepositions of time",
    "questions": [
      "Role-play. Customer: You don't understand the charges on your phone bill. Agent: Explain each one.",
      "Role-play. Customer: There is a charge for international calls you never made. Agent: Investigate and explain.",
      "Role-play. Customer: Your bill doubled this month. Agent: Review it and explain why.",
      "Role-play. Customer: You want to understand the taxes and fees on your bill. Agent: Explain them clearly.",
      "Role-play. Customer: You were charged for a premium service you didn't request. Agent: Explain and remove it.",
      "Crazy story: Role-play. Customer: Your phone bill includes 500 calls to the moon. Agent: Explain and investigate.",
      "Crazy story: Role-play. Customer: A ghost's phone bill shows calls to a cemetery at 3 am every night. Agent: Explain.",
      "Crazy story: Role-play. Customer: Your cat's phone bill is higher than yours. Agent: Review the charges.",
      "Crazy story: Role-play. Customer: Your bill has a charge for \"dragon roaming\". Agent: Explain what it is.",
      "Crazy story: Role-play. Customer: A robot's phone bill includes a \"feelings data plan\". Agent: Explain each charge."
    ]
  },
  {
    "level": "adv2",
    "week": 1,
    "day": 5,
    "enabled": true,
    "title": "Money Transfers: Vocab + Role Play",
    "grammar": "Quiz day · Flow: money transfers",
    "questions": [
      "Role-play. Customer: You want to send money to your family in another country. Agent: Explain the process, fees and time.",
      "Role-play. Customer: Your transfer hasn't arrived after 3 days. Agent: Track it and explain.",
      "Role-play. Customer: You sent money to the wrong account. Agent: Explain what can be done.",
      "Role-play. Customer: You want to know the exchange rate and the cheapest way to send $500. Agent: Explain the options.",
      "Role-play. Customer: You need to receive a transfer but you don't have a bank account. Agent: Explain the alternatives.",
      "Crazy story: Role-play. Customer: You want to send money to your cousin on Mars. Agent: Explain the fees and the time.",
      "Crazy story: Role-play. Customer: A pirate wants to transfer gold coins to his bank. Agent: Explain the process.",
      "Crazy story: Role-play. Customer: Your transfer was received by a dragon who refuses to give it back. Agent: Solve it.",
      "Crazy story: Role-play. Customer: A ghost wants to send money to his living relatives but has no ID. Agent: Explain the requirements.",
      "Crazy story: Role-play. Customer: You want to send 1,000 bananas as currency to a monkey. Agent: Explain the options."
    ]
  },
  {
    "level": "adv2",
    "week": 2,
    "day": 1,
    "enabled": true,
    "title": "RIOC: Explain it and apply it",
    "grammar": "Present Perfect · Present Perfect Progressive",
    "questions": [
      "RIOC role-play. Customer: You are looking for a new credit card. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a streaming subscription. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want to buy a bicycle for commuting. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a home security system. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a tablet for your kids. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A zombie wants a credit card. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A mermaid wants a streaming subscription for the ocean. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A giant wants a bicycle. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A vampire wants a home security system against vampire hunters. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A dragon wants a tablet for his baby dragons. Agent: Sell using RIOC."
    ]
  },
  {
    "level": "adv2",
    "week": 2,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Hotel Package Upgrade",
    "grammar": "Past Perfect · Past Perfect Progressive",
    "questions": [
      "Role-play. Customer: You booked a standard room. Agent: Offer an upgrade to a suite and convince the customer.",
      "Role-play. Customer: You booked a hotel without breakfast. Agent: Upsell the all-inclusive package.",
      "Role-play. Customer: You are traveling with kids. Agent: Offer the family package with activities.",
      "Role-play. Customer: You want a quiet stay. Agent: Offer the spa package upgrade.",
      "Role-play. Customer: You are on a business trip. Agent: Offer the executive package with airport transfer.",
      "Crazy story: Role-play. Customer: A dragon booked a standard room. Agent: Offer an upgrade to the fireproof suite.",
      "Crazy story: Role-play. Customer: A vampire booked a room. Agent: Upsell the \"no sunlight\" package.",
      "Crazy story: Role-play. Customer: A family of robots booked a room. Agent: Offer the package with unlimited charging.",
      "Crazy story: Role-play. Customer: A ghost booked a room. Agent: Upsell the haunted tower suite.",
      "Crazy story: Role-play. Customer: A mermaid booked a room. Agent: Offer the upgrade with a private pool."
    ]
  },
  {
    "level": "adv2",
    "week": 2,
    "day": 3,
    "enabled": true,
    "title": "RIOC: Customer – Agent",
    "grammar": "Modal Verbs",
    "questions": [
      "RIOC role-play. Customer: You want to buy a smartwatch. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a vacation package to Cancún. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You need a new car for your family. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want an online course to learn programming. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a pet insurance plan. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A pirate wants a smartwatch that works under water. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A family of ghosts wants a vacation package. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A giant needs a car. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A dragon wants to learn programming. Agent: Sell the course using RIOC.",
      "Crazy story: RIOC. Customer: A wizard wants insurance for his pet dragon. Agent: Sell using RIOC."
    ]
  },
  {
    "level": "adv2",
    "week": 2,
    "day": 4,
    "enabled": true,
    "title": "RIOC: Sell a package deal (flight + hotel)",
    "grammar": "Comparatives and Superlatives",
    "questions": [
      "RIOC role-play. Customer: You want a package deal (flight + hotel) to New York. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a cheap package for a weekend at the beach. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a honeymoon package. Agent: Sell using RIOC and upsell.",
      "RIOC role-play. Customer: You want a package to Europe for two weeks. Agent: Sell using RIOC.",
      "RIOC role-play. Customer: You want a family package to a theme park. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A dragon wants a package deal (flight + hotel) but he can fly by himself. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A family of penguins wants a package to the desert. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A vampire wants a honeymoon package in a sunny place. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A ghost wants a package to a haunted castle in Europe. Agent: Sell using RIOC.",
      "Crazy story: RIOC. Customer: A robot wants a package to a theme park with no electricity. Agent: Sell using RIOC."
    ]
  },
  {
    "level": "adv2",
    "week": 2,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  },
  {
    "level": "adv2",
    "week": 3,
    "day": 1,
    "enabled": true,
    "title": "VAOAT: You ordered a couch but it hasn't arrived",
    "grammar": "BE USED TO · USED TO",
    "questions": [
      "VAOAT role-play. Customer: You ordered a couch but it hasn't arrived. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: Your new refrigerator arrived damaged. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: The delivery team scratched your floor. Agent: Calm down the customer and offer a solution.",
      "VAOAT role-play. Customer: You received the wrong color of bed. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: Your furniture was delivered but nobody assembled it as promised. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: Your couch arrived, but it's alive and it won't let you sit. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: A giant's refrigerator arrived the size of a toy. Agent: Calm him down.",
      "Crazy story: VAOAT. Customer: The delivery team was a group of monkeys and they ate your fruit. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: A vampire's bed arrived with a mirror. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: Your furniture was delivered to the moon. Agent: Apply VAOAT and solve it."
    ]
  },
  {
    "level": "adv2",
    "week": 3,
    "day": 2,
    "enabled": true,
    "title": "Role-play: Router Troubleshoot",
    "grammar": "BE ABOUT TO · WAS/WERE GOING TO",
    "questions": [
      "Role-play. Customer: Your router has a red light and no internet. Agent: Troubleshoot step by step.",
      "Role-play. Customer: Your Wi-Fi works in the living room but not in the bedroom. Agent: Troubleshoot.",
      "Role-play. Customer: The internet is very slow at night. Agent: Troubleshoot and explain.",
      "Role-play. Customer: You forgot your Wi-Fi password. Agent: Help the customer recover or reset it.",
      "Role-play. Customer: Your router restarts by itself every hour. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your router only works when your dog is sleeping. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: A ghost keeps unplugging your router at midnight. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your Wi-Fi connects to the moon but not to your phone. Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: Your router speaks and refuses to give internet until you say \"please\". Agent: Troubleshoot.",
      "Crazy story: Role-play. Customer: A dragon melted the router and now the internet is only hot. Agent: Troubleshoot."
    ]
  },
  {
    "level": "adv2",
    "week": 3,
    "day": 3,
    "enabled": true,
    "title": "VAOAT: Customer – Agent",
    "grammar": "Passive Voice: past and future",
    "questions": [
      "VAOAT role-play. Customer: Your car repair cost double the estimate. Agent: Calm down the customer applying VAOAT.",
      "VAOAT role-play. Customer: Your concert tickets were never sent and the show is tomorrow. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: Your luggage was lost by the airline. Agent: Calm down the customer and explain the process.",
      "VAOAT role-play. Customer: Your taxi driver took a long route and charged you extra. Agent: Apply VAOAT.",
      "VAOAT role-play. Customer: The clinic cancelled your appointment without telling you. Agent: Calm down the customer and reschedule.",
      "Crazy story: VAOAT. Customer: A mechanic turned your car into a boat by mistake. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your concert tickets were for a concert in the year 1985. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: The airline lost your luggage and found a dinosaur egg instead. Agent: Apply VAOAT.",
      "Crazy story: VAOAT. Customer: Your taxi driver was a sloth and the trip took 9 hours. Agent: Calm down the customer.",
      "Crazy story: VAOAT. Customer: The clinic scheduled your appointment with a veterinarian. Agent: Apply VAOAT."
    ]
  },
  {
    "level": "adv2",
    "week": 3,
    "day": 4,
    "enabled": true,
    "title": "Role-play: Hotel Receptionist",
    "grammar": "Second Conditional",
    "questions": [
      "Role-play. Guest: You arrive at the hotel to check in. Receptionist: Welcome the guest, confirm the reservation and explain the services.",
      "Role-play. Guest: Your room key doesn't work. Receptionist: Solve the problem.",
      "Role-play. Guest: You want to check out and there is a charge you don't recognize. Receptionist: Explain and solve it.",
      "Role-play. Guest: You ask for restaurant recommendations and directions. Receptionist: Help the guest.",
      "Role-play. Guest: The room next door is very noisy at 2 am. Receptionist: Apologize and offer a solution.",
      "Crazy story: Role-play. Guest: A dragon arrives to check in. Receptionist: Welcome him and explain the fire policy.",
      "Crazy story: Role-play. Guest: A ghost complains that the room is \"too alive\". Receptionist: Offer a solution.",
      "Crazy story: Role-play. Guest: A giant can't fit through the door. Receptionist: Solve the problem.",
      "Crazy story: Role-play. Guest: A vampire asks for breakfast at midnight. Receptionist: Help him.",
      "Crazy story: Role-play. Guest: A family of monkeys asks for directions to the banana restaurant. Receptionist: Help them."
    ]
  },
  {
    "level": "adv2",
    "week": 3,
    "day": 5,
    "enabled": true,
    "title": "Role-play: Virtual Assistant Scheduling Meetings",
    "grammar": "Quiz day · Flow: scheduling",
    "questions": [
      "Role-play. Client: You need to schedule a meeting with three people in different time zones. Assistant: Find a time and confirm.",
      "Role-play. Client: You need to reschedule tomorrow's meeting. Assistant: Propose new times and notify everyone.",
      "Role-play. Client: You want to book a meeting room and order lunch for 10 people. Assistant: Organize everything.",
      "Role-play. Client: Cancel all your meetings on Friday and explain it to the attendees. Assistant: Handle it.",
      "Role-play. Client: Schedule a weekly team meeting for the next two months. Assistant: Set it up and confirm.",
      "Crazy story: Role-play. Client: Schedule a meeting between a vampire (only at night) and a rooster (only at dawn). Assistant: Find a time.",
      "Crazy story: Role-play. Client: Book a meeting room for 50 dragons. Assistant: Organize it.",
      "Crazy story: Role-play. Client: Schedule a meeting with someone who lives on Mars. Assistant: Deal with the time difference.",
      "Crazy story: Role-play. Client: Cancel a meeting with a ghost who doesn't use email. Assistant: Find a way to notify him.",
      "Crazy story: Role-play. Client: Schedule a weekly meeting for a team of cats who only wake up at 3 pm. Assistant: Set it up."
    ]
  },
  {
    "level": "adv2",
    "week": 4,
    "day": 1,
    "enabled": true,
    "title": "Interview Questions",
    "grammar": "Simple Past · -ED sounds",
    "questions": [
      "Why do you want to work for this company?",
      "Tell me about a time you went above and beyond for a customer or a classmate.",
      "How do you prioritize your tasks when everything is urgent?",
      "What would your previous boss or teacher say about you?",
      "Are you open to working flexible shifts, including evenings or weekends? Why?",
      "Crazy story: Interview. Why do you want to work for a company run by dragons?",
      "Crazy story: Interview. Tell me about a time you went above and beyond for a zombie customer.",
      "Crazy story: Interview. How do you prioritize your tasks when your boss is a cat?",
      "Crazy story: Interview. What would your previous boss, a pirate, say about you?",
      "Crazy story: Interview. Are you open to working night shifts at a haunted castle?"
    ]
  },
  {
    "level": "adv2",
    "week": 4,
    "day": 2,
    "enabled": true,
    "title": "What challenge have you overcome recently that made you feel proud?",
    "grammar": "Present Perfect + SINCE and FOR",
    "questions": [
      "What challenge have you overcome recently that made you feel proud? How did you do it?",
      "What is something you have achieved since you started at E4CC?",
      "How long have you been working on your biggest goal? What progress have you made?",
      "What habit have you kept for a long time? How has it helped you?",
      "What is a fear you have overcome? How did you do it?",
      "Crazy story: You recently overcame your fear of dragons. How did you do it?",
      "Crazy story: You have been training a monkey to work in a call center for 6 months. What challenge did you overcome?",
      "Crazy story: You recently won an eating competition against a giant. How did you prepare?",
      "Crazy story: You have been living with a ghost for a year and you finally became friends. How did you do it?",
      "Crazy story: You taught a robot to laugh. What was the biggest challenge?"
    ]
  },
  {
    "level": "adv2",
    "week": 4,
    "day": 3,
    "enabled": true,
    "title": "Interview Questions",
    "grammar": "Prepositions: in / on / at",
    "questions": [
      "Describe a situation where you had to learn something quickly. How did you do it?",
      "How do you deal with a customer who is wrong but insists he is right?",
      "What are your salary expectations and why?",
      "Tell me about a time you made a mistake at work or school. What did you learn?",
      "What do you know about our company and why are you a good fit?",
      "Crazy story: Interview. Describe a situation where you had to learn dragon language in one day.",
      "Crazy story: Interview. How do you deal with a customer who insists that the Earth is a pizza?",
      "Crazy story: Interview. What are your salary expectations if the company pays in bananas?",
      "Crazy story: Interview. Tell me about a time you made a mistake while working for a wizard.",
      "Crazy story: Interview. What do you know about our company, which sells clouds?"
    ]
  },
  {
    "level": "adv2",
    "week": 4,
    "day": 4,
    "enabled": true,
    "title": "What do you regret? What would / should you have done differently?",
    "grammar": "Perfect Modals",
    "questions": [
      "What things do you regret so far in your life? What would you have done differently?",
      "What should you have done differently, knowing what you know now?",
      "What is a decision you could have made earlier? What might have changed?",
      "What would you have studied if you had had the chance? Why?",
      "What advice would you have given yourself five years ago?",
      "Crazy story: You could have adopted a dragon instead of a dog. What would have changed?",
      "Crazy story: You should have accepted a job on the moon. What would your life have been like?",
      "Crazy story: A pirate regrets not learning English. What should he have done?",
      "Crazy story: Your coach could have been a famous singer. What might have happened?",
      "Crazy story: You turned down a wizard's offer to become invisible. What would you have done with that power?"
    ]
  },
  {
    "level": "adv2",
    "week": 4,
    "day": 5,
    "enabled": false,
    "title": "Evaluations",
    "grammar": "",
    "disabledReason": "Evaluation day — no wheel",
    "questions": []
  }
];

export function findDay(level: string, week: number, day: number) {
  return DAYS.find((d) => d.level === level && d.week === week && d.day === day);
}
