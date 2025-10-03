import { useState } from "react";

export default function ListItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.text);

  if (todo.editing) {
    return (
      <li className="list-item">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={() => dispatch({ type: "save", id: todo.id, text: editText })}> Save </button>
      </li>
    );
  }
  return (
    <>
      <li className="list-item">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => dispatch({ type: "toggle", id: todo.id })}
        />
        {todo.text}
        <button onClick={() => dispatch({ type: "edit", id: todo.id })}> Edit </button>
        <button> Delete </button>
      </li>
    </>
  );
}
