import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchAllCars } from './operations';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const fetchCarsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchCars.rejected]: handleRejected,
  },
});

const fetchAllCarsSlice = createSlice({
  name: 'allCars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchAllCars.pending]: handlePending,
    [fetchAllCars.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchAllCars.rejected]: handleRejected,
  },
});

export const fetchCarsReducer = fetchCarsSlice.reducer;
export const fetchAllCarsReducer = fetchAllCarsSlice.reducer;
