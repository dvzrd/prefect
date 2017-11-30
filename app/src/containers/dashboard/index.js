import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dash from '../../components/dashboard/';
import { getAuthenticatedUser } from '../../modules/user/';
import { greeting, id, email, message } from '../../constants/copy/dashboard';

class Dashboard extends Component {
  render() {
    const { user } = this.props;

    return <Dash
      user={user}
      greeting={greeting}
      id={id}
      email={email}
      message={message}
    />
  }
}

Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
};

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
});

export default connect(mapStateToProps)(Dashboard);
