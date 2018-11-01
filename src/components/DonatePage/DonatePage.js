import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';

import DonateForm from '../DonateForm/DonateForm';

import './DonatePage.css';

export class DonatePage extends Component {
  render() {
    return (
      <div className="donate-card">
        <StripeProvider apiKey="pk_test_hANH4uSlssQdfIxxHpPwbzPd">
          <div className="donate-section">
            <h1 className="main-title">Donate</h1>
            <hr className="horizontal-rule" />
            <Elements>
              <DonateForm />
            </Elements>
          </div>
        </StripeProvider>
      </div>
    );
  }
}

export default withRouter(DonatePage);
