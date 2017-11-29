import { ENDPOINT_LOGIN, ENDPOINT_REGISTER, ENDPOINT_DASHBOARD, ENDPOINT_PROFILE, GET_USER, CHANGE_AUTH } from '../interface/requests';

const navigation = [
  {
    name: 'Dashboard',
    path: ENDPOINT_DASHBOARD,
    authenticated: true,
  },
  {
    name: 'Profile',
    path: ENDPOINT_PROFILE,
    authenticated: true,
    onAuth: GET_USER,
  },
  {
    name: 'Logout',
    authenticated: true,
    onClick: CHANGE_AUTH,
  },
  {
    name: 'Login',
    path: ENDPOINT_LOGIN,
    authenticated: false,
  },
  {
    name: 'Register',
    path: ENDPOINT_REGISTER,
    authenticated: false,
  },
];

export default navigation;
