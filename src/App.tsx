import './Pages/App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Pages/Home';
import { Quiz } from './Pages/Quiz';
import { Login } from './Pages/Login';
import { Signup } from './Pages/Signup';
import { useAuth } from './Contexts/AuthContext';
import { Leaderboard } from './Pages/Leaderboard';
import { ToastContainer } from 'react-toastify';
import { PageNotFound } from './Pages/PageNotFound';
export const App = () => {
  const { userLogout, token } = useAuth();

  return (
    <div className='App'>
      <div className='routes'>
        <NavLink
          className='route'
          to='/home'
          style={({ isActive }) => {
            return { fontWeight: isActive ? 'bold' : 'normal' };
          }}
        >
          Home
        </NavLink>
        <NavLink
          className='route'
          to='/leaderboard'
          style={({ isActive }) => {
            return { fontWeight: isActive ? 'bold' : 'normal' };
          }}
        >
          Leaderboards
        </NavLink>
        {!token && (
          <NavLink
            className='route'
            to='/'
            style={({ isActive }) => {
              return { fontWeight: isActive ? 'bold' : 'normal' };
            }}
          >
            Login
          </NavLink>
        )}
        {!token && (
          <NavLink
            className='route'
            to='/signup'
            style={({ isActive }) => {
              return { fontWeight: isActive ? 'bold' : 'normal' };
            }}
          >
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
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};
