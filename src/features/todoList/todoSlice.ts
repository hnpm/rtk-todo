import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/rootReducer";
import { writeTodos, readTodos as fetchTodos } from "api/jsonstore";
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
                todo.completed = !todo.completed;
            }
        },
        receiveTodos(state, action: PayloadAction<Todo[]>) {
            return action.payload;
        }
    }
});

export const { toggleTodo } = todoSlice.actions;

export const addTodo = (text: string): AppThunk => async (dispatch: AppDispatch, getState: () => RootState) => {
    const newTodo: Todo = {
        id: Math.random().toString(36).substr(2, 9),
        completed: false,
        text: text,
    }
    dispatch(todoSlice.actions.addTodo(newTodo));
    writeTodos(getState().todos);
}

export const createTodoList = (): AppThunk => async (dispatch: AppDispatch) => {
    const id = Math.random().toString(36).substr(2, 9);
    window.history.pushState(null, document.title, `${id}`);
}

export const loadTodos = (): AppThunk => async (dispatch: AppDispatch) => {
    const todos = await fetchTodos();
    dispatch(todoSlice.actions.receiveTodos(todos));
}

export default todoSlice.reducer;