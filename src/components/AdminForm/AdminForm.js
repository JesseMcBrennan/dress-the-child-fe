import React, { Component } from 'react';
// import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './AdminForm.css';

class AdminForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form className="login-form">
        <input
          type="text"
          name="login"
          value={this.state.login}
          placeholder="Login"
          className="login-input form-input"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          placeholder="Password"
          className="password-input form-input"
          form-input
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}
export default AdminForm;
