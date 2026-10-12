export type DayData = {
  level: "b1" | "b2";
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
  { id: "b3", label: "BASIC 3", enabled: false },
  { id: "b4", label: "BASIC 4", enabled: false },
  { id: "int", label: "INTERMEDIATE", enabled: false },
  { id: "adv", label: "ADVANCED", enabled: false },
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
  }
];

export function findDay(level: string, week: number, day: number) {
  return DAYS.find((d) => d.level === level && d.week === week && d.day === day);
}
