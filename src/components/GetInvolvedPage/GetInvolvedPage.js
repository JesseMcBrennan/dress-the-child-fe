import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './GetInvolvedPage.css';

const VolunteersPage = () => (
  <div className="display-card">
    <h1 className="main-title">Get Involved</h1>
    <hr className="horizontal-rule" />
    <div className="main-body">
      <h3 className="donation-title">Make a Donation</h3>
      <NavLink exact to="/donate" className="donate-btn">
        Donate
      </NavLink>
      <h3 className="events-title">Attend an Event</h3>
      <NavLink exact to="/events" className="donate-btn">
        Events
      </NavLink>
      <h3 className="volunteer-title">Volunteer to Help</h3>
      <NavLink exact to="/volunteer" className="donate-btn">
        Volunteer
      </NavLink>
      <h3 className="spread-title">Spread the Word</h3>
      <a href="https://www.facebook.com/DressTheChild">
        <div className="facebook-logo" />
      </a>
    </div>
  </div>
);

export default VolunteersPage;
