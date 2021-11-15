import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LeaderboardContextType } from '../types/LeaderboardContext.type';
const LeaderboardContext = createContext({} as LeaderboardContextType);

export const LeaderboardProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          'https://quizBackend.ankushpndt.repl.co/leaderboard'
        );
        console.log(response);
        setLeaderboard(response.data.leaderboardData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <LeaderboardContext.Provider
      value={{
        leaderboard,
        setLeaderboard,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};
export const useLeaderboard = () => {
  return useContext(LeaderboardContext);
};
