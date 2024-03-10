import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, removeToken } from '../../baseParams';

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      await baseParams.post('auth/logout');
      console.log(`Гарного Дня, ${getState().auth.user.name} `);
      removeToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default logOut;
