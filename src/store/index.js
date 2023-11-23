import { createSlice, configureStore } from "@reduxjs/toolkit";
import PageToggleSlice from "./PageToggleSlice";
import TasksSlice from "./TasksSlice";

const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    pageToggle: PageToggleSlice.reducer,
  },
});

export const pageToggleActions = PageToggleSlice.actions;
export const tasksActions = TasksSlice.actions;

export default store;
