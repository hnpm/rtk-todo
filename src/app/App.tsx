import AddTodo from 'features/todoList/AddTodo';
import TodoList from 'features/todoList/TodoList';
import { createTodoList, loadTodos } from 'features/todoList/todoSlice';
import Footer from 'features/visibilityFilter/Footer';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.pathname === '/') {
      dispatch(createTodoList());
    } else {
      dispatch(loadTodos());
    }
  }, [dispatch]);
  
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
