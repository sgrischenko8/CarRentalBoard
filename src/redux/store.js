import { configureStore } from "@reduxjs/toolkit";
// import { contactsApi } from "./contacts/contactsSlice";
// import { authApi } from "./auth/authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { persistedReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
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
