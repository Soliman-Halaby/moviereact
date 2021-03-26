import React from "react";
import Header from "../header/header";
import Footer from "../Footer/footer";
import Carousel from "../Carousel/Carousel"
import "./Home.css";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="filmPart">
        <span className="titleCategorie">Nouveauté</span>
          <Carousel 
            sortBy= {"upcoming"}
          />
        <div className="videoWrapper">
        </div>
      </div>
      <div className="filmPart">
        <span className="titleCategorie">Top 10</span>
        <div className="videoWrapper">
          <Carousel 
            sortBy= {"top_rated"}
          />
        </div>
      </div>
      <div className="filmPart">
        <span className="titleCategorie">Populaire</span>
        <div className="videoWrapper">
          <Carousel 
            sortBy= {"popular"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
