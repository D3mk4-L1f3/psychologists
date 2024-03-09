import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseParams } from '../../baseParams';

const getAllDrugs = createAsyncThunk(
  '/drugs/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await baseParams.get(`/drugs/getAll`);
      return data;
    } catch (error) {
      if (error.response.status !== 401) {
        console.error(`Something went wrong. Please try again later.`);
      }
      return rejectWithValue(error.message);
    }
  }
);

export default getAllDrugs;
