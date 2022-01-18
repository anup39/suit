import FEEDBACK_ACTIONS_TYPES from './feedback.action.types';

export const addNewFeedback = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK,
  payload: data,
});

export const addNewFeedbackSuccess = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK_SUCCESS,
  payload: data,
});

export const addNewFeedbackError = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK_ERROR,
  payload: data,
});

export const resetNewFeedback = () => ({
  type: FEEDBACK_ACTIONS_TYPES.RESET_ADD_NEW_FEEDBACK,
  payload: '',
});

export const getAllFeedback = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK,
  payload: data,
});

export const getAllFeedbackSuccess = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK_SUCCESS,
  payload: data,
});

export const getAllFeedbackError = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK_ERROR,
  payload: data,
});

export const deleteFeedback = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK,
  payload: data,
});

export const deleteFeedbackSuccess = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK_SUCCESS,
  payload: data,
});

export const deleteFeedbackError = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK_ERROR,
  payload: data,
});

export const resetDeleteFeedback = (data) => ({
  type: FEEDBACK_ACTIONS_TYPES.RESET_DELETE_FEEDBACK,
  payload: data,
});
