import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import { LOG_OUT, SIGNIN, SIGNUP } from '../../services/api';
import USER_ACTION_TYPES from './user.action-types';
import {
  userSigninFailure,
  userSigninSuccess,
  userSignOutSuccess,
  userSignupFailure,
  userSignupSuccess,
} from './user.actions';

export function* registerNewUser({ payload }) {
  try {
    const registerUser = yield call(SIGNUP, payload);
    yield put(userSignupSuccess(registerUser.status));
    yield toast.success('Please Check Your Email For Verification Link!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(userSignupFailure(error.response.data));
  }
}

export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP_START, registerNewUser);
}

export function* signInUser({ payload }) {
  try {
    const signin = yield call(SIGNIN, payload);
    yield put(userSigninSuccess(signin));
  } catch (error) {
    yield put(userSigninFailure(error.response.data));
  }
}

export function* onUserSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNIN_START, signInUser);
}

export function* signOutUser({ payload }) {
  try {
    const signout = yield call(LOG_OUT, payload);
    yield put(userSignOutSuccess(signout));
  } catch (error) {
    yield put(userSigninFailure(error.response.data));
  }
}

export function* onSignOutUser() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNOUT, signOutUser);
}

export function* userSagas() {
  yield all([
    call(onUserSignUpStart),
    call(onUserSignInStart),
    call(onSignOutUser),
  ]);
}
