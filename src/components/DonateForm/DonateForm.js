import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DonateForm.css';

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
  }

  submit = async e => {
    e.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    });

    if (response.ok) console.log('Purchase Complete!');
  };

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
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
