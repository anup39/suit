import ROLE_ACTION_TYPE from './role.action-types';

const ROLE_INITIAL_DATA = {
  isLoading: false,
  error: '',
  data: '',
};

// eslint-disable-next-line default-param-last
const roleReducer = (state = ROLE_INITIAL_DATA, action) => {
  switch (action.type) {
    case ROLE_ACTION_TYPE.START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case ROLE_ACTION_TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        success: false,
      };
    case ROLE_ACTION_TYPE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: false,
      };
    default:
      return state;
  }
};

export default roleReducer;
