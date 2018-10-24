import React, { Component } from 'react';
// import Routes from '../../components/Routes/Routes';
import { withRouter, NavLink } from 'react-router-dom';
import './MainContainer.css';

export class MainContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <section>
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
