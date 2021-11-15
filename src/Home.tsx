import { NavLink } from 'react-router-dom';
import { useTheme } from './Contexts/ThemeContext';
export const Home = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
      className={theme ? 'White' : 'App'}
    >
      <NavLink
        activeStyle={{ fontWeight: 'bold' }}
        className={theme ? 'White' : 'App'}
        style={{
          textDecoration: 'none',

          padding: '1rem',

          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '1rem',
          // backgroundColor: 'rgba(37,52,73,1)',
          color: '#fff',
          borderRadius: '20px',
        }}
        to='/quiz/marvel'
      >
        <img
          src='https://yt3.ggpht.com/ytc/AKedOLSYVU0j5KAeEwuDpIkgO4LY3y-jHHwaaDMkMTdlDrA=s900-c-k-c0x00ffffff-no-rj'
          alt='marvel'
          height='250'
          width='400'
          style={{ borderRadius: '20px', marginBottom: '15px' }}
        />
        Marvel
        <p>5 questions</p>
      </NavLink>
      <NavLink
        style={{
          textDecoration: 'none',
          color: '#fff',
          padding: '1rem',
          backgroundColor: 'rgba(37,52,73,1)',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '20px',
        }}
        to='/quiz/dc'
      >
        <img
          src='https://img.cinemablend.com/filter:scale/quill/e/e/2/1/6/f/ee216fd5c37a1cde147fdcf771365d9139a1143b.jpg?mw=600'
          alt='dc'
          height='250'
          width='400'
          style={{ borderRadius: '20px', marginBottom: '10px' }}
        />
        DC
        <p>5 questions</p>
      </NavLink>
    </div>
  );
};
