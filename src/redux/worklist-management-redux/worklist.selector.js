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
