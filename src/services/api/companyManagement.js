import COMPANY_MANAGEMENT from '../../constants/api-endpoints/companyManagement';
import axiosInstance from '../../utils/axiosInstance';

export const CREATE_COMPANY = async (data) => {
  const createResponse = await axiosInstance.post(
    COMPANY_MANAGEMENT.create,
    data.payload[0]
  );
  return createResponse;
};

export const UPDATE_COMPANY = async (data) => {
  const { updatedData } = data;

  const updateResponse = await axiosInstance(COMPANY_MANAGEMENT.update, {
    data: updatedData,
    method: 'PUT',
  });
  return updateResponse;
};

export const GET_ALL_COMPANY = async () => {
  const milestoneList = await axiosInstance(COMPANY_MANAGEMENT.getCompany);
  return milestoneList.data;
};

export const DELETE_COMPANY_WITH_ID = async (data) => {
  const deleteCompany = await axiosInstance(
    `${COMPANY_MANAGEMENT.delete}${data.id}`
  );
  return deleteCompany.data;
};

export const GET_COMPANY_ALL_USERS = async (data) => {
  const userList = await axiosInstance(
    `${COMPANY_MANAGEMENT.getCompanyUsers}${data.payload.id}`
  );
  return userList.data;
};

export const COMPANY_ADD_USERS = async (data) => {
  const userData = {
    idUser: data.payload.idUser,
    companies_id: data.payload.companies_id,
  };

  const userListResponse = await axiosInstance(
    COMPANY_MANAGEMENT.addCompanyUsers,
    {
      data: userData,
      method: 'PUT',
    }
  );

  return userListResponse;
};

export const COMPANY_DELETE_USERS = async (data) => {
  const userListResponse = await axiosInstance(
    `${COMPANY_MANAGEMENT.deleteCompanyUsers}${data.payload.user_id}/${data.payload.company_id}`,
    {
      method: 'DELETE',
    }
  );

  return userListResponse;
};
