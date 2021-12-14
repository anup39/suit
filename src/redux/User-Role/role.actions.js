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
