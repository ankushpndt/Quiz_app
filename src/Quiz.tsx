import { useParams } from 'react-router';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { v4 } from 'uuid';
import { Options } from './data/Questions.type';
import { Header } from './Header';
import './App.css';
import { useQuiz } from './Contexts/QuizContext';
import axios from 'axios';
import { useAuth } from './Contexts/AuthContext';
import { useLeaderboard } from './Contexts/LeaderboardContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import { Loader } from './Components/Loader';
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
  const { leaderboard, setLeaderboard } = useLeaderboard();

  const filteredQuestions = Questions?.filter(
    (question) => question?.category?.toLowerCase() === category?.toLowerCase()
  );
  const [currentId, setCurrentId] = useState('');

  const [color, setColor] = useState('');
  const answerCheck = (item: Options) => {
    if (currentQues >= 0 && currentQues <= 5) {
      setCurrentId(String(item?._id));
      setCurrentQues(currentQues + 1);
      if (item.isRight === true) {
        setColor('#10b981');
        setTimeout(() => {
          setQuesNo(quesNo + 1);
        }, 3000);
        setCurrentScore(currentScore + 1);
      } else {
        setColor('#dc2626');
        setTimeout(() => {
          setQuesNo(quesNo + 1);
        }, 3000);
        setCurrentScore(currentScore - 1);
      }
    }
  };

  const postResult = async () => {
    console.log('inside func');
    try {
      const response = await axios.post(
        'https://quizBackend.ankushpndt.repl.co/leaderboard',
        {
          name: user,
          score: currentScore,
          category: category,
        }
      );

      leaderboard.push(response.data.response);
      setLeaderboard(leaderboard);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      {filteredQuestions?.length > 0 ? (
        <div className='Quiz' style={{ height: '100%', color: 'white' }}>
          <Header username={user} score={currentScore} />
          {
            <div className='quiz__container'>
              <div className='ques__no'>
                {quesNo <= 4 && (
                  <span>
                    {quesNo + 1} / {filteredQuestions?.length}
                  </span>
                )}

                <span>
                  {quesNo <= 4 ? (
                    filteredQuestions[quesNo]?.question
                  ) : (
                    <p>
                      {currentScore >= 3
                        ? 'Congratulations'
                        : 'Better Luck Next Time'}
                      <button
                        className='answer__btn'
                        onClick={() => {
                          postResult();
                          setTimeout(() => {
                            navigate('/leaderboard');
                          }, 3000);
                        }}
                      >
                        Show Results
                      </button>
                    </p>
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
                  }}
                >
                  {quesNo <= 4
                    ? filteredQuestions[quesNo]?.options?.map((item) => (
                        <button
                          key={v4()}
                          className='answer__btn'
                          style={{
                            backgroundColor: `${
                              item._id === currentId
                                ? color
                                : 'rgba(37, 52, 73, 1)'
                            }`,
                          }}
                          onClick={() => {
                            answerCheck(item);
                          }}
                          value={currentId}
                        >
                          {item.option}
                        </button>
                      ))
                    : ''}
                </ul>
                {quesNo <= 4 ? (
                  <>
                    <button
                      className='nav__btn'
                      disabled={quesNo < 1}
                      onClick={() => setQuesNo(quesNo - 1)}
                    >
                      <ArrowBackIcon />
                    </button>
                    <button
                      className='nav__btn'
                      disabled={quesNo > 3}
                      onClick={() => setQuesNo(quesNo + 1)}
                    >
                      <ArrowForwardIcon />
                    </button>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className='btn__restart'>
                <button
                  className='answer__btn'
                  onClick={() => {
                    setQuesNo(0);
                    setCurrentScore(0);
                  }}
                >
                  Play again
                </button>
              </div>
              <div className='home'>
                <NavLink
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  to='/home'
                >
                  <HomeIcon sx={{ width: '2rem', height: '2rem' }} />
                </NavLink>
              </div>
            </div>
          }
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
