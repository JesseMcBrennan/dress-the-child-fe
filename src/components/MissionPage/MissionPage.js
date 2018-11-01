import React from 'react';
import './MissionPage.css';

export const MissionPage = () => (
  <div className="mission-card">
    <h1 className="main-title">Our Mission</h1>
    <hr className="horizontal-rule" />
    <p className="main-body">
      The mission of the Las Cruces Rio Grande Rotary Foundation’s Dress The
      Child program is to provide new clothing and shoes for children living in
      the poorest families in Dona Ana County. Many of these children have never
      had new clothes and have never had the opportunity to shop for clothes
      that might be appealing to them. The founders and program volunteers
      believe that children whom do not have adequate clothing can’t help but
      have lower self esteem than other children and tend to perform poorly in
      school and suffer from other social issues. We believe that by providing
      these children with new clothes, these kids will have better self worth,
      an improved opportunity for scholastic success, and have an opportunity
      for a better life.
    </p>
    <div className="partner-logos">
      <div className="partner-logo rotary-logo" />
      <div className="partner-logo school-logo" />
    </div>
  </div>
);

export default MissionPage;
