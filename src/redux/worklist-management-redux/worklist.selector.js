export const getCurrentTaskData = (state) => {
  return state.workListManagement.taskByIdData;
};

export const getIsTaskDataByIdLoading = (state) => {
  return state.workListManagement.isTaskByIdLoading;
};
