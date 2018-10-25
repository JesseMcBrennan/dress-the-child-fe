import React, { Component } from 'react';
// import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import AdminForm from '../../components/AdminForm/AdminForm';
import './AdminPage.css';

class AdminPage extends Component {
  render() {
    return (
      <div>
        <AdminForm />
      </div>
    );
  }
}
export default AdminPage;
