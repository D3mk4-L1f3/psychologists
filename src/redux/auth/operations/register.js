import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams } from '../../baseParams';

import { toast } from 'react-toastify';

const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      await baseParams.post('auth/register', credentials);
      const { email, password } = credentials;
      return { email, password };
    } catch (error) {
      switch (error.response.status) {
        case 400:
          toast.warning(`Помилка, перевірте на наявнісь помилок `);
          break;
        case 409:
          toast.error(`Опа-ча, ви не можете використовувати цей email`);
          break;
        default:
          break;
      }
      return rejectWithValue(error.message);
    }
  }
);

export default signUp;
