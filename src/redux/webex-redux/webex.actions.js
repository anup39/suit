import WEBEX_ACTION_TYPES from './webex.types';

export const webexAuthStart = () => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_AUTH_START,
});

export const webexAuthSuccess = (payload) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN,
  payload,
});

export const webexAuthToken = (payload) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN,
  payload,
});

export const getAccessToken = (data) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN_REQ,
  payload: data,
});

export const getRooms = (data) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS,
  payload: data,
});
export const getRoomsSuccess = (data) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS_SUCCESS,
  payload: data,
});

export const getRoomsError = (data) => ({
  type: WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS_ERROR,
  payload: data,
});
