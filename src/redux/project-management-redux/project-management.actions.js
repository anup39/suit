import PROJECT_MANAGEMENT_TYPES from './project-management.action-types';

export const createNewProject = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT,
  payload: data,
});

export const createNewProjectSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT_SUCCESS,
  payload: data,
});

export const createNewProjectError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.CREATE_NEW_PROJECT_ERROR,
  payload: data,
});

export const getProjectList = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST,
  payload: data,
});

export const getProjectListSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST_SUCCESS,
  payload: data,
});

export const getProjectListError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST_ERROR,
  payload: data,
});

export const getProjectDetails = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA,
  payload: data,
});

export const getProjectDetailsSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DATA_SUCCESS,
  payload: data,
});

export const getProjectDetailsError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST_ERROR,
  payload: data,
});

export const deleteProjectData = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA,
  payload: data,
});

export const deleteProjectDataSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA_SUCCESS,
  payload: data,
});

export const deleteProjectError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DELETE_PROJECT_DATA_ERROR,
  payload: data,
});
