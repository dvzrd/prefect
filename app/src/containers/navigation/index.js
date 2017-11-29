import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Nav from '../../components/navigation/';
import navigation from '../../constants/copy/navigation';
import { logoutUser } from '../../modules/authentication/';
import { getAuthenticatedUser } from '../../modules/user/';
import breakpoints from '../../constants/interface/breakpoints';

class Navigation extends Component {
  constructor() {
    super();
    // get base font-size from body to check the mobile screen size in em units
    this.baseFontSize = parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);

    this.state = {
      isMobile: window.innerWidth / this.baseFontSize <= breakpoints.tablet,
      isMenuOpen: false,
    };
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.checkMobile);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkMobile);
  }

  checkMobile = () => this.setState({
    isMobile: window.innerWidth / this.baseFontSize <= breakpoints.tablet
  });

  toggleMenu = () => this.setState({
    isMenuOpen: !this.state.isMenuOpen
  });

  render() {
    const { user, authenticated, logoutUser } = this.props;

    return (
      <Nav
        routes={navigation}
        user={user}
        authenticated={authenticated}
        isMobile={this.state.isMobile}
        isMenuOpen={this.state.isMenuOpen}
        toggleMenu={this.toggleMenu}
        logoutUser={logoutUser}
      />
    );
  }
}

Navigation.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
  authenticated: PropTypes.bool,
  logoutUser: PropTypes.func,
};

const mapStateToProps = ({ user, authentication }) => ({
  user: getAuthenticatedUser({ user, authentication }),
  authenticated: authentication.authenticated,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);
