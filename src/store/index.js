import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import basket from './slices/basket';
import order from './slices/order';

export default configureStore({
  reducer: {
    basket,
    order,
    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
