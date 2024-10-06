export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type ToggleTodo = (id: string, completed: boolean) => void;
type DeleteTodo = (id: string) => void;

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export interface TodoProps extends Todo {
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}