import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => (
  <div className="display-card">
    <div className="main-logo" />
    <hr className="horizontal-rule" />
    <p className="main-body">
      Dress the Child, sponsored by the Rio Grande Rotary Club, is an event
      allowing children and their families a chance to shop for new clothing.
    </p>
    <p className="main-body">
      For some this will be their first ever retail experience.
    </p>
    <NavLink exact to="/donate" className="donate-btn">
      Donate
    </NavLink>
  </div>
);

export default HomePage;
