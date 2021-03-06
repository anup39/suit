import FEEDBACK_ACTIONS_TYPES from './feedback.action.types';

const feedbackInitialState = {
  addNewFeedback: '',
  isAddNewFeedbackLoading: false,
  addNewFeedbackError: '',

  listAllFeedback: '',
  listAllFeedbackError: '',
  isListAllFeedbackLoading: false,

  deleteFeedback: '',
  deleteFeedbackError: '',
  isDeleteFeedbackLoading: false,

  getFeedbackById: '',
  getFeedbackByIdError: '',
  isGetFeedbackByIdLoading: false,

  feedbackImage: '',
};

// eslint-disable-next-line
const feedbackReducer = (state = feedbackInitialState, action) => {
  switch (action.type) {
    case FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK:
      return {
        ...state,
        addNewFeedback: '',
        isAddNewFeedbackLoading: true,
        addNewFeedbackError: '',
      };

    case FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK_ERROR:
      return {
        ...state,
        addNewFeedback: '',
        isAddNewFeedbackLoading: false,
        addNewFeedbackError: action.payload,
      };

    case FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK_SUCCESS:
      return {
        ...state,
        addNewFeedback: action.payload,
        isAddNewFeedbackLoading: false,
        addNewFeedbackError: '',
      };

    case FEEDBACK_ACTIONS_TYPES.RESET_ADD_NEW_FEEDBACK:
      return {
        ...state,
        addNewFeedback: '',
        isAddNewFeedbackLoading: false,
        addNewFeedbackError: '',
      };

    case FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK:
      return {
        ...state,
        listAllFeedback: '',
        listAllFeedbackError: '',
        isListAllFeedbackLoading: true,
      };

    case FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK_SUCCESS:
      return {
        ...state,
        listAllFeedback: action.payload,
        listAllFeedbackError: '',
        isListAllFeedbackLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK_ERROR:
      return {
        ...state,
        listAllFeedback: '',
        listAllFeedbackError: action.payload,
        isListAllFeedbackLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK:
      return {
        ...state,
        deleteFeedback: '',
        deleteFeedbackError: '',
        isDeleteFeedbackLoading: true,
      };

    case FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK_SUCCESS:
      return {
        ...state,
        deleteFeedback: action.payload,
        deleteFeedbackError: '',
        isDeleteFeedbackLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK_ERROR:
      return {
        ...state,
        deleteFeedback: '',
        deleteFeedbackError: action.payload,
        isDeleteFeedbackLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.RESET_DELETE_FEEDBACK:
      return {
        ...state,
        deleteFeedback: '',
        deleteFeedbackError: '',
        isDeleteFeedbackLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.GET_FEEDBACK_BY_ID_USERID:
      return {
        ...state,
        getFeedbackById: '',
        getFeedbackByIdError: '',
        isGetFeedbackByIdLoading: true,
      };

    case FEEDBACK_ACTIONS_TYPES.GET_FEEDBACK_BY_ID_USERID_SUCCESS:
      return {
        ...state,
        getFeedbackById: action.payload,
        getFeedbackByIdError: '',
        isGetFeedbackByIdLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.GET_FEEDBACK_BY_ID_USERID_ERROR:
      return {
        ...state,
        getFeedbackById: '',
        getFeedbackByIdError: action.payload,
        isGetFeedbackByIdLoading: false,
      };

    case FEEDBACK_ACTIONS_TYPES.ADD_IMAGE:
      return {
        ...state,
        feedbackImage: action.payload,
      };

    case FEEDBACK_ACTIONS_TYPES.REMOVE_IMAGE:
      return {
        ...state,
        feedbackImage: '',
      };
    default:
      return state;
  }
};

export default feedbackReducer;
