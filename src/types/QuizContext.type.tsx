// import { questions, Options } from '../data/Questions.type';
export type QuizContextType = {
  Questions: questions[];
  quesNo: number;
  setQuesNo: Function;
  currentScore: number;
  setCurrentScore: Function;
  currentQues: number;
  setCurrentQues: Function;
};
export type Options = {
  option: string;

  isRight: boolean;
};
export type questions = {
  id: string;
  category: string;
  question: string;
  options: Options[];
};
