import React from 'react';
import { Field } from 'redux-form';

import Notification from '../notification';
import { Form as FormContainer, ButtonBright } from '../../constants/interface/elements';
import { formPropTypes } from '../../constants/interface/proptypes';
import { space } from '../../constants/design/composition';

/**
 * Form - component form structure for redux-form containers.
 * @param {Array}    errors    Array containing errors.
 * @param {String}   message   Message to display instead of errors.
 * @param {Array}    inputs    Inputs added to redux-form Field wrapper.
 * @param {String}   cta       CTA to label the submit button.
 * @param {Function} onSubmit  To handle the form submission.
 */
const Form = ({ onSubmit, errors, message, inputs, cta }) => (
  <FormContainer onSubmit={onSubmit}>
    <Notification errors={errors} />
    <Notification message={message} />
    {inputs.map((input, index) =>
      <Field key={index} {...input} />)}
    <Button type="submit">{cta}</Button>
  </FormContainer>
);

const Button = ButtonBright.extend`
  margin-top: ${space.base};
  margin-bottom: 0;
`;

Form.propTypes = formPropTypes;

export default Form;
