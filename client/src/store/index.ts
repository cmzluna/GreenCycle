import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import scoresReducer from './slices/scores';

const createDebugger = require('redux-flipper').default; //

const store = configureStore({
  reducer: {
    user: userReducer,
    scores: scoresReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export default store;
