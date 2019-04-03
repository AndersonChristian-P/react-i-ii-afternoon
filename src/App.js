import React, { Component } from 'react';
import Display from './components/Display'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>Home</header>
        <Display />
      </div>
    );
  }
}

export default App;
