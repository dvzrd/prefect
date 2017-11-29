import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Auth from '../../../components/authentication/';
import { register } from '../../../modules/authentication/';
import { CHANGE_AUTH } from '../../../constants/interface/requests';
import { errorPropTypes } from '../../../constants/interface/proptypes';
import { register as copy } from '../../../constants/copy/authentication';

const form = reduxForm({
  form: 'register',
});

class Register extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    register: PropTypes.func,
    errors: errorPropTypes,
    message: PropTypes.string,
    loading: PropTypes.bool,
  };

  static inputs = copy.inputs;

  handleFormSubmit = formProps => this.props.register(formProps);

  render() {
    const { loading, handleSubmit, errors, message } = this.props;

    return (
      <Auth
        loading={loading}
        heading={copy.heading}
        onSubmit={handleSubmit(this.handleFormSubmit)}
        errors={errors}
        message={message}
        inputs={Register.inputs}
        cta={copy.cta}
        links={copy.links}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  errors: authentication.errors[CHANGE_AUTH],
  message: authentication.messages[CHANGE_AUTH],
  loading: authentication.loading[CHANGE_AUTH],
  authenticated: authentication.authenticated,
});

export default connect(mapStateToProps, { register })(form(Register));
