export default function ListItem() {
  return (
    <>
      <li className="list-item">
        <input type="checkbox" /> Learn Japanese <button>Edit</button>{" "}
        <button>Delete</button>
      </li>
      <li className="list-item">
        <input type="checkbox" /> Wash the dishes <button>Edit</button>{" "}
        <button>Delete</button>
      </li>
      <li className="list-item">
        <input type="checkbox" /> Clean the Table <button>Edit</button>{" "}
        <button>Delete</button>
      </li>
      <li className="list-item">
        <input type="checkbox" /> Walk the Dog <button>Edit</button>{" "}
        <button>Delete</button>
      </li>
      <li className="list-item">
        <input type="checkbox" /> Reply to emails <button>Edit</button>{" "}
        <button>Delete</button>
      </li>
    </>
  );
}
