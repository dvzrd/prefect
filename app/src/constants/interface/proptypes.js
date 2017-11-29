import PropTypes from 'prop-types';

// errorPropTypes - configure error props shared by notification and form
export const errorPropTypes = PropTypes.arrayOf(PropTypes.shape({
  error: PropTypes.string,
}));

// inputPropTypes - configure input props to use with redux-form
export const inputPropTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
  }),
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

// formPropTypes -  configure form props for authentication and form
export const formPropTypes = {
  errors: errorPropTypes,
  message: PropTypes.string,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    component: PropTypes.func,
  })),
  cta: PropTypes.string,
  onSubmit: PropTypes.func,
};
