import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import UserHome from './routes/userhome';
import NoMatch from './routes/nomatch';

function App() {
  return (
    <div className="App">
      <h1>React + TypeScript アプリ</h1>
      <Routes>
        <Route path="/" element={<UserHome />}>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
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
    </div>
  );
}

export default App;
