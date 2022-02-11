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

export const resetNewProjectData = () => ({
  type: PROJECT_MANAGEMENT_TYPES.RESET_NEW_PROJECT_DATA,
  payload: '',
});

export const updateProject = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.UPDATE_PROJECT,
  payload: data,
});

export const updateProjectSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.UPDATE_PROJECT_SUCCESS,
  payload: data,
});

export const updateProjectError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.UPDATE_PROJECT_ERROR,
  payload: data,
});

export const resetUpdateProjectData = () => ({
  type: PROJECT_MANAGEMENT_TYPES.RESET_UPDATE_PROJECT_DATA,
  payload: '',
});

export const getProjectList = () => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_LIST,
  payload: '',
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

export const worklistByProject = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_WORKLIST_BY_PROJECT,
  payload: data,
});

export const worklistByProjectSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_WORKLIST_BY_PROJECT_SUCCESS,
  payload: data,
});

export const worklistByProjectError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_WORKLIST_BY_PROJECT_ERROR,
  payload: data,
});

export const projectDocuments = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS,
  payload: data,
});

export const projectDocumentsSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS_SUCCESS,
  payload: data,
});

export const projectDocumentsError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DOCUMENTS_ERROR,
  payload: data,
});

export const assignProject = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY,
  payload: data,
});

export const assignProjectSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY_SUCCESS,
  payload: data,
});

export const assignProjectError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.ASSIGN_PROJECT_TO_COMPANY_ERROR,
  payload: data,
});

export const resetAssignProject = () => ({
  type: PROJECT_MANAGEMENT_TYPES.RESET_ASSIGN_PROJECT_TO_COMPANY,
  payload: '',
});

export const projectDashbord = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DASHBORD,
  payload: data,
});

export const projectDashbordSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DASHBORD_SUCCESS,
  payload: data,
});

export const projectDashbordError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_PROJECT_DASHBORD_ERROR,
  payload: data,
});

export const importProjectData = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.IMPORT_PROJECT_DATA,
  payload: data,
});

export const importProjectDataSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.IMPORT_PROJECT_DATA_SUCCESS,
  payload: data,
});

export const importProjectDataError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.IMPORT_PROJECT_DATA_ERROR,
  payload: data,
});

export const importProjectDataReset = () => ({
  type: PROJECT_MANAGEMENT_TYPES.IMPORT_PROJECT_DATA_RESET,
  payload: '',
});

export const dashbordByProjectId = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DASHBORD_BY_PROJECT_ID,
  payload: data,
});

export const dashbordByProjectIdSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DASHBORD_BY_PROJECT_ID_SUCCESS,
  payload: data,
});

export const dashbordByProjectIdError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.DASHBORD_BY_PROJECT_ID_ERROR,
  payload: data,
});

export const getSelectedProjectLayersList = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_SELECTED_PROJECT_LAYERS_LIST,
  payload: data,
});

export const getSelectedProjectLayersListSuccess = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_SELECTED_PROJECT_LAYERS_LIST_SUCCESS,
  payload: data,
});

export const getSelectedProjectLayersListError = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.GET_SELECTED_PROJECT_LAYERS_LIST_ERROR,
  payload: data,
});

export const selectTaskId = (data) => ({
  type: PROJECT_MANAGEMENT_TYPES.SELECT_TASK_ID,
  payload: data,
});
