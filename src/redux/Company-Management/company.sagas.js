import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import { CREATE_COMPANY, GET_COMPANIES } from '../../services/api';
import {
  companyCreationError,
  companyCreationSuccess,
  getCompanyError,
  getCompanySuccess,
} from './company.actions';
import COMPANY_ACTION_TYPE from './company-action.types';

export function* createNewCompany(data) {
  try {
    const newCompany = yield call(CREATE_COMPANY, data);
    yield put(companyCreationSuccess(newCompany));
  } catch (error) {
    yield put(companyCreationError(error.response.data));
  }
}

export function* createCompanyStart() {
  yield takeLatest(COMPANY_ACTION_TYPE.START, createNewCompany);
}

export function* companySaga() {
  yield all([call(createCompanyStart)]);
}

export function* getCompanies(data) {
  try {
    const companyData = yield call(GET_COMPANIES, data.payload);
    yield put(getCompanySuccess(companyData));
  } catch (error) {
    console.log(error);
    yield put(getCompanyError(error.response.data));
  }
}

export function* getCompanyStart() {
  yield takeLatest(COMPANY_ACTION_TYPE.GET_COMPANIES, getCompanies);
}

export function* getCompanySaga() {
  yield all([call(getCompanyStart)]);
}
