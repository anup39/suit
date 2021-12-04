import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import SIGNUP from '../../services/api';
import USER_ACTION_TYPES from './user.action-types';
import { userSignupFailure, userSignupSuccess } from './user.actions';

export function* registerNewUser({ payload }) {
  try {
    const registerUser = yield call(SIGNUP, payload);
    yield put(userSignupSuccess(registerUser));
  } catch (error) {
    yield put(userSignupFailure(error));
  }
}

export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.USER_SIGNUP_START, registerNewUser);
}

export function* userSagas() {
  yield all([call(onUserSignUpStart)]);
}
