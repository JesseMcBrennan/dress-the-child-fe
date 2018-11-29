import React from 'react';
import './EventsPage.css';

export const EventsPage = () => (
  <div className="events-card">
    <h1 className="main-title">Events</h1>
    <hr className="horizontal-rule" />
    <h2 className="main-body-title">32nd Annual Dinner Details:</h2>
    <ul className="event-details-list">
      <li className="event-details-item">
        <i className="fa fa-calendar-alt" aria-hidden="true" />
        Date: Sunday October 7th
      </li>
      <li className="event-details-item">
        <i className="fa fa-clock" aria-hidden="true" />
        Time: 6:00pm
      </li>
      <li className="event-details-item">
        <i className="fa fa-map-marked-alt" aria-hidden="true" />
        Location: Las Cruces Convention Center
      </li>
      <li className="event-details-item">
        <i className="fa fa-money-bill-alt" aria-hidden="true" />
        Cost: $60 per person
      </li>
    </ul>
    <h3 className="ticket-title">FOR TICKETS AND ADDITION INFORMATION: </h3>
    <a
      href="mailto:cody.taft@gmail.com, anondylyn@gmail.com?Subject=Dress%20The%20Child%20Event%20Info"
      target="_top"
      className="ticket-text"
    >
      <button className="fa fa-envelope">
        <span className="email-text"> Email Us</span>
      </button>
    </a>
  </div>
);

export default EventsPage;
