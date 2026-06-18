import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";

class App extends React.Component {
  /* state = {
    todos: [
      { id: "1", text: "Kupiti novine", completed: false },
      { id: "2", text: "Prošetati psa", completed: false },
      { id: "3", text: "Oprati auto", completed: true },
    ],
  };*/
  state = {
    todos: JSON.parse(localStorage.getItem("todos") || "[]"),
    visibility: VISIBILITY_TYPES.ALL,
  };
  componentDidUpdate() {
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleAddTodo(value) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.random().toString(32).substring(2, 10),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  handleToggleTodo(id) {
    const { todos } = this.state;
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    this.setState({ todos });
  }

  handleRemoveTodo(id) {
    const { todos } = this.state;

    const newTodos = todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  }

  handleRemoveCompleted() {
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: newTodos });
  }

  handleVisibilityChange(newVisibility) {
    this.setState({ visibility: newVisibility });
  }

  getVisibleTodos() {
    const { todos, visibility } = this.state;

    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }

    return todos.filter((todo) => !todo.completed);
  }

  render() {
    const { todos, visibility } = this.state;

    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList
            todos={visibleTodos}
            toggleTodo={this.handleToggleTodo.bind(this)}
            removeTodo={this.handleRemoveTodo.bind(this)}
          />
        </div>
        <div>
          <span
            onClick={this.handleRemoveCompleted.bind(this)}
            className="btn-clear-completed"
          >
            Clear completed
          </span>
        </div>
      </div>
    );
  }
}

export default App;
