import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api',
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      );
      return headers;
    },
  }),
  tagTypes: ['Task'],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: `/tasks?filters[completed][$eq]=false`,
      }),
      providesTags: ['Task'],
    }),
    getCompletedTasks: builder.query({
      query: () => ({
        url: `/tasks?filters[completed][$eq]=true`,
      }),
      providesTags: ['Task'],
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ['Task'],
    }),
    createTask: builder.mutation({
      query: (body) => ({
        url: `/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    completeTask: builder.mutation({
      query: (id, body) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: { data: { completed: true } },
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetCompletedTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useCompleteTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
