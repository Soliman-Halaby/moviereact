import React from "react";
import Header from "../header/header";
import Videodisplay from "../VideoDisplay/Videodisplay";
import video1 from "../../assets/videos/banana.mp4";



function Film() {
  // console.log(useGetFilms);
  return (
    
    <div className="containerFilm">
      <Header />
      <Videodisplay
      videoSrc = {video1}/>
    // 
    </div>
  );
}

export default Film;
