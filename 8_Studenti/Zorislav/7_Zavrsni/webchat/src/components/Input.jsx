import React from "react";

class Input extends React.Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { onSendMessage } = this.props;
    const { text } = this.state;

    onSendMessage(text);

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="input-container">
        <form onSubmit={this.handleSubmit}>
          <input
            value={text}
            onChange={this.handleChange}
            type="text"
            placeholder="Enter your message"
            autoFocus
          />
          <button className="send-button">Send</button>
        </form>
      </div>
    );
  }
}

export default Input;
