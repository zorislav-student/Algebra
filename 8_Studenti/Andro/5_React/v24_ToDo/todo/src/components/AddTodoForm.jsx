import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

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

export default AddTodoForm;
