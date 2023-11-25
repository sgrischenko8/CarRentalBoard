import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'cars',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64cbebf72eafdcdc851979fe.mockapi.io',
  }),
  tagTypes: ['Car'],
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (args) => ({
        url: '/adverts',
        params: { ...args },
      }),
    }),
    getAllCars: builder.query({
      query: () => '/adverts',
      providesTags: ['Car'],
    }),
  }),
});

export const { useGetCarsQuery, useGetAllCarsQuery } = carsApi;
