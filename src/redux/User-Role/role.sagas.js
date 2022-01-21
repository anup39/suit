import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  DELETE_USER,
  DELETE_USER_IN_BULK,
  GET_ROLES,
  GET_USER_BY_ID,
  GETUSERS,
  UPDATE_ROLES,
} from '../../services/api';
import ROLE_ACTION_TYPE from './role.action-types';
import {
  deleteUserError,
  deleteUserInBulkError,
  deleteUserInBulkSuccess,
  deleteUserSuccess,
  roleFailure,
  roleSuccess,
  updateUserRoleAndCompanyError,
  updateUserRoleAndCompanySuccess,
  userDataFailure,
  userDataSuccess,
  userRolesError,
  userRolesSuccess,
} from './role.actions';

export function* getRoles(data) {
  try {
    const getData = yield call(GETUSERS, data.payload);
    yield put(roleSuccess(getData));
  } catch (error) {
    console.log(error);
    yield put(roleFailure(error.response.data));
  }
}

export function* getRoleSatrt() {
  yield takeLatest(ROLE_ACTION_TYPE.START, getRoles);
}

export function* getAllRoles(data) {
  try {
    const allRoles = yield call(GET_ROLES, data.payload);
    yield put(userRolesSuccess(allRoles));
  } catch (error) {
    yield put(userRolesError(error.response.data));
  }
}

export function* onGetAllRoles() {
  yield takeLatest(ROLE_ACTION_TYPE.GET_USER_ROLES_LIST, getAllRoles);
}

export function* updateUserRoles(data) {
  try {
    const updatedData = yield call(UPDATE_ROLES, data.payload);
    yield put(updateUserRoleAndCompanySuccess(updatedData));
    yield toast.success('User Updated Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(updateUserRoleAndCompanyError(error.response.data));
    yield toast.error('User Updation Error!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onUpdateUserRoles() {
  yield takeLatest(ROLE_ACTION_TYPE.UPDATE_USER_ROLE, updateUserRoles);
}

export function* deleteUser(data) {
  try {
    const deletedUser = yield call(DELETE_USER, data.payload);
    yield put(deleteUserSuccess(deletedUser));
  } catch (error) {
    yield put(deleteUserError(error.response.data));
  }
}

export function* onDeleteUser() {
  yield takeLatest(ROLE_ACTION_TYPE.DELETE_USER, deleteUser);
}

export function* deleteUserInBulk(data) {
  try {
    const deletedUserInBulk = yield call(DELETE_USER_IN_BULK, data.payload);
    yield put(deleteUserInBulkSuccess(deletedUserInBulk));

    yield toast.success('User Deleted Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(deleteUserInBulkError(error.response.data));
    yield toast.error('Failed To Delete  Users', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onDeleteUserInBulk() {
  yield takeLatest(ROLE_ACTION_TYPE.DELETE_USER_IN_BULK, deleteUserInBulk);
}

export function* roleSaga() {
  yield all([
    call(getRoleSatrt),
    call(onGetAllRoles),
    call(onUpdateUserRoles),
    call(onDeleteUser),
    call(onDeleteUserInBulk),
  ]);
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
