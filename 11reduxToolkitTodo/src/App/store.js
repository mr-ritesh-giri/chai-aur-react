import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../Features/Todo/todoSlice";
import {
  loadtodoFromLocalStorage,
  saveTodosToLocalStorage,
} from "../LocalStorage/LocalStorageHelpers";

const preloadedState = { todo: loadtodoFromLocalStorage() };

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveTodosToLocalStorage(store.getState().todo);
});
