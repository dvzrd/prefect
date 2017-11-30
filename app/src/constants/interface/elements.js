import styled from 'styled-components';

import { base, flex, frame, hero, heading, button, list, item } from './styles';
import { color, shadow } from '../design/composition';
import { size } from '../design/content';

// Wrapper - div element with base styles
export const Wrapper = styled.div`
  ${base};
`;

// Container - section element with base and flex styles
export const Container = styled.section`
  ${base};
  ${flex};
`;

// Frame - extended container element with frame styles
export const Frame = Container.extend`
  ${frame};
`;

// Body - extended wrapper element with flex styles and min-height: 100vh and flex-direction: column
export const Body = Wrapper.extend`
  ${flex};
  min-height: 100vh;
  flex-direction: column;
`;

// Header- element with base and flex styles and z-index: 3 and flex: 1
export const Header = styled.header`
  ${base};
  z-index: 3;
`;

// Hero - extended header element with hero styles
export const Hero = Header.extend`
  ${hero};
`;

// Main - element with base and flex styles and z-index of 2 and flex: 10 100%
export const Main = styled.main`
  ${base};
  ${flex};
  flex: 10 100%;
  z-index: 2;
`;

// Footer - element with base and flex styles and z-index: 1 and flex: 1
export const Footer = styled.footer`
  ${base};
  z-index: 1;
`;

// Legend - extended footer element with hero styles
export const Legend = Footer.extend`
  ${hero};
`;

// Nav - element with base and flex styles and flex: 5 and justify-content: flex-end
export const Nav = styled.nav`
  ${base};
  ${flex};
  flex: 5;
  justify-content: flex-end;
`;

// Form - element with base and flex styles and base padding
export const Form = styled.form`
  ${base};
  ${flex};
`;

// HeadingHero - h1 element with heading styles and hero font-size
export const HeadingHero = styled.h1`
  ${heading};
  font-size: ${size.hero};
`;

// HeadingLegend - h2 element with heading styles and legend font-size
export const HeadingLegend = styled.h2`
  ${heading};
  font-size: ${size.legend};
`;

// HeadingLead - h3 element with heading styles and lead font-size
export const HeadingLead = styled.h3`
  ${heading};
  font-size: ${size.lead};
`;

// HeadingDirect - h4 element with heading styles and direct font-size
export const HeadingDirect = styled.h4`
  ${heading};
  font-size: ${size.direct};
`;

// HeadingBrief - h5 element with heading styles and brief dont-size
export const HeadingBrief = styled.h5`
  ${heading};
  font-size: ${size.brief};
`;

// HeadingPoint - h6 element with heading styles and point font-size
export const HeadingPoint = styled.h6`
  ${heading};
  font-size: ${size.point};
`;

// ButtonNeutral - button with neutral colors
export const ButtonNeutral = styled.button`
  ${button};
  box-shadow: ${shadow.core} ${color.silver};
  background-color: ${color.gallery};
  color: ${color.emperor};

  &:hover {
    box-shadow: ${shadow.base} ${color.emperor};
    background-color: ${color.silver};
    color: ${color.blackcurrant};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.silver} inset;
    background-color: ${color.gallery};
    color: ${color.emperor};
  }
`;

// ButtonBright - button with bright color to grab the user's attention
export const ButtonBright = ButtonNeutral.extend`
  box-shadow: ${shadow.core} ${color.emperor};
  background-color: ${color.disco};
  color: ${color.white};

  &:hover {
    box-shadow: ${shadow.base} ${color.blackcurrant};
    background-color: ${color.maroonflush};
    color: ${color.white};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.maroonflush} inset;
    background-color: ${color.disco};
    color: ${color.white};
  }
`;

// ButtonLight - button with light colors to contrast dark backgrounds
export const ButtonLight = ButtonNeutral.extend`
  box-shadow: ${shadow.core} ${color.gallery};
  background-color: ${color.chiffon};
  color: ${color.emperor};

  &:hover {
    box-shadow: ${shadow.base} ${color.silver};
    background-color: ${color.berylgreen};
    color: ${color.blackcurrant};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.berylgreen} inset;
    background-color: ${color.chiffon};
    color: ${color.emperor};
  }
`;

// ButtonDark - button with dark colors to constrast light backgrounds
export const ButtonDark = ButtonNeutral.extend`
  box-shadow: ${shadow.core} ${color.blackcurrant};
  background-color: ${color.emperor};
  color: ${color.white};

  &:hover {
    box-shadow: ${shadow.base} ${color.emperor};
    background-color: ${color.blackcurrant};
    color: ${color.white};
  }

  &:active {
    box-shadow: ${shadow.base} ${color.blackcurrant} inset;
    background-color: ${color.emperor};
    color: ${color.white};
  }
`;

// List - element with list styles
export const List = styled.ul`
  ${list};
`;

export const Item = styled.li`
  ${item};
`;
