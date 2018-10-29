import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import { withRouter } from 'react-router-dom';

import DonateForm from '../DonateForm/DonateForm';

import './DonatePage.css';

class DonatePage extends Component {
  render() {
    return (
      <div className="display-card">
        <StripeProvider apiKey="pk_test_hANH4uSlssQdfIxxHpPwbzPd">
          <div className="donate-section">
            <h1>Donate to Dress the Child</h1>
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
