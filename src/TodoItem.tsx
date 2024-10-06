import { TodoProps } from "./interfaces";

export function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoProps) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </button>
    </li>
  );
}
