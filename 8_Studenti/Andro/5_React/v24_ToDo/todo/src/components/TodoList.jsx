import ListGroup from "react-bootstrap/ListGroup";
import { TodoItem } from "./index";

export default function TodoList({ todos }) {
  return (
    <ListGroup>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ListGroup>
  );
}
