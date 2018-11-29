import React from 'react';
import './VolunteerPage.css';

export const VolunteerPage = () => (
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
      <section className="shopping-event-list">
        <p className="shopping-event-list-item">
          Sunday, November 4th at 6pm <br /> (sign-in at 5:30pm) Old Navy
        </p>
        <p className="shopping-event-list-item">
          Sunday, November 18th at 6pm <br /> (sign-in at 5:30pm) Old Navy
        </p>
        <p className="shopping-event-list-item">
          Sunday, December 2nd at 5pm <br /> (sign-in at 4:30pm) Kohl's
        </p>
        <p className="shopping-event-list-item">
          Sunday, December 9th at 6pm <br /> (sign-in at 5:30) Old Navy
        </p>
      </section>
      <p className="contact-msg">For more information:</p>
      <a
        href="mailto:cody.taft@gmail.com, anondylyn@gmail.com?Subject=Dress%20The%20Child%20Event%20Info"
        target="_top"
        className="ticket-text"
      >
        <button className="fa fa-envelope"> Email Us</button>
      </a>
    </div>
  </div>
);

export default VolunteerPage;
