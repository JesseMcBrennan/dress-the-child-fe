import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';
import AdminPage from '../AdminPage/AdminPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/donate-page" component={DonatePage} />
      <Route exact path="/admin-page" component={AdminPage} />
    </Switch>
  );
};

export default Routes;
