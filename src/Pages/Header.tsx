export type Props = {
  username: string;
  score: number;
};

export const Header = ({ username, score }: Props) => {
  return (
    <div className='header' style={{ paddingBottom: '1rem' }}>
      <h3>Quiz App</h3>

      <p>Welcome {username}</p>
      <p>Score: {score}</p>
    </div>
  );
};
