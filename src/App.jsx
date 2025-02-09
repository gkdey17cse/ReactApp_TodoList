import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      let savedTodos = localStorage.getItem("todos"); 
      return savedTodos ? JSON.parse(savedTodos) : []; 
    } catch (error) {
      console.error("Error parsing localStorage:", error);
      return []; //
    }
  });

  useEffect(() => {
    console.log("Updating local storage : ", todos);
    localStorage.setItem("todos", JSON.stringify(todos)); //STORAGE DATA IN THE BROWSER ELSE IT WILL BE REMOVED WITH RELOAD
  }, [todos]);

  const deleteTodo = (todo) => {
    console.log("Deleteing Todo : ", todo);
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
    // localStorage.setItem("todos", JSON.stringify(todos)); // AFTER DELETE ITEM AGAIN STORE CURRENT TODOS IN THE BROWSER
  };

  const addToDo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myToDo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    console.log("Adding : ", myToDo);
    setTodos([...todos, myToDo]);
    // const [todos, setTodos] = useState(initTodo);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header title="Todos List" searchBar={true} />
        <AddToDo addToDo={addToDo} />
        <Todos todos={todos} onDelete={deleteTodo} />
        <Footer />
      </div>
    </>
  );
}
