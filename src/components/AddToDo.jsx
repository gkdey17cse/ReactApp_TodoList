import React from "react";
import { useState } from "react";

function AddToDO({addToDo}) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert("Title & Description can't be blank");
    }else{
        addToDo(title , desc) // Takes Title & Description and passed to addToDo int he app.jsx
        setTitle("");
        setDesc("");
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="py-3">
          <label htmlFor="" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            value={title}
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="py-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            value={desc}
            className="form-control"
            placeholder="Enter Todo Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddToDO;
