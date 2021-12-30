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
  type: MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES_ERROR,
  payload: data,
});
