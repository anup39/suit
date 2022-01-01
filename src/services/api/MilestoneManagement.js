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
  console.log('Get Milestone List...');
  console.log(payload);

  const milestoneList = await axios(MILESTONE_MANAGEMENT_API.LIST_MILESTONE, {
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(milestoneList.data);
  return milestoneList.data;
};

export const GET_MILESTONE_BY_ID = async (payload) => {
  console.log('Get Milestone By Id...');
  const { authToken, id } = payload;

  const milestoneData = await axios(
    `${MILESTONE_MANAGEMENT_API.GET_MILESTONE_BY_ID}/${id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return milestoneData.data;
};
