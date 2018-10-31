import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DonatePage from '../DonatePage/DonatePage';
import VolunteerPage from '../VolunteerPage/VolunteerPage';
import MissionPage from '../MissionPage/MissionPage';
import EventsPage from '../EventsPage/EventsPage';
import './MainContainer.css';

export class MainContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <section className="main-container">
        {location.pathname === `/` && <HomePage />}
        {location.pathname === `/donate` && <DonatePage />}
        {location.pathname === `/mission` && <MissionPage />}
        {location.pathname === `/events` && <EventsPage />}
        {location.pathname === `/volunteer` && <VolunteerPage />}
      </section>
    );
  }
}

export default withRouter(MainContainer);
