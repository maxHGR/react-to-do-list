import React from 'react';


const Form = () => {
  return(
    <form>
      <input type="text" className="todo-input"/>
        <button>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo"/>
            <option value=""> All</option>
            <option value="">Completed</option>
            <option value="">Uncompleted</option>
        </div>
    </form>
  )
}

export default Form;