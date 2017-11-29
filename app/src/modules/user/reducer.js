import _ from 'lodash';

import { updateStore, buildGenericInitialState } from '../../utils/store';
import { GET_USER, GET_USERS, CHANGE_AUTH, GET_AUTHENTICATED_USER } from '../../constants/interface/requests';

// Create initial state for user store
const INITIAL_STATE = {
  ...buildGenericInitialState([GET_USER, GET_USERS])
};

// Export default user actions reducer
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return updateStore(state, action, _.get(action, 'payload.user.id')
        ? { [action.payload.user.id]: action.payload.user }
        : {}
      );
    case GET_USER:
    case GET_AUTHENTICATED_USER:
      return updateStore(state, action, _.get(action, 'payload.user.id')
        ? { [action.payload.user.id]: action.payload.user }
        : {}
      );
    case GET_USERS:
      return updateStore(state, action, _.get(action, 'payload.users')
        ? _.mapKeys(action.payload.users, 'id')
        : {}
      );
    default:
      return state;
  }
};
