import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import {
  GET_MILESTONE_BY_ID,
  GET_MILESTONE_LIST,
} from '../../services/api/MilestoneManagement';
import {
  getAllMilestonesError,
  getAllMilestonesSuccess,
  getMilestoneByIdError,
  getMilestoneByIdSuccess,
} from './milestone-management.action';
import MILESTONE_MANAGEMENT_ACTION_TYPES from './milestone-management.action.types';

export function* getAllMilestones({ payload }) {
  try {
    const allMilestones = yield call(GET_MILESTONE_LIST, payload);
    yield put(getAllMilestonesSuccess(allMilestones));
  } catch (error) {
    yield put(getAllMilestonesError(error.response.data));
  }
}

export function* onGetAllMilestones() {
  yield takeLatest(
    MILESTONE_MANAGEMENT_ACTION_TYPES.GET_ALL_MILESTONES,
    getAllMilestones
  );
}

export function* getMilestoneById({ payload }) {
  try {
    const milestoneData = yield call(GET_MILESTONE_BY_ID, payload);
    yield put(getMilestoneByIdSuccess(milestoneData));
  } catch (error) {
    yield put(getMilestoneByIdError(error.response.data));
  }
}

export function* onGetMilestoneById() {
  yield takeLatest(
    MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID,
    getMilestoneById
  );
}

export function* milestoneManagementSagas() {
  yield all([call(onGetAllMilestones), call(onGetMilestoneById)]);
}
