import React from 'react';
import './style.css';
import Form from './components/Form';
import ToDoList from 'TodoList';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Max´s Todo List</h1>
      </header>
      <Form />
      <ToDoList />
    </div>
  );
};

export default App;
