import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import AddToDo from "./components/AddToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    // console.log("Updating local storage : ", todos);   // Testing
    localStorage.setItem("todos", JSON.stringify(todos)); //STORAGE DATA IN THE BROWSER ELSE IT WILL BE REMOVED WITH RELOAD
  }, [todos]);

  const deleteTodo = (todo) => {
    // console.log("Deleteing Todo : ", todo);  // Testing
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
    // console.log("Adding : ", myToDo);  //Testing
    setTodos([...todos, myToDo]);
    // const [todos, setTodos] = useState(initTodo);
  };

  return (
    <Router>
      <div className="max-w-7xl mx-auto">
        <Header title="Todos List" searchBar={true} />{" "}
        {/* This should always return  */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              // Only routes in "/"
              <>
                <AddToDo addToDo={addToDo} />
                <Todos todos={todos} onDelete={deleteTodo} />
              </>
            }
          />
          <Route
            exact
            path="/todo"
            element={<About todos={todos} onDelete={deleteTodo} />}
          />
        </Routes>
        <Footer /> {/* This should always return  */}
      </div>
    </Router>
  );
}
