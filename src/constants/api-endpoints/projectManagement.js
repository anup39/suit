const PROJECT_MANAGEMENT_API = {
  CREATE_NEW_PROJECT: `${process.env.REACT_APP_API_HOSTNAME}api/createProjects`,
  GET_PROJECT_LIST: `${process.env.REACT_APP_API_HOSTNAME}api/listProjects`,
  UPDATE_PROJECT: `${process.env.REACT_APP_API_HOSTNAME}api/updateProjects`,
  GET_PROJECT_DETAILS: `${process.env.REACT_APP_API_HOSTNAME}api/projectsDetails/`,
  DELETE_PROJECT_DATA: `${process.env.REACT_APP_API_HOSTNAME}api/deleteProjects/`,
  ASSIGN_PROJECT: `${process.env.REACT_APP_API_HOSTNAME}api/assignCompany?`,
  PROECT_DOCUMNETS: `${process.env.REACT_APP_API_HOSTNAME}api/listProjectsDocuments?projectId=`,
  DASHBORD: `${process.env.REACT_APP_API_HOSTNAME}api/ProjectDashboardList`,
  IMPORT_PROJECT_DATA: `${process.env.REACT_APP_API_HOSTNAME}api/auth/importProjectQgis?projectId=`,
  PROJECT_STATUS_DASHBORD: `${process.env.REACT_APP_API_HOSTNAME}api/ProjectDashboardStatus`,
  GEOSERVER_LAYER_LIST: `${process.env.REACT_APP_GEOSERVER_HOSTNAME}rest/workspaces`,
  GET_FIELD_LOGS: `${process.env.REACT_APP_API_HOSTNAME}api/fieldLogList/`,
};

export default PROJECT_MANAGEMENT_API;
