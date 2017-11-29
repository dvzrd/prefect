import _ from 'lodash';

import { getCookie } from '../../utils/cookie';
import { updateStore, buildGenericInitialState } from '../../utils/store';
import { CHANGE_AUTH, SET_POST_AUTH_PATH, RESET_PASSWORD, GET_AUTHENTICATED_USER } from '../../constants/interface/requests';

// Create initial state for authentication store
const INITIAL_STATE = {
  authenticated: Boolean(getCookie('token')),
  user: '',
  ...buildGenericInitialState([
    CHANGE_AUTH,
    SET_POST_AUTH_PATH,
    RESET_PASSWORD,
    GET_AUTHENTICATED_USER,
  ])
};

// Export default authentication actions reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return updateStore(state, action, {
        authenticated: Boolean(_.get(action, 'payload.token')), 
        user: _.get(action, 'payload.user.id'),
      });
    case GET_AUTHENTICATED_USER:
      return updateStore(state, action, {
        user: _.get(action, 'payload.user.id'),
      });
    default:
      return state;
  }
};
