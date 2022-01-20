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

export const getAddWorklistLoading = (state) => {
  return state.workListManagement.isAddWorkListLoading;
};

export const getEditWorklistLoading = (state) => {
  return state.workListManagement.isEditWorkListLoading;
};

export const getAddWorkListError = (state) => {
  return state.workListManagement.addWorklistError;
};

export const getEditWorkListError = (state) => {
  return state.workListManagement.editWorklistError;
};

export const getAddWorkListSuccess = (state) => {
  return state.workListManagement.addWorkListData;
};

export const getEditWorkListSuccess = (state) => {
  return state.workListManagement.editWorkListData;
};

export const getDeleteWorkListSuccess = (state) => {
  return state.workListManagement.DeleteTaskByIdData;
};

export const getIsDeleteWorkListLoading = (state) => {
  return state.workListManagement.isDeleteTaskByIDLoading;
};
