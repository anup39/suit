const ROLE_ACTION_TYPE = {
  ADD_USER: 'ADD_USER',
  USER_DATA: 'USER_DATA',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',

  START: 'START',
  EDIT_FORM: 'EDIT_FORM',
  EDIT_USER_ROLE: 'EDIT_USER_ROLE',
  ERROR_EDITING_ROLE: 'ERROR_EDITING_ROLE',

  GET_USER: 'GET_USER',
  ERROR_USER: 'ERROR_USER',
  SUCCESS_GETTING_USER: 'SUCCESS_GETTING_USER',

  CLOSE_EDIT_FORM: 'CLOSE_EDIT_FORM',
  OPEN_ADD_FORM: 'OPEN_ADD_FORM ',
  CLOSE_ADD_FORM: 'CLOSE_ADD_FORM',

  SELECT_USER: 'SELECT_USER',
  SELECT_USER_SUCCESS: 'SELECT_USER_SUCCESS',
  SELECT_USER_ERROR: 'SELECT_USER_ERROR',
  SELECT_ALL_USER: 'SELECT_ALL_USER',
  DESELECT_ALL_USER: 'DESELECT_ALL_USER',

  DESELECT_USER: 'DESELECT_USER',
  DESELECT_USER_SUCCESS: 'DESELECT_USER_SUCCESS',
  DESELECT_USER_ERROR: 'DESELECT_USER_ERROR',

  GET_USER_ROLES_LIST: 'GET_USER_ROLES_LIST',
  GET_USER_ROLES_LIST_SUCCESS: 'GET_USER_ROLES_LIST_SUCCESS',
  GET_USER_ROLES_LIST_ERROR: 'GET_USER_ROLES_LIST_ERROR',

  UPDATE_USER_ROLE: 'UPDATE_USER_ROLE',
  UPDATE_USER_ROLE_SUCCESS: 'UPDATE_USER_ROLE_SUCCESS',
  UPDATE_USER_ROLE_ERROR: 'UPDATE_USER_ROLE_ERROR',

  DELETE_USER: 'DELETE_USER',
  DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
  DELETE_USER_ERROR: 'DELETE_USER_ERROR',

  DELETE_USER_IN_BULK: 'DELETE_IN_BULK_USER',
  DELETE_USER_IN_BULK_SUCCESS: 'DELETE_IN_BULK_USER_SUCCESS',
  DELETE_USER_IN_BULK_ERROR: 'DELETE_IN_BULK_USER_ERROR',
};

export default ROLE_ACTION_TYPE;
