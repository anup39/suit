export const getSignedupError = (state) => {
  return state.user.error;
};
export const getLoadingStatus = (state) => {
  return state.user.isLoading;
};

export const getSigninError = (state) => {
  return state.user.error;
};

export const getUserData = (state) => {
  return state.user;
};

export const getUserAuthToken = (state) => {
  return state.user.userData.accessToken;
};

export const getIfAuthenticated = (state) => {
  return state.user.isAuthenticated;
};

export const getCurrentLanguage = (state) => {
  return state.user.currentLanguage;
};
