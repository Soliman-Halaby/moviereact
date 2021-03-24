import React from "react";
import "./Videotitle.css";

export default function Videotitle(props) {
  return (
    <div className="videoTitleContainer">
      <div className="filmInfo">
        <img
          draggable="false"
          alt={props.alt}
          className="imageFilm"
          src={props.src}
        ></img>
        <span className="filmTitle">{props.filmTitle}</span>
        <span className="filmStyle">{props.filmStyle}</span>
        <span className="filmGrade">{props.filmGrade}
          <span className="onTen">{props.onTen}</span>
        </span>
      </div>
    </div>
  );
}
