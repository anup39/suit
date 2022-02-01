/* eslint-disable linebreak-style */ /* eslint-disable prettier/prettier */
import axios from 'axios';

import WEBEX_MANAGEMENT_API from '../constants/api-endpoints/webex';

const getQueryString = (data) => {
  return Object.entries(data)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
};
// eslint-disable-next-line import/prefer-default-export
export const GET_WEBEX_ACCESSTOKEN_REQ = async (payload) => {
  const webexAccessToken = await axios(
    `${WEBEX_MANAGEMENT_API.GET_ACCESSTOKEN}`,
    {
      method: 'POST',
      data: {
        code: `${payload}`,
        grant_type: 'authorization_code',
        client_id: `${process.env.REACT_APP_CLIENT_ID}`,
        client_secret: `${process.env.REACT_APP_CLIENT_SECRET}`,
        redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
      },
      headers: {},
      withCredentials: true,
      transformRequest: getQueryString,
    }
  );

  console.log(webexAccessToken.data);
  return webexAccessToken.data;
};

export const GET_WEBEX_ROOMS = async (accesstoken) => {
  const roomsout = await axios(`${WEBEX_MANAGEMENT_API.GET_ROOMS}`, {
    headers: {
      Authorization: `Bearer ${accesstoken}`,
    },
  });

  const finalrooms = [];
  // eslint-disable-next-line no-plusplus
  for (
    let i = 0;
    i < roomsout.data.items.length;
    i += 1 // eslint-disable-next-line no-empty
  ) {
    const object = {
      value: roomsout.data.items[i].id,
      label: roomsout.data.items[i].title,
    };

    finalrooms.push(object);
  }

  console.log(finalrooms);

  return finalrooms;
};

export const ADD_NEW_MESSAGE = async (data) => {
  const { roomId, message } = data;

  const newMessage = await axios(`${WEBEX_MANAGEMENT_API.ADD_NEW_MESSAGE}`, {
    method: 'POST',
    data: {
      roomId,
      text: message,
    },
    headers: {
      Authorization: `Bearer YmVkOTM5YmYtYTM2Yi00ODEwLWI4YmUtMjkzMmU4N2JmMGI3N2NiM2E2OTEtOGU5_P0A1_5854f144-ce4c-448d-a8d9-4c4002d8c122`,
    },
  });

  return newMessage.data;
};

export const ADD_NEW_FILE = async (data) => {
  const newMessage = await axios(`${WEBEX_MANAGEMENT_API.ADD_NEW_MESSAGE}`, {
    method: 'POST',
    data,
    headers: {
      Authorization: `Bearer YmVkOTM5YmYtYTM2Yi00ODEwLWI4YmUtMjkzMmU4N2JmMGI3N2NiM2E2OTEtOGU5_P0A1_5854f144-ce4c-448d-a8d9-4c4002d8c122`,
    },
  });

  return newMessage.data;
};
