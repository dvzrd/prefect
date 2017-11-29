import React from 'react';
import styled from 'styled-components';

import { wrapperBase, containerFrame, headingLead } from '../../constants/interface/styles';

const Dashboard = () => (
  <Main>
    <Frame>
      <Heading>Welcome to Dashboard</Heading>
    </Frame>
  </Main>
);

const Main = styled.main`
  ${wrapperBase};
`;

const Frame = styled.figure`
  ${containerFrame};
`;

const Heading = styled.h2`
  ${headingLead};
`;

export default Dashboard;
