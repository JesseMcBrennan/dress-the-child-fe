import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import HomePage from '../../components/HomePage/HomePage';
import MissionPage from '../../components/MissionPage/MissionPage';
import EventsPage from '../../components/EventsPage/EventsPage';
import VolunteerPage from '../../components/VolunteerPage/VolunteerPage';
import './App.css';
import NavMain from '../../components/NavMain/NavMain';

export const App = () => {
  return (
    <Router>
      <div className="app">
        <NavMain />
        <main className="app-container">
        <HomePage />
        <MissionPage />
        <EventsPage />
        <VolunteerPage />
        </main>
      </div>
    </Router>
  );
}

export default withRouter(App);
