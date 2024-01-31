import { configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './contacts/slice';
import { filterValueReducer } from './filterSlice/filterSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './authSlice/AuthSlice';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'contactsItem',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
    filter: filterValueReducer,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
