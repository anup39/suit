export const test = () => {};

export const getAllMilestone = (state) => {
  return state.milestoneManagment.getAllMilestoneData;
};

export const getMilestoneByIdData = (state) => {
  return state.milestoneManagment.MilestoneByIdData;
};

export const getIsAllMilestoneLoading = (state) => {
  return state.milestoneManagment.isGetAllMilestonesLoading;
};

export const getIsSelctAll = (state) => {
  return state.milestoneManagment.selectAllMilestone;
};

export const getSelectedMilestone = (state) => {
  return state.milestoneManagment.selectedMilestone;
};
