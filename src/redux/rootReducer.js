import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './user.reducer';
import { userApi } from './user.api';
import { forumApi } from './forum.api';

const rootReducer = combineReducers({
  userInfo: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [forumApi.reducerPath]: forumApi.reducer,
});

export default rootReducer;
