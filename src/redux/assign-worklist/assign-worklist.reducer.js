import ASSIGN_WORK_ACTIVITY_TYPE from './assign-worklist-action.types';

const ASSING_WORK_INITIAL_STATE = {
  isSelectAllTask: false,
  selectedTasks: [],
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

    default:
      return state;
  }
};

export default assingWorklistReducer;
