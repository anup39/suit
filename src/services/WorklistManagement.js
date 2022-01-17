import axios from 'axios';

import WORKLIST_MANAGEMENT_API from '../constants/api-endpoints/worklist-management';

export const GET_ALL_WORKLIST = async (payload) => {
  console.log('Get Worklist List...');
  console.log(payload);

  const worklistData = await axios(WORKLIST_MANAGEMENT_API.GET_ALL_WORKLIST, {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(worklistData.data);
  return worklistData.data;
};

export const CREATE_NEW_WORKLIST = async (payload) => {
  console.log('Create Worklist List...');
  console.log(payload);
  const { authToken, workListFormData } = payload;

  const createWorkList = await axios(WORKLIST_MANAGEMENT_API.CREATE_WORKLIST, {
    method: 'POST',
    data: workListFormData,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return createWorkList.data;
};

export const EDIT_WORKLIST = async (payload) => {
  console.log('Edit Worklist List...');
  console.log(payload);
  const { authToken, workListFormData } = payload;

  const editWorkList = await axios(WORKLIST_MANAGEMENT_API.UPDATE_WORKLIST, {
    method: 'POST',
    data: workListFormData,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  console.log(editWorkList.data);
  return editWorkList.data;
};

export const GET_TASK_BY_ID = async (payload) => {
  console.log('Task By Id...');
  console.log(payload);

  const { authToken, taskId } = payload;

  const taskById = await axios(
    `${WORKLIST_MANAGEMENT_API.GET_TASK_BY_ID}/${taskId}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return taskById.data;
};

export const DELETE_TASK_BY_ID = async (payload) => {
  console.log('Delete Task By Id...');
  console.log(payload);

  const { authToken, taskId } = payload;

  const taskById = await axios(
    `${WORKLIST_MANAGEMENT_API.DELETE_TASK_BY_ID}/${parseInt(taskId, 10)}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return taskById.data;
};

export const GET_TASK_BY_PROJECT = async (payload) => {
  console.log('Task By Project...');
  console.log(payload);

  const { authToken, projectId } = payload;

  const url = `${WORKLIST_MANAGEMENT_API.GET_TASKS_BY_PROJECT_ID}${projectId}`;

  console.log(url);
  const taskByProjectId = await axios(url, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return taskByProjectId.data;
};
