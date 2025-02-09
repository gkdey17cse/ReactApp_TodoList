import Todos from "./Todos";

export default function about(props) {
  return (
    <div className="max-w-7xl mx-auto px-2 py-2">
      <Todos todos={props.todos || []} onDelete={props.deleteTodo} />
    </div>
  );
}
