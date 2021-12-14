import { all, call } from '@redux-saga/core/effects';

import { signinSagas, userSagas } from './user-redux/user.sagas';
import { roleSaga } from './User-Role/role.sagas';

export default function* rootSaga() {
  yield all([call(userSagas), call(signinSagas), call(roleSaga)]);
}
