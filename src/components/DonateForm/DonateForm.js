import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

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
      amountTotal: 0,
      fees: 0,
      isLoading: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.addTotal());
  };

  addTotal = () => {
    const amount = parseInt(this.state.amount);
    const amountTotal = (amount * 0.0233 + 0.3 + amount).toFixed(2);
    const fees = (amountTotal - amount).toFixed(2);
    this.setState({ amountTotal, fees });
  };

  submit = async e => {
    e.preventDefault();
    const { firstName, lastName, email, city, state, amountTotal } = this.state;
    let { token } = await this.props.stripe.createToken({
      name: `${firstName} ${lastName}`,
      address_city: `${city}`,
      address_state: `${state}`,
      address_line2: `${email}`
    });
    this.setState({ disableBtn: true, isLoading: true });
    this.makeCharge(token, amountTotal);
  };

  makeCharge = async (token, amountTotal) => {
    let response = await fetch(
      'https://dress-the-child-be.herokuapp.com/api/v1/charges/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          stripeToken: token.id,
          stripeAmount: amountTotal * 100
        })
      }
    );
    if (response.ok) {
      this.setState({ complete: true, disableBtn: false, isLoading: false });
    }
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
      amount,
      fees,
      amountTotal,
      isLoading
    } = this.state;
    if (isLoading) {
      return <div className="loading-gif" />;
    }
    if (complete) {
      return (
        <h1 className="thanks-msg">
          Thanks <span className="first-name">{firstName}</span>! <br />
          Your donation of ${amount / 100} has been processed. <br />
          100% of your donation will help a child in need.
        </h1>
      );
    }

    return (
      <form onSubmit={e => this.submit(e)} className="donate-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
          className="cc-input first-name-cc"
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
        <p className="processing-msg">
          Plus an additional ${fees > 0 ? fees : 0} to cover processing fees
        </p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.handleChange}
          className="cc-input"
        />
        <p className="email-msg">
          Your receipt will be sent to this email address
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
        <div className="final-donation-msg">
          <p className="transaction-msg">
            Transactions are secure and encrypted
          </p>
        </div>
        <h3 className="final-total">
          Total: {amountTotal > 0 ? amountTotal : 0}
        </h3>
        <button
          className="submit-btn"
          disabled={this.state.disableBtn ? true : false}
        >
          Confirm
        </button>
      </form>
    );
  }
}

export default injectStripe(DonateForm);
