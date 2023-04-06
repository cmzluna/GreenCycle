import {createSlice} from '@reduxjs/toolkit';

const initialState = {currentPoints: 20, currentBottles: 4, currentWeight: 32};

export const scoresSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetScores: () => initialState,
    // to complete :
    // addScore: (prevState, {payload}) => {
    //   return {...prevState, isLoggedIn: true, idToken: payload.idToken};
    // },
  },
});

export const {resetUser, signIn, signOut} = scoresSlice.actions;

export default scoresSlice.reducer;
