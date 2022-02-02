import axios from 'axios';

import WORKLIST_MANAGEMENT_API from '../constants/api-endpoints/worklist-management';
import { REFERSH_TOKEN } from './api';

export const GET_ALL_WORKLIST = async (payload) => {
  const newToken = await REFERSH_TOKEN(payload);

  const worklistData = await axios(WORKLIST_MANAGEMENT_API.GET_ALL_WORKLIST, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return worklistData.data;
};

export const CREATE_NEW_WORKLIST = async (payload) => {
  const { authToken, workListFormData } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const createWorkList = await axios(WORKLIST_MANAGEMENT_API.CREATE_WORKLIST, {
    method: 'POST',
    data: workListFormData,
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return createWorkList.data;
};

export const EDIT_WORKLIST = async (payload) => {
  const { authToken, workListFormData } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const editWorkList = await axios(WORKLIST_MANAGEMENT_API.UPDATE_WORKLIST, {
    method: 'POST',
    data: workListFormData,
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return editWorkList.data;
};

export const GET_TASK_BY_ID = async (payload) => {
  const { authToken, taskId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const taskById = await axios(
    `${WORKLIST_MANAGEMENT_API.GET_TASK_BY_ID}/${taskId}`,
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return taskById.data;
};

export const DELETE_TASK_BY_ID = async (payload) => {
  const { authToken, taskId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const taskById = await axios(
    `${WORKLIST_MANAGEMENT_API.DELETE_TASK_BY_ID}/${taskId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return taskById.data;
};

export const GET_TASK_BY_PROJECT = async (payload) => {
  const { authToken, projectId } = payload;
  const newToken = await REFERSH_TOKEN(authToken);

  const url = `${WORKLIST_MANAGEMENT_API.GET_TASKS_BY_PROJECT_ID}${projectId}`;

  console.log(url);
  const taskByProjectId = await axios(url, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return taskByProjectId.data;
};

export const CHANGE_TASK_STATUS = async (payload) => {
  const { authToken, data } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const url = WORKLIST_MANAGEMENT_API.CHANGE_TASK;

  const changeTaskStatus = await axios(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
    data,
  });
  return changeTaskStatus.data;
};
