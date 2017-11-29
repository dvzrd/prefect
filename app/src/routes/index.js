import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/authentication/login/';
import Register from '../containers/authentication/register/';
import ForgotPassword from '../containers/authentication/forgot_password/';
import ResetPassword from '../containers/authentication/reset_password/';
import Authentication from '../containers/authentication/';
import AuthenticatedRoutes from './authenticated/';
import { ENDPOINT_LOGIN, ENDPOINT_REGISTER, ENDPOINT_FORGOT_PASSWORD, ENDPOINT_RESET_PASSWORD, ENDPOINT_DASHBOARD } from '../constants/interface/requests';

// Configure react router
const TopLevelRoutes = () => (
  <Switch>
    <Route exact path={`/${ENDPOINT_LOGIN}`} component={Login} />
    <Route exact path={`/${ENDPOINT_REGISTER}`} component={Register} />
    <Route exact path={`/${ENDPOINT_FORGOT_PASSWORD}`} component={ForgotPassword} />
    <Route path={`/${ENDPOINT_RESET_PASSWORD}/:token`} component={ResetPassword} />
    <Route path={`/${ENDPOINT_DASHBOARD}`} component={Authentication(AuthenticatedRoutes)} />
  </Switch>
);

export default TopLevelRoutes;
