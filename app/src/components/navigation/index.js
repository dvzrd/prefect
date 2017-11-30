import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Nav, ButtonDark, List, Item } from '../../constants/interface/elements';
import { GET_USER, CHANGE_AUTH } from '../../constants/interface/requests';
import { flex } from '../../constants/interface/styles';
import { color, space } from '../../constants/design/composition';
import { size, gutter } from '../../constants/design/content';

/**
 * Navigation - component for responsive menu to navigate routes.
 * @param {Array}    routes         Array containing routes.
 * @param {Object}   user           Object shape with user's first name.
 * @param {Boolean}  authenticated  Boolean to check authentication state.
 * @param {Boolean}  isMobile       Boolean to check current device width.
 * @param {Boolean}  isMenuOpen     Boolean to check if mobile menu is open.
 * @param {Function} toggleMenu     Function to toggle mobile menu.
 * @param {Function} logoutUser     Function to logout current user.
 */
const Navigation = ({ routes, user, authenticated, isMobile, isMenuOpen, toggleMenu, logoutUser }) => (
  <Nav>
    {isMobile &&
      <MenuButton onClick={toggleMenu}>
        <MenuIcon isMenuOpen={isMenuOpen}>
          MENU
        </MenuIcon>
      </MenuButton>
    }
    <Menu isMobile={isMobile} isMenuOpen={isMenuOpen}>
      {routes.filter(route => route.authenticated === authenticated).map((route, index) => (
        <MenuItem key={index}>
          {route.path && (route.onAuth === GET_USER
            ? <Link to={route.path}>{(user && user.firstName) || route.name}</Link>
            : <Link to={route.path}>{route.name}</Link>
          )}
          {(route.onClick === CHANGE_AUTH) &&
            <Button onClick={logoutUser}>{route.name}</Button>
          }
        </MenuItem>
      ))}
    </Menu>
  </Nav>
);

const MenuButton = ButtonDark.extend`
  order: 1;
  margin-bottom: 0;
  margin-left: ${space.base};
  padding: ${gutter.fit};
  font-size: ${size.brand};
`;

const MenuIcon = styled.i`
  color: ${color.white};
  font-style: normal;
`;

const Menu = List.extend`
  ${flex};
  display: ${props => props.isMobile
    ? (props.isMenuOpen ? 'flex' : 'none')
    : 'flex'
  };
  padding: 0;
  flex: 1;
  justify-content: flex-end;
  align-self: flex-end;
  list-style: none;
`;

const MenuItem = Item.extend`
  margin-left: ${space.base};

  > * {
    color: ${color.emperor};
  }
`;

const Button = ButtonDark.extend`
  margin: 0;
  padding: ${gutter.fit};
  font-size: ${size.legal};
`;

Navigation.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    authenticated: PropTypes.bool,
  })),
  user: PropTypes.shape({
    firstName: PropTypes.string,
  }),
  authenticated: PropTypes.bool,
  isMobile: PropTypes.bool,
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  logoutUser: PropTypes.func,
};

export default Navigation;
