import { v4 } from 'uuid';
import { Loader } from './Components/Loader';
import { useLeaderboard } from './Contexts/LeaderboardContext';
export const Leaderboard = () => {
  const { leaderboard } = useLeaderboard();

  console.log(leaderboard);
  return (
    <>
      {leaderboard?.length > 0 ? (
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
          <table style={{ padding: '1rem' }}>
            <tbody>
              <tr>
                <th style={{ padding: '1rem' }}>Category</th>
                <th style={{ padding: '0 1rem ' }}>Name</th>
                <th style={{ padding: ' 0 1rem ' }}>Score</th>
              </tr>
            </tbody>

            {leaderboard?.length > 0 ? (
              leaderboard?.map((item) => (
                <tbody key={v4()}>
                  <tr>
                    <td style={{ padding: '0.4rem 0' }} key={v4()}>
                      {item?.category}
                    </td>
                    <td>{item?.name}</td>
                    <td>{item?.score}</td>
                  </tr>
                </tbody>
              ))
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                Leaderboard is empty
              </div>
            )}
          </table>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
