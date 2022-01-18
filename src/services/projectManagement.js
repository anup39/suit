import axios from 'axios';

import PROJECT_MANAGEMENT_API from '../constants/api-endpoints/projectManagement';

export const CREATE_NEW_PROJECT = async (payload) => {
  console.log('Create New Project...');
  console.log(payload);

  const { authToken, newCompanyData } = payload;

  const newProject = await axios(PROJECT_MANAGEMENT_API.CREATE_NEW_PROJECT, {
    method: 'POST',
    data: newCompanyData,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return newProject.data;
};

export const GET_PROJECT_LIST = async (payload) => {
  console.log('Get Project List...');
  console.log(payload);

  const projectList = await axios(PROJECT_MANAGEMENT_API.GET_PROJECT_LIST, {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(projectList.data);
  return projectList.data;
};

export const GET_PROJECT_DETAILS = async (payload) => {
  console.log('Get Project Data');

  const { projectId, authToken } = payload;

  const currentProjectData = await axios(
    `${PROJECT_MANAGEMENT_API.GET_PROJECT_DETAILS}/${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  console.log(currentProjectData.data);
  return currentProjectData.data;
};

export const DELETE_PROJECT_DATA = async (payload) => {
  console.log('Delete Project Data');

  const { authToken, projectId } = payload;

  const deletedProjectData = await axios(
    `${PROJECT_MANAGEMENT_API.DELETE_PROJECT_DATA}/${projectId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return deletedProjectData.data;
};

export const ASSIGN_PROJECT_TO_COMPANY = async (payload) => {
  console.log('Assing Project');
  const { authToken, projectId, companyId } = payload;
  const url = `${PROJECT_MANAGEMENT_API.ASSIGN_PROJECT}projectId=${projectId}&companyId=${companyId}`;
  console.log(url);

  const projectAssigned = await axios(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return projectAssigned.data;
};

export const GET_PROJECT_DOCUMENTS = async (payload) => {
  console.log('Project Documents');
  const { authToken, projectId } = payload;
  console.log(payload);
  const url = `${PROJECT_MANAGEMENT_API.PROECT_DOCUMNETS}=${projectId}`;
  console.log(url);
  const projectDocs = await axios(url, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  console.log(projectDocs.data);
  return projectDocs.data;
};

export const GET_PROJECT_DASHBORD = async (payload) => {
  console.log('Project Dashbord');
  console.log(payload);
  const url = PROJECT_MANAGEMENT_API.DASHBORD;
  const dashbord = await axios(url, {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(dashbord.data);
  return dashbord.data;
};
