import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Main, Frame, HeadingLead } from '../../constants/interface/elements';
import { size, weight } from '../../constants/design/content';
import { space } from '../../constants/design/composition';

const Dashboard = ({ user, greeting, message, id, email }) => (
  <Main>
    <Frame>
      <HeadingLead>
        {greeting} {user && user.firstName} {user && user.lastName}
      </HeadingLead>
      <Message>{message}</Message>
      <Caption>{id} {user && user.id}</Caption>
      <Caption>{email} {user && user.email}</Caption>
    </Frame>
  </Main>
);

const Message = styled.p`
  flex: 1 100%;
  font-size: ${size.point};
`;

const Caption = styled.p`
  flex: 1 100%;
  margin-bottom: ${space.press};
  font-size: ${size.mark};
  font-weight: ${weight.core};
`;


Dashboard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.id,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
  }),
  greeting: PropTypes.string,
  message: PropTypes.string,
  id: PropTypes.string,
  email: PropTypes.string,
};

export default Dashboard;
