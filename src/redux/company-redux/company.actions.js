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
