import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import DonateForm from '../DonateForm/DonateForm';

import './App.css';

class DonatePage extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_hANH4uSlssQdfIxxHpPwbzPd">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <DonateForm />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default DonatePage;
