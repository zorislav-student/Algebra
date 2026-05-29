import "./App.css";
import { useState } from "react";
import { UserFunction } from "./user";
import { UseChildren } from "./user";
import { UserClass } from "./user";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Ivan",
      years: 30,
    },
    {
      name: "marko",
      years: 25,
    },
    {
      name: "Ana",
      years: 25,
    },
  ]);

  const [childrenText] = useState("A hobi mi je plivanje");

  const btnClickHandler = () => {
    const newUsers = users.map((user) => {
      return { ...user, years: user.years + 1 };
    });

    setUsers(newUsers);
  };

  setUsers(newUsers);
  return (
    <div className="App">
      <h1>React aplikacija</h1>
      <p>ovo zaista radi</p>
      <UserFunction ime={users[0].name} godine={users[0].years} />
      <UserClass ime={users[1].name} godine={users[1].years} />
      <UseChildren ime={users[2].name} godine={users[2].years}>
        {childrenText}
      </UseChildren>
      <button onClick={btnClickHandler}>Promjena godina</button>
    </div>
  );
}

export default App;
