import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";

class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? "todo-item-text todo-item-completed"
      : "todo-item-text";

    return (
      <ListGroupItem className="todo-item">
        <span className="todo-item-item">
          <FormCheck checked={todo.completed} />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span className="todo-item-delete-button">X</span>
      </ListGroupItem>
    );
  }
}

export default TodoItem;
