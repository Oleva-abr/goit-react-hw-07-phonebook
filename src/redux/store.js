import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import logger from 'redux-logger';

import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

import phonebookReducer from './phoneBookReducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //fix persist
    },
  }),

  logger,
];

// const phonebookPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    //  persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
});

// const persistor = persistStore(store);

export default { store }; //persistor,
