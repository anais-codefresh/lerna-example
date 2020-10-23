import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = require('typescript-package');

function App() {

  const variable = name("Hanna", "Baum");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <h2>{variable}</h2>
    </div>
  );
}

export default App;
