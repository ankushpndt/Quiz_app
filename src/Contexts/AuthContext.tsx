import axios, { AxiosError } from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ServerError } from '../types/serverError.type';
// import { useNavigate, useLocation } from 'react-router-dom';
import {
  authContext,
  LoginUserDetails,
  SignUpUserDetails,
} from './AuthContext.type';
export const AuthContext = createContext<authContext>({} as authContext);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  // const navigate = useNavigate();
  // const { state } = useLocation();
  const localStorageDetails = localStorage?.getItem('login');
  const {
    isUserLoggedIn,
    token: savedToken,
    user: userName,
  } = localStorageDetails
    ? JSON.parse(localStorageDetails)
    : {
        isUserLoggedIn: false,
        token: '',
        user: '',
      };

  const [login, setLogin] = useState<boolean>(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  const [error, setError] = useState('');
  const [user, setUser] = useState(userName);

  //signup

  const signUpWithCredentials = async ({
    name,
    email,
    password,
  }: SignUpUserDetails) => {
    try {
      const response = await axios.post(
        'https://quizBackend.ankushpndt.repl.co/user/signup',
        { name: name, email: email, password: password }
      );
      // console.log(response);
      return response?.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.log(error);
      return {
        success: false,
        message: 'Could not Signup',
        errorMessage: 'Something went wrong',
      };
    }
  };

  const loginWithCredentials = async ({
    email,
    password,
  }: LoginUserDetails) => {
    try {
      const response = await axios.post(
        'https://quizBackend.ankushpndt.repl.co/user/login',
        {
          email: email,
          password: password,
        }
      );
      console.log(response);
      if (response.status === 200) {
        const { token, userName } = response?.data;
        setToken(token);
        setLogin(true);
        setUser(userName);
        localStorage.setItem(
          'login',
          JSON.stringify({ isUserLoggedIn: true, token, user: userName })
        );
      }
      //   if (response.data.user) navigate(state?.from ? state.from : '/home');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      console.log(error.response);
      return {
        success: false,
        message: 'Could not login in',
        errorMessage: 'Something went wrong',
      };
    }
  };
  const userLogout = async () => {
    localStorage.removeItem('login');
    setLogin(false);
    setToken('');
    setUser('');
    // navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loginWithCredentials,
        signUpWithCredentials,
        error,
        token,
        userLogout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
