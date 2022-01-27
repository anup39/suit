import axios from 'axios';

import PROJECT_MANAGEMENT_API from '../constants/api-endpoints/projectManagement';
import { REFERSH_TOKEN } from './api';

export const CREATE_NEW_PROJECT = async (payload) => {
  const { authToken, newCompanyData } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const newProject = await axios(PROJECT_MANAGEMENT_API.CREATE_NEW_PROJECT, {
    method: 'POST',
    data: newCompanyData,
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return newProject.data;
};

export const UPDATE_PROJECT = async (payload) => {
  const { authToken, companyData } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const newProject = await axios(PROJECT_MANAGEMENT_API.UPDATE_PROJECT, {
    method: 'PUT',
    data: companyData,
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return newProject.data;
};

export const GET_PROJECT_LIST = async (payload) => {
  console.log(payload);
  const newToken = await REFERSH_TOKEN(payload);

  const projectList = await axios(PROJECT_MANAGEMENT_API.GET_PROJECT_LIST, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return projectList.data;
};

export const GET_PROJECT_DETAILS = async (payload) => {
  const { projectId, authToken } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const currentProjectData = await axios(
    `${PROJECT_MANAGEMENT_API.GET_PROJECT_DETAILS}/${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  console.log(currentProjectData.data);
  return currentProjectData.data;
};

export const DELETE_PROJECT_DATA = async (payload) => {
  const { authToken, projectId } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const deletedProjectData = await axios(
    `${PROJECT_MANAGEMENT_API.DELETE_PROJECT_DATA}/${projectId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return deletedProjectData.data;
};

export const ASSIGN_PROJECT_TO_COMPANY = async (payload) => {
  const { authToken, projectId, companyId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${PROJECT_MANAGEMENT_API.ASSIGN_PROJECT}projectId=${projectId}&companyId=${companyId}`;

  const projectAssigned = await axios(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return projectAssigned.data;
};

export const GET_PROJECT_DOCUMENTS = async (payload) => {
  const { authToken, projectId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${PROJECT_MANAGEMENT_API.PROECT_DOCUMNETS}${projectId}`;
  const projectDocs = await axios(url, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return projectDocs.data;
};

export const GET_PROJECT_DASHBORD = async (payload) => {
  const newToken = await REFERSH_TOKEN(payload);

  const url = PROJECT_MANAGEMENT_API.DASHBORD;
  const dashbord = await axios(url, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return dashbord.data;
};

export const IMPORT_PROJECT_DATA = async (payload) => {
  const { data, authToken, projectId } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${PROJECT_MANAGEMENT_API.IMPORT_PROJECT_DATA}${projectId}`;
  const importData = await axios(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${newToken}`,
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
  return importData.data;
};

export const GET_DASHBORD_BY_PROJECT_ID = async (payload) => {
  const { authToken, projectId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${PROJECT_MANAGEMENT_API.PROJECT_STATUS_DASHBORD}/${projectId}`;
  const dashbord = await axios(url, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return dashbord.data;
};

export const GET_SELECTED_PROJECT_LAYERS_LIST = async (payload) => {
  // const { projectName } = payload;
  // const newToken = await REFERSH_TOKEN(authToken);

  const selectedLayersList = await axios(
    `${PROJECT_MANAGEMENT_API.GEOSERVER_LAYER_LIST}/${payload}/layers/`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
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
  const { authToken, projectId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${PROJECT_MANAGEMENT_API.GET_FIELD_LOGS}/${projectId}`;
  const dashbord = await axios(url, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return dashbord.data;
};
