import React from "react";
import "./Videotitle.css";
import Rating from "../Rating/Rating"
import { BrowserRouter as Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const rate = 6

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
        <div class="infos center">
        <NavLink to="/film" className="underlineNone">
          <span className="filmTitle center">{props.filmTitle}</span>
        </NavLink>
          <div class="subcontainer">
            <span className="filmStyle center">{props.filmStyle}</span>
            <Rating 
              rate= {props.filmGrade}
            />
            <span className="rateText">
              <span>{props.filmGrade}</span>
              <span>/10</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
