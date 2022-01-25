import MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES from './management-field-activities.action.types';

export const getAllActivities = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES,
  payload: data,
});

export const getAllActivitiesSuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES_SUCCESS,
  payload: data,
});

export const getAllActivitiesError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_ACTIVITIES_ERROR,
  payload: data,
});

export const resetGetAllActivities = () => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.RESET_GET_ALL_ACTIVITY,
  payload: '',
});
