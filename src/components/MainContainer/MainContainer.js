import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DonatePage from '../DonatePage/DonatePage';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import MissionPage from '../MissionPage/MissionPage';
import EventsPage from '../EventsPage/EventsPage';
import './MainContainer.css';

export const MainContainer = ({ location }) => {
  return (
    <section className="main-container">
      <section
        className={location.pathname === '/' ? 'none' : 'display-card'}
      >
        {location.pathname === `/` && <HomePage />}
        {location.pathname === `/donate` && <DonatePage />}
        {location.pathname === `/mission` && <MissionPage />}
        {location.pathname === `/events` && <EventsPage />}
        {location.pathname === `/volunteer` && <VolunteerPage />}
      </section>
    </section>
  );
}

export default withRouter(MainContainer);
