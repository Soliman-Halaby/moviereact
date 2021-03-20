import React from "react";
import Header from "../header/header";
import Videotitle from "../videoTitle/Videotitle";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'

import "./Home.css";
import Gallery from "./gallery.js";


export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="filmPart">
        <span className="titleCategorie">Nouveauté</span>
        <div className="videoWrapper">
        <Gallery  />
        </div>
      </div>
      <div className="filmPart">
        <span className="titleCategorie">Top 10</span>
        <div className="videoWrapper">
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
        </div>
      </div>
      <div className="filmPart">
        <span className="titleCategorie">Populaire</span>
        <div className="videoWrapper">
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
          <Videotitle />
        </div>
      </div>
    </div>
  );
}
