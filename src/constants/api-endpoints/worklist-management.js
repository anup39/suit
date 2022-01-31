const WORKLIST_MANAGEMENT_API = {
  CREATE_WORKLIST: `${process.env.REACT_APP_API_HOSTNAME}api/createWorkList`,
  GET_ALL_WORKLIST: `${process.env.REACT_APP_API_HOSTNAME}api/listWorkList`,
  UPDATE_WORKLIST: `${process.env.REACT_APP_API_HOSTNAME}api/updateWorkList`,
  GET_TASK_BY_ID: `${process.env.REACT_APP_API_HOSTNAME}api/workListDetails`,
  DELETE_TASK_BY_ID: `${process.env.REACT_APP_API_HOSTNAME}api/deleteWorkListDetails`,
  GET_TASKS_BY_PROJECT_ID:
  `${process.env.REACT_APP_API_HOSTNAME}api/listWorkList?projectId=`,
  CHANGE_TASK: `${process.env.REACT_APP_API_HOSTNAME}api/changeTask`,
};

export default WORKLIST_MANAGEMENT_API;
