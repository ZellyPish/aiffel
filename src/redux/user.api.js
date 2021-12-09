import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
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
