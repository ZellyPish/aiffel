import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000';

export const forumApi = createApi({
  reducerPath: 'forum',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getForumPosts: builder.query({
      query: (arg) => {
        const { _page, _limit } = arg;
        return {
          url: 'forum',
          params: { _page, _limit },
        };
      },
    }),
  }),
});

export const { useGetForumPostsQuery } = forumApi;
