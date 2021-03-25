import React from "react";
import Header from "../header/header";
import Footer from "../Footer/footer";
import Popular from "./PopularMovies"
import Top from "./TopMovies"
import Latest from "./LatestMovies"
import "./Home.css";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="filmPart">
        <span className="titleCategorie">Nouveauté</span>
          <Latest />
        <div className="videoWrapper">
        </div>
      </div>
      <div className="filmPart">
        <span className="titleCategorie">Top 10</span>
        <div className="videoWrapper">
          <Top />
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
