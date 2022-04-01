export type Options = {
  option: string;
  _id: string;
  isRight: boolean;
};
export type questions = {
  _id: string;
  category: string;
  question: string;
  options: Options[];
};
