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
    getPostById: builder.query({
      query: (arg) => {
        const { id } = arg;
        return {
          url: `forum/${id}`,
        };
      },
    }),
    patchPostById: builder.mutation({
      query: (arg) => {
        const { id, isLiked } = arg;
        return {
          url: `forum/${id}`,
          method: 'PATCH',
          body: { isLiked },
        };
      },
    }),
    deletePostById: builder.mutation({
      query: (arg) => {
        const { id } = arg;
        return {
          url: `forum/${id}`,
          method: 'DELETE',
        };
      },
    }),
  }),
});

export const {
  useGetForumPostsQuery,
  useGetPostByIdQuery,
  usePatchPostByIdMutation,
  useDeletePostByIdMutation,
} = forumApi;
