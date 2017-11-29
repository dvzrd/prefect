import { getAppUrl } from '../../utils/environment';
import { get, post } from '../../utils/http';
import { handleError } from '../../utils/store';
import { deleteCookie, setCookie } from '../../utils/cookie';
import { AUTH_ENDPOINT_LOGIN, AUTH_ENDPOINT_REGISTER, AUTH_ENDPOINT_FORGOT_PASSWORD, AUTH_ENDPOINT_RESET_PASSWORD, AUTH_ENDPOINT_PROFILE, CHANGE_AUTH, SET_POST_AUTH_PATH, GET_AUTHENTICATED_USER, ENDPOINT_LOGIN, ENDPOINT_DASHBOARD } from '../../constants/interface/requests';

/**
 * changeAuthentication - Change authentication
 * @param {String} payload  The change auth request
 * @returns {function}
 */
export const changeAuthentication = payload => dispatch =>
  dispatch({
    type: CHANGE_AUTH,
    payload
  });

/**
 * login - Authenticate a user with an email and password
 * @param {Object} credentials  Login credentials (email, password)
 */
export const login = (credentials, desiredPath) => async (dispatch) => {
  try {
    const response = await post(dispatch, CHANGE_AUTH, AUTH_ENDPOINT_LOGIN, credentials, false);
    // If the login was successful, set the JWT as a cookie
    if (response) {
      setCookie('token', response.token, { maxAge: response.tokenExpiration });
      if (desiredPath) {
        window.location.href = `${getAppUrl()}${desiredPath}`;
      } else {
        window.location.href = `${getAppUrl()}/${ENDPOINT_DASHBOARD}`;
      }
    }
  } catch (error) {
    await handleError(dispatch, error, CHANGE_AUTH);
  }
};

/**
 * register - Creates a new account for a user
 * @param {Object} formData  User's form data
 */
export const register = formData => async (dispatch) => {
  try {
    const response = await post(dispatch, CHANGE_AUTH, AUTH_ENDPOINT_REGISTER, formData, false);
    // If the registration was successful, set the JWT as a cookie
    if (response) {
      setCookie('token', response.token, { maxAge: response.tokenExpiration });
      window.location.href = `${getAppUrl()}/${ENDPOINT_DASHBOARD}`;
    }
  } catch (error) {
    await handleError(dispatch, error, CHANGE_AUTH);
  }
};

/**
 * setPostAuthPath - Save desired pre-auth path to state
 * @param {String} payload  The desired path, saved pre-authentication
 * @returns {function}
 */
export const setPostAuthPath = payload => dispatch =>
  dispatch({
    type: SET_POST_AUTH_PATH,
    payload,
  });

/**
 * logoutUser - Log user out by clearing auth state and token cookie
 */
export const logoutUser = () => (dispatch) => {
  dispatch({ type: CHANGE_AUTH, payload: {} });
  deleteCookie('token');

  window.location.href = `${getAppUrl()}/${ENDPOINT_LOGIN}`;
};

/**
 * forgotPassword - Sends user an email with a token to reset their password
 * @param {Object} formData  The user's email address
 * @returns {Promise}
 */
export const forgotPassword = formData => async (dispatch) => {
  try {
    const response = await post(
      dispatch,
      CHANGE_AUTH,
      AUTH_ENDPOINT_FORGOT_PASSWORD,
      formData,
      false);
    return Promise.resolve(response);
  } catch (error) {
    await handleError(dispatch, error, CHANGE_AUTH);
  }
};

/**
 * resetPassword - Resets a user's password, given a valid token
 * @param {Object} formData  The user's email address
 * @param {String} token     Valid token required for password reset
 * @returns {Promise}
 */
export const resetPassword = (formData, token) => async (dispatch) => {
  try {
    const response = await post(dispatch, CHANGE_AUTH, `${AUTH_ENDPOINT_RESET_PASSWORD}/${token}`, formData, false);
    return Promise.resolve(response);
  } catch (error) {
    await handleError(dispatch, error, CHANGE_AUTH);
  }
};

/**
 * getAuthenticatedUser - Retrieves the logged in user's information
 * @returns {Promise}
 */
export const getAuthenticatedUser = () => async (dispatch) => {
  try {
    const response = await get(dispatch, GET_AUTHENTICATED_USER, AUTH_ENDPOINT_PROFILE, true);
    return Promise.resolve(response);
  } catch (error) {
    await handleError(dispatch, error, GET_AUTHENTICATED_USER);
  }
};
