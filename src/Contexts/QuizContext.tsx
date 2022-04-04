import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { QuizContextType } from "../types/QuizContext.type";
import { useAuth } from "./AuthContext";
const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }: { children?: React.ReactNode }) => {
	const [quesNo, setQuesNo] = useState(0);
	const [currentScore, setCurrentScore] = useState(0);
	const [currentQues, setCurrentQues] = useState(1);
	const [Questions, setQuestions] = useState([]);
	const { token } = useAuth();
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		token &&
			(async () => {
				try {
					setLoader(true);
					const response = await axios.get(
						"https://quizBackend.ankushpndt.repl.co/quiz"
					);
					setQuestions(response.data.quizData);
					setLoader(false);
				} catch (error) {
					console.log(error);
				}
			})();
	}, [token, setLoader]);

	return (
		<QuizContext.Provider
			value={{
				Questions,
				quesNo,
				setQuesNo,
				currentScore,
				setCurrentScore,
				currentQues,
				setCurrentQues,
				loader,
			}}
		>
			{children}
		</QuizContext.Provider>
	);
};
export const useQuiz = () => {
	return useContext(QuizContext);
};
