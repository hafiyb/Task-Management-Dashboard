import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//creating Api for RTK Query

export const tasksApi = createApi({
  reducerPath: 'tasksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
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
    //get tasks where completed === false
    //(pending tasks)
    getTasks: builder.query({
      query: () => ({
        url: `/tasks?filters[completed][$eq]=false`,
      }),
      providesTags: ['Task'],
    }),
    //get tasks where completed === true
    //(completed tasks)
    getCompletedTasks: builder.query({
      query: () => ({
        url: `/tasks?filters[completed][$eq]=true`,
      }),
      providesTags: ['Task'],
    }),
    //get task by id
    //not used in this project
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ['Task'],
    }),
    //create task
    createTask: builder.mutation({
      query: (body) => ({
        url: `/tasks`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Task'],
    }),
    //marks task as complete
    completeTask: builder.mutation({
      query: (id, body) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        body: { data: { completed: true } },
      }),
      invalidatesTags: ['Task'],
    }),
    //deletes task
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
});


//creates hooks for RTK Query
export const {
  useGetTasksQuery,
  useGetCompletedTasksQuery,
  useGetTaskQuery,
  useCreateTaskMutation,
  useCompleteTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
