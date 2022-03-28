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
          <div key={v4()}>
            <tr>
              <td
                style={{ display: 'flex', flexDirection: 'column' }}
                key={v4()}
              >
                {item.category}
              </td>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          </div>
        ))}
        {/* </td> */}
      </table>
    </div>
  );
};
