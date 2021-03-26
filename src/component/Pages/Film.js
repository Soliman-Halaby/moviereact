import React from "react";
// import Header from "../header/noheader";
import Filmdisplay from "../VideoDisplay/Filmdisplay";
import "./Film.css";
// import video1 from "../../assets/videos/banana.mp4";
import image from "../../assets/images/image.png";
import play from "../../assets/logos/play.svg";

function Film() {
  // console.log(useGetFilms);
  // console.log(this.props.movieName);
  const About = (props) => {
    console.log("aboutRB", props.location.filmName);
  };
  return (
    <div className="containerFilm">
      {/* <Header /> */}
      <Filmdisplay />
    </div>
  );
}

export default Film;
