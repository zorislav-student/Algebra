import React from "react";
import "./App.css";
import { connect } from "react-redux";

import { VisibilityToolbar, AddTodoForm, TodoList } from "./components";
import { VISIBILITY_TYPES } from "./constants/const";
import { REMOVE_ALL_COMPLETED } from "./store/redux-store";

class App extends React.Component {
  state = {
    visibility: VISIBILITY_TYPES.ALL,
  };

  componentDidMount() {
    const pathName = window.location.href;

    if (pathName.includes(VISIBILITY_TYPES.ACTIVE)) {
      this.setState({ visibility: VISIBILITY_TYPES.ACTIVE });
    }
    if (pathName.includes(VISIBILITY_TYPES.COMPLETED)) {
      this.setState({ visibility: VISIBILITY_TYPES.COMPLETED });
    }
  }

  componentDidUpdate() {
    const { todos } = this.props;
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  handleRemoveCompleted() {
    const { removeTodo } = this.props;

    removeTodo();
  }

  handleVisibilityChange(newVisibility) {
    this.setState({ visibility: newVisibility });
  }

  getVisibleTodos() {
    const { visibility } = this.state;
    const { todos } = this.props;

    if (visibility === VISIBILITY_TYPES.ALL) {
      return todos;
    }

    if (visibility === VISIBILITY_TYPES.COMPLETED) {
      return todos.filter((todo) => todo.completed);
    }

    return todos.filter((todo) => !todo.completed);
  }

  render() {
    const { visibility } = this.state;
    const visibleTodos = this.getVisibleTodos();

    return (
      <div className="app">
        <h1 className="header">My tasks</h1>
        <VisibilityToolbar
          visibilityType={visibility}
          onVisibilityChange={this.handleVisibilityChange.bind(this)}
        />
        <div className="todo-container">
          <AddTodoForm />
          <TodoList todos={visibleTodos} />
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

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: () => dispatch({ type: REMOVE_ALL_COMPLETED }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
