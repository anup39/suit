import USER_ACTION_TYPES from './user.action-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  signupStatus: null,
  error: null,
  userType: null,
  userData: undefined,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.USER_SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        userData: action.payload,
      };
    case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        signupStatus: action.payload,
      };
    case USER_ACTION_TYPES.USER_SIGNUP_FAILURE:
      return {
        ...state,
        isLoading: false,
        signupStatus: null,
        error: action.payload,
      };
    case USER_ACTION_TYPES.USER_GROUP_TYPE:
      return {
        ...state,
        userType: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
