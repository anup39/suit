import ROLE_ACTION_TYPE from './role.action-types';

const ROLE_INITIAL_DATA = {
  isLoading: false,
  error: false,
  data: '',
  editFormOpen: false,
  userData: '',
  addFormOpen: false,
};

// eslint-disable-next-line default-param-last
const roleReducer = (state = ROLE_INITIAL_DATA, action) => {
  switch (action.type) {
    case ROLE_ACTION_TYPE.START:
      return {
        ...state,
        isLoading: true,
        error: false,
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
    case ROLE_ACTION_TYPE.EDIT_FORM:
      return {
        ...state,
        isLoading: true,
        editFormOpen: true,
      };
    case ROLE_ACTION_TYPE.CLOSE_EDIT_FORM:
      return {
        ...state,
        isLoading: false,
        editFormOpen: false,
        userData: '',
      };
    case ROLE_ACTION_TYPE.SUCCESS_GETTING_USER:
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
      };

    case ROLE_ACTION_TYPE.ERROR_USER:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case ROLE_ACTION_TYPE.OPEN_ADD_FORM:
      return {
        ...state,
        isLoading: false,
        addFormOpen: true,
      };

    case ROLE_ACTION_TYPE.CLOSE_ADD_FORM:
      return {
        ...state,
        isLoading: false,
        addFormOpen: false,
      };

    default:
      return state;
  }
};

export default roleReducer;
