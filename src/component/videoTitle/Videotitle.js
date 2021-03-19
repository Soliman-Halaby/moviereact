import React from "react";
import imageFilm from "../../assets/images/lucifer.jpeg";
import "./Videotitle.css";

export default function Videotitle(props) {
  return (
    <div className="videoTitleContainer">
      <div className="filmInfo">
        <img
          alt="Film Informations"
          className="imageFilm"
          src={imageFilm}
        ></img>
        <span className="filmTitle">DeadPool</span>
        <span className="filmStyle">Action</span>
        <span className="filmGrade">
          7.4<span className="onTen">/10</span>
        </span>
      </div>
    </div>
  );
}
