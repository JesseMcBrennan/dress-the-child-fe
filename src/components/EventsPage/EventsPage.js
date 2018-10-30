import React from 'react';
import './EventsPage.css';

const EventsPage = () => (
  <div className="display-card">
    <h1 className="main-title">Events</h1>
    <hr className="horizontal-rule" />
    <p className="main-body">32nd Annual Dinner Details:</p>
    <ul>
      <li>
        <i class="fa fa-calendar-alt" aria-hidden="true" />
        Date: Sunday October 7th
      </li>
      <li>
        <i class="fa fa-clock" aria-hidden="true" />
        Time: 6:00pm
      </li>
      <li>
        <i class="fa fa-map-marked-alt" aria-hidden="true" />
        Location: Las Cruces Convention Center
      </li>
      <li>
        <i class="fa fa-money-bill-alt" aria-hidden="true" />
        Cost: $60 per person
      </li>
    </ul>
    <p className="ticket-text">
      For tickets and additional information, contact Boberg at 575-644-9469 or
      dougboberg@comcast.net. You can also contact Campbell at 505-220-5185 or
      vincent@primesalesmarketing.com.
    </p>
  </div>
);

export default EventsPage;
