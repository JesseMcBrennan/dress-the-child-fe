import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import './App.css';
import NavMain from '../../components/NavMain/NavMain';

export const App = () => {
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

export default withRouter(App);
