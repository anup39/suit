import axios from 'axios';

import MILESTONE_MANAGEMENT_API from '../../constants/api-endpoints/milestoneManagement';
import { REFERSH_TOKEN } from '../api';

export const GET_MILESTONE_LIST = async (payload) => {
  const newToken = await REFERSH_TOKEN(payload);

  const milestoneList = await axios(MILESTONE_MANAGEMENT_API.LIST_MILESTONE, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  console.log(milestoneList.data);
  return milestoneList.data;
};

export const UPDATE_MILESTONE = async (payload) => {
  const { authToken, milestoneId, date, desc, userId } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const milestoneList = await axios(
    `${MILESTONE_MANAGEMENT_API.UPDATE_MILESTONE}/${milestoneId}`,
    {
      method: 'PUT',
      data: {
        approvalNote: desc,
        approvedBy: userId,
        approvalDate: date,
      },
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return milestoneList.data;
};

export const GET_MILESTONE_BY_ID = async (payload) => {
  const { id, authToken } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const milestoneData = await axios(
    `${MILESTONE_MANAGEMENT_API.GET_MILESTONE_BY_ID}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return milestoneData.data;
};

export const DELETE_MILESTONE = async (payload) => {
  const { id, authToken } = payload;

  const newToken = await REFERSH_TOKEN(authToken);

  const milestoneData = await axios(
    `${MILESTONE_MANAGEMENT_API.DELETE_MILESTONE_BY_ID}/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return milestoneData.data;
};
