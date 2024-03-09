import { createSlice } from '@reduxjs/toolkit';
import getAllPsychologists from './operations/getAllDrugs';

const initialState = {
  psychologists: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'drugs',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllPsychologists.fulfilled, (state, { payload }) => {
        state.psychologists = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllPsychologists.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllPsychologists.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export const psychologistsReducer = slice.reducer;
