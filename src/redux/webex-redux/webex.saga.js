/* eslint-disable linebreak-style */ /* eslint-disable prettier/prettier */
import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';

import {
  ADD_NEW_FILE,
  ADD_NEW_MESSAGE,
  GET_WEBEX_ACCESSTOKEN_REQ,
  GET_WEBEX_ROOMS,
} from '../../services/webex.api';
import {
  addNewFileError,
  addNewFileSuccess,
  addNewMessageError,
  addNewMessageSuccess,
  getAccessTokenError,
  getAccessTokenSuccess,
  getRoomsError,
  getRoomsSuccess,
} from './webex.actions';
import WEBEX_ACTION_TYPES from './webex.types';

export function* onGetAccessToken({ payload }) {
  try {
    const newpayload = yield call(GET_WEBEX_ACCESSTOKEN_REQ, payload);
    yield put(getAccessTokenSuccess(newpayload));
  } catch (error) {
    yield put(getAccessTokenError(error.response.data));
  }
}

// eslint-disable-next-line linebreak-style
export function* onGetAccessTokenStart() {
  yield takeLatest(
    WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN_REQ,
    onGetAccessToken
  );
}

export function* onGetRooms( {payload}) {
  try {
    const getrooms = yield call(GET_WEBEX_ROOMS,payload);
    yield put(getRoomsSuccess(getrooms));
  } catch (error) {
    console.log(error);
    yield put(getRoomsError(error.response.data));
  }
}

// eslint-disable-next-line linebreak-style
export function* onGetRoomsStart() {
  yield takeLatest(WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS, onGetRooms);
}

export function* addNewMessage({ payload }) {
  try {
    const newMessageResponse = yield call(ADD_NEW_MESSAGE, payload);
    yield put(addNewMessageSuccess(newMessageResponse));
    yield toast.success('Message Added Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(addNewMessageError(error.response.data));
    yield toast.error('Failed To Add Message!', {
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

export function* onAddNewMessage() {
  yield takeLatest(WEBEX_ACTION_TYPES.ADD_WEBEX_MESSAGE, addNewMessage);
}

export function* addNewFile({ payload }) {
  try {
    const newMessageResponse = yield call(ADD_NEW_FILE, payload);
    yield put(addNewFileSuccess(newMessageResponse));
    yield toast.success('File Added Successfully!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } catch (error) {
    yield put(addNewFileError(error.response.data));
    yield toast.error('Failed To Add File!', {
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

export function* onAddNewFile() {
  yield takeLatest(WEBEX_ACTION_TYPES.ADD_WEBEX_FILE, addNewFile);
}

export function* webexSagas() {
  yield all([
    call(onGetAccessTokenStart),
    call(onGetRoomsStart),
    call(onAddNewMessage),
    call(onAddNewFile),
  ]);
}
