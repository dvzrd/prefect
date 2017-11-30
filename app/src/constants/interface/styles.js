import { css, keyframes } from 'styled-components';

import media from '../../utils/media';
import { frame as breakpoint } from './breakpoints';
import { size, weight, height, gutter } from '../design/content';
import { color, space, width, shadow, speed } from '../design/composition';

// base - add base styles to elements.
export const base = css`
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
`;

// flex - add flex styles to elements.
export const flex = css`
  display: flex;
  flex: 1 100%;
  flex-flow: row wrap;
  align-content: flex-start;
`;

// frame - add responsive frame styles to container elements.
export const frame = css`
  max-width: ${breakpoint.phablet}em;
  padding: ${space.base};

  ${media.tablet`
    max-width: ${breakpoint.tablet}em;
  `};

  ${media.laptop`
    max-width: ${breakpoint.laptop}em;
  `};

  ${media.desktop`
    max-width: ${breakpoint.desktop}em;
  `};
`;

// card - add card styles to container elements
export const card = css`
  position: relative;
  max-width: ${width.card};
  padding: ${space.base};
  box-shadow: ${shadow.core} ${color.gallery};
  background-color: ${color.ceramic};

  ${media.phablet`
    padding: ${space.lead};
  `};
`;

// hero - add hero styles to elements
export const hero = css`
  min-height: 50vh;
  flex: 5 100%;

  ${media.phablet`
    min-height: 100vh;
  `};

  ${media.tablet`
    min-height: 75vh;
  `};
`;

// center - add center styles to elements
export const center = css`
  justify-content: center;
  align-items: center;
`;

// heading - add heading styles to elements
export const heading = css`
  position: relative;
  margin: ${gutter.apex};
  flex: 1 100%;
  font-size: ${size.mark};
  font-weight: ${weight.apex};
`;

// button - add button styles to elements
export const button = css`
  position: relative;
  cursor: pointer;
  margin: ${gutter.base};
  padding: ${gutter.action};
  outline: none;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  background-color: transparent;
  color: inherit;
  font-size: ${size.base};
  text-align: center;
  text-decoration: none;
  line-height: ${height.base};
  transition: all ${speed.base};
  transition-timing-function: ease-out;
`;

// list - add list styles
export const list = css`
  margin: 0;
  padding-left: ${space.icon};
`;

// item - add list item styles
export const item = css`
  margin: 0;
  padding: 0;
`;

// spin - animation for loader
export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

// reverseSpin - animation for loader
export const reverseSpin = keyframes`
  from {
    transform: rotate(359deg);
  }

  to {
    transform: rotate(0deg);
  }
`;
