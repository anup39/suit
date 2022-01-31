const MILESTONE_MANAGEMENT_API = {
  CREATE_NEW_MILESTONE: `${process.env.REACT_APP_API_HOSTNAME}api/createMilestone`,
  UPDATE_MILESTONE: `${process.env.REACT_APP_API_HOSTNAME}api/updateMilestone`,
  LIST_MILESTONE: `${process.env.REACT_APP_API_HOSTNAME}api/listMilestone`,
  GET_MILESTONE_BY_ID: `${process.env.REACT_APP_API_HOSTNAME}api/milestoneDetails`,
  DELETE_MILESTONE_BY_ID: `${process.env.REACT_APP_API_HOSTNAME}api/deleteMilestone`,
};

export default MILESTONE_MANAGEMENT_API;
