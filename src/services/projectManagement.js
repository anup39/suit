import axios from 'axios';

import PROJECT_MANAGEMENT_API from '../constants/api-endpoints/projectManagement';
import axiosInstance from '../utils/axiosInstance';

export const CREATE_NEW_PROJECT = async (payload) => {
  const { newCompanyData } = payload;

  const newProject = await axiosInstance(
    PROJECT_MANAGEMENT_API.CREATE_NEW_PROJECT,
    {
      method: 'POST',
      data: newCompanyData,
    }
  );

  return newProject.data;
};

export const UPDATE_PROJECT = async (payload) => {
  const { companyData } = payload;

  const newProject = await axiosInstance(
    PROJECT_MANAGEMENT_API.UPDATE_PROJECT,
    {
      method: 'PUT',
      data: companyData,
    }
  );

  return newProject.data;
};

export const GET_PROJECT_LIST = async () => {
  const projectList = await axiosInstance(
    PROJECT_MANAGEMENT_API.GET_PROJECT_LIST
  );
  console.log(projectList);
  return projectList.data;
};

export const GET_PROJECT_DETAILS = async (payload) => {
  const { projectId } = payload;

  const currentProjectData = await axiosInstance(
    `${PROJECT_MANAGEMENT_API.GET_PROJECT_DETAILS}/${projectId}`
  );
  return currentProjectData.data;
};

export const DELETE_PROJECT_DATA = async (payload) => {
  const { projectId } = payload;

  const deletedProjectData = await axiosInstance(
    `${PROJECT_MANAGEMENT_API.DELETE_PROJECT_DATA}/${projectId}`,
    {
      method: 'DELETE',
    }
  );
  return deletedProjectData.data;
};

export const ASSIGN_PROJECT_TO_COMPANY = async (payload) => {
  const { projectId, companyId } = payload;

  const url = `${PROJECT_MANAGEMENT_API.ASSIGN_PROJECT}projectId=${projectId}&companyId=${companyId}`;

  const projectAssigned = await axiosInstance(url, {
    method: 'POST',
  });
  return projectAssigned.data;
};

export const GET_PROJECT_DOCUMENTS = async (payload) => {
  const { projectId } = payload;

  const url = `${PROJECT_MANAGEMENT_API.PROECT_DOCUMNETS}${projectId}`;
  const projectDocs = await axiosInstance(url);
  return projectDocs.data;
};

export const GET_PROJECT_DASHBORD = async () => {
  const url = PROJECT_MANAGEMENT_API.DASHBORD;
  const dashbord = await axiosInstance(url);
  return dashbord.data;
};

export const IMPORT_PROJECT_DATA = async (payload) => {
  const { data, projectId, docType } = payload;

  const url = `${PROJECT_MANAGEMENT_API.IMPORT_PROJECT_DATA}${projectId}&docType=${docType}`;
  const importData = await axiosInstance(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
  return importData.data;
};

export const GET_DASHBORD_BY_PROJECT_ID = async (payload) => {
  const { projectId } = payload;

  const url = `${PROJECT_MANAGEMENT_API.PROJECT_STATUS_DASHBORD}/${projectId}`;
  const dashbord = await axiosInstance(url);
  return dashbord.data;
};

export const GET_SELECTED_PROJECT_LAYERS_LIST = async (payload) => {
  const selectedLayersList = await axios(
    `${PROJECT_MANAGEMENT_API.GEOSERVER_LAYER_LIST}/${payload}/layers/`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        Authorization: 'Basic YWRtaW46Z2Vvc2VydmVy',
      },

      auth: {
        username: 'admin',
        password: 'geoserver',
      },
    }
  );
  return selectedLayersList.data;
};

export const GET_TASK_FIELD_LOGS = async (payload) => {
  const { projectId } = payload;

  const url = `${PROJECT_MANAGEMENT_API.GET_FIELD_LOGS}/${projectId}`;
  const dashbord = await axios(url);
  return dashbord.data;
};
