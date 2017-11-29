import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getAuthenticatedUser, setPostAuthPath } from '../../modules/authentication/';
import { ENDPOINT_LOGIN, ENDPOINT_REGISTER, ENDPOINT_RESET_PASSWORD, ENDPOINT_FORGOT_PASSWORD } from '../../constants/interface/requests';

export default (ComposedComponent) => {
class Authentication extends Component {
    static propTypes = {
      authenticated: PropTypes.bool,
      history: PropTypes.shape({
        push: PropTypes.func
      }),
      match: PropTypes.shape({
        path: PropTypes.string
      }),
      setPostAuthPath: PropTypes.func,
      getAuthenticatedUser: PropTypes.func
    };

    // Create static list of pre-authention routes
    // to avoid saving them for a post-auth redirect
    static preAuthRoutes = [
      `/${ENDPOINT_LOGIN}`, 
      `/${ENDPOINT_REGISTER}`, 
      `/${ENDPOINT_RESET_PASSWORD}`, 
      `/${ENDPOINT_FORGOT_PASSWORD}`
    ];

    componentDidMount = () => this.ensureAuthentication(
      this.props.authenticated
    );

    componentWillUpdate = (nextProps) => {
      if (this.props.authenticated !== nextProps.authenticated) {
        this.ensureAuthentication(nextProps.authenticated);
      }
    };

    ensureAuthentication = (isAuthed) => {
      if (!isAuthed) {
        const path = _.get(this.props.match, 'path');

        // Save the user's path for future redirect
        if (path && !Authentication.preAuthRoutes.includes(path)) {
          this.props.setPostAuthPath(path);
        }

        // Redirect to the login page
        return this.props.history.push(`/${ENDPOINT_LOGIN}`);
      }

      return this.props.getAuthenticatedUser();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({ authentication }) => ({ 
    authenticated: authentication.authenticated 
  });

  return withRouter(connect(mapStateToProps, { 
    getAuthenticatedUser, setPostAuthPath 
  })(Authentication));
};
