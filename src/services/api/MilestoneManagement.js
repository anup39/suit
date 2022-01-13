import axios from 'axios';

import MILESTONE_MANAGEMENT_API from '../../constants/api-endpoints/milestoneManagement';

export const GET_MILESTONE_LIST = async (payload) => {
  console.log('Get Milestone List...');
  console.log(payload);

  const milestoneList = await axios(MILESTONE_MANAGEMENT_API.LIST_MILESTONE, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(milestoneList.data);
  return milestoneList.data;
};

export const UPDATE_MILESTONE = async (payload) => {
  console.log(payload);
  const { authToken, id, date, desc, userName } = payload;

  const milestoneList = await axios(
    `${MILESTONE_MANAGEMENT_API.UPDATE_MILESTONE}/${id}`,
    {
      method: 'PUT',
      data: {
        approvalNote: desc,
        approvedBy: userName,
        approvalDate: date,
      },
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  console.log(milestoneList.data);
  return milestoneList.data;
};

export const GET_MILESTONE_BY_ID = async (payload) => {
  const { id, authToken } = payload;

  const milestoneData = await axios(
    `${MILESTONE_MANAGEMENT_API.GET_MILESTONE_BY_ID}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return milestoneData.data;
};

export const DELETE_MILESTONE = async (payload) => {
  const { id, authToken } = payload;

  const milestoneData = await axios(
    `${MILESTONE_MANAGEMENT_API.DELETE_MILESTONE_BY_ID}/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return milestoneData.data;
};
