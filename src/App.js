import Videotitle from "./component/videoTitle/Videotitle";
import Header from "./component/header/header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routes from "./Routes";
import useGetFilm from "./hooks/useGetFilm";
import getPopularMovie from "./hooks/getPopularMovie";



function App() {
  // const useGetFilms = useGetFilm("pulp+fiction");
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
