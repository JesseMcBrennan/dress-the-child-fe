import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, NavLink } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import MainContainer from '../../components/MainContainer/MainContainer';
import './App.css';
import NavMain from '../../components/NavMain/NavMain';

class App extends Component {
  handleClick = () => {};
  render() {
    return (
      <Router>
        <div className="app">
          <NavMain />
          <main className="app-container">
            <MainContainer />
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
