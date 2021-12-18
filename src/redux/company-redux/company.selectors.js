export const getCreateSuccess = (state) => {
  return state.company.createStatus;
};
export const getCreateError = (state) => {
  return state.company.error;
};
export const getLoadingStatus = (state) => {
  return state.company.isLoading;
};
