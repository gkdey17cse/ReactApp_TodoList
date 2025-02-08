import React from "react";

function TodoItem({todo,onDelete}) {
  return (
    <>
      <div className="py-2 px-4 text-dark bg-light">
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        {/* Creating onDelete as a function so that it can be called */}
        <button type="button" className="btn btn-danger" onClick = {() =>{onDelete(todo)}}>Delete Todo</button>  
      </div>
    </>
  );
}

export default TodoItem;
