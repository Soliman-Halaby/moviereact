import React from "react";
import "./noheader.css";
import Logo from "../../assets/logos/logo.svg";
import { BrowserRouter as Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import SearchResult from "../SearchBar/searchResult";
// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
  return (
    // <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <a href="/"><img className="logoImg" src={Logo} alt="test" /></a>
        </div>
        <div className="searchBar">
          <SearchBar />
          {/* <SearchResult /> */}
        </div>
      </div>
    // </div>
  );
}

export default Header;
