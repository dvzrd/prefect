import { css } from 'styled-components';

import media from '../../utils/media';
import { frame } from './breakpoints';
import { ratio, micro } from '../design/structure';
import { size, weight, height, gutter } from '../design/content';
import { color, space, width, shadow, speed } from '../design/composition';

// wrapperBase - add base styles for wrappers surrounding mane content to push footer to bottom.
export const wrapperBase = css`
  display: flex;
  flex: 100 100%;
  z-index: 2;
`;

// containerBase - add base styles for containers that have multiple children.
export const containerBase = css`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0;
  flex-flow: row wrap;
  flex: 1 100%;
`;

// containerFrame - add responsive frame container using frame breakpoints.
export const containerFrame = css`
  ${containerBase};
  padding: ${space.base};
  max-width: ${frame.phablet}em;

  ${media.tablet`
    max-width: ${frame.tablet}em;
  `};

  ${media.laptop`
    max-width: ${frame.laptop}em;
  `};

  ${media.desktop`
    max-width: ${frame.desktop}em;
  `};
`;

// containerCard - add card container with a max-width property.
export const containerCard = css`
  ${containerBase};
  padding: ${space.base};
  max-width: ${width.card};
`;

// formBase - add base layer style to form containers
export const formBase = css`
  ${containerBase};
  padding: ${space.base};
`;

// formCard - extend form base to match card container styles
export const formCard = css`
  ${formBase};
  padding: ${space.base};
  justify-content: center;
  box-shadow: ${shadow.core} ${color.gallery};

  ${media.phablet`
    padding: ${space.lead};
  `};
`;

// headingBase - base heading style sets heading margin, font-size and font-weight.
export const headingBase = css`
  display: flex;
  flex-flow: row wrap;
  flex: 1 100%;
  margin: ${gutter.apex};
  font-size: ${size.point};
  font-weight: ${weight.apex};
`;

// headingHero - extend base heading with `hero` font-size
export const headingHero = css`
  ${headingBase};
  font-size: ${size.hero};
`;

// headingLead - extend base heading with `lead` font-size.
export const headingLead = css`
  ${headingBase};
  font-size: ${size.lead};
`;

// headingDirect - extend base heading with `direct` font-size.
export const headingDirect = css`
  ${headingBase};
  font-size: ${size.direct};
`;

// headingBrief - extend base heading with `brief` font-size.
export const headingBrief = css`
  ${headingBase};
  font-size: ${size.brief};
`;

// headingPoint - extend base heading with `point` font-size.
export const headingPoint = css`
  ${headingBase};
  font-size: ${size.point};
`;

// buttonBase - default button style using a neutral color.
export const buttonBase = css`
  display: inline-block;
  position: relative;
  cursor: pointer;
  margin: ${gutter.base};
  padding: ${gutter.action};
  outline: none;
  border: 0;
  border-radius: 0;
  box-shadow: ${shadow.base} ${color.silver};
  background-color: ${color.gallery};
  color: ${color.emperor};
  font-size: ${size.base};
  text-align: center;
  text-decoration: none;
  line-height: ${height.base};
  transition: all ${speed.base};
  transition-timing-function: ease-out;

  &:hover {
    box-shadow: ${shadow.core} ${color.emperor};
    background-color: ${color.silver};
    color: ${color.blackcurrant};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.silver} inset;
    background-color: ${color.gallery};
    color: ${color.emperor};
  }
`;

// buttonBright - extend base button with a bright color to grab the user's attention.
export const buttonBright = css`
  ${buttonBase};
  box-shadow: ${shadow.base} ${color.emperor};
  background-color: ${color.disco};
  color: ${color.white};

  &:hover {
    box-shadow: ${shadow.core} ${color.blackcurrant};
    background-color: ${color.maroonflush};
    color: ${color.white};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.maroonflush} inset;
    background-color: ${color.disco};
    color: ${color.white};
  }
`;

// buttonLight - extend base button with a light color to contrast dark backgrounds.
export const buttonLight = css`
  ${buttonBase};
  box-shadow: ${shadow.base} ${color.gallery};
  background-color: ${color.chiffon};
  color: ${color.emperor};

  &:hover {
    box-shadow: ${shadow.core} ${color.silver};
    background-color: ${color.berylgreen};
    color: ${color.blackcurrant};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.berylgreen} inset;
    background-color: ${color.chiffon};
    color: ${color.emperor};
  }
`;

// buttonDark - extend base button with a dark color to constract light backgrounds.
export const buttonDark = css`
  ${buttonBase};
  box-shadow: ${shadow.base} ${color.blackcurrant};
  background-color: ${color.emperor};
  color: ${color.white};

  &:hover {
    box-shadow: ${shadow.core} ${color.emperor};
    background-color: ${color.blackcurrant};
    color: ${color.white};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.blackcurrant} inset;
    background-color: ${color.emperor};
    color: ${color.white};
  }
`;
