import React from "react";
import TodoListItem from "./TodoListItem";
import { RootState } from "app/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "./todoSlice";

export default function TodoList() {
    const todos = useSelector(
        (state: RootState) => state.todos
    );

    const dispatch = useDispatch();

    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo))} />
            ))}
        </ul>
    );
}