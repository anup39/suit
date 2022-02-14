export const getSignedupError = (state) => {
  return state.user.error;
};

export const getSignedupSuccess = (state) => {
  return state.user.signupStatus;
};

export const getLoadingStatus = (state) => {
  return state.user.isLoading;
};

export const getSigninError = (state) => {
  return state.user.error;
};

export const getUserData = (state) => {
  return state.user.userData;
};

export const getCurrentUserRole = () => {
  // if (state.user.userData) {
  //   return state.user.userData.roles[0];
  // }
  // return 'notAuthenticated';

  return 'planA_admin';
};

export const getUserAuthToken = (state) => {
  return state.user.userData.refreshToken;
};

export const getIfAuthenticated = (state) => {
  return state.user.isAuthenticated;
};

export const getIsSignOutLoading = (state) => {
  return state.user.isSignoutLoading;
};
