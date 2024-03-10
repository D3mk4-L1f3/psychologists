import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, setToken, removeToken } from '../../../baseParams';

const getAllPsychologists = createAsyncThunk(
  'notes/getAll',
  async (body, { rejectWithValue, getState }) => {
    // const { limit = 3 } = body;
    try {
      setToken(getState().auth.token);
      // const { data } = await baseParams.get(`/psychologists/getAll?limit=${limit}`);
      const { data } = await baseParams.get(`/psychologists/getAll`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        removeToken();
      }
      return rejectWithValue(error.message);
    }
  }
);
export default getAllPsychologists;
