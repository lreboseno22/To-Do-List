import ListItem from "./ListItem";

export default function List({ todos, dispatch }) {
  if (!todos.length === 0) {
    return <p>No tasks yet</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
}
