import React from "react";
import Header from "../header/noheader";
import Videodisplay from "../VideoDisplay/Videodisplay";
import "./Film.css";
// import video1 from "../../assets/videos/banana.mp4";
import image from "../../assets/images/image.png";
import play from "../../assets/logos/play.svg"



function Film() {
  // console.log(useGetFilms);
  return (
    
    <div className="containerFilm">
      <Header />
      <Videodisplay
      imgSrc = {image}
      svgSrc = {play}
      />

    </div>
  );
}

export default Film;
