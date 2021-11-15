import axios, { AxiosError } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useLeaderboard } from './Contexts/LeaderboardContext';
export const Leaderboard = () => {
  const { leaderboard } = useLeaderboard();

  //   console.log(leaderboard);
  return (
    <div
      className='leaderboard'
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2>Leaderboard</h2>
      <table>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Score</th>
        </tr>

        {/* <td style={{ display: 'flex', flexDirection: 'column' }}> */}
        {leaderboard.map((item) => (
          <>
            <tr key={v4()}>
              <td
                style={{ display: 'flex', flexDirection: 'column' }}
                key={v4()}
              >
                {item.category}
              </td>
              <td key={v4()}>{item.name}</td>
              <td key={v4()}>{item.score}</td>
            </tr>
          </>
        ))}
        {/* </td> */}
      </table>
    </div>
  );
};
