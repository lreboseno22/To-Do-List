import { useState, useEffect } from "react";

export default function ListItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.text);

  useEffect(() => {
    setEditText(todo.text);
  }, [todo.text]);

  const handleSave = () => {
    if (!editText.trim()) {
      alert("Task cannot be empty");
      return;
    }
    dispatch({ type: "save", id: todo.id, text: editText });
  };

  const handleDelete = () => {
    if (!todo.complete) {
      alert("You can only delete a completed task");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmed) {
      dispatch({ type: "delete", id: todo.id });
    }
  };

  if (todo.editing) {
    return (
      <li className="list-item">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button
          onClick={handleSave}
        >
          {" "}
          Save{" "}
        </button>
        <button onClick={() => dispatch({ type: "save", id: todo.id, text: todo.text })}>
          Cancel
        </button>
      </li>
    );
  }

  return (
      <li className="list-item">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => dispatch({ type: "toggle", id: todo.id })}
        />
        {todo.text}
        <button onClick={() => dispatch({ type: "edit", id: todo.id })}>
          {" "}
          Edit{" "}
        </button>
        <button
          onClick={handleDelete}
          disabled={!todo.complete}
          style={{
            opacity: todo.complete ? 1 : 0.6,
            cursor: todo.complete ? "pointer" : "not-allowed",
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </li>
  );
}
