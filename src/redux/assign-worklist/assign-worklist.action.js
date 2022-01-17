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
