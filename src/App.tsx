import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
// import { useTheme } from './Contexts/ThemeContext';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Home';
import { Quiz } from './Quiz';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { useAuth } from './Contexts/AuthContext';
import { Leaderboard } from './Leaderboard';
export const App = () => {
  const { userLogout } = useAuth();
  function clickHandler() {
    // setTheme((theme) => !theme);
  }
  return (
    <div className='App'>
      <NavLink to='/home'>Quiz</NavLink>
      <NavLink to='/'>Login</NavLink>
      <NavLink to='/signup'>SignUp</NavLink>
      <NavLink to='/leaderboard'>Leaderboards</NavLink>
      <button onClick={clickHandler}>Dark</button>
      <button onClick={userLogout}>Logout</button>
      <Routes>
        <Route
          path='/home'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/quiz/:category' element={<Quiz />} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </div>
  );
};
