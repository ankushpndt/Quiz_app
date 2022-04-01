import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { AuthProvider } from './Contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { QuizProvider } from './Contexts/QuizContext';
import { LeaderboardProvider } from './Contexts/LeaderboardContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <LeaderboardProvider>
          <QuizProvider>
            <App />
          </QuizProvider>
        </LeaderboardProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
