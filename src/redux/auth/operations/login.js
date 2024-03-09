import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams, removeToken } from '../../baseParams';
import { toast } from 'react-toastify';

const signIn = createAsyncThunk(
  '/auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await baseParams.post('auth/login', credentials);
      removeToken(data.token);
      toast.success(`Вітаємо, ${data.user.name}!`);
      return data;
    } catch (error) {
      toast.error(`Опа-ча, десь тут граматична помилка`);
      return rejectWithValue(error.message);
    }
  }
);

export default signIn;
