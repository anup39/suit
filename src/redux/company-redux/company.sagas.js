import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import {
  CREATE_COMPANY,
  GET_ALL_COMPANY,
} from '../../services/api/companyManagement';
import COMPANY_ACTION_TYPES from './company.action-types';
import {
  failCreateCompany,
  getAllCompanyError,
  getAllCompanySuccess,
  succeedCreateCompany,
} from './company.actions';

export function* createNewCompany({ payload }) {
  try {
    const createCompany = yield call(CREATE_COMPANY, payload);
    yield put(succeedCreateCompany(createCompany.status));
  } catch (error) {
    yield put(failCreateCompany(error.response.data));
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
    yield put(getAllCompanyError(err.response.data));
  }
}

export function* onAllCompanyData() {
  yield takeLatest(COMPANY_ACTION_TYPES.GET_ALL_COMPANY, allCompanyData);
}

export function* companySagas() {
  yield all([call(onCompanyCreateStart), call(onAllCompanyData)]);
}
