import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import MainContainer from '../../components/MainContainer/MainContainer';
import './App.css';

class App extends Component {
  handleClick = e => {
    console.log('hi');
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">Welcome to Dress the Child</header>
          <main className="main-container">
            <MainContainer />
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
