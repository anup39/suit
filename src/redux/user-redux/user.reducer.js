import USER_ACTION_TYPES from './user.action-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  signupStatus: null,
  error: null,
  userType: null,
  userData: '',
  isAuthenticated: false,

  currentLanguage: 'en',
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

    case USER_ACTION_TYPES.USER_SIGNIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_ACTION_TYPES.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: true,
        userData: action.payload,
      };
    case USER_ACTION_TYPES.USER_SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: action.payload,
      };

    case USER_ACTION_TYPES.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };

    case USER_ACTION_TYPES.USER_SIGNOUT:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
