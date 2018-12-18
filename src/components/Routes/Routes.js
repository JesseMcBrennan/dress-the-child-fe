import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';
import HomePage from '../../components/HomePage/HomePage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ HomePage }/>
      <Route exact path="/donate" component={ DonatePage } />
    </Switch>
  );
};

export default Routes;
