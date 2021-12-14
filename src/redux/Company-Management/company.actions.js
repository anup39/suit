import COMPANY_MANAGEMENT from './company-action.types';

export const addNewCompany = () => ({
  type: COMPANY_MANAGEMENT.ADD,
  payload: true,
});

export const cancelCompanyCreation = () => ({
  type: COMPANY_MANAGEMENT.CANCEL,
  payload: false,
});
