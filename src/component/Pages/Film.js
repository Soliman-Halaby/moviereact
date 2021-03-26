import React from "react";
import Header from "../header/noheader";
import Filmdisplay from "../VideoDisplay/Filmdisplay";
import "./Film.css";
// import video1 from "../../assets/videos/banana.mp4";
import image from "../../assets/images/image.png";
import play from "../../assets/logos/play.svg"



function Film(props) {
  // console.log(useGetFilms);
  // console.log(this.props.movieName);
  const About =(props) => {
    console.log("aboutRB",props.location.filmName);
  }
  return (
    <div className="containerFilm">
      <h1>{props.movieName}</h1>
      <Header />
      <Filmdisplay
      imgSrc = {image}
      svgSrc = {play}
      />

    </div>
  );
}

export default Film;
