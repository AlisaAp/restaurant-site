import { configureStore } from '@reduxjs/toolkit';
import { dishesApi } from './api/dishesApi';

export default configureStore({
  reducer: {
    [dishesApi.reducerPath]: dishesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dishesApi.middleware),
});
