import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  DELETE_MILESTONE,
  GET_MILESTONE_BY_ID,
  GET_MILESTONE_LIST,
  UPDATE_MILESTONE,
} from '../../services/api/MilestoneManagement';
import {
  deleteMilestoneByIdError,
  deleteMilestoneByIdSuccess,
  getAllMilestonesError,
  getAllMilestonesSuccess,
  getMilestoneByIdError,
  getMilestoneByIdSuccess,
  updateMilestoneError,
  updateMilestoneSuccess,
} from './milestone-management.action';
import MILESTONE_MANAGEMENT_ACTION_TYPES from './milestone-management.action.types';

export function* getAllMilestones({ payload }) {
  try {
    const allMilestones = yield call(GET_MILESTONE_LIST, payload);
    yield put(getAllMilestonesSuccess(allMilestones));
  } catch (error) {
    yield put(getAllMilestonesError(error.response.data));
    yield toast.error('Failed To Get All Milestones!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    yield toast.error('Failed To Get Milestone Details!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onGetMilestoneById() {
  yield takeLatest(
    MILESTONE_MANAGEMENT_ACTION_TYPES.GET_MILESTONE_BY_ID,
    getMilestoneById
  );
}

export function* updateMilestoneById({ payload }) {
  try {
    const milestoneData = yield call(UPDATE_MILESTONE, payload);
    yield put(updateMilestoneSuccess(milestoneData));

    yield toast.success('Milestone Updated Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(updateMilestoneError(error.response.data));
    yield toast.error('Failed To Update Milestone!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onUpdateMilestoneById() {
  yield takeLatest(
    MILESTONE_MANAGEMENT_ACTION_TYPES.UPDATE_MILESTONE,
    updateMilestoneById
  );
}

export function* deleteMilestoneById({ payload }) {
  try {
    const milestoneData = yield call(DELETE_MILESTONE, payload);
    yield put(deleteMilestoneByIdSuccess(milestoneData));
    yield toast.success('Milestones Deleted Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(deleteMilestoneByIdError(error.response.data));
    yield toast.error('Failed To Delete Milestone!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
}

export function* onDeleteMilestoneById() {
  yield takeLatest(
    MILESTONE_MANAGEMENT_ACTION_TYPES.DELETE_MILESTONE,
    deleteMilestoneById
  );
}

export function* milestoneManagementSagas() {
  yield all([
    call(onGetAllMilestones),
    call(onGetMilestoneById),
    call(onUpdateMilestoneById),
    call(onDeleteMilestoneById),
  ]);
}
