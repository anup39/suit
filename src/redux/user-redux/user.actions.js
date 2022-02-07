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

export const resetSignupError = () => ({
  type: USER_ACTION_TYPES.RESET_SIGNUP_ERROR,
  payload: '',
});

export const resetUserSignup = () => ({
  type: USER_ACTION_TYPES.RESET_USER_SIGNUP,
  payload: '',
});

export const resetUserSignin = () => ({
  type: USER_ACTION_TYPES.RESET_USER_SIGNIN,
  payload: '',
});

export const userSignOut = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNOUT,
  payload: data,
});

export const userSignOutSuccess = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS,
  payload: data,
});

export const userSignOutError = (data) => ({
  type: USER_ACTION_TYPES.USER_SIGNOUT_ERROR,
  payload: data,
});
