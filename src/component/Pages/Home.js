import React from "react";
import Header from "../header/header";
import Videotitle from "../videoTitle/Videotitle";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="videoWrapper">
        <Videotitle />
      </div>
    </div>
  );
}
