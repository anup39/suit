/*eslint-disable*/
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import ROLE_ACTION_TYPE from './role.action-types';
import { roleFailure, roleSuccess } from './role.actions';
import { GETUSER } from '../../services/api';
export function* getRoles(data) {
  try {
    const getUserData = yield call(GETUSER, data.payload);
    yield put(roleSuccess(getUserData));
  } catch (error) {
    console.log(error);
    yield put(roleFailure(error.response.data));
  }
}

export function* getRoleSatrt() {
  yield takeLatest(ROLE_ACTION_TYPE.START, getRoles);
}

export function* roleSaga() {
  yield all([call(getRoleSatrt)]);
}
