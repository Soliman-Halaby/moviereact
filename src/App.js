import Videotitle from "./component/videoTitle/Videotitle";
import Header from "./component/header/header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./Routes";
import useGetFilm from "./hooks/useMyApi";



function App() {
  const useGetFilms = useGetFilm();

  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
      <p>{useGetFilms}</p>
    </Router>
  );
}

export default App;
