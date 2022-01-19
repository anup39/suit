import WORKLIST_MANAGEMENT_TYPES from './assign-worklist-action.types';

export const selectOneTask = (id) => ({
  type: WORKLIST_MANAGEMENT_TYPES.SELECT_ONE,
  payload: id,
});

export const deselectOneTask = (id) => ({
  type: WORKLIST_MANAGEMENT_TYPES.DESELECT_ONE,
  payload: id,
});

export const selectAllTask = () => ({
  type: WORKLIST_MANAGEMENT_TYPES.SELECT_ALL,
  payload: true,
});

export const deselectAllTask = () => ({
  type: WORKLIST_MANAGEMENT_TYPES.DESELECT_ALL,
  payload: false,
});

export const assingTask = (data) => ({
  type: WORKLIST_MANAGEMENT_TYPES.ASSIGN_TASK,
  payload: data,
});

export const assingTaskSuccess = (data) => ({
  type: WORKLIST_MANAGEMENT_TYPES.ASSIGN_TASK_SUCCESS,
  payload: data,
});

export const assingTaskError = (data) => ({
  type: WORKLIST_MANAGEMENT_TYPES.ASSIGN_TASK_ERROR,
  payload: data,
});
