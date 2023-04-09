import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import scoresReducer from './slices/scores';
import locationsReducer from './slices/locations';

const createDebugger = require('redux-flipper').default; //

const store = configureStore({
  reducer: {
    user: userReducer,
    scores: scoresReducer,
    locations: locationsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(createDebugger()),
});

export default store;
