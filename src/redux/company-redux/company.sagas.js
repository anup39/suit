import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  CREATE_COMPANY,
  DELETE_COMPANY_WITH_ID,
  GET_ALL_COMPANY,
  UPDATE_COMPANY,
} from '../../services/api/companyManagement';
import COMPANY_ACTION_TYPES from './company.action-types';
import {
  deleteCompanyFail,
  deleteCompanySuccess,
  failCreateCompany,
  getAllCompanyError,
  getAllCompanySuccess,
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

export function* companySagas() {
  yield all([
    call(onDeleteCompanyStart),
    call(onCompanyCreateStart),
    call(onAllCompanyData),
    call(onUpdateCompany),
  ]);
}
