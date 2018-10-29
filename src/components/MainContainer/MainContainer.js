import React, { Component } from 'react';
// import Routes from '../../components/Routes/Routes';
import { withRouter, NavLink } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DonatePage from '../DonatePage/DonatePage';
import VolunteersPage from '../VolunteersPage/VolunteersPage';
import MissionPage from '../MissionPage/MissionPage';
import PartnersPage from '../PartnersPage/PartnersPage';
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
        {location.pathname === `/partners` && <PartnersPage />}
        {location.pathname === `/get-involved` && <VolunteersPage />}
        {location.pathname === `/events` && <EventsPage />}
      </section>
    );
  }
}

export default withRouter(MainContainer);
