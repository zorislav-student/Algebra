import { useState } from "react";
import "./App.css";
import { UserForm, GithubUser, GithubRepos } from "./components";
import { GithubApi } from "./services";

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  function getData(userName) {
    Promise.all([
      GithubApi.fetchUser(userName),
      GithubApi.fetchUserRepos(userName),
    ]).then(([user, repos]) => {
      setUser(user);
      setRepos(repos);
    });
  }

  function handleResetUser() {
    setUser(null);
  }

  if (!user) {
    return (
      <div className="App">
        <UserForm setUser={getData} />
      </div>
    );
  }

  return (
    <div className="App">
      <GithubUser user={user} />
      <GithubRepos repos={repos} />
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={handleResetUser}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

const styles = {
  button: {
    marginTop: 20,
    width: "100%",
  },
  buttonContainer: {
    textAlign: "center",
  },
};
