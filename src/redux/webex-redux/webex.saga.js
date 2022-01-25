/* eslint-disable linebreak-style *//* eslint-disable prettier/prettier */
import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import { GET_WEBEX_ACCESSTOKEN_REQ, GET_WEBEX_ROOMS } from '../../services/webex.api';
import { getAccessToken, getRoomsError, getRoomsSuccess } from './webex.actions';
import WEBEX_ACTION_TYPES from './webex.types';

export function* onGetAccessToken({ payload }) {
  try {
    const newpayload = yield call(GET_WEBEX_ACCESSTOKEN_REQ, payload);
    yield put(getAccessToken(newpayload));
  } catch (error) {
    console.log(error);
  }
}

// eslint-disable-next-line linebreak-style
export function* onGetAccessTokenStart() {
  yield takeLatest(
    WEBEX_ACTION_TYPES.GET_WEBEX_ACCESSTOKEN_REQ,
    onGetAccessToken
  );
}

export function* onGetRooms() {
    try {
      const getrooms = yield call(GET_WEBEX_ROOMS);
      yield put(getRoomsSuccess(getrooms));
    } catch (error) {
      console.log(error);
      yield put(getRoomsError(error.response.data));
    }
  }
  
  // eslint-disable-next-line linebreak-style
  export function* onGetRoomsStart() {
    yield takeLatest(
      WEBEX_ACTION_TYPES.GET_WEBEX_ROOMS,
      onGetRooms
    );
  }

export function* webexSagas() {
  yield all([
      call(onGetAccessTokenStart),
      call(onGetRoomsStart)
    ]);
}
