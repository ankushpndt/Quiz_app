// import { Questions } from './data/Questions';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
import { v4 } from 'uuid';
import { Options } from './data/Questions.type';
import { Header } from './Header';
import './App.css';
import { useQuiz } from './Contexts/QuizContext';
import axios from 'axios';
import { useAuth } from './Contexts/AuthContext';
import { useLeaderboard } from './Contexts/LeaderboardContext';
export const Quiz = () => {
  const {
    quesNo,
    setQuesNo,
    currentScore,
    setCurrentScore,
    currentQues,
    setCurrentQues,
  } = useQuiz();
  const { Questions } = useQuiz();
  const { category } = useParams();
  const { user } = useAuth();
  const { setLeaderboard } = useLeaderboard();
  // const navigate = useNavigate();
  const filteredQuestions = Questions?.filter(
    (question) => question?.category?.toLowerCase() === category?.toLowerCase()
  );

  const answerCheck = (item: Options) => {
    if (currentQues >= 0 && currentQues <= 5) {
      console.log('Current Ques No', currentQues);
      setCurrentQues(currentQues + 1);
      if (item.isRight === true) {
        setQuesNo(quesNo + 1);
        setCurrentScore(currentScore + 1);
      } else {
        setQuesNo(quesNo + 1);
        setCurrentScore(currentScore - 1);
      }
    }
  };
  const postResult = async () => {
    try {
      const response = await axios.post(
        'https://quizBackend.ankushpndt.repl.co/leaderboard',
        {
          name: user,
          score: currentScore,
          category: category,
        }
      );
      setLeaderboard(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='Quiz' style={{ height: '100vh', color: 'white' }}>
      {/* <h1>Quiz App</h1> */}
      <Header username='Ankush' score={currentScore} />
      {
        <>
          <div className='quesNo'>
            {/* <span className={hide ? 'show' : 'hide'}> */}
            {quesNo < 5 ? (
              <span>
                {quesNo + 1} / {filteredQuestions?.length}
              </span>
            ) : (
              ''
            )}

            {/* </span> */}
            <span>
              {quesNo < 5 ? (
                filteredQuestions[quesNo]?.question
              ) : (
                <>
                  {currentScore >= 3
                    ? 'Congratulations'
                    : 'Better Luck Next Time'}
                  {postResult()}
                </>
              )}
            </span>
          </div>

          <div className='results'></div>
          <div className='options'>
            <ul
              style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                // cursor: 'pointer',
              }}
            >
              {quesNo < 5
                ? filteredQuestions[quesNo]?.options?.map((item) => (
                    <button
                      style={{
                        // backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',

                        padding: '1rem',
                        cursor: 'pointer',
                      }}
                      key={v4()}
                      className='answer__btn'
                      onClick={() => answerCheck(item)}
                    >
                      {item.option}
                    </button>
                  ))
                : ''}
            </ul>
            {quesNo < 5 ? (
              <>
                <button
                  className='nav__btn'
                  disabled={quesNo < 1}
                  onClick={() => setQuesNo(quesNo - 1)}
                >
                  Previous
                </button>
                <button
                  className='nav__btn'
                  disabled={quesNo > 3}
                  onClick={() => setQuesNo(quesNo + 1)}
                >
                  Next
                </button>
              </>
            ) : (
              ''
            )}
          </div>
          <div className='btn__restart'>
            <button
              onClick={() => {
                setQuesNo(0);
                setCurrentScore(0);
              }}
            >
              Play again
            </button>
          </div>
          <div className='home'>
            <NavLink to='/'>Home</NavLink>
          </div>
        </>
      }
    </div>
  );
};
