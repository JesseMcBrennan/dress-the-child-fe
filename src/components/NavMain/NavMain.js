import React from 'react';
import './NavMain.css';
import { withRouter, NavLink } from 'react-router-dom';

export const NavMain = () => {
  return (
    <div className="navMain">
      <NavLink exact to="/">
        <div className="navLogo" />
      </NavLink>
      <ul className="NavMain-buttons">
        <li className="Nav-item">
          <NavLink exact to="/donate" className="NavMain-a">
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
      </ul>
    </div>
  );
};

export default withRouter(NavMain);
