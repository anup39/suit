import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import { CREATECOMPANY } from '../../services/api';
import COMPANY_ACTION_TYPES from './company.action-types';
import { failCreateCompany, succeedCreateCompany } from './company.actions';

export function* createNewCompany({ payload }) {
  try {
    const createCompany = yield call(CREATECOMPANY, payload);
    yield put(succeedCreateCompany(createCompany.status));
  } catch (error) {
    yield put(failCreateCompany(error.response.data));
    yield put(failCreateCompany(null));
  }
}

export function* onCompanyCreateStart() {
  yield takeLatest(COMPANY_ACTION_TYPES.CREATE_COMPANY_START, createNewCompany);
}

export function* companySagas() {
  yield all([call(onCompanyCreateStart)]);
}
