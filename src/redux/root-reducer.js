import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user-redux/user.reducer';
import roleReducer from './User-Role/role.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  user: userReducer,
  role: roleReducer,
});

export default persistReducer(persistConfig, rootReducer);
