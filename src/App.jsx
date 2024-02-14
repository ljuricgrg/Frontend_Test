import "./App.scss";
import { NavigationBar } from "./components/Navbar";
import { Features } from "./components/Features";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Features></Features>
    </div>
  );
}

export default App;
