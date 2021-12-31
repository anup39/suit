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
