import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import FormCheck from "react-bootstrap/FormCheck";
import { TOGGLE_TODO, DELETE_TODO } from "../store/redux-store";
import { connect } from "react-redux";

class TodoItem extends React.Component {
  handleToggleTodoClick() {
    const { todo, toggleTodo } = this.props;

    toggleTodo(todo.id);
  }

  handleRemoveTodoClick() {
    const { todo, removeTodo } = this.props;

    removeTodo(todo.id);
  }

  render() {
    const { todo } = this.props;
    const textClass = todo.completed
      ? "todo-item-text todo-item-completed"
      : "todo-item-text";

    return (
      <ListGroupItem className="todo-item">
        <span
          className="todo-item-item"
          onClick={this.handleToggleTodoClick.bind(this)}
        >
          <FormCheck readOnly checked={todo.completed} />
          <span className={textClass}>{todo.text}</span>
        </span>
        <span
          className="todo-item-delete-button"
          onClick={this.handleRemoveTodoClick.bind(this)}
        >
          X
        </span>
      </ListGroupItem>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: (id) => dispatch({ type: TOGGLE_TODO, payload: id }),
    removeTodo: (id) => dispatch({ type: DELETE_TODO, payload: id }),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
