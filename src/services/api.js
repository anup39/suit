import axios from 'axios';

import API_END_POINTS from '../constants/api.endpoints';

export const SIGNUP = async (userData) => {
  const register = await axios.post(API_END_POINTS.signup, userData);
  return register.data;
};

export const SIGNIN = async (userData) => {
  console.log('Signin Request');
  const signin = await axios.post(API_END_POINTS.signin, userData);
  console.log(signin.data);
  return signin.data;
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
  const users = await axios(API_END_POINTS.getUser, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return users.data;
};

export const GET_USER_BY_ID = async (data) => {
  const userDetails = await axios(
    `${API_END_POINTS.getUserById}/${data.userId}`,
    {
      headers: {
        Authorization: `Bearer ${data.token}`,
      },
    }
  );

  return userDetails.data;
};
