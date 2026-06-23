import { useState } from "react";
import "./App.css";
import { UserForm, GithubUser, GithubRepos } from "./components";

function App() {
  const [user, setUser] = useState("1");

  if (!user) {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }

  return (
    <div className="App">
      <GithubUser />
      <GithubRepos />
    </div>
  );
}

export default App;
