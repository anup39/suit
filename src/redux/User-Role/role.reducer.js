import ROLE_ACTION_TYPE from './role.action-types';

const ROLE_INITIAL_DATA = {
  isLoading: false,
  error: false,
  data: '',
  editFormOpen: false,
  userData: '',
  addFormOpen: false,

  selectedUser: [],
  isSelectedUserLoading: false,
  selectedUserError: false,

  userRoleList: [],
  isUserRoleListLoading: false,
  userRoleListError: '',

  updateUserRole: '',
  isupdateUserRoleLoading: false,
  updateUserRoleError: '',

  deleteUserData: '',
  isDeleteUserLoading: false,
  deleteUserError: '',
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

    case ROLE_ACTION_TYPE.SELECT_USER:
      return {
        ...state,
        selectedUser: [...state.selectedUser, action.payload],
        isSelectedUserLoading: true,
        selectedUserError: false,
      };

    case ROLE_ACTION_TYPE.SELECT_USER_SUCCESS:
      return {
        ...state,
        isSelectedUserLoading: false,
        selectedUserError: false,
      };

    case ROLE_ACTION_TYPE.SELECT_USER_ERROR:
      return {
        ...state,
        isSelectedUserLoading: false,
        selectedUserError: true,
      };

    case ROLE_ACTION_TYPE.DESELECT_USER:
      return {
        ...state,
        selectedUser: state.selectedUser.filter(
          (val) => val !== action.payload
        ),
        isSelectedUserLoading: true,
        selectedUserError: false,
      };

    case ROLE_ACTION_TYPE.DESELECT_USER_SUCCESS:
      return {
        ...state,
        isSelectedUserLoading: false,
        selectedUserError: false,
      };

    case ROLE_ACTION_TYPE.DESELECT_USER_ERROR:
      return {
        ...state,
        isSelectedUserLoading: false,
        selectedUserError: true,
      };

    case ROLE_ACTION_TYPE.GET_USER_ROLES_LIST:
      return {
        ...state,
        userRoleList: [],
        isUserRoleListLoading: true,
        userRoleListError: '',
      };

    case ROLE_ACTION_TYPE.GET_USER_ROLES_LIST_SUCCESS:
      return {
        ...state,
        userRoleList: action.payload,
        isUserRoleListLoading: false,
        userRoleListError: '',
      };

    case ROLE_ACTION_TYPE.GET_USER_ROLES_LIST_ERROR:
      return {
        ...state,
        userRoleList: [],
        isUserRoleListLoading: false,
        userRoleListError: action.payload,
      };

    case ROLE_ACTION_TYPE.UPDATE_USER_ROLE:
      return {
        ...state,
        updateUserRole: '',
        isupdateUserRoleLoading: true,
        updateUserRoleError: '',
      };

    case ROLE_ACTION_TYPE.UPDATE_USER_ROLE_SUCCESS:
      return {
        ...state,
        updateUserRole: action.payload,
        isupdateUserRoleLoading: false,
        updateUserRoleError: '',
      };

    case ROLE_ACTION_TYPE.UPDATE_USER_ROLE_ERROR:
      return {
        ...state,
        updateUserRole: '',
        isupdateUserRoleLoading: false,
        updateUserRoleError: action.payload,
      };

    case ROLE_ACTION_TYPE.DELETE_USER:
      return {
        ...state,
        deleteUserData: '',
        isDeleteUserLoading: true,
        deleteUserError: '',
      };

    case ROLE_ACTION_TYPE.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserData: action.payload,
        isDeleteUserLoading: false,
        deleteUserError: '',
      };

    case ROLE_ACTION_TYPE.DELETE_USER_ERROR:
      return {
        ...state,
        deleteUserData: '',
        isDeleteUserLoading: false,
        deleteUserError: action.payload,
      };
    default:
      return state;
  }
};

export default roleReducer;
