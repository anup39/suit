import USER_ACTION_TYPES from './user.action-types';

const USER_INITIAL_STATE = {
  isLoading: false,
  signupStatus: null,
  error: null,
  userType: null,
  userData: '',
  isAuthenticated: false,

  isSignoutLoading: false,
  signOutError: '',
  signOutData: '',
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

    case USER_ACTION_TYPES.RESET_USER_SIGNUP:
      return {
        ...state,
        isLoading: false,
        error: null,
        signupStatus: null,
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

    case USER_ACTION_TYPES.RESET_USER_SIGNIN:
      return {
        ...state,
        isLoading: false,
        error: null,
        isAuthenticated: false,
        userData: '',
      };

    case USER_ACTION_TYPES.USER_SIGNOUT:
      return {
        ...state,
        isSignoutLoading: true,
        signOutError: '',
        signOutData: '',
      };

      case USER_ACTION_TYPES.USER_SIGNOUT_EXP:
      return {
        ...state,
        isSignoutLoading: true,
        signOutError: '',
        signOutData: '',
      };

    case USER_ACTION_TYPES.USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        isSignoutLoading: false,
        signOutError: '',
        userData: '',
        isAuthenticated: false,
        signOutData: action.payload,
      };

    case USER_ACTION_TYPES.USER_SIGNOUT_ERROR:
      return {
        ...state,
        isSignoutLoading: false,
        signOutError: action.payload,
        userData: '',
        isAuthenticated: false,
        signOutData: '',
      };

    default:
      return state;
  }
};

export default userReducer;
