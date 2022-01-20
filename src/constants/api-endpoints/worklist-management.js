const WORKLIST_MANAGEMENT_API = {
  CREATE_WORKLIST: 'http://13.233.23.132:8080/api/createWorkList',
  GET_ALL_WORKLIST: 'http://13.233.23.132:8080/api/listWorkList',
  UPDATE_WORKLIST: 'http://13.233.23.132:8080/api/updateWorkList',
  GET_TASK_BY_ID: 'http://13.233.23.132:8080/api/workListDetails',
  DELETE_TASK_BY_ID: 'http://13.233.23.132:8080/api/deleteWorkListDetails',
  GET_TASKS_BY_PROJECT_ID:
    'http://13.233.23.132:8080/api/listWorkList?projectId=',
};

export default WORKLIST_MANAGEMENT_API;
