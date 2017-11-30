import { get } from '../../utils/http';
import { handleError } from '../../utils/store';
import { USER_ENDPOINT_BASE, GET_USER, GET_USERS } from '../../constants/interface/requests';

/**
 * getUser - Fetches user from API, given id
 *
 * @param {String} id  User's id for lookup
 * @returns {Promise}
 */
export const getUser = id => async (dispatch) => {
  try {
    const response = await get(dispatch, GET_USER, `${USER_ENDPOINT_BASE}/${id}`, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, GET_USER);
  }
};

/**
 * getUsers - Fetches users from API
 *
 * @returns {Promise}
 */
export const getUsers = () => async (dispatch) => {
  try {
    const response = await get(dispatch, GET_USERS, USER_ENDPOINT_BASE, true);
    return Promise.resolve(response);
  } catch (err) {
    await handleError(dispatch, err, GET_USER);
  }
};

/**
 * getAuthenticatedUser - Authenticated user selector
 */
export const getAuthenticatedUser = ({ user, authentication }) => user[authentication.user];
