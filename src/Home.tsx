import { NavLink } from 'react-router-dom';
// import { useTheme } from './Contexts/ThemeContext';
import Marvel from './assets/marvel.jpg';
import DC from './assets/dc.jpg';
import './App.css';
export const Home = () => {
  // const { theme, setTheme } = useTheme();
  return (
    <div
      className='home__container'

      // className={theme ? 'White' : 'App'}
    >
      <NavLink
        // activeStyle={{ fontWeight: 'bold' }}
        // className={theme ? 'White' : 'App'}
        className='home__marvel'
        to='/quiz/marvel'
      >
        <img src={Marvel} alt='marvel' className='marvel__image' />
        Marvel
        <p>5 questions</p>
      </NavLink>
      <NavLink className='home__dc' to='/quiz/dc'>
        <img src={DC} alt='dc' className='dc__image' />
        DC
        <p>5 questions</p>
      </NavLink>
    </div>
  );
};
