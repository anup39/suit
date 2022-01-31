const managementOfFieldActivities = {
  getAllActivities: `${process.env.REACT_APP_API_HOSTNAME}api/listWorkList`,
  getfieldLogs: `${process.env.REACT_APP_API_HOSTNAME}api/fieldLogbyClass`,
  acceptOrRejectTasks: `${process.env.REACT_APP_API_HOSTNAME}api/fieldLogReview`,
  getAllControlActivityType:
  `${process.env.REACT_APP_API_HOSTNAME}api/listControlActivityType`,
  getControlActivityParams:
  `${process.env.REACT_APP_API_HOSTNAME}api/listControlTypeParam/`
};

export default managementOfFieldActivities;
