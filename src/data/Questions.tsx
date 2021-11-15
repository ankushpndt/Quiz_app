import { v4 } from 'uuid';
import { questions, Options } from './Questions.type';
export const Questions: questions[] = [
  {
    id: v4(),
    category: 'Marvel',

    question: 'What does MCU stand for?',
    options: [
      {
        option: 'Marvel Cinematic Universe',
        isRight: true,
      },
      {
        option: 'Marvel cinema universe',
        isRight: false,
      },
      {
        option: 'Marvel cinematic unified',
        isRight: false,
      },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: 'What is the real name of Captain America?',
    options: [
      {
        option: 'Steve Harpers',
        isRight: false,
      },
      {
        option: 'Steven Universe',
        isRight: false,
      },
      {
        option: 'Steve Rogers',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: 'Which hero does Bruce Banner turns into?',
    options: [
      {
        option: 'Iron Man',
        isRight: false,
      },
      {
        option: 'Falcon',
        isRight: false,
      },
      {
        option: 'Hulk',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: "Captain america's Shield Is made of?",
    options: [
      {
        option: 'Mithril',
        isRight: false,
      },
      {
        option: 'Adamantium',
        isRight: false,
      },
      {
        option: 'Vibranium',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'Marvel',

    question: "What is the name of Thor's new weapon?",
    options: [
      {
        option: 'Mjolnir',
        isRight: false,
      },
      {
        option: 'Hammer',
        isRight: false,
      },
      {
        option: 'Stormbreaker',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question: "What is Superman's original name, the one he was born with?",
    options: [
      {
        option: "Bu'alle",
        isRight: false,
      },
      {
        option: 'Clark Kent',
        isRight: false,
      },
      {
        option: "Kal'el",
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'Three DC comics superheroes are part of the Holy Trinity. Name the three.',
    options: [
      {
        option: 'Batman, Flash, Cyborg',
        isRight: false,
      },
      {
        option: 'Batman, Superman, Wonder Woman',
        isRight: true,
      },
      {
        option: 'Superman, Wonder Woman, Flash',
        isRight: false,
      },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'Wonder Woman carries around a whip that she uses to compel anyone caught in its grip to be honest. What is it called?',
    options: [
      {
        option: 'Gauntlet of Growth',
        isRight: false,
      },
      {
        option: 'Pearl of Existence',
        isRight: false,
      },
      {
        option: 'Lasso of Truth',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'In the 1987 graphic novel, "Batman: Son of the Demon," we learn that Batman has a son with Talia al Ghul. What is his name?',
    options: [
      {
        option: 'William',
        isRight: false,
      },
      {
        option: 'Barry',
        isRight: false,
      },
      {
        option: 'Damian',
        isRight: true,
      },
    ],
  },
  {
    id: v4(),
    category: 'DC',

    question:
      'The Flash (Barry Allen) gets married to a beautiful woman who is also a secret leader of Team Flash. What is her name?',
    options: [
      {
        option: 'Caitlin Snow',
        isRight: false,
      },
      {
        option: 'Sansa Horton',
        isRight: false,
      },
      {
        option: 'Iris West',
        isRight: true,
      },
    ],
  },
];
