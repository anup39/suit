export const getCurrentTaskData = (state) => {
  return state.workListManagement.taskByIdData;
};

export const getIsTaskDataByIdLoading = (state) => {
  return state.workListManagement.isTaskByIdLoading;
};

export const getAllWorkListData = (state) => {
  return state.workListManagement.allWorkList;
};

export const getTasksByProject = (state) => {
  return state.workListManagement.taskByProject;
};

export const getIsAllWorklistLoading = (state) => {
  return state.workListManagement.isGetAllWorklistLoading;
};

export const getIfAllWorkListSelected = (state) => {
  return state.workListManagement.isSelectAllWorkList;
};

export const getSelectedWorkList = (state) => {
  return state.workListManagement.selectedWorkList;
};
