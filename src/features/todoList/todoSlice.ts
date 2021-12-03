import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch, AppThunk } from "app/store";
import { Todo } from "./types";

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.push(action.payload);
        },
        toggleTodo(state, action: PayloadAction<Todo>) {
            let todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.compeleted = !todo.compeleted;
            }
        }
    }
});

export const { toggleTodo } = todoSlice.actions;

export const addTodo = (text: string): AppThunk => async (dispatch: AppDispatch) => {
    const newTodo: Todo = {
        id: Math.random().toString(36).substr(2, 9),
        compeleted: false,
        text: text,
    }
    dispatch(todoSlice.actions.addTodo(newTodo));
}

export default todoSlice.reducer;