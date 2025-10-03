import "./App.css";
import Form from "./componets/Form";
import List from "./componets/List";

import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [{ text: action.text, complete: false }, ...state];

    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  return (
    <div className="container">
      <h1>To-Do List:</h1>
      <Form dispatch={dispatch} />
      <div className="list-container">
        <List todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
