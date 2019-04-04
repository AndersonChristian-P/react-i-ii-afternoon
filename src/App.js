import React, { Component } from 'react';
import Display from './components/Display'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="header-text">Home</div>
        </header>
        <div>
          <Display />
        </div>
      </div>
    );
  }
}

export default App;
