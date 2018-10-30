import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DonatePage from '../../components/DonatePage/DonatePage';
import AdminPage from '../AdminPage/AdminPage';
import MissionPage from '../MissionPage/MissionPage';
import PartnersPage from '../PartnersPage/PartnersPage';

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/donate" component={DonatePage} />
      <Route exact path="/admin-page" component={AdminPage} />
      <Route exact path="/mission" component={MissionPage} />
      <Route exact path="/partners" component={PartnersPage} />
    </Switch>
  );
};

export default Routes;
