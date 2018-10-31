import React from 'react';
import './VolunteerPage.css';

const VolunteerPage = () => (
  <div className="volunteer-card">
    <h1 className="main-title">Volunteer</h1>
    <hr className="horizontal-rule" />
    <div className="main-body-volunteer">
      <p className="main-body-volunteer">
        We spend our annual budget each year during November and December by
        taking hundreds of children shopping.  We match each child with at least
        one volunteer to take him or her through the store, and assist in making
        good decisions.  Our shopping dates for 2018 are listed below:
      </p>
      <ul className="shopping-event-list">
        <li className="shopping-event-list-item">
          Sunday, November 4th at 6pm (sign-in at 5:30pm) Old Navy
        </li>
        <li className="shopping-event-list-item">
          Sunday, November 18th at 6pm (sign-in at 5:30pm) Old Navy
        </li>
        <li className="shopping-event-list-item">
          Sunday, December 2nd at 5:00pm (sign-in at 4:30pm) Kohl's
        </li>
        <li className="shopping-event-list-item">
          Sunday, December 9th at 6pm (sign-in at 5:30) Old Navy
        </li>
      </ul>
      <p className="contact-msg">
        Please contact Doug (575.644.9469) or Matt (575.993.2331) for more
        information
      </p>
    </div>
  </div>
);

export default VolunteerPage;
