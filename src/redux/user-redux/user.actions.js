import USER_ACTION_TYPES from './user.action-types';

export const userSignupStart = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNUP_START,
  payload: data,
});

export const userSignupSuccess = (status) => ({
  type: USER_ACTION_TYPES.USER_SIGNUP_SUCCESS,
  payload: status,
});

export const userSignupFailure = (status) => ({
  type: USER_ACTION_TYPES.USER_SIGNUP_FAILURE,
  payload: status,
});

export const getUserType = (type) => ({
  type: USER_ACTION_TYPES.USER_GROUP_TYPE,
  payload: type,
});

export const userSigninStart = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNIN_START,
  payload: data,
});

export const userSigninSuccess = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNIN_SUCCESS,
  payload: data,
});

export const userSigninFailure = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNIN_FAILURE,
  payload: data,
});

export const userSingout = () => ({
  type: USER_ACTION_TYPES.USER_SIGNOUT,
  payload: '',
});

export const resetSignupError = () => ({
  type: USER_ACTION_TYPES.RESET_SIGNUP_ERROR,
  payload: '',
});
