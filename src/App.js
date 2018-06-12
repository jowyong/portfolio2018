import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Work in Progress!!!</h1>
          <img src="https://media.giphy.com/media/3o72FdYCElrUbbriA8/giphy.gif" />
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <Resume />
      </div>
    );
  }
}

export default App;
