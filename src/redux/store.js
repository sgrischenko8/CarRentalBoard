import { configureStore } from '@reduxjs/toolkit';
import { carsApi } from './carsSlice';
import { filterReducer } from './filterSlice';
import { persistedReducer } from './favoritesSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    [carsApi.reducerPath]: carsApi.reducer,
    filter: filterReducer,
    favorites: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(carsApi.middleware),
});

export const persistor = persistStore(store);
