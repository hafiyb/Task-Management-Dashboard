import { configureStore } from '@reduxjs/toolkit'
import { tasksSlice } from '../slices/tasks'
import { tasksApi } from '../app/api/tasks'

export const makeStore = () =>
 configureStore({
  reducer: {
    [tasksApi.reducerPath]: tasksApi.reducer,
    tasks: tasksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
})