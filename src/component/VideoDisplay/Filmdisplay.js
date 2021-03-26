import React from "react";
import FilmImage from "../../assets/images/image.png";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../assets/images/arrowLeft.svg";
import Rating from "../Rating/Rating";
import "./Filmdisplay.css";
import extLinkImg from "../../assets/images/externalLinkImg.svg";
import Casting from "../Casting/CastingComponent";
export default function Filmdisplay(props) {
  return (
    <div className="filmDisplay">
      <NavLink to="/" className="headerTabs">
        <img className="arrowLeft" alt="Arrow Left" src={ArrowLeft}></img>
      </NavLink>
      <div className="externalLink">
        <a href={props.urlSrc} target="_blank">
          <img src={extLinkImg}></img>
        </a>
      </div>
      <img className="filmImage" alt="Film Image" src={props.src}></img>
      <div className="filmInformation">
        <span className="pageFilmTitle">{props.title}</span>
        <div className="styleRate">
          <span className="pageFilmStyle">{props.genres}</span>
        </div>
        <Rating position="ratingStart" rate={props.voteAve} />
        <div className="moreInfo">
          <span className="pageFilmDate">{props.releasedYear}</span>
          <span className="pageFilmDuration">{props.runtime} minutes</span>
        </div>
        <span className="pageFilmDescription">{props.overview}</span>
        <span className="castingTitle">Casting</span>
        <div className="castingWrap">
          <Casting />
          <Casting />
          <Casting />
          <Casting />
          <Casting />
          <Casting />
          <Casting />
        </div>
      </div>
    </div>
  );
}

{
  /* <a src={props.urlSrc}></a> */
}
