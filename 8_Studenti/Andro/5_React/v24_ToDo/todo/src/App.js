import React from "react";
import "./App.css";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";

class App extends React.Component {
  state = {
    todos: [
      { id: "1", text: "Kupiti novine", completed: false },
      { id: "2", text: "Prošetati psa", completed: false },
      { id: "3", text: "Oprati auto", completed: true },
    ],
  };

  handleAddTodo(value) {
    const { todos } = this.state;

    const newTodo = {
      id: Math.random().toString(32).substring(2, 10),
      text: value,
      completed: false,
    };

    this.setState({ todos: [...todos, newTodo] });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <h1 className="header">My Tasks</h1>
        <VisibilityToolbar />
        <div classNae="todo-container">
          <AddTodoForm addTodo={this.handleAddTodo.bind(this)} />
          <TodoList todos={todos} />
        </div>
        <div>
          <span className="btn-clear-completed">Clear completed</span>
        </div>
      </div>
    );
  }
}

export default App;
