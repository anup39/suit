export const getActivitiesDetails = (state) => {
  return state.fieldActivities.allActivitiesData;
};

export const getIsActivitiesLoading = (state) => {
  return state.fieldActivities.iAllActivitiesLoading;
};

export const getfieldlogs = (state) => {
  return state.fieldActivities.fieldlogsData;
};

export const getIsChangeFieldLogLoading = (state) => {
  return state.fieldActivities.isChangeFieldlogsStatusLoading;
};

export const getChangeFieldLogSuccess = (state) => {
  return state.fieldActivities.changeFieldlogsStatus;
};

export const allControlActivity = (state) => {
  return state.fieldActivities.allControlActivity;
};

export const isControlActivityLoading = (state) => {
  return state.fieldActivities.isAllControlActivityLoading;
};

export const getControlActivityParams = (state) => {
  return state.fieldActivities.controlActivityPrams;
};

export const getControlActivityData = (state) => {
  return state.fieldActivities.controlActivityData;
};

export const getControlActivityDataAddSuccessful = (state) => {
  return state.fieldActivities.addControlActivityData;
};

export const getIfControlActivityDataAddLoading = (state) => {
  return state.fieldActivities.isAddControlActivityDataLoading;
};
