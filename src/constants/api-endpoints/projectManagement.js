const PROJECT_MANAGEMENT_API = {
  CREATE_NEW_PROJECT: 'http://13.233.23.132:8080/api/createProjects',
  GET_PROJECT_LIST: 'http://13.233.23.132:8080/api/listProjects',
  UPDATE_PROJECT: 'http://13.233.23.132:8080/api/updateProjects',
  GET_PROJECT_DETAILS: 'http://13.233.23.132:8080/api/projectsDetails/',
  DELETE_PROJECT_DATA: 'http://13.233.23.132:8080/api/deleteProjects/',
  ASSIGN_PROJECT: 'http://13.233.23.132:8080/api/assignCompany?',
  PROECT_DOCUMNETS:
    'http://13.233.23.132:8080/api/listProjectsDocuments?projectId=',
  DASHBORD: 'http://13.233.23.132:8080/api/ProjectDashboardList',
  IMPORT_PROJECT_DATA:
    'http://13.233.23.132:8080/api/auth/importProjectQgis?projectId=',
  PROJECT_STATUS_DASHBORD:
    'http://13.233.23.132:8080/api/ProjectDashboardStatus',
  GEOSERVER_LAYER_LIST: 'http://13.233.23.132:7080/geoserver/rest/workspaces',
};

export default PROJECT_MANAGEMENT_API;
