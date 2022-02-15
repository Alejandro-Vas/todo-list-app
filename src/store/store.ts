import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});

export type TypeRootState = ReturnType<typeof store.getState>;
