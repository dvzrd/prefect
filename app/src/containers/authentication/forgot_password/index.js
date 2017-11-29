import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Auth from '../../../components/authentication/';
import { forgotPassword } from '../../../modules/authentication/';
import { RESET_PASSWORD } from '../../../constants/interface/requests';
import { errorPropTypes } from '../../../constants/interface/proptypes';
import { forgotPassword as copy } from '../../../constants/copy/authentication';

const form = reduxForm({
  form: 'forgotPassword',
});

class ForgotPassword extends Component {
  static propTypes = {
    forgotPassword: PropTypes.func,
    handleSubmit: PropTypes.func,
    errors: errorPropTypes,
    message: PropTypes.string,
    loading: PropTypes.bool,
  };

  static inputs = copy.inputs;

  handleFormSubmit = formProps => this.props.forgotPassword(formProps);

  render() {
    const { loading, handleSubmit, errors, message } = this.props;

    return (
      <Auth
        loading={loading}
        heading={copy.heading}
        onSubmit={handleSubmit(this.handleFormSubmit)}
        errors={errors}
        message={message}
        inputs={ForgotPassword.inputs}
        cta={copy.cta}
        links={copy.links}
      />
    );
  }
}

const mapStateToProps = ({ authentication }) => ({
  errors: authentication.errors[RESET_PASSWORD],
  message: authentication.messages[RESET_PASSWORD],
  loading: authentication.loading[RESET_PASSWORD],
});

export default connect(mapStateToProps, { forgotPassword })(form(ForgotPassword));
