import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Home';
import { Quiz } from './Quiz';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { useAuth } from './Contexts/AuthContext';
import { Leaderboard } from './Leaderboard';
import { ToastContainer } from 'react-toastify';
export const App = () => {
  const { userLogout, token } = useAuth();

  return (
    <div className='App'>
      <div className='routes'>
        <NavLink className='route' to='/home'>
          Home
        </NavLink>
        <NavLink className='route' to='/leaderboard'>
          Leaderboards
        </NavLink>
        {!token && (
          <NavLink className='route' to='/'>
            Login
          </NavLink>
        )}
        {!token && (
          <NavLink className='route' to='/signup'>
            SignUp
          </NavLink>
        )}
        {token && (
          <button
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onClick={userLogout}
          >
            Logout
          </button>
        )}
      </div>
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
        <Route
          path='/leaderboard'
          element={
            <PrivateRoute>
              <Leaderboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};
