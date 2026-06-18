import ListGroup from "react-bootstrap/Listgroup";
import { TodoItem } from "./index";

export default function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ListGroup>
  );
}
