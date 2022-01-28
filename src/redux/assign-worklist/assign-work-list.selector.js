export const getSelectedTaskList = (state) => {
  return state.assingWorkList.selectedTasks;
};

export const getIsSelectAll = (state) => {
  return state.assingWorkList.isSelectAllTask;
};

export const getIsAssignTaskLoading = (state) => {
  return state.assingWorkList.assignTaskLoading;
};

export const getIsAssignTaskSuccess = (state) => {
  return state.assingWorkList.assingTaskData;
};
