import { all, call } from '@redux-saga/core/effects';

import { companySagas } from './company-redux/company.sagas';
import { signinSagas, userSagas } from './user-redux/user.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(signinSagas), call(companySagas)]);
}
