export default function ListItem({ todo, dispatch }) {

  return (
    <>
      <li className="list-item">
        <input type="checkbox" checked={todo.complete} onChange={() => dispatch({ type: "toggle", id: todo.id })}/>
        {todo.text}
        <button> Edit </button>
        <button> Delete </button>
      </li>
    </>
  );
}
