import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getNasaData } from "./store/redux-store";

function App() {
  const dispatch = useDispatch();
  const nasaData = useSelector((state) => state.nasaData);

  useEffect(() => {
    dispatch(getNasaData());
  }, [dispatch]);

  if (!nasaData.title) {
    return (
      <div className="App">
        <p>Loading NASA data...</p>
      </div>
    );
  }
  console.log(nasaData);
  return (
    <div className="App">
      <h1>NASA Picture of the day</h1>
      <h3>{nasaData.title}</h3>
      <img src={nasaData.url} alt={nasaData.title} width={500} />
      <p>{nasaData.explanation}</p>
    </div>
  );
}

export default App;
