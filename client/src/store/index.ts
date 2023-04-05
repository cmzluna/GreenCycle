import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user';
import scoresReducer from './slices/scores';

const store = configureStore({
  reducer: {
    user: userReducer,
    scores: scoresReducer,
  },
});

export default store;
