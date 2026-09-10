import React from 'react';
import { useTheme } from './ThemeContext';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app-container ${theme}`}>
      <div className="card">
        <h1>Practical 15</h1>
        <h2>React Context API</h2>
        <p>Current theme is: <strong>{theme.toUpperCase()}</strong></p>
        <button onClick={toggleTheme} className="theme-btn">
          Toggle Theme
        </button>
      </div>
    </div>
  );
}

export default App;
