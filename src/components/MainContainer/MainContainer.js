import React, { Component } from 'react';
// import Routes from '../../components/Routes/Routes';
import { withRouter, NavLink } from 'react-router-dom';
import './MainContainer.css';

export class MainContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <section className="main-container">
        <div className="display-card">
          <h1 className="main-title">DRESS THE CHILD</h1>
          <hr className="horizontal-rule" />
          <p className="main-body">
            Dad would stage elaborate situations using a one-armed man to teach
            us lessons. Smack of ham. What is she doing at a beauty pageant? Is
            she running the lights or something? Chaw-chee, chaw-chee chaw-chee!
            Coo coo ca cha! Ah coodle doodle do Caw ca caw, caw ca caw.{' '}
          </p>
        </div>
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
