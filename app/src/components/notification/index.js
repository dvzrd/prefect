import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { errorPropTypes } from '../../constants/interface/proptypes';
import { color, space } from '../../constants/design/composition';

/**
 * Notification - component card to display form errors and messages
 * @param {Array}  errors   Array containing errors
 * @param {String} message  Message to display
 */
const Notification = ({ errors, message }) => (
  <Wrapper
    hasNotification={(errors && !!errors.length) || message}
    hasErrors={errors && !!errors.length}
  >
    {(errors && errors.length) && errors.map((error, index) =>
      <Context key={index}>{error.error}</Context>)}
    {message && <Context>{message}</Context>}
  </Wrapper>
);

const Wrapper = styled.aside`
  display: ${props => props.hasNotification ? 'flex' : 'none'};
  margin-bottom: ${space.base};
  padding: ${space.base};
  flex-flow: row wrap;
  background-color: ${props => props.hasErrors ? color.pomegranate : color.java};
`;

const Context = styled.mark`
  display: flex;
  flex: 1 100%;
  background-color: transparent;
  color: ${color.white};
`;

Notification.propTypes = {
  errors: errorPropTypes,
  message: PropTypes.string,
};

export default Notification;
