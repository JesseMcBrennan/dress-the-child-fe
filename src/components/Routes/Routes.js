import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';
import App from '../../components/App/App';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ App }/>
      <Route exact path="/donate" component={ DonatePage } />
    </Switch>
  );
};

export default Routes;
