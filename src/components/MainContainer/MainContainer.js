import React, { Component } from 'react';
// import Routes from '../../components/Routes/Routes';
import { withRouter, NavLink } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import DonatePage from '../DonatePage/DonatePage';
import AboutPage from '../AboutPage/AboutPage';
import MissionPage from '../MissionPage/MissionPage';
import PartnersPage from '../PartnersPage/PartnersPage';
import './MainContainer.css';

export class MainContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <section className="main-container">
        {location.pathname === `/` && <HomePage />}
        {location.pathname === `/donate` && <DonatePage />}
        {location.pathname === `/about` && <AboutPage />}
        {location.pathname === `/mission` && <MissionPage />}
        {location.pathname === `/partners` && <PartnersPage />}
        <NavLink
          exact
          to="/donate-page"
          className={
            location.pathname !== '/' ? 'donate-btn-hidden' : 'donate-btn'
          }
        >
          Donate
        </NavLink>
      </section>
    );
  }
}

export default withRouter(MainContainer);
