import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import DonateForm from '../DonateForm/DonateForm';
import NavMain from '../../components/NavMain/NavMain';
import './DonatePage.css';

export const DonatePage = () => {
  return (
    <div className="donate-card">
      <NavMain />
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

export default DonatePage;
