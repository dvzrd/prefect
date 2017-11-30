import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from '../../containers/navigation/';
import { Header as Wrapper, Container } from '../../constants/interface/elements';
import { heading } from '../../constants/interface/styles';
import { color, space, shadow } from '../../constants/design/composition';

/**
 * Header - component containing logo and navigation inside topbar
 * @param {String} title  String to show title as logo
 */
const Header = ({ title }) => (
  <HeaderWrapper>
    <Topbar>
      <Logo>{title}</Logo>
      <Navigation />
    </Topbar>
  </HeaderWrapper>
);

const HeaderWrapper = Wrapper.extend`
  box-shadow: ${shadow.glow} ${color.berylgreen};
`;

const Topbar = Container.extend`;
  padding: ${space.base};
  background-color: ${color.chiffon};
`;

const Logo = styled.h1`
  ${heading};
  margin: 0;
  flex: 1;
  align-self: center;
  text-transform: uppercase;
`;

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
