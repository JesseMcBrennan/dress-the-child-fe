import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './HomePage.css';

export const HomePage = () => (
  <div className="home-card">
    <h1 className="home-title">
      PROVIDING CHILDREN IN NEED
      <br />
      THE OPPORTUNITY TO SHOP FOR NEW WINTER CLOTHING
    </h1>
    <NavLink exact to="/donate" className="donate-btn">
      Donate
    </NavLink>
  </div>
);

export default withRouter(HomePage);
