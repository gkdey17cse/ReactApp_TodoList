import TodoItem from "../components/TodoItem";

const Todos = (props) => {
  return (
    <>
      <h1 className="text-center fs-1 py-1 my-2 ">This is Todos List</h1>
      <div className="row">
        {/* <TodoItem todo={props.todos[0]} /> */}
        {props.todos.length !== 0 ? (
          props.todos.map((todo) => {
            return (
              <>
                <div className="col col-3 w-full">
                  <TodoItem
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                  />
                </div>
              </>
            );
          })
        ) : (
          <p>No TODO to Show</p>
        )}
      </div>
    </>
  );
};
export default Todos;
