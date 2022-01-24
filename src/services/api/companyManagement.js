import axios from 'axios';

import COMPANY_MANAGEMENT from '../../constants/api-endpoints/companyManagement';
import { REFERSH_TOKEN } from '../api';

export const CREATE_COMPANY = async (data) => {
  const newToken = await REFERSH_TOKEN(data.payload[1].userAccessToken);
  const createResponse = await axios.post(
    COMPANY_MANAGEMENT.create,
    data.payload[0],
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );
  return createResponse;
};

export const UPDATE_COMPANY = async (data) => {
  const { authToken, updatedData } = data;

  const newToken = await REFERSH_TOKEN(authToken);
  const updateResponse = await axios(COMPANY_MANAGEMENT.update, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
    data: updatedData,
    method: 'PUT',
  });
  return updateResponse;
};

export const GET_ALL_COMPANY = async (payload) => {
  const newToken = await REFERSH_TOKEN(payload.payload);

  const milestoneList = await axios(COMPANY_MANAGEMENT.getCompany, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return milestoneList.data;
};

export const DELETE_COMPANY_WITH_ID = async (data) => {
  const newToken = await REFERSH_TOKEN(data.accessToken);

  const deleteCompany = await axios(`${COMPANY_MANAGEMENT.delete}${data.id}`, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return deleteCompany.data;
};
