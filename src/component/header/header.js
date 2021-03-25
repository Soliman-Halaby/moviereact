import React from "react";
import "./header.css";
import Logo from "../../assets/logos/logo.svg";
import { BrowserRouter as Link } from "react-router-dom";
import SearchBar from "..//SearchBar/SearchBar"

// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <img src={Logo} alt="test" />
        </div>
      <SearchBar />
      </div>
      <div className="tabs">
        <Link to="/film" className="headerTabs">
          Film
        </Link>
        <Link to="/" className="headerTabs">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
