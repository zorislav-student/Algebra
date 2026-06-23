import "./App.css";
import { GroceriesList } from "./components/GroceriesList";
import { GroceryAdd } from "./components/GroceryAdd";

function App() {
  return (
    <div className="App">
      <h1> My Groceries _Powered by Mobx!</h1>
      <GroceriesList />
      <GroceryAdd />
    </div>
  );
}

export default App;
