import MANAGEMENT_OF_FIELD_ACTIVITIES from '../../constants/api-endpoints/managementOfFieldActivities';
import axiosInstance from '../../utils/axiosInstance';

export const ALL_ACTIVITIES = async () => {
  const allActivities = await axiosInstance(
    MANAGEMENT_OF_FIELD_ACTIVITIES.getAllActivities,
    {
      method: 'GET',
    }
  );
  return allActivities.data;
};

export const GET_FIELD_LOGS_BY_TASK = async (data) => {
  const { taskId } = data;

  const allfieldActivities = await axiosInstance(
    `${MANAGEMENT_OF_FIELD_ACTIVITIES.getfieldLogs}/${taskId}`,
    {
      method: 'GET',
    }
  );
  return allfieldActivities.data;
};

export const CHANGE_LOG_STATUS = async (payloadData) => {
  const { taskData } = payloadData;

  const allActivities = await axiosInstance(
    MANAGEMENT_OF_FIELD_ACTIVITIES.acceptOrRejectTasks,
    {
      method: 'POST',
      data: taskData,
    }
  );
  return allActivities.data;
};

export const GET_ALL_CONTROL_ACTIVITIES = async () => {
  const controlActivityType = await axiosInstance(
    MANAGEMENT_OF_FIELD_ACTIVITIES.getAllControlActivityType,
    {
      method: 'GET',
    }
  );
  return controlActivityType.data;
};

export const GET_CONTROL_ACTIVITIES_PARAMS_BY_ID = async (data) => {
  const { typeId } = data;

  const controlActivityParam = await axiosInstance(
    `${MANAGEMENT_OF_FIELD_ACTIVITIES.getControlActivityParams}/${typeId}`,
    {
      method: 'GET',
    }
  );
  return controlActivityParam.data;
};

export const ADD_CONTROL_ACTIVITY_DATA = async (data) => {
  const { controlActivityData } = data;

  const controlActivityResponse = await axiosInstance(
    MANAGEMENT_OF_FIELD_ACTIVITIES.addControlActivityData,
    {
      method: 'POST',
      data: controlActivityData,
    }
  );
  return controlActivityResponse.data;
};
