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

export const updateCompany = (data) => ({
  type: COMPANY_ACTION_TYPES.UPDATE_COMPANY,
  payload: data,
});
export const updateCompanySuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.UPDATE_COMPANY_SUCCESS,
  payload: data,
});
export const updateCompanyError = (data) => ({
  type: COMPANY_ACTION_TYPES.UPDATE_COMPANY_FAIL,
  payload: data,
});

export const addCompanyUsers = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_ADD_USERS,
  payload: data,
});
export const addCompanyUsersSuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_ADD_USERS_SUCCESS,
  payload: data,
});
export const addCompanyUsersError = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_ADD_USERS_FAIL,
  payload: data,
});

export const deleteCompanyUsers = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS,
  payload: data,
});
export const deleteCompanyUsersSuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS_SUCCESS,
  payload: data,
});
export const deleteCompanyUsersError = (data) => ({
  type: COMPANY_ACTION_TYPES.COMPANY_DELETE_USERS_ERROR,
  payload: data,
});

export const getCompanyUsers = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS,
  payload: data,
});
export const getCompanyUsersSuccess = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS_SUCCESS,
  payload: data,
});
export const getCompanyUsersError = (data) => ({
  type: COMPANY_ACTION_TYPES.GET_ALL_COMPANY_USERS_ERROR,
  payload: data,
});
