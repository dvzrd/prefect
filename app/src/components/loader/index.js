import React from 'react';
import styled, { keyframes } from 'styled-components';

import { spin, reverseSpin } from '../../constants/interface/styles';
import { color, space } from '../../constants/design/composition';

const Loader = () => (
  <Wrapper>
    <Spinner>
      <InnerSpinner />
    </Spinner>
  </Wrapper>
);

const Wrapper = styled.figure`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Spinner = styled.div`
  display: block;
  width: ${space.apex};
  height: ${space.apex};
  margin: 0 auto;
  border-radius: 100%;
  border-bottom: ${color.disco} 0.2em solid;
  border-top: transparent 0.2em solid;
  border-left: ${color.disco} 0.2em solid;
  border-right: transparent 0.2em solid;
  animation: ${spin} 1s infinite linear;
`;

const InnerSpinner = styled.div`
  border-radius: 50%;
  border-bottom: ${color.disco} 0.2em solid;
  border-top: transparent 0.2em solid;
  border-left: transparent 0.2em solid;
  border-right: ${color.disco} 0.2em solid;
  width: ${space.hero};
  height: ${space.hero};
  margin: 0.3em;
  display: block;
  animation: ${reverseSpin} 0.5s infinite linear;
`;

export default Loader;
