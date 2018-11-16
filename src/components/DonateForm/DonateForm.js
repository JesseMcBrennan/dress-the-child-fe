import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DonateForm.css';

export class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      amount: '',
      phone: '',
      email: '',
      city: '',
      state: '',
      amountTotal: 0,
      fees: 0,
      disableBtn: false,
      complete: false,
      isLoading: false,
      isError: false,
      isChecked: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.addTotal());
  };

  handleCheckbox = e => {
    if (this.state.isChecked) {
      this.setState({ isChecked: false });
    } else {
      this.setState({ isChecked: true });
    }
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
    try {
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
      } else {
        this.setState({ isError: true, isLoading: false });
      }
    } catch {
      this.setState({ isError: true });
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
      isLoading,
      isChecked,
      isError
    } = this.state;
    if (isLoading) {
      return <div className="loading-gif" />;
    }

    if (complete) {
      return (
        <h1 className="thanks-msg">
          Thanks <span className="first-name">{firstName}</span>! <br />
          Your donation of ${amountTotal} has been processed. <br />
          100% of your donation will help a child in need.
        </h1>
      );
    } else if (isError) {
      return (
        <h1 className="error-msg">
          There was an error processing your payment
        </h1>
      );
    }

    return (
      <div className="donate-form">
        <div className="anonymous-section">
          <p className="anonymous-text">To donate anonymously click here: </p>
          <input
            type="checkbox"
            className="anonymous-checkbox"
            onChange={this.handleCheckbox}
          />
        </div>
        <form onSubmit={e => this.submit(e)}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            name="firstName"
            onChange={this.handleChange}
            className="cc-input first-name-cc"
            disabled={isChecked && true}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            name="lastName"
            onChange={this.handleChange}
            className="cc-input"
            disabled={isChecked && true}
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
            Your email address will only be used for receipt
          </p>
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
            placeholder="City"
            value={city}
            name="city"
            onChange={this.handleChange}
            className="cc-input"
            disabled={isChecked && true}
          />
          <input
            type="text"
            placeholder="State"
            value={state}
            name="state"
            onChange={this.handleChange}
            className="cc-input"
            disabled={isChecked && true}
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
      </div>
    );
  }
}

export default injectStripe(DonateForm);
