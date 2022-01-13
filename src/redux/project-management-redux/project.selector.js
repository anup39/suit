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
