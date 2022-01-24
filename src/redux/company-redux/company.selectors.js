export const getCreateSuccess = (state) => {
  return state.company.createStatus;
};
export const getCreateError = (state) => {
  return state.company.error;
};
export const getLoadingStatus = (state) => {
  return state.company.isLoading;
};
export const getCompanyListLoadingStatus = (state) => {
  return state.company.isAllCompanyLoading;
};

export const getCompaniesList = (state) => {
  return state.company.allCompanyData;
};

export const getCompaniesListToDelete = (state) => {
  return state.company.checkedCompanyList;
};

export const getCompanyDeleteSuccess = (state) => {
  return state.company.deleteCompanySuccess;
};

export const getCompanyDeleteError = (state) => {
  return state.company.deleteCompanySuccess;
};

export const getDeleteCompanyLoading = (state) => {
  return state.company.isUpdateCompanyLoading;
};
