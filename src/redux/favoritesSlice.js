import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'favorites',
  storage,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {},
  reducers: {
    setFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites } = favoritesSlice.actions;

export const persistedReducer = persistReducer(
  persistConfig,
  favoritesSlice.reducer,
);

export const favoritesReducer = favoritesSlice.reducer;
