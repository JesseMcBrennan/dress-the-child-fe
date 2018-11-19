import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import './App.css';
import NavMain from '../../components/NavMain/NavMain';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavMain />
          <main className="app-container">
            <MainContainer />
          </main>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
