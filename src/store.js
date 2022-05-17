import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counterSlice";
import todoReducers from "./slices/todoSlice";

export default configureStore({
  reducer: {
    Counter: CounterReducer,
    todo: todoReducers,
  },
});
