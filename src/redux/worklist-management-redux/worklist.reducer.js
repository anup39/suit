import WORKLIST_MANAGEMENT_ACTION_TYPE from './worklist.action-types';

const worklistInitialState = {
  isGetAllWorklistLoading: false,
  allWorkList: [],
  allWorkListError: '',

  isAddWorkListLoading: false,
  addWorklistError: '',
  addWorkListData: '',

  isEditWorkListLoading: false,
  editWorklistError: '',
  editWorkListData: '',

  isTaskByIDLoading: false,
  taskByIdData: '',
  taskByIdError: '',

  isDeleteTaskByIDLoading: false,
  DeleteTaskByIdData: '',
  DeleteTaskByIdError: '',
};

// eslint-disable-next-line
const WorkListManagementReducer = (state = worklistInitialState, action) => {
  switch (action.type) {
    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST:
      return {
        ...state,
        isGetAllWorklistLoading: true,
        allWorkList: [],
        allWorkListError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST_ERROR:
      return {
        ...state,
        isGetAllWorklistLoading: false,
        allWorkList: [],
        allWorkListError: action.payload,
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_WORKLIST_SUCCESS:
      return {
        ...state,
        isGetAllWorklistLoading: false,
        allWorkList: action.payload,
        allWorkListError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST:
      return {
        ...state,
        isAddWorkListLoading: true,
        addWorklistError: '',
        addWorkListData: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST_SUCCESS:
      return {
        ...state,
        isAddWorkListLoading: false,
        addWorklistError: '',
        addWorkListData: action.payload,
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.ADD_WORKLIST_ERROR:
      return {
        ...state,
        isAddWorkListLoading: false,
        addWorklistError: action.payload,
        addWorkListData: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST:
      return {
        ...state,
        isEditWorkListLoading: true,
        editWorklistError: '',
        editWorkListData: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST_SUCCESS:
      return {
        ...state,
        isEditWorkListLoading: false,
        editWorklistError: '',
        editWorkListData: action.payload,
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.EDIT_WORKLIST_ERROR:
      return {
        ...state,
        isEditWorkListLoading: false,
        editWorklistError: action.payload,
        editWorkListData: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID:
      return {
        ...state,
        isTaskByIDLoading: true,
        taskByIdData: '',
        taskByIdError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID_SUCCESS:
      return {
        ...state,
        isTaskByIDLoading: false,
        taskByIdData: action.payload,
        taskByIdError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.GET_TASK_BY_ID_ERROR:
      return {
        ...state,
        isTaskByIDLoading: false,
        taskByIdData: '',
        taskByIdError: action.payload,
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID:
      return {
        ...state,

        isDeleteTaskByIDLoading: true,
        DeleteTaskByIdData: '',
        DeleteTaskByIdError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID_SUCCESS:
      return {
        ...state,

        isDeleteTaskByIDLoading: false,
        DeleteTaskByIdData: action.payload,
        DeleteTaskByIdError: '',
      };

    case WORKLIST_MANAGEMENT_ACTION_TYPE.DELETE_TASK_BY_ID_ERROR:
      return {
        ...state,
        isDeleteTaskByIDLoading: false,
        DeleteTaskByIdData: '',
        DeleteTaskByIdError: action.payload,
      };
    default:
      return state;
  }
};

export default WorkListManagementReducer;
