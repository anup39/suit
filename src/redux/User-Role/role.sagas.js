/*eslint-disable*/
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import ROLE_ACTION_TYPE from './role.action-types';
import {
  roleFailure,
  roleSuccess,
  userDataFailure,
  userDataSuccess,
} from './role.actions';
import { GETUSERS, GET_USER_BY_ID } from '../../services/api';
export function* getRoles(data) {
  try {
    const getUserData = yield call(GETUSERS, data.payload);
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

export function* getUserData(data) {
  try {
    const userData = yield call(GET_USER_BY_ID, data.payload);
    yield put(userDataSuccess(userData));
  } catch (error) {
    console.log(error);
    yield put(userDataFailure(error.response.data));
  }
}

export function* getUserStart() {
  yield takeLatest(ROLE_ACTION_TYPE.EDIT_FORM, getUserData);
}

export function* getUserToEdit() {
  yield takeLatest(ROLE_ACTION_TYPE.OPEN_ADD_FORM, getUserData);
}

export function* getUserSaga() {
  yield all([call(getUserStart), call(getUserToEdit)]);
}
