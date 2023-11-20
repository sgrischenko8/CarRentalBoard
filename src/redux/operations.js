import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://64cbebf72eafdcdc851979fe.mockapi.io';

export const fetchCars = createAsyncThunk('cars', async (data, thunkAPI) => {
  try {
    const response = await axios.get('/adverts', {
      params: {
        page: data.page,
        limit: data.limit,
      },
    });

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const fetchAllCars = createAsyncThunk('allCars', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/adverts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
