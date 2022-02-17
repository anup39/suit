import OPEN_LAYER_TYPES from './Open-Layer.actions-types';

const OPEN_LAYER_INITIAL_STATE = {
  featureData: '',
};

// eslint-disable-next-line
const openLayerReducer = (state = OPEN_LAYER_INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_LAYER_TYPES.ADD_FEATURES_DATA:
      return {
        ...state,
        featureData: action.payload,
      };

    case OPEN_LAYER_TYPES.REMOVE_FEATURES_DATA:
      return {
        ...state,
        featureData: '',
      };

    default:
      return state;
  }
};

export default openLayerReducer;
