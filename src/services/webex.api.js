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
  console.log(payload);

  const webexAccessToken = await axios(
    `${WEBEX_MANAGEMENT_API.GET_ACCESSTOKEN}`,
    {
      method: 'POST',
      data: {
        code: `${payload}`,
        grant_type: 'authorization_code',
        client_id:
          'Ce03f73ac5eb97bcdc2ea9dd2a417273c4683ebe66d966844c44f1842d5a58fba',
        client_secret:
          '42519dd669a0d935ee6e4e31ddb90529225fc8faa312bb6df0429b1681195bbc',
        redirect_uri: 'http://localhost:3000',
      },
      headers: {},
      withCredentials: true,
      transformRequest: getQueryString,
    }
  );

  console.log(webexAccessToken.data);
  return webexAccessToken.data;
};

export const GET_WEBEX_ROOMS = async () => {
  const roomsout = await axios(`${WEBEX_MANAGEMENT_API.GET_ROOMS}`, {
    headers: {
      Authorization: `Bearer YmVkOTM5YmYtYTM2Yi00ODEwLWI4YmUtMjkzMmU4N2JmMGI3N2NiM2E2OTEtOGU5_P0A1_5854f144-ce4c-448d-a8d9-4c4002d8c122`,
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
  const { roomId, imageUrl } = data;

  const newMessage = await axios(`${WEBEX_MANAGEMENT_API.ADD_NEW_MESSAGE}`, {
    method: 'POST',
    data: {
      roomId,
      files: imageUrl,
    },
    headers: {
      Authorization: `Bearer YmVkOTM5YmYtYTM2Yi00ODEwLWI4YmUtMjkzMmU4N2JmMGI3N2NiM2E2OTEtOGU5_P0A1_5854f144-ce4c-448d-a8d9-4c4002d8c122`,
    },
  });

  return newMessage.data;
};
