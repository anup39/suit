import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  COMPANY_ADD_USERS,
  COMPANY_DELETE_USERS,
  CREATE_COMPANY,
  DELETE_COMPANY_WITH_ID,
  GET_ALL_COMPANY,
  GET_COMPANY_ALL_USERS,
  UPDATE_COMPANY,
} from '../../services/api/companyManagement';
import COMPANY_ACTION_TYPES from './company.action-types';
import {
  addCompanyUsersError,
  addCompanyUsersSuccess,
  deleteCompanyFail,
  deleteCompanySuccess,
  deleteCompanyUsersError,
  deleteCompanyUsersSuccess,
  failCreateCompany,
  getAllCompanyError,
  getAllCompanySuccess,
  getCompanyUsersError,
  getCompanyUsersSuccess,
  succeedCreateCompany,
  updateCompanyError,
  updateCompanySuccess,
} from './company.actions';

export function* createNewCompany(payload) {
  try {
    const createCompany = yield call(CREATE_COMPANY, payload);
    yield put(succeedCreateCompany(undefined));
    yield toast.success(createCompany.data.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield toast.error(error.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(failCreateCompany(null));
  }
}

export function* onCompanyCreateStart() {
  yield takeLatest(COMPANY_ACTION_TYPES.CREATE_COMPANY, createNewCompany);
}

export function* allCompanyData(payload) {
  try {
    const getCompany = yield call(GET_ALL_COMPANY, payload);
    yield put(getAllCompanySuccess(getCompany));
  } catch (err) {
    yield toast.error(err.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(getAllCompanyError(err.response.data));
  }
}

export function* onAllCompanyData() {
  yield takeLatest(COMPANY_ACTION_TYPES.GET_ALL_COMPANY, allCompanyData);
}

// delete company userSagas

export function* deleteCompany({ payload }) {
  try {
    const deleteCompanyStart = yield call(DELETE_COMPANY_WITH_ID, payload);
    yield put(deleteCompanySuccess(deleteCompanyStart));
    yield toast.success(deleteCompanyStart.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(deleteCompanySuccess(undefined));
  } catch (error) {
    yield toast.error(error.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(deleteCompanyFail(error));
  }
}

export function* onDeleteCompanyStart() {
  yield takeLatest(COMPANY_ACTION_TYPES.DELETE_COMPANY_START, deleteCompany);
}

export function* updateCompany({ payload }) {
  try {
    const updateCompanyData = yield call(UPDATE_COMPANY, payload);
    yield put(updateCompanySuccess(updateCompanyData));
    yield toast.success('Company Updated Successfully!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(updateCompanySuccess(''));
  } catch (err) {
    yield put(updateCompanyError(err.response.data));
    yield toast.error('Failed To Update Company!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(updateCompanyError(''));
  }
}

export function* onUpdateCompany() {
  yield takeLatest(COMPANY_ACTION_TYPES.UPDATE_COMPANY, updateCompany);
}

// Company Users

export function* addUsersCompany(payload) {
  try {
    const addUsers = yield call(COMPANY_ADD_USERS, payload);
    yield put(addCompanyUsersSuccess(undefined));
    yield toast.success(addUsers.data.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield toast.error(error.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(addCompanyUsersError(null));
  }
}

export function* onCompanyAddUsers() {
  yield takeLatest(COMPANY_ACTION_TYPES.COMPANY_ADD_USERS, addUsersCompany);
}

export function* deleteUsersCompany(payload) {
  try {
    const deleteUsers = yield call(COMPANY_DELETE_USERS, payload);
    yield put(deleteCompanyUsersSuccess(deleteUsers.data));
    yield toast.success(deleteUsers.data.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield toast.error(error.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(deleteCompanyUsersError(null));
  }
}

export function* onCompanyDeleteUsers() {
  yield takeLatest(COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS, deleteUsersCompany);
}

export function* allCompanyUsers(payload) {
  try {
    const getCompanyUsers = yield call(GET_COMPANY_ALL_USERS, payload);
    yield put(getCompanyUsersSuccess(getCompanyUsers));
  } catch (err) {
    yield toast.error(err.message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    yield put(getCompanyUsersError(err.response.data));
  }
}

export function* onCompanyAllUsers() {
  yield takeLatest(COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS, allCompanyUsers);
}

export function* companySagas() {
  yield all([
    call(onDeleteCompanyStart),
    call(onCompanyCreateStart),
    call(onAllCompanyData),
    call(onUpdateCompany),
    call(onCompanyAddUsers),
    call(onCompanyAllUsers),
    call(onCompanyDeleteUsers),
  ]);
}
