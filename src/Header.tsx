// import { useTheme } from './Contexts/ThemeContext';
export type Props = {
  username: string;
  score: number;
};

const Header = ({ username, score }: Props) => {
  // const { theme, setTheme } = useTheme();
  return (
    <div className='header'>
      <h3>Quiz App</h3>
      {/* <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? (
          <img
            // src={dark_mode_black_24dp}
            alt='dark mode'
            className='text-gray-800'
          />
        ) : (
          <img
            // src={light_mode_black_24dp}
            alt='light mode'
          />
        )}
      </button> */}
      <p>Welcome {username}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export { Header };
