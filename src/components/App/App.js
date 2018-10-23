import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClick = e => {
    console.log('hi');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to Dress the Child</header>
        <button onClick={this.handleClick} buttonType="donate-btn">
          Donate
        </button>
      </div>
    );
  }
}

export default App;
