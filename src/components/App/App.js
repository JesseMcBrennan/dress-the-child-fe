import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import MissionPage from '../../components/MissionPage/MissionPage';
import NavMain from '../../components/NavMain/NavMain';
import EventsPage from '../../components/EventsPage/EventsPage';
import VolunteerPage from '../../components/VolunteerPage/VolunteerPage';

export const App = () => {
  return (
    <div className="home">
      <NavMain />
      <h1 className="home-title">
        PROVIDING CHILDREN IN NEED
        <br />
        THE OPPORTUNITY TO SHOP FOR NEW WINTER CLOTHING
      </h1>
      <NavLink exact to="/donate" className="donate-btn">
        Donate
      </NavLink>
      <MissionPage />
      <EventsPage />
      <VolunteerPage />
    </div>
  );
}

export default App;
