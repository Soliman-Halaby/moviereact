import React from "react";
import Header from "../header/header";
import Videotitle from "../videoTitle/Videotitle";
import "./Home.css";
import Footer from "../Footer/footer";
import Popular from "./PopularMovie"

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="filmPart">
        <span className="titleCategorie">Nouveauté</span>
        <div className="videoWrapper">
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
          <Popular />
        </div>
      </div>
      <Footer />
    </div>
  );
}
