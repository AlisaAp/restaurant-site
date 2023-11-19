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
      query: (limit) => `dishes?page=1&limit=${limit}`,
      providesTags: (result) => (result
        ? [
          ...result.map(({ id }) => ({ type: 'Dishes', id })),
          { type: 'Dishes', id: 'LIST' },
        ]
        : [{ type: 'Dishes', id: 'LIST' }]),
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
    deleteDish: build.mutation({
      query: (id = 1) => ({
        url: `dishes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Dishes', id: 'LIST' }],
    }),
  }),
});

export const { useGetDishesQuery, useAddNewDishMutation, useDeleteDishMutation } = api;
