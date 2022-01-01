export const getSignedupError = (state) => {
  return state.user.error;
};
export const getLoadingStatus = (state) => {
  return state.user.isLoading;
};

export const getSigninError = (state) => {
  return state.user.error;
};

export const getUserAuthToken = (state) => {
  return state.user.userData.accessToken;
};
