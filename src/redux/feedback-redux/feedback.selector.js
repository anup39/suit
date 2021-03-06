export const getAddFeedbackError = (state) => {
  return state.feedback.addNewFeedbackError;
};

export const getAddFeedbackLoading = (state) => {
  return state.feedback.isAddNewFeedbackLoading;
};

export const getAddFeedbackSuccess = (state) => {
  return state.feedback.addNewFeedback;
};

export const getIsListFeedbackLoading = (state) => {
  return state.feedback.isListAllFeedbackLoading;
};

export const getListAllFeedback = (state) => {
  return state.feedback.listAllFeedback;
};

export const getListAllFeedbackError = (state) => {
  return state.feedback.listAllFeedbackError;
};

export const getDeleteFeedbackError = (state) => {
  return state.feedback.deleteFeedbackError;
};

export const getDeleteFeedbackSuccess = (state) => {
  return state.feedback.deleteFeedback;
};

export const getIsDeleteFeedbackLoading = (state) => {
  return state.feedback.isDeleteFeedbackLoading;
};

export const getFeebackByUserID = (state) => {
  return state.feedback.getFeedbackById;
};

export const getFeebackByUserIDError = (state) => {
  return state.feedback.getFeedbackByIdError;
};

export const getFeebackByUserIDLoading = (state) => {
  return state.feedback.isGetFeedbackByIdLoading;
};

export const getFeebackImage = (state) => {
  return state.feedback.feedbackImage;
};
