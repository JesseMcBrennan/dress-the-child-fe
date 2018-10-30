import React from 'react';
import './NavMain.css';
import { BrowserRouter as Router, withRouter, NavLink } from 'react-router-dom';

const NavMain = () => {
  return (
    <div className="navMain">
      <NavLink exact to="/">
        <div className="navLogo" />
      </NavLink>
      <ul className="NavMain-buttons">
        <li>
          <NavLink exact to="/donate" className="NavMain-a donate">
            DONATE
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/mission" className="NavMain-a">
            OUR MISSION
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/get-involved" className="NavMain-a">
            GET INVOLVED
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/events" className="NavMain-a">
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/volunteer" className="NavMain-a">
            VOLUNTEER
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/partners" className="NavMain-a partners">
            PARTNERS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(NavMain);
