// Namespace for application
export const APP = 'mkrn';

// Request status indicators
export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

// Request types (lowercase for axios access)
export const DELETE = 'delete';
export const GET = 'get';
export const POST = 'post';
export const PUT = 'put';

// Request endpoints (lowercase for router access)
export const ENDPOINT_LOGIN = 'login';
export const ENDPOINT_REGISTER = 'register';
export const ENDPOINT_FORGOT_PASSWORD = 'forgot-password';
export const ENDPOINT_RESET_PASSWORD = 'reset-password';
export const ENDPOINT_PROFILE = 'profile';
export const ENDPOINT_DASHBOARD = 'dashboard';
export const USER_ENDPOINT_BASE = 'user';
export const AUTH_ENDPOINT_BASE = 'auth';
export const AUTH_ENDPOINT_LOGIN = `${AUTH_ENDPOINT_BASE}/${ENDPOINT_LOGIN}`;
export const AUTH_ENDPOINT_REGISTER = `${AUTH_ENDPOINT_BASE}/${ENDPOINT_REGISTER}`;
export const AUTH_ENDPOINT_FORGOT_PASSWORD = `${AUTH_ENDPOINT_BASE}/${ENDPOINT_FORGOT_PASSWORD}`;
export const AUTH_ENDPOINT_RESET_PASSWORD = `${AUTH_ENDPOINT_BASE}/${ENDPOINT_RESET_PASSWORD}`;
export const AUTH_ENDPOINT_PROFILE = `${AUTH_ENDPOINT_BASE}/${ENDPOINT_PROFILE}`;

// Authentication request types
export const AUTH_TYPE_BASE = `${APP}/${AUTH_ENDPOINT_BASE}/`;
export const CHANGE_AUTH = `${AUTH_TYPE_BASE}CHANGE_AUTH`;
export const SET_POST_AUTH_PATH = `${AUTH_TYPE_BASE}SET_POST_AUTH_PATH`;
export const RESET_PASSWORD = `${AUTH_TYPE_BASE}RESET_PASSWORD`;
export const GET_AUTHENTICATED_USER = `${AUTH_TYPE_BASE}GET_AUTHENTICATED_USER`;

// User request types
export const USER_TYPE_BASE = `${APP}/${USER_ENDPOINT_BASE}/`;
export const GET_USER = `${USER_TYPE_BASE}GET_USER`;
export const GET_USERS = `${USER_TYPE_BASE}GET_USERS`;
