import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { ADD_TODO } from "../store/redux-store";
import { connect } from "react-redux";

class AddTodoForm extends React.Component {
  state = {
    newItem: "",
  };

  handleChange(event) {
    const newItem = event.target.value;
    this.setState({ newItem: newItem });
  }

  handleAddTodo(event) {
    event.preventDefault();

    const { addTodo } = this.props;
    const { newItem } = this.state;

    if (!newItem || !newItem.trim()) return;

    addTodo(newItem);

    this.setState({ newItem: "" });
  }

  render() {
    const { newItem } = this.state;

    return (
      <InputGroup size="lg">
        <FormControl
          className="f-control"
          value={newItem}
          onChange={this.handleChange.bind(this)}
          placeholder="Add Todo"
        ></FormControl>
        <Button variant="primary" onClick={this.handleAddTodo.bind(this)}>
          Add
        </Button>
      </InputGroup>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (textValue) => {
      dispatch({
        type: ADD_TODO,
        payload: {
          id: Math.random().toString(32).substring(2, 10),
          text: textValue,
          completed: false,
        },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddTodoForm);
