import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/donate-page" component={DonatePage} />
    </Switch>
  );
};

export default Routes;