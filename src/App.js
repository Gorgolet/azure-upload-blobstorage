import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gorgo
        </a>
      </header>
      <FilePond server = "https://gorgofunction.azurewebsites.net/api/uploadpic?code=/Vv9yf/mgNy4tPeNPRbkYv4qGhiM3rZvF0D7JP7qxt1NlzGJW3MLhA=="/>
    </div>
  );
}

export default App;
