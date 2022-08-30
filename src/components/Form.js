import React from 'react';

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log('hey');
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      ></input>
      <button onClick={submitTodoHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value=""> All</option>
          <option value="">Completed</option>
          <option value="">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
