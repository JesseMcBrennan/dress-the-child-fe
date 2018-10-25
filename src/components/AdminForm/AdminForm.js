import React, { Component } from 'react';
// import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './AdminForm.css';

class AdminForm extends Component {
  render() {
    return (
      <form className="login-form">
        <input
          type="text"
          placeholder="Login"
          className="login-input form-input"
        />
        <input
          type="text"
          placeholder="Password"
          className="password-input form-input"
          form-input
        />
        <button>Login</button>
      </form>
    );
  }
}
export default AdminForm;
