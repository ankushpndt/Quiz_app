import { useAuth } from '../Contexts/AuthContext';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TextField } from '@mui/material';
import { validateForm } from '../Components/ValidateForm';
import './Account.css';
export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { signUpWithCredentials, error, setError } = useAuth();

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validateForm({ name, email, password, setErrorMessage }) &&
      signUpWithCredentials({ name, email, password });
    setError('');
  };

  return (
    <div className='signup'>
      <form
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          margin: '1rem auto',
          padding: '4rem',
          border: '2px solid #f0f0f0',
          width: '20rem',
        }}
        onSubmit={submitHandler}
      >
        <h2>Sign Up</h2>
        <br />
        <TextField
          type='text'
          label='Name'
          name='fullName'
          helperText='Enter your name here'
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />

        <br />
        <TextField
          type='text'
          label='Email'
          name='email'
          helperText='Enter your email here'
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <br />
        <TextField
          type='password'
          label='Password'
          name='password'
          helperText='Enter your password here'
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}
        />
        <br />
        <div className='name__error'>{errorMessage !== '' && errorMessage}</div>
        <div>{error?.message}</div>
        <br />
        <input type='submit' value='SIGN UP' id='login__btn__outlined' />
        <br />
        <p>
          <NavLink
            style={{
              textDecoration: 'none',
              color: 'black',
            }}
            to='/'
          >
            Login instead
          </NavLink>
        </p>
      </form>
    </div>
  );
};
