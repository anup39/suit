import axios from 'axios';

import COMPANY_MANAGEMENT from '../../constants/api-endpoints/companyManagement';

export const CREATE_COMPANY = async (data) => {
  console.log(data);
  const createResponse = await axios.post(
    COMPANY_MANAGEMENT.create,
    data.payload[0],
    {
      headers: {
        Authorization: `Bearer ${data.payload[1].userAccessToken}`,
      },
    }
  );
  return createResponse;
};

export const GET_ALL_COMPANY = async (payload) => {
  const milestoneList = await axios(COMPANY_MANAGEMENT.getCompany, {
    headers: {
      Authorization: `Bearer ${payload.payload}`,
    },
  });

  return milestoneList.data;
};

export const DELETE_COMPANY_WITH_ID = async (data) => {
  const deleteCompany = await axios(`${COMPANY_MANAGEMENT.delete}${data.id}`, {
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  });
  return deleteCompany.data;
};
