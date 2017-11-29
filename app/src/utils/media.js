import { css } from 'styled-components';

import breakpoints from '../constants/interface/breakpoints';

// Iterate through media query breakpoints and create a media template utility
const media = Object.keys(breakpoints).reduce((acc, device) => {
  acc[device] = (...rules) => css`
    @media only screen and (min-width:
      ${breakpoints[device]}em) {
      ${css(...rules)};
    }
  `;
  return acc;
}, {});

export default media;
