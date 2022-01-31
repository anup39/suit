import axios from 'axios';

import MANAGEMENT_OF_FIELD_ACTIVITIES from '../../constants/api-endpoints/managementOfFieldActivities';
import { REFERSH_TOKEN } from '../api';

export const ALL_ACTIVITIES = async (data) => {
  const { authToken } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const allActivities = await axios(
    MANAGEMENT_OF_FIELD_ACTIVITIES.getAllActivities,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return allActivities.data;
};

export const GET_FIELD_LOGS_BY_TASK = async (data) => {
  const { authToken, taskId } = data;

  console.log(data);

  const newToken = await REFERSH_TOKEN(authToken);

  const allfieldActivities = await axios(
    `${MANAGEMENT_OF_FIELD_ACTIVITIES.getfieldLogs}/${taskId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return allfieldActivities.data;
};

export const CHANGE_LOG_STATUS = async (payloadData) => {
  const { authToken, taskData } = payloadData;

  const newToken = await REFERSH_TOKEN(authToken);

  const allActivities = await axios(
    MANAGEMENT_OF_FIELD_ACTIVITIES.acceptOrRejectTasks,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
      taskData,
    }
  );
  return allActivities.data;
};

export const GET_ALL_CONTROL_ACTIVITIES = async (data) => {
  const { authToken } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const controlActivityType = await axios(
    MANAGEMENT_OF_FIELD_ACTIVITIES.getAllControlActivityType,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return controlActivityType.data;
};

export const GET_CONTROL_ACTIVITIES_PARAMS_BY_ID = async (data) => {
  const { authToken, typeId } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const controlActivityParam = await axios(
    `${MANAGEMENT_OF_FIELD_ACTIVITIES.getControlActivityParams}/${typeId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return controlActivityParam.data;
};

export const ADD_CONTROL_ACTIVITY_DATA = async (data) => {
  const { authToken, controlActivityData } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const controlActivityResponse = await axios(
    MANAGEMENT_OF_FIELD_ACTIVITIES.addControlActivityData,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
      data: controlActivityData,
    }
  );
  return controlActivityResponse.data;
};
