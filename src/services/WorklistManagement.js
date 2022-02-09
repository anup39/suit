import WORKLIST_MANAGEMENT_API from '../constants/api-endpoints/worklist-management';
import axiosInstance from '../utils/axiosInstance';

export const GET_ALL_WORKLIST = async () => {
  const worklistData = await axiosInstance(
    WORKLIST_MANAGEMENT_API.GET_ALL_WORKLIST
  );
  return worklistData.data;
};

export const CREATE_NEW_WORKLIST = async (payload) => {
  const { workListFormData } = payload;

  const createWorkList = await axiosInstance(
    WORKLIST_MANAGEMENT_API.CREATE_WORKLIST,
    {
      method: 'POST',
      data: workListFormData,
    }
  );
  return createWorkList.data;
};

export const EDIT_WORKLIST = async (payload) => {
  const { workListFormData } = payload;

  const editWorkList = await axiosInstance(
    WORKLIST_MANAGEMENT_API.UPDATE_WORKLIST,
    {
      method: 'POST',
      data: workListFormData,
    }
  );
  return editWorkList.data;
};

export const GET_TASK_BY_ID = async (payload) => {
  const { taskId } = payload;

  const taskById = await axiosInstance(
    `${WORKLIST_MANAGEMENT_API.GET_TASK_BY_ID}/${taskId}`
  );
  return taskById.data;
};

export const DELETE_TASK_BY_ID = async (payload) => {
  const { taskId } = payload;

  const taskById = await axiosInstance(
    `${WORKLIST_MANAGEMENT_API.DELETE_TASK_BY_ID}/${taskId}`,
    {
      method: 'DELETE',
    }
  );
  return taskById.data;
};

export const GET_TASK_BY_PROJECT = async (payload) => {
  const { projectId } = payload;

  const url = `${WORKLIST_MANAGEMENT_API.GET_TASKS_BY_PROJECT_ID}${projectId}`;

  const taskByProjectId = await axiosInstance(url);
  return taskByProjectId.data;
};

export const CHANGE_TASK_STATUS = async (payload) => {
  const { data } = payload;

  const url = WORKLIST_MANAGEMENT_API.CHANGE_TASK;

  const changeTaskStatus = await axiosInstance(url, {
    method: 'POST',
    data,
  });
  return changeTaskStatus.data;
};
