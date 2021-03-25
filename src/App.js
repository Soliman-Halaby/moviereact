import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
