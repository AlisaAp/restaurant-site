import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../../utils/API_CONFIG';

export const api = createApi({
  reducerPath: 'dishesApi',
  tagTypes: ['Dishes'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (build) => ({
    getDishes: build.query({
      query: (limit) => `menu?page=1&limit=${limit}`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'menu', id })),
          { type: 'menu', id: 'LIST' },
        ]
        : [{ type: 'menu', id: 'LIST' }]),
    }),
    getDishesByCategory: build.query({
      query: (category) => `menu?category=${category}`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'menu', id })),
          { type: 'menu', id: 'LIST' },
        ]
        : [{ type: 'menu', id: 'LIST' }]),
    }),
    getDishById: build.query({
      query: (id = 1) => `dishes/${id}`,
    }),

    addNewDish: build.mutation({
      query: (data) => ({
        url: 'dishes',
        method: 'POST',
        body: {
          ...data,
        },
      }),
      invalidatesTags: [{ type: 'Dishes', id: 'LIST' }],
    }),
    addNewOrder: build.mutation({
      query: (data) => ({
        url: 'orders',
        method: 'POST',
        body: {
          ...data,
        },
      }),
      invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
    deleteDish: build.mutation({
      query: (id = 1) => ({
        url: `dishes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Dishes', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetDishesQuery,
  useGetDishesByCategoryQuery,
  useAddNewDishMutation,
  useDeleteDishMutation,
  useAddNewOrderMutation,
} = api;
