import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import basket from './slices/basket';

export default configureStore({
  reducer: {
    basket,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
