/*eslint-disable*/
import { all, call } from '@redux-saga/core/effects';

import { signinSagas, userSagas } from './user-redux/user.sagas';
import { roleSaga, getUserSaga } from './User-Role/role.sagas';
import {
  companySaga,
  getCompanySaga,
} from './Company-Management/company.sagas';

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(signinSagas),
    call(roleSaga),
    call(companySaga),
    call(getCompanySaga),
    call(getUserSaga),
  ]);
}
