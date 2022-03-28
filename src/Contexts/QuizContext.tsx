import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { QuizContextType } from '../types/QuizContext.type';
const QuizContext = createContext({} as QuizContextType);

export const QuizProvider = ({ children }: { children?: React.ReactNode }) => {
  const [quesNo, setQuesNo] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentQues, setCurrentQues] = useState(1);
  const [Questions, setQuestions] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          'https://quizBackend.ankushpndt.repl.co/quiz'
        );

        setQuestions(response.data.quizData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
