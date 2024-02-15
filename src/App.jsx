import "./App.scss";
import { NavigationBar } from "./components/Navbar";
import { Features } from "./components/Features";
import { Destinations } from "./components/Destinations";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Features></Features>
      <Destinations></Destinations>
      <Newsletter></Newsletter>
    </div>
  );
}

export default App;
