/*eslint-disable*/
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import USER_ACTION_TYPES from './user.action-types';
import { SIGNUP, SIGNIN } from '../../services/api';
import {
  userSignupFailure,
  userSignupSuccess,
  userSigninFailure,
  userSigninStart,
  userSigninSuccess,
} from './user.actions';

export function* registerNewUser({ payload }) {
  try {
    const registerUser = yield call(SIGNUP, payload);
    yield put(userSignupSuccess(registerUser.status));
  } catch (error) {
    yield put(userSignupFailure(error.response.data));
  }
}

export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP_START, registerNewUser);
}

export function* userSagas() {
  yield all([call(onUserSignUpStart)]);
}

export function* signInUser({ payload }) {
  try {
    const signin = yield call(SIGNIN, payload);
    yield put(userSigninSuccess(signin.status));
  } catch (error) {
    yield put(userSigninFailure, error.response.data);
  }
}

export function* onUserSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNIN_START, signInUser);
}

export function* signinSagas() {
  yield all([call(onUSerSignInStart)]);
}
