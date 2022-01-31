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

export const addNewMessage = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_MESSAGE,
  payload: data,
});

export const addNewMessageSuccess = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_MESSAGE_SUCCESS,
  payload: data,
});

export const addNewMessageError = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_MESSAGE_ERROR,
  payload: data,
});

export const resetAddNewMessage = () => ({
  type: WEBEX_ACTION_TYPES.RESET_WEBEX_MESSAGE,
  payload: '',
});

export const addNewFile = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_FILE,
  payload: data,
});

export const addNewFileSuccess = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_FILE_SUCCESS,
  payload: data,
});

export const addNewFileError = (data) => ({
  type: WEBEX_ACTION_TYPES.ADD_WEBEX_FILE_ERROR,
  payload: data,
});

export const resetWebexFile = () => ({
  type: WEBEX_ACTION_TYPES.RESET_WEBEX_FILE,
  payload: '',
});
