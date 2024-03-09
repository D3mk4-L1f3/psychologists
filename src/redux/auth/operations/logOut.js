import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { baseParams, removeToken } from '../../baseParams';

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      await baseParams.post('auth/logout');
      toast.info(`Гарного Дня, ${getState().auth.user.name} `);
      removeToken();
    } catch (error) {
      switch (error.response.status) {
        case 401:
          toast.error('Помилка авторизації, ви не можете здійснити ВИХІД ');
          break;
        default:
          toast.error(`Щось пішло не так, спропуйте зробити це пізніше`);
          break;
      }
      return rejectWithValue(error.message);
    }
  }
);

export default logOut;
