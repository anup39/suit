import axios from 'axios';

import API_END_POINTS from '../constants/api.endpoints';
import axiosInstance from '../utils/axiosInstance';

export const REFERSH_TOKEN = async (refreshToken) => {
  console.log('Refreshing Token');
  const accessTokenData = await axios(API_END_POINTS.refreshToken, {
    method: 'POST',
    data: { refreshToken },
  });
  console.log(accessTokenData);
  return accessTokenData.data?.accessToken;
};

export const SIGNUP = async (userData) => {
  const register = await axios.post(API_END_POINTS.signup, userData);
  return register.data;
};

export const SIGNIN = async (userData) => {
  const signin = await axios.post(API_END_POINTS.signin, userData);
  console.log(signin.data);
  return signin.data;
};

export const LOG_OUT = async () => {
  const logOutUser = await axiosInstance(API_END_POINTS.signOut);
  return logOutUser?.data;
};

export const CREATECOMPANY = async (companyData) => {
  const createCompany = await axios.post(
    API_END_POINTS.company.create,
    companyData,
    {
      auth: '',
    }
  );
  return createCompany.data;
};

export const GETUSERS = async () => {
  const users = await axiosInstance(API_END_POINTS.getUser);
  return users.data;
};

export const GET_USER_BY_ID = async (data) => {
  const userDetails = await axiosInstance(
    `${API_END_POINTS.getUserById}/${data.userId}`
  );

  return userDetails.data;
};

export const GET_ROLES = async () => {
  const allRoles = await axiosInstance.get(API_END_POINTS.getAllUserRoles);

  return allRoles.data;
};

export const UPDATE_ROLES = async (data) => {
  const updatedUserData = await axiosInstance(API_END_POINTS.updateUserRole, {
    method: 'PUT',

    data: data.userData,
  });

  return updatedUserData.data;
};

export const DELETE_USER = async (data) => {
  const deleteUser = await axiosInstance(
    `${API_END_POINTS.deleteUser}/${data.userId}`,
    {
      data: data.userData,
    }
  );

  return deleteUser.data;
};

export const DELETE_USER_IN_BULK = async (data) => {
  const deleteUser = await axiosInstance(API_END_POINTS.deleteUserInList, {
    method: 'PUT',
    data: { idUser: data.userIdList },
  });

  return deleteUser?.data;
};
