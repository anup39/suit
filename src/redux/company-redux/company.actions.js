import COMPANY_ACTION_TYPES from './company.action-types';

export const startCreateCompany = (status) => ({
  type: COMPANY_ACTION_TYPES.CREATE_COMPANY_START,
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
