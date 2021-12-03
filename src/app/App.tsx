import AddTodo from 'features/todoList/AddTodo';
import TodoList from 'features/todoList/TodoList';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
