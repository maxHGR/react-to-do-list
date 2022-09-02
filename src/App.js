import React, { useState } from 'react';
import './style.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  //State Stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Functions

const filterHandler =()=> {
  switch(status) {
    case 'completed':
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      ;break;
    case 'uncompleted':
      setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;
    default: setFilteredTodos(todos);
      break;
  }
}
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
