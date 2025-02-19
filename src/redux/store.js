import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigure = {
  key: "contact-persist",
  storage,
};
export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfigure, contactsReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE },
      },
    }),
});

export const persistor = persistStore(store);
