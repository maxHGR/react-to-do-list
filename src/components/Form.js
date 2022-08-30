import React from 'react';


const Form = () => {
  const inputTextHandler = () => {
    console.log(e);
  }; 

  return(
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input"></input>
        <button>
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
  )
}

export default Form;