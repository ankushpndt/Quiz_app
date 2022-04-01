import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LeaderboardContextType } from '../types/LeaderboardContext.type';
import { useAuth } from './AuthContext';
const LeaderboardContext = createContext({} as LeaderboardContextType);

export const LeaderboardProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const { token } = useAuth();
  useEffect(() => {
    token &&
      (async () => {
        try {
          const response = await axios.get(
            'https://quizBackend.ankushpndt.repl.co/leaderboard'
          );
          setLeaderboard(response.data.leaderboardData);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [token]);

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
