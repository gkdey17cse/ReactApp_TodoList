import React from "react";
import { useState } from "react";

function AddToDO({ addToDo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title & Description can't be blank");
    } else {
      addToDo(title, desc); // Takes Title & Description and passed to addToDo int he app.jsx
      setTitle("");
      setDesc("");
    }
  };

  return (
    <>
      <form onSubmit={submit} className="bg-slate-100 my-2 py-2 px-3 my-4 mx-2 p-2">
        <div className="my-1 py-1.5 flex flex-col gap-2 justify-center items-start">
          <label htmlFor="" className="font-semibold">
            Enter Task Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full border-none outline-none bg-white shadow-md rounded-sm py-2.5 px-4"
            value={title}
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="my-1 py-1.5 flex flex-col gap-2 justify-center items-start">
          <label htmlFor="" className="font-semibold">
            Enter Task Description
          </label>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="w-full border-none outline-none bg-white shadow-md rounded-sm py-2.5 px-4"
            value={desc}
            placeholder="Enter Todo Details"
          ></textarea>
        </div>
        <button
          type="submit"
          className="my-2 w-1/4 px-4 py-2 bg-teal-500 hover:bg-teal-600 duration-200 active:translate-x-1 active:translate-y-1 text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddToDO;
