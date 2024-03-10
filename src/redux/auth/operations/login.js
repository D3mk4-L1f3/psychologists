import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, removeToken } from '../../baseParams';

const signIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await baseParams.post('auth/login', credentials);
      removeToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default signIn;
