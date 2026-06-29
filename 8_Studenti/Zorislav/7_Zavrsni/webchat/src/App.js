import React from "react";
import "./App.css";
import { Message, Input } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>My Chat App</h1>
        </div>
        <ul>
          <Message />
        </ul>
        <Input />
      </div>
    );
  }
}

export default App;
