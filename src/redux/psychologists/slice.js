import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addFavoritePsychologist,
  getAllPsychologists,
  getFavoritePsychologists,
  removeFavoritePsychologist,
} from './operations';

const initialState = {
  psychologists: [],
  favorite: [],
  pages: 1,
  page: 1,
  favPending: false,
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: 'psychologists',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllPsychologists.fulfilled, (state, { payload }) => {
        state.psychologists = payload;
        state.isLoading = false;
      })
      .addCase(getFavoritePsychologists.fulfilled, (state, { payload }) => {
        state.psychologists = payload.psychologists;
        state.favorite = payload.favorites;
        state.isLoading = false;
      })
      .addCase(addFavoritePsychologist.fulfilled, (state, { payload }) => {
        state.favorite.unshift(payload.psychologist);
        state.favPending = false;
      })
      .addCase(removeFavoritePsychologist.fulfilled, (state, { payload }) => {
        state.favorite = state.favorite.filter(({ _id }) => _id !== payload);
        state.favPending = false;
      })
      .addMatcher(isAnyOf(removeFavoritePsychologist.pending), state => {
        state.favPending = true;
      })
      .addMatcher(
        isAnyOf(
          addFavoritePsychologist.rejected,
          removeFavoritePsychologist.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
          state.favPending = false;
        }
      )
      .addMatcher(
        isAnyOf(getAllPsychologists.pending, getFavoritePsychologists.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getAllPsychologists.rejected,
          getFavoritePsychologists.rejected
        ),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const psychologistsReducer = slice.reducer;
