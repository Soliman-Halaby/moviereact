import React from "react";
import FilmImage from "../../assets/images/image.png";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../assets/images/arrowLeft.svg";
import Rating from "../Rating/Rating";
import "./Filmdisplay.css";

export default function Filmdisplay(props) {
  return (
    <div className="filmDisplay">
      <NavLink to="/" className="headerTabs">
        <img className="arrowLeft" alt="Arrow Left" src={ArrowLeft}></img>
      </NavLink>
      <img className="filmImage" alt="Film Image" src={FilmImage}></img>
      <div className="filmInformation">
        <span className="pageFilmTitle">Joker</span>
        <div className="styleRate">
          <span className="pageFilmStyle">Thriller</span>
        </div>
        <Rating position="ratingStart" />
        <div className="moreInfo">
          <span className="pageFilmDate">2019</span>
          <span className="pageFilmDuration">122 minutes</span>
        </div>
        <span className="pageFilmDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor.
        </span>
      </div>
    </div>
  );
}
