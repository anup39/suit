import { all, call } from '@redux-saga/core/effects';

import { userSagas } from './user-redux/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas)]);
}
