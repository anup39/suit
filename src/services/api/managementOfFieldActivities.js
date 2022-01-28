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
  const { authToken } = data;

  const newToken = await REFERSH_TOKEN(authToken);

  const allfieldActivities = await axios(
    MANAGEMENT_OF_FIELD_ACTIVITIES.getfieldActivities`${data}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return allfieldActivities.data;
};

export const TEST = async (data) => {
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
