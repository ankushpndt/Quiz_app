export type QuizContextType = {
	Questions: questions[];
	quesNo: number;
	setQuesNo: Function;
	currentScore: number;
	setCurrentScore: Function;
	currentQues: number;
	setCurrentQues: Function;
	loader: boolean;
};
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
