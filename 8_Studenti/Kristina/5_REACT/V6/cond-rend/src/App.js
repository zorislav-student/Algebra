import React from "react";
import "./App.css";
function ConditionalRendering(props) {
  const text = props.number === 1 ? <h2>Ivan</h2> : <h2>Luka</h2>;
}
const { number } = props;
return (
  <>
    <h2>Number?</h2>
    {text}
    {props.number === 2 && <h3>Luka</h3>}
    {props.number === 3 && <h3>Marko</h3>}
  </>
);

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
