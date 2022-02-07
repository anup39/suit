import axios from 'axios';

import API_END_POINTS from '../constants/api.endpoints';

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

export const LOG_OUT = async (data) => {
  const { authToken } = data;
  const newToken = await REFERSH_TOKEN(authToken);

  const logOutUser = await axios(API_END_POINTS.signOut, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return logOutUser.data;
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

export const GETUSERS = async (authToken) => {
  const newToken = await REFERSH_TOKEN(authToken);
  const users = await axios(API_END_POINTS.getUser, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });
  return users.data;
};

export const GET_USER_BY_ID = async (data) => {
  const newToken = await REFERSH_TOKEN(data.token);
  const userDetails = await axios(
    `${API_END_POINTS.getUserById}/${data.userId}`,
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );

  return userDetails.data;
};

export const GET_ROLES = async (data) => {
  const newToken = await REFERSH_TOKEN(data);
  const allRoles = await axios.get(API_END_POINTS.getAllUserRoles, {
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return allRoles.data;
};

export const UPDATE_ROLES = async (data) => {
  const newToken = await REFERSH_TOKEN(data.authToken);
  const updatedUserData = await axios(API_END_POINTS.updateUserRole, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
    data: data.userData,
  });

  return updatedUserData.data;
};

export const DELETE_USER = async (data) => {
  const newToken = await REFERSH_TOKEN(data.authToken);
  console.log('Soft Delete User');
  const deleteUser = await axios(
    `${API_END_POINTS.deleteUser}/${data.userId}`,
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
      data: data.userData,
    }
  );

  return deleteUser.data;
};

export const DELETE_USER_IN_BULK = async (data) => {
  console.log('Soft Delete User In Bulk');

  const newToken = await REFERSH_TOKEN(data.authToken);
  const deleteUser = await axios(API_END_POINTS.deleteUserInList, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${newToken}`,
    },
    data: { idUser: data.userIdList },
  });

  return deleteUser?.data;
};
