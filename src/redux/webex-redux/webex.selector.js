export const getWebexToken = (state) => {
  return state.webex.webex_access_token;
};

export const getWebexToken1 = (state) => {
  return state.webex.webex_access_token;
};

export const getWebexAccessToken = (state) => {
  return state.webex.access_token;
};

export const getWebexRooms = (state) => {
  return state.webex.rooms;
};

export const getIfAddMesssageLoading = (state) => {
  return state.webex.isAddNewMessageLoading;
};

export const getAddMessageSuccess = (state) => {
  return state.webex.addNewMessage;
};

export const getIfAddFileLoading = (state) => {
  return state.webex.isAddNewFileLoading;
};

export const getAddFileSuccess = (state) => {
  return state.webex.addNewFile;
};
