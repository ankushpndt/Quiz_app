import axios, { AxiosError } from 'axios';
import React, { createContext, useContext, useState } from 'react';
import { ServerError } from '../types/serverError.type';
import { useNavigate } from 'react-router-dom';
import {
  authContext,
  LoginUserDetails,
  SignUpUserDetails,
} from './AuthContext.type';
import { toast } from 'react-toastify';
export const AuthContext = createContext<authContext>({} as authContext);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();

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
  const [token, setToken] = useState<string>(savedToken);
  const [error, setError] = useState('');
  const [user, setUser] = useState<string>(userName);

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

      if (response.data.success === true) {
        const { token, userName } = response?.data;
        setToken(token);
        setLogin(true);
        setUser(userName);
        localStorage.setItem(
          'login',
          JSON.stringify({ isUserLoggedIn: true, token, user: userName })
        );
      } else {
      }
      response.data.success === true ? navigate('/home') : navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }

      toast(error.response.data.message);
      console.log(error);
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
      if (response.data.success === true) {
        const { token, userName } = response?.data;
        setToken(token);
        setLogin(true);
        setUser(userName);
        localStorage.setItem(
          'login',
          JSON.stringify({ isUserLoggedIn: true, token, user: userName })
        );
      }

      response.data.success === true ? navigate('/home') : navigate('/');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error as AxiosError<ServerError>;
        if (serverError && serverError.response) {
          return serverError.response.data;
        }
      }
      // console.log(error.response);
      toast(error.response.data.message);
    }
  };
  const userLogout = async () => {
    localStorage.removeItem('login');
    setLogin(false);
    setToken('');
    setUser('');
    navigate('/');
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
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export function useAuth() {
  return useContext(AuthContext);
}
