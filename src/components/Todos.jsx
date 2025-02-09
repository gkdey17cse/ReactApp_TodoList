import TodoItem from "../components/TodoItem";

const Todos = (props) => {
  return (
    <div className="py-4">
      <h1 className="text-center py-1 text-xl font-semibold">
        TODO List
      </h1>
      <div className="grid grid-cols-5 gap-3 bg-slate-100 my-2 py-5 px-3">
        {/* <TodoItem todo={props.todos[0]} /> */}
        {props.todos.length !== 0 ? (
          props.todos.map((todo) => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })
        ) : (
          <p>No TODO to Show</p>
        )}
      </div>
    </div>
  );
};
export default Todos;

