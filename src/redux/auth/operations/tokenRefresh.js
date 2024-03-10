import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, setToken } from '../../baseParams';

const tokenRefresh = createAsyncThunk(
  'auth/current',
  async (bodyToken, { rejectWithValue, getState }) => {
    if (bodyToken) {
      setToken(bodyToken);
    } else {
      setToken(getState().auth.token);
    }
    try {
      const { data } = await baseParams.get('auth/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default tokenRefresh;
