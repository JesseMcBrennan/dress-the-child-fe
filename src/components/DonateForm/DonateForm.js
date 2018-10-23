import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DonateForm.css';

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit = e => {
    // User clicked submit
  };

  render() {
    return (
      <div className="donate-form">
        <p>Would you like to complete donation?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(DonateForm);
