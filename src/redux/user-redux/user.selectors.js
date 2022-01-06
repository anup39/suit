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
  return state.user.isAuthenticated;
};

export const getUserAuthToken = (state) => {
  return state.user.userData.accessToken;
};
