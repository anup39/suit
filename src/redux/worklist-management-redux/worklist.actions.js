import WORKLIST_MANAGEMENT_ACTION_TYPE from './worklist.action-types';

export const getWorkList = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST,
  payload: data,
});

export const getWorkListSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST_SUCCESS,
  payload: data,
});

export const getWorkListError = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST_ERROR,
  payload: data,
});

export const addWorkList = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST,
  payload: data,
});

export const addWorkListSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST_SUCCESS,
  payload: data,
});

export const addWorkListError = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST_ERROR,
  payload: data,
});

export const editWorkList = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST,
  payload: data,
});

export const editWorkListSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST_SUCCESS,
  payload: data,
});

export const editWorkListError = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST_ERROR,
  payload: data,
});

export const getTaskByID = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID,
  payload: data,
});

export const getTaskByIDSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID_SUCCESS,
  payload: data,
});

export const getTaskByIDError = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID_ERROR,
  payload: data,
});

export const deleteTaskByID = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID,
  payload: data,
});

export const deleteTaskByIDSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID_SUCCESS,
  payload: data,
});

export const deleteTaskByIDError = (data) => ({
  type: WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID_ERROR,
  payload: data,
});
