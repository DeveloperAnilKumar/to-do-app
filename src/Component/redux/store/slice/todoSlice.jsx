import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    
    addTask: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
