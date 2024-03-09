// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { configureStore } from '@reduxjs/toolkit';
// import { drugsReducer } from './drugs/slice';
// import storage from 'redux-persist/lib/storage';
// import persistReducer from 'redux-persist/es/persistReducer';
// import psychoReducer from './favorites/favSlice';

// const psychoPersistConfig = {
//   key: 'Psychologists',
//   storage,
//   whitelist: ['psychoItems'],
// };

// const rootReducer = {
//   psychologists: drugsReducer,
//   favorites: persistReducer(psychoPersistConfig, psychoReducer),
// };

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { psychologistsReducer } from './notes/slice';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = {
  psychologists: psychologistsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
