import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "interfaces/ITodo";

const initialState = [] as ITodo[];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setInitTodo(state, action) {
      state.push(...action.payload);
    },
    addTodo(state, action: PayloadAction<ITodo>) {
      const newTodo = {
        userId: action.payload.userId,
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.push(newTodo);
    },
    deleteTodo(state, action: any) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export default todoSlice;
export const todoActions = todoSlice.actions;
