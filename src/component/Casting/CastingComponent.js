import React from "react";
import CastingImg from "../../assets/images/castingImg.jpeg";
import "./Casting.css";

export default function Casting(props) {
  return (
    <div className="castingContainer">
      <img className="castingImg" src={CastingImg}></img>
      <span className="actorName">Zazie</span>
      <span className="foreName">Beetz</span>
    </div>
  );
}
