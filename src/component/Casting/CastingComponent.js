import React from "react";
import CastingImg from "../../assets/images/castingImg.jpeg";
import "./Casting.css";
import Casting from "./Casting"

export default class CastingComponent extends React.Component {
  render() {
    console.log(this.props.movieId['movieId']);
    return (
      <div className="castingContainer">
        <Casting movieId= {this.props.movieId}/>
        <span className="actorName">Zazie</span>
        <span className="foreName">Beetz</span>
      </div>
    );
  }
  }
