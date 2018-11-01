import React from 'react';
import './NavMain.css';
import { BrowserRouter as Router, withRouter, NavLink } from 'react-router-dom';

export const NavMain = () => {
  return (
    <div className="navMain">
      <NavLink exact to="/">
        <div className="navLogo" />
      </NavLink>
      <ul className="NavMain-buttons">
        <li className="Nav-item">
          <NavLink exact to="/donate" className="NavMain-a">
        <li>
          <NavLink exact to="/donate" className="NavMain-a donate">
            DONATE
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink exact to="/mission" className="NavMain-a">
            OUR MISSION
          </NavLink>
        </li>
        <li className="Nav-item">
          <NavLink exact to="/events" className="NavMain-a">
            EVENTS
          </NavLink>
        </li>
        <li className="Nav-item">
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
