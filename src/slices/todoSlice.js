import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: " Todo App",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { add, remove } = todoSlice.actions;
export default todoSlice.reducer;
