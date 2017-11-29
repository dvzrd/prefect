import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from '../../containers/navigation/';
import { containerBase } from '../../constants/interface/styles';
import { color, space } from '../../constants/design/composition';
import { size } from '../../constants/design/content';

/**
 * Header - component containing logo and navigation inside topbar
 * @param {String} title  String to show title as logo
 */
const Header = ({ title }) => (
  <Wrapper>
    <Topbar>
      <Logo>{title}</Logo>
      <Navigation />
    </Topbar>
  </Wrapper>
);

const Wrapper = styled.header`
  z-index: 3;
`;

const Topbar = styled.figure`
  ${containerBase};
  padding: ${space.base};
  flex-flow: row;
  background-color: ${color.chiffon};
`;

const Logo = styled.h1`
  margin: 0;
  flex: 1;
  align-self: flex-start;
  text-transform: uppercase;
`;

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
