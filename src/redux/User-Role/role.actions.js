import ROLE_ACTION_TYPE from './role.action-types';

export const roleStart = (data) => ({
  type: ROLE_ACTION_TYPE.START,
  payload: data,
});

export const roleSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.SUCCESS,
  payload: data,
});

export const roleFailure = (status) => ({
  type: ROLE_ACTION_TYPE.ERROR,
  payload: status,
});

export const openEditForm = (data) => ({
  type: ROLE_ACTION_TYPE.EDIT_FORM,
  payload: data,
});

export const closeEditForm = () => ({
  type: ROLE_ACTION_TYPE.CLOSE_EDIT_FORM,
  payload: false,
});

// export const getUserData = (data) => ({
//   type: ROLE_ACTION_TYPE.GET_USER,
//   payload: data,
// });

export const userDataSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.SUCCESS_GETTING_USER,
  payload: data,
});

export const userDataFailure = (status) => ({
  type: ROLE_ACTION_TYPE.ERROR_USER,
  payload: status,
});

export const openAddForm = (data) => ({
  type: ROLE_ACTION_TYPE.OPEN_ADD_FORM,
  payload: data,
});

export const closeAddForm = () => ({
  type: ROLE_ACTION_TYPE.CLOSE_ADD_FORM,
  payload: false,
});

export const selectUser = (data) => ({
  type: ROLE_ACTION_TYPE.SELECT_USER,
  payload: data,
});

export const selectUserSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.SELECT_USER_SUCCESS,
  payload: data,
});

export const selectUserError = (data) => ({
  type: ROLE_ACTION_TYPE.SELECT_USER_ERROR,
  payload: data,
});

export const deSelectUser = (data) => ({
  type: ROLE_ACTION_TYPE.DESELECT_USER,
  payload: data,
});

export const deSelectUserSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.DESELECT_USER_SUCCESS,
  payload: data,
});

export const deSelectUserError = (data) => ({
  type: ROLE_ACTION_TYPE.DESELECT_USER_ERROR,
  payload: data,
});

export const userRoles = (data) => ({
  type: ROLE_ACTION_TYPE.GET_USER_ROLES_LIST,
  payload: data,
});

export const userRolesSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.GET_USER_ROLES_LIST_SUCCESS,
  payload: data,
});

export const userRolesError = (data) => ({
  type: ROLE_ACTION_TYPE.GET_USER_ROLES_LIST_ERROR,
  payload: data,
});

export const updateUserRoleAndCompany = (data) => ({
  type: ROLE_ACTION_TYPE.UPDATE_USER_ROLE,
  payload: data,
});

export const updateUserRoleAndCompanySuccess = (data) => ({
  type: ROLE_ACTION_TYPE.UPDATE_USER_ROLE_SUCCESS,
  payload: data,
});

export const updateUserRoleAndCompanyError = (data) => ({
  type: ROLE_ACTION_TYPE.UPDATE_USER_ROLE_ERROR,
  payload: data,
});

export const deleteUser = (data) => ({
  type: ROLE_ACTION_TYPE.DELETE_USER,
  payload: data,
});

export const deleteUserSuccess = (data) => ({
  type: ROLE_ACTION_TYPE.DELETE_USER_SUCCESS,
  payload: data,
});

export const deleteUserError = (data) => ({
  type: ROLE_ACTION_TYPE.DELETE_USER_ERROR,
  payload: data,
});
