import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, setToken, removeToken } from '../../../baseParams';

const addFavoritePsychologist = createAsyncThunk(
  '/psychologists/favorite/add',
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await baseParams.post(`/psychologists/favorite/add`, {
        psychologistId: id,
      });
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        removeToken();
      }
      return rejectWithValue(error.message);
    }
  }
);

export default addFavoritePsychologist;
