import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ENDPOINT_DASHBOARD } from '../../constants/interface/requests';
import Dashboard from '../../components/dashboard/';

// Configre authenticated routes for react router
const AuthenticatedRoutes = () => (
  <Switch>
    <Route exact path={`/${ENDPOINT_DASHBOARD}`} component={Dashboard} />
  </Switch>
);

export default AuthenticatedRoutes;
