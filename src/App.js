import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //docker run -it -p 3000:3000 -v $(pwd):/app 10a7bb9e89a5
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! + Hahaha
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
    </div>
  );
}

export default App;
