/* eslint-disable linebreak-style *//* eslint-disable prettier/prettier */
import axios from 'axios';

import WEBEX_MANAGEMENT_API from '../constants/api-endpoints/webex';


const getQueryString = (data) => {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}
// eslint-disable-next-line import/prefer-default-export
export const GET_WEBEX_ACCESSTOKEN_REQ = async (payload) => {

  const webexAccessToken = await axios(
    `${WEBEX_MANAGEMENT_API.GET_ACCESSTOKEN}`,
    {
      method: 'POST',
      data: {
        code: `${payload}`,
        grant_type: 'authorization_code',
        client_id:
          `${process.env.REACT_APP_CLIENT_ID}`,
        client_secret:
        `${process.env.REACT_APP_CLIENT_SECRET}`,
        redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
      },
      headers: {
        
      },
      withCredentials: true,
      transformRequest: getQueryString
    }
  );

   
  console.log(webexAccessToken.data);
  return webexAccessToken.data;
};


export const GET_WEBEX_ROOMS = async () => {
    const roomsout = await axios(`${WEBEX_MANAGEMENT_API.GET_ROOMS}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BOT_TOKEN}`,
      },
    });
  
    const finalrooms=[];
    // eslint-disable-next-line no-plusplus
    for (let i=0; i< roomsout.data.items.length;i++)
    // eslint-disable-next-line no-empty
    {
      const object = {
        value: roomsout.data.items[i].id,
        label: roomsout.data.items[i].title
      };

      finalrooms.push(object);

    }

    console.log(finalrooms)
    
  return finalrooms;
};
