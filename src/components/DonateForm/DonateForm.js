import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './DonateForm.css';

class DonateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      name: '',
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
    const { name, phone, email, city, state } = this.state;
    e.preventDefault();
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    console.log(token);
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: {
        tokenId: token.id,
        name,
        phone,
        email,
        city,
        state
      }
    });

    if (response.ok) console.log('Purchase Complete!');
  };

  render() {
    const { complete, name, phone, email, city, state } = this.state;
    if (complete) return <h1>Purchase Complete</h1>;
    return (
      <form onSubmit={this.submit} className="donate-form">
        <p>Would you like to complete donation?</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          name="phone"
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
