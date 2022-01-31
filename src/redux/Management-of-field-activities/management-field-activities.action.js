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

export const getAllfieldlogs = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK,
  payload: data,
});

export const getAllfieldlogsSuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_SUCCESS,
  payload: data,
});

export const getAllfieldlogsError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_FIELD_LOGS_BY_TASK_ERROR,
  payload: data,
});

export const changeFieldLogStatus = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS,
  payload: data,
});

export const changeFieldLogStatusSuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS_SUCCESS,
  payload: data,
});

export const changeFieldLogStatusError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.CHANGE_FIELD_LOG_STATUS_ERROR,
  payload: data,
});

export const resetFieldLogData = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.RESET_CHANGE_FIELD_LOG_STATUS,
  payload: data,
});

export const getAllControlActivity = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY,
  payload: data,
});

export const getAllControlActivitySuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY_SUCCESS,
  payload: data,
});

export const getAllControlActivityError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_ALL_CONTROL_ACTIVITY_ERROR,
  payload: data,
});

export const getControlActivityParam = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS,
  payload: data,
});

export const getControlActivityParamSuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS_SUCCESS,
  payload: data,
});

export const getControlActivityParamError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.GET_CONTROL_ACTIVITY_PARAMS_ERROR,
  payload: data,
});

export const addControlActivityData = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.HANDLE_CONTROL_ACTIVITY_DATA_ADD,
  payload: data,
});

export const editControlActivityData = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.HANDLE_CONTROL_ACTIVITY_DATA_EDIT,
  payload: data,
});

export const resetControlActivityData = () => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.RESET_CONTROL_ACTIVITY_DATA,
  payload: '',
});

export const controlActivityDataAdd = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.ADD_CONTROL_ACTIVITY_DATA,
  payload: data,
});

export const controlActivityDataSuccess = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.ADD_CONTROL_ACTIVITY_DATA_SUCCESS,
  payload: data,
});

export const controlActivityDataError = (data) => ({
  type: MANAGEMENT_OF_FIELD_ACTIVITIES_TYPES.ADD_CONTROL_ACTIVITY_DATA_ERROR,
  payload: data,
});
