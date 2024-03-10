import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, setToken, removeToken } from '../../../baseParams';

const removeFavoritePsychologist = createAsyncThunk(
  '/psychologists/favorite/remove',
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      await baseParams.delete(`/psychologists/favorite/remove`, {
        headers: {},
        data: { noteId: id },
      });
      return id;
    } catch (error) {
      if (error.response.status === 401) {
        removeToken();
      }
      return rejectWithValue(error.message);
    }
  }
);

export default removeFavoritePsychologist;
