import React from 'react';
import './VolunteerPage.css';

const VolunteerPage = () => (
  <div className="display-card">
    <h1 className="main-title">Volunteer</h1>
    <hr className="horizontal-rule" />
    <p className="main-body-volunteer">
      We spend our annual budget each year during November and December by
      taking hundreds of children shopping.  We match each child with at least
      one volunteer to take him or her through the store, and assist in making
      good decisions.  Our shopping dates for 2018 are listed below:
    </p>
    <ul>
      <li className="shopping-event-list">
        Sunday, November 4th at 6pm (sign-in at 5:30pm) Old Navy
      </li>
      <li className="shopping-event-list">
        Sunday, November 18th at 6pm (sign-in at 5:30pm) Old Navy
      </li>
      <li className="shopping-event-list">
        Sunday, December 2nd at 5:00pm (sign-in at 4:30pm) Kohl's
      </li>
      <li className="shopping-event-list">
        Sunday, December 9th at 6pm (sign-in at 5:30) Old Navy
      </li>
    </ul>
  </div>
);

export default VolunteerPage;
