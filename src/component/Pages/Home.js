import React from "react";
import Header from "../header/header";
import Videotitle from "../videoTitle/Videotitle";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Home.css";
import Carousel from "./gallery.js";
import Footer from "../Footer/footer";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="filmPart">
        <span className="titleCategorie">Nouveauté</span>
        <div className="videoWrapper">
          <Carousel />
          {/* carousel is the alice carousel component */}
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
      <Footer />
    </div>
  );
}
