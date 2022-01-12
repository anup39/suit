import COMPANY_ACTION_TYPES from './company.action-types';

export const createCompany = (status) => ({
  type: COMPANY_ACTION_TYPES.CREATE_COMPANY,
  payload: status,
});

export const succeedCreateCompany = (success) => ({
  type: COMPANY_ACTION_TYPES.CREATE_COMPANY_SUCCESS,
  payload: success,
});

export const failCreateCompany = (error) => ({
  type: COMPANY_ACTION_TYPES.CREATE_COMPANY_FAIL,
  payload: error,
});

export const getAllCompany = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY,
  payload: data,
});

export const getAllCompanySuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY_SUCCESS,
  payload: data,
});

export const getAllCompanyError = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY_ERROR,
  payload: data,
});

export const getCheckedCompany = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_CHECKED_COMPANY,
  payload: data,
});

export const eraseCheckedCompany = (data) => ({
  type: COMPANY_ACTION_TYPES.EREASE_CHECKED_COMPANY,
  payload: data,
});

export const deleteCompanyStart = (data) => ({
  type: COMPANY_ACTION_TYPES.DELETE_COMPANY_START,
  payload: data,
});
export const deleteCompanySuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.DELETE_COMPANY_SUCCESS,
  payload: data,
});
export const deleteCompanyFail = (data) => ({
  type: COMPANY_ACTION_TYPES.DELETE_COMPANY_FAIL,
  payload: data,
});
