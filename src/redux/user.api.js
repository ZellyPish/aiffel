import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl }),
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
