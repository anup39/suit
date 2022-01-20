export const getUserRoles = (state) => {
  return state.role.userRoleList;
};

export const getUserRoleList = (state) => {
  return state.role.data;
};

export const getListOfUsers = (state) => {
  return state.role.data;
};

export const getListOfUsers1 = (state) => {
  return state.role.data;
};

export const getSelectedUsers = (state) => {
  return state.role.selectedUser;
};

export const getIfAllSelected = (state) => {
  return state.role.isSelectAllUser;
};

export const getIsLoading = (state) => {
  return state.role.isLoading;
};

export const getDeleteUserData = (state) => {
  return state.role.deleteUserData;
};

export const getDeleteUserError = (state) => {
  return state.role.deleteUserError;
};

export const getIsDeleteUserInBulkLoading = (state) => {
  return state.role.isDeleteUserInBulkLoading;
};

export const getDeleteUserInBulkSuccess = (state) => {
  return state.role.deleteUserDataInBulk;
};

export const getDeleteUserInBulkError = (state) => {
  return state.role.deleteUserInBulkError;
};

export const getIsUpdateUserRoleLoading = (state) => {
  return state.role.isupdateUserRoleLoading;
};

export const getUpdateUserRoleData = (state) => {
  return state.role.updateUserRole;
};
