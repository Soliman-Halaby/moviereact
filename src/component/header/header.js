import React from "react";
import "./header.css";
import Logo from "../../assets/logos/logo.svg";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
// import logo from '../../assets/logos/logo.png;';
// import iconHeart from './images/heart-red.svg';

function Header(props) {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <NavLink to="/">
            <img className="logoImg" src={Logo} alt="test" />
          </NavLink>
        </div>
        <div className="searchBar">
          <SearchBar />
          {/* <SearchResult /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
