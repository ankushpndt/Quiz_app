import { NavLink } from 'react-router-dom';

import Marvel from './assets/marvel.jpg';
import DC from './assets/dc.jpg';
import './App.css';
export const Home = () => {
  return (
    <div className='home__container'>
      <NavLink className='home__marvel' to='/quiz/marvel'>
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
