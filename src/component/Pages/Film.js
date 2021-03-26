import React from "react";
import Filmdisplay from "../VideoDisplay/Filmdisplay";
import "./Film.css";
// import video1 from "../../assets/videos/banana.mp4";
import image from "../../assets/images/image.png";
import play from "../../assets/logos/play.svg";

function Film(props) {
  // console.log(useGetFilms);
  // console.log(this.props.movieName);
  const About = (props) => {
    console.log("aboutRB", props.location.filmName);
  };
  return (
    <div className="containerFilm">
      <Filmdisplay />
    </div>
  );
}

export default Film;
