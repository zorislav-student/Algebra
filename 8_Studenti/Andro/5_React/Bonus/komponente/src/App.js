import React, { useState } from "react";
import "./App.css";

class ClassKomponenta extends React.Coomponent {
  render() {
    return (
      <>
        <h2>Class komponenta</h2>
      </>
    );
  }
}

function FunckijskaKomponenta({ ime, starost, grad, children, onAppSt }) {
  const [fnStanje, setFnStanje] = useState("Fn pocetno stanje");

  function btnClickHandler() {
    setFnStanje("fn novo stanje");
  }

  return (
    <>
      {fnStanje}
      <h2>{children} komponenta</h2>
      <p>Ime: {ime}</p>
      <p>Starost: {starost}</p>
      <p>Grad: {grad}</p>
      <button onClick={btnClickHandler}>Promijeni lokalno stanje</button>
      <button
        onClick={() => onAppSt("App novo stanje iz funkcijske komponente")}
      >
        Promijeni App stanje
      </button>
    </>
  );
}

function App() {
  const [appStanje, setAppStanje] = useState("App pocetno stanje");

  function appStanjeHandler(novoStanje) {
    setAppStanje(novoStanje);
  }

  return (
    <div className="App">
      {appStanje}
      <h1>App komponenta</h1>
      <FunckijskaKomponenta
        ime="Ivica"
        starost={25}
        grad="Osijek"
        onAppSt={appStanjeHandler}
      >
        Funkcijska
      </FunckijskaKomponenta>
      <ClassKomponenta />
    </div>
  );
}

export default App;
