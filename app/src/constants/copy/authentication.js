import Input from '../../components/input';
import { ENDPOINT_LOGIN, ENDPOINT_REGISTER, ENDPOINT_FORGOT_PASSWORD } from '../interface/requests';

// Configure authentication form inputs
const inputs = [
  {
    id: 'nameFirst',
    type: 'text',
    name: 'name.first',
    label: 'First Name',
    placeholder: 'Enter your first name',
    component: Input,
  },
  {
    id: 'nameLast',
    type: 'text',
    name: 'name.last',
    label: 'Last Name',
    placeholder: 'Enter your last name',
    component: Input,
  },
  {
    id: 'email',
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    component: Input,
  },
  {
    id: 'password',
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    component: Input,
  },
  {
    id: 'passwordConfirm',
    type: 'password',
    name: 'passwordConfirm',
    label: 'Confirm Password',
    placeholder: 'Confirm your password',
    component: Input,
  },
];

// Configure authentication links
const links = [
  {
    name: 'Don\'t have an account?',
    path: `/${ENDPOINT_REGISTER}`,
  },
  {
    name: 'Forgot your password?',
    path: `${ENDPOINT_FORGOT_PASSWORD}`,
  },
  {
    name: 'Already have an account?',
    path: `/${ENDPOINT_LOGIN}`,
  },
  {
    name: 'Remember your password?',
    path: `/${ENDPOINT_LOGIN}`,
  },
];

export const login = {
  heading: 'Login to Account',
  inputs: inputs.slice(2, 4),
  cta: 'Login',
  links: links.slice(0, 2),
};

export const register = {
  heading: 'Register an Account',
  inputs,
  cta: 'Register',
  links: links.slice(2, 3),
};

export const forgotPassword = {
  heading: 'Forgot Password',
  inputs: inputs.slice(2, 3),
  cta: 'Reset Password',
  links: links.slice(3, 4),
};

export const resetPassword = {
  heading: 'Reset Password',
  inputs: inputs.slice(3, 4),
  cta: 'Change Password',
  links: false,
};
