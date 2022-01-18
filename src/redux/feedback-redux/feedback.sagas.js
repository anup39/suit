import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import {
  ADD_NEW_FEEDBACK,
  DELETE_FEEDBACK,
  GET_ALL_FEEDBACK,
} from '../../services/api/feedbackManagement';
import FEEDBACK_ACTIONS_TYPES from './feedback.action.types';
import {
  addNewFeedbackError,
  addNewFeedbackSuccess,
  deleteFeedbackError,
  deleteFeedbackSuccess,
  getAllFeedbackError,
  getAllFeedbackSuccess,
} from './feedback.actions';

export function* createNewFeedback({ payload }) {
  try {
    const newFeedback = yield call(ADD_NEW_FEEDBACK, payload);
    yield put(addNewFeedbackSuccess(newFeedback));
  } catch (error) {
    yield put(addNewFeedbackError(error.response.data));
  }
}

export function* onCreateNewFeedback() {
  yield takeLatest(FEEDBACK_ACTIONS_TYPES.ADD_NEW_FEEDBACK, createNewFeedback);
}

export function* listFeedback({ payload }) {
  try {
    const allFeedback = yield call(GET_ALL_FEEDBACK, payload);
    yield put(getAllFeedbackSuccess(allFeedback));
  } catch (error) {
    yield put(getAllFeedbackError(error.response.data));
  }
}

export function* onListFeedback() {
  yield takeLatest(FEEDBACK_ACTIONS_TYPES.GET_ALL_FEEDBACK, listFeedback);
}

export function* deleteFeedback({ payload }) {
  try {
    const deletedFeedback = yield call(DELETE_FEEDBACK, payload);
    yield put(deleteFeedbackSuccess(deletedFeedback));
  } catch (error) {
    yield put(deleteFeedbackError(error.response.data));
  }
}

export function* onDeleteFeedback() {
  yield takeLatest(FEEDBACK_ACTIONS_TYPES.DELETE_FEEDBACK, deleteFeedback);
}

export function* feedbackSagas() {
  yield all([
    call(onCreateNewFeedback),
    call(onListFeedback),
    call(onDeleteFeedback),
  ]);
}
