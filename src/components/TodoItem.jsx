import React from "react";

function TodoItem({ todo, onDelete }) {
  const cartStyle = {
    height: "200px"
  }
  return (
    <div className="" >
      <div className="py-2 px-4 text-dark bg-white shadow-sm border border-teal-800 flex flex-col justify-between items-start" style={cartStyle}>
        <h4 className="text-lg font-semibold tracking-wide py-1">{todo.title}</h4>
        <p className="text-sm leading-loose">{todo.desc}</p>
        {/* Creating onDelete as a function so that it can be called */}
        <button
          type="button"
          className="my-2 w-auto px-3 py-1.5 bg-red-500 hover:bg-red-600 duration-200 active:translate-x-1 active:translate-y-1 text-white"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete Todo
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
