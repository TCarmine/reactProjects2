import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


function App() {
  return (
    <div>
      <h1> To do In React that will be refactored in Typescript later </h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
