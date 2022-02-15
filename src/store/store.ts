import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type TypeRootState = ReturnType<typeof store.getState>;
