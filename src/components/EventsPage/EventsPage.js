import React from 'react';
import './EventsPage.css';

const EventsPage = () => (
  <div className="events-card">
    <h1 className="main-title">Events</h1>
    <hr className="horizontal-rule" />
    <h2 className="main-body-title">32nd Annual Dinner Details:</h2>
    <ul>
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
    <p className="ticket-text">
      For tickets and additional information: <br />
      Contact Boberg at 575-644-9469 or dougboberg@comcast.net <br /> Or <br />
      Contact Campbell at 505-220-5185 or vincent@primesalesmarketing.com
    </p>
  </div>
);

export default EventsPage;
