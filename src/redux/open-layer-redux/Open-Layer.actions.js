import OPEN_LAYER_TYPES from './Open-Layer.actions-types';

export const addFeatureData = (data) => ({
  type: OPEN_LAYER_TYPES.ADD_FEATURES_DATA,
  payload: data,
});

export const removeFeatureData = () => ({
  type: OPEN_LAYER_TYPES.REMOVE_FEATURES_DATA,
  payload: '',
});
