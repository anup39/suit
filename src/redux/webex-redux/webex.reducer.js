import WEBEX_ACTION_TYPES from './webex.types';

const INITIAL_STATE = {
  webex_access_token: null,
  access_token: null,
  rooms: [],
  isroomsLoading: false,
  roomsListError: false,
  roomsListSuccess: false,
};

// eslint-disable-next-line default-param-last
const webexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WEBEX_ACTION_TYPES.GET_WEBEX_AUTH_START:
      return state;
    case WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN:
      return {
        webex_access_token: action.payload,
      };
    case WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN_VALID:
      return {
        ...state,
        access_token: action.payload,
      };
    case WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN_REQ:
      return {
        ...state,
        access_token: action.payload,
      };
    case WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS:
      return {
        ...state,
        isroomsListLoading: true,
        rooms: [],
        roomsListSuccess: false,
      };
    case WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS_SUCCESS:
      return {
        ...state,
        isroomsListLoading: false,
        rooms: action.payload,
        roomsListSuccess: '',
      };
    case WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS_ERROR:
      return {
        ...state,
        isroomsListLoading: false,
        rooms: [],
        roomsListError: action.payload,
      };
    default:
      return state;
  }
};

export default webexReducer;
