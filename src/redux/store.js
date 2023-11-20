import { configureStore } from '@reduxjs/toolkit';
import { fetchCarsReducer, fetchAllCarsReducer } from './carsSlice';
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
    cars: fetchCarsReducer,
    allCars: fetchAllCarsReducer,
    filter: filterReducer,
    favorites: persistedReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
