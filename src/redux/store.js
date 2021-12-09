import { configureStore } from '@reduxjs/toolkit';
import { forumApi } from './forum.api';
import rootReducer from './rootReducer';
import { userApi } from './user.api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware, forumApi.middleware),
});
