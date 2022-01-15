import MILESTONE_MANAGEMENT_ACTION_TYPES from './milestone-management.action.types';

export const getAllMilestones = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES,
  payload: data,
});

export const getAllMilestonesSuccess = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES_SUCCESS,
  payload: data,
});

export const getAllMilestonesError = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES_ERROR,
  payload: data,
});

export const getMilestoneById = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID,
  payload: data,
});

export const getMilestoneByIdSuccess = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID_SUCCESS,
  payload: data,
});

export const getMilestoneByIdError = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID_ERROR,
  payload: data,
});

export const updateMilestone = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE,
  payload: data,
});

export const updateMilestoneSuccess = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE_SUCCESS,
  payload: data,
});

export const updateMilestoneError = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE_ERROR,
  payload: data,
});

export const deleteMilestoneById = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE,
  payload: data,
});

export const deleteMilestoneByIdSuccess = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE_SUCCESS,
  payload: data,
});

export const deleteMilestoneByIdError = (data) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE_ERROR,
  payload: data,
});

export const selectAllMilestone = () => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.SELECT_ALL,
  payload: true,
});

export const deselectAllMilestone = () => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.DESELECT_ALL,
  payload: false,
});

export const selectMilestone = (id) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.SELECT_MILESTONE,
  payload: id,
});

export const deselectMilestone = (id) => ({
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.DESELECT_MILESTONE,
  payload: id,
});
