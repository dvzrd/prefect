import React from 'react';
import styled from 'styled-components';

import { inputPropTypes } from '../../constants/interface/proptypes';
import { color, space } from '../../constants/design/composition';
import { size, weight } from '../../constants/design/content';

/**
 * Input - component for adding form inputs with redux-form.
 * @param {String}  label        String to display input label.
 * @param {String}  id           String to link label and input by id.
 * @param {Object}  input        Object shape containing input name and value.
 * @param {String}  type         String to set input type.
 * @param {String}  placeholder  Strin to set input placeholder.
 * @param {Object}  meta         Object shape to display redux-form errors.
 */
const Input = ({ label, id, input, type, placeholder, meta }) => (
  <Fieldset>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Field
      {...input}
      id={id}
      type={type}
      placeholder={placeholder}
    />
    {meta.touched && meta.error && <Error>{meta.error}</Error>}
  </Fieldset>
);

const Fieldset = styled.fieldset`
  display: flex;
  margin-bottom: ${space.split};
  flex-flow: row wrap;
  flex: 1 100%;
`;

const Label = styled.label`
  margin-bottom: ${space.press};
  font-weight: ${weight.core};
  color: ${color.blackcurrant};
`;

const Field = styled.input`
  width: 100%;
  flex: 1 100%;
  margin-bottom: ${space.press};
  padding: ${space.split};
  color: ${color.emperor};
  font-size: ${size.base};
`;

const Error = styled.output`
  color: ${color.pomegranate};  
`;

Input.propTypes = inputPropTypes;

export default Input;
