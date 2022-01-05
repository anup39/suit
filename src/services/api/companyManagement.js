import axios from 'axios';

import COMPANY_MANAGEMENT from '../../constants/api-endpoints/companyManagement';

export const CREATE_COMPANY = async (data) => {
  const response = await axios.post(
    COMPANY_MANAGEMENT.createCompany,
    data.payload.payload,
    {
      headers: {
        Authorization: `Bearer ${data.payload.token}`,
      },
    }
  );
  return response.data;
};

export const GET_ALL_COMPANY = async (payload) => {
  console.log('Get Milestone List...');
  console.log(payload);

  const milestoneList = await axios(COMPANY_MANAGEMENT.getCompany, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${payload}`,
    },
  });
  console.log(milestoneList.data);
  return milestoneList.data;
};
