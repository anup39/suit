import MILESTONE_MANAGEMENT_ACTION_TYPES from './milestone-management.action.types';

const initialState = {
  isGetAllMilestonesLoading: false,
  getAllMilestoneError: '',
  getAllMilestoneData: '',

  isMilestoneByIdLoading: false,
  MilestoneByIdData: '',
  MilestoneByIdError: '',

  isUpdateMilestoneLoading: false,
  updateMilesotneError: '',
  updateMilesotneSuccess: '',

  isDeleteMilestoneLoading: false,
  deleteMilesotneError: '',
  deleteMilesotneSuccess: '',
};

// eslint-disable-next-line
const milestoneManagmeentReducer = (state = initialState, action) => {
  switch (action.type) {
    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES:
      return {
        ...state,
        isGetAllMilestonesLoading: true,
        getAllMilestoneError: '',
        getAllMilestoneData: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES_SUCCESS:
      return {
        ...state,
        isGetAllMilestonesLoading: false,
        getAllMilestoneError: '',
        getAllMilestoneData: action.payload,
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES_ERROR:
      return {
        ...state,
        isGetAllMilestonesLoading: false,
        getAllMilestoneError: action.payload,
        getAllMilestoneData: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID:
      return {
        ...state,
        isMilestoneByIdLoading: true,
        MilestoneByIdData: '',
        MilestoneByIdError: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID_SUCCESS:
      return {
        ...state,
        isMilestoneByIdLoading: false,
        MilestoneByIdData: action.payload,
        MilestoneByIdError: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID_ERROR:
      return {
        ...state,
        isMilestoneByIdLoading: false,
        MilestoneByIdData: '',
        MilestoneByIdError: action.payload,
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE:
      return {
        ...state,
        isUpdateMilestoneLoading: true,
        updateMilesotneError: '',
        updateMilesotneSuccess: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE_SUCCESS:
      return {
        ...state,
        isUpdateMilestoneLoading: false,
        updateMilesotneError: '',
        updateMilesotneSuccess: action.payload,
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE_ERROR:
      return {
        ...state,
        isUpdateMilestoneLoading: false,
        updateMilesotneError: action.payload,
        updateMilesotneSuccess: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE:
      return {
        ...state,
        isDeleteMilestoneLoading: true,
        deleteMilesotneError: '',
        deleteMilesotneSuccess: '',
      };

    case MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE_SUCCESS:
      return {
        ...state,
        isDeleteMilestoneLoading: false,
        deleteMilesotneError: '',
        deleteMilesotneSuccess: action.payload,
      };
    case MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE_ERROR:
      return {
        ...state,
        isDeleteMilestoneLoading: false,
        deleteMilesotneError: action.payload,
        deleteMilesotneSuccess: '',
      };

    default:
      return state;
  }
};

export default milestoneManagmeentReducer;
