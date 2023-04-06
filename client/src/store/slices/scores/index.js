import {createSlice} from '@reduxjs/toolkit';

const initialState = {currentPoints: 20, currentBottles: 4, currentWeight: 32};

export const scoresSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetScores: () => initialState,
    addScore: (prevState, {payload}) => {
      return payload;
    },
  },
});

export const {resetScores, addScore} = scoresSlice.actions;

export default scoresSlice.reducer;
