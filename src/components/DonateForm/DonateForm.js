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
      amount: 0,
      phone: '',
      email: '',
      city: '',
      state: ''
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submit = async e => {
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
    if (response.ok) this.setState({ complete: true });
  };

  render() {
    const {
      complete,
      firstName,
      lastname,
      phone,
      email,
      city,
      state,
      amount
    } = this.state;
    if (complete) return <h1>Purchase Complete</h1>;
    return (
      <form onSubmit={this.submit} className="donate-form">
        <p>Please enter your information to donate.</p>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          name="firstName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          name="lastName"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          name="amount"
          onChange={this.handleChange}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          name="city"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          name="state"
          onChange={this.handleChange}
        />
        <p>*Information for non-profit records only*</p>
        <CardElement />
        <button>Send</button>
      </form>
    );
  }
}

export default injectStripe(DonateForm);
