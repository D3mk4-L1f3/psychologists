import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams } from '../../baseParams';

const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      await baseParams.post('auth/register', credentials);
      const { email, password } = credentials;
      return { email, password };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default signUp;
