export const getAllProjects = (state) => {
  return state.projectManagement.projectList;
};

export const getProjectData = (state) => {
  return state.projectManagement.getCurrentProductData;
};

export const getAssignProjectLoading = (state) => {
  return state.projectManagement.isAssingProjectLoading;
};

export const getAssignProjectError = (state) => {
  return state.projectManagement.assingProjectError;
};

export const getAssignProjectSuccess = (state) => {
  return state.projectManagement.assingProject;
};

export const getCreateProjectLoadingStatus = (state) => {
  return state.projectManagement.isCreateNewProjectLoading;
};

export const getCreateProjectError = (state) => {
  return state.projectManagement.createNewProjectError;
};

export const getCreateProjectData = (state) => {
  return state.projectManagement.createNewProjectData;
};

export const getDashbordData = (state) => {
  return state.projectManagement.projectDashbord;
};

export const getDashbordByProjectId = (state) => {
  return state.projectManagement.projectDashbordById;
};

export const getIfDashbordByProjectIdLoading = (state) => {
  return state.projectManagement.isprojectDashbordByIdLoading;
};

export const getDashbordByProjectIdError = (state) => {
  return state.projectManagement.projectDashbordByIdError;
};

export const getImportProjectDataLoading = (state) => {
  return state.projectManagement.isImportProjectDataLoading;
};
