export const getAllProjects = (state) => {
  return state.projectManagement.projectList;
};

export const getProjectData = (state) => {
  return state.projectManagement.getCurrentProductData;
};
