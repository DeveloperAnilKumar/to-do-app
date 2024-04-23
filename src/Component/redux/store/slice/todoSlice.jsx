import { createSlice } from "@reduxjs/toolkit";

// Define a slice for managing todo state
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [], // Initial state with an empty array for todos
  },
  reducers: {
    // Reducer function to add a new task to the todos array
    addTask: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    // Reducer function to delete a task from the todos array based on its id
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

// Extract action creators from the slice
export const { addTask, deleteTask } = todoSlice.actions;

// Export the reducer function
export default todoSlice.reducer;
