import { createSlice } from "@reduxjs/toolkit";

const initialTasksState = {
  tasks: [],
  changed: false,
};

const TasksSlice = createSlice({
  name: "tasks",
  initialState: initialTasksState,
  reducers: {
    replaceTasks(state, action) {
      state.tasks = action.payload.tasks;
    },

    addTask(state, action) {
      let newTask = {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
      state.tasks.push(newTask);
      state.changed = true;
    },

    reAddTask(state, action) {
      const existingTask = state.tasks.find(
        (item) => item.id === action.payload.id
      );
      existingTask.completed = false;
      state.changed = true;
    },

    completeTask(state, action) {
      const existingTask = state.tasks.find(
        (item) => item.id === action.payload.id
      );
      existingTask.completed = true;
      state.changed = true;
    },

    removeTask(state, action) {
      state.tasks = state.tasks.filter((obj) => obj.id !== action.payload.id);
      state.changed = true;
    },

    removeAllTask(state, action) {
      state.tasks = state.tasks.filter((obj) => !obj.completed);
      state.changed = true;
    },
  },
});

export default TasksSlice;
