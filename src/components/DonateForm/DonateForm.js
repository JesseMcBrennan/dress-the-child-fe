import React, { Component } from 'react';
import {
  CardElement,
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements';

import './DonateForm.css';

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      firstName: '',
      lastName: '',
      amount: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      disableBtn: false,
      amountTotal: 0
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.addTotal());
  };

  addTotal = () => {
    const amount = parseInt(this.state.amount);
    const amountTotal = (amount * 0.0233 + 0.3 + amount).toFixed(2);
    this.setState({ amountTotal });
  };

  submit = async e => {
    console.log('test');
    this.setState({ disableBtn: true });
    const { firstName, lastName, email, city, state, amount } = this.state;
    e.preventDefault();
    let { token } = await this.props.stripe.createToken({
      name: `${firstName} ${lastName}`,
      address_city: `${city}`,
      address_state: `${state}`,
      address_line2: `${email}`
    });
    let response = await fetch(
      'https://dress-the-child-be.herokuapp.com/api/v1/charges/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stripeToken: token.id,
          stripeAmount: amount
        })
      }
    );
    if (response.ok) this.setState({ complete: true, disableBtn: false });
  };

  render() {
    const style = {
      base: {
        color: '#32325d',
        lineHeight: '18px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    };

    const {
      complete,
      firstName,
      lastname,
      email,
      city,
      state,
      amount
    } = this.state;
    if (complete) return <h1>Thank you for dressing a child</h1>;

    return (
      <form onSubmit={this.submit} className="donate-form">
        <p>Please enter your information to donate.</p>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
          className="cc-input"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          name="lastName"
          onChange={this.handleChange}
          className="cc-input"
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          name="amount"
          onChange={e => this.handleChange(e)}
          className="cc-input"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.handleChange}
          className="cc-input"
        />
        <p className="email-msg">
          You'll receive receipts and notifications at this address
        </p>
        <input
          type="text"
          placeholder="City"
          value={city}
          name="city"
          onChange={this.handleChange}
          className="cc-input"
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          name="state"
          onChange={this.handleChange}
          className="cc-input"
        />
        <CardElement style={style} />
        <p className="transaction-msg">Transactions are secure and encrypted</p>
        <p>100% of your donation will go to a child in need.</p>
        <button
          className="submit-btn"
          disabled={this.state.disableBtn ? true : false}
        >
          Send
        </button>
        <p>Total donation + processing fees:</p>
        <div className="amount-total">${this.state.amountTotal}</div>
      </form>
    );
  }
}

export default injectStripe(DonateForm);
