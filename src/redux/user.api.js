import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../App';

const baseUrl = 'http://localhost:5000';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (arg) => {
        const { email, password } = arg;
        return {
          url: '/login',
          params: { email, password },
        };
      },
    }),
  }),
});

export const { useLoginMutation } = userApi;
