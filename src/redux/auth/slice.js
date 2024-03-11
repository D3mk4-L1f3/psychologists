import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, signIn, signUp, tokenRefresh, register } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
  token: '',
  isLoggedIn: false,
  isLoading: false,
  isRefresh: true,
  isRegistered: false,
  error: null,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isRefresh = true;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isRegistered = true;
        state.user = payload.user;
      })

      .addCase(tokenRefresh.fulfilled, (state, { payload }) => {
        state.isRefresh = false;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = payload.token;
        state.user = payload.user;
      })

      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.isRegistered = false;
        state.token = '';
        state.user = {
          email: '',
          name: '',
          avatarURL: '',
        };
      })
      .addCase(tokenRefresh.pending, state => {
        state.isRefresh = true;
      })
      .addCase(tokenRefresh.rejected, (state, { payload }) => {
        state.isRefresh = false;
        state.error = payload;
      })

      .addMatcher(
        isAnyOf(
          signIn.pending,
          logOut.pending,
          signUp.pending,
          tokenRefresh.pending,
          register.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          signIn.rejected,
          logOut.rejected,
          signUp.rejected,
          register.rejected,
          tokenRefresh.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.isRegistered = false;
          state.error = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
