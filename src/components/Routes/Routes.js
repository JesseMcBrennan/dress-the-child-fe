import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';
import AdminPage from '../AdminPage/AdminPage';
import MissionPage from '../MissionPage/MissionPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/donate" component={DonatePage} />
      <Route exact path="/admin-page" component={AdminPage} />
      <Route exact path="/mission" component={MissionPage} />
    </Switch>
  );
};

export default Routes;
