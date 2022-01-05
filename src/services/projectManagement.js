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
