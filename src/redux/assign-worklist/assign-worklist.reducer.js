import ASSIGN_WORK_ACTIVITY_TYPE from './assign-worklist-action.types';

const ASSING_WORK_INITIAL_STATE = {
  isSelectAllTask: false,
  selectedTasks: [],

  assignTaskLoading: false,
  assingTaskData: '',
  assingTaskError: '',
};

// eslint-disable-next-line default-param-last
const assingWorklistReducer = (state = ASSING_WORK_INITIAL_STATE, action) => {
  switch (action.type) {
    case ASSIGN_WORK_ACTIVITY_TYPE.SELECT_ONE:
      return {
        ...state,
        selectedTasks: [...state.selectedTasks, action.payload],
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.DESELECT_ONE:
      return {
        ...state,
        selectedTasks: state.selectedTasks.filter(
          (val) => val !== action.payload
        ),
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.SELECT_ALL:
      return {
        ...state,
        isSelectAllTask: action.payload,
        selectedTasks: [],
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.DESELECT_ALL:
      return {
        ...state,
        isSelectAllTask: action.payload,
        selectedTasks: [],
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.ASSIGN_TASK:
      return {
        ...state,
        assignTaskLoading: true,
        assingTaskData: '',
        assingTaskError: '',
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.ASSIGN_TASK_SUCCESS:
      return {
        ...state,
        assignTaskLoading: false,
        assingTaskData: action.payload,
        assingTaskError: '',
      };

    case ASSIGN_WORK_ACTIVITY_TYPE.ASSIGN_TASK_ERROR:
      return {
        ...state,
        assignTaskLoading: false,
        assingTaskData: '',
        assingTaskError: action.payload,
      };

    default:
      return state;
  }
};

export default assingWorklistReducer;
