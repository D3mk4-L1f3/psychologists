import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, setToken, removeToken } from '../../../baseParams';

const getFavoritePsychologists = createAsyncThunk(
  'psychologists/favorite',
  async ({ page, limit }, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await baseParams.get(
        `/psychologists/favorite?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        removeToken();
        // location.reload();
      }
      return rejectWithValue(error.message);
    }
  }
);

export default getFavoritePsychologists;
