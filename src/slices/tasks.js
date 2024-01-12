import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pendingTasks: [],
  completedTasks: [],
  currentPage: 'To do',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setPendingTasks: (state, action) => {
      state.pendingTasks = action.payload;
    },
    setCompletedTasks: (state, action) => {
      state.completedTasks = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPendingTasks, setCompletedTasks, setCurrentPage } =
  tasksSlice.actions;

export default tasksSlice.reducer;
