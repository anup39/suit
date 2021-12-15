import COMPANY_MANAGEMENT from './company-action.types';

export const addNewCompany = () => ({
  type: COMPANY_MANAGEMENT.ADD,
  payload: true,
});

export const cancelCompanyCreation = () => ({
  type: COMPANY_MANAGEMENT.CANCEL,
  payload: false,
});

export const createCompany = (data) => ({
  type: COMPANY_MANAGEMENT.START,
  payload: data,
});

export const companyCreationSuccess = (data) => ({
  type: COMPANY_MANAGEMENT.SUCCESS,
  payload: data,
});

export const companyCreationError = (data) => ({
  type: COMPANY_MANAGEMENT.ERROR,
  payload: data,
});

export const getCompanies = (data) => ({
  type: COMPANY_MANAGEMENT.GET_COMPANIES,
  payload: data,
});

export const getCompanySuccess = (data) => ({
  type: COMPANY_MANAGEMENT.GET_COMPANIES_SUCCESS,
  payload: data,
});

export const getCompanyError = (status) => ({
  type: COMPANY_MANAGEMENT.GET_COMPANIES_ERROR,
  payload: status,
});
