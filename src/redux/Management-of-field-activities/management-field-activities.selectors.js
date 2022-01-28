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
